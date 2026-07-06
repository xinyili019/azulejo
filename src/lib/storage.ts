import { wordBank, WORDBANK_VERSION } from "../data/wordBank";
import type { ActiveSessionState, LastLocationState, ProgressState } from "../types";
import { migrateProgressKeys, normalizeProgress } from "./progress";

const DATABASE_NAME = "azulejo";
const STORE_NAME = "kv";
const DATABASE_VERSION = 1;
const LEGACY_PROGRESS_STORAGE_KEY = "pt-a2-vocab-progress";
const MIRROR_STORAGE_KEY = "pt-a2-vocab-progress-mirror";
const ACTIVE_SESSION_MIRROR_KEY = "pt-a2-vocab-active-session-mirror";
const LAST_LOCATION_MIRROR_KEY = "pt-a2-vocab-last-location-mirror";
const PROGRESS_KEY = "progress";
const SETTINGS_KEY = "settings";
const ACTIVE_SESSION_KEY = "activeSession";
const LAST_LOCATION_KEY = "lastLocation";

type SettingsState = Record<string, unknown>;

interface StoredProgressPayload {
  app: "azulejo";
  schemaVersion: 1;
  wordbankVersion: number;
  progress: ProgressState;
}

interface StoredExportPayload extends StoredProgressPayload {
  exportedAt: string;
  settings: SettingsState;
  activeSession?: ActiveSessionState;
  lastLocation?: LastLocationState;
}

let databasePromise: Promise<IDBDatabase | null> | null = null;
let migrationPromise: Promise<void> | null = null;

export async function getProgress(): Promise<ProgressState> {
  await ensureMigrated();
  const stored = await getValue<StoredProgressPayload>(PROGRESS_KEY);
  if (stored?.progress) return normalizeAndMigrate(stored.progress);

  const fallback = readLocalProgressFallback();
  if (Object.keys(fallback).length > 0) {
    await setProgress(fallback);
    return fallback;
  }

  return {};
}

export async function setProgress(progressObject: ProgressState): Promise<void> {
  const progress = normalizeAndMigrate(progressObject);
  const payload = createProgressPayload(progress);
  await setValue(PROGRESS_KEY, payload);
  writeLocalMirror(payload);
}

export async function getSetting<T = unknown>(key: string): Promise<T | undefined> {
  await ensureMigrated();
  const settings = (await getValue<SettingsState>(SETTINGS_KEY)) ?? {};
  return settings[key] as T | undefined;
}

export async function getActiveSession(): Promise<ActiveSessionState | undefined> {
  await ensureMigrated();
  return (await getValue<ActiveSessionState>(ACTIVE_SESSION_KEY)) ?? readLocalActiveSessionFallback();
}

export async function setActiveSession(session: ActiveSessionState): Promise<void> {
  writeJsonMirror(ACTIVE_SESSION_MIRROR_KEY, session);
  await setValue(ACTIVE_SESSION_KEY, session);
}

export async function clearActiveSession(): Promise<void> {
  await deleteValue(ACTIVE_SESSION_KEY);
  removeJsonMirror(ACTIVE_SESSION_MIRROR_KEY);
}

export async function getLastLocation(): Promise<LastLocationState | undefined> {
  await ensureMigrated();
  return (await getValue<LastLocationState>(LAST_LOCATION_KEY)) ?? readLocalLastLocationFallback();
}

export async function setLastLocation(location: LastLocationState): Promise<void> {
  writeJsonMirror(LAST_LOCATION_MIRROR_KEY, location);
  await setValue(LAST_LOCATION_KEY, location);
}

export async function setSetting(key: string, value: unknown): Promise<void> {
  await ensureMigrated();
  const settings = (await getValue<SettingsState>(SETTINGS_KEY)) ?? {};
  await setValue(SETTINGS_KEY, { ...settings, [key]: value });
}

