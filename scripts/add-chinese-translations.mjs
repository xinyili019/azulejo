import { readFileSync, writeFileSync } from "node:fs";
import { request } from "node:https";

const fragmentFiles = [
  "src/data/fragments/modules-01-03.json",
  "src/data/fragments/modules-04-06.json",
  "src/data/fragments/modules-07-09.json",
  "src/data/fragments/modules-10-12.json"
];

const cache = new Map();
const manualTranslations = new Map(
  [
    ["a casa", ["房子/家", "房子/家"]],
    ["casa", ["房子/家", "房子/家"]],
    ["o quarto", ["房间/卧室", "房間/臥室"]],
    ["quarto", ["房间/卧室", "房間/臥室"]],
    ["a sala", ["客厅/房间", "客廳/房間"]],
    ["sala", ["客厅/房间", "客廳/房間"]],
    ["o andar", ["楼层/走路", "樓層/走路"]],
    ["andar", ["楼层/走路", "樓層/走路"]],
    ["a morada", ["地址/住址", "地址/住址"]],
    ["morada", ["地址/住址", "地址/住址"]],
    ["a localidade", ["地区/所在地", "地區/所在地"]],
    ["localidade", ["地区/所在地", "地區/所在地"]],
    ["o telemóvel", ["手机/移动电话", "手機/行動電話"]],
    ["telemóvel", ["手机/移动电话", "手機/行動電話"]],
    ["o passe", ["交通月票/通行证", "交通月票/通行證"]],
    ["passe", ["交通月票/通行证", "交通月票/通行證"]],
    ["a renda", ["房租/收入", "房租/收入"]],
    ["renda", ["房租/收入", "房租/收入"]],
    ["o recibo", ["收据/付款凭证", "收據/付款憑證"]],
    ["recibo", ["收据/付款凭证", "收據/付款憑證"]],
    ["o salário", ["工资/薪水", "工資/薪水"]],
    ["salário", ["工资/薪水", "工資/薪水"]],
    ["o ordenado", ["工资/薪水", "工資/薪水"]],
    ["ordenado", ["工资/薪水", "工資/薪水"]],
    ["o balcão", ["柜台/服务台", "櫃台/服務台"]],
    ["balcão", ["柜台/服务台", "櫃台/服務台"]],
    ["o cartão de cidadão", ["公民证/身份证", "公民證/身分證"]],
    ["cartão de cidadão", ["公民证/身份证", "公民證/身分證"]],
    ["a segurança social", ["社会保障/社保", "社會保障/社保"]],
    ["segurança social", ["社会保障/社保", "社會保障/社保"]],
    ["o centro de saúde", ["健康中心/社区诊所", "健康中心/社區診所"]],
    ["centro de saúde", ["健康中心/社区诊所", "健康中心/社區診所"]],
    ["a junta de freguesia", ["堂区委员会/地方办事处", "堂區委員會/地方辦事處"]],
    ["junta de freguesia", ["堂区委员会/地方办事处", "堂區委員會/地方辦事處"]],
    ["a freguesia", ["堂区/基层行政区", "堂區/基層行政區"]],
    ["freguesia", ["堂区/基层行政区", "堂區/基層行政區"]],
    ["o concelho", ["市镇/县区", "市鎮/縣區"]],
    ["concelho", ["市镇/县区", "市鎮/縣區"]]
  ].map(([term, translations]) => [normalizeTerm(term), translations])
);

for (const file of fragmentFiles) {
  const entries = JSON.parse(readFileSync(file, "utf8"));

  for (const entry of entries) {
    const manual = manualTranslations.get(normalizeTerm(entry.portuguese));
    if (manual) {
      entry.zhHans = manual[0];
      entry.zhHant = manual[1];
    } else {
      entry.zhHans = await translate(entry.english, "zh-CN");
      entry.zhHant = await translate(entry.english, "zh-TW");
    }
    writeFileSync(file, `${JSON.stringify(entries, null, 2)}\n`);
  }

  writeFileSync(file, `${JSON.stringify(entries, null, 2)}\n`);
  console.log(`Updated ${file}`);
}

async function translate(text, target) {
  const key = `${target}:${text}`;
  if (cache.has(key)) return cache.get(key);

  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "en");
  url.searchParams.set("tl", target);
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", text);

  const body = await getWithRetry(url);
  const parsed = JSON.parse(body);
  const translated = parsed?.[0]?.map((part) => part?.[0]).filter(Boolean).join("").trim();

  if (!translated) {
    throw new Error(`No translation returned for ${target}: ${text}`);
  }

  cache.set(key, translated);
  await new Promise((resolve) => setTimeout(resolve, 80));
  return translated;
}

async function getWithRetry(url) {
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      return await get(url);
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, attempt * 750));
    }
  }
  throw lastError;
}

function get(url) {
  return new Promise((resolve, reject) => {
    request(url, (response) => {
      let body = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => {
        body += chunk;
      });
      response.on("end", () => {
        if (response.statusCode && response.statusCode >= 400) {
          reject(new Error(`HTTP ${response.statusCode}: ${body}`));
          return;
        }
        resolve(body);
      });
    })
      .on("error", reject)
      .end();
  });
}

function normalizeTerm(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.,:;!?()[\]"]/g, "")
    .trim();
}
