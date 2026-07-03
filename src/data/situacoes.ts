import type { SituacaoContentLine, SituacaoGroup, SituacaoVocabularyRow } from "../types";

export const situacaoGroups: SituacaoGroup[] = [
  {
    "label": "Burocracia",
    "items": [
      {
        "id": "banco",
        "label": "Banco"
      },
      {
        "id": "financas",
        "label": "Finanças"
      },
      {
        "id": "correios",
        "label": "Correios"
      },
      {
        "id": "junta_de_freguesia",
        "label": "Junta de Freguesia"
      },
      {
        "id": "aima",
        "label": "AIMA"
      },
      {
        "id": "seguranca_social",
        "label": "Segurança Social"
      }
    ]
  },
  {
    "label": "Vida prática",
    "items": [
      {
        "id": "saude",
        "label": "Saúde"
      },
      {
        "id": "escola",
        "label": "Escola"
      },
      {
        "id": "arrendamento",
        "label": "Arrendamento"
      },
      {
        "id": "transportes",
        "label": "Transportes"
      }
    ]
  },
  {
    "label": "Trabalho",
    "items": [
      {
        "id": "iefp",
        "label": "IEFP"
      },
      {
        "id": "trabalho_hotelaria",
        "label": "Hotelaria"
      },
      {
        "id": "trabalho_restauracao",
        "label": "Restauração"
      },
      {
        "id": "trabalho_limpezas",
        "label": "Limpezas"
      },
      {
        "id": "trabalho_construcao",
        "label": "Construção"
      },
      {
        "id": "trabalho_entregas",
        "label": "Entregas"
      }
    ]
  }
];

export const situacaoLabels: Record<string, string> = {
  "banco": "Banco",
  "financas": "Finanças",
  "correios": "Correios",
  "junta_de_freguesia": "Junta de Freguesia",
  "saude": "Saúde",
  "aima": "AIMA",
  "escola": "Escola",
  "iefp": "IEFP",
  "seguranca_social": "Segurança Social",
  "arrendamento": "Arrendamento",
  "transportes": "Transportes",
  "trabalho_hotelaria": "Hotelaria",
  "trabalho_restauracao": "Restauração",
  "trabalho_limpezas": "Limpezas",
  "trabalho_construcao": "Construção",
  "trabalho_entregas": "Entregas"
};