export async function exportAll(): Promise<StoredExportPayload> {
  await ensureMigrated();
  return {
    ...createProgressPayload(await getProgress()),
    exportedAt: new Date().toISOString(),
    settings: (await getValue<SettingsState>(SETTINGS_KEY)) ?? {},
    activeSession: await getActiveSession(),
    lastLocation: await getLastLocation()
  };
}

export async function importAll(object: unknown): Promise<void> {
  const payload = validateImportPayload(unwrapImportPayload(object));
  await setProgress(payload.progress);
  await setValue(SETTINGS_KEY, payload.settings);
  if (payload.activeSession) await setActiveSession(payload.activeSession);
  else await clearActiveSession();
  if (payload.lastLocation) await setLastLocation(payload.lastLocation);
  else {
    await deleteValue(LAST_LOCATION_KEY);
    removeJsonMirror(LAST_LOCATION_MIRROR_KEY);
  }
}

async function ensureMigrated(): Promise<void> {
  if (!migrationPromise) {
    migrationPromise = (async () => {
      const stored = await getValue<StoredProgressPayload>(PROGRESS_KEY);
      if (!stored?.progress || stored.wordbankVersion !== WORDBANK_VERSION) {
        const fallback = readLocalProgressFallback();
        if (Object.keys(fallback).length > 0) await setProgress(fallback);
      }
      await requestPersistentStorage();
    })();
  }

  return migrationPromise;
}

async function requestPersistentStorage() {
  if (typeof navigator === "undefined" || !navigator.storage?.persist) return;

  try {
    const persisted = await navigator.storage.persist();
    const settings = (await getValue<SettingsState>(SETTINGS_KEY)) ?? {};
    await setValue(SETTINGS_KEY, { ...settings, storagePersisted: persisted });
  } catch {
    const settings = (await getValue<SettingsState>(SETTINGS_KEY)) ?? {};
    await setValue(SETTINGS_KEY, { ...settings, storagePersisted: false });
  }
}

function createProgressPayload(progress: ProgressState): StoredProgressPayload {
  return {
    app: "azulejo",
    schemaVersion: 1,
    wordbankVersion: WORDBANK_VERSION,
    progress
  };
}

function normalizeAndMigrate(progress: unknown): ProgressState {
  return migrateProgressKeys(normalizeProgress(progress), wordBank);
}

function readLocalProgressFallback(): ProgressState {
  const mirror = readJson(MIRROR_STORAGE_KEY);
  if (isProgressPayload(mirror)) return normalizeAndMigrate(mirror.progress);

  const legacy = readJson(LEGACY_PROGRESS_STORAGE_KEY);
  return normalizeAndMigrate(legacy);
}

function writeLocalMirror(payload: StoredProgressPayload) {
  writeJsonMirror(MIRROR_STORAGE_KEY, payload);
}

function writeJsonMirror(key: string, value: unknown) {
  try {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Best-effort survival path only.
  }
}

function removeJsonMirror(key: string) {
  try {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(key);
  } catch {
    // Best-effort survival path only.
  }
}

function readJson(key: string): unknown {
  try {
    if (typeof window === "undefined") return undefined;
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : undefined;
  } catch {
    return undefined;
  }
}

function readLocalActiveSessionFallback(): ActiveSessionState | undefined {
  const value = readJson(ACTIVE_SESSION_MIRROR_KEY);
  return isActiveSession(value) ? value : undefined;
}

function readLocalLastLocationFallback(): LastLocationState | undefined {
  const value = readJson(LAST_LOCATION_MIRROR_KEY);
  return isLastLocation(value) ? value : undefined;
}

function unwrapImportPayload(object: unknown): unknown {
  if (
    object &&
    typeof object === "object" &&
    (object as { app?: unknown }).app === "azulejo" &&
    (object as { data?: unknown }).data &&
    typeof (object as { data?: unknown }).data === "object"
  ) {
    return (object as { data: unknown }).data;
  }

  return object;
}