export const situacaoVocabularyRows: SituacaoVocabularyRow[] = [
  {
    "situacao": "banco",
    "pt": "abrir uma conta à ordem",
    "en": "to open a current account",
    "zhHans": "開一個活期帳戶",
    "zhHant": "開一個活期帳戶"
  },
  {
    "situacao": "banco",
    "pt": "o IBAN",
    "en": "IBAN (bank account number)",
    "zhHans": "IBAN（國際銀行帳號）",
    "zhHant": "IBAN（國際銀行帳號）",
    "note": "Needed for salary, rent, utilities"
  },
  {
    "situacao": "banco",
    "pt": "o cartão multibanco",
    "en": "debit card (Multibanco)",
    "zhHans": "多功能提款卡（Multibanco）",
    "zhHant": "多功能提款卡（Multibanco）"
  },
  {
    "situacao": "banco",
    "pt": "o cartão de débito / de crédito",
    "en": "debit card / credit card",
    "zhHans": "扣賬卡／信用卡",
    "zhHant": "扣賬卡／信用卡"
  },
  {
    "situacao": "banco",
    "pt": "o extrato bancário",
    "en": "bank statement",
    "zhHans": "銀行對帳單",
    "zhHant": "銀行對帳單",
    "note": "Often requested as proof of funds"
  },
  {
    "situacao": "banco",
    "pt": "a transferência bancária",
    "en": "bank transfer",
    "zhHans": "銀行轉帳",
    "zhHant": "銀行轉帳"
  },
  {
    "situacao": "banco",
    "pt": "levantar dinheiro",
    "en": "to withdraw money",
    "zhHans": "提款",
    "zhHant": "提款"
  },
  {
    "situacao": "banco",
    "pt": "depositar dinheiro",
    "en": "to deposit money",
    "zhHans": "存款",
    "zhHant": "存款"
  },
  {
    "situacao": "banco",
    "pt": "o saldo",
    "en": "account balance",
    "zhHans": "帳戶餘額",
    "zhHant": "帳戶餘額"
  },
  {
    "situacao": "banco",
    "pt": "a comissão de manutenção",
    "en": "account maintenance fee",
    "zhHans": "帳戶管理費",
    "zhHant": "帳戶管理費"
  },
  {
    "situacao": "banco",
    "pt": "o comprovativo de morada",
    "en": "proof of address",
    "zhHans": "住址證明",
    "zhHant": "住址證明",
    "note": "Utility bill, rental contract or junta attestation"
  },
  {
    "situacao": "banco",
    "pt": "o titular da conta",
    "en": "account holder",
    "zhHans": "帳戶持有人",
    "zhHant": "帳戶持有人"
  },
  {
    "situacao": "banco",
    "pt": "o homebanking / a app do banco",
    "en": "online banking / banking app",
    "zhHans": "網上銀行／銀行應用程式",
    "zhHant": "網上銀行／銀行應用程式"
  },
  {
    "situacao": "banco",
    "pt": "o código PIN",
    "en": "PIN code",
    "zhHans": "密碼（PIN碼）",
    "zhHant": "密碼（PIN碼）"
  },
  {
    "situacao": "financas",
    "pt": "o NIF (número de identificação fiscal)",
    "en": "NIF (tax identification number)",
    "zhHans": "NIF（稅務識別號碼）",
    "zhHant": "NIF（稅務識別號碼）",
    "note": "First document most newcomers need"
  },
  {
    "situacao": "financas",
    "pt": "pedir o NIF",
    "en": "to apply for a NIF",
    "zhHans": "申請稅號",
    "zhHant": "申請稅號"
  },
  {
    "situacao": "financas",
    "pt": "o representante fiscal",
    "en": "tax representative",
    "zhHans": "稅務代表",
    "zhHant": "稅務代表",
    "note": "Only required for non-EU residents without PT address"
  },
  {
    "situacao": "financas",
    "pt": "a Autoridade Tributária (AT)",
    "en": "Tax Authority",
    "zhHans": "稅務局",
    "zhHant": "稅務局"
  },
  {
    "situacao": "financas",
    "pt": "o Portal das Finanças",
    "en": "the Finanças online portal",
    "zhHans": "財政入口網站",
    "zhHant": "財政入口網站",
    "note": "Password sent by post after registration"
  },
  {
    "situacao": "financas",
    "pt": "a senha de acesso",
    "en": "access password (portal login)",
    "zhHans": "登入密碼",
    "zhHant": "登入密碼"
  },
  {
    "situacao": "financas",
    "pt": "tirar a senha",
    "en": "to take a queue ticket",
    "zhHans": "取號（排隊票）",
    "zhHant": "取號（排隊票）",
    "note": "Same word 'senha' = ticket AND password"
  },
  {
    "situacao": "financas",
    "pt": "a declaração de IRS",
    "en": "income tax return",
    "zhHans": "個人所得稅申報表",
    "zhHant": "個人所得稅申報表"
  },
  {
    "situacao": "financas",
    "pt": "o domicílio fiscal",
    "en": "registered tax address",
    "zhHans": "稅務登記地址",
    "zhHant": "稅務登記地址"
  },
  {
    "situacao": "financas",
    "pt": "atualizar a morada",
    "en": "to update one's address",
    "zhHans": "更新地址",
    "zhHant": "更新地址"
  },
  {
    "situacao": "financas",
    "pt": "o comprovativo de morada",
    "en": "proof of address",
    "zhHans": "住址證明",
    "zhHant": "住址證明"
  },
  {
    "situacao": "financas",
    "pt": "a certidão de residência fiscal",
    "en": "certificate of tax residency",
    "zhHans": "稅務居民證明",
    "zhHant": "稅務居民證明"
  },
  {
    "situacao": "financas",
    "pt": "as guias de pagamento",
    "en": "payment slips",
    "zhHans": "繳費單",
    "zhHant": "繳費單"
  },
  {
    "situacao": "correios",
    "pt": "os correios / os CTT",
    "en": "the post office / CTT",
    "zhHans": "郵局（CTT）",
    "zhHant": "郵局（CTT）"
  },
  {
    "situacao": "correios",
    "pt": "a carta registada",
    "en": "registered letter",
    "zhHans": "掛號信",
    "zhHant": "掛號信",
    "note": "How official documents usually arrive"
  },
  {
    "situacao": "correios",
    "pt": "o aviso de receção",
    "en": "proof of delivery (return receipt)",
    "zhHans": "回執（簽收證明）",
    "zhHant": "回執（簽收證明）"
  },
  {
    "situacao": "correios",
    "pt": "a encomenda",
    "en": "parcel",
    "zhHans": "包裹",
    "zhHant": "包裹"
  },
  {
    "situacao": "correios",
    "pt": "levantar uma encomenda",
    "en": "to collect a parcel",
    "zhHans": "領取包裹",
    "zhHant": "領取包裹"
  },
  {
    "situacao": "correios",
    "pt": "o aviso de levantamento",
    "en": "collection notice (left in mailbox)",
    "zhHans": "取件通知單",
    "zhHant": "取件通知單"
  },
  {
    "situacao": "correios",
    "pt": "o código de rastreio",
    "en": "tracking number",
    "zhHans": "追蹤編號",
    "zhHant": "追蹤編號"
  },
  {
    "situacao": "correios",
    "pt": "o selo",
    "en": "stamp",
    "zhHans": "郵票",
    "zhHant": "郵票"
  },
  {
    "situacao": "correios",
    "pt": "o correio azul",
    "en": "priority mail",
    "zhHans": "藍色優先郵件（快件）",
    "zhHant": "藍色優先郵件（快件）"
  },
  {
    "situacao": "correios",
    "pt": "enviar para o estrangeiro",
    "en": "to send abroad",
    "zhHans": "寄往國外",
    "zhHant": "寄往國外"
  },
  {
    "situacao": "correios",
    "pt": "a caixa de correio",
    "en": "mailbox",
    "zhHans": "信箱",
    "zhHant": "信箱"
  },
  {
    "situacao": "correios",
    "pt": "o remetente / o destinatário",
    "en": "sender / recipient",
    "zhHans": "寄件人／收件人",
    "zhHant": "寄件人／收件人"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "a junta de freguesia",
    "en": "parish council office",
    "zhHans": "堂區行政委員會（社區辦事處）",
    "zhHant": "堂區行政委員會（社區辦事處）",
    "note": "Most local level of government"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "o atestado de residência",
    "en": "certificate of residence",
    "zhHans": "居住證明書",
    "zhHant": "居住證明書",
    "note": "Key doc for SNS number without residence permit"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "as duas testemunhas",
    "en": "two witnesses",
    "zhHans": "兩名證人",
    "zhHant": "兩名證人",
    "note": "Neighbours registered in the same freguesia"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "recenseado na freguesia",
    "en": "registered (on the electoral roll) in the parish",
    "zhHans": "在本堂區登記在冊的",
    "zhHant": "在本堂區登記在冊的"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "o agregado familiar",
    "en": "household",
    "zhHans": "家庭成員（同戶）",
    "zhHant": "家庭成員（同戶）"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "a declaração sob compromisso de honra",
    "en": "sworn declaration",
    "zhHans": "誓詞聲明（保證聲明）",
    "zhHant": "誓詞聲明（保證聲明）"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "o contrato de arrendamento",
    "en": "rental contract",
    "zhHans": "租賃合同",
    "zhHant": "租賃合同"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "a certidão",
    "en": "certificate / official copy",
    "zhHans": "證明書／正式副本",
    "zhHant": "證明書／正式副本"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "o carimbo",
    "en": "official stamp",
    "zhHans": "公章",
    "zhHant": "公章"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "pagar uma taxa",
    "en": "to pay a fee",
    "zhHans": "繳納費用",
    "zhHant": "繳納費用"
  },
  {
    "situacao": "saude",
    "pt": "o número de utente",
    "en": "SNS user number",
    "zhHans": "醫療用戶號（Utente號）",
    "zhHant": "醫療用戶號（Utente號）",
    "note": "Assigned at your local centro de saúde"
  },
  {
    "situacao": "saude",
    "pt": "inscrever-se no centro de saúde",
    "en": "to register at the health centre",
    "zhHans": "在衛生中心登記",
    "zhHant": "在衛生中心登記"
  },
  {
    "situacao": "saude",
    "pt": "o médico de família",
    "en": "family doctor (GP)",
    "zhHans": "家庭醫生",
    "zhHant": "家庭醫生",
    "note": "May be waitlisted; you're assigned, not chosen"
  },
  {
    "situacao": "saude",
    "pt": "marcar uma consulta",
    "en": "to book an appointment",
    "zhHans": "預約門診",
    "zhHant": "預約門診"
  },
  {
    "situacao": "saude",
    "pt": "a receita (eletrónica)",
    "en": "(electronic) prescription",
    "zhHans": "（電子）處方",
    "zhHant": "（電子）處方",
    "note": "Sent by SMS; show code at pharmacy"
  },
  {
    "situacao": "saude",
    "pt": "a urgência",
    "en": "A&E / emergency department",
    "zhHans": "急診",
    "zhHant": "急診"
  },
  {
    "situacao": "saude",
    "pt": "o SNS 24 — 808 24 24 24",
    "en": "SNS 24 health line",
    "zhHans": "SNS 24健康熱線（808 24 24 24）",
    "zhHant": "SNS 24健康熱線（808 24 24 24）",
    "note": "Call BEFORE going to A&E for triage advice"
  },
  {
    "situacao": "saude",
    "pt": "o 112",
    "en": "112 (emergency number)",
    "zhHans": "112（緊急救援電話）",
    "zhHant": "112（緊急救援電話）"
  },
  {
    "situacao": "saude",
    "pt": "a triagem (pulseira)",
    "en": "triage (coloured wristband)",
    "zhHans": "分診（顏色手環）",
    "zhHant": "分診（顏色手環）",
    "note": "Wristband colour = urgency level, sets your wait"
  },
  {
    "situacao": "saude",
    "pt": "a baixa médica",
    "en": "sick leave certificate",
    "zhHans": "病假證明",
    "zhHant": "病假證明"
  },
  {
    "situacao": "saude",
    "pt": "a farmácia",
    "en": "pharmacy",
    "zhHans": "藥房",
    "zhHant": "藥房"
  },
  {
    "situacao": "saude",
    "pt": "o boletim de vacinas",
    "en": "vaccination record",
    "zhHans": "疫苗接種記錄",
    "zhHant": "疫苗接種記錄"
  },
  {
    "situacao": "saude",
    "pt": "Dói-me…",
    "en": "… hurts / I have pain in…",
    "zhHans": "我……痛",
    "zhHant": "我……痛"
  },
  {
    "situacao": "saude",
    "pt": "sou alérgico/a a…",
    "en": "I'm allergic to…",
    "zhHans": "我對……過敏",
    "zhHant": "我對……過敏"
  },
  {
    "situacao": "aima",
    "pt": "a AIMA",
    "en": "AIMA (Agency for Integration, Migration and Asylum)",
    "zhHans": "移民與庇護融合署（AIMA）",
    "zhHant": "移民與庇護融合署（AIMA）",
    "note": "Replaced SEF in Oct 2023"
  },
  {
    "situacao": "aima",
    "pt": "a autorização de residência (AR)",
    "en": "residence permit",
    "zhHans": "居留許可",
    "zhHant": "居留許可"
  },
  {
    "situacao": "aima",
    "pt": "o título de residência",
    "en": "residence card (the physical document)",
    "zhHans": "居留證（實體證件）",
    "zhHant": "居留證（實體證件）"
  },
  {
    "situacao": "aima",
    "pt": "a renovação",
    "en": "renewal",
    "zhHans": "續期",
    "zhHant": "續期",
    "note": "Apply from 90 days, up to 30 days before expiry"
  },
  {
    "situacao": "aima",
    "pt": "o Portal das Renovações",
    "en": "the online Renewals Portal",
    "zhHans": "線上續期平台",
    "zhHant": "線上續期平台",
    "note": "portal-renovacoes.aima.gov.pt; opened month by month"
  },
  {
    "situacao": "aima",
    "pt": "a marcação / o agendamento",
    "en": "appointment / booking",
    "zhHans": "預約",
    "zhHant": "預約"
  },
  {
    "situacao": "aima",
    "pt": "a recolha de dados biométricos",
    "en": "biometric data collection",
    "zhHans": "採集生物識別資料（按指紋等）",
    "zhHant": "採集生物識別資料（按指紋等）"
  },
  {
    "situacao": "aima",
    "pt": "o comprovativo de meios de subsistência",
    "en": "proof of means of subsistence",
    "zhHans": "生活來源證明",
    "zhHant": "生活來源證明",
    "note": "Work contract, payslips or bank statement"
  },
  {
    "situacao": "aima",
    "pt": "o registo criminal",
    "en": "criminal record (check)",
    "zhHans": "無犯罪記錄",
    "zhHant": "無犯罪記錄",
    "note": "Consent for lookup usually given at the counter"
  },
  {
    "situacao": "aima",
    "pt": "o reagrupamento familiar",
    "en": "family reunification",
    "zhHans": "家庭團聚",
    "zhHant": "家庭團聚"
  },
  {
    "situacao": "aima",
    "pt": "o processo pendente",
    "en": "pending case/process",
    "zhHans": "待處理的申請",
    "zhHant": "待處理的申請"
  },
  {
    "situacao": "aima",
    "pt": "caducado/a",
    "en": "expired",
    "zhHans": "已過期",
    "zhHant": "已過期",
    "note": "AR expired <6 months can still renew"
  },
  {
    "situacao": "aima",
    "pt": "as taxas",
    "en": "fees",
    "zhHans": "費用",
    "zhHant": "費用"
  },
  {
    "situacao": "escola",
    "pt": "a matrícula",
    "en": "enrolment",
    "zhHans": "入學註冊",
    "zhHant": "入學註冊"
  },
  {
    "situacao": "escola",
    "pt": "o Portal das Matrículas",
    "en": "the online enrolment portal",
    "zhHans": "入學註冊網站",
    "zhHant": "入學註冊網站",
    "note": "portaldasmatriculas.edu.gov.pt"
  },
  {
    "situacao": "escola",
    "pt": "o encarregado de educação",
    "en": "legal guardian (for school purposes)",
    "zhHans": "教育監護人",
    "zhHant": "教育監護人",
    "note": "Usually a parent; the school's official contact"
  },
  {
    "situacao": "escola",
    "pt": "o agrupamento de escolas",
    "en": "school cluster",
    "zhHans": "學校群（校區聯盟）",
    "zhHant": "學校群（校區聯盟）"
  },
  {
    "situacao": "escola",
    "pt": "a escola da área de residência",
    "en": "the school for your home address",
    "zhHans": "居住地劃片學校",
    "zhHant": "居住地劃片學校"
  },
  {
    "situacao": "escola",
    "pt": "o ano letivo",
    "en": "school year",
    "zhHans": "學年",
    "zhHant": "學年"
  },
  {
    "situacao": "escola",
    "pt": "o boletim de vacinas",
    "en": "vaccination record",
    "zhHans": "疫苗接種記錄",
    "zhHant": "疫苗接種記錄"
  },
  {
    "situacao": "escola",
    "pt": "a Ação Social Escolar (ASE)",
    "en": "school social support (meals/books subsidy)",
    "zhHans": "學校社會援助（餐費/教材補助）",
    "zhHant": "學校社會援助（餐費/教材補助）",
    "note": "Linked to abono de família escalão; needs NISS"
  },
  {
    "situacao": "escola",
    "pt": "o abono de família",
    "en": "family allowance",
    "zhHans": "家庭津貼",
    "zhHant": "家庭津貼"
  },
  {
    "situacao": "escola",
    "pt": "os manuais escolares",
    "en": "textbooks",
    "zhHans": "教科書",
    "zhHant": "教科書",
    "note": "Free in public schooling"
  },
  {
    "situacao": "escola",
    "pt": "o horário",
    "en": "timetable",
    "zhHans": "課程表",
    "zhHant": "課程表"
  },
  {
    "situacao": "escola",
    "pt": "a reunião de pais",
    "en": "parents' meeting",
    "zhHans": "家長會",
    "zhHant": "家長會"
  },
  {
    "situacao": "escola",
    "pt": "o ATL",
    "en": "after-school care",
    "zhHans": "課後託管",
    "zhHant": "課後託管"
  },
  {
    "situacao": "escola",
    "pt": "a cantina / o refeitório",
    "en": "school canteen",
    "zhHans": "學校食堂",
    "zhHant": "學校食堂"
  },
  {
    "situacao": "iefp",
    "pt": "o IEFP / o centro de emprego",
    "en": "IEFP / job centre",
    "zhHans": "就業與職業培訓局（就業中心）",
    "zhHant": "就業與職業培訓局（就業中心）"
  },
  {
    "situacao": "iefp",
    "pt": "inscrever-se como candidato a emprego",
    "en": "to register as a jobseeker",
    "zhHans": "登記為求職者",
    "zhHant": "登記為求職者",
    "note": "Online via iefponline or in person"
  },
  {
    "situacao": "iefp",
    "pt": "o iefponline",
    "en": "the IEFP online portal",
    "zhHans": "IEFP線上平台",
    "zhHant": "IEFP線上平台"
  },
  {
    "situacao": "iefp",
    "pt": "o subsídio de desemprego",
    "en": "unemployment benefit",
    "zhHans": "失業救濟金",
    "zhHant": "失業救濟金",
    "note": "Register within 90 days of losing your job"
  },
  {
    "situacao": "iefp",
    "pt": "a declaração da entidade empregadora",
    "en": "employer's declaration (of dismissal)",
    "zhHans": "僱主解僱聲明",
    "zhHant": "僱主解僱聲明"
  },
  {
    "situacao": "iefp",
    "pt": "o Plano Pessoal de Emprego",
    "en": "Personal Employment Plan",
    "zhHans": "個人就業計劃",
    "zhHant": "個人就業計劃"
  },
  {
    "situacao": "iefp",
    "pt": "o gestor pessoal",
    "en": "personal case officer",
    "zhHans": "個人專員",
    "zhHant": "個人專員"
  },
  {
    "situacao": "iefp",
    "pt": "a oferta de emprego",
    "en": "job offer / vacancy",
    "zhHans": "職位空缺",
    "zhHant": "職位空缺"
  },
  {
    "situacao": "iefp",
    "pt": "a formação profissional",
    "en": "vocational training",
    "zhHans": "職業培訓",
    "zhHant": "職業培訓",
    "note": "Free courses, some with allowance"
  },
  {
    "situacao": "iefp",
    "pt": "o NISS (segurança social)",
    "en": "social security number",
    "zhHans": "社會保障號碼（NISS）",
    "zhHant": "社會保障號碼（NISS）"
  },
  {
    "situacao": "iefp",
    "pt": "a convocatória",
    "en": "summons / official call-in",
    "zhHans": "（官方）約談通知",
    "zhHant": "（官方）約談通知",
    "note": "Missing one can suspend your benefit"
  },
  {
    "situacao": "iefp",
    "pt": "apresentar-se no centro de emprego",
    "en": "to report to the job centre",
    "zhHans": "到就業中心報到",
    "zhHant": "到就業中心報到"
  },
  {
    "situacao": "iefp",
    "pt": "o certificado de habilitações",
    "en": "qualifications certificate",
    "zhHans": "學歷證明",
    "zhHant": "學歷證明"
  },
  {
    "situacao": "seguranca_social",
    "pt": "a Segurança Social",
    "en": "Social Security",
    "zhHans": "社會保障局",
    "zhHant": "社會保障局"
  },
  {
    "situacao": "seguranca_social",
    "pt": "o NISS",
    "en": "social security number (NISS)",
    "zhHans": "社會保障號碼（NISS）",
    "zhHant": "社會保障號碼（NISS）",
    "note": "Needed to work legally and for benefits"
  },
  {
    "situacao": "seguranca_social",
    "pt": "pedir o NISS",
    "en": "to apply for a NISS",
    "zhHans": "申請社保號",
    "zhHant": "申請社保號"
  },
  {
    "situacao": "seguranca_social",
    "pt": "a Segurança Social Direta",
    "en": "the Social Security online portal",
    "zhHans": "社保線上平台",
    "zhHant": "社保線上平台"
  },
  {
    "situacao": "seguranca_social",
    "pt": "os descontos",
    "en": "(social security) contributions",
    "zhHans": "社保供款（扣繳）",
    "zhHant": "社保供款（扣繳）"
  },
  {
    "situacao": "seguranca_social",
    "pt": "o trabalhador por conta de outrem",
    "en": "employee (salaried worker)",
    "zhHans": "受僱員工",
    "zhHant": "受僱員工"
  },
  {
    "situacao": "seguranca_social",
    "pt": "o trabalhador independente",
    "en": "self-employed worker",
    "zhHans": "自僱人士",
    "zhHant": "自僱人士"
  },
  {
    "situacao": "seguranca_social",
    "pt": "os recibos verdes",
    "en": "'green receipts' (freelance invoicing)",
    "zhHans": "綠色收據（自僱開票制度）",
    "zhHant": "綠色收據（自僱開票制度）",
    "note": "How cleaners, riders etc. often invoice"
  },
  {
    "situacao": "seguranca_social",
    "pt": "o abono de família",
    "en": "family allowance",
    "zhHans": "家庭津貼",
    "zhHant": "家庭津貼"
  },
  {
    "situacao": "seguranca_social",
    "pt": "a baixa por doença",
    "en": "paid sick leave",
    "zhHans": "病假津貼",
    "zhHant": "病假津貼"
  },
  {
    "situacao": "seguranca_social",
    "pt": "a declaração de situação contributiva",
    "en": "statement of contributions status",
    "zhHans": "供款狀況聲明",
    "zhHant": "供款狀況聲明",
    "note": "Often requested for AR renewal"
  },
  {
    "situacao": "seguranca_social",
    "pt": "o comprovativo",
    "en": "proof / receipt (of application)",
    "zhHans": "申請憑證",
    "zhHant": "申請憑證"
  },
  {
    "situacao": "arrendamento",
    "pt": "arrendar um quarto / um apartamento",
    "en": "to rent a room / a flat",
    "zhHans": "租一個房間／一套公寓",
    "zhHant": "租一個房間／一套公寓"
  },
  {
    "situacao": "arrendamento",
    "pt": "o T0 / T1 / T2",
    "en": "studio / 1-bed / 2-bed flat",
    "zhHans": "開間／一房／兩房公寓",
    "zhHant": "開間／一房／兩房公寓",
    "note": "T = number of bedrooms"
  },
  {
    "situacao": "arrendamento",
    "pt": "o senhorio / a senhoria",
    "en": "landlord / landlady",
    "zhHans": "房東",
    "zhHant": "房東"
  },
  {
    "situacao": "arrendamento",
    "pt": "o inquilino / a inquilina",
    "en": "tenant",
    "zhHans": "房客",
    "zhHant": "房客"
  },
  {
    "situacao": "arrendamento",
    "pt": "a renda",
    "en": "the rent",
    "zhHans": "租金",
    "zhHant": "租金"
  },
  {
    "situacao": "arrendamento",
    "pt": "a caução",
    "en": "deposit",
    "zhHans": "押金",
    "zhHant": "押金",
    "note": "Usually 1–2 months' rent"
  },
  {
    "situacao": "arrendamento",
    "pt": "o fiador",
    "en": "guarantor",
    "zhHans": "擔保人",
    "zhHant": "擔保人",
    "note": "Often asked of newcomers without payslips"
  },
  {
    "situacao": "arrendamento",
    "pt": "o contrato de arrendamento",
    "en": "rental contract",
    "zhHans": "租賃合同",
    "zhHant": "租賃合同",
    "note": "Needed as proof of address everywhere"
  },
  {
    "situacao": "arrendamento",
    "pt": "o recibo de renda (eletrónico)",
    "en": "(electronic) rent receipt",
    "zhHans": "（電子）租金收據",
    "zhHant": "（電子）租金收據",
    "note": "Ask for it — proves address and protects you"
  },
  {
    "situacao": "arrendamento",
    "pt": "despesas incluídas",
    "en": "bills included",
    "zhHans": "包水電雜費",
    "zhHant": "包水電雜費"
  },
  {
    "situacao": "arrendamento",
    "pt": "mobilado / sem mobília",
    "en": "furnished / unfurnished",
    "zhHans": "帶傢俬／不帶傢俬",
    "zhHant": "帶傢俬／不帶傢俬"
  },
  {
    "situacao": "arrendamento",
    "pt": "o condomínio",
    "en": "building service charge",
    "zhHans": "大廈管理費",
    "zhHant": "大廈管理費"
  },
  {
    "situacao": "arrendamento",
    "pt": "rescindir o contrato",
    "en": "to terminate the contract",
    "zhHans": "解除合同",
    "zhHant": "解除合同"
  },
  {
    "situacao": "arrendamento",
    "pt": "a visita (ao imóvel)",
    "en": "viewing",
    "zhHans": "看房",
    "zhHant": "看房"
  },
  {
    "situacao": "transportes",
    "pt": "o passe (navegante)",
    "en": "travel pass (navegante)",
    "zhHans": "月票（navegante卡）",
    "zhHant": "月票（navegante卡）",
    "note": "Lisbon area system; Porto uses Andante"
  },
  {
    "situacao": "transportes",
    "pt": "carregar o passe",
    "en": "to top up the pass",
    "zhHans": "給月票充值",
    "zhHant": "給月票充值"
  },
  {
    "situacao": "transportes",
    "pt": "validar o bilhete",
    "en": "to validate the ticket",
    "zhHans": "打卡驗票",
    "zhHant": "打卡驗票",
    "note": "Always validate — fines are heavy"
  },
  {
    "situacao": "transportes",
    "pt": "a máquina de venda",
    "en": "ticket machine",
    "zhHans": "售票機",
    "zhHant": "售票機"
  },
  {
    "situacao": "transportes",
    "pt": "a carreira / a linha",
    "en": "bus route / line",
    "zhHans": "公交線路",
    "zhHant": "公交線路"
  },
  {
    "situacao": "transportes",
    "pt": "a paragem",
    "en": "stop",
    "zhHans": "車站（站點）",
    "zhHant": "車站（站點）"
  },
  {
    "situacao": "transportes",
    "pt": "a estação",
    "en": "station",
    "zhHans": "車站（火車/地鐵站）",
    "zhHant": "車站（火車/地鐵站）"
  },
  {
    "situacao": "transportes",
    "pt": "o fiscal",
    "en": "ticket inspector",
    "zhHans": "查票員",
    "zhHant": "查票員"
  },
  {
    "situacao": "transportes",
    "pt": "a multa",
    "en": "fine",
    "zhHans": "罰款",
    "zhHant": "罰款"
  },
  {
    "situacao": "transportes",
    "pt": "o horário",
    "en": "timetable",
    "zhHans": "時刻表",
    "zhHant": "時刻表"
  },
  {
    "situacao": "transportes",
    "pt": "a zona",
    "en": "fare zone",
    "zhHans": "票價區",
    "zhHant": "票價區"
  },
  {
    "situacao": "transportes",
    "pt": "o elétrico",
    "en": "tram",
    "zhHans": "有軌電車",
    "zhHant": "有軌電車"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o turno (da manhã / da tarde / da noite)",
    "en": "shift (morning / afternoon / night)",
    "zhHans": "班次（早班／午班／夜班）",
    "zhHant": "班次（早班／午班／夜班）"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "a governanta",
    "en": "head housekeeper",
    "zhHans": "客房部主管",
    "zhHant": "客房部主管"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "arrumar os quartos",
    "en": "to make up the rooms",
    "zhHans": "整理客房",
    "zhHant": "整理客房"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "mudar os lençóis / as toalhas",
    "en": "to change the sheets / towels",
    "zhHans": "更換床單／毛巾",
    "zhHant": "更換床單／毛巾"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o carrinho de limpeza",
    "en": "housekeeping cart",
    "zhHans": "清潔工作車",
    "zhHant": "清潔工作車"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o hóspede",
    "en": "guest",
    "zhHans": "住客",
    "zhHant": "住客"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "a receção",
    "en": "reception / front desk",
    "zhHans": "前台",
    "zhHant": "前台"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o check-in / o check-out",
    "en": "check-in / check-out",
    "zhHans": "入住／退房",
    "zhHant": "入住／退房"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o cartão do quarto",
    "en": "room key card",
    "zhHans": "房卡",
    "zhHant": "房卡"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "a folga",
    "en": "day off",
    "zhHans": "休息日",
    "zhHant": "休息日"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "as horas extra",
    "en": "overtime",
    "zhHans": "加班",
    "zhHant": "加班"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o uniforme",
    "en": "uniform",
    "zhHans": "制服",
    "zhHant": "制服"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o andar",
    "en": "floor (storey)",
    "zhHans": "樓層",
    "zhHant": "樓層"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "o empregado / a empregada de mesa",
    "en": "waiter / waitress",
    "zhHans": "服務員",
    "zhHant": "服務員"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "o ajudante de cozinha",
    "en": "kitchen assistant",
    "zhHans": "廚房幫工",
    "zhHant": "廚房幫工"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "a ementa / o menu",
    "en": "menu",
    "zhHans": "菜單",
    "zhHant": "菜單"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "o prato do dia",
    "en": "dish of the day",
    "zhHans": "今日特餐",
    "zhHant": "今日特餐"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "anotar o pedido",
    "en": "to take the order",
    "zhHans": "記錄點單",
    "zhHant": "記錄點單"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "a esplanada",
    "en": "outdoor terrace",
    "zhHans": "露天座位",
    "zhHant": "露天座位"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "o balcão",
    "en": "the counter / bar",
    "zhHans": "吧台／櫃檯",
    "zhHant": "吧台／櫃檯"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "os talheres / o guardanapo",
    "en": "cutlery / napkin",
    "zhHans": "餐具／餐巾",
    "zhHant": "餐具／餐巾"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "a conta",
    "en": "the bill",
    "zhHans": "賬單",
    "zhHant": "賬單"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "a gorjeta",
    "en": "tip",
    "zhHans": "小費",
    "zhHant": "小費"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "lavar a loiça",
    "en": "to wash the dishes",
    "zhHans": "洗碗",
    "zhHant": "洗碗"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "a comanda",
    "en": "order slip",
    "zhHans": "點菜單",
    "zhHant": "點菜單"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "Bom proveito!",
    "en": "Enjoy your meal!",
    "zhHans": "請慢用！",
    "zhHant": "請慢用！"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "a empregada / o empregado de limpeza",
    "en": "cleaner",
    "zhHans": "清潔工",
    "zhHant": "清潔工"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "o produto de limpeza",
    "en": "cleaning product",
    "zhHans": "清潔劑",
    "zhHant": "清潔劑"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "a lixívia",
    "en": "bleach",
    "zhHans": "漂白水",
    "zhHant": "漂白水"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "a esfregona e o balde",
    "en": "mop and bucket",
    "zhHans": "拖把和水桶",
    "zhHant": "拖把和水桶"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "aspirar",
    "en": "to vacuum",
    "zhHans": "吸塵",
    "zhHant": "吸塵"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "limpar o pó",
    "en": "to dust",
    "zhHans": "擦灰塵",
    "zhHant": "擦灰塵"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "esfregar o chão",
    "en": "to mop/scrub the floor",
    "zhHans": "拖地／擦地",
    "zhHant": "拖地／擦地"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "o lixo / a reciclagem",
    "en": "rubbish / recycling",
    "zhHans": "垃圾／回收",
    "zhHant": "垃圾／回收"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "as luvas",
    "en": "gloves",
    "zhHans": "手套",
    "zhHant": "手套"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "à hora / por horas",
    "en": "paid by the hour",
    "zhHans": "按小時計酬",
    "zhHant": "按小時計酬"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "a patroa / o patrão",
    "en": "employer (informal)",
    "zhHans": "僱主（東家）",
    "zhHant": "僱主（東家）"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "os recibos verdes",
    "en": "freelance receipts",
    "zhHans": "綠色收據（自僱開票）",
    "zhHant": "綠色收據（自僱開票）",
    "note": "Very common in domestic cleaning"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "a obra / o estaleiro",
    "en": "building site",
    "zhHans": "工地",
    "zhHant": "工地"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o servente",
    "en": "labourer",
    "zhHans": "小工（雜工）",
    "zhHant": "小工（雜工）"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o pedreiro",
    "en": "bricklayer / mason",
    "zhHans": "泥瓦工",
    "zhHant": "泥瓦工"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o encarregado da obra",
    "en": "site foreman",
    "zhHans": "工地領班",
    "zhHant": "工地領班"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o capacete",
    "en": "hard hat",
    "zhHans": "安全帽",
    "zhHant": "安全帽"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "as botas de proteção",
    "en": "safety boots",
    "zhHans": "安全鞋",
    "zhHant": "安全鞋"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o colete refletor",
    "en": "hi-vis vest",
    "zhHans": "反光背心",
    "zhHant": "反光背心"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o EPI (equipamento de proteção individual)",
    "en": "PPE (personal protective equipment)",
    "zhHans": "個人防護裝備",
    "zhHant": "個人防護裝備",
    "note": "Mandatory; refusing unsafe work is your right"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o andaime",
    "en": "scaffolding",
    "zhHans": "腳手架",
    "zhHant": "腳手架"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o cimento / o betão",
    "en": "cement / concrete",
    "zhHans": "水泥／混凝土",
    "zhHant": "水泥／混凝土"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o tijolo",
    "en": "brick",
    "zhHans": "磚",
    "zhHant": "磚"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "a betoneira",
    "en": "cement mixer",
    "zhHans": "攪拌機",
    "zhHant": "攪拌機"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o contrato de trabalho",
    "en": "work contract",
    "zhHans": "勞動合同",
    "zhHant": "勞動合同",
    "note": "Insist on one — protects wages and NISS"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o estafeta",
    "en": "delivery rider/courier",
    "zhHans": "外賣員／快遞員",
    "zhHant": "外賣員／快遞員"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "a entrega",
    "en": "delivery",
    "zhHans": "配送",
    "zhHant": "配送"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o pedido",
    "en": "the order",
    "zhHans": "訂單",
    "zhHant": "訂單"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "a mochila térmica",
    "en": "thermal delivery bag",
    "zhHans": "保溫配送箱",
    "zhHant": "保溫配送箱"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "a aplicação / a app",
    "en": "the app",
    "zhHans": "應用程式",
    "zhHant": "應用程式"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "a morada",
    "en": "address",
    "zhHans": "地址",
    "zhHant": "地址"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o código da porta",
    "en": "door/entry code",
    "zhHans": "門禁密碼",
    "zhHant": "門禁密碼"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o interfone / a campainha",
    "en": "intercom / doorbell",
    "zhHans": "對講機／門鈴",
    "zhHant": "對講機／門鈴"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "ligar ao cliente",
    "en": "to call the customer",
    "zhHans": "給顧客打電話",
    "zhHant": "給顧客打電話"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o rés-do-chão / o andar",
    "en": "ground floor / floor",
    "zhHans": "一樓（地面層）／樓層",
    "zhHant": "一樓（地面層）／樓層"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "a mota / a bicicleta",
    "en": "motorbike / bicycle",
    "zhHans": "摩托車／自行車",
    "zhHant": "摩托車／自行車"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o trânsito",
    "en": "traffic",
    "zhHans": "交通（堵車）",
    "zhHant": "交通（堵車）"
  }
];