function validateImportPayload(object: unknown): StoredExportPayload {
  if (!object || typeof object !== "object") {
    throw new Error("Import payload must be an object.");
  }

  const payload = object as Partial<StoredExportPayload>;
  if (payload.app !== "azulejo" || !payload.progress || typeof payload.progress !== "object") {
    throw new Error("Import payload is not an Azulejo progress backup.");
  }

  return {
    app: "azulejo",
    schemaVersion: 1,
    wordbankVersion: typeof payload.wordbankVersion === "number" ? payload.wordbankVersion : WORDBANK_VERSION,
    exportedAt: typeof payload.exportedAt === "string" ? payload.exportedAt : new Date().toISOString(),
    progress: normalizeAndMigrate(payload.progress),
    settings: payload.settings && typeof payload.settings === "object" ? (payload.settings as SettingsState) : {},
    activeSession: isActiveSession(payload.activeSession) ? payload.activeSession : undefined,
    lastLocation: isLastLocation(payload.lastLocation) ? payload.lastLocation : undefined
  };
}

function isActiveSession(value: unknown): value is ActiveSessionState {
  if (!value || typeof value !== "object") return false;
  const session = value as Partial<ActiveSessionState>;
  return Boolean(
    (session.mode === "manual" || session.mode === "situacoes") &&
      typeof session.moduleOrScenarioId === "string" &&
      typeof session.direction === "string" &&
      Array.isArray(session.queue) &&
      session.queue.every((id) => typeof id === "string") &&
      Number.isInteger(session.position) &&
      Array.isArray(session.againQueue) &&
      session.againQueue.every((id) => typeof id === "string") &&
      typeof session.startedAt === "string" &&
      typeof session.updatedAt === "string"
  );
}

function isLastLocation(value: unknown): value is LastLocationState {
  if (!value || typeof value !== "object") return false;
  const location = value as Partial<LastLocationState>;
  return Boolean(
    (location.view === "manual" || location.view === "situacoes") &&
      location.params &&
      typeof location.params === "object" &&
      typeof location.updatedAt === "string"
  );
}

function isProgressPayload(value: unknown): value is StoredProgressPayload {
  return Boolean(
    value &&
      typeof value === "object" &&
      (value as Partial<StoredProgressPayload>).app === "azulejo" &&
      typeof (value as Partial<StoredProgressPayload>).progress === "object"
  );
}

async function getValue<T>(key: string): Promise<T | undefined> {
  const database = await getDatabase();
  if (!database) return undefined;

  return new Promise((resolve) => {
    const transaction = database.transaction(STORE_NAME, "readonly");
    const request = transaction.objectStore(STORE_NAME).get(key);
    request.onsuccess = () => resolve(request.result as T | undefined);
    request.onerror = () => resolve(undefined);
  });
}

async function setValue<T>(key: string, value: T): Promise<void> {
  const database = await getDatabase();
  if (!database) return;

  await new Promise<void>((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, "readwrite");
    const request = transaction.objectStore(STORE_NAME).put(value, key);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error ?? new Error(`Could not store ${key}.`));
  });
}

async function deleteValue(key: string): Promise<void> {
  const database = await getDatabase();
  if (!database) return;

  await new Promise<void>((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, "readwrite");
    const request = transaction.objectStore(STORE_NAME).delete(key);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error ?? new Error(`Could not delete ${key}.`));
  });
}

async function getDatabase(): Promise<IDBDatabase | null> {
  if (typeof window === "undefined" || !("indexedDB" in window)) return null;
  if (!databasePromise) databasePromise = openDatabase();
  return databasePromise;
}

function openDatabase(): Promise<IDBDatabase | null> {
  return new Promise((resolve) => {
    const request = window.indexedDB.open(DATABASE_NAME, DATABASE_VERSION);

    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(STORE_NAME)) database.createObjectStore(STORE_NAME);
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(null);
    request.onblocked = () => resolve(null);
  });
}