export const situacaoDialogueLines: SituacaoContentLine[] = [
  {
    "id": "dialogo-banco-boa-tarde-queria-abrir-uma-conta-a-ordem",
    "situacao": "banco",
    "order": 0,
    "pt": "Boa tarde, queria abrir uma conta à ordem.",
    "en": "Good afternoon, I'd like to open a current account.",
    "zhHans": "下午好，我想開一個活期帳戶。",
    "zhHant": "下午好，我想開一個活期帳戶。"
  },
  {
    "id": "dialogo-banco-com-certeza-tem-o-passaporte-o-nif-e-um-comprovativo-d",
    "situacao": "banco",
    "order": 1,
    "pt": "Com certeza. Tem o passaporte, o NIF e um comprovativo de morada?",
    "en": "Of course. Do you have your passport, tax number and proof of address?",
    "zhHans": "當然可以。您有護照、稅號和住址證明嗎？",
    "zhHant": "當然可以。您有護照、稅號和住址證明嗎？"
  },
  {
    "id": "dialogo-banco-tenho-esta-tudo-aqui",
    "situacao": "banco",
    "order": 2,
    "pt": "Tenho, está tudo aqui.",
    "en": "Yes, it's all here.",
    "zhHans": "有，都在這裡。",
    "zhHant": "有，都在這裡。"
  },
  {
    "id": "dialogo-banco-e-preciso-um-deposito-inicial-pode-ser-em-numerario-ou",
    "situacao": "banco",
    "order": 3,
    "pt": "É preciso um depósito inicial. Pode ser em numerário ou por transferência.",
    "en": "An initial deposit is required. It can be in cash or by transfer.",
    "zhHans": "需要一筆開戶存款，可以用現金或轉帳。",
    "zhHant": "需要一筆開戶存款，可以用現金或轉帳。"
  },
  {
    "id": "dialogo-banco-quanto-e-a-comissao-de-manutencao-mensal",
    "situacao": "banco",
    "order": 4,
    "pt": "Quanto é a comissão de manutenção mensal?",
    "en": "How much is the monthly maintenance fee?",
    "zhHans": "每月的帳戶管理費是多少？",
    "zhHant": "每月的帳戶管理費是多少？"
  },
  {
    "id": "dialogo-banco-o-cartao-multibanco-chega-por-correio-dentro-de-uma-a-",
    "situacao": "banco",
    "order": 5,
    "pt": "O cartão multibanco chega por correio dentro de uma a duas semanas.",
    "en": "The debit card arrives by post within one to two weeks.",
    "zhHans": "提款卡會在一到兩週內郵寄給您。",
    "zhHant": "提款卡會在一到兩週內郵寄給您。"
  },
  {
    "id": "dialogo-banco-como-ativo-o-homebanking",
    "situacao": "banco",
    "order": 6,
    "pt": "Como ativo o homebanking?",
    "en": "How do I activate online banking?",
    "zhHans": "我怎樣開通網上銀行？",
    "zhHant": "我怎樣開通網上銀行？"
  },
  {
    "id": "dialogo-banco-recebe-um-sms-com-o-codigo-de-ativacao-para-a-app",
    "situacao": "banco",
    "order": 7,
    "pt": "Recebe um SMS com o código de ativação para a app.",
    "en": "You'll receive an SMS with the activation code for the app.",
    "zhHans": "您會收到一條含應用程式啟用碼的短信。",
    "zhHant": "您會收到一條含應用程式啟用碼的短信。"
  },
  {
    "id": "dialogo-financas-bom-dia-vim-pedir-o-nif",
    "situacao": "financas",
    "order": 8,
    "pt": "Bom dia, vim pedir o NIF.",
    "en": "Good morning, I've come to apply for a tax number.",
    "zhHans": "早上好，我來申請稅號。",
    "zhHant": "早上好，我來申請稅號。"
  },
  {
    "id": "dialogo-financas-tem-passaporte-e-comprovativo-de-morada",
    "situacao": "financas",
    "order": 9,
    "pt": "Tem passaporte e comprovativo de morada?",
    "en": "Do you have your passport and proof of address?",
    "zhHans": "您有護照和住址證明嗎？",
    "zhHant": "您有護照和住址證明嗎？"
  },
  {
    "id": "dialogo-financas-tenho-o-passaporte-mas-a-morada-ainda-e-do-estrangeiro",
    "situacao": "financas",
    "order": 10,
    "pt": "Tenho o passaporte, mas a morada ainda é do estrangeiro.",
    "en": "I have my passport, but my address is still abroad.",
    "zhHans": "我有護照，但地址還是國外的。",
    "zhHant": "我有護照，但地址還是國外的。"
  },
  {
    "id": "dialogo-financas-nesse-caso-precisa-de-um-representante-fiscal-ou-de-um",
    "situacao": "financas",
    "order": 11,
    "pt": "Nesse caso precisa de um representante fiscal ou de uma morada em Portugal.",
    "en": "In that case you need a tax representative or a Portuguese address.",
    "zhHans": "那樣的話，您需要一位稅務代表或一個葡萄牙地址。",
    "zhHant": "那樣的話，您需要一位稅務代表或一個葡萄牙地址。"
  },
  {
    "id": "dialogo-financas-quanto-tempo-demora",
    "situacao": "financas",
    "order": 12,
    "pt": "Quanto tempo demora?",
    "en": "How long does it take?",
    "zhHans": "需要多長時間？",
    "zhHant": "需要多長時間？"
  },
  {
    "id": "dialogo-financas-o-numero-e-atribuido-hoje-mesmo-a-senha-do-portal-cheg",
    "situacao": "financas",
    "order": 13,
    "pt": "O número é atribuído hoje mesmo. A senha do portal chega por carta.",
    "en": "The number is issued today. The portal password arrives by post.",
    "zhHans": "號碼今天就發給您。網站密碼會郵寄到府。",
    "zhHant": "號碼今天就發給您。網站密碼會郵寄到府。"
  },
  {
    "id": "dialogo-financas-preciso-de-atualizar-a-minha-morada-fiscal",
    "situacao": "financas",
    "order": 14,
    "pt": "Preciso de atualizar a minha morada fiscal.",
    "en": "I need to update my registered tax address.",
    "zhHans": "我需要更新我的稅務登記地址。",
    "zhHant": "我需要更新我的稅務登記地址。"
  },
  {
    "id": "dialogo-financas-pode-fazer-isso-online-no-portal-das-financas-com-a-su",
    "situacao": "financas",
    "order": 15,
    "pt": "Pode fazer isso online no Portal das Finanças, com a sua senha.",
    "en": "You can do that online on the Finanças portal with your password.",
    "zhHans": "您可以用密碼在財政網站上在線辦理。",
    "zhHant": "您可以用密碼在財政網站上在線辦理。"
  },
  {
    "id": "dialogo-correios-boa-tarde-queria-enviar-esta-carta-registada-com-aviso",
    "situacao": "correios",
    "order": 16,
    "pt": "Boa tarde, queria enviar esta carta registada com aviso de receção.",
    "en": "Good afternoon, I'd like to send this letter registered with proof of delivery.",
    "zhHans": "下午好，我想寄這封掛號信，要帶回執。",
    "zhHant": "下午好，我想寄這封掛號信，要帶回執。"
  },
  {
    "id": "dialogo-correios-para-portugal-ou-para-o-estrangeiro",
    "situacao": "correios",
    "order": 17,
    "pt": "Para Portugal ou para o estrangeiro?",
    "en": "Within Portugal or abroad?",
    "zhHans": "寄葡萄牙國內還是國外？",
    "zhHant": "寄葡萄牙國內還是國外？"
  },
  {
    "id": "dialogo-correios-para-a-china-quanto-tempo-demora",
    "situacao": "correios",
    "order": 18,
    "pt": "Para a China. Quanto tempo demora?",
    "en": "To China. How long does it take?",
    "zhHans": "寄中國。需要多久？",
    "zhHant": "寄中國。需要多久？"
  },
  {
    "id": "dialogo-correios-em-correio-azul-cerca-de-uma-semana-aqui-tem-o-codigo-",
    "situacao": "correios",
    "order": 19,
    "pt": "Em correio azul, cerca de uma semana. Aqui tem o código de rastreio.",
    "en": "By priority mail, about a week. Here's your tracking number.",
    "zhHans": "用優先郵件大約一週。這是您的追蹤編號。",
    "zhHant": "用優先郵件大約一週。這是您的追蹤編號。"
  },
  {
    "id": "dialogo-correios-tambem-vim-levantar-uma-encomenda-tenho-este-aviso",
    "situacao": "correios",
    "order": 20,
    "pt": "Também vim levantar uma encomenda. Tenho este aviso.",
    "en": "I've also come to collect a parcel. I have this notice.",
    "zhHans": "我還要領一個包裹，我有這張取件通知。",
    "zhHant": "我還要領一個包裹，我有這張取件通知。"
  },
  {
    "id": "dialogo-correios-pode-mostrar-um-documento-de-identificacao",
    "situacao": "correios",
    "order": 21,
    "pt": "Pode mostrar um documento de identificação?",
    "en": "Could you show me some ID?",
    "zhHans": "可以出示一下證件嗎？",
    "zhHant": "可以出示一下證件嗎？"
  },
  {
    "id": "dialogo-correios-claro-aqui-esta-o-meu-titulo-de-residencia",
    "situacao": "correios",
    "order": 22,
    "pt": "Claro, aqui está o meu título de residência.",
    "en": "Of course, here's my residence permit.",
    "zhHans": "當然，這是我的居留證。",
    "zhHant": "當然，這是我的居留證。"
  },
  {
    "id": "dialogo-junta-de-freguesia-bom-dia-preciso-de-um-atestado-de-residencia",
    "situacao": "junta_de_freguesia",
    "order": 23,
    "pt": "Bom dia, preciso de um atestado de residência.",
    "en": "Good morning, I need a certificate of residence.",
    "zhHans": "早上好，我需要一份居住證明。",
    "zhHant": "早上好，我需要一份居住證明。"
  },
  {
    "id": "dialogo-junta-de-freguesia-mora-nesta-freguesia-ha-quanto-tempo",
    "situacao": "junta_de_freguesia",
    "order": 24,
    "pt": "Mora nesta freguesia há quanto tempo?",
    "en": "How long have you lived in this parish?",
    "zhHans": "您在本堂區住了多久？",
    "zhHant": "您在本堂區住了多久？"
  },
  {
    "id": "dialogo-junta-de-freguesia-ha-quatro-meses-e-para-pedir-o-numero-de-utente",
    "situacao": "junta_de_freguesia",
    "order": 25,
    "pt": "Há quatro meses. É para pedir o número de utente.",
    "en": "Four months. It's to apply for my health service number.",
    "zhHans": "四個月了。是為了申請醫療用戶號。",
    "zhHant": "四個月了。是為了申請醫療用戶號。"
  },
  {
    "id": "dialogo-junta-de-freguesia-tem-contrato-de-arrendamento-ou-duas-testemunhas-recen",
    "situacao": "junta_de_freguesia",
    "order": 26,
    "pt": "Tem contrato de arrendamento ou duas testemunhas recenseadas aqui?",
    "en": "Do you have a rental contract or two witnesses registered here?",
    "zhHans": "您有租賃合同，或兩位在此登記的證人嗎？",
    "zhHant": "您有租賃合同，或兩位在此登記的證人嗎？"
  },
  {
    "id": "dialogo-junta-de-freguesia-tenho-o-contrato-de-arrendamento-e-uma-fatura-da-luz",
    "situacao": "junta_de_freguesia",
    "order": 27,
    "pt": "Tenho o contrato de arrendamento e uma fatura da luz.",
    "en": "I have the rental contract and an electricity bill.",
    "zhHans": "我有租賃合同和一張電費單。",
    "zhHant": "我有租賃合同和一張電費單。"
  },
  {
    "id": "dialogo-junta-de-freguesia-otimo-preencha-este-formulario-e-pague-a-taxa-por-favo",
    "situacao": "junta_de_freguesia",
    "order": 28,
    "pt": "Ótimo. Preencha este formulário e pague a taxa, por favor.",
    "en": "Great. Fill in this form and pay the fee, please.",
    "zhHans": "很好。請填寫這張表格並繳費。",
    "zhHant": "很好。請填寫這張表格並繳費。"
  },
  {
    "id": "dialogo-junta-de-freguesia-quando-fica-pronto",
    "situacao": "junta_de_freguesia",
    "order": 29,
    "pt": "Quando fica pronto?",
    "en": "When will it be ready?",
    "zhHans": "什麼時候可以拿？",
    "zhHant": "什麼時候可以拿？"
  },
  {
    "id": "dialogo-junta-de-freguesia-fica-pronto-hoje-com-o-carimbo-da-junta",
    "situacao": "junta_de_freguesia",
    "order": 30,
    "pt": "Fica pronto hoje, com o carimbo da junta.",
    "en": "It'll be ready today, with the parish stamp.",
    "zhHans": "今天就好，會蓋上堂區公章。",
    "zhHant": "今天就好，會蓋上堂區公章。"
  },
  {
    "id": "dialogo-saude-boa-tarde-queria-inscrever-me-no-centro-de-saude-e-ped",
    "situacao": "saude",
    "order": 31,
    "pt": "Boa tarde, queria inscrever-me no centro de saúde e pedir o número de utente.",
    "en": "Good afternoon, I'd like to register at the health centre and get my SNS number.",
    "zhHans": "下午好，我想在衛生中心登記並申請醫療用戶號。",
    "zhHant": "下午好，我想在衛生中心登記並申請醫療用戶號。"
  },
  {
    "id": "dialogo-saude-tem-autorizacao-de-residencia-e-nif",
    "situacao": "saude",
    "order": 32,
    "pt": "Tem autorização de residência e NIF?",
    "en": "Do you have a residence permit and tax number?",
    "zhHans": "您有居留許可和稅號嗎？",
    "zhHant": "您有居留許可和稅號嗎？"
  },
  {
    "id": "dialogo-saude-ainda-nao-tenho-autorizacao-mas-tenho-um-atestado-de-r",
    "situacao": "saude",
    "order": 33,
    "pt": "Ainda não tenho autorização, mas tenho um atestado de residência da junta.",
    "en": "I don't have a permit yet, but I have a residence certificate from the parish council.",
    "zhHans": "我還沒有居留許可，但我有堂區開的居住證明。",
    "zhHant": "我還沒有居留許可，但我有堂區開的居住證明。"
  },
  {
    "id": "dialogo-saude-serve-o-numero-de-utente-e-atribuido-ja-hoje",
    "situacao": "saude",
    "order": 34,
    "pt": "Serve. O número de utente é atribuído já hoje.",
    "en": "That works. Your user number is issued today.",
    "zhHans": "可以。用戶號今天就發給您。",
    "zhHant": "可以。用戶號今天就發給您。"
  },
  {
    "id": "dialogo-saude-queria-marcar-uma-consulta-com-o-medico-de-familia",
    "situacao": "saude",
    "order": 35,
    "pt": "Queria marcar uma consulta com o médico de família.",
    "en": "I'd like to book an appointment with the family doctor.",
    "zhHans": "我想預約家庭醫生。",
    "zhHant": "我想預約家庭醫生。"
  },
  {
    "id": "dialogo-saude-de-momento-esta-em-lista-de-espera-para-medico-de-fami",
    "situacao": "saude",
    "order": 36,
    "pt": "De momento está em lista de espera para médico de família.",
    "en": "At the moment you're on the waiting list for a family doctor.",
    "zhHans": "目前您在家庭醫生的等候名單上。",
    "zhHant": "目前您在家庭醫生的等候名單上。"
  },
  {
    "id": "dialogo-saude-e-se-ficar-doente-entretanto",
    "situacao": "saude",
    "order": 37,
    "pt": "E se ficar doente entretanto?",
    "en": "And if I get sick in the meantime?",
    "zhHans": "那期間生病了怎麼辦？",
    "zhHant": "那期間生病了怎麼辦？"
  },
  {
    "id": "dialogo-saude-ligue-para-o-sns-24-808-24-24-24-antes-de-ir-a-urgenci",
    "situacao": "saude",
    "order": 38,
    "pt": "Ligue para o SNS 24 — 808 24 24 24 — antes de ir à urgência.",
    "en": "Call SNS 24 — 808 24 24 24 — before going to A&E.",
    "zhHans": "去急診前先打SNS 24熱線——808 24 24 24。",
    "zhHant": "去急診前先打SNS 24熱線——808 24 24 24。"
  },
  {
    "id": "dialogo-aima-bom-dia-tenho-uma-marcacao-para-renovar-a-autorizacao-",
    "situacao": "aima",
    "order": 39,
    "pt": "Bom dia, tenho uma marcação para renovar a autorização de residência.",
    "en": "Good morning, I have an appointment to renew my residence permit.",
    "zhHans": "早上好，我有續居留許可的預約。",
    "zhHant": "早上好，我有續居留許可的預約。"
  },
  {
    "id": "dialogo-aima-pode-mostrar-o-titulo-de-residencia-e-o-passaporte",
    "situacao": "aima",
    "order": 40,
    "pt": "Pode mostrar o título de residência e o passaporte?",
    "en": "Can you show me your residence card and passport?",
    "zhHans": "可以出示您的居留證和護照嗎？",
    "zhHant": "可以出示您的居留證和護照嗎？"
  },
  {
    "id": "dialogo-aima-aqui-estao-tambem-trouxe-o-comprovativo-de-morada-e-os",
    "situacao": "aima",
    "order": 41,
    "pt": "Aqui estão. Também trouxe o comprovativo de morada e os recibos de vencimento.",
    "en": "Here they are. I also brought proof of address and my payslips.",
    "zhHans": "在這裡。我還帶了住址證明和工資單。",
    "zhHant": "在這裡。我還帶了住址證明和工資單。"
  },
  {
    "id": "dialogo-aima-autoriza-a-consulta-do-seu-registo-criminal",
    "situacao": "aima",
    "order": 42,
    "pt": "Autoriza a consulta do seu registo criminal?",
    "en": "Do you authorise us to check your criminal record?",
    "zhHans": "您授權我們查詢您的無犯罪記錄嗎？",
    "zhHant": "您授權我們查詢您的無犯罪記錄嗎？"
  },
  {
    "id": "dialogo-aima-sim-autorizo",
    "situacao": "aima",
    "order": 43,
    "pt": "Sim, autorizo.",
    "en": "Yes, I do.",
    "zhHans": "是的，我授權。",
    "zhHant": "是的，我授權。"
  },
  {
    "id": "dialogo-aima-vamos-agora-recolher-os-dados-biometricos",
    "situacao": "aima",
    "order": 44,
    "pt": "Vamos agora recolher os dados biométricos.",
    "en": "We'll now collect your biometric data.",
    "zhHans": "現在我們採集您的生物識別資料。",
    "zhHant": "現在我們採集您的生物識別資料。"
  },
  {
    "id": "dialogo-aima-quando-recebo-o-novo-titulo",
    "situacao": "aima",
    "order": 45,
    "pt": "Quando recebo o novo título?",
    "en": "When will I receive the new card?",
    "zhHans": "新證件什麼時候能拿到？",
    "zhHant": "新證件什麼時候能拿到？"
  },
  {
    "id": "dialogo-aima-e-enviado-por-correio-para-a-sua-morada-guarde-o-compr",
    "situacao": "aima",
    "order": 46,
    "pt": "É enviado por correio para a sua morada. Guarde o comprovativo do pedido.",
    "en": "It's sent by post to your address. Keep the proof of application.",
    "zhHans": "會郵寄到您的地址。請保存好申請憑證。",
    "zhHant": "會郵寄到您的地址。請保存好申請憑證。"
  },
  {
    "id": "dialogo-escola-bom-dia-queria-matricular-a-minha-filha-na-escola",
    "situacao": "escola",
    "order": 47,
    "pt": "Bom dia, queria matricular a minha filha na escola.",
    "en": "Good morning, I'd like to enrol my daughter in school.",
    "zhHans": "早上好，我想給女兒辦理入學註冊。",
    "zhHant": "早上好，我想給女兒辦理入學註冊。"
  },
  {
    "id": "dialogo-escola-a-matricula-faz-se-online-no-portal-das-matriculas-pre",
    "situacao": "escola",
    "order": 48,
    "pt": "A matrícula faz-se online, no Portal das Matrículas. Precisa de ajuda?",
    "en": "Enrolment is done online, on the enrolment portal. Do you need help?",
    "zhHans": "註冊在入學網站上在線辦理。需要幫忙嗎？",
    "zhHant": "註冊在入學網站上在線辦理。需要幫忙嗎？"
  },
  {
    "id": "dialogo-escola-sim-por-favor-que-documentos-sao-precisos",
    "situacao": "escola",
    "order": 49,
    "pt": "Sim, por favor. Que documentos são precisos?",
    "en": "Yes, please. What documents are needed?",
    "zhHans": "好的，麻煩您。需要哪些文件？",
    "zhHant": "好的，麻煩您。需要哪些文件？"
  },
  {
    "id": "dialogo-escola-documento-de-identificacao-da-crianca-numero-de-utente",
    "situacao": "escola",
    "order": 50,
    "pt": "Documento de identificação da criança, número de utente, boletim de vacinas e comprovativo de morada.",
    "en": "The child's ID, health number, vaccination record and proof of address.",
    "zhHans": "孩子的身份證件、醫療用戶號、疫苗記錄和住址證明。",
    "zhHant": "孩子的身份證件、醫療用戶號、疫苗記錄和住址證明。"
  },
  {
    "id": "dialogo-escola-ela-pode-ter-apoio-para-as-refeicoes",
    "situacao": "escola",
    "order": 51,
    "pt": "Ela pode ter apoio para as refeições?",
    "en": "Can she get support for school meals?",
    "zhHans": "她可以申請餐費補助嗎？",
    "zhHant": "她可以申請餐費補助嗎？"
  },
  {
    "id": "dialogo-escola-sim-atraves-da-acao-social-escolar-precisa-do-niss-e-d",
    "situacao": "escola",
    "order": 52,
    "pt": "Sim, através da Ação Social Escolar — precisa do NISS e do escalão do abono.",
    "en": "Yes, through school social support — you need her NISS and the family allowance bracket.",
    "zhHans": "可以，通過學校社會援助——需要她的社保號和家庭津貼等級。",
    "zhHant": "可以，通過學校社會援助——需要她的社保號和家庭津貼等級。"
  },
  {
    "id": "dialogo-escola-quando-comecam-as-aulas",
    "situacao": "escola",
    "order": 53,
    "pt": "Quando começam as aulas?",
    "en": "When do classes start?",
    "zhHans": "什麼時候開學？",
    "zhHant": "什麼時候開學？"
  },
  {
    "id": "dialogo-escola-em-setembro-a-lista-de-turmas-sai-no-portal-e-na-escol",
    "situacao": "escola",
    "order": 54,
    "pt": "Em setembro. A lista de turmas sai no portal e na escola.",
    "en": "In September. Class lists are published on the portal and at the school.",
    "zhHans": "九月。班級名單會在網站和學校公佈。",
    "zhHant": "九月。班級名單會在網站和學校公佈。"
  },
  {
    "id": "dialogo-iefp-bom-dia-queria-inscrever-me-como-candidato-a-emprego",
    "situacao": "iefp",
    "order": 55,
    "pt": "Bom dia, queria inscrever-me como candidato a emprego.",
    "en": "Good morning, I'd like to register as a jobseeker.",
    "zhHans": "早上好，我想登記為求職者。",
    "zhHant": "早上好，我想登記為求職者。"
  },
  {
    "id": "dialogo-iefp-tem-documento-de-identificacao-nif-niss-e-comprovativo",
    "situacao": "iefp",
    "order": 56,
    "pt": "Tem documento de identificação, NIF, NISS e comprovativo de morada?",
    "en": "Do you have ID, tax number, social security number and proof of address?",
    "zhHans": "您有身份證件、稅號、社保號和住址證明嗎？",
    "zhHant": "您有身份證件、稅號、社保號和住址證明嗎？"
  },
  {
    "id": "dialogo-iefp-tenho-tudo-tambem-perdi-o-emprego-ha-duas-semanas",
    "situacao": "iefp",
    "order": 57,
    "pt": "Tenho tudo. Também perdi o emprego há duas semanas.",
    "en": "I have everything. I also lost my job two weeks ago.",
    "zhHans": "都有。另外我兩週前失業了。",
    "zhHant": "都有。另外我兩週前失業了。"
  },
  {
    "id": "dialogo-iefp-entao-pode-pedir-o-subsidio-de-desemprego-o-prazo-e-de",
    "situacao": "iefp",
    "order": 58,
    "pt": "Então pode pedir o subsídio de desemprego — o prazo é de 90 dias.",
    "en": "Then you can apply for unemployment benefit — the deadline is 90 days.",
    "zhHans": "那您可以申請失業救濟金——期限是90天。",
    "zhHant": "那您可以申請失業救濟金——期限是90天。"
  },
  {
    "id": "dialogo-iefp-que-documentos-preciso-para-o-subsidio",
    "situacao": "iefp",
    "order": 59,
    "pt": "Que documentos preciso para o subsídio?",
    "en": "What documents do I need for the benefit?",
    "zhHans": "申請救濟金需要哪些文件？",
    "zhHant": "申請救濟金需要哪些文件？"
  },
  {
    "id": "dialogo-iefp-a-declaracao-da-entidade-empregadora-e-o-iban",
    "situacao": "iefp",
    "order": 60,
    "pt": "A declaração da entidade empregadora e o IBAN.",
    "en": "The employer's declaration and your IBAN.",
    "zhHans": "僱主的解僱聲明和您的IBAN。",
    "zhHant": "僱主的解僱聲明和您的IBAN。"
  },
  {
    "id": "dialogo-iefp-ha-cursos-de-formacao-disponiveis",
    "situacao": "iefp",
    "order": 61,
    "pt": "Há cursos de formação disponíveis?",
    "en": "Are there training courses available?",
    "zhHans": "有職業培訓課程嗎？",
    "zhHant": "有職業培訓課程嗎？"
  },
  {
    "id": "dialogo-iefp-sim-o-seu-gestor-pessoal-vai-definir-isso-consigo-no-p",
    "situacao": "iefp",
    "order": 62,
    "pt": "Sim, o seu gestor pessoal vai definir isso consigo no Plano Pessoal de Emprego.",
    "en": "Yes, your case officer will set that up with you in your Personal Employment Plan.",
    "zhHans": "有，您的個人專員會在個人就業計劃中和您一起安排。",
    "zhHant": "有，您的個人專員會在個人就業計劃中和您一起安排。"
  },
  {
    "id": "dialogo-seguranca-social-bom-dia-preciso-de-pedir-o-niss-para-comecar-a-trabalh",
    "situacao": "seguranca_social",
    "order": 63,
    "pt": "Bom dia, preciso de pedir o NISS para começar a trabalhar.",
    "en": "Good morning, I need to apply for a social security number to start working.",
    "zhHans": "早上好，我需要申請社保號才能開始工作。",
    "zhHant": "早上好，我需要申請社保號才能開始工作。"
  },
  {
    "id": "dialogo-seguranca-social-tem-contrato-de-trabalho-ou-promessa-de-contrato",
    "situacao": "seguranca_social",
    "order": 64,
    "pt": "Tem contrato de trabalho ou promessa de contrato?",
    "en": "Do you have a work contract or a contract offer?",
    "zhHans": "您有勞動合同或錄用意向書嗎？",
    "zhHant": "您有勞動合同或錄用意向書嗎？"
  },
  {
    "id": "dialogo-seguranca-social-tenho-o-contrato-assinado-pela-empresa",
    "situacao": "seguranca_social",
    "order": 65,
    "pt": "Tenho o contrato assinado pela empresa.",
    "en": "I have the contract signed by the company.",
    "zhHans": "我有公司簽好的合同。",
    "zhHant": "我有公司簽好的合同。"
  },
  {
    "id": "dialogo-seguranca-social-entao-junte-o-passaporte-e-o-comprovativo-de-morada-a-",
    "situacao": "seguranca_social",
    "order": 66,
    "pt": "Então junte o passaporte e o comprovativo de morada a este formulário.",
    "en": "Then attach your passport and proof of address to this form.",
    "zhHans": "那請把護照和住址證明附在這張表格上。",
    "zhHant": "那請把護照和住址證明附在這張表格上。"
  },
  {
    "id": "dialogo-seguranca-social-quanto-tempo-demora-a-atribuicao",
    "situacao": "seguranca_social",
    "order": 67,
    "pt": "Quanto tempo demora a atribuição?",
    "en": "How long does it take to be issued?",
    "zhHans": "多久能發下來？",
    "zhHant": "多久能發下來？"
  },
  {
    "id": "dialogo-seguranca-social-alguns-dias-recebe-o-niss-por-email-ou-carta-guarde-o-",
    "situacao": "seguranca_social",
    "order": 68,
    "pt": "Alguns dias. Recebe o NISS por email ou carta. Guarde o comprovativo.",
    "en": "A few days. You'll receive the NISS by email or post. Keep the receipt.",
    "zhHans": "幾天。社保號會通過郵件或信件發給您。請保存好憑證。",
    "zhHant": "幾天。社保號會通過郵件或信件發給您。請保存好憑證。"
  },
  {
    "id": "dialogo-seguranca-social-depois-posso-aceder-a-seguranca-social-direta",
    "situacao": "seguranca_social",
    "order": 69,
    "pt": "Depois posso aceder à Segurança Social Direta?",
    "en": "Can I then access the online portal?",
    "zhHans": "之後我可以登入社保線上平台嗎？",
    "zhHant": "之後我可以登入社保線上平台嗎？"
  },
  {
    "id": "dialogo-seguranca-social-sim-regista-se-online-com-o-niss-e-recebe-a-senha-em-c",
    "situacao": "seguranca_social",
    "order": 70,
    "pt": "Sim, regista-se online com o NISS e recebe a senha em casa.",
    "en": "Yes, you register online with your NISS and receive the password at home.",
    "zhHans": "可以，用社保號在線註冊，密碼會寄到家裡。",
    "zhHant": "可以，用社保號在線註冊，密碼會寄到家裡。"
  },
  {
    "id": "dialogo-arrendamento-boa-tarde-venho-ver-o-t1-anunciado-ainda-esta-disponiv",
    "situacao": "arrendamento",
    "order": 71,
    "pt": "Boa tarde, venho ver o T1 anunciado. Ainda está disponível?",
    "en": "Good afternoon, I've come to see the advertised one-bed flat. Is it still available?",
    "zhHans": "下午好，我來看廣告上的一房公寓。還在出租嗎？",
    "zhHant": "下午好，我來看廣告上的一房公寓。還在出租嗎？"
  },
  {
    "id": "dialogo-arrendamento-esta-sim-a-renda-e-de-850-euros-com-um-mes-de-caucao",
    "situacao": "arrendamento",
    "order": 72,
    "pt": "Está, sim. A renda é de 850 euros, com um mês de caução.",
    "en": "It is. The rent is 850 euros, with one month's deposit.",
    "zhHans": "還在。租金850歐元，押金一個月。",
    "zhHant": "還在。租金850歐元，押金一個月。"
  },
  {
    "id": "dialogo-arrendamento-as-despesas-estao-incluidas",
    "situacao": "arrendamento",
    "order": 73,
    "pt": "As despesas estão incluídas?",
    "en": "Are bills included?",
    "zhHans": "包水電雜費嗎？",
    "zhHant": "包水電雜費嗎？"
  },
  {
    "id": "dialogo-arrendamento-a-agua-sim-a-luz-e-a-internet-sao-a-parte",
    "situacao": "arrendamento",
    "order": 74,
    "pt": "A água sim; a luz e a internet são à parte.",
    "en": "Water yes; electricity and internet are separate.",
    "zhHans": "包水費；電費和網費另算。",
    "zhHant": "包水費；電費和網費另算。"
  },
  {
    "id": "dialogo-arrendamento-precisa-de-fiador-ainda-nao-tenho-recibos-de-venciment",
    "situacao": "arrendamento",
    "order": 75,
    "pt": "Precisa de fiador? Ainda não tenho recibos de vencimento cá.",
    "en": "Do you need a guarantor? I don't have payslips here yet.",
    "zhHans": "需要擔保人嗎？我在這裡還沒有工資單。",
    "zhHant": "需要擔保人嗎？我在這裡還沒有工資單。"
  },
  {
    "id": "dialogo-arrendamento-nesse-caso-pedia-dois-meses-de-caucao-com-contrato-e-r",
    "situacao": "arrendamento",
    "order": 76,
    "pt": "Nesse caso pedia dois meses de caução, com contrato e recibos de renda.",
    "en": "In that case I'd ask for two months' deposit, with a contract and rent receipts.",
    "zhHans": "那樣的話押金要兩個月，會簽合同、開租金收據。",
    "zhHant": "那樣的話押金要兩個月，會簽合同、開租金收據。"
  },
  {
    "id": "dialogo-arrendamento-combinado-quando-posso-assinar-o-contrato",
    "situacao": "arrendamento",
    "order": 77,
    "pt": "Combinado. Quando posso assinar o contrato?",
    "en": "Agreed. When can I sign the contract?",
    "zhHans": "可以。什麼時候可以簽合同？",
    "zhHant": "可以。什麼時候可以簽合同？"
  },
  {
    "id": "dialogo-transportes-boa-tarde-queria-fazer-o-passe-navegante",
    "situacao": "transportes",
    "order": 78,
    "pt": "Boa tarde, queria fazer o passe navegante.",
    "en": "Good afternoon, I'd like to get a navegante pass.",
    "zhHans": "下午好，我想辦一張navegante月票。",
    "zhHant": "下午好，我想辦一張navegante月票。"
  },
  {
    "id": "dialogo-transportes-precisa-de-uma-fotografia-e-de-um-documento-de-identif",
    "situacao": "transportes",
    "order": 79,
    "pt": "Precisa de uma fotografia e de um documento de identificação.",
    "en": "You need a photo and an ID document.",
    "zhHans": "需要一張照片和一份身份證件。",
    "zhHant": "需要一張照片和一份身份證件。"
  },
  {
    "id": "dialogo-transportes-posso-carregar-o-passe-mensal-ja-hoje",
    "situacao": "transportes",
    "order": 80,
    "pt": "Posso carregar o passe mensal já hoje?",
    "en": "Can I load the monthly pass today?",
    "zhHans": "今天就可以充值月票嗎？",
    "zhHant": "今天就可以充值月票嗎？"
  },
  {
    "id": "dialogo-transportes-sim-na-maquina-ou-aqui-ao-balcao",
    "situacao": "transportes",
    "order": 81,
    "pt": "Sim, na máquina ou aqui ao balcão.",
    "en": "Yes, at the machine or here at the counter.",
    "zhHans": "可以，在售票機或這個櫃檯都行。",
    "zhHant": "可以，在售票機或這個櫃檯都行。"
  },
  {
    "id": "dialogo-transportes-este-autocarro-vai-para-o-centro",
    "situacao": "transportes",
    "order": 82,
    "pt": "Este autocarro vai para o centro?",
    "en": "Does this bus go to the city centre?",
    "zhHans": "這班公交去市中心嗎？",
    "zhHant": "這班公交去市中心嗎？"
  },
  {
    "id": "dialogo-transportes-vai-sim-nao-se-esqueca-de-validar-o-cartao-ao-entrar",
    "situacao": "transportes",
    "order": 83,
    "pt": "Vai, sim. Não se esqueça de validar o cartão ao entrar.",
    "en": "It does. Don't forget to validate your card when boarding.",
    "zhHans": "去的。上車別忘了打卡。",
    "zhHant": "去的。上車別忘了打卡。"
  },
  {
    "id": "dialogo-transportes-onde-fica-a-paragem-para-o-sentido-contrario",
    "situacao": "transportes",
    "order": 84,
    "pt": "Onde fica a paragem para o sentido contrário?",
    "en": "Where is the stop for the opposite direction?",
    "zhHans": "反方向的車站在哪裡？",
    "zhHant": "反方向的車站在哪裡？"
  },
  {
    "id": "dialogo-trabalho-hotelaria-bom-dia-hoje-fazes-os-quartos-do-terceiro-andar",
    "situacao": "trabalho_hotelaria",
    "order": 85,
    "pt": "Bom dia! Hoje fazes os quartos do terceiro andar.",
    "en": "Good morning! Today you're doing the third-floor rooms.",
    "zhHans": "早上好！今天你負責三樓的客房。",
    "zhHant": "早上好！今天你負責三樓的客房。"
  },
  {
    "id": "dialogo-trabalho-hotelaria-esta-bem-quantos-check-outs-ha",
    "situacao": "trabalho_hotelaria",
    "order": 86,
    "pt": "Está bem. Quantos check-outs há?",
    "en": "Alright. How many check-outs are there?",
    "zhHans": "好的。有幾間退房？",
    "zhHant": "好的。有幾間退房？"
  },
  {
    "id": "dialogo-trabalho-hotelaria-seis-os-quartos-302-e-305-sao-so-arrumacao",
    "situacao": "trabalho_hotelaria",
    "order": 87,
    "pt": "Seis. Os quartos 302 e 305 são só arrumação.",
    "en": "Six. Rooms 302 and 305 are tidy-up only.",
    "zhHans": "六間。302和305只需整理。",
    "zhHant": "六間。302和305只需整理。"
  },
  {
    "id": "dialogo-trabalho-hotelaria-faltam-toalhas-no-carrinho-onde-vou-buscar",
    "situacao": "trabalho_hotelaria",
    "order": 88,
    "pt": "Faltam toalhas no carrinho — onde vou buscar?",
    "en": "The cart is out of towels — where do I get more?",
    "zhHans": "工作車上毛巾不夠了——去哪裡拿？",
    "zhHant": "工作車上毛巾不夠了——去哪裡拿？"
  },
  {
    "id": "dialogo-trabalho-hotelaria-na-rouparia-ao-fundo-do-corredor",
    "situacao": "trabalho_hotelaria",
    "order": 89,
    "pt": "Na rouparia, ao fundo do corredor.",
    "en": "In the linen room, at the end of the corridor.",
    "zhHans": "在走廊盡頭的布草房。",
    "zhHant": "在走廊盡頭的布草房。"
  },
  {
    "id": "dialogo-trabalho-hotelaria-um-hospede-pediu-mais-uma-almofada-para-o-310",
    "situacao": "trabalho_hotelaria",
    "order": 90,
    "pt": "Um hóspede pediu mais uma almofada para o 310.",
    "en": "A guest asked for an extra pillow for room 310.",
    "zhHans": "有位住客要求給310房加一個枕頭。",
    "zhHant": "有位住客要求給310房加一個枕頭。"
  },
  {
    "id": "dialogo-trabalho-hotelaria-eu-levo-a-tua-folga-esta-semana-e-na-quinta-pode-ser",
    "situacao": "trabalho_hotelaria",
    "order": 91,
    "pt": "Eu levo. A tua folga esta semana é na quinta, pode ser?",
    "en": "I'll take it. Your day off this week is Thursday, is that okay?",
    "zhHans": "我送過去。你這週四休息，可以嗎？",
    "zhHant": "我送過去。你這週四休息，可以嗎？"
  },
  {
    "id": "dialogo-trabalho-restauracao-boa-tarde-mesa-para-dois",
    "situacao": "trabalho_restauracao",
    "order": 92,
    "pt": "Boa tarde! Mesa para dois?",
    "en": "Good afternoon! Table for two?",
    "zhHans": "下午好！兩位嗎？",
    "zhHant": "下午好！兩位嗎？"
  },
  {
    "id": "dialogo-trabalho-restauracao-posso-anotar-o-pedido",
    "situacao": "trabalho_restauracao",
    "order": 93,
    "pt": "Posso anotar o pedido?",
    "en": "May I take your order?",
    "zhHans": "可以點單了嗎？",
    "zhHant": "可以點單了嗎？"
  },
  {
    "id": "dialogo-trabalho-restauracao-o-que-e-o-prato-do-dia",
    "situacao": "trabalho_restauracao",
    "order": 94,
    "pt": "O que é o prato do dia?",
    "en": "What's the dish of the day?",
    "zhHans": "今日特餐是什麼？",
    "zhHant": "今日特餐是什麼？"
  },
  {
    "id": "dialogo-trabalho-restauracao-hoje-e-bacalhau-a-bras-vem-com-salada",
    "situacao": "trabalho_restauracao",
    "order": 95,
    "pt": "Hoje é bacalhau à Brás. Vem com salada.",
    "en": "Today it's cod 'à Brás'. It comes with salad.",
    "zhHans": "今天是布拉斯式馬介休，配沙拉。",
    "zhHant": "今天是布拉斯式馬介休，配沙拉。"
  },
  {
    "id": "dialogo-trabalho-restauracao-marchar-duas-doses-de-bacalhau-para-a-mesa-cinco",
    "situacao": "trabalho_restauracao",
    "order": 96,
    "pt": "Marchar duas doses de bacalhau para a mesa cinco!",
    "en": "Two portions of cod for table five, fire away!",
    "zhHans": "五號桌兩份馬介休，起菜！",
    "zhHant": "五號桌兩份馬介休，起菜！"
  },
  {
    "id": "dialogo-trabalho-restauracao-a-conta-por-favor-com-certeza-ja-trago",
    "situacao": "trabalho_restauracao",
    "order": 97,
    "pt": "A conta, por favor. — Com certeza, já trago.",
    "en": "The bill, please. — Of course, right away.",
    "zhHans": "麻煩結賬。——好的，馬上來。",
    "zhHant": "麻煩結賬。——好的，馬上來。"
  },
  {
    "id": "dialogo-trabalho-restauracao-podes-fechar-a-esplanada-e-limpar-as-mesas",
    "situacao": "trabalho_restauracao",
    "order": 98,
    "pt": "Podes fechar a esplanada e limpar as mesas?",
    "en": "Can you close the terrace and clean the tables?",
    "zhHans": "你可以收露天座位、擦一下桌子嗎？",
    "zhHant": "你可以收露天座位、擦一下桌子嗎？"
  },
  {
    "id": "dialogo-trabalho-limpezas-bom-dia-procuro-alguem-para-limpezas-duas-vezes-por-se",
    "situacao": "trabalho_limpezas",
    "order": 99,
    "pt": "Bom dia. Procuro alguém para limpezas duas vezes por semana.",
    "en": "Good morning. I'm looking for someone to clean twice a week.",
    "zhHans": "早上好。我想找人一週打掃兩次。",
    "zhHant": "早上好。我想找人一週打掃兩次。"
  },
  {
    "id": "dialogo-trabalho-limpezas-eu-tenho-disponibilidade-as-tercas-e-sextas-de-manha",
    "situacao": "trabalho_limpezas",
    "order": 100,
    "pt": "Eu tenho disponibilidade às terças e sextas de manhã.",
    "en": "I'm available Tuesday and Friday mornings.",
    "zhHans": "我週二和週五上午有空。",
    "zhHant": "我週二和週五上午有空。"
  },
  {
    "id": "dialogo-trabalho-limpezas-quanto-cobra-a-hora",
    "situacao": "trabalho_limpezas",
    "order": 101,
    "pt": "Quanto cobra à hora?",
    "en": "How much do you charge per hour?",
    "zhHans": "您每小時收多少錢？",
    "zhHant": "您每小時收多少錢？"
  },
  {
    "id": "dialogo-trabalho-limpezas-doze-euros-a-hora-com-recibo-verde",
    "situacao": "trabalho_limpezas",
    "order": 102,
    "pt": "Doze euros à hora, com recibo verde.",
    "en": "Twelve euros an hour, with a freelance receipt.",
    "zhHans": "每小時十二歐元，開綠色收據。",
    "zhHant": "每小時十二歐元，開綠色收據。"
  },
  {
    "id": "dialogo-trabalho-limpezas-esta-bem-o-material-de-limpeza-fica-ca-em-casa",
    "situacao": "trabalho_limpezas",
    "order": 103,
    "pt": "Está bem. O material de limpeza fica cá em casa.",
    "en": "Alright. The cleaning supplies are kept here at the house.",
    "zhHans": "好的。清潔用品放在家裡。",
    "zhHant": "好的。清潔用品放在家裡。"
  },
  {
    "id": "dialogo-trabalho-limpezas-prefere-que-aspire-primeiro-e-depois-esfregue-o-chao",
    "situacao": "trabalho_limpezas",
    "order": 104,
    "pt": "Prefere que aspire primeiro e depois esfregue o chão?",
    "en": "Do you prefer I vacuum first and then mop?",
    "zhHans": "您希望我先吸塵再拖地嗎？",
    "zhHant": "您希望我先吸塵再拖地嗎？"
  },
  {
    "id": "dialogo-trabalho-limpezas-sim-e-atencao-nao-use-lixivia-no-chao-de-madeira",
    "situacao": "trabalho_limpezas",
    "order": 105,
    "pt": "Sim, e atenção: não use lixívia no chão de madeira.",
    "en": "Yes, and careful: don't use bleach on the wooden floor.",
    "zhHans": "對，注意：木地板不要用漂白水。",
    "zhHant": "對，注意：木地板不要用漂白水。"
  },
  {
    "id": "dialogo-trabalho-construcao-bom-dia-hoje-ficas-a-ajudar-o-pedreiro-no-segundo-piso",
    "situacao": "trabalho_construcao",
    "order": 106,
    "pt": "Bom dia. Hoje ficas a ajudar o pedreiro no segundo piso.",
    "en": "Good morning. Today you're helping the mason on the second floor.",
    "zhHans": "早上好。今天你在二樓給泥瓦工打下手。",
    "zhHant": "早上好。今天你在二樓給泥瓦工打下手。"
  },
  {
    "id": "dialogo-trabalho-construcao-entendido-onde-estao-os-capacetes",
    "situacao": "trabalho_construcao",
    "order": 107,
    "pt": "Entendido. Onde estão os capacetes?",
    "en": "Understood. Where are the hard hats?",
    "zhHans": "明白。安全帽在哪裡？",
    "zhHant": "明白。安全帽在哪裡？"
  },
  {
    "id": "dialogo-trabalho-construcao-no-contentor-o-epi-e-obrigatorio-em-toda-a-obra",
    "situacao": "trabalho_construcao",
    "order": 108,
    "pt": "No contentor. O EPI é obrigatório em toda a obra.",
    "en": "In the container. PPE is mandatory on the whole site.",
    "zhHans": "在集裝箱裡。整個工地都必須穿戴防護裝備。",
    "zhHant": "在集裝箱裡。整個工地都必須穿戴防護裝備。"
  },
  {
    "id": "dialogo-trabalho-construcao-precisamos-de-mais-cimento-para-a-betoneira",
    "situacao": "trabalho_construcao",
    "order": 109,
    "pt": "Precisamos de mais cimento para a betoneira.",
    "en": "We need more cement for the mixer.",
    "zhHans": "攪拌機需要再加水泥。",
    "zhHant": "攪拌機需要再加水泥。"
  },
  {
    "id": "dialogo-trabalho-construcao-cuidado-com-o-andaime-ainda-nao-esta-fixo",
    "situacao": "trabalho_construcao",
    "order": 110,
    "pt": "Cuidado com o andaime — ainda não está fixo.",
    "en": "Careful with the scaffolding — it's not secured yet.",
    "zhHans": "小心腳手架——還沒固定好。",
    "zhHant": "小心腳手架——還沒固定好。"
  },
  {
    "id": "dialogo-trabalho-construcao-a-que-horas-e-a-pausa-para-almoco",
    "situacao": "trabalho_construcao",
    "order": 111,
    "pt": "A que horas é a pausa para almoço?",
    "en": "What time is the lunch break?",
    "zhHans": "午飯休息是幾點？",
    "zhHant": "午飯休息是幾點？"
  },
  {
    "id": "dialogo-trabalho-construcao-ao-meio-dia-e-nao-te-esquecas-de-assinar-a-folha-de-pr",
    "situacao": "trabalho_construcao",
    "order": 112,
    "pt": "Ao meio-dia. E não te esqueças de assinar a folha de presença.",
    "en": "At noon. And don't forget to sign the attendance sheet.",
    "zhHans": "中午十二點。別忘了在考勤表上簽名。",
    "zhHant": "中午十二點。別忘了在考勤表上簽名。"
  },
  {
    "id": "dialogo-trabalho-entregas-boa-noite-tenho-uma-entrega-para-o-joao",
    "situacao": "trabalho_entregas",
    "order": 113,
    "pt": "Boa noite, tenho uma entrega para o João.",
    "en": "Good evening, I have a delivery for João.",
    "zhHans": "晚上好，有João的外賣。",
    "zhHant": "晚上好，有João的外賣。"
  },
  {
    "id": "dialogo-trabalho-entregas-e-no-terceiro-andar-o-codigo-da-porta-e-1530",
    "situacao": "trabalho_entregas",
    "order": 114,
    "pt": "É no terceiro andar. O código da porta é 1530.",
    "en": "It's on the third floor. The door code is 1530.",
    "zhHans": "在三樓。門禁密碼是1530。",
    "zhHant": "在三樓。門禁密碼是1530。"
  },
  {
    "id": "dialogo-trabalho-entregas-o-interfone-nao-funciona-pode-descer-para-levantar-o-p",
    "situacao": "trabalho_entregas",
    "order": 115,
    "pt": "O interfone não funciona — pode descer para levantar o pedido?",
    "en": "The intercom isn't working — can you come down to collect the order?",
    "zhHans": "對講機壞了——您可以下來取餐嗎？",
    "zhHant": "對講機壞了——您可以下來取餐嗎？"
  },
  {
    "id": "dialogo-trabalho-entregas-estou-na-entrada-com-a-mochila-vermelha",
    "situacao": "trabalho_entregas",
    "order": 116,
    "pt": "Estou na entrada, com a mochila vermelha.",
    "en": "I'm at the entrance, with the red delivery bag.",
    "zhHans": "我在門口，背紅色保溫箱。",
    "zhHant": "我在門口，背紅色保溫箱。"
  },
  {
    "id": "dialogo-trabalho-entregas-desculpe-o-atraso-havia-muito-transito",
    "situacao": "trabalho_entregas",
    "order": 117,
    "pt": "Desculpe o atraso, havia muito trânsito.",
    "en": "Sorry for the delay, there was a lot of traffic.",
    "zhHans": "抱歉來晚了，路上很堵。",
    "zhHant": "抱歉來晚了，路上很堵。"
  },
  {
    "id": "dialogo-trabalho-entregas-confirma-o-pedido-na-app-por-favor-boa-noite",
    "situacao": "trabalho_entregas",
    "order": 118,
    "pt": "Confirma o pedido na app, por favor. Boa noite!",
    "en": "Please confirm the order in the app. Good night!",
    "zhHans": "請在應用裡確認收餐。晚安！",
    "zhHant": "請在應用裡確認收餐。晚安！"
  }
];

export const situacaoCheatSheetLines: SituacaoContentLine[] = [
  {
    "id": "cartao-banco-queria-abrir-uma-conta-por-favor",
    "situacao": "banco",
    "order": 0,
    "pt": "Queria abrir uma conta, por favor.",
    "en": "I'd like to open an account, please.",
    "zhHans": "我想開個帳戶，麻煩您。",
    "zhHant": "我想開個帳戶，麻煩您。"
  },
  {
    "id": "cartao-banco-trago-o-passaporte-o-nif-e-o-comprovativo-de-morada",
    "situacao": "banco",
    "order": 1,
    "pt": "Trago o passaporte, o NIF e o comprovativo de morada.",
    "en": "I have my passport, NIF and proof of address with me.",
    "zhHans": "我帶了護照、稅號和住址證明。",
    "zhHant": "我帶了護照、稅號和住址證明。"
  },
  {
    "id": "cartao-banco-qual-e-o-valor-minimo-do-deposito-inicial",
    "situacao": "banco",
    "order": 2,
    "pt": "Qual é o valor mínimo do depósito inicial?",
    "en": "What is the minimum initial deposit?",
    "zhHans": "開戶最低存款是多少？",
    "zhHant": "開戶最低存款是多少？"
  },
  {
    "id": "cartao-banco-ha-comissoes-mensais-nesta-conta",
    "situacao": "banco",
    "order": 3,
    "pt": "Há comissões mensais nesta conta?",
    "en": "Are there monthly fees on this account?",
    "zhHans": "這個帳戶有月費嗎？",
    "zhHant": "這個帳戶有月費嗎？"
  },
  {
    "id": "cartao-banco-pode-dar-me-o-comprovativo-do-iban",
    "situacao": "banco",
    "order": 4,
    "pt": "Pode dar-me o comprovativo do IBAN?",
    "en": "Could you give me proof of my IBAN?",
    "zhHans": "可以給我一份IBAN證明嗎？",
    "zhHant": "可以給我一份IBAN證明嗎？"
  },
  {
    "id": "cartao-banco-quando-chega-o-cartao",
    "situacao": "banco",
    "order": 5,
    "pt": "Quando chega o cartão?",
    "en": "When will the card arrive?",
    "zhHans": "卡什麼時候寄到？",
    "zhHant": "卡什麼時候寄到？"
  },
  {
    "id": "cartao-financas-vim-tratar-do-nif",
    "situacao": "financas",
    "order": 6,
    "pt": "Vim tratar do NIF.",
    "en": "I'm here to sort out my tax number.",
    "zhHans": "我來辦理稅號。",
    "zhHant": "我來辦理稅號。"
  },
  {
    "id": "cartao-financas-onde-tiro-a-senha-por-favor",
    "situacao": "financas",
    "order": 7,
    "pt": "Onde tiro a senha, por favor?",
    "en": "Where do I take a queue ticket, please?",
    "zhHans": "請問在哪裡取號？",
    "zhHant": "請問在哪裡取號？"
  },
  {
    "id": "cartao-financas-trago-passaporte-e-comprovativo-de-morada",
    "situacao": "financas",
    "order": 8,
    "pt": "Trago passaporte e comprovativo de morada.",
    "en": "I have my passport and proof of address.",
    "zhHans": "我帶了護照和住址證明。",
    "zhHant": "我帶了護照和住址證明。"
  },
  {
    "id": "cartao-financas-preciso-de-representante-fiscal",
    "situacao": "financas",
    "order": 9,
    "pt": "Preciso de representante fiscal?",
    "en": "Do I need a tax representative?",
    "zhHans": "我需要稅務代表嗎？",
    "zhHant": "我需要稅務代表嗎？"
  },
  {
    "id": "cartao-financas-a-senha-do-portal-vem-por-correio",
    "situacao": "financas",
    "order": 10,
    "pt": "A senha do portal vem por correio?",
    "en": "Does the portal password come by post?",
    "zhHans": "網站密碼是郵寄的嗎？",
    "zhHant": "網站密碼是郵寄的嗎？"
  },
  {
    "id": "cartao-financas-quero-atualizar-o-meu-domicilio-fiscal",
    "situacao": "financas",
    "order": 11,
    "pt": "Quero atualizar o meu domicílio fiscal.",
    "en": "I want to update my tax address.",
    "zhHans": "我想更新我的稅務登記地址。",
    "zhHant": "我想更新我的稅務登記地址。"
  },
  {
    "id": "cartao-correios-queria-enviar-esta-carta-registada",
    "situacao": "correios",
    "order": 12,
    "pt": "Queria enviar esta carta registada.",
    "en": "I'd like to send this letter by registered mail.",
    "zhHans": "我想寄這封掛號信。",
    "zhHant": "我想寄這封掛號信。"
  },
  {
    "id": "cartao-correios-com-aviso-de-rececao-por-favor",
    "situacao": "correios",
    "order": 13,
    "pt": "Com aviso de receção, por favor.",
    "en": "With proof of delivery, please.",
    "zhHans": "請加回執。",
    "zhHant": "請加回執。"
  },
  {
    "id": "cartao-correios-vim-levantar-uma-encomenda-tenho-o-aviso",
    "situacao": "correios",
    "order": 14,
    "pt": "Vim levantar uma encomenda — tenho o aviso.",
    "en": "I'm here to collect a parcel — I have the notice.",
    "zhHans": "我來取包裹——我有取件通知單。",
    "zhHant": "我來取包裹——我有取件通知單。"
  },
  {
    "id": "cartao-correios-aqui-esta-o-meu-documento-de-identificacao",
    "situacao": "correios",
    "order": 15,
    "pt": "Aqui está o meu documento de identificação.",
    "en": "Here's my ID.",
    "zhHans": "這是我的證件。",
    "zhHant": "這是我的證件。"
  },
  {
    "id": "cartao-correios-qual-e-o-codigo-de-rastreio",
    "situacao": "correios",
    "order": 16,
    "pt": "Qual é o código de rastreio?",
    "en": "What's the tracking number?",
    "zhHans": "追蹤編號是多少？",
    "zhHant": "追蹤編號是多少？"
  },
  {
    "id": "cartao-correios-quanto-custa-enviar-para-o-estrangeiro",
    "situacao": "correios",
    "order": 17,
    "pt": "Quanto custa enviar para o estrangeiro?",
    "en": "How much does it cost to send abroad?",
    "zhHans": "寄國外要多少錢？",
    "zhHant": "寄國外要多少錢？"
  },
  {
    "id": "cartao-junta-de-freguesia-preciso-de-um-atestado-de-residencia-por-favor",
    "situacao": "junta_de_freguesia",
    "order": 18,
    "pt": "Preciso de um atestado de residência, por favor.",
    "en": "I need a certificate of residence, please.",
    "zhHans": "我需要一份居住證明，麻煩您。",
    "zhHant": "我需要一份居住證明，麻煩您。"
  },
  {
    "id": "cartao-junta-de-freguesia-moro-nesta-freguesia-ha-x-meses",
    "situacao": "junta_de_freguesia",
    "order": 19,
    "pt": "Moro nesta freguesia há X meses.",
    "en": "I've lived in this parish for X months.",
    "zhHans": "我在本堂區住了X個月。",
    "zhHant": "我在本堂區住了X個月。"
  },
  {
    "id": "cartao-junta-de-freguesia-trago-o-contrato-de-arrendamento",
    "situacao": "junta_de_freguesia",
    "order": 20,
    "pt": "Trago o contrato de arrendamento.",
    "en": "I have my rental contract with me.",
    "zhHans": "我帶了租賃合同。",
    "zhHant": "我帶了租賃合同。"
  },
  {
    "id": "cartao-junta-de-freguesia-posso-trazer-duas-testemunhas-se-for-preciso",
    "situacao": "junta_de_freguesia",
    "order": 21,
    "pt": "Posso trazer duas testemunhas, se for preciso.",
    "en": "I can bring two witnesses if necessary.",
    "zhHans": "如有需要，我可以帶兩位證人來。",
    "zhHant": "如有需要，我可以帶兩位證人來。"
  },
  {
    "id": "cartao-junta-de-freguesia-quanto-custa-e-quando-fica-pronto",
    "situacao": "junta_de_freguesia",
    "order": 22,
    "pt": "Quanto custa e quando fica pronto?",
    "en": "How much is it and when will it be ready?",
    "zhHans": "多少錢？什麼時候能拿？",
    "zhHant": "多少錢？什麼時候能拿？"
  },
  {
    "id": "cartao-saude-queria-inscrever-me-e-pedir-o-numero-de-utente",
    "situacao": "saude",
    "order": 23,
    "pt": "Queria inscrever-me e pedir o número de utente.",
    "en": "I'd like to register and get my SNS number.",
    "zhHans": "我想登記並申請醫療用戶號。",
    "zhHant": "我想登記並申請醫療用戶號。"
  },
  {
    "id": "cartao-saude-tenho-atestado-de-residencia-e-nif",
    "situacao": "saude",
    "order": 24,
    "pt": "Tenho atestado de residência e NIF.",
    "en": "I have a residence certificate and tax number.",
    "zhHans": "我有居住證明和稅號。",
    "zhHant": "我有居住證明和稅號。"
  },
  {
    "id": "cartao-saude-queria-marcar-uma-consulta-por-favor",
    "situacao": "saude",
    "order": 25,
    "pt": "Queria marcar uma consulta, por favor.",
    "en": "I'd like to book an appointment, please.",
    "zhHans": "我想預約門診，麻煩您。",
    "zhHant": "我想預約門診，麻煩您。"
  },
  {
    "id": "cartao-saude-e-urgente-doi-me-muito-o-a",
    "situacao": "saude",
    "order": 26,
    "pt": "É urgente — dói-me muito o/a…",
    "en": "It's urgent — my … hurts badly.",
    "zhHans": "很緊急——我的……很痛。",
    "zhHant": "很緊急——我的……很痛。"
  },
  {
    "id": "cartao-saude-sou-alergico-a-a-penicilina",
    "situacao": "saude",
    "order": 27,
    "pt": "Sou alérgico/a a penicilina.",
    "en": "I'm allergic to penicillin.",
    "zhHans": "我對青黴素過敏。",
    "zhHant": "我對青黴素過敏。"
  },
  {
    "id": "cartao-saude-sns-24-808-24-24-24-emergencia-112",
    "situacao": "saude",
    "order": 28,
    "pt": "SNS 24: 808 24 24 24 · Emergência: 112",
    "en": "SNS 24: 808 24 24 24 · Emergency: 112",
    "zhHans": "健康熱線：808 24 24 24 · 緊急救援：112",
    "zhHant": "健康熱線：808 24 24 24 · 緊急救援：112"
  },
  {
    "id": "cartao-aima-tenho-marcacao-as-hora-em-nome-de-nome",
    "situacao": "aima",
    "order": 29,
    "pt": "Tenho marcação às [hora], em nome de [nome].",
    "en": "I have an appointment at [time], under the name [name].",
    "zhHans": "我有[時間]的預約，名字是[姓名]。",
    "zhHant": "我有[時間]的預約，名字是[姓名]。"
  },
  {
    "id": "cartao-aima-venho-renovar-a-autorizacao-de-residencia",
    "situacao": "aima",
    "order": 30,
    "pt": "Venho renovar a autorização de residência.",
    "en": "I'm here to renew my residence permit.",
    "zhHans": "我來續居留許可。",
    "zhHant": "我來續居留許可。"
  },
  {
    "id": "cartao-aima-trago-passaporte-titulo-comprovativo-de-morada-e-recib",
    "situacao": "aima",
    "order": 31,
    "pt": "Trago passaporte, título, comprovativo de morada e recibos.",
    "en": "I have my passport, residence card, proof of address and payslips.",
    "zhHans": "我帶了護照、居留證、住址證明和工資單。",
    "zhHant": "我帶了護照、居留證、住址證明和工資單。"
  },
  {
    "id": "cartao-aima-autorizo-a-consulta-do-registo-criminal",
    "situacao": "aima",
    "order": 32,
    "pt": "Autorizo a consulta do registo criminal.",
    "en": "I authorise the criminal record check.",
    "zhHans": "我授權查詢無犯罪記錄。",
    "zhHant": "我授權查詢無犯罪記錄。"
  },
  {
    "id": "cartao-aima-o-meu-processo-esta-pendente-este-e-o-comprovativo",
    "situacao": "aima",
    "order": 33,
    "pt": "O meu processo está pendente — este é o comprovativo.",
    "en": "My case is pending — here's the proof.",
    "zhHans": "我的申請還在處理中——這是憑證。",
    "zhHant": "我的申請還在處理中——這是憑證。"
  },
  {
    "id": "cartao-aima-podem-confirmar-a-minha-morada-no-sistema",
    "situacao": "aima",
    "order": 34,
    "pt": "Podem confirmar a minha morada no sistema?",
    "en": "Can you confirm my address in the system?",
    "zhHans": "可以確認一下系統裡我的地址嗎？",
    "zhHant": "可以確認一下系統裡我的地址嗎？"
  },
  {
    "id": "cartao-escola-venho-matricular-o-meu-filho-a-minha-filha",
    "situacao": "escola",
    "order": 35,
    "pt": "Venho matricular o meu filho / a minha filha.",
    "en": "I'm here to enrol my son / daughter.",
    "zhHans": "我來給兒子／女兒辦入學註冊。",
    "zhHant": "我來給兒子／女兒辦入學註冊。"
  },
  {
    "id": "cartao-escola-sou-o-encarregado-a-encarregada-de-educacao",
    "situacao": "escola",
    "order": 36,
    "pt": "Sou o encarregado / a encarregada de educação.",
    "en": "I'm the legal guardian.",
    "zhHans": "我是教育監護人。",
    "zhHant": "我是教育監護人。"
  },
  {
    "id": "cartao-escola-trago-o-boletim-de-vacinas-e-o-numero-de-utente",
    "situacao": "escola",
    "order": 37,
    "pt": "Trago o boletim de vacinas e o número de utente.",
    "en": "I have the vaccination record and health number.",
    "zhHans": "我帶了疫苗記錄和醫療用戶號。",
    "zhHant": "我帶了疫苗記錄和醫療用戶號。"
  },
  {
    "id": "cartao-escola-queria-pedir-a-acao-social-escolar",
    "situacao": "escola",
    "order": 38,
    "pt": "Queria pedir a Ação Social Escolar.",
    "en": "I'd like to apply for school social support.",
    "zhHans": "我想申請學校社會援助。",
    "zhHant": "我想申請學校社會援助。"
  },
  {
    "id": "cartao-escola-qual-e-a-escola-da-nossa-area-de-residencia",
    "situacao": "escola",
    "order": 39,
    "pt": "Qual é a escola da nossa área de residência?",
    "en": "Which is the school for our home address?",
    "zhHans": "我們住址對應的學校是哪一所？",
    "zhHant": "我們住址對應的學校是哪一所？"
  },
  {
    "id": "cartao-escola-quando-sai-a-lista-de-turmas",
    "situacao": "escola",
    "order": 40,
    "pt": "Quando sai a lista de turmas?",
    "en": "When is the class list published?",
    "zhHans": "班級名單什麼時候公佈？",
    "zhHant": "班級名單什麼時候公佈？"
  },
  {
    "id": "cartao-iefp-queria-inscrever-me-como-candidato-a-emprego",
    "situacao": "iefp",
    "order": 41,
    "pt": "Queria inscrever-me como candidato a emprego.",
    "en": "I'd like to register as a jobseeker.",
    "zhHans": "我想登記為求職者。",
    "zhHant": "我想登記為求職者。"
  },
  {
    "id": "cartao-iefp-trago-identificacao-nif-niss-e-comprovativo-de-morada",
    "situacao": "iefp",
    "order": 42,
    "pt": "Trago identificação, NIF, NISS e comprovativo de morada.",
    "en": "I have my ID, tax number, social security number and proof of address.",
    "zhHans": "我帶了證件、稅號、社保號和住址證明。",
    "zhHant": "我帶了證件、稅號、社保號和住址證明。"
  },
  {
    "id": "cartao-iefp-quero-pedir-o-subsidio-de-desemprego",
    "situacao": "iefp",
    "order": 43,
    "pt": "Quero pedir o subsídio de desemprego.",
    "en": "I want to apply for unemployment benefit.",
    "zhHans": "我想申請失業救濟金。",
    "zhHant": "我想申請失業救濟金。"
  },
  {
    "id": "cartao-iefp-tenho-a-declaracao-da-entidade-empregadora",
    "situacao": "iefp",
    "order": 44,
    "pt": "Tenho a declaração da entidade empregadora.",
    "en": "I have the employer's declaration.",
    "zhHans": "我有僱主的解僱聲明。",
    "zhHant": "我有僱主的解僱聲明。"
  },
  {
    "id": "cartao-iefp-estou-interessado-a-em-formacao-profissional",
    "situacao": "iefp",
    "order": 45,
    "pt": "Estou interessado/a em formação profissional.",
    "en": "I'm interested in vocational training.",
    "zhHans": "我對職業培訓有興趣。",
    "zhHant": "我對職業培訓有興趣。"
  },
  {
    "id": "cartao-iefp-recebi-uma-convocatoria-para-esta-data",
    "situacao": "iefp",
    "order": 46,
    "pt": "Recebi uma convocatória para esta data.",
    "en": "I received a summons for this date.",
    "zhHans": "我收到了這個日期的約談通知。",
    "zhHant": "我收到了這個日期的約談通知。"
  },
  {
    "id": "cartao-seguranca-social-venho-pedir-o-niss-tenho-contrato-de-trabalho",
    "situacao": "seguranca_social",
    "order": 47,
    "pt": "Venho pedir o NISS — tenho contrato de trabalho.",
    "en": "I'm here to apply for a NISS — I have a work contract.",
    "zhHans": "我來申請社保號——我有勞動合同。",
    "zhHant": "我來申請社保號——我有勞動合同。"
  },
  {
    "id": "cartao-seguranca-social-trago-passaporte-e-comprovativo-de-morada",
    "situacao": "seguranca_social",
    "order": 48,
    "pt": "Trago passaporte e comprovativo de morada.",
    "en": "I have my passport and proof of address.",
    "zhHans": "我帶了護照和住址證明。",
    "zhHant": "我帶了護照和住址證明。"
  },
  {
    "id": "cartao-seguranca-social-preciso-de-uma-declaracao-de-situacao-contributiva",
    "situacao": "seguranca_social",
    "order": 49,
    "pt": "Preciso de uma declaração de situação contributiva.",
    "en": "I need a statement of my contributions status.",
    "zhHans": "我需要一份供款狀況聲明。",
    "zhHant": "我需要一份供款狀況聲明。"
  },
  {
    "id": "cartao-seguranca-social-trabalho-a-recibos-verdes",
    "situacao": "seguranca_social",
    "order": 50,
    "pt": "Trabalho a recibos verdes.",
    "en": "I work freelance (green receipts).",
    "zhHans": "我是開綠色收據的自僱人士。",
    "zhHant": "我是開綠色收據的自僱人士。"
  },
  {
    "id": "cartao-seguranca-social-como-peco-o-abono-de-familia",
    "situacao": "seguranca_social",
    "order": 51,
    "pt": "Como peço o abono de família?",
    "en": "How do I apply for the family allowance?",
    "zhHans": "家庭津貼怎麼申請？",
    "zhHant": "家庭津貼怎麼申請？"
  },
  {
    "id": "cartao-arrendamento-vi-o-anuncio-posso-marcar-uma-visita",
    "situacao": "arrendamento",
    "order": 52,
    "pt": "Vi o anúncio — posso marcar uma visita?",
    "en": "I saw the listing — can I book a viewing?",
    "zhHans": "我看到了廣告——可以約看房嗎？",
    "zhHant": "我看到了廣告——可以約看房嗎？"
  },
  {
    "id": "cartao-arrendamento-a-renda-inclui-despesas",
    "situacao": "arrendamento",
    "order": 53,
    "pt": "A renda inclui despesas?",
    "en": "Does the rent include bills?",
    "zhHans": "租金包水電雜費嗎？",
    "zhHant": "租金包水電雜費嗎？"
  },
  {
    "id": "cartao-arrendamento-quanto-e-a-caucao",
    "situacao": "arrendamento",
    "order": 54,
    "pt": "Quanto é a caução?",
    "en": "How much is the deposit?",
    "zhHans": "押金是多少？",
    "zhHant": "押金是多少？"
  },
  {
    "id": "cartao-arrendamento-faz-contrato-e-recibos-de-renda",
    "situacao": "arrendamento",
    "order": 55,
    "pt": "Faz contrato e recibos de renda?",
    "en": "Do you provide a contract and rent receipts?",
    "zhHans": "會簽合同、開租金收據嗎？",
    "zhHant": "會簽合同、開租金收據嗎？"
  },
  {
    "id": "cartao-arrendamento-preciso-do-contrato-como-comprovativo-de-morada",
    "situacao": "arrendamento",
    "order": 56,
    "pt": "Preciso do contrato como comprovativo de morada.",
    "en": "I need the contract as proof of address.",
    "zhHans": "我需要合同做住址證明。",
    "zhHant": "我需要合同做住址證明。"
  },
  {
    "id": "cartao-arrendamento-com-quanto-tempo-devo-avisar-antes-de-sair",
    "situacao": "arrendamento",
    "order": 57,
    "pt": "Com quanto tempo devo avisar antes de sair?",
    "en": "How much notice must I give before leaving?",
    "zhHans": "退租前需要提前多久通知？",
    "zhHant": "退租前需要提前多久通知？"
  },
  {
    "id": "cartao-transportes-queria-fazer-o-passe-por-favor",
    "situacao": "transportes",
    "order": 58,
    "pt": "Queria fazer o passe, por favor.",
    "en": "I'd like to get a travel pass, please.",
    "zhHans": "我想辦一張月票，麻煩您。",
    "zhHant": "我想辦一張月票，麻煩您。"
  },
  {
    "id": "cartao-transportes-queria-carregar-o-passe-mensal",
    "situacao": "transportes",
    "order": 59,
    "pt": "Queria carregar o passe mensal.",
    "en": "I'd like to top up the monthly pass.",
    "zhHans": "我想給月票充值。",
    "zhHant": "我想給月票充值。"
  },
  {
    "id": "cartao-transportes-este-autocarro-metro-vai-para",
    "situacao": "transportes",
    "order": 60,
    "pt": "Este autocarro / metro vai para…?",
    "en": "Does this bus / metro go to…?",
    "zhHans": "這班公交／地鐵去……嗎？",
    "zhHant": "這班公交／地鐵去……嗎？"
  },
  {
    "id": "cartao-transportes-onde-valido-o-bilhete",
    "situacao": "transportes",
    "order": 61,
    "pt": "Onde valido o bilhete?",
    "en": "Where do I validate the ticket?",
    "zhHans": "在哪裡打卡驗票？",
    "zhHant": "在哪裡打卡驗票？"
  },
  {
    "id": "cartao-transportes-a-que-horas-passa-o-ultimo",
    "situacao": "transportes",
    "order": 62,
    "pt": "A que horas passa o último?",
    "en": "What time is the last one?",
    "zhHans": "末班車幾點？",
    "zhHant": "末班車幾點？"
  },
  {
    "id": "cartao-trabalho-hotelaria-a-que-horas-comeca-o-meu-turno",
    "situacao": "trabalho_hotelaria",
    "order": 63,
    "pt": "A que horas começa o meu turno?",
    "en": "What time does my shift start?",
    "zhHans": "我的班幾點開始？",
    "zhHant": "我的班幾點開始？"
  },
  {
    "id": "cartao-trabalho-hotelaria-o-quarto-esta-pronto",
    "situacao": "trabalho_hotelaria",
    "order": 64,
    "pt": "O quarto está pronto.",
    "en": "The room is ready.",
    "zhHans": "房間已經整理好了。",
    "zhHant": "房間已經整理好了。"
  },
  {
    "id": "cartao-trabalho-hotelaria-faltam-toalhas-lencois-amenities",
    "situacao": "trabalho_hotelaria",
    "order": 65,
    "pt": "Faltam toalhas / lençóis / amenities.",
    "en": "We're out of towels / sheets / amenities.",
    "zhHans": "毛巾／床單／客用品不夠了。",
    "zhHant": "毛巾／床單／客用品不夠了。"
  },
  {
    "id": "cartao-trabalho-hotelaria-o-hospede-do-n-pediu",
    "situacao": "trabalho_hotelaria",
    "order": 66,
    "pt": "O hóspede do [n.º] pediu…",
    "en": "The guest in [room no.] asked for…",
    "zhHans": "[房號]的住客要求……",
    "zhHant": "[房號]的住客要求……"
  },
  {
    "id": "cartao-trabalho-hotelaria-posso-trocar-a-folga-esta-semana",
    "situacao": "trabalho_hotelaria",
    "order": 67,
    "pt": "Posso trocar a folga esta semana?",
    "en": "Can I swap my day off this week?",
    "zhHans": "這週的休息日可以調換嗎？",
    "zhHant": "這週的休息日可以調換嗎？"
  },
  {
    "id": "cartao-trabalho-hotelaria-fiz-duas-horas-extra-hoje",
    "situacao": "trabalho_hotelaria",
    "order": 68,
    "pt": "Fiz duas horas extra hoje.",
    "en": "I did two hours of overtime today.",
    "zhHans": "我今天加了兩個小時的班。",
    "zhHant": "我今天加了兩個小時的班。"
  },
  {
    "id": "cartao-trabalho-restauracao-bem-vindos-mesa-para-quantas-pessoas",
    "situacao": "trabalho_restauracao",
    "order": 69,
    "pt": "Bem-vindos! Mesa para quantas pessoas?",
    "en": "Welcome! A table for how many?",
    "zhHans": "歡迎光臨！幾位？",
    "zhHant": "歡迎光臨！幾位？"
  },
  {
    "id": "cartao-trabalho-restauracao-posso-anotar-o-pedido",
    "situacao": "trabalho_restauracao",
    "order": 70,
    "pt": "Posso anotar o pedido?",
    "en": "May I take your order?",
    "zhHans": "可以點單了嗎？",
    "zhHant": "可以點單了嗎？"
  },
  {
    "id": "cartao-trabalho-restauracao-recomendo-o-prato-do-dia",
    "situacao": "trabalho_restauracao",
    "order": 71,
    "pt": "Recomendo o prato do dia.",
    "en": "I recommend the dish of the day.",
    "zhHans": "我推薦今日特餐。",
    "zhHant": "我推薦今日特餐。"
  },
  {
    "id": "cartao-trabalho-restauracao-bom-proveito",
    "situacao": "trabalho_restauracao",
    "order": 72,
    "pt": "Bom proveito!",
    "en": "Enjoy your meal!",
    "zhHans": "請慢用！",
    "zhHant": "請慢用！"
  },
  {
    "id": "cartao-trabalho-restauracao-desejam-mais-alguma-coisa",
    "situacao": "trabalho_restauracao",
    "order": 73,
    "pt": "Desejam mais alguma coisa?",
    "en": "Would you like anything else?",
    "zhHans": "還需要別的嗎？",
    "zhHant": "還需要別的嗎？"
  },
  {
    "id": "cartao-trabalho-restauracao-aqui-esta-a-conta-pagam-junto-ou-separado",
    "situacao": "trabalho_restauracao",
    "order": 74,
    "pt": "Aqui está a conta. Pagam junto ou separado?",
    "en": "Here's the bill. Together or separately?",
    "zhHans": "這是賬單。一起付還是分開付？",
    "zhHant": "這是賬單。一起付還是分開付？"
  },
  {
    "id": "cartao-trabalho-limpezas-cobro-x-euros-a-hora",
    "situacao": "trabalho_limpezas",
    "order": 75,
    "pt": "Cobro X euros à hora.",
    "en": "I charge X euros per hour.",
    "zhHans": "我每小時收X歐元。",
    "zhHant": "我每小時收X歐元。"
  },
  {
    "id": "cartao-trabalho-limpezas-passo-recibo-verde",
    "situacao": "trabalho_limpezas",
    "order": 76,
    "pt": "Passo recibo verde.",
    "en": "I issue a freelance receipt.",
    "zhHans": "我開綠色收據。",
    "zhHant": "我開綠色收據。"
  },
  {
    "id": "cartao-trabalho-limpezas-tenho-disponibilidade-as-dias-de-manha-tarde",
    "situacao": "trabalho_limpezas",
    "order": 77,
    "pt": "Tenho disponibilidade às [dias] de [manhã/tarde].",
    "en": "I'm available on [days] in the [morning/afternoon].",
    "zhHans": "我[星期幾][上午/下午]有空。",
    "zhHant": "我[星期幾][上午/下午]有空。"
  },
  {
    "id": "cartao-trabalho-limpezas-o-material-fica-em-casa-ou-trago-eu",
    "situacao": "trabalho_limpezas",
    "order": 78,
    "pt": "O material fica em casa ou trago eu?",
    "en": "Are supplies kept at the house or do I bring them?",
    "zhHans": "清潔用品放在家裡還是我自帶？",
    "zhHant": "清潔用品放在家裡還是我自帶？"
  },
  {
    "id": "cartao-trabalho-limpezas-terminei-esta-tudo-limpo",
    "situacao": "trabalho_limpezas",
    "order": 79,
    "pt": "Terminei — está tudo limpo.",
    "en": "I'm done — everything is clean.",
    "zhHans": "做完了——都打掃乾淨了。",
    "zhHant": "做完了——都打掃乾淨了。"
  },
  {
    "id": "cartao-trabalho-construcao-onde-esta-o-meu-epi",
    "situacao": "trabalho_construcao",
    "order": 80,
    "pt": "Onde está o meu EPI?",
    "en": "Where's my PPE?",
    "zhHans": "我的防護裝備在哪裡？",
    "zhHant": "我的防護裝備在哪裡？"
  },
  {
    "id": "cartao-trabalho-construcao-isto-nao-e-seguro-o-andaime-nao-esta-fixo",
    "situacao": "trabalho_construcao",
    "order": 81,
    "pt": "Isto não é seguro — o andaime não está fixo.",
    "en": "This isn't safe — the scaffolding isn't secured.",
    "zhHans": "這不安全——腳手架沒固定。",
    "zhHant": "這不安全——腳手架沒固定。"
  },
  {
    "id": "cartao-trabalho-construcao-preciso-de-mais-cimento-tijolos",
    "situacao": "trabalho_construcao",
    "order": 82,
    "pt": "Preciso de mais cimento / tijolos.",
    "en": "We need more cement / bricks.",
    "zhHans": "需要再來些水泥／磚。",
    "zhHant": "需要再來些水泥／磚。"
  },
  {
    "id": "cartao-trabalho-construcao-a-que-horas-e-a-pausa",
    "situacao": "trabalho_construcao",
    "order": 83,
    "pt": "A que horas é a pausa?",
    "en": "What time is the break?",
    "zhHans": "休息是幾點？",
    "zhHant": "休息是幾點？"
  },
  {
    "id": "cartao-trabalho-construcao-quando-assinamos-o-contrato-de-trabalho",
    "situacao": "trabalho_construcao",
    "order": 84,
    "pt": "Quando assinamos o contrato de trabalho?",
    "en": "When do we sign the work contract?",
    "zhHans": "什麼時候簽勞動合同？",
    "zhHant": "什麼時候簽勞動合同？"
  },
  {
    "id": "cartao-trabalho-construcao-magoei-me-preciso-do-kit-de-primeiros-socorros",
    "situacao": "trabalho_construcao",
    "order": 85,
    "pt": "Magoei-me — preciso do kit de primeiros socorros.",
    "en": "I've hurt myself — I need the first-aid kit.",
    "zhHans": "我受傷了——需要急救箱。",
    "zhHant": "我受傷了——需要急救箱。"
  },
  {
    "id": "cartao-trabalho-entregas-tenho-uma-entrega-para-nome",
    "situacao": "trabalho_entregas",
    "order": 86,
    "pt": "Tenho uma entrega para [nome].",
    "en": "I have a delivery for [name].",
    "zhHans": "有[姓名]的外賣。",
    "zhHant": "有[姓名]的外賣。"
  },
  {
    "id": "cartao-trabalho-entregas-qual-e-o-codigo-da-porta",
    "situacao": "trabalho_entregas",
    "order": 87,
    "pt": "Qual é o código da porta?",
    "en": "What's the door code?",
    "zhHans": "門禁密碼是多少？",
    "zhHant": "門禁密碼是多少？"
  },
  {
    "id": "cartao-trabalho-entregas-pode-descer-para-levantar-o-pedido",
    "situacao": "trabalho_entregas",
    "order": 88,
    "pt": "Pode descer para levantar o pedido?",
    "en": "Can you come down to collect the order?",
    "zhHans": "您可以下來取餐嗎？",
    "zhHant": "您可以下來取餐嗎？"
  },
  {
    "id": "cartao-trabalho-entregas-estou-na-entrada-do-predio",
    "situacao": "trabalho_entregas",
    "order": 89,
    "pt": "Estou na entrada do prédio.",
    "en": "I'm at the building entrance.",
    "zhHans": "我在樓門口。",
    "zhHant": "我在樓門口。"
  },
  {
    "id": "cartao-trabalho-entregas-desculpe-o-atraso-muito-transito",
    "situacao": "trabalho_entregas",
    "order": 90,
    "pt": "Desculpe o atraso — muito trânsito.",
    "en": "Sorry for the delay — heavy traffic.",
    "zhHans": "抱歉來晚了——路上很堵。",
    "zhHant": "抱歉來晚了——路上很堵。"
  }
];
