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
    "zhHans": "开一个活期账户",
    "zhHant": "開一個活期帳戶",
    "id": "az-0601",
    "legacyIds": [
      "situacao-abrir-uma-conta-a-ordem"
    ]
  },
  {
    "situacao": "banco",
    "pt": "o IBAN",
    "en": "IBAN (bank account number)",
    "zhHans": "IBAN（國际银行账号）",
    "zhHant": "IBAN（國際銀行帳號）",
    "note": "Needed for salary, rent, utilities",
    "id": "az-0602",
    "legacyIds": [
      "situacao-o-iban"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "o cartão multibanco",
    "en": "debit card (Multibanco)",
    "zhHans": "多功能提款卡（Multibanco）",
    "zhHant": "多功能提款卡（Multibanco）",
    "id": "az-0154",
    "legacyIds": [
      "situacao-o-cartao-multibanco"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "o cartão de débito / de crédito",
    "en": "debit card / credit card",
    "zhHans": "扣账卡／信用卡",
    "zhHant": "扣賬卡／信用卡",
    "id": "az-0604",
    "legacyIds": [
      "situacao-o-cartao-de-debito-de-credito"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "o extrato bancário",
    "en": "bank statement",
    "zhHans": "银行对账单",
    "zhHant": "銀行對帳單",
    "note": "Often requested as proof of funds",
    "id": "az-0605",
    "legacyIds": [
      "situacao-o-extrato-bancario"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "a transferência bancária",
    "en": "bank transfer",
    "zhHans": "银行转账",
    "zhHant": "銀行轉帳",
    "id": "az-0606",
    "legacyIds": [
      "situacao-a-transferencia-bancaria"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "banco",
    "pt": "levantar dinheiro",
    "en": "to withdraw money",
    "zhHans": "提款",
    "zhHant": "提款",
    "id": "az-0607",
    "legacyIds": [
      "situacao-levantar-dinheiro"
    ]
  },
  {
    "situacao": "banco",
    "pt": "depositar dinheiro",
    "en": "to deposit money",
    "zhHans": "存款",
    "zhHant": "存款",
    "id": "az-0608",
    "legacyIds": [
      "situacao-depositar-dinheiro"
    ]
  },
  {
    "situacao": "banco",
    "pt": "o saldo",
    "en": "account balance",
    "zhHans": "账户余额",
    "zhHant": "帳戶餘額",
    "id": "az-0609",
    "legacyIds": [
      "situacao-o-saldo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "a comissão de manutenção",
    "en": "account maintenance fee",
    "zhHans": "账户管理费",
    "zhHant": "帳戶管理費",
    "id": "az-0610",
    "legacyIds": [
      "situacao-a-comissao-de-manutencao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "banco",
    "pt": "o comprovativo de morada",
    "en": "proof of address",
    "zhHans": "住址证明",
    "zhHant": "住址證明",
    "note": "Utility bill, rental contract or junta attestation",
    "id": "az-0611",
    "legacyIds": [
      "situacao-o-comprovativo-de-morada"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "o titular da conta",
    "en": "account holder",
    "zhHans": "账户持有人",
    "zhHant": "帳戶持有人",
    "id": "az-0612",
    "legacyIds": [
      "situacao-o-titular-da-conta"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "o homebanking / a app do banco",
    "en": "online banking / banking app",
    "zhHans": "网上银行／银行应用程式",
    "zhHant": "網上銀行／銀行應用程式",
    "id": "az-0613",
    "legacyIds": [
      "situacao-o-homebanking-a-app-do-banco"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "o código PIN",
    "en": "PIN code",
    "zhHans": "密码（PIN码）",
    "zhHant": "密碼（PIN碼）",
    "id": "az-0614",
    "legacyIds": [
      "situacao-o-codigo-pin"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "financas",
    "pt": "o NIF (número de identificação fiscal)",
    "en": "NIF (tax identification number)",
    "zhHans": "NIF（税务识別号码）",
    "zhHant": "NIF（稅務識別號碼）",
    "note": "First document most newcomers need",
    "id": "az-0615",
    "legacyIds": [
      "situacao-o-nif-numero-de-identificacao-fiscal"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "financas",
    "pt": "pedir o NIF",
    "en": "to apply for a NIF",
    "zhHans": "申请税号",
    "zhHant": "申請稅號",
    "id": "az-0616",
    "legacyIds": [
      "situacao-pedir-o-nif"
    ]
  },
  {
    "situacao": "financas",
    "pt": "o representante fiscal",
    "en": "tax representative",
    "zhHans": "税务代表",
    "zhHant": "稅務代表",
    "note": "Only required for non-EU residents without PT address",
    "id": "az-0617",
    "legacyIds": [
      "situacao-o-representante-fiscal"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "financas",
    "pt": "a Autoridade Tributária (AT)",
    "en": "Tax Authority",
    "zhHans": "税务局",
    "zhHant": "稅務局",
    "id": "az-0618",
    "legacyIds": [
      "situacao-a-autoridade-tributaria-at"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "financas",
    "pt": "o Portal das Finanças",
    "en": "the Finanças online portal",
    "zhHans": "财政入口网站",
    "zhHant": "財政入口網站",
    "note": "Password sent by post after registration",
    "id": "az-0619",
    "legacyIds": [
      "situacao-o-portal-das-financas"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "financas",
    "pt": "a senha de acesso",
    "en": "access password (portal login)",
    "zhHans": "登入密码",
    "zhHant": "登入密碼",
    "id": "az-0620",
    "legacyIds": [
      "situacao-a-senha-de-acesso"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "financas",
    "pt": "tirar a senha",
    "en": "to take a queue ticket",
    "zhHans": "取号（排队票）",
    "zhHant": "取號（排隊票）",
    "note": "Same word 'senha' = ticket AND password",
    "id": "az-0621",
    "legacyIds": [
      "situacao-tirar-a-senha"
    ]
  },
  {
    "situacao": "financas",
    "pt": "a declaração de IRS",
    "en": "income tax return",
    "zhHans": "个人所得税申報表",
    "zhHant": "個人所得稅申報表",
    "id": "az-0622",
    "legacyIds": [
      "situacao-a-declaracao-de-irs"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "financas",
    "pt": "o domicílio fiscal",
    "en": "registered tax address",
    "zhHans": "税务登记地址",
    "zhHant": "稅務登記地址",
    "id": "az-0623",
    "legacyIds": [
      "situacao-o-domicilio-fiscal"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "financas",
    "pt": "atualizar a morada",
    "en": "to update one's address",
    "zhHans": "更新地址",
    "zhHant": "更新地址",
    "id": "az-0624",
    "legacyIds": [
      "situacao-atualizar-a-morada"
    ]
  },
  {
    "situacao": "financas",
    "pt": "o comprovativo de morada",
    "en": "proof of address",
    "zhHans": "住址证明",
    "zhHant": "住址證明",
    "id": "az-0611",
    "legacyIds": [
      "situacao-o-comprovativo-de-morada"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "financas",
    "pt": "a certidão de residência fiscal",
    "en": "certificate of tax residency",
    "zhHans": "税务居民证明",
    "zhHant": "稅務居民證明",
    "id": "az-0625",
    "legacyIds": [
      "situacao-a-certidao-de-residencia-fiscal"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "financas",
    "pt": "as guias de pagamento",
    "en": "payment slips",
    "zhHans": "缴费单",
    "zhHant": "繳費單",
    "id": "az-0626",
    "legacyIds": [
      "situacao-as-guias-de-pagamento"
    ],
    "pos": "noun",
    "gender": "f-pl"
  },
  {
    "situacao": "correios",
    "pt": "os correios / os CTT",
    "en": "the post office / CTT",
    "zhHans": "邮局（CTT）",
    "zhHant": "郵局（CTT）",
    "id": "az-0627",
    "legacyIds": [
      "situacao-os-correios-os-ctt"
    ],
    "pos": "noun",
    "gender": "m-pl"
  },
  {
    "situacao": "correios",
    "pt": "a carta registada",
    "en": "registered letter",
    "zhHans": "挂号信",
    "zhHant": "掛號信",
    "note": "How official documents usually arrive",
    "id": "az-0233",
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "correios",
    "pt": "o aviso de receção",
    "en": "proof of delivery (return receipt)",
    "zhHans": "回执（签收证明）",
    "zhHant": "回執（簽收證明）",
    "id": "az-0628",
    "legacyIds": [
      "situacao-o-aviso-de-rececao"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "correios",
    "pt": "a encomenda",
    "en": "parcel",
    "zhHans": "包裹",
    "zhHant": "包裹",
    "id": "az-0222",
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "correios",
    "pt": "levantar uma encomenda",
    "en": "to collect a parcel",
    "zhHans": "领取包裹",
    "zhHant": "領取包裹",
    "id": "az-0629",
    "legacyIds": [
      "situacao-levantar-uma-encomenda"
    ]
  },
  {
    "situacao": "correios",
    "pt": "o aviso de levantamento",
    "en": "collection notice (left in mailbox)",
    "zhHans": "取件通知单",
    "zhHant": "取件通知單",
    "id": "az-0630",
    "legacyIds": [
      "situacao-o-aviso-de-levantamento"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "correios",
    "pt": "o código de rastreio",
    "en": "tracking number",
    "zhHans": "追踪編号",
    "zhHant": "追蹤編號",
    "id": "az-0631",
    "legacyIds": [
      "situacao-o-codigo-de-rastreio"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "correios",
    "pt": "o selo",
    "en": "stamp",
    "zhHans": "邮票",
    "zhHant": "郵票",
    "id": "az-0632",
    "legacyIds": [
      "situacao-o-selo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "correios",
    "pt": "o correio azul",
    "en": "priority mail",
    "zhHans": "蓝色优先邮件（快件）",
    "zhHant": "藍色優先郵件（快件）",
    "id": "az-0633",
    "legacyIds": [
      "situacao-o-correio-azul"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "correios",
    "pt": "enviar para o estrangeiro",
    "en": "to send abroad",
    "zhHans": "寄往國外",
    "zhHant": "寄往國外",
    "id": "az-0634",
    "legacyIds": [
      "situacao-enviar-para-o-estrangeiro"
    ]
  },
  {
    "situacao": "correios",
    "pt": "a caixa de correio",
    "en": "mailbox",
    "zhHans": "信箱",
    "zhHant": "信箱",
    "id": "az-0635",
    "legacyIds": [
      "situacao-a-caixa-de-correio"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "correios",
    "pt": "o remetente / o destinatário",
    "en": "sender / recipient",
    "zhHans": "寄件人／收件人",
    "zhHant": "寄件人／收件人",
    "id": "az-0636",
    "legacyIds": [
      "situacao-o-remetente-o-destinatario"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "a junta de freguesia",
    "en": "parish council office",
    "zhHans": "堂区行政委员会（社区办事处）",
    "zhHant": "堂區行政委員會（社區辦事處）",
    "note": "Most local level of government",
    "id": "az-0637",
    "legacyIds": [
      "situacao-a-junta-de-freguesia"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "o atestado de residência",
    "en": "certificate of residence",
    "zhHans": "居住证明书",
    "zhHant": "居住證明書",
    "note": "Key doc for SNS number without residence permit",
    "id": "az-0638",
    "legacyIds": [
      "situacao-o-atestado-de-residencia"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "as duas testemunhas",
    "en": "two witnesses",
    "zhHans": "两名证人",
    "zhHant": "兩名證人",
    "note": "Neighbours registered in the same freguesia",
    "id": "az-0639",
    "legacyIds": [
      "situacao-as-duas-testemunhas"
    ],
    "pos": "noun",
    "gender": "f-pl"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "recenseado na freguesia",
    "en": "registered (on the electoral roll) in the parish",
    "zhHans": "在本堂区登记在册的",
    "zhHant": "在本堂區登記在冊的",
    "id": "az-0640",
    "legacyIds": [
      "situacao-recenseado-na-freguesia"
    ]
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "o agregado familiar",
    "en": "household",
    "zhHans": "家庭成员（同户）",
    "zhHant": "家庭成員（同戶）",
    "id": "az-0641",
    "legacyIds": [
      "situacao-o-agregado-familiar"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "a declaração sob compromisso de honra",
    "en": "sworn declaration",
    "zhHans": "誓词声明（保证声明）",
    "zhHant": "誓詞聲明（保證聲明）",
    "id": "az-0642",
    "legacyIds": [
      "situacao-a-declaracao-sob-compromisso-de-honra"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "o contrato de arrendamento",
    "en": "rental contract",
    "zhHans": "租赁合同",
    "zhHant": "租賃合同",
    "id": "az-0643",
    "legacyIds": [
      "situacao-o-contrato-de-arrendamento"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "a certidão",
    "en": "certificate / official copy",
    "zhHans": "证明书／正式副本",
    "zhHant": "證明書／正式副本",
    "id": "az-0644",
    "legacyIds": [
      "situacao-a-certidao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "o carimbo",
    "en": "official stamp",
    "zhHans": "公章",
    "zhHant": "公章",
    "id": "az-0645",
    "legacyIds": [
      "situacao-o-carimbo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "pagar uma taxa",
    "en": "to pay a fee",
    "zhHans": "缴納费用",
    "zhHant": "繳納費用",
    "id": "az-0646",
    "legacyIds": [
      "situacao-pagar-uma-taxa"
    ]
  },
  {
    "situacao": "saude",
    "pt": "o número de utente",
    "en": "SNS user number",
    "zhHans": "医疗用户号（Utente号）",
    "zhHant": "醫療用戶號（Utente號）",
    "note": "Assigned at your local centro de saúde",
    "id": "az-0647",
    "legacyIds": [
      "situacao-o-numero-de-utente"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "saude",
    "pt": "inscrever-se no centro de saúde",
    "en": "to register at the health centre",
    "zhHans": "在卫生中心登记",
    "zhHant": "在衛生中心登記",
    "id": "az-0648",
    "legacyIds": [
      "situacao-inscrever-se-no-centro-de-saude"
    ]
  },
  {
    "situacao": "saude",
    "pt": "o médico de família",
    "en": "family doctor (GP)",
    "zhHans": "家庭医生",
    "zhHant": "家庭醫生",
    "note": "May be waitlisted; you're assigned, not chosen",
    "id": "az-0649",
    "legacyIds": [
      "situacao-o-medico-de-familia"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "saude",
    "pt": "marcar uma consulta",
    "en": "to book an appointment",
    "zhHans": "预约门诊",
    "zhHant": "預約門診",
    "id": "az-0340"
  },
  {
    "situacao": "saude",
    "pt": "a receita (eletrónica)",
    "en": "(electronic) prescription",
    "zhHans": "（电子）处方",
    "zhHant": "（電子）處方",
    "note": "Sent by SMS; show code at pharmacy",
    "id": "az-0650",
    "legacyIds": [
      "situacao-a-receita-eletronica"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "saude",
    "pt": "a urgência",
    "en": "A&E / emergency department",
    "zhHans": "急诊",
    "zhHant": "急診",
    "id": "az-0512",
    "legacyIds": [
      "situacao-a-urgencia"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "saude",
    "pt": "o SNS 24 — 808 24 24 24",
    "en": "SNS 24 health line",
    "zhHans": "SNS 24健康热线（808 24 24 24）",
    "zhHant": "SNS 24健康熱線（808 24 24 24）",
    "note": "Call BEFORE going to A&E for triage advice",
    "id": "az-0652",
    "legacyIds": [
      "situacao-o-sns-24-808-24-24-24"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "saude",
    "pt": "o 112",
    "en": "112 (emergency number)",
    "zhHans": "112（紧急救援电话）",
    "zhHant": "112（緊急救援電話）",
    "id": "az-0653",
    "legacyIds": [
      "situacao-o-112"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "saude",
    "pt": "a triagem (pulseira)",
    "en": "triage (coloured wristband)",
    "zhHans": "分诊（颜色手环）",
    "zhHant": "分診（顏色手環）",
    "note": "Wristband colour = urgency level, sets your wait",
    "id": "az-0654",
    "legacyIds": [
      "situacao-a-triagem-pulseira"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "saude",
    "pt": "a baixa médica",
    "en": "sick leave certificate",
    "zhHans": "病假证明",
    "zhHant": "病假證明",
    "id": "az-0655",
    "legacyIds": [
      "situacao-a-baixa-medica"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "saude",
    "pt": "a farmácia",
    "en": "pharmacy",
    "zhHans": "药房",
    "zhHant": "藥房",
    "id": "az-0312",
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "saude",
    "pt": "o boletim de vacinas",
    "en": "vaccination record",
    "zhHans": "疫苗接种记录",
    "zhHant": "疫苗接種記錄",
    "id": "az-0464",
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "saude",
    "pt": "Dói-me…",
    "en": "… hurts / I have pain in…",
    "zhHans": "我……痛",
    "zhHant": "我……痛",
    "id": "az-0656",
    "legacyIds": [
      "situacao-doi-me"
    ]
  },
  {
    "situacao": "saude",
    "pt": "sou alérgico/a a…",
    "en": "I'm allergic to…",
    "zhHans": "我对……过敏",
    "zhHant": "我對……過敏",
    "id": "az-0657",
    "legacyIds": [
      "situacao-sou-alergico-a-a"
    ]
  },
  {
    "situacao": "aima",
    "pt": "a AIMA",
    "en": "AIMA (Agency for Integration, Migration and Asylum)",
    "zhHans": "移民与庇护融合署（AIMA）",
    "zhHant": "移民與庇護融合署（AIMA）",
    "note": "Replaced SEF in Oct 2023",
    "id": "az-0658",
    "legacyIds": [
      "situacao-a-aima"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "aima",
    "pt": "a autorização de residência (AR)",
    "en": "residence permit",
    "zhHans": "居留許可",
    "zhHant": "居留許可",
    "id": "az-0659",
    "legacyIds": [
      "situacao-a-autorizacao-de-residencia-ar"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "aima",
    "pt": "o título de residência",
    "en": "residence card (the physical document)",
    "zhHans": "居留证（实体证件）",
    "zhHant": "居留證（實體證件）",
    "id": "az-0660",
    "legacyIds": [
      "situacao-o-titulo-de-residencia"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "aima",
    "pt": "a renovação",
    "en": "renewal",
    "zhHans": "续期",
    "zhHant": "續期",
    "note": "Apply from 90 days, up to 30 days before expiry",
    "id": "az-0661",
    "legacyIds": [
      "situacao-a-renovacao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "aima",
    "pt": "o Portal das Renovações",
    "en": "the online Renewals Portal",
    "zhHans": "线上续期平台",
    "zhHant": "線上續期平台",
    "note": "portal-renovacoes.aima.gov.pt; opened month by month",
    "id": "az-0662",
    "legacyIds": [
      "situacao-o-portal-das-renovacoes"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "aima",
    "pt": "a marcação / o agendamento",
    "en": "appointment / booking",
    "zhHans": "预约",
    "zhHant": "預約",
    "id": "az-0663",
    "legacyIds": [
      "situacao-a-marcacao-o-agendamento"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "aima",
    "pt": "a recolha de dados biométricos",
    "en": "biometric data collection",
    "zhHans": "採集生物识別资料（按指紋等）",
    "zhHant": "採集生物識別資料（按指紋等）",
    "id": "az-0664",
    "legacyIds": [
      "situacao-a-recolha-de-dados-biometricos"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "aima",
    "pt": "o comprovativo de meios de subsistência",
    "en": "proof of means of subsistence",
    "zhHans": "生活來源证明",
    "zhHant": "生活來源證明",
    "note": "Work contract, payslips or bank statement",
    "id": "az-0665",
    "legacyIds": [
      "situacao-o-comprovativo-de-meios-de-subsistencia"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "aima",
    "pt": "o registo criminal",
    "en": "criminal record (check)",
    "zhHans": "无犯罪记录",
    "zhHant": "無犯罪記錄",
    "note": "Consent for lookup usually given at the counter",
    "id": "az-0240",
    "legacyIds": [
      "situacao-o-registo-criminal"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "aima",
    "pt": "o reagrupamento familiar",
    "en": "family reunification",
    "zhHans": "家庭团聚",
    "zhHant": "家庭團聚",
    "id": "az-0566",
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "aima",
    "pt": "o processo pendente",
    "en": "pending case/process",
    "zhHans": "待处理的申请",
    "zhHant": "待處理的申請",
    "id": "az-0667",
    "legacyIds": [
      "situacao-o-processo-pendente"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "aima",
    "pt": "caducado/a",
    "en": "expired",
    "zhHans": "已过期",
    "zhHant": "已過期",
    "note": "AR expired <6 months can still renew",
    "id": "az-0668",
    "legacyIds": [
      "situacao-caducado-a"
    ]
  },
  {
    "situacao": "aima",
    "pt": "as taxas",
    "en": "fees",
    "zhHans": "费用",
    "zhHant": "費用",
    "id": "az-0669",
    "legacyIds": [
      "situacao-as-taxas"
    ],
    "pos": "noun",
    "gender": "f-pl"
  },
  {
    "situacao": "escola",
    "pt": "a matrícula",
    "en": "enrolment",
    "zhHans": "入学註册",
    "zhHant": "入學註冊",
    "id": "az-0670",
    "legacyIds": [
      "situacao-a-matricula"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "escola",
    "pt": "o Portal das Matrículas",
    "en": "the online enrolment portal",
    "zhHans": "入学註册网站",
    "zhHant": "入學註冊網站",
    "note": "portaldasmatriculas.edu.gov.pt",
    "id": "az-0671",
    "legacyIds": [
      "situacao-o-portal-das-matriculas"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "escola",
    "pt": "o encarregado de educação",
    "en": "legal guardian (for school purposes)",
    "zhHans": "教育监护人",
    "zhHant": "教育監護人",
    "note": "Usually a parent; the school's official contact",
    "id": "az-0672",
    "legacyIds": [
      "situacao-o-encarregado-de-educacao"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "escola",
    "pt": "o agrupamento de escolas",
    "en": "school cluster",
    "zhHans": "学校群（校区联盟）",
    "zhHant": "學校群（校區聯盟）",
    "id": "az-0673",
    "legacyIds": [
      "situacao-o-agrupamento-de-escolas"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "escola",
    "pt": "a escola da área de residência",
    "en": "the school for your home address",
    "zhHans": "居住地划片学校",
    "zhHant": "居住地劃片學校",
    "id": "az-0674",
    "legacyIds": [
      "situacao-a-escola-da-area-de-residencia"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "escola",
    "pt": "o ano letivo",
    "en": "school year",
    "zhHans": "学年",
    "zhHant": "學年",
    "id": "az-0675",
    "legacyIds": [
      "situacao-o-ano-letivo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "escola",
    "pt": "o boletim de vacinas",
    "en": "vaccination record",
    "zhHans": "疫苗接种记录",
    "zhHant": "疫苗接種記錄",
    "id": "az-0464",
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "escola",
    "pt": "a Ação Social Escolar (ASE)",
    "en": "school social support (meals/books subsidy)",
    "zhHans": "学校社会援助（餐费/教材补助）",
    "zhHant": "學校社會援助（餐費/教材補助）",
    "note": "Linked to abono de família escalão; needs NISS",
    "id": "az-0676",
    "legacyIds": [
      "situacao-a-acao-social-escolar-ase"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "escola",
    "pt": "o abono de família",
    "en": "family allowance",
    "zhHans": "家庭津贴",
    "zhHant": "家庭津貼",
    "id": "az-0677",
    "legacyIds": [
      "situacao-o-abono-de-familia"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "escola",
    "pt": "os manuais escolares",
    "en": "textbooks",
    "zhHans": "教科书",
    "zhHant": "教科書",
    "note": "Free in public schooling",
    "id": "az-0678",
    "legacyIds": [
      "situacao-os-manuais-escolares"
    ],
    "pos": "noun",
    "gender": "m-pl"
  },
  {
    "situacao": "escola",
    "pt": "o horário",
    "en": "timetable",
    "zhHans": "课程表",
    "zhHant": "課程表",
    "id": "az-0679",
    "legacyIds": [
      "situacao-o-horario"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "escola",
    "pt": "a reunião de pais",
    "en": "parents' meeting",
    "zhHans": "家长会",
    "zhHant": "家長會",
    "id": "az-0680",
    "legacyIds": [
      "situacao-a-reuniao-de-pais"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "escola",
    "pt": "o ATL",
    "en": "after-school care",
    "zhHans": "课后託管",
    "zhHant": "課後託管",
    "id": "az-0681",
    "legacyIds": [
      "situacao-o-atl"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "escola",
    "pt": "a cantina / o refeitório",
    "en": "school canteen",
    "zhHans": "学校食堂",
    "zhHant": "學校食堂",
    "id": "az-0682",
    "legacyIds": [
      "situacao-a-cantina-o-refeitorio"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "iefp",
    "pt": "o IEFP / o centro de emprego",
    "en": "IEFP / job centre",
    "zhHans": "就业与职业培训局（就业中心）",
    "zhHant": "就業與職業培訓局（就業中心）",
    "id": "az-0683",
    "legacyIds": [
      "situacao-o-iefp-o-centro-de-emprego"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "iefp",
    "pt": "inscrever-se como candidato a emprego",
    "en": "to register as a jobseeker",
    "zhHans": "登记为求职者",
    "zhHant": "登記為求職者",
    "note": "Online via iefponline or in person",
    "id": "az-0684",
    "legacyIds": [
      "situacao-inscrever-se-como-candidato-a-emprego"
    ]
  },
  {
    "situacao": "iefp",
    "pt": "o iefponline",
    "en": "the IEFP online portal",
    "zhHans": "IEFP线上平台",
    "zhHant": "IEFP線上平台",
    "id": "az-0685",
    "legacyIds": [
      "situacao-o-iefponline"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "iefp",
    "pt": "o subsídio de desemprego",
    "en": "unemployment benefit",
    "zhHans": "失业救济金",
    "zhHant": "失業救濟金",
    "note": "Register within 90 days of losing your job",
    "id": "az-0440",
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "iefp",
    "pt": "a declaração da entidade empregadora",
    "en": "employer's declaration (of dismissal)",
    "zhHans": "雇主解雇声明",
    "zhHant": "僱主解僱聲明",
    "id": "az-0686",
    "legacyIds": [
      "situacao-a-declaracao-da-entidade-empregadora"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "iefp",
    "pt": "o Plano Pessoal de Emprego",
    "en": "Personal Employment Plan",
    "zhHans": "个人就业计划",
    "zhHant": "個人就業計劃",
    "id": "az-0687",
    "legacyIds": [
      "situacao-o-plano-pessoal-de-emprego"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "iefp",
    "pt": "o gestor pessoal",
    "en": "personal case officer",
    "zhHans": "个人专员",
    "zhHant": "個人專員",
    "id": "az-0688",
    "legacyIds": [
      "situacao-o-gestor-pessoal"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "iefp",
    "pt": "a oferta de emprego",
    "en": "job offer / vacancy",
    "zhHans": "职位空缺",
    "zhHant": "職位空缺",
    "id": "az-0689",
    "legacyIds": [
      "situacao-a-oferta-de-emprego"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "iefp",
    "pt": "a formação profissional",
    "en": "vocational training",
    "zhHans": "职业培训",
    "zhHant": "職業培訓",
    "note": "Free courses, some with allowance",
    "id": "az-0690",
    "legacyIds": [
      "situacao-a-formacao-profissional"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "iefp",
    "pt": "o NISS (segurança social)",
    "en": "social security number",
    "zhHans": "社会保障号码（NISS）",
    "zhHant": "社會保障號碼（NISS）",
    "id": "az-0691",
    "legacyIds": [
      "situacao-o-niss-seguranca-social"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "iefp",
    "pt": "a convocatória",
    "en": "summons / official call-in",
    "zhHans": "（官方）约谈通知",
    "zhHant": "（官方）約談通知",
    "note": "Missing one can suspend your benefit",
    "id": "az-0692",
    "legacyIds": [
      "situacao-a-convocatoria"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "iefp",
    "pt": "apresentar-se no centro de emprego",
    "en": "to report to the job centre",
    "zhHans": "到就业中心報到",
    "zhHant": "到就業中心報到",
    "id": "az-0693",
    "legacyIds": [
      "situacao-apresentar-se-no-centro-de-emprego"
    ]
  },
  {
    "situacao": "iefp",
    "pt": "o certificado de habilitações",
    "en": "qualifications certificate",
    "zhHans": "学历证明",
    "zhHant": "學歷證明",
    "id": "az-0694",
    "legacyIds": [
      "situacao-o-certificado-de-habilitacoes"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "seguranca_social",
    "pt": "a Segurança Social",
    "en": "Social Security",
    "zhHans": "社会保障局",
    "zhHant": "社會保障局",
    "id": "az-0568",
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "seguranca_social",
    "pt": "o NISS",
    "en": "social security number (NISS)",
    "zhHans": "社会保障号码（NISS）",
    "zhHant": "社會保障號碼（NISS）",
    "note": "Needed to work legally and for benefits",
    "id": "az-0695",
    "legacyIds": [
      "situacao-o-niss"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "seguranca_social",
    "pt": "pedir o NISS",
    "en": "to apply for a NISS",
    "zhHans": "申请社保号",
    "zhHant": "申請社保號",
    "id": "az-0696",
    "legacyIds": [
      "situacao-pedir-o-niss"
    ]
  },
  {
    "situacao": "seguranca_social",
    "pt": "a Segurança Social Direta",
    "en": "the Social Security online portal",
    "zhHans": "社保线上平台",
    "zhHant": "社保線上平台",
    "id": "az-0697",
    "legacyIds": [
      "situacao-a-seguranca-social-direta"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "seguranca_social",
    "pt": "os descontos",
    "en": "(social security) contributions",
    "zhHans": "社保供款（扣缴）",
    "zhHant": "社保供款（扣繳）",
    "id": "az-0698",
    "legacyIds": [
      "situacao-os-descontos"
    ],
    "pos": "noun",
    "gender": "m-pl"
  },
  {
    "situacao": "seguranca_social",
    "pt": "o trabalhador por conta de outrem",
    "en": "employee (salaried worker)",
    "zhHans": "受雇员工",
    "zhHant": "受僱員工",
    "id": "az-0699",
    "legacyIds": [
      "situacao-o-trabalhador-por-conta-de-outrem"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "seguranca_social",
    "pt": "o trabalhador independente",
    "en": "self-employed worker",
    "zhHans": "自雇人士",
    "zhHant": "自僱人士",
    "id": "az-0700",
    "legacyIds": [
      "situacao-o-trabalhador-independente"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "seguranca_social",
    "pt": "os recibos verdes",
    "en": "'green receipts' (freelance invoicing)",
    "zhHans": "綠色收据（自雇开票制度）",
    "zhHant": "綠色收據（自僱開票制度）",
    "note": "How cleaners, riders etc. often invoice",
    "id": "az-0439",
    "legacyIds": [
      "situacao-os-recibos-verdes"
    ],
    "pos": "noun",
    "gender": "m-pl"
  },
  {
    "situacao": "seguranca_social",
    "pt": "o abono de família",
    "en": "family allowance",
    "zhHans": "家庭津贴",
    "zhHant": "家庭津貼",
    "id": "az-0677",
    "legacyIds": [
      "situacao-o-abono-de-familia"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "seguranca_social",
    "pt": "a baixa por doença",
    "en": "paid sick leave",
    "zhHans": "病假津贴",
    "zhHant": "病假津貼",
    "id": "az-0702",
    "legacyIds": [
      "situacao-a-baixa-por-doenca"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "seguranca_social",
    "pt": "a declaração de situação contributiva",
    "en": "statement of contributions status",
    "zhHans": "供款状况声明",
    "zhHant": "供款狀況聲明",
    "note": "Often requested for AR renewal",
    "id": "az-0703",
    "legacyIds": [
      "situacao-a-declaracao-de-situacao-contributiva"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "seguranca_social",
    "pt": "o comprovativo",
    "en": "proof / receipt (of application)",
    "zhHans": "申请憑证",
    "zhHant": "申請憑證",
    "id": "az-0704",
    "legacyIds": [
      "situacao-o-comprovativo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "arrendamento",
    "pt": "arrendar um quarto / um apartamento",
    "en": "to rent a room / a flat",
    "zhHans": "租一个房间／一套公寓",
    "zhHant": "租一個房間／一套公寓",
    "id": "az-0705",
    "legacyIds": [
      "situacao-arrendar-um-quarto-um-apartamento"
    ]
  },
  {
    "situacao": "arrendamento",
    "pt": "o T0 / T1 / T2",
    "en": "studio / 1-bed / 2-bed flat",
    "zhHans": "开间／一房／两房公寓",
    "zhHant": "開間／一房／兩房公寓",
    "note": "T = number of bedrooms",
    "id": "az-0706",
    "legacyIds": [
      "situacao-o-t0-t1-t2"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "arrendamento",
    "pt": "o senhorio / a senhoria",
    "en": "landlord / landlady",
    "zhHans": "房东",
    "zhHant": "房東",
    "id": "az-0707",
    "legacyIds": [
      "situacao-o-senhorio-a-senhoria"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "arrendamento",
    "pt": "o inquilino / a inquilina",
    "en": "tenant",
    "zhHans": "房客",
    "zhHant": "房客",
    "id": "az-0708",
    "legacyIds": [
      "situacao-o-inquilino-a-inquilina"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "arrendamento",
    "pt": "a renda",
    "en": "the rent",
    "zhHans": "租金",
    "zhHant": "租金",
    "id": "az-0085",
    "legacyIds": [
      "situacao-a-renda"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "arrendamento",
    "pt": "a caução",
    "en": "deposit",
    "zhHans": "押金",
    "zhHant": "押金",
    "note": "Usually 1–2 months' rent",
    "id": "az-0710",
    "legacyIds": [
      "situacao-a-caucao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "arrendamento",
    "pt": "o fiador",
    "en": "guarantor",
    "zhHans": "担保人",
    "zhHant": "擔保人",
    "note": "Often asked of newcomers without payslips",
    "id": "az-0711",
    "legacyIds": [
      "situacao-o-fiador"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "arrendamento",
    "pt": "o contrato de arrendamento",
    "en": "rental contract",
    "zhHans": "租赁合同",
    "zhHant": "租賃合同",
    "note": "Needed as proof of address everywhere",
    "id": "az-0643",
    "legacyIds": [
      "situacao-o-contrato-de-arrendamento"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "arrendamento",
    "pt": "o recibo de renda (eletrónico)",
    "en": "(electronic) rent receipt",
    "zhHans": "（电子）租金收据",
    "zhHant": "（電子）租金收據",
    "note": "Ask for it — proves address and protects you",
    "id": "az-0712",
    "legacyIds": [
      "situacao-o-recibo-de-renda-eletronico"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "arrendamento",
    "pt": "despesas incluídas",
    "en": "bills included",
    "zhHans": "包水电杂费",
    "zhHant": "包水電雜費",
    "id": "az-0713",
    "legacyIds": [
      "situacao-despesas-incluidas"
    ]
  },
  {
    "situacao": "arrendamento",
    "pt": "mobilado / sem mobília",
    "en": "furnished / unfurnished",
    "zhHans": "带家私／不带家私",
    "zhHant": "帶傢俬／不帶傢俬",
    "id": "az-0714",
    "legacyIds": [
      "situacao-mobilado-sem-mobilia"
    ]
  },
  {
    "situacao": "arrendamento",
    "pt": "o condomínio",
    "en": "building service charge",
    "zhHans": "大厦管理费",
    "zhHant": "大廈管理費",
    "id": "az-0715",
    "legacyIds": [
      "situacao-o-condominio"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "arrendamento",
    "pt": "rescindir o contrato",
    "en": "to terminate the contract",
    "zhHans": "解除合同",
    "zhHant": "解除合同",
    "id": "az-0716",
    "legacyIds": [
      "situacao-rescindir-o-contrato"
    ]
  },
  {
    "situacao": "arrendamento",
    "pt": "a visita (ao imóvel)",
    "en": "viewing",
    "zhHans": "看房",
    "zhHant": "看房",
    "id": "az-0717",
    "legacyIds": [
      "situacao-a-visita-ao-imovel"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "transportes",
    "pt": "o passe (navegante)",
    "en": "travel pass (navegante)",
    "zhHans": "月票（navegante卡）",
    "zhHant": "月票（navegante卡）",
    "note": "Lisbon area system; Porto uses Andante",
    "id": "az-0718",
    "legacyIds": [
      "situacao-o-passe-navegante"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "transportes",
    "pt": "carregar o passe",
    "en": "to top up the pass",
    "zhHans": "给月票充值",
    "zhHant": "給月票充值",
    "id": "az-0719",
    "legacyIds": [
      "situacao-carregar-o-passe"
    ]
  },
  {
    "situacao": "transportes",
    "pt": "validar o bilhete",
    "en": "to validate the ticket",
    "zhHans": "打卡验票",
    "zhHant": "打卡驗票",
    "note": "Always validate — fines are heavy",
    "id": "az-0720",
    "legacyIds": [
      "situacao-validar-o-bilhete"
    ]
  },
  {
    "situacao": "transportes",
    "pt": "a máquina de venda",
    "en": "ticket machine",
    "zhHans": "售票机",
    "zhHant": "售票機",
    "id": "az-0721",
    "legacyIds": [
      "situacao-a-maquina-de-venda"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "transportes",
    "pt": "a carreira / a linha",
    "en": "bus route / line",
    "zhHans": "公交线路",
    "zhHant": "公交線路",
    "id": "az-0722",
    "legacyIds": [
      "situacao-a-carreira-a-linha"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "transportes",
    "pt": "a paragem",
    "en": "stop",
    "zhHans": "车站（站点）",
    "zhHant": "車站（站點）",
    "id": "az-0723",
    "legacyIds": [
      "situacao-a-paragem"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "transportes",
    "pt": "a estação",
    "en": "station",
    "zhHans": "车站（火车/地铁站）",
    "zhHant": "車站（火車/地鐵站）",
    "id": "az-0724",
    "legacyIds": [
      "situacao-a-estacao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "transportes",
    "pt": "o fiscal",
    "en": "ticket inspector",
    "zhHans": "查票员",
    "zhHant": "查票員",
    "id": "az-0725",
    "legacyIds": [
      "situacao-o-fiscal"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "transportes",
    "pt": "a multa",
    "en": "fine",
    "zhHans": "罚款",
    "zhHant": "罰款",
    "id": "az-0726",
    "legacyIds": [
      "situacao-a-multa"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "transportes",
    "pt": "o horário",
    "en": "timetable",
    "zhHans": "时刻表",
    "zhHant": "時刻表",
    "id": "az-0679",
    "legacyIds": [
      "situacao-o-horario"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "transportes",
    "pt": "a zona",
    "en": "fare zone",
    "zhHans": "票价区",
    "zhHant": "票價區",
    "id": "az-0727",
    "legacyIds": [
      "situacao-a-zona"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "transportes",
    "pt": "o elétrico",
    "en": "tram",
    "zhHans": "有轨电车",
    "zhHant": "有軌電車",
    "id": "az-0728",
    "legacyIds": [
      "situacao-o-eletrico"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o turno (da manhã / da tarde / da noite)",
    "en": "shift (morning / afternoon / night)",
    "zhHans": "班次（早班／午班／夜班）",
    "zhHant": "班次（早班／午班／夜班）",
    "id": "az-0729",
    "legacyIds": [
      "situacao-o-turno-da-manha-da-tarde-da-noite"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "a governanta",
    "en": "head housekeeper",
    "zhHans": "客房部主管",
    "zhHant": "客房部主管",
    "id": "az-0730",
    "legacyIds": [
      "situacao-a-governanta"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "arrumar os quartos",
    "en": "to make up the rooms",
    "zhHans": "整理客房",
    "zhHant": "整理客房",
    "id": "az-0731",
    "legacyIds": [
      "situacao-arrumar-os-quartos"
    ]
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "mudar os lençóis / as toalhas",
    "en": "to change the sheets / towels",
    "zhHans": "更换床单／毛巾",
    "zhHant": "更換床單／毛巾",
    "id": "az-0732",
    "legacyIds": [
      "situacao-mudar-os-lencois-as-toalhas"
    ]
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o carrinho de limpeza",
    "en": "housekeeping cart",
    "zhHans": "清洁工作车",
    "zhHant": "清潔工作車",
    "id": "az-0733",
    "legacyIds": [
      "situacao-o-carrinho-de-limpeza"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o hóspede",
    "en": "guest",
    "zhHans": "住客",
    "zhHant": "住客",
    "id": "az-0734",
    "legacyIds": [
      "situacao-o-hospede"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "a receção",
    "en": "reception / front desk",
    "zhHans": "前台",
    "zhHant": "前台",
    "id": "az-0513",
    "legacyIds": [
      "situacao-a-rececao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o check-in / o check-out",
    "en": "check-in / check-out",
    "zhHans": "入住／退房",
    "zhHant": "入住／退房",
    "id": "az-0736",
    "legacyIds": [
      "situacao-o-check-in-o-check-out"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o cartão do quarto",
    "en": "room key card",
    "zhHans": "房卡",
    "zhHant": "房卡",
    "id": "az-0737",
    "legacyIds": [
      "situacao-o-cartao-do-quarto"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "a folga",
    "en": "day off",
    "zhHans": "休息日",
    "zhHant": "休息日",
    "id": "az-0738",
    "legacyIds": [
      "situacao-a-folga"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "as horas extra",
    "en": "overtime",
    "zhHans": "加班",
    "zhHant": "加班",
    "id": "az-0739",
    "legacyIds": [
      "situacao-as-horas-extra"
    ],
    "pos": "noun",
    "gender": "f-pl"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o uniforme",
    "en": "uniform",
    "zhHans": "制服",
    "zhHant": "制服",
    "id": "az-0740",
    "legacyIds": [
      "situacao-o-uniforme"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o andar",
    "en": "floor (storey)",
    "zhHans": "楼层",
    "zhHant": "樓層",
    "id": "az-0078",
    "legacyIds": [
      "situacao-o-andar"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "o empregado / a empregada de mesa",
    "en": "waiter / waitress",
    "zhHans": "服务员",
    "zhHant": "服務員",
    "id": "az-0742",
    "legacyIds": [
      "situacao-o-empregado-a-empregada-de-mesa"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "o ajudante de cozinha",
    "en": "kitchen assistant",
    "zhHans": "厨房帮工",
    "zhHant": "廚房幫工",
    "id": "az-0743",
    "legacyIds": [
      "situacao-o-ajudante-de-cozinha"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "a ementa / o menu",
    "en": "menu",
    "zhHans": "菜单",
    "zhHant": "菜單",
    "id": "az-0744",
    "legacyIds": [
      "situacao-a-ementa-o-menu"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "o prato do dia",
    "en": "dish of the day",
    "zhHans": "今日特餐",
    "zhHant": "今日特餐",
    "id": "az-0745",
    "legacyIds": [
      "situacao-o-prato-do-dia"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "anotar o pedido",
    "en": "to take the order",
    "zhHans": "记录点单",
    "zhHant": "記錄點單",
    "id": "az-0746",
    "legacyIds": [
      "situacao-anotar-o-pedido"
    ]
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "a esplanada",
    "en": "outdoor terrace",
    "zhHans": "露天座位",
    "zhHant": "露天座位",
    "id": "az-0747",
    "legacyIds": [
      "situacao-a-esplanada"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "o balcão",
    "en": "the counter / bar",
    "zhHans": "吧台／柜台",
    "zhHant": "吧台／櫃檯",
    "id": "az-0595",
    "legacyIds": [
      "situacao-o-balcao"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "os talheres / o guardanapo",
    "en": "cutlery / napkin",
    "zhHans": "餐具／餐巾",
    "zhHant": "餐具／餐巾",
    "id": "az-0749",
    "legacyIds": [
      "situacao-os-talheres-o-guardanapo"
    ],
    "pos": "noun",
    "gender": "m-pl"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "a conta",
    "en": "the bill",
    "zhHans": "账单",
    "zhHant": "賬單",
    "id": "az-0160",
    "legacyIds": [
      "situacao-a-conta"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "a gorjeta",
    "en": "tip",
    "zhHans": "小费",
    "zhHant": "小費",
    "id": "az-0751",
    "legacyIds": [
      "situacao-a-gorjeta"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "lavar a loiça",
    "en": "to wash the dishes",
    "zhHans": "洗碗",
    "zhHant": "洗碗",
    "id": "az-0752",
    "legacyIds": [
      "situacao-lavar-a-loica"
    ]
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "a comanda",
    "en": "order slip",
    "zhHans": "点菜单",
    "zhHant": "點菜單",
    "id": "az-0753",
    "legacyIds": [
      "situacao-a-comanda"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "Bom proveito!",
    "en": "Enjoy your meal!",
    "zhHans": "请慢用！",
    "zhHant": "請慢用！",
    "id": "az-0754",
    "legacyIds": [
      "situacao-bom-proveito"
    ]
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "a empregada / o empregado de limpeza",
    "en": "cleaner",
    "zhHans": "清洁工",
    "zhHant": "清潔工",
    "id": "az-0755",
    "legacyIds": [
      "situacao-a-empregada-o-empregado-de-limpeza"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "o produto de limpeza",
    "en": "cleaning product",
    "zhHans": "清洁剂",
    "zhHant": "清潔劑",
    "id": "az-0756",
    "legacyIds": [
      "situacao-o-produto-de-limpeza"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "a lixívia",
    "en": "bleach",
    "zhHans": "漂白水",
    "zhHant": "漂白水",
    "id": "az-0757",
    "legacyIds": [
      "situacao-a-lixivia"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "a esfregona e o balde",
    "en": "mop and bucket",
    "zhHans": "拖把和水桶",
    "zhHant": "拖把和水桶",
    "id": "az-0758",
    "legacyIds": [
      "situacao-a-esfregona-e-o-balde"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "aspirar",
    "en": "to vacuum",
    "zhHans": "吸塵",
    "zhHant": "吸塵",
    "id": "az-0373"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "limpar o pó",
    "en": "to dust",
    "zhHans": "擦灰塵",
    "zhHant": "擦灰塵",
    "id": "az-0372"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "esfregar o chão",
    "en": "to mop/scrub the floor",
    "zhHans": "拖地／擦地",
    "zhHant": "拖地／擦地",
    "id": "az-0759",
    "legacyIds": [
      "situacao-esfregar-o-chao"
    ]
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "o lixo / a reciclagem",
    "en": "rubbish / recycling",
    "zhHans": "垃圾／回收",
    "zhHant": "垃圾／回收",
    "id": "az-0760",
    "legacyIds": [
      "situacao-o-lixo-a-reciclagem"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "as luvas",
    "en": "gloves",
    "zhHans": "手套",
    "zhHant": "手套",
    "id": "az-0354",
    "pos": "noun",
    "gender": "f-pl"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "à hora / por horas",
    "en": "paid by the hour",
    "zhHans": "按小时计酬",
    "zhHant": "按小時計酬",
    "id": "az-0761",
    "legacyIds": [
      "situacao-a-hora-por-horas"
    ]
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "a patroa / o patrão",
    "en": "employer (informal)",
    "zhHans": "雇主（东家）",
    "zhHant": "僱主（東家）",
    "id": "az-0762",
    "legacyIds": [
      "situacao-a-patroa-o-patrao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "os recibos verdes",
    "en": "freelance receipts",
    "zhHans": "綠色收据（自雇开票）",
    "zhHant": "綠色收據（自僱開票）",
    "note": "Very common in domestic cleaning",
    "id": "az-0439",
    "legacyIds": [
      "situacao-os-recibos-verdes"
    ],
    "pos": "noun",
    "gender": "m-pl"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "a obra / o estaleiro",
    "en": "building site",
    "zhHans": "工地",
    "zhHant": "工地",
    "id": "az-0764",
    "legacyIds": [
      "situacao-a-obra-o-estaleiro"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o servente",
    "en": "labourer",
    "zhHans": "小工（杂工）",
    "zhHant": "小工（雜工）",
    "id": "az-0765",
    "legacyIds": [
      "situacao-o-servente"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o pedreiro",
    "en": "bricklayer / mason",
    "zhHans": "泥瓦工",
    "zhHant": "泥瓦工",
    "id": "az-0766",
    "legacyIds": [
      "situacao-o-pedreiro"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o encarregado da obra",
    "en": "site foreman",
    "zhHans": "工地领班",
    "zhHant": "工地領班",
    "id": "az-0767",
    "legacyIds": [
      "situacao-o-encarregado-da-obra"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o capacete",
    "en": "hard hat",
    "zhHans": "安全帽",
    "zhHant": "安全帽",
    "id": "az-0389",
    "legacyIds": [
      "situacao-o-capacete"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "as botas de proteção",
    "en": "safety boots",
    "zhHans": "安全鞋",
    "zhHant": "安全鞋",
    "id": "az-0769",
    "legacyIds": [
      "situacao-as-botas-de-protecao"
    ],
    "pos": "noun",
    "gender": "f-pl"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o colete refletor",
    "en": "hi-vis vest",
    "zhHans": "反光背心",
    "zhHant": "反光背心",
    "id": "az-0770",
    "legacyIds": [
      "situacao-o-colete-refletor"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o EPI (equipamento de proteção individual)",
    "en": "PPE (personal protective equipment)",
    "zhHans": "个人防护装備",
    "zhHant": "個人防護裝備",
    "note": "Mandatory; refusing unsafe work is your right",
    "id": "az-0771",
    "legacyIds": [
      "situacao-o-epi-equipamento-de-protecao-individual"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o andaime",
    "en": "scaffolding",
    "zhHans": "腳手架",
    "zhHant": "腳手架",
    "id": "az-0772",
    "legacyIds": [
      "situacao-o-andaime"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o cimento / o betão",
    "en": "cement / concrete",
    "zhHans": "水泥／混凝土",
    "zhHant": "水泥／混凝土",
    "id": "az-0773",
    "legacyIds": [
      "situacao-o-cimento-o-betao"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o tijolo",
    "en": "brick",
    "zhHans": "砖",
    "zhHant": "磚",
    "id": "az-0774",
    "legacyIds": [
      "situacao-o-tijolo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "a betoneira",
    "en": "cement mixer",
    "zhHans": "搅拌机",
    "zhHant": "攪拌機",
    "id": "az-0775",
    "legacyIds": [
      "situacao-a-betoneira"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o contrato de trabalho",
    "en": "work contract",
    "zhHans": "劳动合同",
    "zhHant": "勞動合同",
    "note": "Insist on one — protects wages and NISS",
    "id": "az-0391",
    "legacyIds": [
      "situacao-o-contrato-de-trabalho"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o estafeta",
    "en": "delivery rider/courier",
    "zhHans": "外卖员／快递员",
    "zhHant": "外賣員／快遞員",
    "id": "az-0777",
    "legacyIds": [
      "situacao-o-estafeta"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "a entrega",
    "en": "delivery",
    "zhHans": "配送",
    "zhHant": "配送",
    "id": "az-0778",
    "legacyIds": [
      "situacao-a-entrega"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o pedido",
    "en": "the order",
    "zhHans": "订单",
    "zhHant": "訂單",
    "id": "az-0779",
    "legacyIds": [
      "situacao-o-pedido"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "a mochila térmica",
    "en": "thermal delivery bag",
    "zhHans": "保溫配送箱",
    "zhHant": "保溫配送箱",
    "id": "az-0780",
    "legacyIds": [
      "situacao-a-mochila-termica"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "a aplicação / a app",
    "en": "the app",
    "zhHans": "应用程式",
    "zhHant": "應用程式",
    "id": "az-0781",
    "legacyIds": [
      "situacao-a-aplicacao-a-app"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "a morada",
    "en": "address",
    "zhHans": "地址",
    "zhHant": "地址",
    "id": "az-0015",
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o código da porta",
    "en": "door/entry code",
    "zhHans": "门禁密码",
    "zhHant": "門禁密碼",
    "id": "az-0782",
    "legacyIds": [
      "situacao-o-codigo-da-porta"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o interfone / a campainha",
    "en": "intercom / doorbell",
    "zhHans": "对讲机／门鈴",
    "zhHant": "對講機／門鈴",
    "id": "az-0783",
    "legacyIds": [
      "situacao-o-interfone-a-campainha"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "ligar ao cliente",
    "en": "to call the customer",
    "zhHans": "给顾客打电话",
    "zhHant": "給顧客打電話",
    "id": "az-0784",
    "legacyIds": [
      "situacao-ligar-ao-cliente"
    ]
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o rés-do-chão / o andar",
    "en": "ground floor / floor",
    "zhHans": "一楼（地面层）／楼层",
    "zhHant": "一樓（地面層）／樓層",
    "id": "az-0785",
    "legacyIds": [
      "situacao-o-res-do-chao-o-andar"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "a mota / a bicicleta",
    "en": "motorbike / bicycle",
    "zhHans": "摩托车／自行车",
    "zhHant": "摩托車／自行車",
    "id": "az-0786",
    "legacyIds": [
      "situacao-a-mota-a-bicicleta"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o trânsito",
    "en": "traffic",
    "zhHans": "交通（堵车）",
    "zhHant": "交通（堵車）",
    "id": "az-0131",
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "a conta poupança",
    "en": "savings account",
    "zhHans": "储蓄账户",
    "zhHant": "儲蓄帳戶",
    "id": "az-0787",
    "legacyIds": [
      "situacao-a-conta-poupanca"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "banco",
    "pt": "o empréstimo",
    "en": "loan",
    "zhHans": "貸款",
    "zhHant": "貸款",
    "id": "az-0788",
    "legacyIds": [
      "situacao-o-emprestimo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "o crédito habitação",
    "en": "mortgage",
    "zhHans": "房屋貸款",
    "zhHant": "房屋貸款",
    "id": "az-0789",
    "legacyIds": [
      "situacao-o-credito-habitacao"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "a taxa de juro",
    "en": "interest rate",
    "zhHans": "利率",
    "zhHant": "利率",
    "id": "az-0790",
    "legacyIds": [
      "situacao-a-taxa-de-juro"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "banco",
    "pt": "a prestação",
    "en": "monthly instalment",
    "zhHans": "每月分期还款",
    "zhHant": "每月分期還款",
    "id": "az-0791",
    "legacyIds": [
      "situacao-a-prestacao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "banco",
    "pt": "o MB Way",
    "en": "MB Way (mobile payment app)",
    "zhHans": "MB Way（手机支付应用）",
    "zhHant": "MB Way（手機支付應用）",
    "note": "Ubiquitous in PT; ask the bank to activate it",
    "id": "az-0792",
    "legacyIds": [
      "situacao-o-mb-way"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "o multibanco / a caixa automática",
    "en": "ATM",
    "zhHans": "自动柜员机（ATM）",
    "zhHant": "自動櫃員機（ATM）",
    "id": "az-0793",
    "legacyIds": [
      "situacao-o-multibanco-a-caixa-automatica"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "o talão",
    "en": "receipt slip (from ATM)",
    "zhHans": "（柜员机）憑条",
    "zhHant": "（櫃員機）憑條",
    "id": "az-0161",
    "legacyIds": [
      "situacao-o-talao"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "o movimento",
    "en": "account transaction",
    "zhHans": "账户交易记录",
    "zhHant": "帳戶交易記錄",
    "id": "az-0795",
    "legacyIds": [
      "situacao-o-movimento"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "o débito direto",
    "en": "direct debit",
    "zhHans": "自动扣款",
    "zhHant": "自動扣款",
    "note": "How utilities are usually paid",
    "id": "az-0796",
    "legacyIds": [
      "situacao-o-debito-direto"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "a transferência imediata",
    "en": "instant transfer",
    "zhHans": "即时转账",
    "zhHant": "即時轉帳",
    "id": "az-0797",
    "legacyIds": [
      "situacao-a-transferencia-imediata"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "banco",
    "pt": "o pagamento sem contacto / contactless",
    "en": "contactless payment",
    "zhHans": "感应式支付",
    "zhHant": "感應式支付",
    "id": "az-0798",
    "legacyIds": [
      "situacao-o-pagamento-sem-contacto-contactless"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "o limite de levantamento",
    "en": "withdrawal limit",
    "zhHans": "提款限额",
    "zhHant": "提款限額",
    "id": "az-0799",
    "legacyIds": [
      "situacao-o-limite-de-levantamento"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "bloquear o cartão",
    "en": "to block the card",
    "zhHans": "挂失／冻结银行卡",
    "zhHant": "掛失／凍結銀行卡",
    "id": "az-0800",
    "legacyIds": [
      "situacao-bloquear-o-cartao"
    ]
  },
  {
    "situacao": "banco",
    "pt": "o cartão foi retido",
    "en": "the card was retained (by the ATM)",
    "zhHans": "卡被柜员机吞了",
    "zhHant": "卡被櫃員機吞了",
    "id": "az-0801",
    "legacyIds": [
      "situacao-o-cartao-foi-retido"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "a assinatura",
    "en": "signature",
    "zhHans": "签名",
    "zhHant": "簽名",
    "id": "az-0802",
    "legacyIds": [
      "situacao-a-assinatura"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "banco",
    "pt": "o gestor de conta",
    "en": "account manager",
    "zhHans": "客户经理",
    "zhHant": "客戶經理",
    "id": "az-0803",
    "legacyIds": [
      "situacao-o-gestor-de-conta"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "banco",
    "pt": "a agência / o balcão",
    "en": "branch / counter",
    "zhHans": "分行／柜台",
    "zhHant": "分行／櫃檯",
    "id": "az-0804",
    "legacyIds": [
      "situacao-a-agencia-o-balcao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "banco",
    "pt": "a comissão",
    "en": "fee / charge",
    "zhHans": "手续费",
    "zhHant": "手續費",
    "id": "az-0805",
    "legacyIds": [
      "situacao-a-comissao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "banco",
    "pt": "levantar sem cartão (MB Way)",
    "en": "cardless withdrawal",
    "zhHans": "无卡提款",
    "zhHant": "無卡提款",
    "id": "az-0806",
    "legacyIds": [
      "situacao-levantar-sem-cartao-mb-way"
    ]
  },
  {
    "situacao": "financas",
    "pt": "o IRS",
    "en": "personal income tax",
    "zhHans": "个人所得税（IRS）",
    "zhHant": "個人所得稅（IRS）",
    "id": "az-0807",
    "legacyIds": [
      "situacao-o-irs"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "financas",
    "pt": "a fatura com NIF / com contribuinte",
    "en": "receipt with your tax number",
    "zhHans": "带税号的发票",
    "zhHant": "帶稅號的發票",
    "note": "Asked at every shop: 'Quer fatura com contribuinte?'",
    "id": "az-0808",
    "legacyIds": [
      "situacao-a-fatura-com-nif-com-contribuinte"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "financas",
    "pt": "o e-Fatura",
    "en": "e-Fatura (invoice portal)",
    "zhHans": "电子发票平台（e-Fatura）",
    "zhHant": "電子發票平台（e-Fatura）",
    "id": "az-0809",
    "legacyIds": [
      "situacao-o-e-fatura"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "financas",
    "pt": "o reembolso",
    "en": "tax refund",
    "zhHans": "退税",
    "zhHant": "退稅",
    "id": "az-0810",
    "legacyIds": [
      "situacao-o-reembolso"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "financas",
    "pt": "pagar em prestações",
    "en": "to pay in instalments",
    "zhHans": "分期缴納",
    "zhHant": "分期繳納",
    "id": "az-0811",
    "legacyIds": [
      "situacao-pagar-em-prestacoes"
    ]
  },
  {
    "situacao": "financas",
    "pt": "a dívida fiscal",
    "en": "tax debt",
    "zhHans": "税务欠款",
    "zhHant": "稅務欠款",
    "id": "az-0812",
    "legacyIds": [
      "situacao-a-divida-fiscal"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "financas",
    "pt": "o IMI",
    "en": "property tax",
    "zhHans": "房产税（IMI）",
    "zhHant": "房產稅（IMI）",
    "id": "az-0813",
    "legacyIds": [
      "situacao-o-imi"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "financas",
    "pt": "o IUC",
    "en": "road tax",
    "zhHans": "车辆税（IUC）",
    "zhHant": "車輛稅（IUC）",
    "id": "az-0814",
    "legacyIds": [
      "situacao-o-iuc"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "financas",
    "pt": "o IVA",
    "en": "VAT",
    "zhHans": "增值税（IVA）",
    "zhHant": "增值稅（IVA）",
    "id": "az-0815",
    "legacyIds": [
      "situacao-o-iva"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "financas",
    "pt": "a isenção",
    "en": "exemption",
    "zhHans": "免税／豁免",
    "zhHant": "免稅／豁免",
    "id": "az-0816",
    "legacyIds": [
      "situacao-a-isencao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "financas",
    "pt": "o escalão",
    "en": "income bracket",
    "zhHans": "收入级距",
    "zhHant": "收入級距",
    "id": "az-0817",
    "legacyIds": [
      "situacao-o-escalao"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "financas",
    "pt": "o rendimento",
    "en": "income",
    "zhHans": "收入",
    "zhHant": "收入",
    "id": "az-0818",
    "legacyIds": [
      "situacao-o-rendimento"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "financas",
    "pt": "abrir atividade",
    "en": "to register as self-employed",
    "zhHans": "开业登记（自雇）",
    "zhHant": "開業登記（自僱）",
    "note": "Required before issuing recibos verdes",
    "id": "az-0819",
    "legacyIds": [
      "situacao-abrir-atividade"
    ]
  },
  {
    "situacao": "financas",
    "pt": "cessar atividade",
    "en": "to close self-employed activity",
    "zhHans": "停业登记",
    "zhHant": "停業登記",
    "id": "az-0820",
    "legacyIds": [
      "situacao-cessar-atividade"
    ]
  },
  {
    "situacao": "financas",
    "pt": "a categoria B",
    "en": "category B (self-employment income)",
    "zhHans": "B类收入（自雇所得）",
    "zhHant": "B類收入（自僱所得）",
    "id": "az-0821",
    "legacyIds": [
      "situacao-a-categoria-b"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "financas",
    "pt": "a retenção na fonte",
    "en": "withholding tax",
    "zhHans": "源头扣缴（预扣税）",
    "zhHant": "源頭扣繳（預扣稅）",
    "id": "az-0822",
    "legacyIds": [
      "situacao-a-retencao-na-fonte"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "financas",
    "pt": "o recibo verde eletrónico",
    "en": "electronic freelance receipt",
    "zhHans": "电子綠色收据",
    "zhHant": "電子綠色收據",
    "id": "az-0823",
    "legacyIds": [
      "situacao-o-recibo-verde-eletronico"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "financas",
    "pt": "a Chave Móvel Digital (CMD)",
    "en": "Digital Mobile Key (gov. login)",
    "zhHans": "数字移动密钥（政府通用登录）",
    "zhHant": "數字移動密鑰（政府通用登錄）",
    "note": "One login for Finanças, SS, SNS portals",
    "id": "az-0824",
    "legacyIds": [
      "situacao-a-chave-movel-digital-cmd"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "financas",
    "pt": "o certificado digital",
    "en": "digital certificate",
    "zhHans": "数字证书",
    "zhHant": "數字證書",
    "id": "az-0825",
    "legacyIds": [
      "situacao-o-certificado-digital"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "financas",
    "pt": "a nota de liquidação",
    "en": "tax assessment notice",
    "zhHans": "税款结算单",
    "zhHant": "稅款結算單",
    "note": "Proof of income for AR renewals",
    "id": "az-0826",
    "legacyIds": [
      "situacao-a-nota-de-liquidacao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "correios",
    "pt": "o envelope",
    "en": "envelope",
    "zhHans": "信封",
    "zhHant": "信封",
    "id": "az-0827",
    "legacyIds": [
      "situacao-o-envelope"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "correios",
    "pt": "a caixa / a embalagem",
    "en": "box / packaging",
    "zhHans": "纸箱／包装",
    "zhHant": "紙箱／包裝",
    "id": "az-0828",
    "legacyIds": [
      "situacao-a-caixa-a-embalagem"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "correios",
    "pt": "pesar",
    "en": "to weigh",
    "zhHans": "稱重",
    "zhHant": "稱重",
    "id": "az-0829",
    "legacyIds": [
      "situacao-pesar"
    ]
  },
  {
    "situacao": "correios",
    "pt": "o peso",
    "en": "weight",
    "zhHans": "重量",
    "zhHant": "重量",
    "id": "az-0830",
    "legacyIds": [
      "situacao-o-peso"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "correios",
    "pt": "frágil",
    "en": "fragile",
    "zhHans": "易碎",
    "zhHant": "易碎",
    "id": "az-0831",
    "legacyIds": [
      "situacao-fragil"
    ]
  },
  {
    "situacao": "correios",
    "pt": "o correio normal",
    "en": "standard mail",
    "zhHans": "平邮",
    "zhHant": "平郵",
    "id": "az-0832",
    "legacyIds": [
      "situacao-o-correio-normal"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "correios",
    "pt": "o correio expresso",
    "en": "express mail",
    "zhHans": "快递",
    "zhHant": "快遞",
    "id": "az-0833",
    "legacyIds": [
      "situacao-o-correio-expresso"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "correios",
    "pt": "o prazo de entrega",
    "en": "delivery time",
    "zhHans": "送达时间",
    "zhHant": "送達時間",
    "id": "az-0834",
    "legacyIds": [
      "situacao-o-prazo-de-entrega"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "correios",
    "pt": "a alfândega",
    "en": "customs",
    "zhHans": "海关",
    "zhHant": "海關",
    "note": "Parcels from outside the EU often get held here",
    "id": "az-0835",
    "legacyIds": [
      "situacao-a-alfandega"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "correios",
    "pt": "a taxa alfandegária",
    "en": "customs fee",
    "zhHans": "关税",
    "zhHant": "關稅",
    "id": "az-0836",
    "legacyIds": [
      "situacao-a-taxa-alfandegaria"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "correios",
    "pt": "o formulário aduaneiro",
    "en": "customs form",
    "zhHans": "報关单",
    "zhHant": "報關單",
    "id": "az-0837",
    "legacyIds": [
      "situacao-o-formulario-aduaneiro"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "correios",
    "pt": "a segunda tentativa de entrega",
    "en": "second delivery attempt",
    "zhHans": "第二次派送",
    "zhHant": "第二次派送",
    "id": "az-0838",
    "legacyIds": [
      "situacao-a-segunda-tentativa-de-entrega"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "correios",
    "pt": "o cacifo / o locker",
    "en": "parcel locker",
    "zhHans": "快递柜",
    "zhHant": "快遞櫃",
    "id": "az-0839",
    "legacyIds": [
      "situacao-o-cacifo-o-locker"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "correios",
    "pt": "reencaminhar",
    "en": "to forward (mail)",
    "zhHans": "转寄",
    "zhHant": "轉寄",
    "id": "az-0840",
    "legacyIds": [
      "situacao-reencaminhar"
    ]
  },
  {
    "situacao": "correios",
    "pt": "devolver ao remetente",
    "en": "to return to sender",
    "zhHans": "退回寄件人",
    "zhHant": "退回寄件人",
    "id": "az-0841",
    "legacyIds": [
      "situacao-devolver-ao-remetente"
    ]
  },
  {
    "situacao": "correios",
    "pt": "a entrega ao domicílio",
    "en": "home delivery",
    "zhHans": "送货上门",
    "zhHant": "送貨上門",
    "id": "az-0842",
    "legacyIds": [
      "situacao-a-entrega-ao-domicilio"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "correios",
    "pt": "a assinatura na entrega",
    "en": "signature on delivery",
    "zhHans": "签收",
    "zhHant": "簽收",
    "id": "az-0843",
    "legacyIds": [
      "situacao-a-assinatura-na-entrega"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "correios",
    "pt": "o vale postal",
    "en": "postal money order",
    "zhHans": "邮政汇票",
    "zhHant": "郵政匯票",
    "id": "az-0844",
    "legacyIds": [
      "situacao-o-vale-postal"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "correios",
    "pt": "levantar na loja",
    "en": "to collect in store",
    "zhHans": "到店自取",
    "zhHant": "到店自取",
    "id": "az-0845",
    "legacyIds": [
      "situacao-levantar-na-loja"
    ]
  },
  {
    "situacao": "correios",
    "pt": "o horário de funcionamento",
    "en": "opening hours",
    "zhHans": "營业时间",
    "zhHant": "營業時間",
    "id": "az-0846",
    "legacyIds": [
      "situacao-o-horario-de-funcionamento"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "o Espaço Cidadão",
    "en": "Citizen's Desk (one-stop services)",
    "zhHans": "公民服务站",
    "zhHant": "公民服務站",
    "note": "Renew CC, CMD activation, IRS help — often inside the junta",
    "id": "az-0847",
    "legacyIds": [
      "situacao-o-espaco-cidadao"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "o recenseamento eleitoral",
    "en": "electoral registration",
    "zhHans": "选民登记",
    "zhHant": "選民登記",
    "id": "az-0848",
    "legacyIds": [
      "situacao-o-recenseamento-eleitoral"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "a prova de vida",
    "en": "proof of life (for pensions)",
    "zhHans": "生存证明（领养老金用）",
    "zhHant": "生存證明（領養老金用）",
    "id": "az-0849",
    "legacyIds": [
      "situacao-a-prova-de-vida"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "o atestado de agregado familiar",
    "en": "household certificate",
    "zhHans": "家庭成员证明",
    "zhHant": "家庭成員證明",
    "note": "Often needed for family reunification",
    "id": "az-0850",
    "legacyIds": [
      "situacao-o-atestado-de-agregado-familiar"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "a fotocópia autenticada",
    "en": "certified photocopy",
    "zhHans": "认证副本",
    "zhHant": "認證副本",
    "id": "az-0851",
    "legacyIds": [
      "situacao-a-fotocopia-autenticada"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "o reconhecimento de assinatura",
    "en": "signature certification",
    "zhHans": "签名认证",
    "zhHant": "簽名認證",
    "id": "az-0852",
    "legacyIds": [
      "situacao-o-reconhecimento-de-assinatura"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "a taxa de emissão",
    "en": "issuance fee",
    "zhHans": "办理费用",
    "zhHant": "辦理費用",
    "id": "az-0853",
    "legacyIds": [
      "situacao-a-taxa-de-emissao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "o horário de atendimento",
    "en": "office hours",
    "zhHans": "办公时间",
    "zhHant": "辦公時間",
    "id": "az-0854",
    "legacyIds": [
      "situacao-o-horario-de-atendimento"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "a senha de atendimento",
    "en": "queue ticket",
    "zhHans": "排队取号",
    "zhHant": "排隊取號",
    "id": "az-0855",
    "legacyIds": [
      "situacao-a-senha-de-atendimento"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "válido por três meses",
    "en": "valid for three months",
    "zhHans": "三个月有效",
    "zhHant": "三個月有效",
    "note": "Most junta certificates expire quickly",
    "id": "az-0856",
    "legacyIds": [
      "situacao-valido-por-tres-meses"
    ]
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "a declaração",
    "en": "declaration / statement",
    "zhHans": "声明书",
    "zhHant": "聲明書",
    "id": "az-0857",
    "legacyIds": [
      "situacao-a-declaracao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "morar / residir",
    "en": "to live / to reside",
    "zhHans": "居住",
    "zhHant": "居住",
    "id": "az-0858",
    "legacyIds": [
      "situacao-morar-residir"
    ]
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "a freguesia",
    "en": "parish (administrative area)",
    "zhHans": "堂区（行政区）",
    "zhHant": "堂區（行政區）",
    "id": "az-0859",
    "legacyIds": [
      "situacao-a-freguesia"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "o munícipe / o morador",
    "en": "resident",
    "zhHans": "居民",
    "zhHant": "居民",
    "id": "az-0860",
    "legacyIds": [
      "situacao-o-municipe-o-morador"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "a câmara municipal",
    "en": "city hall",
    "zhHans": "市政厅",
    "zhHant": "市政廳",
    "id": "az-0594",
    "legacyIds": [
      "situacao-a-camara-municipal"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "o formulário",
    "en": "form",
    "zhHans": "表格",
    "zhHant": "表格",
    "id": "az-0862",
    "legacyIds": [
      "situacao-o-formulario"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "preencher",
    "en": "to fill in",
    "zhHans": "填写",
    "zhHant": "填寫",
    "id": "az-0579"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "assinar",
    "en": "to sign",
    "zhHans": "签名",
    "zhHant": "簽名",
    "id": "az-0863",
    "legacyIds": [
      "situacao-assinar"
    ]
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "o comprovativo de pagamento",
    "en": "proof of payment",
    "zhHans": "缴费憑证",
    "zhHant": "繳費憑證",
    "id": "az-0864",
    "legacyIds": [
      "situacao-o-comprovativo-de-pagamento"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "junta_de_freguesia",
    "pt": "levantar o documento",
    "en": "to collect the document",
    "zhHans": "领取文件",
    "zhHant": "領取文件",
    "id": "az-0865",
    "legacyIds": [
      "situacao-levantar-o-documento"
    ]
  },
  {
    "situacao": "saude",
    "pt": "a consulta aberta / do dia",
    "en": "same-day walk-in appointment",
    "zhHans": "当日门诊",
    "zhHant": "當日門診",
    "id": "az-0866",
    "legacyIds": [
      "situacao-a-consulta-aberta-do-dia"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "saude",
    "pt": "a dor de cabeça / de garganta / de dentes",
    "en": "headache / sore throat / toothache",
    "zhHans": "头痛／喉咙痛／牙痛",
    "zhHant": "頭痛／喉嚨痛／牙痛",
    "id": "az-0867",
    "legacyIds": [
      "situacao-a-dor-de-cabeca-de-garganta-de-dentes"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "saude",
    "pt": "a gripe / a constipação",
    "en": "flu / cold",
    "zhHans": "流感／感冒",
    "zhHant": "流感／感冒",
    "id": "az-0868",
    "legacyIds": [
      "situacao-a-gripe-a-constipacao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "saude",
    "pt": "a tensão alta",
    "en": "high blood pressure",
    "zhHans": "高血压",
    "zhHant": "高血壓",
    "id": "az-0869",
    "legacyIds": [
      "situacao-a-tensao-alta"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "saude",
    "pt": "a diabetes",
    "en": "diabetes",
    "zhHans": "糖尿病",
    "zhHant": "糖尿病",
    "id": "az-0870",
    "legacyIds": [
      "situacao-a-diabetes"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "saude",
    "pt": "estar grávida",
    "en": "to be pregnant",
    "zhHans": "懷孕",
    "zhHant": "懷孕",
    "id": "az-0871",
    "legacyIds": [
      "situacao-estar-gravida"
    ]
  },
  {
    "situacao": "saude",
    "pt": "a vacina",
    "en": "vaccine",
    "zhHans": "疫苗",
    "zhHant": "疫苗",
    "id": "az-0872",
    "legacyIds": [
      "situacao-a-vacina"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "saude",
    "pt": "o raio-X",
    "en": "X-ray",
    "zhHans": "X光",
    "zhHant": "X光",
    "id": "az-0873",
    "legacyIds": [
      "situacao-o-raio-x"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "saude",
    "pt": "a análise ao sangue",
    "en": "blood test",
    "zhHans": "验血",
    "zhHant": "驗血",
    "id": "az-0874",
    "legacyIds": [
      "situacao-a-analise-ao-sangue"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "saude",
    "pt": "em jejum",
    "en": "fasting (before a test)",
    "zhHans": "空腹",
    "zhHant": "空腹",
    "note": "Blood tests usually require it",
    "id": "az-0875",
    "legacyIds": [
      "situacao-em-jejum"
    ]
  },
  {
    "situacao": "saude",
    "pt": "o resultado",
    "en": "result",
    "zhHans": "结果",
    "zhHant": "結果",
    "id": "az-0876",
    "legacyIds": [
      "situacao-o-resultado"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "saude",
    "pt": "o médico especialista",
    "en": "specialist doctor",
    "zhHans": "专科医生",
    "zhHant": "專科醫生",
    "id": "az-0877",
    "legacyIds": [
      "situacao-o-medico-especialista"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "saude",
    "pt": "o encaminhamento / a referenciação",
    "en": "referral",
    "zhHans": "转诊",
    "zhHant": "轉診",
    "note": "GP referral needed for SNS specialists",
    "id": "az-0878",
    "legacyIds": [
      "situacao-o-encaminhamento-a-referenciacao"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "saude",
    "pt": "o seguro de saúde",
    "en": "health insurance",
    "zhHans": "医疗保险",
    "zhHant": "醫療保險",
    "id": "az-0879",
    "legacyIds": [
      "situacao-o-seguro-de-saude"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "saude",
    "pt": "tomar o medicamento",
    "en": "to take the medicine",
    "zhHans": "服药",
    "zhHant": "服藥",
    "id": "az-0880",
    "legacyIds": [
      "situacao-tomar-o-medicamento"
    ]
  },
  {
    "situacao": "saude",
    "pt": "de 8 em 8 horas",
    "en": "every 8 hours",
    "zhHans": "每8小时一次",
    "zhHant": "每8小時一次",
    "id": "az-0881",
    "legacyIds": [
      "situacao-de-8-em-8-horas"
    ]
  },
  {
    "situacao": "saude",
    "pt": "a dose",
    "en": "dose",
    "zhHans": "剂量",
    "zhHant": "劑量",
    "id": "az-0882",
    "legacyIds": [
      "situacao-a-dose"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "saude",
    "pt": "o medicamento genérico",
    "en": "generic medicine",
    "zhHans": "仿制药（平价替代药）",
    "zhHant": "仿製藥（平價替代藥）",
    "note": "Cheaper; ask 'há genérico?' at the pharmacy",
    "id": "az-0883",
    "legacyIds": [
      "situacao-o-medicamento-generico"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "saude",
    "pt": "o atestado médico",
    "en": "medical certificate",
    "zhHans": "医生证明",
    "zhHant": "醫生證明",
    "id": "az-0884",
    "legacyIds": [
      "situacao-o-atestado-medico"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "saude",
    "pt": "a urgência pediátrica",
    "en": "paediatric A&E",
    "zhHans": "儿科急诊",
    "zhHant": "兒科急診",
    "id": "az-0885",
    "legacyIds": [
      "situacao-a-urgencia-pediatrica"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "aima",
    "pt": "o pedido de nacionalidade",
    "en": "citizenship application",
    "zhHans": "入籍申请",
    "zhHant": "入籍申請",
    "id": "az-0886",
    "legacyIds": [
      "situacao-o-pedido-de-nacionalidade"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "aima",
    "pt": "a apostila (de Haia)",
    "en": "(Hague) apostille",
    "zhHans": "海牙认证",
    "zhHant": "海牙認證",
    "note": "Foreign documents must be apostilled",
    "id": "az-0887",
    "legacyIds": [
      "situacao-a-apostila-de-haia"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "aima",
    "pt": "a tradução certificada",
    "en": "certified translation",
    "zhHans": "认证翻译",
    "zhHant": "認證翻譯",
    "id": "az-0888",
    "legacyIds": [
      "situacao-a-traducao-certificada"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "aima",
    "pt": "a certidão de nascimento",
    "en": "birth certificate",
    "zhHans": "出生证明",
    "zhHant": "出生證明",
    "id": "az-0889",
    "legacyIds": [
      "situacao-a-certidao-de-nascimento"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "aima",
    "pt": "o registo criminal do país de origem",
    "en": "criminal record from home country",
    "zhHans": "原籍國无犯罪记录",
    "zhHant": "原籍國無犯罪記錄",
    "id": "az-0890",
    "legacyIds": [
      "situacao-o-registo-criminal-do-pais-de-origem"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "aima",
    "pt": "o visto de trabalho / de estudo",
    "en": "work / study visa",
    "zhHans": "工作签证／学生签证",
    "zhHant": "工作簽證／學生簽證",
    "id": "az-0891",
    "legacyIds": [
      "situacao-o-visto-de-trabalho-de-estudo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "aima",
    "pt": "a prorrogação de permanência",
    "en": "extension of stay",
    "zhHans": "延期居留",
    "zhHant": "延期居留",
    "id": "az-0892",
    "legacyIds": [
      "situacao-a-prorrogacao-de-permanencia"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "aima",
    "pt": "o comprovativo de agendamento",
    "en": "proof of appointment",
    "zhHans": "预约憑证",
    "zhHant": "預約憑證",
    "id": "az-0893",
    "legacyIds": [
      "situacao-o-comprovativo-de-agendamento"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "aima",
    "pt": "o número de processo",
    "en": "case number",
    "zhHans": "案件編号",
    "zhHant": "案件編號",
    "id": "az-0894",
    "legacyIds": [
      "situacao-o-numero-de-processo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "aima",
    "pt": "o estado do processo",
    "en": "case status",
    "zhHans": "案件状态",
    "zhHant": "案件狀態",
    "id": "az-0895",
    "legacyIds": [
      "situacao-o-estado-do-processo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "aima",
    "pt": "a notificação",
    "en": "official notification",
    "zhHans": "官方通知",
    "zhHant": "官方通知",
    "id": "az-0896",
    "legacyIds": [
      "situacao-a-notificacao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "aima",
    "pt": "o prazo",
    "en": "deadline",
    "zhHans": "期限",
    "zhHant": "期限",
    "id": "az-0529",
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "aima",
    "pt": "em análise",
    "en": "under review",
    "zhHans": "审核中",
    "zhHant": "審核中",
    "id": "az-0897",
    "legacyIds": [
      "situacao-em-analise"
    ]
  },
  {
    "situacao": "aima",
    "pt": "deferido / indeferido",
    "en": "approved / rejected",
    "zhHans": "获批／被拒",
    "zhHant": "獲批／被拒",
    "id": "az-0898",
    "legacyIds": [
      "situacao-deferido-indeferido"
    ]
  },
  {
    "situacao": "aima",
    "pt": "o vínculo laboral",
    "en": "employment relationship",
    "zhHans": "劳动关係（在职证明）",
    "zhHant": "勞動關係（在職證明）",
    "id": "az-0899",
    "legacyIds": [
      "situacao-o-vinculo-laboral"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "aima",
    "pt": "o seguro de viagem / de saúde",
    "en": "travel / health insurance",
    "zhHans": "旅行保险／医疗保险",
    "zhHant": "旅行保險／醫療保險",
    "id": "az-0900",
    "legacyIds": [
      "situacao-o-seguro-de-viagem-de-saude"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "aima",
    "pt": "a declaração da entidade patronal",
    "en": "employer's declaration",
    "zhHans": "雇主声明",
    "zhHant": "僱主聲明",
    "id": "az-0901",
    "legacyIds": [
      "situacao-a-declaracao-da-entidade-patronal"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "aima",
    "pt": "o agregado familiar",
    "en": "household / family unit",
    "zhHans": "家庭成员",
    "zhHant": "家庭成員",
    "id": "az-0902",
    "legacyIds": [
      "situacao-o-agregado-familiar"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "aima",
    "pt": "a residência legal",
    "en": "legal residence",
    "zhHans": "合法居留",
    "zhHant": "合法居留",
    "id": "az-0903",
    "legacyIds": [
      "situacao-a-residencia-legal"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "aima",
    "pt": "o atendimento presencial",
    "en": "in-person service",
    "zhHans": "现场办理",
    "zhHant": "現場辦理",
    "id": "az-0904",
    "legacyIds": [
      "situacao-o-atendimento-presencial"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "escola",
    "pt": "a creche",
    "en": "nursery (0-3)",
    "zhHans": "託儿所",
    "zhHant": "託兒所",
    "id": "az-0905",
    "legacyIds": [
      "situacao-a-creche"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "escola",
    "pt": "o jardim de infância / o pré-escolar",
    "en": "kindergarten / preschool",
    "zhHans": "幼儿园",
    "zhHant": "幼兒園",
    "id": "az-0906",
    "legacyIds": [
      "situacao-o-jardim-de-infancia-o-pre-escolar"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "escola",
    "pt": "o 1.º / 2.º / 3.º ciclo",
    "en": "primary / middle school cycles",
    "zhHans": "小学低／中／高年级段",
    "zhHant": "小學低／中／高年級段",
    "id": "az-0907",
    "legacyIds": [
      "situacao-o-1-2-3-ciclo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "escola",
    "pt": "o ensino secundário",
    "en": "secondary school",
    "zhHans": "高中",
    "zhHant": "高中",
    "id": "az-0908",
    "legacyIds": [
      "situacao-o-ensino-secundario"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "escola",
    "pt": "a turma",
    "en": "class (group)",
    "zhHans": "班级",
    "zhHant": "班級",
    "id": "az-0909",
    "legacyIds": [
      "situacao-a-turma"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "escola",
    "pt": "o diretor de turma",
    "en": "form tutor / homeroom teacher",
    "zhHans": "班主任",
    "zhHant": "班主任",
    "note": "Your main contact at the school",
    "id": "az-0910",
    "legacyIds": [
      "situacao-o-diretor-de-turma"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "escola",
    "pt": "a caderneta do aluno",
    "en": "student's home-school book",
    "zhHans": "学生联络手册",
    "zhHant": "學生聯絡手冊",
    "note": "Where school-home messages are written",
    "id": "az-0911",
    "legacyIds": [
      "situacao-a-caderneta-do-aluno"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "escola",
    "pt": "o intervalo / o recreio",
    "en": "break / playground",
    "zhHans": "课间休息／操场",
    "zhHant": "課間休息／操場",
    "id": "az-0912",
    "legacyIds": [
      "situacao-o-intervalo-o-recreio"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "escola",
    "pt": "a visita de estudo",
    "en": "school trip",
    "zhHans": "校外教学",
    "zhHant": "校外教學",
    "id": "az-0913",
    "legacyIds": [
      "situacao-a-visita-de-estudo"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "escola",
    "pt": "a autorização",
    "en": "permission slip",
    "zhHans": "家长同意书",
    "zhHant": "家長同意書",
    "id": "az-0914",
    "legacyIds": [
      "situacao-a-autorizacao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "escola",
    "pt": "a falta",
    "en": "absence",
    "zhHans": "缺勤",
    "zhHant": "缺勤",
    "id": "az-0915",
    "legacyIds": [
      "situacao-a-falta"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "escola",
    "pt": "justificar a falta",
    "en": "to justify an absence",
    "zhHans": "为缺勤提交说明",
    "zhHant": "為缺勤提交說明",
    "note": "Must be done within days, via caderneta or portal",
    "id": "az-0916",
    "legacyIds": [
      "situacao-justificar-a-falta"
    ]
  },
  {
    "situacao": "escola",
    "pt": "o teste / a avaliação",
    "en": "test / assessment",
    "zhHans": "测验／评估",
    "zhHant": "測驗／評估",
    "id": "az-0917",
    "legacyIds": [
      "situacao-o-teste-a-avaliacao"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "escola",
    "pt": "as notas",
    "en": "grades",
    "zhHans": "成绩",
    "zhHant": "成績",
    "id": "az-0918",
    "legacyIds": [
      "situacao-as-notas"
    ],
    "pos": "noun",
    "gender": "f-pl"
  },
  {
    "situacao": "escola",
    "pt": "o apoio ao estudo",
    "en": "study support",
    "zhHans": "课后輔导",
    "zhHant": "課後輔導",
    "id": "az-0919",
    "legacyIds": [
      "situacao-o-apoio-ao-estudo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "escola",
    "pt": "o PLNM (Português Língua Não Materna)",
    "en": "Portuguese as a non-native language",
    "zhHans": "葡语非母语课程（PLNM）",
    "zhHant": "葡語非母語課程（PLNM）",
    "note": "Extra Portuguese support — ask for it",
    "id": "az-0920",
    "legacyIds": [
      "situacao-o-plnm-portugues-lingua-nao-materna"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "escola",
    "pt": "a equivalência de estudos",
    "en": "recognition of foreign studies",
    "zhHans": "学历同等认证",
    "zhHant": "學歷同等認證",
    "note": "For children schooled abroad",
    "id": "az-0921",
    "legacyIds": [
      "situacao-a-equivalencia-de-estudos"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "escola",
    "pt": "o cartão do aluno",
    "en": "student card",
    "zhHans": "学生卡",
    "zhHant": "學生卡",
    "id": "az-0922",
    "legacyIds": [
      "situacao-o-cartao-do-aluno"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "escola",
    "pt": "carregar o cartão",
    "en": "to top up the card (canteen)",
    "zhHans": "给学生卡充值",
    "zhHant": "給學生卡充值",
    "id": "az-0923",
    "legacyIds": [
      "situacao-carregar-o-cartao"
    ]
  },
  {
    "situacao": "escola",
    "pt": "o transporte escolar",
    "en": "school transport",
    "zhHans": "校车",
    "zhHant": "校車",
    "id": "az-0924",
    "legacyIds": [
      "situacao-o-transporte-escolar"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "iefp",
    "pt": "o salário mínimo",
    "en": "minimum wage",
    "zhHans": "最低工资",
    "zhHant": "最低工資",
    "id": "az-0925",
    "legacyIds": [
      "situacao-o-salario-minimo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "iefp",
    "pt": "o recibo de vencimento",
    "en": "payslip",
    "zhHans": "工资单",
    "zhHant": "工資單",
    "id": "az-0926",
    "legacyIds": [
      "situacao-o-recibo-de-vencimento"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "iefp",
    "pt": "o contrato a termo / sem termo",
    "en": "fixed-term / permanent contract",
    "zhHans": "固定期限合同／无固定期限合同",
    "zhHant": "固定期限合同／無固定期限合同",
    "id": "az-0927",
    "legacyIds": [
      "situacao-o-contrato-a-termo-sem-termo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "iefp",
    "pt": "o período experimental",
    "en": "probation period",
    "zhHans": "试用期",
    "zhHant": "試用期",
    "id": "az-0928",
    "legacyIds": [
      "situacao-o-periodo-experimental"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "iefp",
    "pt": "as férias pagas",
    "en": "paid holidays",
    "zhHans": "带薪年假",
    "zhHant": "帶薪年假",
    "id": "az-0929",
    "legacyIds": [
      "situacao-as-ferias-pagas"
    ],
    "pos": "noun",
    "gender": "f-pl"
  },
  {
    "situacao": "iefp",
    "pt": "o subsídio de férias / de Natal",
    "en": "holiday / Christmas bonus (13th/14th month)",
    "zhHans": "假期津贴／圣诞津贴（双粮）",
    "zhHant": "假期津貼／聖誕津貼（雙糧）",
    "note": "Legally owed — 14 payments per year is standard",
    "id": "az-0930",
    "legacyIds": [
      "situacao-o-subsidio-de-ferias-de-natal"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "iefp",
    "pt": "as horas extraordinárias",
    "en": "overtime",
    "zhHans": "加班",
    "zhHant": "加班",
    "id": "az-0392",
    "pos": "noun",
    "gender": "f-pl"
  },
  {
    "situacao": "iefp",
    "pt": "o despedimento",
    "en": "dismissal",
    "zhHans": "解雇",
    "zhHant": "解僱",
    "id": "az-0931",
    "legacyIds": [
      "situacao-o-despedimento"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "iefp",
    "pt": "a rescisão do contrato",
    "en": "contract termination",
    "zhHans": "解除合同",
    "zhHant": "解除合同",
    "id": "az-0932",
    "legacyIds": [
      "situacao-a-rescisao-do-contrato"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "iefp",
    "pt": "o pré-aviso",
    "en": "notice period",
    "zhHans": "预先通知期",
    "zhHant": "預先通知期",
    "id": "az-0933",
    "legacyIds": [
      "situacao-o-pre-aviso"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "iefp",
    "pt": "a indemnização / a compensação",
    "en": "severance / compensation",
    "zhHans": "赔偿金／补偿金",
    "zhHant": "賠償金／補償金",
    "id": "az-0934",
    "legacyIds": [
      "situacao-a-indemnizacao-a-compensacao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "iefp",
    "pt": "a ACT (Autoridade para as Condições do Trabalho)",
    "en": "Labour Conditions Authority",
    "zhHans": "劳动监察局（ACT）",
    "zhHant": "勞動監察局（ACT）",
    "note": "Where to report unpaid wages or abuse",
    "id": "az-0935",
    "legacyIds": [
      "situacao-a-act-autoridade-para-as-condicoes-do-trabalho"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "iefp",
    "pt": "apresentar queixa",
    "en": "to file a complaint",
    "zhHans": "投诉／申诉",
    "zhHant": "投訴／申訴",
    "id": "az-0936",
    "legacyIds": [
      "situacao-apresentar-queixa"
    ]
  },
  {
    "situacao": "iefp",
    "pt": "o sindicato",
    "en": "trade union",
    "zhHans": "工会",
    "zhHant": "工會",
    "id": "az-0937",
    "legacyIds": [
      "situacao-o-sindicato"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "iefp",
    "pt": "a agência de trabalho temporário",
    "en": "temp agency",
    "zhHans": "劳务派遣公司",
    "zhHant": "勞務派遣公司",
    "id": "az-0938",
    "legacyIds": [
      "situacao-a-agencia-de-trabalho-temporario"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "iefp",
    "pt": "a candidatura espontânea",
    "en": "unsolicited application",
    "zhHans": "主动求职申请",
    "zhHant": "主動求職申請",
    "id": "az-0939",
    "legacyIds": [
      "situacao-a-candidatura-espontanea"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "iefp",
    "pt": "a entrevista de emprego",
    "en": "job interview",
    "zhHans": "求职面试",
    "zhHant": "求職面試",
    "id": "az-0940",
    "legacyIds": [
      "situacao-a-entrevista-de-emprego"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "iefp",
    "pt": "o estágio profissional",
    "en": "professional internship (IEFP measure)",
    "zhHans": "职业实习（IEFP项目）",
    "zhHant": "職業實習（IEFP項目）",
    "id": "az-0941",
    "legacyIds": [
      "situacao-o-estagio-profissional"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "iefp",
    "pt": "o curso de português para estrangeiros",
    "en": "Portuguese course for foreigners",
    "zhHans": "对外葡语课程",
    "zhHant": "對外葡語課程",
    "note": "Free via IEFP/schools — ask to enrol",
    "id": "az-0942",
    "legacyIds": [
      "situacao-o-curso-de-portugues-para-estrangeiros"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "iefp",
    "pt": "o certificado de formação",
    "en": "training certificate",
    "zhHans": "培训证书",
    "zhHant": "培訓證書",
    "id": "az-0943",
    "legacyIds": [
      "situacao-o-certificado-de-formacao"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "seguranca_social",
    "pt": "a pensão / a reforma",
    "en": "pension / retirement",
    "zhHans": "养老金／退休",
    "zhHant": "養老金／退休",
    "id": "az-0944",
    "legacyIds": [
      "situacao-a-pensao-a-reforma"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "seguranca_social",
    "pt": "o subsídio de doença",
    "en": "sickness benefit",
    "zhHans": "疾病津贴",
    "zhHant": "疾病津貼",
    "id": "az-0945",
    "legacyIds": [
      "situacao-o-subsidio-de-doenca"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "seguranca_social",
    "pt": "a licença de maternidade / paternidade",
    "en": "maternity / paternity leave",
    "zhHans": "产假／陪产假",
    "zhHant": "產假／陪產假",
    "id": "az-0946",
    "legacyIds": [
      "situacao-a-licenca-de-maternidade-paternidade"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "seguranca_social",
    "pt": "o subsídio parental",
    "en": "parental benefit",
    "zhHans": "育儿津贴",
    "zhHant": "育兒津貼",
    "id": "az-0947",
    "legacyIds": [
      "situacao-o-subsidio-parental"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "seguranca_social",
    "pt": "o abono pré-natal",
    "en": "prenatal allowance",
    "zhHans": "产前津贴",
    "zhHant": "產前津貼",
    "id": "az-0948",
    "legacyIds": [
      "situacao-o-abono-pre-natal"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "seguranca_social",
    "pt": "a prestação social",
    "en": "social benefit / welfare payment",
    "zhHans": "社会福利金",
    "zhHant": "社會福利金",
    "id": "az-0949",
    "legacyIds": [
      "situacao-a-prestacao-social"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "seguranca_social",
    "pt": "o escalão de rendimentos",
    "en": "income bracket",
    "zhHans": "收入级距",
    "zhHant": "收入級距",
    "id": "az-0950",
    "legacyIds": [
      "situacao-o-escalao-de-rendimentos"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "seguranca_social",
    "pt": "a declaração trimestral",
    "en": "quarterly declaration (self-employed)",
    "zhHans": "季度申報（自雇）",
    "zhHant": "季度申報（自僱）",
    "note": "Due in Jan, Apr, Jul, Oct",
    "id": "az-0951",
    "legacyIds": [
      "situacao-a-declaracao-trimestral"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "seguranca_social",
    "pt": "a taxa contributiva",
    "en": "contribution rate",
    "zhHans": "供款费率",
    "zhHant": "供款費率",
    "id": "az-0952",
    "legacyIds": [
      "situacao-a-taxa-contributiva"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "seguranca_social",
    "pt": "a isenção de contribuições",
    "en": "contributions exemption",
    "zhHans": "供款豁免",
    "zhHant": "供款豁免",
    "note": "First 12 months for new freelancers",
    "id": "az-0953",
    "legacyIds": [
      "situacao-a-isencao-de-contribuicoes"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "seguranca_social",
    "pt": "o primeiro ano de atividade",
    "en": "first year of activity",
    "zhHans": "开业第一年",
    "zhHant": "開業第一年",
    "id": "az-0954",
    "legacyIds": [
      "situacao-o-primeiro-ano-de-atividade"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "seguranca_social",
    "pt": "a dívida à Segurança Social",
    "en": "social security debt",
    "zhHans": "社保欠款",
    "zhHant": "社保欠款",
    "id": "az-0955",
    "legacyIds": [
      "situacao-a-divida-a-seguranca-social"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "seguranca_social",
    "pt": "o plano prestacional",
    "en": "instalment plan",
    "zhHans": "分期还款计划",
    "zhHant": "分期還款計劃",
    "id": "az-0956",
    "legacyIds": [
      "situacao-o-plano-prestacional"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "seguranca_social",
    "pt": "atualizar o IBAN",
    "en": "to update the IBAN (for payments)",
    "zhHans": "更新收款账户（IBAN）",
    "zhHant": "更新收款帳戶（IBAN）",
    "id": "az-0957",
    "legacyIds": [
      "situacao-atualizar-o-iban"
    ]
  },
  {
    "situacao": "seguranca_social",
    "pt": "o requerimento",
    "en": "application form",
    "zhHans": "申请表",
    "zhHant": "申請表",
    "id": "az-0577",
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "seguranca_social",
    "pt": "submeter online",
    "en": "to submit online",
    "zhHans": "在线提交",
    "zhHant": "在線提交",
    "id": "az-0958",
    "legacyIds": [
      "situacao-submeter-online"
    ]
  },
  {
    "situacao": "seguranca_social",
    "pt": "a certidão de nascimento do bebé",
    "en": "baby's birth certificate",
    "zhHans": "婴儿出生证明",
    "zhHant": "嬰兒出生證明",
    "id": "az-0959",
    "legacyIds": [
      "situacao-a-certidao-de-nascimento-do-bebe"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "seguranca_social",
    "pt": "o registo do nascimento",
    "en": "birth registration",
    "zhHans": "出生登记",
    "zhHant": "出生登記",
    "id": "az-0960",
    "legacyIds": [
      "situacao-o-registo-do-nascimento"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "seguranca_social",
    "pt": "a morada registada",
    "en": "registered address",
    "zhHans": "登记地址",
    "zhHant": "登記地址",
    "id": "az-0961",
    "legacyIds": [
      "situacao-a-morada-registada"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "seguranca_social",
    "pt": "o balcão da Segurança Social",
    "en": "Social Security counter",
    "zhHans": "社保局柜台",
    "zhHant": "社保局櫃檯",
    "id": "az-0962",
    "legacyIds": [
      "situacao-o-balcao-da-seguranca-social"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "arrendamento",
    "pt": "o anúncio",
    "en": "listing / advert",
    "zhHans": "租房广告",
    "zhHant": "租房廣告",
    "id": "az-0963",
    "legacyIds": [
      "situacao-o-anuncio"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "arrendamento",
    "pt": "a imobiliária",
    "en": "real estate agency",
    "zhHans": "房产中介公司",
    "zhHant": "房產中介公司",
    "id": "az-0261",
    "legacyIds": [
      "situacao-a-imobiliaria"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "arrendamento",
    "pt": "o agente imobiliário",
    "en": "real estate agent",
    "zhHans": "房产中介",
    "zhHant": "房產中介",
    "id": "az-0965",
    "legacyIds": [
      "situacao-o-agente-imobiliario"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "arrendamento",
    "pt": "o quarto individual / duplo",
    "en": "single / double room",
    "zhHans": "单人房／双人房",
    "zhHant": "單人房／雙人房",
    "id": "az-0966",
    "legacyIds": [
      "situacao-o-quarto-individual-duplo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "arrendamento",
    "pt": "o aquecimento",
    "en": "heating",
    "zhHans": "暖气",
    "zhHant": "暖氣",
    "id": "az-0967",
    "legacyIds": [
      "situacao-o-aquecimento"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "arrendamento",
    "pt": "o esquentador",
    "en": "gas water heater",
    "zhHans": "燃气热水器",
    "zhHant": "燃氣熱水器",
    "note": "Very common in PT flats; learn this word",
    "id": "az-0968",
    "legacyIds": [
      "situacao-o-esquentador"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "arrendamento",
    "pt": "a caldeira",
    "en": "boiler",
    "zhHans": "锅炉",
    "zhHant": "鍋爐",
    "id": "az-0969",
    "legacyIds": [
      "situacao-a-caldeira"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "arrendamento",
    "pt": "o eletrodoméstico",
    "en": "household appliance",
    "zhHans": "家用电器",
    "zhHant": "家用電器",
    "id": "az-0970",
    "legacyIds": [
      "situacao-o-eletrodomestico"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "arrendamento",
    "pt": "a máquina de lavar roupa / loiça",
    "en": "washing machine / dishwasher",
    "zhHans": "洗衣机／洗碗机",
    "zhHant": "洗衣機／洗碗機",
    "id": "az-0971",
    "legacyIds": [
      "situacao-a-maquina-de-lavar-roupa-loica"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "arrendamento",
    "pt": "avariado/a",
    "en": "broken / out of order",
    "zhHans": "坏了／故障",
    "zhHant": "壞了／故障",
    "id": "az-0972",
    "legacyIds": [
      "situacao-avariado-a"
    ]
  },
  {
    "situacao": "arrendamento",
    "pt": "a reparação / o arranjo",
    "en": "repair",
    "zhHans": "维修",
    "zhHant": "維修",
    "id": "az-0973",
    "legacyIds": [
      "situacao-a-reparacao-o-arranjo"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "arrendamento",
    "pt": "a humidade",
    "en": "damp",
    "zhHans": "潮湿",
    "zhHant": "潮濕",
    "note": "Chronic issue in Portuguese housing",
    "id": "az-0974",
    "legacyIds": [
      "situacao-a-humidade"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "arrendamento",
    "pt": "o bolor / o mofo",
    "en": "mould",
    "zhHans": "霉菌",
    "zhHant": "霉菌",
    "id": "az-0975",
    "legacyIds": [
      "situacao-o-bolor-o-mofo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "arrendamento",
    "pt": "a renda em atraso",
    "en": "overdue rent",
    "zhHans": "拖欠租金",
    "zhHant": "拖欠租金",
    "id": "az-0976",
    "legacyIds": [
      "situacao-a-renda-em-atraso"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "arrendamento",
    "pt": "o aumento da renda",
    "en": "rent increase",
    "zhHans": "租金上涨",
    "zhHant": "租金上漲",
    "id": "az-0977",
    "legacyIds": [
      "situacao-o-aumento-da-renda"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "arrendamento",
    "pt": "a vistoria / o inventário",
    "en": "inspection / inventory",
    "zhHans": "验房／物品清单",
    "zhHant": "驗房／物品清單",
    "id": "az-0978",
    "legacyIds": [
      "situacao-a-vistoria-o-inventario"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "arrendamento",
    "pt": "entregar as chaves",
    "en": "to hand over the keys",
    "zhHans": "交还钥匙",
    "zhHant": "交還鑰匙",
    "id": "az-0979",
    "legacyIds": [
      "situacao-entregar-as-chaves"
    ]
  },
  {
    "situacao": "arrendamento",
    "pt": "a denúncia do contrato",
    "en": "termination notice (of tenancy)",
    "zhHans": "解约通知",
    "zhHant": "解約通知",
    "id": "az-0980",
    "legacyIds": [
      "situacao-a-denuncia-do-contrato"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "arrendamento",
    "pt": "a devolução da caução",
    "en": "return of the deposit",
    "zhHans": "退还押金",
    "zhHant": "退還押金",
    "id": "az-0981",
    "legacyIds": [
      "situacao-a-devolucao-da-caucao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "arrendamento",
    "pt": "o colega de casa",
    "en": "flatmate",
    "zhHans": "室友",
    "zhHant": "室友",
    "id": "az-0982",
    "legacyIds": [
      "situacao-o-colega-de-casa"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "transportes",
    "pt": "o passe mensal",
    "en": "monthly pass",
    "zhHans": "月票",
    "zhHant": "月票",
    "id": "az-0983",
    "legacyIds": [
      "situacao-o-passe-mensal"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "transportes",
    "pt": "o carregamento",
    "en": "top-up",
    "zhHans": "充值",
    "zhHant": "充值",
    "id": "az-0984",
    "legacyIds": [
      "situacao-o-carregamento"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "transportes",
    "pt": "o comboio urbano / regional / intercidades",
    "en": "suburban / regional / intercity train",
    "zhHans": "市郊火车／区域火车／城际火车",
    "zhHant": "市郊火車／區域火車／城際火車",
    "id": "az-0985",
    "legacyIds": [
      "situacao-o-comboio-urbano-regional-intercidades"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "transportes",
    "pt": "a plataforma / a linha",
    "en": "platform / track",
    "zhHans": "月台／站台",
    "zhHant": "月台／站台",
    "id": "az-0986",
    "legacyIds": [
      "situacao-a-plataforma-a-linha"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "transportes",
    "pt": "o sentido",
    "en": "direction",
    "zhHans": "方向",
    "zhHant": "方向",
    "id": "az-0987",
    "legacyIds": [
      "situacao-o-sentido"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "transportes",
    "pt": "o transbordo / a correspondência",
    "en": "transfer / connection",
    "zhHans": "换乘",
    "zhHant": "換乘",
    "id": "az-0988",
    "legacyIds": [
      "situacao-o-transbordo-a-correspondencia"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "transportes",
    "pt": "a hora de ponta",
    "en": "rush hour",
    "zhHans": "高峰时段",
    "zhHant": "高峰時段",
    "id": "az-0989",
    "legacyIds": [
      "situacao-a-hora-de-ponta"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "transportes",
    "pt": "o título de transporte",
    "en": "valid ticket / travel document",
    "zhHans": "有效车票",
    "zhHant": "有效車票",
    "id": "az-0990",
    "legacyIds": [
      "situacao-o-titulo-de-transporte"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "transportes",
    "pt": "viajar sem título",
    "en": "to travel without a valid ticket",
    "zhHans": "无票乘车",
    "zhHant": "無票乘車",
    "note": "Fines are many times the fare",
    "id": "az-0991",
    "legacyIds": [
      "situacao-viajar-sem-titulo"
    ]
  },
  {
    "situacao": "transportes",
    "pt": "a tarifa reduzida / o desconto",
    "en": "reduced fare / discount",
    "zhHans": "优惠票价／折扣",
    "zhHant": "優惠票價／折扣",
    "id": "az-0992",
    "legacyIds": [
      "situacao-a-tarifa-reduzida-o-desconto"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "transportes",
    "pt": "pedir paragem",
    "en": "to request the stop",
    "zhHans": "按鈴下车",
    "zhHant": "按鈴下車",
    "note": "Press the button or the bus won't stop",
    "id": "az-0993",
    "legacyIds": [
      "situacao-pedir-paragem"
    ]
  },
  {
    "situacao": "transportes",
    "pt": "o TVDE (Uber, Bolt…)",
    "en": "ride-hailing (Uber, Bolt…)",
    "zhHans": "网约车",
    "zhHant": "網約車",
    "id": "az-0994",
    "legacyIds": [
      "situacao-o-tvde-uber-bolt"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "transportes",
    "pt": "o táxi",
    "en": "taxi",
    "zhHans": "出租车",
    "zhHant": "出租車",
    "id": "az-0108",
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "transportes",
    "pt": "a estação de metro mais próxima",
    "en": "the nearest metro station",
    "zhHans": "最近的地铁站",
    "zhHant": "最近的地鐵站",
    "id": "az-0995",
    "legacyIds": [
      "situacao-a-estacao-de-metro-mais-proxima"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "transportes",
    "pt": "a última / a primeira circulação",
    "en": "last / first service of the day",
    "zhHans": "末班车／首班车",
    "zhHant": "末班車／首班車",
    "id": "az-0996",
    "legacyIds": [
      "situacao-a-ultima-a-primeira-circulacao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "transportes",
    "pt": "em atraso / suprimido",
    "en": "delayed / cancelled",
    "zhHans": "晚点／取消",
    "zhHant": "晚點／取消",
    "id": "az-0997",
    "legacyIds": [
      "situacao-em-atraso-suprimido"
    ]
  },
  {
    "situacao": "transportes",
    "pt": "a greve",
    "en": "strike",
    "zhHans": "罢工",
    "zhHant": "罷工",
    "note": "Check for transport strikes before travelling",
    "id": "az-0998",
    "legacyIds": [
      "situacao-a-greve"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "transportes",
    "pt": "o lugar reservado",
    "en": "reserved seat",
    "zhHans": "预留座位",
    "zhHant": "預留座位",
    "id": "az-0999",
    "legacyIds": [
      "situacao-o-lugar-reservado"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "transportes",
    "pt": "o bilhete de bordo",
    "en": "ticket bought on board",
    "zhHans": "车上购票",
    "zhHant": "車上購票",
    "id": "az-1000",
    "legacyIds": [
      "situacao-o-bilhete-de-bordo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "transportes",
    "pt": "a app do operador",
    "en": "the operator's app",
    "zhHans": "运營商应用程式",
    "zhHant": "運營商應用程式",
    "id": "az-1001",
    "legacyIds": [
      "situacao-a-app-do-operador"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "a empregada de andares",
    "en": "room attendant / housekeeper",
    "zhHans": "客房服务员",
    "zhHant": "客房服務員",
    "note": "The PT job title (not 'camareira', which is Brazilian)",
    "id": "az-1002",
    "legacyIds": [
      "situacao-a-empregada-de-andares"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o rececionista",
    "en": "receptionist",
    "zhHans": "前台接待员",
    "zhHant": "前台接待員",
    "id": "az-1003",
    "legacyIds": [
      "situacao-o-rececionista"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "a reserva",
    "en": "reservation",
    "zhHans": "预订",
    "zhHant": "預訂",
    "id": "az-1004",
    "legacyIds": [
      "situacao-a-reserva"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o quarto duplo / individual / twin",
    "en": "double / single / twin room",
    "zhHans": "大床房／单人房／双床房",
    "zhHant": "大床房／單人房／雙床房",
    "id": "az-1005",
    "legacyIds": [
      "situacao-o-quarto-duplo-individual-twin"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "a cama extra / o berço",
    "en": "extra bed / cot",
    "zhHans": "加床／婴儿床",
    "zhHant": "加床／嬰兒床",
    "id": "az-1006",
    "legacyIds": [
      "situacao-a-cama-extra-o-berco"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o serviço de quartos",
    "en": "room service",
    "zhHans": "客房送餐服务",
    "zhHant": "客房送餐服務",
    "id": "az-1007",
    "legacyIds": [
      "situacao-o-servico-de-quartos"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o cofre",
    "en": "safe",
    "zhHans": "保险箱",
    "zhHant": "保險箱",
    "id": "az-1008",
    "legacyIds": [
      "situacao-o-cofre"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o ar condicionado",
    "en": "air conditioning",
    "zhHans": "空调",
    "zhHant": "空調",
    "id": "az-1009",
    "legacyIds": [
      "situacao-o-ar-condicionado"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "a reclamação",
    "en": "complaint",
    "zhHans": "投诉",
    "zhHant": "投訴",
    "id": "az-1010",
    "legacyIds": [
      "situacao-a-reclamacao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "reportar uma avaria",
    "en": "to report a fault",
    "zhHans": "報修",
    "zhHant": "報修",
    "id": "az-1011",
    "legacyIds": [
      "situacao-reportar-uma-avaria"
    ]
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "a manutenção",
    "en": "maintenance",
    "zhHans": "维修部",
    "zhHant": "維修部",
    "id": "az-1012",
    "legacyIds": [
      "situacao-a-manutencao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o minibar / repor o minibar",
    "en": "minibar / to restock the minibar",
    "zhHans": "迷你吧／补迷你吧",
    "zhHant": "迷你吧／補迷你吧",
    "id": "az-1013",
    "legacyIds": [
      "situacao-o-minibar-repor-o-minibar"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "os amenities / os produtos de higiene",
    "en": "toiletries",
    "zhHans": "客用洗漱用品",
    "zhHant": "客用洗漱用品",
    "id": "az-1014",
    "legacyIds": [
      "situacao-os-amenities-os-produtos-de-higiene"
    ],
    "pos": "noun",
    "gender": "m-pl"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o letreiro «não incomodar»",
    "en": "'do not disturb' sign",
    "zhHans": "「请勿打擾」牌",
    "zhHant": "「請勿打擾」牌",
    "id": "az-1015",
    "legacyIds": [
      "situacao-o-letreiro-nao-incomodar"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o late check-out",
    "en": "late check-out",
    "zhHans": "延迟退房",
    "zhHant": "延遲退房",
    "id": "az-1016",
    "legacyIds": [
      "situacao-o-late-check-out"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "guardar a bagagem",
    "en": "to store luggage",
    "zhHans": "寄存行李",
    "zhHant": "寄存行李",
    "id": "az-1017",
    "legacyIds": [
      "situacao-guardar-a-bagagem"
    ]
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o elevador de serviço",
    "en": "service lift",
    "zhHans": "员工电梯",
    "zhHant": "員工電梯",
    "id": "az-1018",
    "legacyIds": [
      "situacao-o-elevador-de-servico"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "a rouparia",
    "en": "linen room",
    "zhHans": "布草房",
    "zhHant": "布草房",
    "id": "az-1019",
    "legacyIds": [
      "situacao-a-rouparia"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "o piso / o andar",
    "en": "floor",
    "zhHans": "楼层",
    "zhHant": "樓層",
    "id": "az-1020",
    "legacyIds": [
      "situacao-o-piso-o-andar"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_hotelaria",
    "pt": "a folha de tarefas",
    "en": "task sheet",
    "zhHans": "工作任务单",
    "zhHant": "工作任務單",
    "id": "az-1021",
    "legacyIds": [
      "situacao-a-folha-de-tarefas"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "a reserva",
    "en": "reservation",
    "zhHans": "订位",
    "zhHant": "訂位",
    "id": "az-1004",
    "legacyIds": [
      "situacao-a-reserva"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "o couvert",
    "en": "couvert (bread/olives, charged)",
    "zhHans": "餐前小食（收费）",
    "zhHant": "餐前小食（收費）",
    "note": "Charged if touched — a PT peculiarity to explain to tourists",
    "id": "az-1022",
    "legacyIds": [
      "situacao-o-couvert"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "a entrada",
    "en": "starter",
    "zhHans": "前菜",
    "zhHant": "前菜",
    "id": "az-1023",
    "legacyIds": [
      "situacao-a-entrada"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "o prato principal",
    "en": "main course",
    "zhHans": "主菜",
    "zhHant": "主菜",
    "id": "az-1024",
    "legacyIds": [
      "situacao-o-prato-principal"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "a sobremesa",
    "en": "dessert",
    "zhHans": "甜品",
    "zhHant": "甜品",
    "id": "az-1025",
    "legacyIds": [
      "situacao-a-sobremesa"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "a dose / a meia dose",
    "en": "full / half portion",
    "zhHans": "整份／半份",
    "zhHant": "整份／半份",
    "note": "PT portion system — meia dose feeds one",
    "id": "az-1026",
    "legacyIds": [
      "situacao-a-dose-a-meia-dose"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "para partilhar",
    "en": "to share",
    "zhHans": "分享（合吃）",
    "zhHant": "分享（合吃）",
    "id": "az-1027",
    "legacyIds": [
      "situacao-para-partilhar"
    ]
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "a imperial / o fino",
    "en": "draught beer (Lisbon / Porto term)",
    "zhHans": "生啤（里斯本叫imperial，波爾图叫fino）",
    "zhHant": "生啤（里斯本叫imperial，波爾圖叫fino）",
    "id": "az-1028",
    "legacyIds": [
      "situacao-a-imperial-o-fino"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "mal passado / no ponto / bem passado",
    "en": "rare / medium / well done",
    "zhHans": "三分熟／五分熟／全熟",
    "zhHant": "三分熟／五分熟／全熟",
    "id": "az-1029",
    "legacyIds": [
      "situacao-mal-passado-no-ponto-bem-passado"
    ]
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "vegetariano / sem glúten",
    "en": "vegetarian / gluten-free",
    "zhHans": "素食／无麩质",
    "zhHant": "素食／無麩質",
    "id": "az-1030",
    "legacyIds": [
      "situacao-vegetariano-sem-gluten"
    ]
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "a alergia alimentar",
    "en": "food allergy",
    "zhHans": "食物过敏",
    "zhHant": "食物過敏",
    "id": "az-1031",
    "legacyIds": [
      "situacao-a-alergia-alimentar"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "a máquina (de pagamento)",
    "en": "card machine",
    "zhHans": "刷卡机",
    "zhHant": "刷卡機",
    "id": "az-1032",
    "legacyIds": [
      "situacao-a-maquina-de-pagamento"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "pagar em dinheiro / com cartão",
    "en": "to pay cash / by card",
    "zhHans": "现金支付／刷卡",
    "zhHant": "現金支付／刷卡",
    "id": "az-1033",
    "legacyIds": [
      "situacao-pagar-em-dinheiro-com-cartao"
    ]
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "o troco",
    "en": "change",
    "zhHans": "找零",
    "zhHant": "找零",
    "id": "az-0260",
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "pagar em separado / junto",
    "en": "to pay separately / together",
    "zhHans": "分开付／一起付",
    "zhHant": "分開付／一起付",
    "id": "az-1034",
    "legacyIds": [
      "situacao-pagar-em-separado-junto"
    ]
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "o chefe de sala",
    "en": "head waiter",
    "zhHans": "领班",
    "zhHant": "領班",
    "id": "az-1035",
    "legacyIds": [
      "situacao-o-chefe-de-sala"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "o turno partido",
    "en": "split shift",
    "zhHans": "两头班（分段班）",
    "zhHant": "兩頭班（分段班）",
    "note": "Lunch + dinner service with a break between",
    "id": "az-1036",
    "legacyIds": [
      "situacao-o-turno-partido"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "pôr / levantar a mesa",
    "en": "to set / clear the table",
    "zhHans": "摆桌／收桌",
    "zhHant": "擺桌／收桌",
    "id": "az-1037",
    "legacyIds": [
      "situacao-por-levantar-a-mesa"
    ]
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "o cliente habitual",
    "en": "regular customer",
    "zhHans": "熟客",
    "zhHant": "熟客",
    "id": "az-1038",
    "legacyIds": [
      "situacao-o-cliente-habitual"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_restauracao",
    "pt": "a esplanada cheia",
    "en": "full terrace",
    "zhHans": "露天座位已满",
    "zhHant": "露天座位已滿",
    "id": "az-1039",
    "legacyIds": [
      "situacao-a-esplanada-cheia"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "passar a ferro",
    "en": "to iron",
    "zhHans": "熨衣服",
    "zhHant": "熨衣服",
    "note": "Often part of domestic cleaning jobs",
    "id": "az-1040",
    "legacyIds": [
      "situacao-passar-a-ferro"
    ]
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "a tábua e o ferro de engomar",
    "en": "ironing board and iron",
    "zhHans": "烫衣板和熨斗",
    "zhHant": "燙衣板和熨斗",
    "id": "az-1041",
    "legacyIds": [
      "situacao-a-tabua-e-o-ferro-de-engomar"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "dobrar a roupa",
    "en": "to fold the laundry",
    "zhHans": "叠衣服",
    "zhHant": "疊衣服",
    "id": "az-1042",
    "legacyIds": [
      "situacao-dobrar-a-roupa"
    ]
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "estender a roupa",
    "en": "to hang out the laundry",
    "zhHans": "晾衣服",
    "zhHant": "晾衣服",
    "id": "az-1043",
    "legacyIds": [
      "situacao-estender-a-roupa"
    ]
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "a máquina de lavar / de secar",
    "en": "washing machine / dryer",
    "zhHans": "洗衣机／烘干机",
    "zhHant": "洗衣機／烘乾機",
    "id": "az-1044",
    "legacyIds": [
      "situacao-a-maquina-de-lavar-de-secar"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "o detergente / o amaciador",
    "en": "detergent / fabric softener",
    "zhHans": "洗滌剂／柔顺剂",
    "zhHant": "洗滌劑／柔順劑",
    "id": "az-1045",
    "legacyIds": [
      "situacao-o-detergente-o-amaciador"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "o desinfetante",
    "en": "disinfectant",
    "zhHans": "消毒剂",
    "zhHant": "消毒劑",
    "id": "az-1046",
    "legacyIds": [
      "situacao-o-desinfetante"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "o pano do pó",
    "en": "dust cloth",
    "zhHans": "抹布",
    "zhHant": "抹布",
    "id": "az-1047",
    "legacyIds": [
      "situacao-o-pano-do-po"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "a esponja",
    "en": "sponge",
    "zhHans": "海綿",
    "zhHant": "海綿",
    "id": "az-1048",
    "legacyIds": [
      "situacao-a-esponja"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "limpar os vidros",
    "en": "to clean the windows",
    "zhHans": "擦玻璃",
    "zhHant": "擦玻璃",
    "id": "az-1049",
    "legacyIds": [
      "situacao-limpar-os-vidros"
    ]
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "a limpeza a fundo",
    "en": "deep clean",
    "zhHans": "深度清洁",
    "zhHant": "深度清潔",
    "note": "Quote it higher than regular cleaning",
    "id": "az-1050",
    "legacyIds": [
      "situacao-a-limpeza-a-fundo"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "semanal / quinzenal",
    "en": "weekly / fortnightly",
    "zhHans": "每周一次／每两周一次",
    "zhHant": "每週一次／每兩週一次",
    "id": "az-1051",
    "legacyIds": [
      "situacao-semanal-quinzenal"
    ]
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "a chave de casa",
    "en": "house key",
    "zhHans": "家门钥匙",
    "zhHant": "家門鑰匙",
    "id": "az-1052",
    "legacyIds": [
      "situacao-a-chave-de-casa"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "remarcar",
    "en": "to reschedule",
    "zhHans": "改期",
    "zhHant": "改期",
    "id": "az-1053",
    "legacyIds": [
      "situacao-remarcar"
    ]
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "avisar com antecedência",
    "en": "to give advance notice",
    "zhHans": "提前通知",
    "zhHant": "提前通知",
    "id": "az-1054",
    "legacyIds": [
      "situacao-avisar-com-antecedencia"
    ]
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "o feriado",
    "en": "public holiday",
    "zhHans": "公众假期",
    "zhHant": "公眾假期",
    "id": "az-1055",
    "legacyIds": [
      "situacao-o-feriado"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "o pagamento por transferência",
    "en": "payment by bank transfer",
    "zhHans": "转账付款",
    "zhHant": "轉帳付款",
    "id": "az-1056",
    "legacyIds": [
      "situacao-o-pagamento-por-transferencia"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "aumentar o preço",
    "en": "to raise the price",
    "zhHans": "涨价",
    "zhHant": "漲價",
    "id": "az-1057",
    "legacyIds": [
      "situacao-aumentar-o-preco"
    ]
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "o material de limpeza",
    "en": "cleaning supplies",
    "zhHans": "清洁用品",
    "zhHant": "清潔用品",
    "id": "az-1058",
    "legacyIds": [
      "situacao-o-material-de-limpeza"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_limpezas",
    "pt": "a referência (de clientes)",
    "en": "reference (from clients)",
    "zhHans": "客户推荐信",
    "zhHant": "客戶推薦信",
    "id": "az-1059",
    "legacyIds": [
      "situacao-a-referencia-de-clientes"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "a ferramenta",
    "en": "tool",
    "zhHans": "工具",
    "zhHant": "工具",
    "id": "az-0541",
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o martelo",
    "en": "hammer",
    "zhHans": "錘子",
    "zhHant": "錘子",
    "id": "az-1060",
    "legacyIds": [
      "situacao-o-martelo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o berbequim / a broca",
    "en": "drill / drill bit",
    "zhHans": "电钻／钻头",
    "zhHant": "電鑽／鑽頭",
    "id": "az-1061",
    "legacyIds": [
      "situacao-o-berbequim-a-broca"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "a serra",
    "en": "saw",
    "zhHans": "锯子",
    "zhHant": "鋸子",
    "id": "az-1062",
    "legacyIds": [
      "situacao-a-serra"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "a chave de fendas",
    "en": "screwdriver",
    "zhHans": "螺絲刀",
    "zhHant": "螺絲刀",
    "id": "az-1063",
    "legacyIds": [
      "situacao-a-chave-de-fendas"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "a escada",
    "en": "ladder",
    "zhHans": "梯子",
    "zhHant": "梯子",
    "id": "az-1064",
    "legacyIds": [
      "situacao-a-escada"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o ladrilho / o azulejo",
    "en": "floor tile / wall tile",
    "zhHans": "地砖／瓷砖",
    "zhHant": "地磚／瓷磚",
    "id": "az-1065",
    "legacyIds": [
      "situacao-o-ladrilho-o-azulejo"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o pladur / o gesso",
    "en": "drywall / plaster",
    "zhHans": "石膏板／石膏",
    "zhHant": "石膏板／石膏",
    "id": "az-1066",
    "legacyIds": [
      "situacao-o-pladur-o-gesso"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "a tinta / pintar",
    "en": "paint / to paint",
    "zhHans": "油漆／刷漆",
    "zhHant": "油漆／刷漆",
    "id": "az-1067",
    "legacyIds": [
      "situacao-a-tinta-pintar"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o rolo / o pincel",
    "en": "roller / brush",
    "zhHans": "滾筒／刷子",
    "zhHant": "滾筒／刷子",
    "id": "az-1068",
    "legacyIds": [
      "situacao-o-rolo-o-pincel"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o eletricista",
    "en": "electrician",
    "zhHans": "电工",
    "zhHant": "電工",
    "id": "az-1069",
    "legacyIds": [
      "situacao-o-eletricista"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o canalizador",
    "en": "plumber",
    "zhHans": "水管工",
    "zhHant": "水管工",
    "id": "az-1070",
    "legacyIds": [
      "situacao-o-canalizador"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "a remodelação",
    "en": "renovation",
    "zhHans": "翻新装修",
    "zhHant": "翻新裝修",
    "note": "Most immigrant construction work is renovations",
    "id": "az-1071",
    "legacyIds": [
      "situacao-a-remodelacao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o entulho",
    "en": "rubble / construction waste",
    "zhHans": "建筑垃圾",
    "zhHant": "建築垃圾",
    "id": "az-1072",
    "legacyIds": [
      "situacao-o-entulho"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "a carrinha",
    "en": "van",
    "zhHans": "货车（面包车）",
    "zhHant": "貨車（麵包車）",
    "id": "az-1073",
    "legacyIds": [
      "situacao-a-carrinha"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "descarregar o material",
    "en": "to unload materials",
    "zhHans": "卸货（材料）",
    "zhHant": "卸貨（材料）",
    "id": "az-1074",
    "legacyIds": [
      "situacao-descarregar-o-material"
    ]
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "a fita métrica / medir",
    "en": "tape measure / to measure",
    "zhHans": "捲尺／测量",
    "zhHant": "捲尺／測量",
    "id": "az-1075",
    "legacyIds": [
      "situacao-a-fita-metrica-medir"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o nível",
    "en": "spirit level",
    "zhHans": "水平尺",
    "zhHant": "水平尺",
    "id": "az-1076",
    "legacyIds": [
      "situacao-o-nivel"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o orçamento",
    "en": "quote / estimate",
    "zhHans": "報价",
    "zhHant": "報價",
    "id": "az-1077",
    "legacyIds": [
      "situacao-o-orcamento"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_construcao",
    "pt": "o seguro de acidentes de trabalho",
    "en": "workplace accident insurance",
    "zhHans": "工伤保险",
    "zhHant": "工傷保險",
    "note": "Employer must have it — ask",
    "id": "az-1078",
    "legacyIds": [
      "situacao-o-seguro-de-acidentes-de-trabalho"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "recolher / levantar o pedido",
    "en": "to pick up the order (at the restaurant)",
    "zhHans": "到店取单",
    "zhHant": "到店取單",
    "id": "az-1079",
    "legacyIds": [
      "situacao-recolher-levantar-o-pedido"
    ]
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o pedido ainda não está pronto",
    "en": "the order isn't ready yet",
    "zhHans": "订单还没好",
    "zhHant": "訂單還沒好",
    "id": "az-1080",
    "legacyIds": [
      "situacao-o-pedido-ainda-nao-esta-pronto"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "a demora",
    "en": "delay / wait",
    "zhHans": "等候／延误",
    "zhHant": "等候／延誤",
    "id": "az-1081",
    "legacyIds": [
      "situacao-a-demora"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o número do pedido",
    "en": "order number",
    "zhHans": "订单号",
    "zhHant": "訂單號",
    "id": "az-1082",
    "legacyIds": [
      "situacao-o-numero-do-pedido"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "a zona de entrega",
    "en": "delivery zone",
    "zhHans": "配送区域",
    "zhHant": "配送區域",
    "id": "az-1083",
    "legacyIds": [
      "situacao-a-zona-de-entrega"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "a taxa de entrega",
    "en": "delivery fee",
    "zhHans": "配送费",
    "zhHant": "配送費",
    "id": "az-1084",
    "legacyIds": [
      "situacao-a-taxa-de-entrega"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "os ganhos",
    "en": "earnings",
    "zhHans": "收入",
    "zhHant": "收入",
    "id": "az-1085",
    "legacyIds": [
      "situacao-os-ganhos"
    ],
    "pos": "noun",
    "gender": "m-pl"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o pagamento semanal",
    "en": "weekly payout",
    "zhHans": "周结（每周结算）",
    "zhHant": "週結（每週結算）",
    "id": "az-1086",
    "legacyIds": [
      "situacao-o-pagamento-semanal"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "a avaliação",
    "en": "rating",
    "zhHans": "评分",
    "zhHant": "評分",
    "id": "az-1087",
    "legacyIds": [
      "situacao-a-avaliacao"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o cliente não atende",
    "en": "the customer isn't answering",
    "zhHans": "顾客不接电话",
    "zhHant": "顧客不接電話",
    "id": "az-1088",
    "legacyIds": [
      "situacao-o-cliente-nao-atende"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "cancelar a entrega",
    "en": "to cancel the delivery",
    "zhHans": "取消配送",
    "zhHant": "取消配送",
    "id": "az-1089",
    "legacyIds": [
      "situacao-cancelar-a-entrega"
    ]
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o suporte (da app)",
    "en": "(app) support",
    "zhHans": "平台客服",
    "zhHant": "平台客服",
    "id": "az-1090",
    "legacyIds": [
      "situacao-o-suporte-da-app"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "reportar um problema",
    "en": "to report a problem",
    "zhHans": "上報问题",
    "zhHant": "上報問題",
    "id": "az-1091",
    "legacyIds": [
      "situacao-reportar-um-problema"
    ]
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "a morada errada",
    "en": "wrong address",
    "zhHans": "地址错误",
    "zhHant": "地址錯誤",
    "id": "az-1092",
    "legacyIds": [
      "situacao-a-morada-errada"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o pagamento em dinheiro / já pago",
    "en": "cash payment / already paid",
    "zhHans": "现金支付／已在线支付",
    "zhHant": "現金支付／已在線支付",
    "id": "az-1093",
    "legacyIds": [
      "situacao-o-pagamento-em-dinheiro-ja-pago"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o capacete / o colete",
    "en": "helmet / hi-vis vest",
    "zhHans": "头盔／反光背心",
    "zhHant": "頭盔／反光背心",
    "id": "az-1094",
    "legacyIds": [
      "situacao-o-capacete-o-colete"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "estacionar",
    "en": "to park",
    "zhHans": "停车",
    "zhHant": "停車",
    "id": "az-1095",
    "legacyIds": [
      "situacao-estacionar"
    ]
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "o elevador está avariado",
    "en": "the lift is broken",
    "zhHans": "电梯坏了",
    "zhHant": "電梯壞了",
    "id": "az-1096",
    "legacyIds": [
      "situacao-o-elevador-esta-avariado"
    ],
    "pos": "noun",
    "gender": "m"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "a gorjeta na app",
    "en": "in-app tip",
    "zhHans": "应用内小费",
    "zhHant": "應用內小費",
    "id": "az-1097",
    "legacyIds": [
      "situacao-a-gorjeta-na-app"
    ],
    "pos": "noun",
    "gender": "f"
  },
  {
    "situacao": "trabalho_entregas",
    "pt": "a conta bloqueada",
    "en": "blocked account",
    "zhHans": "账号被封",
    "zhHant": "帳號被封",
    "id": "az-1098",
    "legacyIds": [
      "situacao-a-conta-bloqueada"
    ],
    "pos": "noun",
    "gender": "f"
  }
];

export const situacaoDialogueLines: SituacaoContentLine[] = [
  {
    "id": "dialogo-banco-boa-tarde-queria-abrir-uma-conta-a-ordem",
    "situacao": "banco",
    "order": 0,
    "pt": "Boa tarde, queria abrir uma conta à ordem.",
    "en": "Good afternoon, I'd like to open a current account.",
    "zhHans": "下午好，我想开一个活期账户。",
    "zhHant": "下午好，我想開一個活期帳戶。"
  },
  {
    "id": "dialogo-banco-com-certeza-tem-o-passaporte-o-nif-e-um-comprovativo-d",
    "situacao": "banco",
    "order": 1,
    "pt": "Com certeza. Tem o passaporte, o NIF e um comprovativo de morada?",
    "en": "Of course. Do you have your passport, tax number and proof of address?",
    "zhHans": "当然可以。您有护照、税号和住址证明吗？",
    "zhHant": "當然可以。您有護照、稅號和住址證明嗎？"
  },
  {
    "id": "dialogo-banco-tenho-esta-tudo-aqui",
    "situacao": "banco",
    "order": 2,
    "pt": "Tenho, está tudo aqui.",
    "en": "Yes, it's all here.",
    "zhHans": "有，都在这里。",
    "zhHant": "有，都在這裡。"
  },
  {
    "id": "dialogo-banco-e-preciso-um-deposito-inicial-pode-ser-em-numerario-ou",
    "situacao": "banco",
    "order": 3,
    "pt": "É preciso um depósito inicial. Pode ser em numerário ou por transferência.",
    "en": "An initial deposit is required. It can be in cash or by transfer.",
    "zhHans": "需要一笔开户存款，可以用现金或转账。",
    "zhHant": "需要一筆開戶存款，可以用現金或轉帳。"
  },
  {
    "id": "dialogo-banco-quanto-e-a-comissao-de-manutencao-mensal",
    "situacao": "banco",
    "order": 4,
    "pt": "Quanto é a comissão de manutenção mensal?",
    "en": "How much is the monthly maintenance fee?",
    "zhHans": "每月的账户管理费是多少？",
    "zhHant": "每月的帳戶管理費是多少？"
  },
  {
    "id": "dialogo-banco-o-cartao-multibanco-chega-por-correio-dentro-de-uma-a-",
    "situacao": "banco",
    "order": 5,
    "pt": "O cartão multibanco chega por correio dentro de uma a duas semanas.",
    "en": "The debit card arrives by post within one to two weeks.",
    "zhHans": "提款卡会在一到两周内邮寄给您。",
    "zhHant": "提款卡會在一到兩週內郵寄給您。"
  },
  {
    "id": "dialogo-banco-como-ativo-o-homebanking",
    "situacao": "banco",
    "order": 6,
    "pt": "Como ativo o homebanking?",
    "en": "How do I activate online banking?",
    "zhHans": "我怎样开通网上银行？",
    "zhHant": "我怎樣開通網上銀行？"
  },
  {
    "id": "dialogo-banco-recebe-um-sms-com-o-codigo-de-ativacao-para-a-app",
    "situacao": "banco",
    "order": 7,
    "pt": "Recebe um SMS com o código de ativação para a app.",
    "en": "You'll receive an SMS with the activation code for the app.",
    "zhHans": "您会收到一条含应用程式启用码的短信。",
    "zhHant": "您會收到一條含應用程式啟用碼的短信。"
  },
  {
    "id": "dialogo-financas-bom-dia-vim-pedir-o-nif",
    "situacao": "financas",
    "order": 8,
    "pt": "Bom dia, vim pedir o NIF.",
    "en": "Good morning, I've come to apply for a tax number.",
    "zhHans": "早上好，我來申请税号。",
    "zhHant": "早上好，我來申請稅號。"
  },
  {
    "id": "dialogo-financas-tem-passaporte-e-comprovativo-de-morada",
    "situacao": "financas",
    "order": 9,
    "pt": "Tem passaporte e comprovativo de morada?",
    "en": "Do you have your passport and proof of address?",
    "zhHans": "您有护照和住址证明吗？",
    "zhHant": "您有護照和住址證明嗎？"
  },
  {
    "id": "dialogo-financas-tenho-o-passaporte-mas-a-morada-ainda-e-do-estrangeiro",
    "situacao": "financas",
    "order": 10,
    "pt": "Tenho o passaporte, mas a morada ainda é do estrangeiro.",
    "en": "I have my passport, but my address is still abroad.",
    "zhHans": "我有护照，但地址还是國外的。",
    "zhHant": "我有護照，但地址還是國外的。"
  },
  {
    "id": "dialogo-financas-nesse-caso-precisa-de-um-representante-fiscal-ou-de-um",
    "situacao": "financas",
    "order": 11,
    "pt": "Nesse caso precisa de um representante fiscal ou de uma morada em Portugal.",
    "en": "In that case you need a tax representative or a Portuguese address.",
    "zhHans": "那样的话，您需要一位税务代表或一个葡萄牙地址。",
    "zhHant": "那樣的話，您需要一位稅務代表或一個葡萄牙地址。"
  },
  {
    "id": "dialogo-financas-quanto-tempo-demora",
    "situacao": "financas",
    "order": 12,
    "pt": "Quanto tempo demora?",
    "en": "How long does it take?",
    "zhHans": "需要多长时间？",
    "zhHant": "需要多長時間？"
  },
  {
    "id": "dialogo-financas-o-numero-e-atribuido-hoje-mesmo-a-senha-do-portal-cheg",
    "situacao": "financas",
    "order": 13,
    "pt": "O número é atribuído hoje mesmo. A senha do portal chega por carta.",
    "en": "The number is issued today. The portal password arrives by post.",
    "zhHans": "号码今天就发给您。网站密码会邮寄到府。",
    "zhHant": "號碼今天就發給您。網站密碼會郵寄到府。"
  },
  {
    "id": "dialogo-financas-preciso-de-atualizar-a-minha-morada-fiscal",
    "situacao": "financas",
    "order": 14,
    "pt": "Preciso de atualizar a minha morada fiscal.",
    "en": "I need to update my registered tax address.",
    "zhHans": "我需要更新我的税务登记地址。",
    "zhHant": "我需要更新我的稅務登記地址。"
  },
  {
    "id": "dialogo-financas-pode-fazer-isso-online-no-portal-das-financas-com-a-su",
    "situacao": "financas",
    "order": 15,
    "pt": "Pode fazer isso online no Portal das Finanças, com a sua senha.",
    "en": "You can do that online on the Finanças portal with your password.",
    "zhHans": "您可以用密码在财政网站上在线办理。",
    "zhHant": "您可以用密碼在財政網站上在線辦理。"
  },
  {
    "id": "dialogo-correios-boa-tarde-queria-enviar-esta-carta-registada-com-aviso",
    "situacao": "correios",
    "order": 16,
    "pt": "Boa tarde, queria enviar esta carta registada com aviso de receção.",
    "en": "Good afternoon, I'd like to send this letter registered with proof of delivery.",
    "zhHans": "下午好，我想寄这封挂号信，要带回执。",
    "zhHant": "下午好，我想寄這封掛號信，要帶回執。"
  },
  {
    "id": "dialogo-correios-para-portugal-ou-para-o-estrangeiro",
    "situacao": "correios",
    "order": 17,
    "pt": "Para Portugal ou para o estrangeiro?",
    "en": "Within Portugal or abroad?",
    "zhHans": "寄葡萄牙國内还是國外？",
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
    "zhHans": "用优先邮件大约一周。这是您的追踪編号。",
    "zhHant": "用優先郵件大約一週。這是您的追蹤編號。"
  },
  {
    "id": "dialogo-correios-tambem-vim-levantar-uma-encomenda-tenho-este-aviso",
    "situacao": "correios",
    "order": 20,
    "pt": "Também vim levantar uma encomenda. Tenho este aviso.",
    "en": "I've also come to collect a parcel. I have this notice.",
    "zhHans": "我还要领一个包裹，我有这张取件通知。",
    "zhHant": "我還要領一個包裹，我有這張取件通知。"
  },
  {
    "id": "dialogo-correios-pode-mostrar-um-documento-de-identificacao",
    "situacao": "correios",
    "order": 21,
    "pt": "Pode mostrar um documento de identificação?",
    "en": "Could you show me some ID?",
    "zhHans": "可以出示一下证件吗？",
    "zhHant": "可以出示一下證件嗎？"
  },
  {
    "id": "dialogo-correios-claro-aqui-esta-o-meu-titulo-de-residencia",
    "situacao": "correios",
    "order": 22,
    "pt": "Claro, aqui está o meu título de residência.",
    "en": "Of course, here's my residence permit.",
    "zhHans": "当然，这是我的居留证。",
    "zhHant": "當然，這是我的居留證。"
  },
  {
    "id": "dialogo-junta-de-freguesia-bom-dia-preciso-de-um-atestado-de-residencia",
    "situacao": "junta_de_freguesia",
    "order": 23,
    "pt": "Bom dia, preciso de um atestado de residência.",
    "en": "Good morning, I need a certificate of residence.",
    "zhHans": "早上好，我需要一份居住证明。",
    "zhHant": "早上好，我需要一份居住證明。"
  },
  {
    "id": "dialogo-junta-de-freguesia-mora-nesta-freguesia-ha-quanto-tempo",
    "situacao": "junta_de_freguesia",
    "order": 24,
    "pt": "Mora nesta freguesia há quanto tempo?",
    "en": "How long have you lived in this parish?",
    "zhHans": "您在本堂区住了多久？",
    "zhHant": "您在本堂區住了多久？"
  },
  {
    "id": "dialogo-junta-de-freguesia-ha-quatro-meses-e-para-pedir-o-numero-de-utente",
    "situacao": "junta_de_freguesia",
    "order": 25,
    "pt": "Há quatro meses. É para pedir o número de utente.",
    "en": "Four months. It's to apply for my health service number.",
    "zhHans": "四个月了。是为了申请医疗用户号。",
    "zhHant": "四個月了。是為了申請醫療用戶號。"
  },
  {
    "id": "dialogo-junta-de-freguesia-tem-contrato-de-arrendamento-ou-duas-testemunhas-recen",
    "situacao": "junta_de_freguesia",
    "order": 26,
    "pt": "Tem contrato de arrendamento ou duas testemunhas recenseadas aqui?",
    "en": "Do you have a rental contract or two witnesses registered here?",
    "zhHans": "您有租赁合同，或两位在此登记的证人吗？",
    "zhHant": "您有租賃合同，或兩位在此登記的證人嗎？"
  },
  {
    "id": "dialogo-junta-de-freguesia-tenho-o-contrato-de-arrendamento-e-uma-fatura-da-luz",
    "situacao": "junta_de_freguesia",
    "order": 27,
    "pt": "Tenho o contrato de arrendamento e uma fatura da luz.",
    "en": "I have the rental contract and an electricity bill.",
    "zhHans": "我有租赁合同和一张电费单。",
    "zhHant": "我有租賃合同和一張電費單。"
  },
  {
    "id": "dialogo-junta-de-freguesia-otimo-preencha-este-formulario-e-pague-a-taxa-por-favo",
    "situacao": "junta_de_freguesia",
    "order": 28,
    "pt": "Ótimo. Preencha este formulário e pague a taxa, por favor.",
    "en": "Great. Fill in this form and pay the fee, please.",
    "zhHans": "很好。请填写这张表格并缴费。",
    "zhHant": "很好。請填寫這張表格並繳費。"
  },
  {
    "id": "dialogo-junta-de-freguesia-quando-fica-pronto",
    "situacao": "junta_de_freguesia",
    "order": 29,
    "pt": "Quando fica pronto?",
    "en": "When will it be ready?",
    "zhHans": "什么时候可以拿？",
    "zhHant": "什麼時候可以拿？"
  },
  {
    "id": "dialogo-junta-de-freguesia-fica-pronto-hoje-com-o-carimbo-da-junta",
    "situacao": "junta_de_freguesia",
    "order": 30,
    "pt": "Fica pronto hoje, com o carimbo da junta.",
    "en": "It'll be ready today, with the parish stamp.",
    "zhHans": "今天就好，会盖上堂区公章。",
    "zhHant": "今天就好，會蓋上堂區公章。"
  },
  {
    "id": "dialogo-saude-boa-tarde-queria-inscrever-me-no-centro-de-saude-e-ped",
    "situacao": "saude",
    "order": 31,
    "pt": "Boa tarde, queria inscrever-me no centro de saúde e pedir o número de utente.",
    "en": "Good afternoon, I'd like to register at the health centre and get my SNS number.",
    "zhHans": "下午好，我想在卫生中心登记并申请医疗用户号。",
    "zhHant": "下午好，我想在衛生中心登記並申請醫療用戶號。"
  },
  {
    "id": "dialogo-saude-tem-autorizacao-de-residencia-e-nif",
    "situacao": "saude",
    "order": 32,
    "pt": "Tem autorização de residência e NIF?",
    "en": "Do you have a residence permit and tax number?",
    "zhHans": "您有居留許可和税号吗？",
    "zhHant": "您有居留許可和稅號嗎？"
  },
  {
    "id": "dialogo-saude-ainda-nao-tenho-autorizacao-mas-tenho-um-atestado-de-r",
    "situacao": "saude",
    "order": 33,
    "pt": "Ainda não tenho autorização, mas tenho um atestado de residência da junta.",
    "en": "I don't have a permit yet, but I have a residence certificate from the parish council.",
    "zhHans": "我还没有居留許可，但我有堂区开的居住证明。",
    "zhHant": "我還沒有居留許可，但我有堂區開的居住證明。"
  },
  {
    "id": "dialogo-saude-serve-o-numero-de-utente-e-atribuido-ja-hoje",
    "situacao": "saude",
    "order": 34,
    "pt": "Serve. O número de utente é atribuído já hoje.",
    "en": "That works. Your user number is issued today.",
    "zhHans": "可以。用户号今天就发给您。",
    "zhHant": "可以。用戶號今天就發給您。"
  },
  {
    "id": "dialogo-saude-queria-marcar-uma-consulta-com-o-medico-de-familia",
    "situacao": "saude",
    "order": 35,
    "pt": "Queria marcar uma consulta com o médico de família.",
    "en": "I'd like to book an appointment with the family doctor.",
    "zhHans": "我想预约家庭医生。",
    "zhHant": "我想預約家庭醫生。"
  },
  {
    "id": "dialogo-saude-de-momento-esta-em-lista-de-espera-para-medico-de-fami",
    "situacao": "saude",
    "order": 36,
    "pt": "De momento está em lista de espera para médico de família.",
    "en": "At the moment you're on the waiting list for a family doctor.",
    "zhHans": "目前您在家庭医生的等候名单上。",
    "zhHant": "目前您在家庭醫生的等候名單上。"
  },
  {
    "id": "dialogo-saude-e-se-ficar-doente-entretanto",
    "situacao": "saude",
    "order": 37,
    "pt": "E se ficar doente entretanto?",
    "en": "And if I get sick in the meantime?",
    "zhHans": "那期间生病了怎么办？",
    "zhHant": "那期間生病了怎麼辦？"
  },
  {
    "id": "dialogo-saude-ligue-para-o-sns-24-808-24-24-24-antes-de-ir-a-urgenci",
    "situacao": "saude",
    "order": 38,
    "pt": "Ligue para o SNS 24 — 808 24 24 24 — antes de ir à urgência.",
    "en": "Call SNS 24 — 808 24 24 24 — before going to A&E.",
    "zhHans": "去急诊前先打SNS 24热线——808 24 24 24。",
    "zhHant": "去急診前先打SNS 24熱線——808 24 24 24。"
  },
  {
    "id": "dialogo-aima-bom-dia-tenho-uma-marcacao-para-renovar-a-autorizacao-",
    "situacao": "aima",
    "order": 39,
    "pt": "Bom dia, tenho uma marcação para renovar a autorização de residência.",
    "en": "Good morning, I have an appointment to renew my residence permit.",
    "zhHans": "早上好，我有续居留許可的预约。",
    "zhHant": "早上好，我有續居留許可的預約。"
  },
  {
    "id": "dialogo-aima-pode-mostrar-o-titulo-de-residencia-e-o-passaporte",
    "situacao": "aima",
    "order": 40,
    "pt": "Pode mostrar o título de residência e o passaporte?",
    "en": "Can you show me your residence card and passport?",
    "zhHans": "可以出示您的居留证和护照吗？",
    "zhHant": "可以出示您的居留證和護照嗎？"
  },
  {
    "id": "dialogo-aima-aqui-estao-tambem-trouxe-o-comprovativo-de-morada-e-os",
    "situacao": "aima",
    "order": 41,
    "pt": "Aqui estão. Também trouxe o comprovativo de morada e os recibos de vencimento.",
    "en": "Here they are. I also brought proof of address and my payslips.",
    "zhHans": "在这里。我还带了住址证明和工资单。",
    "zhHant": "在這裡。我還帶了住址證明和工資單。"
  },
  {
    "id": "dialogo-aima-autoriza-a-consulta-do-seu-registo-criminal",
    "situacao": "aima",
    "order": 42,
    "pt": "Autoriza a consulta do seu registo criminal?",
    "en": "Do you authorise us to check your criminal record?",
    "zhHans": "您授权我们查询您的无犯罪记录吗？",
    "zhHant": "您授權我們查詢您的無犯罪記錄嗎？"
  },
  {
    "id": "dialogo-aima-sim-autorizo",
    "situacao": "aima",
    "order": 43,
    "pt": "Sim, autorizo.",
    "en": "Yes, I do.",
    "zhHans": "是的，我授权。",
    "zhHant": "是的，我授權。"
  },
  {
    "id": "dialogo-aima-vamos-agora-recolher-os-dados-biometricos",
    "situacao": "aima",
    "order": 44,
    "pt": "Vamos agora recolher os dados biométricos.",
    "en": "We'll now collect your biometric data.",
    "zhHans": "现在我们採集您的生物识別资料。",
    "zhHant": "現在我們採集您的生物識別資料。"
  },
  {
    "id": "dialogo-aima-quando-recebo-o-novo-titulo",
    "situacao": "aima",
    "order": 45,
    "pt": "Quando recebo o novo título?",
    "en": "When will I receive the new card?",
    "zhHans": "新证件什么时候能拿到？",
    "zhHant": "新證件什麼時候能拿到？"
  },
  {
    "id": "dialogo-aima-e-enviado-por-correio-para-a-sua-morada-guarde-o-compr",
    "situacao": "aima",
    "order": 46,
    "pt": "É enviado por correio para a sua morada. Guarde o comprovativo do pedido.",
    "en": "It's sent by post to your address. Keep the proof of application.",
    "zhHans": "会邮寄到您的地址。请保存好申请憑证。",
    "zhHant": "會郵寄到您的地址。請保存好申請憑證。"
  },
  {
    "id": "dialogo-escola-bom-dia-queria-matricular-a-minha-filha-na-escola",
    "situacao": "escola",
    "order": 47,
    "pt": "Bom dia, queria matricular a minha filha na escola.",
    "en": "Good morning, I'd like to enrol my daughter in school.",
    "zhHans": "早上好，我想给女儿办理入学註册。",
    "zhHant": "早上好，我想給女兒辦理入學註冊。"
  },
  {
    "id": "dialogo-escola-a-matricula-faz-se-online-no-portal-das-matriculas-pre",
    "situacao": "escola",
    "order": 48,
    "pt": "A matrícula faz-se online, no Portal das Matrículas. Precisa de ajuda?",
    "en": "Enrolment is done online, on the enrolment portal. Do you need help?",
    "zhHans": "註册在入学网站上在线办理。需要帮忙吗？",
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
    "zhHans": "孩子的身份证件、医疗用户号、疫苗记录和住址证明。",
    "zhHant": "孩子的身份證件、醫療用戶號、疫苗記錄和住址證明。"
  },
  {
    "id": "dialogo-escola-ela-pode-ter-apoio-para-as-refeicoes",
    "situacao": "escola",
    "order": 51,
    "pt": "Ela pode ter apoio para as refeições?",
    "en": "Can she get support for school meals?",
    "zhHans": "她可以申请餐费补助吗？",
    "zhHant": "她可以申請餐費補助嗎？"
  },
  {
    "id": "dialogo-escola-sim-atraves-da-acao-social-escolar-precisa-do-niss-e-d",
    "situacao": "escola",
    "order": 52,
    "pt": "Sim, através da Ação Social Escolar — precisa do NISS e do escalão do abono.",
    "en": "Yes, through school social support — you need her NISS and the family allowance bracket.",
    "zhHans": "可以，通过学校社会援助——需要她的社保号和家庭津贴等级。",
    "zhHant": "可以，通過學校社會援助——需要她的社保號和家庭津貼等級。"
  },
  {
    "id": "dialogo-escola-quando-comecam-as-aulas",
    "situacao": "escola",
    "order": 53,
    "pt": "Quando começam as aulas?",
    "en": "When do classes start?",
    "zhHans": "什么时候开学？",
    "zhHant": "什麼時候開學？"
  },
  {
    "id": "dialogo-escola-em-setembro-a-lista-de-turmas-sai-no-portal-e-na-escol",
    "situacao": "escola",
    "order": 54,
    "pt": "Em setembro. A lista de turmas sai no portal e na escola.",
    "en": "In September. Class lists are published on the portal and at the school.",
    "zhHans": "九月。班级名单会在网站和学校公佈。",
    "zhHant": "九月。班級名單會在網站和學校公佈。"
  },
  {
    "id": "dialogo-iefp-bom-dia-queria-inscrever-me-como-candidato-a-emprego",
    "situacao": "iefp",
    "order": 55,
    "pt": "Bom dia, queria inscrever-me como candidato a emprego.",
    "en": "Good morning, I'd like to register as a jobseeker.",
    "zhHans": "早上好，我想登记为求职者。",
    "zhHant": "早上好，我想登記為求職者。"
  },
  {
    "id": "dialogo-iefp-tem-documento-de-identificacao-nif-niss-e-comprovativo",
    "situacao": "iefp",
    "order": 56,
    "pt": "Tem documento de identificação, NIF, NISS e comprovativo de morada?",
    "en": "Do you have ID, tax number, social security number and proof of address?",
    "zhHans": "您有身份证件、税号、社保号和住址证明吗？",
    "zhHant": "您有身份證件、稅號、社保號和住址證明嗎？"
  },
  {
    "id": "dialogo-iefp-tenho-tudo-tambem-perdi-o-emprego-ha-duas-semanas",
    "situacao": "iefp",
    "order": 57,
    "pt": "Tenho tudo. Também perdi o emprego há duas semanas.",
    "en": "I have everything. I also lost my job two weeks ago.",
    "zhHans": "都有。另外我两周前失业了。",
    "zhHant": "都有。另外我兩週前失業了。"
  },
  {
    "id": "dialogo-iefp-entao-pode-pedir-o-subsidio-de-desemprego-o-prazo-e-de",
    "situacao": "iefp",
    "order": 58,
    "pt": "Então pode pedir o subsídio de desemprego — o prazo é de 90 dias.",
    "en": "Then you can apply for unemployment benefit — the deadline is 90 days.",
    "zhHans": "那您可以申请失业救济金——期限是90天。",
    "zhHant": "那您可以申請失業救濟金——期限是90天。"
  },
  {
    "id": "dialogo-iefp-que-documentos-preciso-para-o-subsidio",
    "situacao": "iefp",
    "order": 59,
    "pt": "Que documentos preciso para o subsídio?",
    "en": "What documents do I need for the benefit?",
    "zhHans": "申请救济金需要哪些文件？",
    "zhHant": "申請救濟金需要哪些文件？"
  },
  {
    "id": "dialogo-iefp-a-declaracao-da-entidade-empregadora-e-o-iban",
    "situacao": "iefp",
    "order": 60,
    "pt": "A declaração da entidade empregadora e o IBAN.",
    "en": "The employer's declaration and your IBAN.",
    "zhHans": "雇主的解雇声明和您的IBAN。",
    "zhHant": "僱主的解僱聲明和您的IBAN。"
  },
  {
    "id": "dialogo-iefp-ha-cursos-de-formacao-disponiveis",
    "situacao": "iefp",
    "order": 61,
    "pt": "Há cursos de formação disponíveis?",
    "en": "Are there training courses available?",
    "zhHans": "有职业培训课程吗？",
    "zhHant": "有職業培訓課程嗎？"
  },
  {
    "id": "dialogo-iefp-sim-o-seu-gestor-pessoal-vai-definir-isso-consigo-no-p",
    "situacao": "iefp",
    "order": 62,
    "pt": "Sim, o seu gestor pessoal vai definir isso consigo no Plano Pessoal de Emprego.",
    "en": "Yes, your case officer will set that up with you in your Personal Employment Plan.",
    "zhHans": "有，您的个人专员会在个人就业计划中和您一起安排。",
    "zhHant": "有，您的個人專員會在個人就業計劃中和您一起安排。"
  },
  {
    "id": "dialogo-seguranca-social-bom-dia-preciso-de-pedir-o-niss-para-comecar-a-trabalh",
    "situacao": "seguranca_social",
    "order": 63,
    "pt": "Bom dia, preciso de pedir o NISS para começar a trabalhar.",
    "en": "Good morning, I need to apply for a social security number to start working.",
    "zhHans": "早上好，我需要申请社保号才能开始工作。",
    "zhHant": "早上好，我需要申請社保號才能開始工作。"
  },
  {
    "id": "dialogo-seguranca-social-tem-contrato-de-trabalho-ou-promessa-de-contrato",
    "situacao": "seguranca_social",
    "order": 64,
    "pt": "Tem contrato de trabalho ou promessa de contrato?",
    "en": "Do you have a work contract or a contract offer?",
    "zhHans": "您有劳动合同或录用意向书吗？",
    "zhHant": "您有勞動合同或錄用意向書嗎？"
  },
  {
    "id": "dialogo-seguranca-social-tenho-o-contrato-assinado-pela-empresa",
    "situacao": "seguranca_social",
    "order": 65,
    "pt": "Tenho o contrato assinado pela empresa.",
    "en": "I have the contract signed by the company.",
    "zhHans": "我有公司签好的合同。",
    "zhHant": "我有公司簽好的合同。"
  },
  {
    "id": "dialogo-seguranca-social-entao-junte-o-passaporte-e-o-comprovativo-de-morada-a-",
    "situacao": "seguranca_social",
    "order": 66,
    "pt": "Então junte o passaporte e o comprovativo de morada a este formulário.",
    "en": "Then attach your passport and proof of address to this form.",
    "zhHans": "那请把护照和住址证明附在这张表格上。",
    "zhHant": "那請把護照和住址證明附在這張表格上。"
  },
  {
    "id": "dialogo-seguranca-social-quanto-tempo-demora-a-atribuicao",
    "situacao": "seguranca_social",
    "order": 67,
    "pt": "Quanto tempo demora a atribuição?",
    "en": "How long does it take to be issued?",
    "zhHans": "多久能发下來？",
    "zhHant": "多久能發下來？"
  },
  {
    "id": "dialogo-seguranca-social-alguns-dias-recebe-o-niss-por-email-ou-carta-guarde-o-",
    "situacao": "seguranca_social",
    "order": 68,
    "pt": "Alguns dias. Recebe o NISS por email ou carta. Guarde o comprovativo.",
    "en": "A few days. You'll receive the NISS by email or post. Keep the receipt.",
    "zhHans": "几天。社保号会通过邮件或信件发给您。请保存好憑证。",
    "zhHant": "幾天。社保號會通過郵件或信件發給您。請保存好憑證。"
  },
  {
    "id": "dialogo-seguranca-social-depois-posso-aceder-a-seguranca-social-direta",
    "situacao": "seguranca_social",
    "order": 69,
    "pt": "Depois posso aceder à Segurança Social Direta?",
    "en": "Can I then access the online portal?",
    "zhHans": "之后我可以登入社保线上平台吗？",
    "zhHant": "之後我可以登入社保線上平台嗎？"
  },
  {
    "id": "dialogo-seguranca-social-sim-regista-se-online-com-o-niss-e-recebe-a-senha-em-c",
    "situacao": "seguranca_social",
    "order": 70,
    "pt": "Sim, regista-se online com o NISS e recebe a senha em casa.",
    "en": "Yes, you register online with your NISS and receive the password at home.",
    "zhHans": "可以，用社保号在线註册，密码会寄到家里。",
    "zhHant": "可以，用社保號在線註冊，密碼會寄到家裡。"
  },
  {
    "id": "dialogo-arrendamento-boa-tarde-venho-ver-o-t1-anunciado-ainda-esta-disponiv",
    "situacao": "arrendamento",
    "order": 71,
    "pt": "Boa tarde, venho ver o T1 anunciado. Ainda está disponível?",
    "en": "Good afternoon, I've come to see the advertised one-bed flat. Is it still available?",
    "zhHans": "下午好，我來看广告上的一房公寓。还在出租吗？",
    "zhHant": "下午好，我來看廣告上的一房公寓。還在出租嗎？"
  },
  {
    "id": "dialogo-arrendamento-esta-sim-a-renda-e-de-850-euros-com-um-mes-de-caucao",
    "situacao": "arrendamento",
    "order": 72,
    "pt": "Está, sim. A renda é de 850 euros, com um mês de caução.",
    "en": "It is. The rent is 850 euros, with one month's deposit.",
    "zhHans": "还在。租金850欧元，押金一个月。",
    "zhHant": "還在。租金850歐元，押金一個月。"
  },
  {
    "id": "dialogo-arrendamento-as-despesas-estao-incluidas",
    "situacao": "arrendamento",
    "order": 73,
    "pt": "As despesas estão incluídas?",
    "en": "Are bills included?",
    "zhHans": "包水电杂费吗？",
    "zhHant": "包水電雜費嗎？"
  },
  {
    "id": "dialogo-arrendamento-a-agua-sim-a-luz-e-a-internet-sao-a-parte",
    "situacao": "arrendamento",
    "order": 74,
    "pt": "A água sim; a luz e a internet são à parte.",
    "en": "Water yes; electricity and internet are separate.",
    "zhHans": "包水费；电费和网费另算。",
    "zhHant": "包水費；電費和網費另算。"
  },
  {
    "id": "dialogo-arrendamento-precisa-de-fiador-ainda-nao-tenho-recibos-de-venciment",
    "situacao": "arrendamento",
    "order": 75,
    "pt": "Precisa de fiador? Ainda não tenho recibos de vencimento cá.",
    "en": "Do you need a guarantor? I don't have payslips here yet.",
    "zhHans": "需要担保人吗？我在这里还没有工资单。",
    "zhHant": "需要擔保人嗎？我在這裡還沒有工資單。"
  },
  {
    "id": "dialogo-arrendamento-nesse-caso-pedia-dois-meses-de-caucao-com-contrato-e-r",
    "situacao": "arrendamento",
    "order": 76,
    "pt": "Nesse caso pedia dois meses de caução, com contrato e recibos de renda.",
    "en": "In that case I'd ask for two months' deposit, with a contract and rent receipts.",
    "zhHans": "那样的话押金要两个月，会签合同、开租金收据。",
    "zhHant": "那樣的話押金要兩個月，會簽合同、開租金收據。"
  },
  {
    "id": "dialogo-arrendamento-combinado-quando-posso-assinar-o-contrato",
    "situacao": "arrendamento",
    "order": 77,
    "pt": "Combinado. Quando posso assinar o contrato?",
    "en": "Agreed. When can I sign the contract?",
    "zhHans": "可以。什么时候可以签合同？",
    "zhHant": "可以。什麼時候可以簽合同？"
  },
  {
    "id": "dialogo-transportes-boa-tarde-queria-fazer-o-passe-navegante",
    "situacao": "transportes",
    "order": 78,
    "pt": "Boa tarde, queria fazer o passe navegante.",
    "en": "Good afternoon, I'd like to get a navegante pass.",
    "zhHans": "下午好，我想办一张navegante月票。",
    "zhHant": "下午好，我想辦一張navegante月票。"
  },
  {
    "id": "dialogo-transportes-precisa-de-uma-fotografia-e-de-um-documento-de-identif",
    "situacao": "transportes",
    "order": 79,
    "pt": "Precisa de uma fotografia e de um documento de identificação.",
    "en": "You need a photo and an ID document.",
    "zhHans": "需要一张照片和一份身份证件。",
    "zhHant": "需要一張照片和一份身份證件。"
  },
  {
    "id": "dialogo-transportes-posso-carregar-o-passe-mensal-ja-hoje",
    "situacao": "transportes",
    "order": 80,
    "pt": "Posso carregar o passe mensal já hoje?",
    "en": "Can I load the monthly pass today?",
    "zhHans": "今天就可以充值月票吗？",
    "zhHant": "今天就可以充值月票嗎？"
  },
  {
    "id": "dialogo-transportes-sim-na-maquina-ou-aqui-ao-balcao",
    "situacao": "transportes",
    "order": 81,
    "pt": "Sim, na máquina ou aqui ao balcão.",
    "en": "Yes, at the machine or here at the counter.",
    "zhHans": "可以，在售票机或这个柜台都行。",
    "zhHant": "可以，在售票機或這個櫃檯都行。"
  },
  {
    "id": "dialogo-transportes-este-autocarro-vai-para-o-centro",
    "situacao": "transportes",
    "order": 82,
    "pt": "Este autocarro vai para o centro?",
    "en": "Does this bus go to the city centre?",
    "zhHans": "这班公交去市中心吗？",
    "zhHant": "這班公交去市中心嗎？"
  },
  {
    "id": "dialogo-transportes-vai-sim-nao-se-esqueca-de-validar-o-cartao-ao-entrar",
    "situacao": "transportes",
    "order": 83,
    "pt": "Vai, sim. Não se esqueça de validar o cartão ao entrar.",
    "en": "It does. Don't forget to validate your card when boarding.",
    "zhHans": "去的。上车別忘了打卡。",
    "zhHant": "去的。上車別忘了打卡。"
  },
  {
    "id": "dialogo-transportes-onde-fica-a-paragem-para-o-sentido-contrario",
    "situacao": "transportes",
    "order": 84,
    "pt": "Onde fica a paragem para o sentido contrário?",
    "en": "Where is the stop for the opposite direction?",
    "zhHans": "反方向的车站在哪里？",
    "zhHant": "反方向的車站在哪裡？"
  },
  {
    "id": "dialogo-trabalho-hotelaria-bom-dia-hoje-fazes-os-quartos-do-terceiro-andar",
    "situacao": "trabalho_hotelaria",
    "order": 85,
    "pt": "Bom dia! Hoje fazes os quartos do terceiro andar.",
    "en": "Good morning! Today you're doing the third-floor rooms.",
    "zhHans": "早上好！今天你负责三楼的客房。",
    "zhHant": "早上好！今天你負責三樓的客房。"
  },
  {
    "id": "dialogo-trabalho-hotelaria-esta-bem-quantos-check-outs-ha",
    "situacao": "trabalho_hotelaria",
    "order": 86,
    "pt": "Está bem. Quantos check-outs há?",
    "en": "Alright. How many check-outs are there?",
    "zhHans": "好的。有几间退房？",
    "zhHant": "好的。有幾間退房？"
  },
  {
    "id": "dialogo-trabalho-hotelaria-seis-os-quartos-302-e-305-sao-so-arrumacao",
    "situacao": "trabalho_hotelaria",
    "order": 87,
    "pt": "Seis. Os quartos 302 e 305 são só arrumação.",
    "en": "Six. Rooms 302 and 305 are tidy-up only.",
    "zhHans": "六间。302和305只需整理。",
    "zhHant": "六間。302和305只需整理。"
  },
  {
    "id": "dialogo-trabalho-hotelaria-faltam-toalhas-no-carrinho-onde-vou-buscar",
    "situacao": "trabalho_hotelaria",
    "order": 88,
    "pt": "Faltam toalhas no carrinho — onde vou buscar?",
    "en": "The cart is out of towels — where do I get more?",
    "zhHans": "工作车上毛巾不够了——去哪里拿？",
    "zhHant": "工作車上毛巾不夠了——去哪裡拿？"
  },
  {
    "id": "dialogo-trabalho-hotelaria-na-rouparia-ao-fundo-do-corredor",
    "situacao": "trabalho_hotelaria",
    "order": 89,
    "pt": "Na rouparia, ao fundo do corredor.",
    "en": "In the linen room, at the end of the corridor.",
    "zhHans": "在走廊尽头的布草房。",
    "zhHant": "在走廊盡頭的布草房。"
  },
  {
    "id": "dialogo-trabalho-hotelaria-um-hospede-pediu-mais-uma-almofada-para-o-310",
    "situacao": "trabalho_hotelaria",
    "order": 90,
    "pt": "Um hóspede pediu mais uma almofada para o 310.",
    "en": "A guest asked for an extra pillow for room 310.",
    "zhHans": "有位住客要求给310房加一个枕头。",
    "zhHant": "有位住客要求給310房加一個枕頭。"
  },
  {
    "id": "dialogo-trabalho-hotelaria-eu-levo-a-tua-folga-esta-semana-e-na-quinta-pode-ser",
    "situacao": "trabalho_hotelaria",
    "order": 91,
    "pt": "Eu levo. A tua folga esta semana é na quinta, pode ser?",
    "en": "I'll take it. Your day off this week is Thursday, is that okay?",
    "zhHans": "我送过去。你这周四休息，可以吗？",
    "zhHant": "我送過去。你這週四休息，可以嗎？"
  },
  {
    "id": "dialogo-trabalho-restauracao-boa-tarde-mesa-para-dois",
    "situacao": "trabalho_restauracao",
    "order": 92,
    "pt": "Boa tarde! Mesa para dois?",
    "en": "Good afternoon! Table for two?",
    "zhHans": "下午好！两位吗？",
    "zhHant": "下午好！兩位嗎？"
  },
  {
    "id": "dialogo-trabalho-restauracao-posso-anotar-o-pedido",
    "situacao": "trabalho_restauracao",
    "order": 93,
    "pt": "Posso anotar o pedido?",
    "en": "May I take your order?",
    "zhHans": "可以点单了吗？",
    "zhHant": "可以點單了嗎？"
  },
  {
    "id": "dialogo-trabalho-restauracao-o-que-e-o-prato-do-dia",
    "situacao": "trabalho_restauracao",
    "order": 94,
    "pt": "O que é o prato do dia?",
    "en": "What's the dish of the day?",
    "zhHans": "今日特餐是什么？",
    "zhHant": "今日特餐是什麼？"
  },
  {
    "id": "dialogo-trabalho-restauracao-hoje-e-bacalhau-a-bras-vem-com-salada",
    "situacao": "trabalho_restauracao",
    "order": 95,
    "pt": "Hoje é bacalhau à Brás. Vem com salada.",
    "en": "Today it's cod 'à Brás'. It comes with salad.",
    "zhHans": "今天是布拉斯式马介休，配沙拉。",
    "zhHant": "今天是布拉斯式馬介休，配沙拉。"
  },
  {
    "id": "dialogo-trabalho-restauracao-marchar-duas-doses-de-bacalhau-para-a-mesa-cinco",
    "situacao": "trabalho_restauracao",
    "order": 96,
    "pt": "Marchar duas doses de bacalhau para a mesa cinco!",
    "en": "Two portions of cod for table five, fire away!",
    "zhHans": "五号桌两份马介休，起菜！",
    "zhHant": "五號桌兩份馬介休，起菜！"
  },
  {
    "id": "dialogo-trabalho-restauracao-a-conta-por-favor-com-certeza-ja-trago",
    "situacao": "trabalho_restauracao",
    "order": 97,
    "pt": "A conta, por favor. — Com certeza, já trago.",
    "en": "The bill, please. — Of course, right away.",
    "zhHans": "麻煩结账。——好的，马上來。",
    "zhHant": "麻煩結賬。——好的，馬上來。"
  },
  {
    "id": "dialogo-trabalho-restauracao-podes-fechar-a-esplanada-e-limpar-as-mesas",
    "situacao": "trabalho_restauracao",
    "order": 98,
    "pt": "Podes fechar a esplanada e limpar as mesas?",
    "en": "Can you close the terrace and clean the tables?",
    "zhHans": "你可以收露天座位、擦一下桌子吗？",
    "zhHant": "你可以收露天座位、擦一下桌子嗎？"
  },
  {
    "id": "dialogo-trabalho-limpezas-bom-dia-procuro-alguem-para-limpezas-duas-vezes-por-se",
    "situacao": "trabalho_limpezas",
    "order": 99,
    "pt": "Bom dia. Procuro alguém para limpezas duas vezes por semana.",
    "en": "Good morning. I'm looking for someone to clean twice a week.",
    "zhHans": "早上好。我想找人一周打扫两次。",
    "zhHant": "早上好。我想找人一週打掃兩次。"
  },
  {
    "id": "dialogo-trabalho-limpezas-eu-tenho-disponibilidade-as-tercas-e-sextas-de-manha",
    "situacao": "trabalho_limpezas",
    "order": 100,
    "pt": "Eu tenho disponibilidade às terças e sextas de manhã.",
    "en": "I'm available Tuesday and Friday mornings.",
    "zhHans": "我周二和周五上午有空。",
    "zhHant": "我週二和週五上午有空。"
  },
  {
    "id": "dialogo-trabalho-limpezas-quanto-cobra-a-hora",
    "situacao": "trabalho_limpezas",
    "order": 101,
    "pt": "Quanto cobra à hora?",
    "en": "How much do you charge per hour?",
    "zhHans": "您每小时收多少钱？",
    "zhHant": "您每小時收多少錢？"
  },
  {
    "id": "dialogo-trabalho-limpezas-doze-euros-a-hora-com-recibo-verde",
    "situacao": "trabalho_limpezas",
    "order": 102,
    "pt": "Doze euros à hora, com recibo verde.",
    "en": "Twelve euros an hour, with a freelance receipt.",
    "zhHans": "每小时十二欧元，开綠色收据。",
    "zhHant": "每小時十二歐元，開綠色收據。"
  },
  {
    "id": "dialogo-trabalho-limpezas-esta-bem-o-material-de-limpeza-fica-ca-em-casa",
    "situacao": "trabalho_limpezas",
    "order": 103,
    "pt": "Está bem. O material de limpeza fica cá em casa.",
    "en": "Alright. The cleaning supplies are kept here at the house.",
    "zhHans": "好的。清洁用品放在家里。",
    "zhHant": "好的。清潔用品放在家裡。"
  },
  {
    "id": "dialogo-trabalho-limpezas-prefere-que-aspire-primeiro-e-depois-esfregue-o-chao",
    "situacao": "trabalho_limpezas",
    "order": 104,
    "pt": "Prefere que aspire primeiro e depois esfregue o chão?",
    "en": "Do you prefer I vacuum first and then mop?",
    "zhHans": "您希望我先吸塵再拖地吗？",
    "zhHant": "您希望我先吸塵再拖地嗎？"
  },
  {
    "id": "dialogo-trabalho-limpezas-sim-e-atencao-nao-use-lixivia-no-chao-de-madeira",
    "situacao": "trabalho_limpezas",
    "order": 105,
    "pt": "Sim, e atenção: não use lixívia no chão de madeira.",
    "en": "Yes, and careful: don't use bleach on the wooden floor.",
    "zhHans": "对，注意：木地板不要用漂白水。",
    "zhHant": "對，注意：木地板不要用漂白水。"
  },
  {
    "id": "dialogo-trabalho-construcao-bom-dia-hoje-ficas-a-ajudar-o-pedreiro-no-segundo-piso",
    "situacao": "trabalho_construcao",
    "order": 106,
    "pt": "Bom dia. Hoje ficas a ajudar o pedreiro no segundo piso.",
    "en": "Good morning. Today you're helping the mason on the second floor.",
    "zhHans": "早上好。今天你在二楼给泥瓦工打下手。",
    "zhHant": "早上好。今天你在二樓給泥瓦工打下手。"
  },
  {
    "id": "dialogo-trabalho-construcao-entendido-onde-estao-os-capacetes",
    "situacao": "trabalho_construcao",
    "order": 107,
    "pt": "Entendido. Onde estão os capacetes?",
    "en": "Understood. Where are the hard hats?",
    "zhHans": "明白。安全帽在哪里？",
    "zhHant": "明白。安全帽在哪裡？"
  },
  {
    "id": "dialogo-trabalho-construcao-no-contentor-o-epi-e-obrigatorio-em-toda-a-obra",
    "situacao": "trabalho_construcao",
    "order": 108,
    "pt": "No contentor. O EPI é obrigatório em toda a obra.",
    "en": "In the container. PPE is mandatory on the whole site.",
    "zhHans": "在集装箱里。整个工地都必须穿戴防护装備。",
    "zhHant": "在集裝箱裡。整個工地都必須穿戴防護裝備。"
  },
  {
    "id": "dialogo-trabalho-construcao-precisamos-de-mais-cimento-para-a-betoneira",
    "situacao": "trabalho_construcao",
    "order": 109,
    "pt": "Precisamos de mais cimento para a betoneira.",
    "en": "We need more cement for the mixer.",
    "zhHans": "搅拌机需要再加水泥。",
    "zhHant": "攪拌機需要再加水泥。"
  },
  {
    "id": "dialogo-trabalho-construcao-cuidado-com-o-andaime-ainda-nao-esta-fixo",
    "situacao": "trabalho_construcao",
    "order": 110,
    "pt": "Cuidado com o andaime — ainda não está fixo.",
    "en": "Careful with the scaffolding — it's not secured yet.",
    "zhHans": "小心腳手架——还没固定好。",
    "zhHant": "小心腳手架——還沒固定好。"
  },
  {
    "id": "dialogo-trabalho-construcao-a-que-horas-e-a-pausa-para-almoco",
    "situacao": "trabalho_construcao",
    "order": 111,
    "pt": "A que horas é a pausa para almoço?",
    "en": "What time is the lunch break?",
    "zhHans": "午饭休息是几点？",
    "zhHant": "午飯休息是幾點？"
  },
  {
    "id": "dialogo-trabalho-construcao-ao-meio-dia-e-nao-te-esquecas-de-assinar-a-folha-de-pr",
    "situacao": "trabalho_construcao",
    "order": 112,
    "pt": "Ao meio-dia. E não te esqueças de assinar a folha de presença.",
    "en": "At noon. And don't forget to sign the attendance sheet.",
    "zhHans": "中午十二点。別忘了在考勤表上签名。",
    "zhHant": "中午十二點。別忘了在考勤表上簽名。"
  },
  {
    "id": "dialogo-trabalho-entregas-boa-noite-tenho-uma-entrega-para-o-joao",
    "situacao": "trabalho_entregas",
    "order": 113,
    "pt": "Boa noite, tenho uma entrega para o João.",
    "en": "Good evening, I have a delivery for João.",
    "zhHans": "晚上好，有João的外卖。",
    "zhHant": "晚上好，有João的外賣。"
  },
  {
    "id": "dialogo-trabalho-entregas-e-no-terceiro-andar-o-codigo-da-porta-e-1530",
    "situacao": "trabalho_entregas",
    "order": 114,
    "pt": "É no terceiro andar. O código da porta é 1530.",
    "en": "It's on the third floor. The door code is 1530.",
    "zhHans": "在三楼。门禁密码是1530。",
    "zhHant": "在三樓。門禁密碼是1530。"
  },
  {
    "id": "dialogo-trabalho-entregas-o-interfone-nao-funciona-pode-descer-para-levantar-o-p",
    "situacao": "trabalho_entregas",
    "order": 115,
    "pt": "O interfone não funciona — pode descer para levantar o pedido?",
    "en": "The intercom isn't working — can you come down to collect the order?",
    "zhHans": "对讲机坏了——您可以下來取餐吗？",
    "zhHant": "對講機壞了——您可以下來取餐嗎？"
  },
  {
    "id": "dialogo-trabalho-entregas-estou-na-entrada-com-a-mochila-vermelha",
    "situacao": "trabalho_entregas",
    "order": 116,
    "pt": "Estou na entrada, com a mochila vermelha.",
    "en": "I'm at the entrance, with the red delivery bag.",
    "zhHans": "我在门口，背紅色保溫箱。",
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
    "zhHans": "请在应用里确认收餐。晚安！",
    "zhHant": "請在應用裡確認收餐。晚安！"
  },
  {
    "id": "dialogo-banco-boa-tarde-o-multibanco-reteve-o-meu-cartao",
    "situacao": "banco",
    "order": 119,
    "pt": "Boa tarde, o multibanco reteve o meu cartão.",
    "en": "Good afternoon, the ATM retained my card.",
    "zhHans": "下午好，柜员机把我的卡吞了。",
    "zhHant": "下午好，櫃員機把我的卡吞了。"
  },
  {
    "id": "dialogo-banco-foi-nesta-agencia-tem-um-documento-de-identificacao",
    "situacao": "banco",
    "order": 120,
    "pt": "Foi nesta agência? Tem um documento de identificação?",
    "en": "Was it at this branch? Do you have ID?",
    "zhHans": "是在这家分行吗？您有身份证件吗？",
    "zhHant": "是在這家分行嗎？您有身份證件嗎？"
  },
  {
    "id": "dialogo-banco-foi-sim-aqui-esta-o-meu-titulo-de-residencia",
    "situacao": "banco",
    "order": 121,
    "pt": "Foi, sim. Aqui está o meu título de residência.",
    "en": "Yes, it was. Here's my residence permit.",
    "zhHans": "是的。这是我的居留证。",
    "zhHant": "是的。這是我的居留證。"
  },
  {
    "id": "dialogo-banco-vou-verificar-entretanto-quer-bloquear-o-cartao-por-se",
    "situacao": "banco",
    "order": 122,
    "pt": "Vou verificar. Entretanto, quer bloquear o cartão por segurança?",
    "en": "I'll check. Meanwhile, do you want to block the card for safety?",
    "zhHans": "我查一下。这期间，为安全起见要冻结卡片吗？",
    "zhHant": "我查一下。這期間，為安全起見要凍結卡片嗎？"
  },
  {
    "id": "dialogo-banco-sim-por-favor-e-posso-levantar-dinheiro-sem-cartao",
    "situacao": "banco",
    "order": 123,
    "pt": "Sim, por favor. E posso levantar dinheiro sem cartão?",
    "en": "Yes, please. And can I withdraw money without the card?",
    "zhHans": "好的，麻煩您。那我可以无卡取款吗？",
    "zhHant": "好的，麻煩您。那我可以無卡取款嗎？"
  },
  {
    "id": "dialogo-banco-pode-pelo-mb-way-com-o-telemovel",
    "situacao": "banco",
    "order": 124,
    "pt": "Pode, pelo MB Way, com o telemóvel.",
    "en": "You can, via MB Way, with your phone.",
    "zhHans": "可以，用手机通过MB Way操作。",
    "zhHant": "可以，用手機通過MB Way操作。"
  },
  {
    "id": "dialogo-banco-queria-ativar-o-debito-direto-para-a-conta-da-luz",
    "situacao": "banco",
    "order": 125,
    "pt": "Queria ativar o débito direto para a conta da luz.",
    "en": "I'd like to set up a direct debit for the electricity bill.",
    "zhHans": "我想给电费设置自动扣款。",
    "zhHant": "我想給電費設置自動扣款。"
  },
  {
    "id": "dialogo-banco-trouxe-a-fatura-precisamos-da-entidade-e-da-referencia",
    "situacao": "banco",
    "order": 126,
    "pt": "Trouxe a fatura? Precisamos da entidade e da referência.",
    "en": "Did you bring the bill? We need the entity and reference numbers.",
    "zhHans": "您带账单了吗？我们需要单位代码和缴费編号。",
    "zhHant": "您帶賬單了嗎？我們需要單位代碼和繳費編號。"
  },
  {
    "id": "dialogo-banco-esta-aqui-tambem-queria-ativar-o-mb-way",
    "situacao": "banco",
    "order": 127,
    "pt": "Está aqui. Também queria ativar o MB Way.",
    "en": "Here it is. I'd also like to activate MB Way.",
    "zhHans": "在这里。我还想开通MB Way。",
    "zhHant": "在這裡。我還想開通MB Way。"
  },
  {
    "id": "dialogo-banco-com-certeza-associa-se-ao-seu-numero-de-telemovel",
    "situacao": "banco",
    "order": 128,
    "pt": "Com certeza. Associa-se ao seu número de telemóvel.",
    "en": "Certainly. It's linked to your mobile number.",
    "zhHans": "当然可以。它会绑定您的手机号码。",
    "zhHant": "當然可以。它會綁定您的手機號碼。"
  },
  {
    "id": "dialogo-banco-ha-alguma-comissao-mensal",
    "situacao": "banco",
    "order": 129,
    "pt": "Há alguma comissão mensal?",
    "en": "Is there a monthly fee?",
    "zhHans": "有月费吗？",
    "zhHant": "有月費嗎？"
  },
  {
    "id": "dialogo-banco-nao-o-servico-e-gratuito-no-nosso-banco",
    "situacao": "banco",
    "order": 130,
    "pt": "Não, o serviço é gratuito no nosso banco.",
    "en": "No, the service is free at our bank.",
    "zhHans": "没有，我们银行这项服务免费。",
    "zhHant": "沒有，我們銀行這項服務免費。"
  },
  {
    "id": "dialogo-financas-bom-dia-quero-abrir-atividade-como-trabalhador-indepen",
    "situacao": "financas",
    "order": 131,
    "pt": "Bom dia, quero abrir atividade como trabalhador independente.",
    "en": "Good morning, I want to register as self-employed.",
    "zhHans": "早上好，我想登记自雇开业。",
    "zhHant": "早上好，我想登記自僱開業。"
  },
  {
    "id": "dialogo-financas-que-atividade-vai-exercer",
    "situacao": "financas",
    "order": 132,
    "pt": "Que atividade vai exercer?",
    "en": "What activity will you carry out?",
    "zhHans": "您要从事什么行业？",
    "zhHant": "您要從事什麼行業？"
  },
  {
    "id": "dialogo-financas-limpezas-domesticas-e-a-minha-primeira-vez",
    "situacao": "financas",
    "order": 133,
    "pt": "Limpezas domésticas. É a minha primeira vez.",
    "en": "Domestic cleaning. It's my first time.",
    "zhHans": "家庭保洁。这是我第一次登记。",
    "zhHant": "家庭保潔。這是我第一次登記。"
  },
  {
    "id": "dialogo-financas-no-primeiro-ano-tem-isencao-de-iva-se-ficar-abaixo-do-",
    "situacao": "financas",
    "order": 134,
    "pt": "No primeiro ano tem isenção de IVA se ficar abaixo do limite.",
    "en": "In the first year you're VAT-exempt if you stay under the threshold.",
    "zhHans": "第一年收入低于门檻可以免增值税。",
    "zhHant": "第一年收入低於門檻可以免增值稅。"
  },
  {
    "id": "dialogo-financas-e-como-passo-os-recibos",
    "situacao": "financas",
    "order": 135,
    "pt": "E como passo os recibos?",
    "en": "And how do I issue receipts?",
    "zhHans": "那我怎么开收据？",
    "zhHant": "那我怎麼開收據？"
  },
  {
    "id": "dialogo-financas-no-portal-das-financas-recibos-verdes-eletronicos-com-",
    "situacao": "financas",
    "order": 136,
    "pt": "No Portal das Finanças, recibos verdes eletrónicos, com a sua senha.",
    "en": "On the Finanças portal, electronic green receipts, with your password.",
    "zhHans": "在财政网站上用您的密码开电子綠色收据。",
    "zhHant": "在財政網站上用您的密碼開電子綠色收據。"
  },
  {
    "id": "dialogo-financas-recebi-uma-nota-para-pagar-posso-pagar-em-prestacoes",
    "situacao": "financas",
    "order": 137,
    "pt": "Recebi uma nota para pagar. Posso pagar em prestações?",
    "en": "I received a payment notice. Can I pay in instalments?",
    "zhHans": "我收到一张缴费通知。可以分期付款吗？",
    "zhHant": "我收到一張繳費通知。可以分期付款嗎？"
  },
  {
    "id": "dialogo-financas-pode-pedir-um-plano-prestacional-no-portal-ou-aqui-ao-",
    "situacao": "financas",
    "order": 138,
    "pt": "Pode pedir um plano prestacional no portal ou aqui ao balcão.",
    "en": "You can request an instalment plan on the portal or here at the counter.",
    "zhHans": "您可以在网站上或在这个柜台申请分期计划。",
    "zhHant": "您可以在網站上或在這個櫃檯申請分期計劃。"
  },
  {
    "id": "dialogo-financas-quantas-prestacoes-sao-possiveis",
    "situacao": "financas",
    "order": 139,
    "pt": "Quantas prestações são possíveis?",
    "en": "How many instalments are possible?",
    "zhHans": "最多可以分几期？",
    "zhHant": "最多可以分幾期？"
  },
  {
    "id": "dialogo-financas-depende-do-valor-sem-juros-ate-certo-montante",
    "situacao": "financas",
    "order": 140,
    "pt": "Depende do valor. Sem juros até certo montante.",
    "en": "It depends on the amount. Interest-free up to a certain sum.",
    "zhHans": "取决于金额。一定额度内免利息。",
    "zhHant": "取決於金額。一定額度內免利息。"
  },
  {
    "id": "dialogo-financas-e-se-eu-atrasar-uma-prestacao",
    "situacao": "financas",
    "order": 141,
    "pt": "E se eu atrasar uma prestação?",
    "en": "And if I'm late on an instalment?",
    "zhHans": "如果我逾期一期会怎样？",
    "zhHant": "如果我逾期一期會怎樣？"
  },
  {
    "id": "dialogo-financas-o-plano-pode-ser-anulado-convem-pagar-a-tempo",
    "situacao": "financas",
    "order": 142,
    "pt": "O plano pode ser anulado — convém pagar a tempo.",
    "en": "The plan can be cancelled — best to pay on time.",
    "zhHans": "计划可能被取消——最好按时缴納。",
    "zhHant": "計劃可能被取消——最好按時繳納。"
  },
  {
    "id": "dialogo-correios-boa-tarde-a-minha-encomenda-esta-retida-na-alfandega",
    "situacao": "correios",
    "order": 143,
    "pt": "Boa tarde, a minha encomenda está retida na alfândega.",
    "en": "Good afternoon, my parcel is held at customs.",
    "zhHans": "下午好，我的包裹被海关扣了。",
    "zhHant": "下午好，我的包裹被海關扣了。"
  },
  {
    "id": "dialogo-correios-tem-o-numero-de-rastreio-e-a-notificacao",
    "situacao": "correios",
    "order": 144,
    "pt": "Tem o número de rastreio e a notificação?",
    "en": "Do you have the tracking number and the notification?",
    "zhHans": "您有追踪編号和通知单吗？",
    "zhHant": "您有追蹤編號和通知單嗎？"
  },
  {
    "id": "dialogo-correios-tenho-quanto-tenho-de-pagar-de-taxa",
    "situacao": "correios",
    "order": 145,
    "pt": "Tenho. Quanto tenho de pagar de taxa?",
    "en": "I do. How much do I have to pay in fees?",
    "zhHans": "有。我需要缴多少费用？",
    "zhHant": "有。我需要繳多少費用？"
  },
  {
    "id": "dialogo-correios-sao-15-euros-de-taxa-alfandegaria-mais-o-iva",
    "situacao": "correios",
    "order": 146,
    "pt": "São 15 euros de taxa alfandegária mais o IVA.",
    "en": "It's 15 euros customs fee plus VAT.",
    "zhHans": "关税15欧元，另加增值税。",
    "zhHant": "關稅15歐元，另加增值稅。"
  },
  {
    "id": "dialogo-correios-posso-pagar-online-ou-tem-de-ser-aqui",
    "situacao": "correios",
    "order": 147,
    "pt": "Posso pagar online ou tem de ser aqui?",
    "en": "Can I pay online or does it have to be here?",
    "zhHans": "可以在线缴费还是必须來这里？",
    "zhHant": "可以在線繳費還是必須來這裡？"
  },
  {
    "id": "dialogo-correios-pode-pagar-online-depois-a-entrega-segue-normalmente",
    "situacao": "correios",
    "order": 148,
    "pt": "Pode pagar online — depois a entrega segue normalmente.",
    "en": "You can pay online — then delivery proceeds normally.",
    "zhHans": "可以在线缴费——之后正常派送。",
    "zhHant": "可以在線繳費——之後正常派送。"
  },
  {
    "id": "dialogo-correios-perdi-a-entrega-de-ontem-o-que-faco",
    "situacao": "correios",
    "order": 149,
    "pt": "Perdi a entrega de ontem. O que faço?",
    "en": "I missed yesterday's delivery. What do I do?",
    "zhHans": "我昨天没赶上派送。该怎么办？",
    "zhHant": "我昨天沒趕上派送。該怎麼辦？"
  },
  {
    "id": "dialogo-correios-ha-uma-segunda-tentativa-amanha-ou-pode-levantar-na-lo",
    "situacao": "correios",
    "order": 150,
    "pt": "Há uma segunda tentativa amanhã, ou pode levantar na loja.",
    "en": "There's a second attempt tomorrow, or you can collect in store.",
    "zhHans": "明天有第二次派送，或者您可以到店自取。",
    "zhHant": "明天有第二次派送，或者您可以到店自取。"
  },
  {
    "id": "dialogo-correios-prefiro-o-cacifo-e-possivel",
    "situacao": "correios",
    "order": 151,
    "pt": "Prefiro o cacifo — é possível?",
    "en": "I'd prefer the locker — is that possible?",
    "zhHans": "我更想用快递柜——可以吗？",
    "zhHant": "我更想用快遞櫃——可以嗎？"
  },
  {
    "id": "dialogo-correios-sim-altere-na-app-com-o-codigo-de-rastreio",
    "situacao": "correios",
    "order": 152,
    "pt": "Sim, altere na app com o código de rastreio.",
    "en": "Yes, change it in the app with the tracking number.",
    "zhHans": "可以，在应用里用追踪編号修改。",
    "zhHant": "可以，在應用裡用追蹤編號修改。"
  },
  {
    "id": "dialogo-correios-quanto-tempo-fica-no-cacifo",
    "situacao": "correios",
    "order": 153,
    "pt": "Quanto tempo fica no cacifo?",
    "en": "How long does it stay in the locker?",
    "zhHans": "包裹在快递柜里放多久？",
    "zhHant": "包裹在快遞櫃裡放多久？"
  },
  {
    "id": "dialogo-correios-tres-dias-uteis-recebe-um-codigo-por-sms",
    "situacao": "correios",
    "order": 154,
    "pt": "Três dias úteis. Recebe um código por SMS.",
    "en": "Three working days. You'll get a code by SMS.",
    "zhHans": "三个工作日。您会收到短信取件码。",
    "zhHant": "三個工作日。您會收到短信取件碼。"
  },
  {
    "id": "dialogo-junta-de-freguesia-bom-dia-ha-espaco-cidadao-aqui-na-junta",
    "situacao": "junta_de_freguesia",
    "order": 155,
    "pt": "Bom dia, há Espaço Cidadão aqui na junta?",
    "en": "Good morning, is there a Citizen's Desk here at the junta?",
    "zhHans": "早上好，这里有公民服务站吗？",
    "zhHant": "早上好，這裡有公民服務站嗎？"
  },
  {
    "id": "dialogo-junta-de-freguesia-ha-sim-o-que-precisa-de-tratar",
    "situacao": "junta_de_freguesia",
    "order": 156,
    "pt": "Há, sim. O que precisa de tratar?",
    "en": "Yes, there is. What do you need to do?",
    "zhHans": "有的。您需要办什么？",
    "zhHant": "有的。您需要辦什麼？"
  },
  {
    "id": "dialogo-junta-de-freguesia-queria-ativar-a-chave-movel-digital",
    "situacao": "junta_de_freguesia",
    "order": 157,
    "pt": "Queria ativar a Chave Móvel Digital.",
    "en": "I'd like to activate the Digital Mobile Key.",
    "zhHans": "我想开通数字移动密钥。",
    "zhHant": "我想開通數字移動密鑰。"
  },
  {
    "id": "dialogo-junta-de-freguesia-traga-o-titulo-de-residencia-e-o-telemovel-demora-dez-",
    "situacao": "junta_de_freguesia",
    "order": 158,
    "pt": "Traga o título de residência e o telemóvel. Demora dez minutos.",
    "en": "Bring your residence permit and phone. It takes ten minutes.",
    "zhHans": "带居留证和手机來。十分钟就好。",
    "zhHant": "帶居留證和手機來。十分鐘就好。"
  },
  {
    "id": "dialogo-junta-de-freguesia-tambem-fazem-renovacao-do-cartao-de-cidadao",
    "situacao": "junta_de_freguesia",
    "order": 159,
    "pt": "Também fazem renovação do cartão de cidadão?",
    "en": "Do you also renew citizen cards?",
    "zhHans": "你们也办公民卡续期吗？",
    "zhHant": "你們也辦公民卡續期嗎？"
  },
  {
    "id": "dialogo-junta-de-freguesia-fazemos-com-marcacao-previa",
    "situacao": "junta_de_freguesia",
    "order": 160,
    "pt": "Fazemos, com marcação prévia.",
    "en": "We do, by prior appointment.",
    "zhHans": "可以，需要提前预约。",
    "zhHant": "可以，需要提前預約。"
  },
  {
    "id": "dialogo-junta-de-freguesia-preciso-de-um-atestado-de-agregado-familiar-para-o-rea",
    "situacao": "junta_de_freguesia",
    "order": 161,
    "pt": "Preciso de um atestado de agregado familiar para o reagrupamento.",
    "en": "I need a household certificate for family reunification.",
    "zhHans": "我需要一份家庭成员证明办家庭团聚。",
    "zhHant": "我需要一份家庭成員證明辦家庭團聚。"
  },
  {
    "id": "dialogo-junta-de-freguesia-quem-faz-parte-do-agregado",
    "situacao": "junta_de_freguesia",
    "order": 162,
    "pt": "Quem faz parte do agregado?",
    "en": "Who is part of the household?",
    "zhHans": "家庭成员有哪些人？",
    "zhHant": "家庭成員有哪些人？"
  },
  {
    "id": "dialogo-junta-de-freguesia-eu-a-minha-mulher-e-os-nossos-dois-filhos",
    "situacao": "junta_de_freguesia",
    "order": 163,
    "pt": "Eu, a minha mulher e os nossos dois filhos.",
    "en": "Me, my wife and our two children.",
    "zhHans": "我、我妻子和我们的两个孩子。",
    "zhHant": "我、我妻子和我們的兩個孩子。"
  },
  {
    "id": "dialogo-junta-de-freguesia-traga-os-documentos-de-todos-e-o-contrato-de-arrendame",
    "situacao": "junta_de_freguesia",
    "order": 164,
    "pt": "Traga os documentos de todos e o contrato de arrendamento.",
    "en": "Bring everyone's documents and the rental contract.",
    "zhHans": "带上所有人的证件和租赁合同。",
    "zhHant": "帶上所有人的證件和租賃合同。"
  },
  {
    "id": "dialogo-junta-de-freguesia-o-atestado-e-valido-por-quanto-tempo",
    "situacao": "junta_de_freguesia",
    "order": 165,
    "pt": "O atestado é válido por quanto tempo?",
    "en": "How long is the certificate valid?",
    "zhHans": "证明有效期多久？",
    "zhHant": "證明有效期多久？"
  },
  {
    "id": "dialogo-junta-de-freguesia-tres-meses-a-partir-da-emissao",
    "situacao": "junta_de_freguesia",
    "order": 166,
    "pt": "Três meses a partir da emissão.",
    "en": "Three months from issuance.",
    "zhHans": "自签发起三个月。",
    "zhHant": "自簽發起三個月。"
  },
  {
    "id": "dialogo-saude-boa-noite-o-meu-filho-tem-febre-alta-ha-dois-dias",
    "situacao": "saude",
    "order": 167,
    "pt": "Boa noite, o meu filho tem febre alta há dois dias.",
    "en": "Good evening, my son has had a high fever for two days.",
    "zhHans": "晚上好，我儿子高燒两天了。",
    "zhHant": "晚上好，我兒子高燒兩天了。"
  },
  {
    "id": "dialogo-saude-vamos-fazer-a-triagem-que-idade-tem-a-crianca",
    "situacao": "saude",
    "order": 168,
    "pt": "Vamos fazer a triagem. Que idade tem a criança?",
    "en": "We'll do triage. How old is the child?",
    "zhHans": "我们先分诊。孩子多大？",
    "zhHant": "我們先分診。孩子多大？"
  },
  {
    "id": "dialogo-saude-tem-quatro-anos-tambem-tem-tosse-e-nao-come",
    "situacao": "saude",
    "order": 169,
    "pt": "Tem quatro anos. Também tem tosse e não come.",
    "en": "He's four. He also has a cough and isn't eating.",
    "zhHans": "四岁。还咳嗽，不肯吃东西。",
    "zhHant": "四歲。還咳嗽，不肯吃東西。"
  },
  {
    "id": "dialogo-saude-tome-esta-pulseira-amarela-e-aguarde-ser-chamado",
    "situacao": "saude",
    "order": 170,
    "pt": "Tome esta pulseira amarela e aguarde ser chamado.",
    "en": "Take this yellow wristband and wait to be called.",
    "zhHans": "拿好这个黄色手环，等叫号。",
    "zhHant": "拿好這個黃色手環，等叫號。"
  },
  {
    "id": "dialogo-saude-e-alergico-a-algum-medicamento",
    "situacao": "saude",
    "order": 171,
    "pt": "É alérgico a algum medicamento?",
    "en": "Is he allergic to any medicine?",
    "zhHans": "他对什么药物过敏吗？",
    "zhHant": "他對什麼藥物過敏嗎？"
  },
  {
    "id": "dialogo-saude-sim-a-penicilina-esta-escrito-no-boletim",
    "situacao": "saude",
    "order": 172,
    "pt": "Sim, à penicilina. Está escrito no boletim.",
    "en": "Yes, to penicillin. It's written in his health booklet.",
    "zhHans": "对，对青霉素过敏。健康手册上有写。",
    "zhHant": "對，對青黴素過敏。健康手冊上有寫。"
  },
  {
    "id": "dialogo-saude-boa-tarde-venho-aviar-esta-receita",
    "situacao": "saude",
    "order": 173,
    "pt": "Boa tarde, venho aviar esta receita.",
    "en": "Good afternoon, I've come to fill this prescription.",
    "zhHans": "下午好，我來取这个处方的药。",
    "zhHant": "下午好，我來取這個處方的藥。"
  },
  {
    "id": "dialogo-saude-tem-o-codigo-da-receita-no-telemovel",
    "situacao": "saude",
    "order": 174,
    "pt": "Tem o código da receita no telemóvel?",
    "en": "Do you have the prescription code on your phone?",
    "zhHans": "您手机上有处方码吗？",
    "zhHant": "您手機上有處方碼嗎？"
  },
  {
    "id": "dialogo-saude-tenho-chegou-por-sms-ha-generico",
    "situacao": "saude",
    "order": 175,
    "pt": "Tenho, chegou por SMS. Há genérico?",
    "en": "I do, it came by SMS. Is there a generic?",
    "zhHans": "有，短信收到的。有仿制药吗？",
    "zhHant": "有，短信收到的。有仿製藥嗎？"
  },
  {
    "id": "dialogo-saude-ha-e-fica-mais-barato-toma-um-comprimido-de-8-em-8-hor",
    "situacao": "saude",
    "order": 176,
    "pt": "Há, e fica mais barato. Toma um comprimido de 8 em 8 horas.",
    "en": "There is, and it's cheaper. Take one tablet every 8 hours.",
    "zhHans": "有，而且更便宜。每8小时服一片。",
    "zhHant": "有，而且更便宜。每8小時服一片。"
  },
  {
    "id": "dialogo-saude-com-ou-sem-comida",
    "situacao": "saude",
    "order": 177,
    "pt": "Com ou sem comida?",
    "en": "With or without food?",
    "zhHans": "饭前还是饭后服？",
    "zhHant": "飯前還是飯後服？"
  },
  {
    "id": "dialogo-saude-de-preferencia-depois-das-refeicoes",
    "situacao": "saude",
    "order": 178,
    "pt": "De preferência depois das refeições.",
    "en": "Preferably after meals.",
    "zhHans": "最好饭后服用。",
    "zhHant": "最好飯後服用。"
  },
  {
    "id": "dialogo-aima-bom-dia-queria-saber-o-estado-do-meu-processo",
    "situacao": "aima",
    "order": 179,
    "pt": "Bom dia, queria saber o estado do meu processo.",
    "en": "Good morning, I'd like to know the status of my case.",
    "zhHans": "早上好，我想查询我的案件状态。",
    "zhHant": "早上好，我想查詢我的案件狀態。"
  },
  {
    "id": "dialogo-aima-tem-o-numero-de-processo",
    "situacao": "aima",
    "order": 180,
    "pt": "Tem o número de processo?",
    "en": "Do you have the case number?",
    "zhHans": "您有案件編号吗？",
    "zhHant": "您有案件編號嗎？"
  },
  {
    "id": "dialogo-aima-tenho-esta-neste-comprovativo",
    "situacao": "aima",
    "order": 181,
    "pt": "Tenho, está neste comprovativo.",
    "en": "Yes, it's on this receipt.",
    "zhHans": "有，在这张憑证上。",
    "zhHant": "有，在這張憑證上。"
  },
  {
    "id": "dialogo-aima-o-processo-esta-em-analise-falta-um-documento-o-regist",
    "situacao": "aima",
    "order": 182,
    "pt": "O processo está em análise. Falta um documento: o registo criminal apostilado.",
    "en": "The case is under review. One document is missing: the apostilled criminal record.",
    "zhHans": "案件正在审核。缺一份文件：经海牙认证的无犯罪记录。",
    "zhHant": "案件正在審核。缺一份文件：經海牙認證的無犯罪記錄。"
  },
  {
    "id": "dialogo-aima-posso-entregar-por-email-ou-tem-de-ser-presencial",
    "situacao": "aima",
    "order": 183,
    "pt": "Posso entregar por email ou tem de ser presencial?",
    "en": "Can I submit it by email or must it be in person?",
    "zhHans": "可以邮件提交还是必须到场？",
    "zhHant": "可以郵件提交還是必須到場？"
  },
  {
    "id": "dialogo-aima-pode-carregar-no-portal-com-o-numero-de-processo",
    "situacao": "aima",
    "order": 184,
    "pt": "Pode carregar no portal, com o número de processo.",
    "en": "You can upload it on the portal, with your case number.",
    "zhHans": "可以用案件編号在网站上上传。",
    "zhHant": "可以用案件編號在網站上上傳。"
  },
  {
    "id": "dialogo-aima-quero-pedir-a-nacionalidade-que-documentos-preciso",
    "situacao": "aima",
    "order": 185,
    "pt": "Quero pedir a nacionalidade. Que documentos preciso?",
    "en": "I want to apply for citizenship. What documents do I need?",
    "zhHans": "我想申请入籍。需要哪些文件？",
    "zhHant": "我想申請入籍。需要哪些文件？"
  },
  {
    "id": "dialogo-aima-certidao-de-nascimento-apostilada-e-traduzida-e-regist",
    "situacao": "aima",
    "order": 186,
    "pt": "Certidão de nascimento apostilada e traduzida, e registo criminal.",
    "en": "Apostilled and translated birth certificate, and criminal record.",
    "zhHans": "经海牙认证并翻译的出生证明，以及无犯罪记录。",
    "zhHant": "經海牙認證並翻譯的出生證明，以及無犯罪記錄。"
  },
  {
    "id": "dialogo-aima-a-traducao-tem-de-ser-certificada",
    "situacao": "aima",
    "order": 187,
    "pt": "A tradução tem de ser certificada?",
    "en": "Does the translation have to be certified?",
    "zhHans": "翻译必须是认证的吗？",
    "zhHant": "翻譯必須是認證的嗎？"
  },
  {
    "id": "dialogo-aima-sim-feita-por-tradutor-certificado-ou-notario",
    "situacao": "aima",
    "order": 188,
    "pt": "Sim, feita por tradutor certificado ou notário.",
    "en": "Yes, done by a certified translator or notary.",
    "zhHans": "是的，由认证翻译或公证处出具。",
    "zhHant": "是的，由認證翻譯或公證處出具。"
  },
  {
    "id": "dialogo-aima-e-preciso-de-prova-de-residencia-legal-de-cinco-anos",
    "situacao": "aima",
    "order": 189,
    "pt": "E preciso de prova de residência legal de cinco anos?",
    "en": "And do I need proof of five years' legal residence?",
    "zhHans": "还需要五年合法居留证明吗？",
    "zhHant": "還需要五年合法居留證明嗎？"
  },
  {
    "id": "dialogo-aima-sim-contam-os-anos-com-autorizacao-de-residencia-valid",
    "situacao": "aima",
    "order": 190,
    "pt": "Sim, contam os anos com autorização de residência válida.",
    "en": "Yes, years with a valid residence permit count.",
    "zhHans": "是的，持有效居留許可的年份都计算在内。",
    "zhHant": "是的，持有效居留許可的年份都計算在內。"
  },
  {
    "id": "dialogo-escola-boa-tarde-sou-a-mae-do-wei-da-turma-5-b",
    "situacao": "escola",
    "order": 191,
    "pt": "Boa tarde, sou a mãe do Wei, da turma 5.ºB.",
    "en": "Good afternoon, I'm Wei's mother, from class 5B.",
    "zhHans": "下午好，我是5年级B班Wei的媽媽。",
    "zhHant": "下午好，我是5年級B班Wei的媽媽。"
  },
  {
    "id": "dialogo-escola-muito-prazer-o-wei-esta-a-adaptar-se-bem",
    "situacao": "escola",
    "order": 192,
    "pt": "Muito prazer. O Wei está a adaptar-se bem.",
    "en": "Nice to meet you. Wei is adapting well.",
    "zhHans": "幸会。Wei适应得不错。",
    "zhHant": "幸會。Wei適應得不錯。"
  },
  {
    "id": "dialogo-escola-ele-ainda-tem-dificuldades-com-o-portugues",
    "situacao": "escola",
    "order": 193,
    "pt": "Ele ainda tem dificuldades com o português.",
    "en": "He still struggles with Portuguese.",
    "zhHans": "他葡语还是有困难。",
    "zhHant": "他葡語還是有困難。"
  },
  {
    "id": "dialogo-escola-vou-propor-apoio-de-plnm-aulas-extra-de-lingua",
    "situacao": "escola",
    "order": 194,
    "pt": "Vou propor apoio de PLNM — aulas extra de língua.",
    "en": "I'll propose PLNM support — extra language classes.",
    "zhHans": "我会申请PLNM輔导——额外的语言课。",
    "zhHant": "我會申請PLNM輔導——額外的語言課。"
  },
  {
    "id": "dialogo-escola-como-acompanho-os-trabalhos-de-casa",
    "situacao": "escola",
    "order": 195,
    "pt": "Como acompanho os trabalhos de casa?",
    "en": "How do I follow his homework?",
    "zhHans": "我怎么了解他的作业情况？",
    "zhHant": "我怎麼了解他的作業情況？"
  },
  {
    "id": "dialogo-escola-pela-caderneta-do-aluno-e-pelo-portal-da-escola",
    "situacao": "escola",
    "order": 196,
    "pt": "Pela caderneta do aluno e pelo portal da escola.",
    "en": "Through the student book and the school portal.",
    "zhHans": "通过学生联络手册和学校网站。",
    "zhHant": "通過學生聯絡手冊和學校網站。"
  },
  {
    "id": "dialogo-escola-bom-dia-venho-justificar-a-falta-da-minha-filha",
    "situacao": "escola",
    "order": 197,
    "pt": "Bom dia, venho justificar a falta da minha filha.",
    "en": "Good morning, I've come to justify my daughter's absence.",
    "zhHans": "早上好，我來为女儿的缺勤提交说明。",
    "zhHant": "早上好，我來為女兒的缺勤提交說明。"
  },
  {
    "id": "dialogo-escola-qual-foi-o-motivo",
    "situacao": "escola",
    "order": 198,
    "pt": "Qual foi o motivo?",
    "en": "What was the reason?",
    "zhHans": "缺勤原因是什么？",
    "zhHant": "缺勤原因是什麼？"
  },
  {
    "id": "dialogo-escola-esteve-doente-trago-o-atestado-medico",
    "situacao": "escola",
    "order": 199,
    "pt": "Esteve doente. Trago o atestado médico.",
    "en": "She was ill. I have the medical certificate.",
    "zhHans": "她生病了。我带了医生证明。",
    "zhHant": "她生病了。我帶了醫生證明。"
  },
  {
    "id": "dialogo-escola-perfeito-entregue-ao-diretor-de-turma-ou-registe-no-po",
    "situacao": "escola",
    "order": 200,
    "pt": "Perfeito. Entregue ao diretor de turma ou registe no portal.",
    "en": "Perfect. Give it to the form tutor or log it on the portal.",
    "zhHans": "好的。交给班主任或在网站上登记。",
    "zhHant": "好的。交給班主任或在網站上登記。"
  },
  {
    "id": "dialogo-escola-aproveito-para-carregar-o-cartao-do-almoco",
    "situacao": "escola",
    "order": 201,
    "pt": "Aproveito para carregar o cartão do almoço.",
    "en": "While I'm here, I'll top up her lunch card.",
    "zhHans": "顺便给她的餐卡充值。",
    "zhHant": "順便給她的餐卡充值。"
  },
  {
    "id": "dialogo-escola-pode-carregar-aqui-na-secretaria-ou-por-multibanco",
    "situacao": "escola",
    "order": 202,
    "pt": "Pode carregar aqui na secretaria ou por multibanco.",
    "en": "You can top up here at the office or by ATM reference.",
    "zhHans": "可以在教务处充，也可以通过柜员机缴费。",
    "zhHant": "可以在教務處充，也可以通過櫃員機繳費。"
  },
  {
    "id": "dialogo-iefp-bom-dia-o-meu-patrao-nao-me-pagou-o-ultimo-mes",
    "situacao": "iefp",
    "order": 203,
    "pt": "Bom dia, o meu patrão não me pagou o último mês.",
    "en": "Good morning, my boss didn't pay me last month's wages.",
    "zhHans": "早上好，老板没付我上个月的工资。",
    "zhHant": "早上好，老闆沒付我上個月的工資。"
  },
  {
    "id": "dialogo-iefp-tem-contrato-de-trabalho-e-recibos-de-vencimento",
    "situacao": "iefp",
    "order": 204,
    "pt": "Tem contrato de trabalho e recibos de vencimento?",
    "en": "Do you have a work contract and payslips?",
    "zhHans": "您有劳动合同和工资单吗？",
    "zhHant": "您有勞動合同和工資單嗎？"
  },
  {
    "id": "dialogo-iefp-tenho-contrato-mas-nunca-recebi-recibos",
    "situacao": "iefp",
    "order": 205,
    "pt": "Tenho contrato, mas nunca recebi recibos.",
    "en": "I have a contract, but I never received payslips.",
    "zhHans": "有合同，但从没拿到过工资单。",
    "zhHant": "有合同，但從沒拿到過工資單。"
  },
  {
    "id": "dialogo-iefp-isso-e-irregular-pode-apresentar-queixa-na-act",
    "situacao": "iefp",
    "order": 206,
    "pt": "Isso é irregular. Pode apresentar queixa na ACT.",
    "en": "That's irregular. You can file a complaint with the ACT.",
    "zhHans": "这不合规。您可以向劳动监察局投诉。",
    "zhHant": "這不合規。您可以向勞動監察局投訴。"
  },
  {
    "id": "dialogo-iefp-a-queixa-e-anonima-tenho-medo-de-perder-o-emprego",
    "situacao": "iefp",
    "order": 207,
    "pt": "A queixa é anónima? Tenho medo de perder o emprego.",
    "en": "Is the complaint anonymous? I'm afraid of losing my job.",
    "zhHans": "投诉是匿名的吗？我怕丟了工作。",
    "zhHant": "投訴是匿名的嗎？我怕丟了工作。"
  },
  {
    "id": "dialogo-iefp-pode-pedir-confidencialidade-e-o-despedimento-por-quei",
    "situacao": "iefp",
    "order": 208,
    "pt": "Pode pedir confidencialidade. E o despedimento por queixa é ilegal.",
    "en": "You can request confidentiality. And dismissal for complaining is illegal.",
    "zhHans": "可以要求保密。而且因投诉而解雇是违法的。",
    "zhHant": "可以要求保密。而且因投訴而解僱是違法的。"
  },
  {
    "id": "dialogo-iefp-queria-inscrever-me-num-curso-de-formacao",
    "situacao": "iefp",
    "order": 209,
    "pt": "Queria inscrever-me num curso de formação.",
    "en": "I'd like to enrol in a training course.",
    "zhHans": "我想報名參加培训课程。",
    "zhHant": "我想報名參加培訓課程。"
  },
  {
    "id": "dialogo-iefp-ha-vagas-em-restauracao-limpeza-industrial-e-portugues",
    "situacao": "iefp",
    "order": 210,
    "pt": "Há vagas em restauração, limpeza industrial e português para estrangeiros.",
    "en": "There are places in catering, industrial cleaning and Portuguese for foreigners.",
    "zhHans": "餐饮、工业清洁和对外葡语课程都有名额。",
    "zhHant": "餐飲、工業清潔和對外葡語課程都有名額。"
  },
  {
    "id": "dialogo-iefp-o-curso-de-portugues-e-pago",
    "situacao": "iefp",
    "order": 211,
    "pt": "O curso de português é pago?",
    "en": "Is the Portuguese course paid?",
    "zhHans": "葡语课程收费吗？",
    "zhHant": "葡語課程收費嗎？"
  },
  {
    "id": "dialogo-iefp-e-gratuito-e-pode-dar-acesso-a-uma-bolsa-de-formacao",
    "situacao": "iefp",
    "order": 212,
    "pt": "É gratuito, e pode dar acesso a uma bolsa de formação.",
    "en": "It's free, and may include a training allowance.",
    "zhHans": "免费，还可能有培训补贴。",
    "zhHant": "免費，還可能有培訓補貼。"
  },
  {
    "id": "dialogo-iefp-que-horario-tem-trabalho-durante-o-dia",
    "situacao": "iefp",
    "order": 213,
    "pt": "Que horário tem? Trabalho durante o dia.",
    "en": "What's the schedule? I work during the day.",
    "zhHans": "上课时间是什么？我白天要上班。",
    "zhHant": "上課時間是什麼？我白天要上班。"
  },
  {
    "id": "dialogo-iefp-ha-turmas-pos-laborais-a-noite",
    "situacao": "iefp",
    "order": 214,
    "pt": "Há turmas pós-laborais, à noite.",
    "en": "There are after-work classes, in the evening.",
    "zhHans": "有晚间的下班后班次。",
    "zhHant": "有晚間的下班後班次。"
  },
  {
    "id": "dialogo-seguranca-social-bom-dia-a-minha-filha-nasceu-na-semana-passada-quero-p",
    "situacao": "seguranca_social",
    "order": 215,
    "pt": "Bom dia, a minha filha nasceu na semana passada. Quero pedir a licença parental.",
    "en": "Good morning, my daughter was born last week. I want to apply for parental leave.",
    "zhHans": "早上好，我女儿上周出生了。我想申请育儿假。",
    "zhHant": "早上好，我女兒上週出生了。我想申請育兒假。"
  },
  {
    "id": "dialogo-seguranca-social-parabens-o-nascimento-ja-esta-registado",
    "situacao": "seguranca_social",
    "order": 216,
    "pt": "Parabéns! O nascimento já está registado?",
    "en": "Congratulations! Is the birth already registered?",
    "zhHans": "恭喜！出生已经登记了吗？",
    "zhHant": "恭喜！出生已經登記了嗎？"
  },
  {
    "id": "dialogo-seguranca-social-ja-foi-registado-na-maternidade",
    "situacao": "seguranca_social",
    "order": 217,
    "pt": "Já, foi registado na maternidade.",
    "en": "Yes, it was registered at the maternity hospital.",
    "zhHans": "登记了，在妇产医院办的。",
    "zhHant": "登記了，在婦產醫院辦的。"
  },
  {
    "id": "dialogo-seguranca-social-entao-pode-submeter-o-requerimento-na-seguranca-social",
    "situacao": "seguranca_social",
    "order": 218,
    "pt": "Então pode submeter o requerimento na Segurança Social Direta.",
    "en": "Then you can submit the application on the online portal.",
    "zhHans": "那您可以在社保线上平台提交申请。",
    "zhHant": "那您可以在社保線上平台提交申請。"
  },
  {
    "id": "dialogo-seguranca-social-quanto-tempo-de-licenca-temos",
    "situacao": "seguranca_social",
    "order": 219,
    "pt": "Quanto tempo de licença temos?",
    "en": "How much leave do we get?",
    "zhHans": "我们有多长的假期？",
    "zhHant": "我們有多長的假期？"
  },
  {
    "id": "dialogo-seguranca-social-depende-da-partilha-entre-os-pais-o-simulador-do-porta",
    "situacao": "seguranca_social",
    "order": 220,
    "pt": "Depende da partilha entre os pais — o simulador do portal mostra as opções.",
    "en": "It depends on how parents share it — the portal's simulator shows the options.",
    "zhHans": "取决于父母如何分配——平台的模擬器会显示各种方案。",
    "zhHant": "取決於父母如何分配——平台的模擬器會顯示各種方案。"
  },
  {
    "id": "dialogo-seguranca-social-sou-trabalhadora-independente-quando-entrego-a-declara",
    "situacao": "seguranca_social",
    "order": 221,
    "pt": "Sou trabalhadora independente. Quando entrego a declaração trimestral?",
    "en": "I'm self-employed. When do I file the quarterly declaration?",
    "zhHans": "我是自雇人士。季度申報什么时候交？",
    "zhHant": "我是自僱人士。季度申報什麼時候交？"
  },
  {
    "id": "dialogo-seguranca-social-em-janeiro-abril-julho-e-outubro-na-seguranca-social-d",
    "situacao": "seguranca_social",
    "order": 222,
    "pt": "Em janeiro, abril, julho e outubro, na Segurança Social Direta.",
    "en": "In January, April, July and October, on the online portal.",
    "zhHans": "一月、四月、七月和十月，在社保线上平台。",
    "zhHant": "一月、四月、七月和十月，在社保線上平台。"
  },
  {
    "id": "dialogo-seguranca-social-comecei-a-atividade-ha-tres-meses-ja-pago-contribuicoe",
    "situacao": "seguranca_social",
    "order": 223,
    "pt": "Comecei a atividade há três meses. Já pago contribuições?",
    "en": "I started my activity three months ago. Do I pay contributions already?",
    "zhHans": "我三个月前开业。现在就要交供款吗？",
    "zhHant": "我三個月前開業。現在就要交供款嗎？"
  },
  {
    "id": "dialogo-seguranca-social-no-primeiro-ano-tem-isencao-comeca-a-pagar-depois",
    "situacao": "seguranca_social",
    "order": 224,
    "pt": "No primeiro ano tem isenção. Começa a pagar depois.",
    "en": "In the first year you're exempt. You start paying afterwards.",
    "zhHans": "第一年豁免。之后才开始缴納。",
    "zhHant": "第一年豁免。之後才開始繳納。"
  },
  {
    "id": "dialogo-seguranca-social-e-se-um-mes-nao-tiver-rendimentos",
    "situacao": "seguranca_social",
    "order": 225,
    "pt": "E se um mês não tiver rendimentos?",
    "en": "And if one month I have no income?",
    "zhHans": "如果某个月没有收入呢？",
    "zhHant": "如果某個月沒有收入呢？"
  },
  {
    "id": "dialogo-seguranca-social-declara-na-mesma-o-valor-ajusta-se-ao-que-declarar",
    "situacao": "seguranca_social",
    "order": 226,
    "pt": "Declara na mesma — o valor ajusta-se ao que declarar.",
    "en": "You still declare — the amount adjusts to what you report.",
    "zhHans": "照样申報——金额按您申報的收入调整。",
    "zhHant": "照樣申報——金額按您申報的收入調整。"
  },
  {
    "id": "dialogo-arrendamento-boa-tarde-o-esquentador-esta-avariado-nao-temos-agua-q",
    "situacao": "arrendamento",
    "order": 227,
    "pt": "Boa tarde, o esquentador está avariado. Não temos água quente.",
    "en": "Good afternoon, the water heater is broken. We have no hot water.",
    "zhHans": "下午好，热水器坏了。我们没有热水。",
    "zhHant": "下午好，熱水器壞了。我們沒有熱水。"
  },
  {
    "id": "dialogo-arrendamento-desde-quando",
    "situacao": "arrendamento",
    "order": 228,
    "pt": "Desde quando?",
    "en": "Since when?",
    "zhHans": "从什么时候开始的？",
    "zhHant": "從什麼時候開始的？"
  },
  {
    "id": "dialogo-arrendamento-desde-ontem-e-tambem-ha-bolor-no-quarto-na-parede-da-j",
    "situacao": "arrendamento",
    "order": 229,
    "pt": "Desde ontem. E também há bolor no quarto, na parede da janela.",
    "en": "Since yesterday. And there's also mould in the bedroom, on the window wall.",
    "zhHans": "从昨天开始。另外臥室窗边墙上还有霉菌。",
    "zhHant": "從昨天開始。另外臥室窗邊牆上還有霉菌。"
  },
  {
    "id": "dialogo-arrendamento-vou-mandar-la-o-tecnico-esta-semana",
    "situacao": "arrendamento",
    "order": 230,
    "pt": "Vou mandar lá o técnico esta semana.",
    "en": "I'll send the technician this week.",
    "zhHans": "我这周安排技師过去。",
    "zhHant": "我這週安排技師過去。"
  },
  {
    "id": "dialogo-arrendamento-a-reparacao-e-por-conta-do-senhorio-certo",
    "situacao": "arrendamento",
    "order": 231,
    "pt": "A reparação é por conta do senhorio, certo?",
    "en": "The repair is at the landlord's expense, right?",
    "zhHans": "维修费由房东承担，对吧？",
    "zhHant": "維修費由房東承擔，對吧？"
  },
  {
    "id": "dialogo-arrendamento-sim-avarias-do-equipamento-sao-responsabilidade-minha",
    "situacao": "arrendamento",
    "order": 232,
    "pt": "Sim, avarias do equipamento são responsabilidade minha.",
    "en": "Yes, equipment failures are my responsibility.",
    "zhHans": "对，设備故障由我负责。",
    "zhHant": "對，設備故障由我負責。"
  },
  {
    "id": "dialogo-arrendamento-queria-avisar-que-vou-sair-da-casa-no-fim-do-contrato",
    "situacao": "arrendamento",
    "order": 233,
    "pt": "Queria avisar que vou sair da casa no fim do contrato.",
    "en": "I'd like to give notice that I'm leaving at the end of the contract.",
    "zhHans": "我想通知您，合同到期后我要退租。",
    "zhHant": "我想通知您，合同到期後我要退租。"
  },
  {
    "id": "dialogo-arrendamento-esta-bem-tem-de-enviar-a-denuncia-por-carta-registada",
    "situacao": "arrendamento",
    "order": 234,
    "pt": "Está bem. Tem de enviar a denúncia por carta registada.",
    "en": "Alright. You must send the termination notice by registered letter.",
    "zhHans": "好的。您需要用挂号信寄解约通知。",
    "zhHant": "好的。您需要用掛號信寄解約通知。"
  },
  {
    "id": "dialogo-arrendamento-com-quanto-tempo-de-antecedencia",
    "situacao": "arrendamento",
    "order": 235,
    "pt": "Com quanto tempo de antecedência?",
    "en": "With how much notice?",
    "zhHans": "要提前多久？",
    "zhHant": "要提前多久？"
  },
  {
    "id": "dialogo-arrendamento-depende-da-duracao-do-contrato-verifique-a-clausula",
    "situacao": "arrendamento",
    "order": 236,
    "pt": "Depende da duração do contrato — verifique a cláusula.",
    "en": "It depends on the contract length — check the clause.",
    "zhHans": "取决于合同期限——请查看相关条款。",
    "zhHant": "取決於合同期限——請查看相關條款。"
  },
  {
    "id": "dialogo-arrendamento-e-a-caucao-quando-e-devolvida",
    "situacao": "arrendamento",
    "order": 237,
    "pt": "E a caução? Quando é devolvida?",
    "en": "And the deposit? When is it returned?",
    "zhHans": "那押金什么时候退？",
    "zhHant": "那押金什麼時候退？"
  },
  {
    "id": "dialogo-arrendamento-depois-da-vistoria-se-a-casa-estiver-como-no-inventari",
    "situacao": "arrendamento",
    "order": 238,
    "pt": "Depois da vistoria, se a casa estiver como no inventário.",
    "en": "After the inspection, if the flat matches the inventory.",
    "zhHans": "验房之后，如果房子和物品清单一致就退。",
    "zhHant": "驗房之後，如果房子和物品清單一致就退。"
  },
  {
    "id": "dialogo-transportes-desculpe-de-que-linha-parte-o-comboio-para-o-porto",
    "situacao": "transportes",
    "order": 239,
    "pt": "Desculpe, de que linha parte o comboio para o Porto?",
    "en": "Excuse me, which platform does the Porto train leave from?",
    "zhHans": "请问去波爾图的火车从哪个站台出发？",
    "zhHant": "請問去波爾圖的火車從哪個站台出發？"
  },
  {
    "id": "dialogo-transportes-da-linha-5-mas-esta-com-dez-minutos-de-atraso",
    "situacao": "transportes",
    "order": 240,
    "pt": "Da linha 5. Mas está com dez minutos de atraso.",
    "en": "From platform 5. But it's ten minutes delayed.",
    "zhHans": "5号站台。不过晚点十分钟。",
    "zhHant": "5號站台。不過晚點十分鐘。"
  },
  {
    "id": "dialogo-transportes-tenho-de-fazer-transbordo",
    "situacao": "transportes",
    "order": 241,
    "pt": "Tenho de fazer transbordo?",
    "en": "Do I need to change trains?",
    "zhHans": "我需要换乘吗？",
    "zhHant": "我需要換乘嗎？"
  },
  {
    "id": "dialogo-transportes-nao-este-e-direto-tem-lugar-reservado",
    "situacao": "transportes",
    "order": 242,
    "pt": "Não, este é direto. Tem lugar reservado?",
    "en": "No, this one is direct. Do you have a reserved seat?",
    "zhHans": "不用，这班是直达。您有预留座位吗？",
    "zhHant": "不用，這班是直達。您有預留座位嗎？"
  },
  {
    "id": "dialogo-transportes-tenho-carruagem-3-lugar-42",
    "situacao": "transportes",
    "order": 243,
    "pt": "Tenho, carruagem 3, lugar 42.",
    "en": "Yes, carriage 3, seat 42.",
    "zhHans": "有，3号车廂42座。",
    "zhHant": "有，3號車廂42座。"
  },
  {
    "id": "dialogo-transportes-boa-tarde-os-titulos-de-transporte-por-favor",
    "situacao": "transportes",
    "order": 244,
    "pt": "Boa tarde, os títulos de transporte, por favor.",
    "en": "Good afternoon, tickets please.",
    "zhHans": "下午好，请出示车票。",
    "zhHant": "下午好，請出示車票。"
  },
  {
    "id": "dialogo-transportes-aqui-esta-o-meu-passe",
    "situacao": "transportes",
    "order": 245,
    "pt": "Aqui está o meu passe.",
    "en": "Here's my pass.",
    "zhHans": "这是我的月票。",
    "zhHant": "這是我的月票。"
  },
  {
    "id": "dialogo-transportes-este-passe-nao-foi-validado-ao-entrar",
    "situacao": "transportes",
    "order": 246,
    "pt": "Este passe não foi validado ao entrar.",
    "en": "This pass wasn't validated when you boarded.",
    "zhHans": "这张卡上车时没有打卡。",
    "zhHant": "這張卡上車時沒有打卡。"
  },
  {
    "id": "dialogo-transportes-desculpe-nao-sabia-que-era-preciso-validar-sempre",
    "situacao": "transportes",
    "order": 247,
    "pt": "Desculpe, não sabia que era preciso validar sempre.",
    "en": "Sorry, I didn't know I had to validate every time.",
    "zhHans": "抱歉，我不知道每次都要打卡。",
    "zhHant": "抱歉，我不知道每次都要打卡。"
  },
  {
    "id": "dialogo-transportes-fica-o-aviso-desta-vez-valide-sempre-mesmo-com-passe-m",
    "situacao": "transportes",
    "order": 248,
    "pt": "Fica o aviso desta vez. Valide sempre, mesmo com passe mensal.",
    "en": "I'll let you off with a warning this time. Always validate, even with a monthly pass.",
    "zhHans": "这次先警告。即使有月票也要每次打卡。",
    "zhHant": "這次先警告。即使有月票也要每次打卡。"
  },
  {
    "id": "dialogo-trabalho-hotelaria-rececao-fala-a-ana-do-terceiro-piso-o-ar-condicionado-",
    "situacao": "trabalho_hotelaria",
    "order": 249,
    "pt": "Receção? Fala a Ana, do terceiro piso. O ar condicionado do 305 está avariado.",
    "en": "Reception? This is Ana, third floor. The AC in 305 is broken.",
    "zhHans": "前台吗？我是三楼的Ana。305房的空调坏了。",
    "zhHant": "前台嗎？我是三樓的Ana。305房的空調壞了。"
  },
  {
    "id": "dialogo-trabalho-hotelaria-o-hospede-esta-no-quarto",
    "situacao": "trabalho_hotelaria",
    "order": 250,
    "pt": "O hóspede está no quarto?",
    "en": "Is the guest in the room?",
    "zhHans": "住客在房间吗？",
    "zhHant": "住客在房間嗎？"
  },
  {
    "id": "dialogo-trabalho-hotelaria-nao-saiu-agora-deixou-tambem-uma-reclamacao-sobre-o-ba",
    "situacao": "trabalho_hotelaria",
    "order": 251,
    "pt": "Não, saiu agora. Deixou também uma reclamação sobre o barulho.",
    "en": "No, they just left. They also left a complaint about noise.",
    "zhHans": "不在，刚出去。他们还投诉了噪音问题。",
    "zhHant": "不在，剛出去。他們還投訴了噪音問題。"
  },
  {
    "id": "dialogo-trabalho-hotelaria-vou-chamar-a-manutencao-e-registar-a-reclamacao",
    "situacao": "trabalho_hotelaria",
    "order": 252,
    "pt": "Vou chamar a manutenção e registar a reclamação.",
    "en": "I'll call maintenance and log the complaint.",
    "zhHans": "我叫维修部，并登记这个投诉。",
    "zhHant": "我叫維修部，並登記這個投訴。"
  },
  {
    "id": "dialogo-trabalho-hotelaria-aviso-quando-o-quarto-estiver-pronto",
    "situacao": "trabalho_hotelaria",
    "order": 253,
    "pt": "Aviso quando o quarto estiver pronto.",
    "en": "I'll let you know when the room is ready.",
    "zhHans": "房间弄好我通知你。",
    "zhHant": "房間弄好我通知你。"
  },
  {
    "id": "dialogo-trabalho-hotelaria-boa-tarde-tenho-uma-reserva-em-nome-de-chen",
    "situacao": "trabalho_hotelaria",
    "order": 254,
    "pt": "Boa tarde, tenho uma reserva em nome de Chen.",
    "en": "Good afternoon, I have a reservation under Chen.",
    "zhHans": "下午好，我有预订，名字是Chen。",
    "zhHant": "下午好，我有預訂，名字是Chen。"
  },
  {
    "id": "dialogo-trabalho-hotelaria-bem-vindo-um-quarto-duplo-tres-noites-certo",
    "situacao": "trabalho_hotelaria",
    "order": 255,
    "pt": "Bem-vindo! Um quarto duplo, três noites, certo?",
    "en": "Welcome! A double room, three nights, correct?",
    "zhHans": "欢迎！大床房三晚，对吗？",
    "zhHant": "歡迎！大床房三晚，對嗎？"
  },
  {
    "id": "dialogo-trabalho-hotelaria-certo-e-possivel-ter-um-berco-para-o-bebe",
    "situacao": "trabalho_hotelaria",
    "order": 256,
    "pt": "Certo. É possível ter um berço para o bebé?",
    "en": "Correct. Is it possible to have a cot for the baby?",
    "zhHans": "对。可以加一张婴儿床吗？",
    "zhHant": "對。可以加一張嬰兒床嗎？"
  },
  {
    "id": "dialogo-trabalho-hotelaria-com-certeza-colocamos-ja-no-quarto",
    "situacao": "trabalho_hotelaria",
    "order": 257,
    "pt": "Com certeza, colocamos já no quarto.",
    "en": "Of course, we'll put one in the room right away.",
    "zhHans": "当然，马上给您放到房间。",
    "zhHant": "當然，馬上給您放到房間。"
  },
  {
    "id": "dialogo-trabalho-hotelaria-e-podemos-fazer-late-check-out-no-domingo",
    "situacao": "trabalho_hotelaria",
    "order": 258,
    "pt": "E podemos fazer late check-out no domingo?",
    "en": "And can we have a late check-out on Sunday?",
    "zhHans": "周日可以延迟退房吗？",
    "zhHant": "週日可以延遲退房嗎？"
  },
  {
    "id": "dialogo-trabalho-hotelaria-ate-as-14h-sem-custo-conforme-a-disponibilidade",
    "situacao": "trabalho_hotelaria",
    "order": 259,
    "pt": "Até às 14h, sem custo, conforme a disponibilidade.",
    "en": "Until 2 pm, free of charge, subject to availability.",
    "zhHans": "视空房情况，可免费延至下午两点。",
    "zhHant": "視空房情況，可免費延至下午兩點。"
  },
  {
    "id": "dialogo-trabalho-restauracao-boa-noite-alguma-alergia-alimentar",
    "situacao": "trabalho_restauracao",
    "order": 260,
    "pt": "Boa noite! Alguma alergia alimentar?",
    "en": "Good evening! Any food allergies?",
    "zhHans": "晚上好！有食物过敏吗？",
    "zhHant": "晚上好！有食物過敏嗎？"
  },
  {
    "id": "dialogo-trabalho-restauracao-sim-sou-alergica-a-marisco",
    "situacao": "trabalho_restauracao",
    "order": 261,
    "pt": "Sim, sou alérgica a marisco.",
    "en": "Yes, I'm allergic to shellfish.",
    "zhHans": "有，我对海鲜过敏。",
    "zhHant": "有，我對海鮮過敏。"
  },
  {
    "id": "dialogo-trabalho-restauracao-anotado-como-deseja-o-bife",
    "situacao": "trabalho_restauracao",
    "order": 262,
    "pt": "Anotado. Como deseja o bife?",
    "en": "Noted. How would you like the steak?",
    "zhHans": "记下了。牛排要几分熟？",
    "zhHant": "記下了。牛排要幾分熟？"
  },
  {
    "id": "dialogo-trabalho-restauracao-no-ponto-uma-dose-chega-para-dois",
    "situacao": "trabalho_restauracao",
    "order": 263,
    "pt": "No ponto. Uma dose chega para dois?",
    "en": "Medium. Is one portion enough for two?",
    "zhHans": "五分熟。一份够两个人吃吗？",
    "zhHant": "五分熟。一份夠兩個人吃嗎？"
  },
  {
    "id": "dialogo-trabalho-restauracao-chega-bem-as-doses-sao-generosas-ou-pedem-meia-dose-ca",
    "situacao": "trabalho_restauracao",
    "order": 264,
    "pt": "Chega bem — as doses são generosas. Ou pedem meia dose cada.",
    "en": "Plenty — portions are generous. Or order a half portion each.",
    "zhHans": "足够——份量很大。也可以各点半份。",
    "zhHant": "足夠——份量很大。也可以各點半份。"
  },
  {
    "id": "dialogo-trabalho-restauracao-entao-uma-dose-para-partilhar-e-duas-imperiais",
    "situacao": "trabalho_restauracao",
    "order": 265,
    "pt": "Então uma dose para partilhar. E duas imperiais.",
    "en": "Then one portion to share. And two draught beers.",
    "zhHans": "那就一份合吃。再來两杯生啤。",
    "zhHant": "那就一份合吃。再來兩杯生啤。"
  },
  {
    "id": "dialogo-trabalho-restauracao-a-conta-por-favor-pode-ser-em-separado",
    "situacao": "trabalho_restauracao",
    "order": 266,
    "pt": "A conta, por favor. Pode ser em separado?",
    "en": "The bill, please. Can we pay separately?",
    "zhHans": "结账，麻煩您。可以分开付吗？",
    "zhHant": "結賬，麻煩您。可以分開付嗎？"
  },
  {
    "id": "dialogo-trabalho-restauracao-com-certeza-cartao-ou-dinheiro",
    "situacao": "trabalho_restauracao",
    "order": 267,
    "pt": "Com certeza. Cartão ou dinheiro?",
    "en": "Of course. Card or cash?",
    "zhHans": "当然。刷卡还是现金？",
    "zhHant": "當然。刷卡還是現金？"
  },
  {
    "id": "dialogo-trabalho-restauracao-eu-pago-com-cartao-ela-em-dinheiro",
    "situacao": "trabalho_restauracao",
    "order": 268,
    "pt": "Eu pago com cartão; ela em dinheiro.",
    "en": "I'll pay by card; she'll pay cash.",
    "zhHans": "我刷卡；她付现金。",
    "zhHant": "我刷卡；她付現金。"
  },
  {
    "id": "dialogo-trabalho-restauracao-aqui-esta-a-maquina-quer-fatura-com-contribuinte",
    "situacao": "trabalho_restauracao",
    "order": 269,
    "pt": "Aqui está a máquina. Quer fatura com contribuinte?",
    "en": "Here's the card machine. Would you like the receipt with your tax number?",
    "zhHans": "这是刷卡机。要开带税号的发票吗？",
    "zhHant": "這是刷卡機。要開帶稅號的發票嗎？"
  },
  {
    "id": "dialogo-trabalho-restauracao-sim-por-favor-2-4-5",
    "situacao": "trabalho_restauracao",
    "order": 270,
    "pt": "Sim, por favor: 2-4-5…",
    "en": "Yes, please: 2-4-5…",
    "zhHans": "要，麻煩您：2-4-5……",
    "zhHant": "要，麻煩您：2-4-5……"
  },
  {
    "id": "dialogo-trabalho-restauracao-feito-obrigado-e-boa-noite",
    "situacao": "trabalho_restauracao",
    "order": 271,
    "pt": "Feito. Obrigado e boa noite!",
    "en": "Done. Thank you and good night!",
    "zhHans": "好了。谢谢，晚安！",
    "zhHant": "好了。謝謝，晚安！"
  },
  {
    "id": "dialogo-trabalho-limpezas-bom-dia-dona-teresa-na-sexta-nao-posso-ir-tenho-consul",
    "situacao": "trabalho_limpezas",
    "order": 272,
    "pt": "Bom dia, Dona Teresa. Na sexta não posso ir — tenho consulta médica.",
    "en": "Good morning, Dona Teresa. I can't come on Friday — I have a medical appointment.",
    "zhHans": "早上好，Teresa太太。周五我來不了——我有医生预约。",
    "zhHant": "早上好，Teresa太太。週五我來不了——我有醫生預約。"
  },
  {
    "id": "dialogo-trabalho-limpezas-obrigada-por-avisar-com-antecedencia-pode-vir-no-sabad",
    "situacao": "trabalho_limpezas",
    "order": 273,
    "pt": "Obrigada por avisar com antecedência. Pode vir no sábado?",
    "en": "Thanks for the advance notice. Can you come on Saturday?",
    "zhHans": "谢谢提前通知。周六可以來吗？",
    "zhHant": "謝謝提前通知。週六可以來嗎？"
  },
  {
    "id": "dialogo-trabalho-limpezas-posso-de-manha-as-nove-esta-bem",
    "situacao": "trabalho_limpezas",
    "order": 274,
    "pt": "Posso, de manhã. Às nove está bem?",
    "en": "I can, in the morning. Is nine okay?",
    "zhHans": "可以，上午。九点行吗？",
    "zhHant": "可以，上午。九點行嗎？"
  },
  {
    "id": "dialogo-trabalho-limpezas-perfeito-deixo-a-chave-no-sitio-do-costume",
    "situacao": "trabalho_limpezas",
    "order": 275,
    "pt": "Perfeito. Deixo a chave no sítio do costume.",
    "en": "Perfect. I'll leave the key in the usual place.",
    "zhHans": "好。钥匙放在老地方。",
    "zhHant": "好。鑰匙放在老地方。"
  },
  {
    "id": "dialogo-trabalho-limpezas-combinado-ate-sabado",
    "situacao": "trabalho_limpezas",
    "order": 276,
    "pt": "Combinado. Até sábado!",
    "en": "Agreed. See you Saturday!",
    "zhHans": "说定了。周六见！",
    "zhHant": "說定了。週六見！"
  },
  {
    "id": "dialogo-trabalho-limpezas-a-senhora-tambem-passa-a-ferro",
    "situacao": "trabalho_limpezas",
    "order": 277,
    "pt": "A senhora também passa a ferro?",
    "en": "Do you also iron?",
    "zhHans": "您也熨衣服吗？",
    "zhHant": "您也熨衣服嗎？"
  },
  {
    "id": "dialogo-trabalho-limpezas-passo-mas-e-mais-uma-hora-de-trabalho",
    "situacao": "trabalho_limpezas",
    "order": 278,
    "pt": "Passo, mas é mais uma hora de trabalho.",
    "en": "I do, but it's one more hour of work.",
    "zhHans": "熨的，但要多算一小时工钱。",
    "zhHant": "熨的，但要多算一小時工錢。"
  },
  {
    "id": "dialogo-trabalho-limpezas-e-uma-limpeza-a-fundo-a-cozinha-quanto-custaria",
    "situacao": "trabalho_limpezas",
    "order": 279,
    "pt": "E uma limpeza a fundo à cozinha, quanto custaria?",
    "en": "And a deep clean of the kitchen, how much would that cost?",
    "zhHans": "厨房深度清洁要多少钱？",
    "zhHant": "廚房深度清潔要多少錢？"
  },
  {
    "id": "dialogo-trabalho-limpezas-a-limpeza-a-fundo-e-ao-preco-de-duas-horas-extra",
    "situacao": "trabalho_limpezas",
    "order": 280,
    "pt": "A limpeza a fundo é ao preço de duas horas extra.",
    "en": "A deep clean is priced at two extra hours.",
    "zhHans": "深度清洁按加两小时计费。",
    "zhHant": "深度清潔按加兩小時計費。"
  },
  {
    "id": "dialogo-trabalho-limpezas-esta-bem-e-nos-feriados-trabalha",
    "situacao": "trabalho_limpezas",
    "order": 281,
    "pt": "Está bem. E nos feriados, trabalha?",
    "en": "Alright. And do you work on public holidays?",
    "zhHans": "好的。公众假期您上班吗？",
    "zhHant": "好的。公眾假期您上班嗎？"
  },
  {
    "id": "dialogo-trabalho-limpezas-so-com-combinacao-previa-e-o-valor-e-a-dobrar",
    "situacao": "trabalho_limpezas",
    "order": 282,
    "pt": "Só com combinação prévia, e o valor é a dobrar.",
    "en": "Only by prior arrangement, and the rate is double.",
    "zhHans": "需要提前约定，而且工钱双倍。",
    "zhHant": "需要提前約定，而且工錢雙倍。"
  },
  {
    "id": "dialogo-trabalho-construcao-hoje-comecamos-a-remodelacao-da-casa-de-banho",
    "situacao": "trabalho_construcao",
    "order": 283,
    "pt": "Hoje começamos a remodelação da casa de banho.",
    "en": "Today we start the bathroom renovation.",
    "zhHans": "今天我们开始翻新浴室。",
    "zhHant": "今天我們開始翻新浴室。"
  },
  {
    "id": "dialogo-trabalho-construcao-primeiro-tiramos-os-azulejos-velhos",
    "situacao": "trabalho_construcao",
    "order": 284,
    "pt": "Primeiro tiramos os azulejos velhos?",
    "en": "Do we remove the old tiles first?",
    "zhHans": "先把旧瓷砖拆掉吗？",
    "zhHant": "先把舊瓷磚拆掉嗎？"
  },
  {
    "id": "dialogo-trabalho-construcao-sim-o-entulho-vai-para-o-contentor-la-fora",
    "situacao": "trabalho_construcao",
    "order": 285,
    "pt": "Sim. O entulho vai para o contentor lá fora.",
    "en": "Yes. The rubble goes in the container outside.",
    "zhHans": "对。建筑垃圾放到外面的垃圾箱。",
    "zhHant": "對。建築垃圾放到外面的垃圾箱。"
  },
  {
    "id": "dialogo-trabalho-construcao-falta-material-so-temos-meio-saco-de-cimento",
    "situacao": "trabalho_construcao",
    "order": 286,
    "pt": "Falta material — só temos meio saco de cimento.",
    "en": "We're short on materials — only half a bag of cement left.",
    "zhHans": "材料不够——水泥只剩半袋。",
    "zhHant": "材料不夠——水泥只剩半袋。"
  },
  {
    "id": "dialogo-trabalho-construcao-vou-a-loja-com-a-carrinha-precisas-de-mais-alguma-cois",
    "situacao": "trabalho_construcao",
    "order": 287,
    "pt": "Vou à loja com a carrinha. Precisas de mais alguma coisa?",
    "en": "I'll go to the shop with the van. Do you need anything else?",
    "zhHans": "我开货车去建材店。还需要別的吗？",
    "zhHant": "我開貨車去建材店。還需要別的嗎？"
  },
  {
    "id": "dialogo-trabalho-construcao-traz-silicone-e-uma-broca-de-seis",
    "situacao": "trabalho_construcao",
    "order": 288,
    "pt": "Traz silicone e uma broca de seis.",
    "en": "Bring silicone and a size-six drill bit.",
    "zhHans": "带硅胶和一个六毫米钻头。",
    "zhHant": "帶硅膠和一個六毫米鑽頭。"
  },
  {
    "id": "dialogo-trabalho-construcao-chefe-antes-de-comecar-quando-e-o-dia-de-pagamento",
    "situacao": "trabalho_construcao",
    "order": 289,
    "pt": "Chefe, antes de começar: quando é o dia de pagamento?",
    "en": "Boss, before we start: when is payday?",
    "zhHans": "老板，开工前问一下：发工资是哪天？",
    "zhHant": "老闆，開工前問一下：發工資是哪天？"
  },
  {
    "id": "dialogo-trabalho-construcao-ao-dia-5-de-cada-mes-por-transferencia",
    "situacao": "trabalho_construcao",
    "order": 290,
    "pt": "Ao dia 5 de cada mês, por transferência.",
    "en": "On the 5th of each month, by bank transfer.",
    "zhHans": "每月5号，转账支付。",
    "zhHant": "每月5號，轉帳支付。"
  },
  {
    "id": "dialogo-trabalho-construcao-e-temos-seguro-de-acidentes-de-trabalho",
    "situacao": "trabalho_construcao",
    "order": 291,
    "pt": "E temos seguro de acidentes de trabalho?",
    "en": "And do we have workplace accident insurance?",
    "zhHans": "我们有工伤保险吗？",
    "zhHant": "我們有工傷保險嗎？"
  },
  {
    "id": "dialogo-trabalho-construcao-tem-esta-no-contrato-o-epi-tambem-e-fornecido",
    "situacao": "trabalho_construcao",
    "order": 292,
    "pt": "Têm, está no contrato. O EPI também é fornecido.",
    "en": "You do, it's in the contract. PPE is provided too.",
    "zhHans": "有，写在合同里。防护装備也由我们提供。",
    "zhHant": "有，寫在合同裡。防護裝備也由我們提供。"
  },
  {
    "id": "dialogo-trabalho-construcao-otimo-e-as-horas-extra-como-sao-pagas",
    "situacao": "trabalho_construcao",
    "order": 293,
    "pt": "Ótimo. E as horas extra, como são pagas?",
    "en": "Great. And how is overtime paid?",
    "zhHans": "好。加班费怎么算？",
    "zhHant": "好。加班費怎麼算？"
  },
  {
    "id": "dialogo-trabalho-construcao-com-acrescimo-conforme-a-lei",
    "situacao": "trabalho_construcao",
    "order": 294,
    "pt": "Com acréscimo, conforme a lei.",
    "en": "With a supplement, as the law requires.",
    "zhHans": "按法律规定加成支付。",
    "zhHant": "按法律規定加成支付。"
  },
  {
    "id": "dialogo-trabalho-entregas-boa-noite-venho-recolher-o-pedido-847",
    "situacao": "trabalho_entregas",
    "order": 295,
    "pt": "Boa noite, venho recolher o pedido 847.",
    "en": "Good evening, I'm here to pick up order 847.",
    "zhHans": "晚上好，我來取847号订单。",
    "zhHant": "晚上好，我來取847號訂單。"
  },
  {
    "id": "dialogo-trabalho-entregas-ainda-nao-esta-pronto-faltam-dez-minutos",
    "situacao": "trabalho_entregas",
    "order": 296,
    "pt": "Ainda não está pronto. Faltam dez minutos.",
    "en": "It's not ready yet. Ten more minutes.",
    "zhHans": "还没好。再等十分钟。",
    "zhHant": "還沒好。再等十分鐘。"
  },
  {
    "id": "dialogo-trabalho-entregas-vou-marcar-a-demora-na-app-esta-bem",
    "situacao": "trabalho_entregas",
    "order": 297,
    "pt": "Vou marcar a demora na app, está bem?",
    "en": "I'll log the delay in the app, okay?",
    "zhHans": "我在应用里标记等候，可以吗？",
    "zhHant": "我在應用裡標記等候，可以嗎？"
  },
  {
    "id": "dialogo-trabalho-entregas-claro-desculpa-a-cozinha-esta-cheia",
    "situacao": "trabalho_entregas",
    "order": 298,
    "pt": "Claro. Desculpa, a cozinha está cheia.",
    "en": "Sure. Sorry, the kitchen is slammed.",
    "zhHans": "当然。抱歉，厨房太忙了。",
    "zhHant": "當然。抱歉，廚房太忙了。"
  },
  {
    "id": "dialogo-trabalho-entregas-sem-problema-fico-aqui-a-espera",
    "situacao": "trabalho_entregas",
    "order": 299,
    "pt": "Sem problema. Fico aqui à espera.",
    "en": "No problem. I'll wait here.",
    "zhHans": "没事。我在这儿等。",
    "zhHant": "沒事。我在這兒等。"
  },
  {
    "id": "dialogo-trabalho-entregas-o-cliente-nao-atende-e-a-morada-parece-errada",
    "situacao": "trabalho_entregas",
    "order": 300,
    "pt": "O cliente não atende e a morada parece errada.",
    "en": "The customer isn't answering and the address looks wrong.",
    "zhHans": "顾客不接电话，地址好像也是错的。",
    "zhHant": "顧客不接電話，地址好像也是錯的。"
  },
  {
    "id": "dialogo-trabalho-entregas-ja-ligaste-duas-vezes",
    "situacao": "trabalho_entregas",
    "order": 301,
    "pt": "Já ligaste duas vezes?",
    "en": "Have you called twice already?",
    "zhHans": "已经打过两次了吗？",
    "zhHant": "已經打過兩次了嗎？"
  },
  {
    "id": "dialogo-trabalho-entregas-ja-vou-reportar-ao-suporte-pela-app",
    "situacao": "trabalho_entregas",
    "order": 302,
    "pt": "Já. Vou reportar ao suporte pela app.",
    "en": "Yes. I'll report it to support via the app.",
    "zhHans": "打了。我通过应用上報客服。",
    "zhHant": "打了。我通過應用上報客服。"
  },
  {
    "id": "dialogo-trabalho-entregas-se-nao-responderem-em-dez-minutos-a-entrega-e-cancelad",
    "situacao": "trabalho_entregas",
    "order": 303,
    "pt": "Se não responderem em dez minutos, a entrega é cancelada.",
    "en": "If there's no answer in ten minutes, the delivery is cancelled.",
    "zhHans": "如果十分钟内没回应，配送就取消。",
    "zhHant": "如果十分鐘內沒回應，配送就取消。"
  },
  {
    "id": "dialogo-trabalho-entregas-e-o-pagamento-era-em-dinheiro",
    "situacao": "trabalho_entregas",
    "order": 304,
    "pt": "E o pagamento? Era em dinheiro.",
    "en": "And the payment? It was cash.",
    "zhHans": "那货款呢？这单是现金支付。",
    "zhHant": "那貨款呢？這單是現金支付。"
  },
  {
    "id": "dialogo-trabalho-entregas-segue-as-instrucoes-do-suporte-fica-tudo-registado",
    "situacao": "trabalho_entregas",
    "order": 305,
    "pt": "Segue as instruções do suporte — fica tudo registado.",
    "en": "Follow support's instructions — everything gets logged.",
    "zhHans": "按客服的指示办——都会有记录。",
    "zhHant": "按客服的指示辦——都會有記錄。"
  }
];

export const situacaoCheatSheetLines: SituacaoContentLine[] = [
  {
    "id": "cartao-banco-queria-abrir-uma-conta-por-favor",
    "situacao": "banco",
    "order": 0,
    "pt": "Queria abrir uma conta, por favor.",
    "en": "I'd like to open an account, please.",
    "zhHans": "我想开个账户，麻煩您。",
    "zhHant": "我想開個帳戶，麻煩您。"
  },
  {
    "id": "cartao-banco-trago-o-passaporte-o-nif-e-o-comprovativo-de-morada",
    "situacao": "banco",
    "order": 1,
    "pt": "Trago o passaporte, o NIF e o comprovativo de morada.",
    "en": "I have my passport, NIF and proof of address with me.",
    "zhHans": "我带了护照、税号和住址证明。",
    "zhHant": "我帶了護照、稅號和住址證明。"
  },
  {
    "id": "cartao-banco-qual-e-o-valor-minimo-do-deposito-inicial",
    "situacao": "banco",
    "order": 2,
    "pt": "Qual é o valor mínimo do depósito inicial?",
    "en": "What is the minimum initial deposit?",
    "zhHans": "开户最低存款是多少？",
    "zhHant": "開戶最低存款是多少？"
  },
  {
    "id": "cartao-banco-ha-comissoes-mensais-nesta-conta",
    "situacao": "banco",
    "order": 3,
    "pt": "Há comissões mensais nesta conta?",
    "en": "Are there monthly fees on this account?",
    "zhHans": "这个账户有月费吗？",
    "zhHant": "這個帳戶有月費嗎？"
  },
  {
    "id": "cartao-banco-pode-dar-me-o-comprovativo-do-iban",
    "situacao": "banco",
    "order": 4,
    "pt": "Pode dar-me o comprovativo do IBAN?",
    "en": "Could you give me proof of my IBAN?",
    "zhHans": "可以给我一份IBAN证明吗？",
    "zhHant": "可以給我一份IBAN證明嗎？"
  },
  {
    "id": "cartao-banco-quando-chega-o-cartao",
    "situacao": "banco",
    "order": 5,
    "pt": "Quando chega o cartão?",
    "en": "When will the card arrive?",
    "zhHans": "卡什么时候寄到？",
    "zhHant": "卡什麼時候寄到？"
  },
  {
    "id": "cartao-financas-vim-tratar-do-nif",
    "situacao": "financas",
    "order": 6,
    "pt": "Vim tratar do NIF.",
    "en": "I'm here to sort out my tax number.",
    "zhHans": "我來办理税号。",
    "zhHant": "我來辦理稅號。"
  },
  {
    "id": "cartao-financas-onde-tiro-a-senha-por-favor",
    "situacao": "financas",
    "order": 7,
    "pt": "Onde tiro a senha, por favor?",
    "en": "Where do I take a queue ticket, please?",
    "zhHans": "请问在哪里取号？",
    "zhHant": "請問在哪裡取號？"
  },
  {
    "id": "cartao-financas-trago-passaporte-e-comprovativo-de-morada",
    "situacao": "financas",
    "order": 8,
    "pt": "Trago passaporte e comprovativo de morada.",
    "en": "I have my passport and proof of address.",
    "zhHans": "我带了护照和住址证明。",
    "zhHant": "我帶了護照和住址證明。"
  },
  {
    "id": "cartao-financas-preciso-de-representante-fiscal",
    "situacao": "financas",
    "order": 9,
    "pt": "Preciso de representante fiscal?",
    "en": "Do I need a tax representative?",
    "zhHans": "我需要税务代表吗？",
    "zhHant": "我需要稅務代表嗎？"
  },
  {
    "id": "cartao-financas-a-senha-do-portal-vem-por-correio",
    "situacao": "financas",
    "order": 10,
    "pt": "A senha do portal vem por correio?",
    "en": "Does the portal password come by post?",
    "zhHans": "网站密码是邮寄的吗？",
    "zhHant": "網站密碼是郵寄的嗎？"
  },
  {
    "id": "cartao-financas-quero-atualizar-o-meu-domicilio-fiscal",
    "situacao": "financas",
    "order": 11,
    "pt": "Quero atualizar o meu domicílio fiscal.",
    "en": "I want to update my tax address.",
    "zhHans": "我想更新我的税务登记地址。",
    "zhHant": "我想更新我的稅務登記地址。"
  },
  {
    "id": "cartao-correios-queria-enviar-esta-carta-registada",
    "situacao": "correios",
    "order": 12,
    "pt": "Queria enviar esta carta registada.",
    "en": "I'd like to send this letter by registered mail.",
    "zhHans": "我想寄这封挂号信。",
    "zhHant": "我想寄這封掛號信。"
  },
  {
    "id": "cartao-correios-com-aviso-de-rececao-por-favor",
    "situacao": "correios",
    "order": 13,
    "pt": "Com aviso de receção, por favor.",
    "en": "With proof of delivery, please.",
    "zhHans": "请加回执。",
    "zhHant": "請加回執。"
  },
  {
    "id": "cartao-correios-vim-levantar-uma-encomenda-tenho-o-aviso",
    "situacao": "correios",
    "order": 14,
    "pt": "Vim levantar uma encomenda — tenho o aviso.",
    "en": "I'm here to collect a parcel — I have the notice.",
    "zhHans": "我來取包裹——我有取件通知单。",
    "zhHant": "我來取包裹——我有取件通知單。"
  },
  {
    "id": "cartao-correios-aqui-esta-o-meu-documento-de-identificacao",
    "situacao": "correios",
    "order": 15,
    "pt": "Aqui está o meu documento de identificação.",
    "en": "Here's my ID.",
    "zhHans": "这是我的证件。",
    "zhHant": "這是我的證件。"
  },
  {
    "id": "cartao-correios-qual-e-o-codigo-de-rastreio",
    "situacao": "correios",
    "order": 16,
    "pt": "Qual é o código de rastreio?",
    "en": "What's the tracking number?",
    "zhHans": "追踪編号是多少？",
    "zhHant": "追蹤編號是多少？"
  },
  {
    "id": "cartao-correios-quanto-custa-enviar-para-o-estrangeiro",
    "situacao": "correios",
    "order": 17,
    "pt": "Quanto custa enviar para o estrangeiro?",
    "en": "How much does it cost to send abroad?",
    "zhHans": "寄國外要多少钱？",
    "zhHant": "寄國外要多少錢？"
  },
  {
    "id": "cartao-junta-de-freguesia-preciso-de-um-atestado-de-residencia-por-favor",
    "situacao": "junta_de_freguesia",
    "order": 18,
    "pt": "Preciso de um atestado de residência, por favor.",
    "en": "I need a certificate of residence, please.",
    "zhHans": "我需要一份居住证明，麻煩您。",
    "zhHant": "我需要一份居住證明，麻煩您。"
  },
  {
    "id": "cartao-junta-de-freguesia-moro-nesta-freguesia-ha-x-meses",
    "situacao": "junta_de_freguesia",
    "order": 19,
    "pt": "Moro nesta freguesia há X meses.",
    "en": "I've lived in this parish for X months.",
    "zhHans": "我在本堂区住了X个月。",
    "zhHant": "我在本堂區住了X個月。"
  },
  {
    "id": "cartao-junta-de-freguesia-trago-o-contrato-de-arrendamento",
    "situacao": "junta_de_freguesia",
    "order": 20,
    "pt": "Trago o contrato de arrendamento.",
    "en": "I have my rental contract with me.",
    "zhHans": "我带了租赁合同。",
    "zhHant": "我帶了租賃合同。"
  },
  {
    "id": "cartao-junta-de-freguesia-posso-trazer-duas-testemunhas-se-for-preciso",
    "situacao": "junta_de_freguesia",
    "order": 21,
    "pt": "Posso trazer duas testemunhas, se for preciso.",
    "en": "I can bring two witnesses if necessary.",
    "zhHans": "如有需要，我可以带两位证人來。",
    "zhHant": "如有需要，我可以帶兩位證人來。"
  },
  {
    "id": "cartao-junta-de-freguesia-quanto-custa-e-quando-fica-pronto",
    "situacao": "junta_de_freguesia",
    "order": 22,
    "pt": "Quanto custa e quando fica pronto?",
    "en": "How much is it and when will it be ready?",
    "zhHans": "多少钱？什么时候能拿？",
    "zhHant": "多少錢？什麼時候能拿？"
  },
  {
    "id": "cartao-saude-queria-inscrever-me-e-pedir-o-numero-de-utente",
    "situacao": "saude",
    "order": 23,
    "pt": "Queria inscrever-me e pedir o número de utente.",
    "en": "I'd like to register and get my SNS number.",
    "zhHans": "我想登记并申请医疗用户号。",
    "zhHant": "我想登記並申請醫療用戶號。"
  },
  {
    "id": "cartao-saude-tenho-atestado-de-residencia-e-nif",
    "situacao": "saude",
    "order": 24,
    "pt": "Tenho atestado de residência e NIF.",
    "en": "I have a residence certificate and tax number.",
    "zhHans": "我有居住证明和税号。",
    "zhHant": "我有居住證明和稅號。"
  },
  {
    "id": "cartao-saude-queria-marcar-uma-consulta-por-favor",
    "situacao": "saude",
    "order": 25,
    "pt": "Queria marcar uma consulta, por favor.",
    "en": "I'd like to book an appointment, please.",
    "zhHans": "我想预约门诊，麻煩您。",
    "zhHant": "我想預約門診，麻煩您。"
  },
  {
    "id": "cartao-saude-e-urgente-doi-me-muito-o-a",
    "situacao": "saude",
    "order": 26,
    "pt": "É urgente — dói-me muito o/a…",
    "en": "It's urgent — my … hurts badly.",
    "zhHans": "很紧急——我的……很痛。",
    "zhHant": "很緊急——我的……很痛。"
  },
  {
    "id": "cartao-saude-sou-alergico-a-a-penicilina",
    "situacao": "saude",
    "order": 27,
    "pt": "Sou alérgico/a a penicilina.",
    "en": "I'm allergic to penicillin.",
    "zhHans": "我对青霉素过敏。",
    "zhHant": "我對青黴素過敏。"
  },
  {
    "id": "cartao-saude-sns-24-808-24-24-24-emergencia-112",
    "situacao": "saude",
    "order": 28,
    "pt": "SNS 24: 808 24 24 24 · Emergência: 112",
    "en": "SNS 24: 808 24 24 24 · Emergency: 112",
    "zhHans": "健康热线：808 24 24 24 · 紧急救援：112",
    "zhHant": "健康熱線：808 24 24 24 · 緊急救援：112"
  },
  {
    "id": "cartao-aima-tenho-marcacao-as-hora-em-nome-de-nome",
    "situacao": "aima",
    "order": 29,
    "pt": "Tenho marcação às [hora], em nome de [nome].",
    "en": "I have an appointment at [time], under the name [name].",
    "zhHans": "我有[时间]的预约，名字是[姓名]。",
    "zhHant": "我有[時間]的預約，名字是[姓名]。"
  },
  {
    "id": "cartao-aima-venho-renovar-a-autorizacao-de-residencia",
    "situacao": "aima",
    "order": 30,
    "pt": "Venho renovar a autorização de residência.",
    "en": "I'm here to renew my residence permit.",
    "zhHans": "我來续居留許可。",
    "zhHant": "我來續居留許可。"
  },
  {
    "id": "cartao-aima-trago-passaporte-titulo-comprovativo-de-morada-e-recib",
    "situacao": "aima",
    "order": 31,
    "pt": "Trago passaporte, título, comprovativo de morada e recibos.",
    "en": "I have my passport, residence card, proof of address and payslips.",
    "zhHans": "我带了护照、居留证、住址证明和工资单。",
    "zhHant": "我帶了護照、居留證、住址證明和工資單。"
  },
  {
    "id": "cartao-aima-autorizo-a-consulta-do-registo-criminal",
    "situacao": "aima",
    "order": 32,
    "pt": "Autorizo a consulta do registo criminal.",
    "en": "I authorise the criminal record check.",
    "zhHans": "我授权查询无犯罪记录。",
    "zhHant": "我授權查詢無犯罪記錄。"
  },
  {
    "id": "cartao-aima-o-meu-processo-esta-pendente-este-e-o-comprovativo",
    "situacao": "aima",
    "order": 33,
    "pt": "O meu processo está pendente — este é o comprovativo.",
    "en": "My case is pending — here's the proof.",
    "zhHans": "我的申请还在处理中——这是憑证。",
    "zhHant": "我的申請還在處理中——這是憑證。"
  },
  {
    "id": "cartao-aima-podem-confirmar-a-minha-morada-no-sistema",
    "situacao": "aima",
    "order": 34,
    "pt": "Podem confirmar a minha morada no sistema?",
    "en": "Can you confirm my address in the system?",
    "zhHans": "可以确认一下系统里我的地址吗？",
    "zhHant": "可以確認一下系統裡我的地址嗎？"
  },
  {
    "id": "cartao-escola-venho-matricular-o-meu-filho-a-minha-filha",
    "situacao": "escola",
    "order": 35,
    "pt": "Venho matricular o meu filho / a minha filha.",
    "en": "I'm here to enrol my son / daughter.",
    "zhHans": "我來给儿子／女儿办入学註册。",
    "zhHant": "我來給兒子／女兒辦入學註冊。"
  },
  {
    "id": "cartao-escola-sou-o-encarregado-a-encarregada-de-educacao",
    "situacao": "escola",
    "order": 36,
    "pt": "Sou o encarregado / a encarregada de educação.",
    "en": "I'm the legal guardian.",
    "zhHans": "我是教育监护人。",
    "zhHant": "我是教育監護人。"
  },
  {
    "id": "cartao-escola-trago-o-boletim-de-vacinas-e-o-numero-de-utente",
    "situacao": "escola",
    "order": 37,
    "pt": "Trago o boletim de vacinas e o número de utente.",
    "en": "I have the vaccination record and health number.",
    "zhHans": "我带了疫苗记录和医疗用户号。",
    "zhHant": "我帶了疫苗記錄和醫療用戶號。"
  },
  {
    "id": "cartao-escola-queria-pedir-a-acao-social-escolar",
    "situacao": "escola",
    "order": 38,
    "pt": "Queria pedir a Ação Social Escolar.",
    "en": "I'd like to apply for school social support.",
    "zhHans": "我想申请学校社会援助。",
    "zhHant": "我想申請學校社會援助。"
  },
  {
    "id": "cartao-escola-qual-e-a-escola-da-nossa-area-de-residencia",
    "situacao": "escola",
    "order": 39,
    "pt": "Qual é a escola da nossa área de residência?",
    "en": "Which is the school for our home address?",
    "zhHans": "我们住址对应的学校是哪一所？",
    "zhHant": "我們住址對應的學校是哪一所？"
  },
  {
    "id": "cartao-escola-quando-sai-a-lista-de-turmas",
    "situacao": "escola",
    "order": 40,
    "pt": "Quando sai a lista de turmas?",
    "en": "When is the class list published?",
    "zhHans": "班级名单什么时候公佈？",
    "zhHant": "班級名單什麼時候公佈？"
  },
  {
    "id": "cartao-iefp-queria-inscrever-me-como-candidato-a-emprego",
    "situacao": "iefp",
    "order": 41,
    "pt": "Queria inscrever-me como candidato a emprego.",
    "en": "I'd like to register as a jobseeker.",
    "zhHans": "我想登记为求职者。",
    "zhHant": "我想登記為求職者。"
  },
  {
    "id": "cartao-iefp-trago-identificacao-nif-niss-e-comprovativo-de-morada",
    "situacao": "iefp",
    "order": 42,
    "pt": "Trago identificação, NIF, NISS e comprovativo de morada.",
    "en": "I have my ID, tax number, social security number and proof of address.",
    "zhHans": "我带了证件、税号、社保号和住址证明。",
    "zhHant": "我帶了證件、稅號、社保號和住址證明。"
  },
  {
    "id": "cartao-iefp-quero-pedir-o-subsidio-de-desemprego",
    "situacao": "iefp",
    "order": 43,
    "pt": "Quero pedir o subsídio de desemprego.",
    "en": "I want to apply for unemployment benefit.",
    "zhHans": "我想申请失业救济金。",
    "zhHant": "我想申請失業救濟金。"
  },
  {
    "id": "cartao-iefp-tenho-a-declaracao-da-entidade-empregadora",
    "situacao": "iefp",
    "order": 44,
    "pt": "Tenho a declaração da entidade empregadora.",
    "en": "I have the employer's declaration.",
    "zhHans": "我有雇主的解雇声明。",
    "zhHant": "我有僱主的解僱聲明。"
  },
  {
    "id": "cartao-iefp-estou-interessado-a-em-formacao-profissional",
    "situacao": "iefp",
    "order": 45,
    "pt": "Estou interessado/a em formação profissional.",
    "en": "I'm interested in vocational training.",
    "zhHans": "我对职业培训有兴趣。",
    "zhHant": "我對職業培訓有興趣。"
  },
  {
    "id": "cartao-iefp-recebi-uma-convocatoria-para-esta-data",
    "situacao": "iefp",
    "order": 46,
    "pt": "Recebi uma convocatória para esta data.",
    "en": "I received a summons for this date.",
    "zhHans": "我收到了这个日期的约谈通知。",
    "zhHant": "我收到了這個日期的約談通知。"
  },
  {
    "id": "cartao-seguranca-social-venho-pedir-o-niss-tenho-contrato-de-trabalho",
    "situacao": "seguranca_social",
    "order": 47,
    "pt": "Venho pedir o NISS — tenho contrato de trabalho.",
    "en": "I'm here to apply for a NISS — I have a work contract.",
    "zhHans": "我來申请社保号——我有劳动合同。",
    "zhHant": "我來申請社保號——我有勞動合同。"
  },
  {
    "id": "cartao-seguranca-social-trago-passaporte-e-comprovativo-de-morada",
    "situacao": "seguranca_social",
    "order": 48,
    "pt": "Trago passaporte e comprovativo de morada.",
    "en": "I have my passport and proof of address.",
    "zhHans": "我带了护照和住址证明。",
    "zhHant": "我帶了護照和住址證明。"
  },
  {
    "id": "cartao-seguranca-social-preciso-de-uma-declaracao-de-situacao-contributiva",
    "situacao": "seguranca_social",
    "order": 49,
    "pt": "Preciso de uma declaração de situação contributiva.",
    "en": "I need a statement of my contributions status.",
    "zhHans": "我需要一份供款状况声明。",
    "zhHant": "我需要一份供款狀況聲明。"
  },
  {
    "id": "cartao-seguranca-social-trabalho-a-recibos-verdes",
    "situacao": "seguranca_social",
    "order": 50,
    "pt": "Trabalho a recibos verdes.",
    "en": "I work freelance (green receipts).",
    "zhHans": "我是开綠色收据的自雇人士。",
    "zhHant": "我是開綠色收據的自僱人士。"
  },
  {
    "id": "cartao-seguranca-social-como-peco-o-abono-de-familia",
    "situacao": "seguranca_social",
    "order": 51,
    "pt": "Como peço o abono de família?",
    "en": "How do I apply for the family allowance?",
    "zhHans": "家庭津贴怎么申请？",
    "zhHant": "家庭津貼怎麼申請？"
  },
  {
    "id": "cartao-arrendamento-vi-o-anuncio-posso-marcar-uma-visita",
    "situacao": "arrendamento",
    "order": 52,
    "pt": "Vi o anúncio — posso marcar uma visita?",
    "en": "I saw the listing — can I book a viewing?",
    "zhHans": "我看到了广告——可以约看房吗？",
    "zhHant": "我看到了廣告——可以約看房嗎？"
  },
  {
    "id": "cartao-arrendamento-a-renda-inclui-despesas",
    "situacao": "arrendamento",
    "order": 53,
    "pt": "A renda inclui despesas?",
    "en": "Does the rent include bills?",
    "zhHans": "租金包水电杂费吗？",
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
    "zhHans": "会签合同、开租金收据吗？",
    "zhHant": "會簽合同、開租金收據嗎？"
  },
  {
    "id": "cartao-arrendamento-preciso-do-contrato-como-comprovativo-de-morada",
    "situacao": "arrendamento",
    "order": 56,
    "pt": "Preciso do contrato como comprovativo de morada.",
    "en": "I need the contract as proof of address.",
    "zhHans": "我需要合同做住址证明。",
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
    "zhHans": "我想办一张月票，麻煩您。",
    "zhHant": "我想辦一張月票，麻煩您。"
  },
  {
    "id": "cartao-transportes-queria-carregar-o-passe-mensal",
    "situacao": "transportes",
    "order": 59,
    "pt": "Queria carregar o passe mensal.",
    "en": "I'd like to top up the monthly pass.",
    "zhHans": "我想给月票充值。",
    "zhHant": "我想給月票充值。"
  },
  {
    "id": "cartao-transportes-este-autocarro-metro-vai-para",
    "situacao": "transportes",
    "order": 60,
    "pt": "Este autocarro / metro vai para…?",
    "en": "Does this bus / metro go to…?",
    "zhHans": "这班公交／地铁去……吗？",
    "zhHant": "這班公交／地鐵去……嗎？"
  },
  {
    "id": "cartao-transportes-onde-valido-o-bilhete",
    "situacao": "transportes",
    "order": 61,
    "pt": "Onde valido o bilhete?",
    "en": "Where do I validate the ticket?",
    "zhHans": "在哪里打卡验票？",
    "zhHant": "在哪裡打卡驗票？"
  },
  {
    "id": "cartao-transportes-a-que-horas-passa-o-ultimo",
    "situacao": "transportes",
    "order": 62,
    "pt": "A que horas passa o último?",
    "en": "What time is the last one?",
    "zhHans": "末班车几点？",
    "zhHant": "末班車幾點？"
  },
  {
    "id": "cartao-trabalho-hotelaria-a-que-horas-comeca-o-meu-turno",
    "situacao": "trabalho_hotelaria",
    "order": 63,
    "pt": "A que horas começa o meu turno?",
    "en": "What time does my shift start?",
    "zhHans": "我的班几点开始？",
    "zhHant": "我的班幾點開始？"
  },
  {
    "id": "cartao-trabalho-hotelaria-o-quarto-esta-pronto",
    "situacao": "trabalho_hotelaria",
    "order": 64,
    "pt": "O quarto está pronto.",
    "en": "The room is ready.",
    "zhHans": "房间已经整理好了。",
    "zhHant": "房間已經整理好了。"
  },
  {
    "id": "cartao-trabalho-hotelaria-faltam-toalhas-lencois-amenities",
    "situacao": "trabalho_hotelaria",
    "order": 65,
    "pt": "Faltam toalhas / lençóis / amenities.",
    "en": "We're out of towels / sheets / amenities.",
    "zhHans": "毛巾／床单／客用品不够了。",
    "zhHant": "毛巾／床單／客用品不夠了。"
  },
  {
    "id": "cartao-trabalho-hotelaria-o-hospede-do-n-pediu",
    "situacao": "trabalho_hotelaria",
    "order": 66,
    "pt": "O hóspede do [n.º] pediu…",
    "en": "The guest in [room no.] asked for…",
    "zhHans": "[房号]的住客要求……",
    "zhHant": "[房號]的住客要求……"
  },
  {
    "id": "cartao-trabalho-hotelaria-posso-trocar-a-folga-esta-semana",
    "situacao": "trabalho_hotelaria",
    "order": 67,
    "pt": "Posso trocar a folga esta semana?",
    "en": "Can I swap my day off this week?",
    "zhHans": "这周的休息日可以调换吗？",
    "zhHant": "這週的休息日可以調換嗎？"
  },
  {
    "id": "cartao-trabalho-hotelaria-fiz-duas-horas-extra-hoje",
    "situacao": "trabalho_hotelaria",
    "order": 68,
    "pt": "Fiz duas horas extra hoje.",
    "en": "I did two hours of overtime today.",
    "zhHans": "我今天加了两个小时的班。",
    "zhHant": "我今天加了兩個小時的班。"
  },
  {
    "id": "cartao-trabalho-restauracao-bem-vindos-mesa-para-quantas-pessoas",
    "situacao": "trabalho_restauracao",
    "order": 69,
    "pt": "Bem-vindos! Mesa para quantas pessoas?",
    "en": "Welcome! A table for how many?",
    "zhHans": "欢迎光临！几位？",
    "zhHant": "歡迎光臨！幾位？"
  },
  {
    "id": "cartao-trabalho-restauracao-posso-anotar-o-pedido",
    "situacao": "trabalho_restauracao",
    "order": 70,
    "pt": "Posso anotar o pedido?",
    "en": "May I take your order?",
    "zhHans": "可以点单了吗？",
    "zhHant": "可以點單了嗎？"
  },
  {
    "id": "cartao-trabalho-restauracao-recomendo-o-prato-do-dia",
    "situacao": "trabalho_restauracao",
    "order": 71,
    "pt": "Recomendo o prato do dia.",
    "en": "I recommend the dish of the day.",
    "zhHans": "我推荐今日特餐。",
    "zhHant": "我推薦今日特餐。"
  },
  {
    "id": "cartao-trabalho-restauracao-bom-proveito",
    "situacao": "trabalho_restauracao",
    "order": 72,
    "pt": "Bom proveito!",
    "en": "Enjoy your meal!",
    "zhHans": "请慢用！",
    "zhHant": "請慢用！"
  },
  {
    "id": "cartao-trabalho-restauracao-desejam-mais-alguma-coisa",
    "situacao": "trabalho_restauracao",
    "order": 73,
    "pt": "Desejam mais alguma coisa?",
    "en": "Would you like anything else?",
    "zhHans": "还需要別的吗？",
    "zhHant": "還需要別的嗎？"
  },
  {
    "id": "cartao-trabalho-restauracao-aqui-esta-a-conta-pagam-junto-ou-separado",
    "situacao": "trabalho_restauracao",
    "order": 74,
    "pt": "Aqui está a conta. Pagam junto ou separado?",
    "en": "Here's the bill. Together or separately?",
    "zhHans": "这是账单。一起付还是分开付？",
    "zhHant": "這是賬單。一起付還是分開付？"
  },
  {
    "id": "cartao-trabalho-limpezas-cobro-x-euros-a-hora",
    "situacao": "trabalho_limpezas",
    "order": 75,
    "pt": "Cobro X euros à hora.",
    "en": "I charge X euros per hour.",
    "zhHans": "我每小时收X欧元。",
    "zhHant": "我每小時收X歐元。"
  },
  {
    "id": "cartao-trabalho-limpezas-passo-recibo-verde",
    "situacao": "trabalho_limpezas",
    "order": 76,
    "pt": "Passo recibo verde.",
    "en": "I issue a freelance receipt.",
    "zhHans": "我开綠色收据。",
    "zhHant": "我開綠色收據。"
  },
  {
    "id": "cartao-trabalho-limpezas-tenho-disponibilidade-as-dias-de-manha-tarde",
    "situacao": "trabalho_limpezas",
    "order": 77,
    "pt": "Tenho disponibilidade às [dias] de [manhã/tarde].",
    "en": "I'm available on [days] in the [morning/afternoon].",
    "zhHans": "我[星期几][上午/下午]有空。",
    "zhHant": "我[星期幾][上午/下午]有空。"
  },
  {
    "id": "cartao-trabalho-limpezas-o-material-fica-em-casa-ou-trago-eu",
    "situacao": "trabalho_limpezas",
    "order": 78,
    "pt": "O material fica em casa ou trago eu?",
    "en": "Are supplies kept at the house or do I bring them?",
    "zhHans": "清洁用品放在家里还是我自带？",
    "zhHant": "清潔用品放在家裡還是我自帶？"
  },
  {
    "id": "cartao-trabalho-limpezas-terminei-esta-tudo-limpo",
    "situacao": "trabalho_limpezas",
    "order": 79,
    "pt": "Terminei — está tudo limpo.",
    "en": "I'm done — everything is clean.",
    "zhHans": "做完了——都打扫干净了。",
    "zhHant": "做完了——都打掃乾淨了。"
  },
  {
    "id": "cartao-trabalho-construcao-onde-esta-o-meu-epi",
    "situacao": "trabalho_construcao",
    "order": 80,
    "pt": "Onde está o meu EPI?",
    "en": "Where's my PPE?",
    "zhHans": "我的防护装備在哪里？",
    "zhHant": "我的防護裝備在哪裡？"
  },
  {
    "id": "cartao-trabalho-construcao-isto-nao-e-seguro-o-andaime-nao-esta-fixo",
    "situacao": "trabalho_construcao",
    "order": 81,
    "pt": "Isto não é seguro — o andaime não está fixo.",
    "en": "This isn't safe — the scaffolding isn't secured.",
    "zhHans": "这不安全——腳手架没固定。",
    "zhHant": "這不安全——腳手架沒固定。"
  },
  {
    "id": "cartao-trabalho-construcao-preciso-de-mais-cimento-tijolos",
    "situacao": "trabalho_construcao",
    "order": 82,
    "pt": "Preciso de mais cimento / tijolos.",
    "en": "We need more cement / bricks.",
    "zhHans": "需要再來些水泥／砖。",
    "zhHant": "需要再來些水泥／磚。"
  },
  {
    "id": "cartao-trabalho-construcao-a-que-horas-e-a-pausa",
    "situacao": "trabalho_construcao",
    "order": 83,
    "pt": "A que horas é a pausa?",
    "en": "What time is the break?",
    "zhHans": "休息是几点？",
    "zhHant": "休息是幾點？"
  },
  {
    "id": "cartao-trabalho-construcao-quando-assinamos-o-contrato-de-trabalho",
    "situacao": "trabalho_construcao",
    "order": 84,
    "pt": "Quando assinamos o contrato de trabalho?",
    "en": "When do we sign the work contract?",
    "zhHans": "什么时候签劳动合同？",
    "zhHant": "什麼時候簽勞動合同？"
  },
  {
    "id": "cartao-trabalho-construcao-magoei-me-preciso-do-kit-de-primeiros-socorros",
    "situacao": "trabalho_construcao",
    "order": 85,
    "pt": "Magoei-me — preciso do kit de primeiros socorros.",
    "en": "I've hurt myself — I need the first-aid kit.",
    "zhHans": "我受伤了——需要急救箱。",
    "zhHant": "我受傷了——需要急救箱。"
  },
  {
    "id": "cartao-trabalho-entregas-tenho-uma-entrega-para-nome",
    "situacao": "trabalho_entregas",
    "order": 86,
    "pt": "Tenho uma entrega para [nome].",
    "en": "I have a delivery for [name].",
    "zhHans": "有[姓名]的外卖。",
    "zhHant": "有[姓名]的外賣。"
  },
  {
    "id": "cartao-trabalho-entregas-qual-e-o-codigo-da-porta",
    "situacao": "trabalho_entregas",
    "order": 87,
    "pt": "Qual é o código da porta?",
    "en": "What's the door code?",
    "zhHans": "门禁密码是多少？",
    "zhHant": "門禁密碼是多少？"
  },
  {
    "id": "cartao-trabalho-entregas-pode-descer-para-levantar-o-pedido",
    "situacao": "trabalho_entregas",
    "order": 88,
    "pt": "Pode descer para levantar o pedido?",
    "en": "Can you come down to collect the order?",
    "zhHans": "您可以下來取餐吗？",
    "zhHant": "您可以下來取餐嗎？"
  },
  {
    "id": "cartao-trabalho-entregas-estou-na-entrada-do-predio",
    "situacao": "trabalho_entregas",
    "order": 89,
    "pt": "Estou na entrada do prédio.",
    "en": "I'm at the building entrance.",
    "zhHans": "我在楼门口。",
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
  },
  {
    "id": "cartao-banco-o-multibanco-reteve-o-meu-cartao",
    "situacao": "banco",
    "order": 91,
    "pt": "O multibanco reteve o meu cartão.",
    "en": "The ATM retained my card.",
    "zhHans": "柜员机把我的卡吞了。",
    "zhHant": "櫃員機把我的卡吞了。"
  },
  {
    "id": "cartao-banco-quero-bloquear-o-cartao-perdi-o-foi-roubado",
    "situacao": "banco",
    "order": 92,
    "pt": "Quero bloquear o cartão — perdi-o / foi roubado.",
    "en": "I want to block my card — I lost it / it was stolen.",
    "zhHans": "我要挂失银行卡——卡丟了／被偷了。",
    "zhHant": "我要掛失銀行卡——卡丟了／被偷了。"
  },
  {
    "id": "cartao-banco-queria-ativar-o-mb-way-o-debito-direto",
    "situacao": "banco",
    "order": 93,
    "pt": "Queria ativar o MB Way / o débito direto.",
    "en": "I'd like to activate MB Way / direct debit.",
    "zhHans": "我想开通MB Way／自动扣款。",
    "zhHant": "我想開通MB Way／自動扣款。"
  },
  {
    "id": "cartao-banco-qual-e-o-limite-de-levantamento-diario",
    "situacao": "banco",
    "order": 94,
    "pt": "Qual é o limite de levantamento diário?",
    "en": "What's the daily withdrawal limit?",
    "zhHans": "每日提款限额是多少？",
    "zhHant": "每日提款限額是多少？"
  },
  {
    "id": "cartao-banco-posso-falar-com-o-meu-gestor-de-conta",
    "situacao": "banco",
    "order": 95,
    "pt": "Posso falar com o meu gestor de conta?",
    "en": "May I speak with my account manager?",
    "zhHans": "我可以和我的客户经理谈谈吗？",
    "zhHant": "我可以和我的客戶經理談談嗎？"
  },
  {
    "id": "cartao-financas-quero-abrir-atividade-como-independente",
    "situacao": "financas",
    "order": 96,
    "pt": "Quero abrir atividade como independente.",
    "en": "I want to register as self-employed.",
    "zhHans": "我想登记自雇开业。",
    "zhHant": "我想登記自僱開業。"
  },
  {
    "id": "cartao-financas-fatura-com-contribuinte-por-favor",
    "situacao": "financas",
    "order": 97,
    "pt": "Fatura com contribuinte, por favor.",
    "en": "Receipt with my tax number, please.",
    "zhHans": "请开带税号的发票。",
    "zhHant": "請開帶稅號的發票。"
  },
  {
    "id": "cartao-financas-posso-pagar-em-prestacoes",
    "situacao": "financas",
    "order": 98,
    "pt": "Posso pagar em prestações?",
    "en": "Can I pay in instalments?",
    "zhHans": "可以分期付款吗？",
    "zhHant": "可以分期付款嗎？"
  },
  {
    "id": "cartao-financas-como-ativo-a-chave-movel-digital",
    "situacao": "financas",
    "order": 99,
    "pt": "Como ativo a Chave Móvel Digital?",
    "en": "How do I activate the Digital Mobile Key?",
    "zhHans": "怎么开通数字移动密钥？",
    "zhHant": "怎麼開通數字移動密鑰？"
  },
  {
    "id": "cartao-financas-preciso-da-nota-de-liquidacao-para-a-aima",
    "situacao": "financas",
    "order": 100,
    "pt": "Preciso da nota de liquidação para a AIMA.",
    "en": "I need the tax assessment notice for AIMA.",
    "zhHans": "我需要税款结算单交给移民局。",
    "zhHant": "我需要稅款結算單交給移民局。"
  },
  {
    "id": "cartao-correios-a-encomenda-esta-na-alfandega-quanto-pago",
    "situacao": "correios",
    "order": 101,
    "pt": "A encomenda está na alfândega — quanto pago?",
    "en": "My parcel is at customs — how much do I pay?",
    "zhHans": "包裹在海关——我要缴多少钱？",
    "zhHant": "包裹在海關——我要繳多少錢？"
  },
  {
    "id": "cartao-correios-pode-reencaminhar-para-esta-morada",
    "situacao": "correios",
    "order": 102,
    "pt": "Pode reencaminhar para esta morada?",
    "en": "Can you forward it to this address?",
    "zhHans": "可以转寄到这个地址吗？",
    "zhHant": "可以轉寄到這個地址嗎？"
  },
  {
    "id": "cartao-correios-e-fragil-por-favor",
    "situacao": "correios",
    "order": 103,
    "pt": "É frágil, por favor.",
    "en": "It's fragile, please.",
    "zhHans": "易碎品，请小心。",
    "zhHant": "易碎品，請小心。"
  },
  {
    "id": "cartao-correios-quando-e-a-segunda-tentativa-de-entrega",
    "situacao": "correios",
    "order": 104,
    "pt": "Quando é a segunda tentativa de entrega?",
    "en": "When is the second delivery attempt?",
    "zhHans": "第二次派送是什么时候？",
    "zhHant": "第二次派送是什麼時候？"
  },
  {
    "id": "cartao-correios-prefiro-levantar-no-cacifo",
    "situacao": "correios",
    "order": 105,
    "pt": "Prefiro levantar no cacifo.",
    "en": "I'd rather collect it from the locker.",
    "zhHans": "我想到快递柜取件。",
    "zhHant": "我想到快遞櫃取件。"
  },
  {
    "id": "cartao-junta-de-freguesia-ha-espaco-cidadao-aqui",
    "situacao": "junta_de_freguesia",
    "order": 106,
    "pt": "Há Espaço Cidadão aqui?",
    "en": "Is there a Citizen's Desk here?",
    "zhHans": "这里有公民服务站吗？",
    "zhHant": "這裡有公民服務站嗎？"
  },
  {
    "id": "cartao-junta-de-freguesia-qual-e-o-horario-de-atendimento",
    "situacao": "junta_de_freguesia",
    "order": 107,
    "pt": "Qual é o horário de atendimento?",
    "en": "What are the office hours?",
    "zhHans": "办公时间是什么时候？",
    "zhHant": "辦公時間是什麼時候？"
  },
  {
    "id": "cartao-junta-de-freguesia-preciso-do-atestado-de-agregado-familiar",
    "situacao": "junta_de_freguesia",
    "order": 108,
    "pt": "Preciso do atestado de agregado familiar.",
    "en": "I need a household certificate.",
    "zhHans": "我需要家庭成员证明。",
    "zhHant": "我需要家庭成員證明。"
  },
  {
    "id": "cartao-junta-de-freguesia-quero-ativar-a-chave-movel-digital",
    "situacao": "junta_de_freguesia",
    "order": 109,
    "pt": "Quero ativar a Chave Móvel Digital.",
    "en": "I want to activate the Digital Mobile Key.",
    "zhHans": "我想开通数字移动密钥。",
    "zhHant": "我想開通數字移動密鑰。"
  },
  {
    "id": "cartao-junta-de-freguesia-o-documento-e-valido-por-quanto-tempo",
    "situacao": "junta_de_freguesia",
    "order": 110,
    "pt": "O documento é válido por quanto tempo?",
    "en": "How long is the document valid?",
    "zhHans": "文件有效期多久？",
    "zhHant": "文件有效期多久？"
  },
  {
    "id": "cartao-saude-ha-consulta-aberta-hoje",
    "situacao": "saude",
    "order": 111,
    "pt": "Há consulta aberta hoje?",
    "en": "Is there a walk-in appointment today?",
    "zhHans": "今天有当日门诊吗？",
    "zhHant": "今天有當日門診嗎？"
  },
  {
    "id": "cartao-saude-estou-gravida-de-12-semanas",
    "situacao": "saude",
    "order": 112,
    "pt": "Estou grávida de 12 semanas.",
    "en": "I'm 12 weeks pregnant.",
    "zhHans": "我懷孕12周了。",
    "zhHant": "我懷孕12週了。"
  },
  {
    "id": "cartao-saude-tenho-de-vir-em-jejum",
    "situacao": "saude",
    "order": 113,
    "pt": "Tenho de vir em jejum?",
    "en": "Do I need to come fasting?",
    "zhHans": "需要空腹來吗？",
    "zhHant": "需要空腹來嗎？"
  },
  {
    "id": "cartao-saude-ha-medicamento-generico",
    "situacao": "saude",
    "order": 114,
    "pt": "Há medicamento genérico?",
    "en": "Is there a generic version?",
    "zhHans": "有仿制药吗？",
    "zhHant": "有仿製藥嗎？"
  },
  {
    "id": "cartao-saude-preciso-de-um-atestado-medico-para-o-trabalho",
    "situacao": "saude",
    "order": 115,
    "pt": "Preciso de um atestado médico para o trabalho.",
    "en": "I need a medical certificate for work.",
    "zhHans": "我需要一份医生证明交给公司。",
    "zhHant": "我需要一份醫生證明交給公司。"
  },
  {
    "id": "cartao-aima-qual-e-o-estado-do-meu-processo-numero",
    "situacao": "aima",
    "order": 116,
    "pt": "Qual é o estado do meu processo? Número: […]",
    "en": "What's my case status? Number: […]",
    "zhHans": "我的案件状态如何？編号：……",
    "zhHant": "我的案件狀態如何？編號：……"
  },
  {
    "id": "cartao-aima-recebi-esta-notificacao-o-que-devo-fazer",
    "situacao": "aima",
    "order": 117,
    "pt": "Recebi esta notificação — o que devo fazer?",
    "en": "I received this notification — what should I do?",
    "zhHans": "我收到这份通知——该怎么办？",
    "zhHant": "我收到這份通知——該怎麼辦？"
  },
  {
    "id": "cartao-aima-os-documentos-estao-apostilados-e-traduzidos",
    "situacao": "aima",
    "order": 118,
    "pt": "Os documentos estão apostilados e traduzidos.",
    "en": "The documents are apostilled and translated.",
    "zhHans": "文件已做海牙认证并翻译。",
    "zhHant": "文件已做海牙認證並翻譯。"
  },
  {
    "id": "cartao-aima-posso-carregar-o-documento-no-portal",
    "situacao": "aima",
    "order": 119,
    "pt": "Posso carregar o documento no portal?",
    "en": "Can I upload the document on the portal?",
    "zhHans": "可以在网站上上传文件吗？",
    "zhHant": "可以在網站上上傳文件嗎？"
  },
  {
    "id": "cartao-aima-quero-atualizar-a-morada-no-processo",
    "situacao": "aima",
    "order": 120,
    "pt": "Quero atualizar a morada no processo.",
    "en": "I want to update the address on my case.",
    "zhHans": "我想更新案件中的地址。",
    "zhHant": "我想更新案件中的地址。"
  },
  {
    "id": "cartao-escola-venho-justificar-a-falta-do-meu-filho-da-minha-filha",
    "situacao": "escola",
    "order": 121,
    "pt": "Venho justificar a falta do meu filho / da minha filha.",
    "en": "I've come to justify my son's / daughter's absence.",
    "zhHans": "我來为儿子／女儿的缺勤提交说明。",
    "zhHant": "我來為兒子／女兒的缺勤提交說明。"
  },
  {
    "id": "cartao-escola-a-minha-filha-precisa-de-apoio-de-plnm",
    "situacao": "escola",
    "order": 122,
    "pt": "A minha filha precisa de apoio de PLNM.",
    "en": "My daughter needs PLNM support.",
    "zhHans": "我女儿需要葡语非母语课程輔导。",
    "zhHant": "我女兒需要葡語非母語課程輔導。"
  },
  {
    "id": "cartao-escola-como-peco-a-equivalencia-dos-estudos-do-estrangeiro",
    "situacao": "escola",
    "order": 123,
    "pt": "Como peço a equivalência dos estudos do estrangeiro?",
    "en": "How do I apply for recognition of foreign studies?",
    "zhHans": "如何申请國外学历的同等认证？",
    "zhHant": "如何申請國外學歷的同等認證？"
  },
  {
    "id": "cartao-escola-assino-a-autorizacao-da-visita-de-estudo",
    "situacao": "escola",
    "order": 124,
    "pt": "Assino a autorização da visita de estudo.",
    "en": "I'm signing the school-trip permission slip.",
    "zhHans": "我來签校外教学同意书。",
    "zhHant": "我來簽校外教學同意書。"
  },
  {
    "id": "cartao-escola-queria-falar-com-o-diretor-de-turma",
    "situacao": "escola",
    "order": 125,
    "pt": "Queria falar com o diretor de turma.",
    "en": "I'd like to speak with the form tutor.",
    "zhHans": "我想和班主任谈谈。",
    "zhHant": "我想和班主任談談。"
  },
  {
    "id": "cartao-iefp-qual-e-o-salario-minimo-atual",
    "situacao": "iefp",
    "order": 126,
    "pt": "Qual é o salário mínimo atual?",
    "en": "What's the current minimum wage?",
    "zhHans": "现在的最低工资是多少？",
    "zhHant": "現在的最低工資是多少？"
  },
  {
    "id": "cartao-iefp-tenho-direito-a-subsidio-de-ferias-e-de-natal",
    "situacao": "iefp",
    "order": 127,
    "pt": "Tenho direito a subsídio de férias e de Natal.",
    "en": "I'm entitled to holiday and Christmas bonuses.",
    "zhHans": "我有权领取假期津贴和圣诞津贴。",
    "zhHant": "我有權領取假期津貼和聖誕津貼。"
  },
  {
    "id": "cartao-iefp-o-contrato-e-a-termo-ou-sem-termo",
    "situacao": "iefp",
    "order": 128,
    "pt": "O contrato é a termo ou sem termo?",
    "en": "Is the contract fixed-term or permanent?",
    "zhHans": "合同是固定期限还是无固定期限？",
    "zhHant": "合同是固定期限還是無固定期限？"
  },
  {
    "id": "cartao-iefp-quero-apresentar-queixa-na-act",
    "situacao": "iefp",
    "order": 129,
    "pt": "Quero apresentar queixa na ACT.",
    "en": "I want to file a complaint with the ACT.",
    "zhHans": "我要向劳动监察局投诉。",
    "zhHant": "我要向勞動監察局投訴。"
  },
  {
    "id": "cartao-iefp-quero-inscrever-me-no-curso-de-portugues",
    "situacao": "iefp",
    "order": 130,
    "pt": "Quero inscrever-me no curso de português.",
    "en": "I want to enrol in the Portuguese course.",
    "zhHans": "我想報名葡语课程。",
    "zhHant": "我想報名葡語課程。"
  },
  {
    "id": "cartao-seguranca-social-quero-pedir-a-licenca-parental",
    "situacao": "seguranca_social",
    "order": 131,
    "pt": "Quero pedir a licença parental.",
    "en": "I want to apply for parental leave.",
    "zhHans": "我想申请育儿假。",
    "zhHant": "我想申請育兒假。"
  },
  {
    "id": "cartao-seguranca-social-quando-entrego-a-declaracao-trimestral",
    "situacao": "seguranca_social",
    "order": 132,
    "pt": "Quando entrego a declaração trimestral?",
    "en": "When do I file the quarterly declaration?",
    "zhHans": "季度申報什么时候交？",
    "zhHant": "季度申報什麼時候交？"
  },
  {
    "id": "cartao-seguranca-social-tenho-isencao-no-primeiro-ano-de-atividade",
    "situacao": "seguranca_social",
    "order": 133,
    "pt": "Tenho isenção no primeiro ano de atividade?",
    "en": "Am I exempt in my first year of activity?",
    "zhHans": "开业第一年可以豁免供款吗？",
    "zhHant": "開業第一年可以豁免供款嗎？"
  },
  {
    "id": "cartao-seguranca-social-quero-atualizar-o-iban-para-os-pagamentos",
    "situacao": "seguranca_social",
    "order": 134,
    "pt": "Quero atualizar o IBAN para os pagamentos.",
    "en": "I want to update my IBAN for payments.",
    "zhHans": "我想更新收款的IBAN。",
    "zhHant": "我想更新收款的IBAN。"
  },
  {
    "id": "cartao-seguranca-social-como-peco-o-abono-de-familia-para-o-meu-filho",
    "situacao": "seguranca_social",
    "order": 135,
    "pt": "Como peço o abono de família para o meu filho?",
    "en": "How do I apply for family allowance for my child?",
    "zhHans": "怎么给孩子申请家庭津贴？",
    "zhHant": "怎麼給孩子申請家庭津貼？"
  },
  {
    "id": "cartao-arrendamento-o-esquentador-esta-avariado-pode-mandar-arranjar",
    "situacao": "arrendamento",
    "order": 136,
    "pt": "O esquentador está avariado — pode mandar arranjar?",
    "en": "The water heater is broken — can you have it repaired?",
    "zhHans": "热水器坏了——可以安排维修吗？",
    "zhHant": "熱水器壞了——可以安排維修嗎？"
  },
  {
    "id": "cartao-arrendamento-ha-humidade-e-bolor-no-quarto",
    "situacao": "arrendamento",
    "order": 137,
    "pt": "Há humidade e bolor no quarto.",
    "en": "There's damp and mould in the bedroom.",
    "zhHans": "臥室里有潮湿和霉菌。",
    "zhHant": "臥室裡有潮濕和霉菌。"
  },
  {
    "id": "cartao-arrendamento-a-reparacao-e-por-conta-do-senhorio",
    "situacao": "arrendamento",
    "order": 138,
    "pt": "A reparação é por conta do senhorio.",
    "en": "The repair is at the landlord's expense.",
    "zhHans": "维修费由房东承担。",
    "zhHant": "維修費由房東承擔。"
  },
  {
    "id": "cartao-arrendamento-quando-e-devolvida-a-caucao",
    "situacao": "arrendamento",
    "order": 139,
    "pt": "Quando é devolvida a caução?",
    "en": "When is the deposit returned?",
    "zhHans": "押金什么时候退还？",
    "zhHant": "押金什麼時候退還？"
  },
  {
    "id": "cartao-arrendamento-envio-a-denuncia-por-carta-registada",
    "situacao": "arrendamento",
    "order": 140,
    "pt": "Envio a denúncia por carta registada.",
    "en": "I'll send the termination notice by registered letter.",
    "zhHans": "我会用挂号信寄解约通知。",
    "zhHant": "我會用掛號信寄解約通知。"
  },
  {
    "id": "cartao-transportes-de-que-linha-parte-o-comboio-para",
    "situacao": "transportes",
    "order": 141,
    "pt": "De que linha parte o comboio para…?",
    "en": "Which platform does the train to … leave from?",
    "zhHans": "去……的火车从哪个站台出发？",
    "zhHant": "去……的火車從哪個站台出發？"
  },
  {
    "id": "cartao-transportes-tenho-de-fazer-transbordo",
    "situacao": "transportes",
    "order": 142,
    "pt": "Tenho de fazer transbordo?",
    "en": "Do I need to transfer?",
    "zhHans": "我需要换乘吗？",
    "zhHant": "我需要換乘嗎？"
  },
  {
    "id": "cartao-transportes-aqui-esta-o-meu-passe-esta-validado",
    "situacao": "transportes",
    "order": 143,
    "pt": "Aqui está o meu passe — está validado.",
    "en": "Here's my pass — it's validated.",
    "zhHans": "这是我的月票——已经打过卡了。",
    "zhHant": "這是我的月票——已經打過卡了。"
  },
  {
    "id": "cartao-transportes-a-que-horas-e-a-ultima-circulacao",
    "situacao": "transportes",
    "order": 144,
    "pt": "A que horas é a última circulação?",
    "en": "What time is the last service?",
    "zhHans": "末班车是几点？",
    "zhHant": "末班車是幾點？"
  },
  {
    "id": "cartao-transportes-ha-greve-hoje",
    "situacao": "transportes",
    "order": 145,
    "pt": "Há greve hoje?",
    "en": "Is there a strike today?",
    "zhHans": "今天有罢工吗？",
    "zhHant": "今天有罷工嗎？"
  },
  {
    "id": "cartao-trabalho-hotelaria-o-hospede-do-n-pediu-um-berco-uma-cama-extra",
    "situacao": "trabalho_hotelaria",
    "order": 146,
    "pt": "O hóspede do [n.º] pediu um berço / uma cama extra.",
    "en": "The guest in [room] asked for a cot / extra bed.",
    "zhHans": "[房号]的住客要一张婴儿床／加床。",
    "zhHant": "[房號]的住客要一張嬰兒床／加床。"
  },
  {
    "id": "cartao-trabalho-hotelaria-o-ar-condicionado-do-n-esta-avariado-chamo-a-manutenca",
    "situacao": "trabalho_hotelaria",
    "order": 147,
    "pt": "O ar condicionado do [n.º] está avariado — chamo a manutenção.",
    "en": "The AC in [room] is broken — I'll call maintenance.",
    "zhHans": "[房号]的空调坏了——我叫维修部。",
    "zhHant": "[房號]的空調壞了——我叫維修部。"
  },
  {
    "id": "cartao-trabalho-hotelaria-posso-guardar-a-sua-bagagem",
    "situacao": "trabalho_hotelaria",
    "order": 148,
    "pt": "Posso guardar a sua bagagem.",
    "en": "I can store your luggage.",
    "zhHans": "我可以帮您寄存行李。",
    "zhHant": "我可以幫您寄存行李。"
  },
  {
    "id": "cartao-trabalho-hotelaria-o-check-out-e-ate-ao-meio-dia",
    "situacao": "trabalho_hotelaria",
    "order": 149,
    "pt": "O check-out é até ao meio-dia.",
    "en": "Check-out is by noon.",
    "zhHans": "退房时间是中午十二点前。",
    "zhHant": "退房時間是中午十二點前。"
  },
  {
    "id": "cartao-trabalho-hotelaria-falta-roupa-lavada-na-rouparia",
    "situacao": "trabalho_hotelaria",
    "order": 150,
    "pt": "Falta roupa lavada na rouparia.",
    "en": "We're out of clean linen in the linen room.",
    "zhHans": "布草房的干净布草不够了。",
    "zhHant": "布草房的乾淨布草不夠了。"
  },
  {
    "id": "cartao-trabalho-restauracao-desejam-o-couvert",
    "situacao": "trabalho_restauracao",
    "order": 151,
    "pt": "Desejam o couvert?",
    "en": "Would you like the couvert?",
    "zhHans": "需要餐前小食吗？（收费）",
    "zhHant": "需要餐前小食嗎？（收費）"
  },
  {
    "id": "cartao-trabalho-restauracao-como-deseja-o-bife-mal-no-ponto-ou-bem-passado",
    "situacao": "trabalho_restauracao",
    "order": 152,
    "pt": "Como deseja o bife — mal, no ponto ou bem passado?",
    "en": "How would you like the steak — rare, medium or well done?",
    "zhHans": "牛排要几分熟——三分、五分还是全熟？",
    "zhHant": "牛排要幾分熟——三分、五分還是全熟？"
  },
  {
    "id": "cartao-trabalho-restauracao-a-meia-dose-chega-para-uma-pessoa",
    "situacao": "trabalho_restauracao",
    "order": 153,
    "pt": "A meia dose chega para uma pessoa.",
    "en": "A half portion is enough for one person.",
    "zhHans": "半份够一个人吃。",
    "zhHant": "半份夠一個人吃。"
  },
  {
    "id": "cartao-trabalho-restauracao-pagam-junto-ou-em-separado",
    "situacao": "trabalho_restauracao",
    "order": 154,
    "pt": "Pagam junto ou em separado?",
    "en": "Together or separately?",
    "zhHans": "一起付还是分开付？",
    "zhHant": "一起付還是分開付？"
  },
  {
    "id": "cartao-trabalho-restauracao-quer-fatura-com-contribuinte",
    "situacao": "trabalho_restauracao",
    "order": 155,
    "pt": "Quer fatura com contribuinte?",
    "en": "Receipt with your tax number?",
    "zhHans": "要开带税号的发票吗？",
    "zhHant": "要開帶稅號的發票嗎？"
  },
  {
    "id": "cartao-trabalho-limpezas-tambem-passo-a-ferro-e-mais-uma-hora",
    "situacao": "trabalho_limpezas",
    "order": 156,
    "pt": "Também passo a ferro — é mais uma hora.",
    "en": "I also iron — it's one more hour.",
    "zhHans": "我也熨衣服——多算一小时。",
    "zhHant": "我也熨衣服——多算一小時。"
  },
  {
    "id": "cartao-trabalho-limpezas-a-limpeza-a-fundo-custa-mais",
    "situacao": "trabalho_limpezas",
    "order": 157,
    "pt": "A limpeza a fundo custa mais.",
    "en": "A deep clean costs more.",
    "zhHans": "深度清洁要加钱。",
    "zhHant": "深度清潔要加錢。"
  },
  {
    "id": "cartao-trabalho-limpezas-nao-posso-ir-na-dia-podemos-remarcar",
    "situacao": "trabalho_limpezas",
    "order": 158,
    "pt": "Não posso ir na [dia] — podemos remarcar?",
    "en": "I can't come on [day] — can we reschedule?",
    "zhHans": "[星期几]我來不了——可以改期吗？",
    "zhHant": "[星期幾]我來不了——可以改期嗎？"
  },
  {
    "id": "cartao-trabalho-limpezas-nos-feriados-o-valor-e-a-dobrar",
    "situacao": "trabalho_limpezas",
    "order": 159,
    "pt": "Nos feriados o valor é a dobrar.",
    "en": "On public holidays the rate is double.",
    "zhHans": "公众假期工钱双倍。",
    "zhHant": "公眾假期工錢雙倍。"
  },
  {
    "id": "cartao-trabalho-limpezas-posso-dar-referencias-de-outros-clientes",
    "situacao": "trabalho_limpezas",
    "order": 160,
    "pt": "Posso dar referências de outros clientes.",
    "en": "I can provide references from other clients.",
    "zhHans": "我可以提供其他客户的推荐。",
    "zhHant": "我可以提供其他客戶的推薦。"
  },
  {
    "id": "cartao-trabalho-construcao-quando-e-o-dia-de-pagamento",
    "situacao": "trabalho_construcao",
    "order": 161,
    "pt": "Quando é o dia de pagamento?",
    "en": "When is payday?",
    "zhHans": "发工资是哪天？",
    "zhHant": "發工資是哪天？"
  },
  {
    "id": "cartao-trabalho-construcao-temos-seguro-de-acidentes-de-trabalho",
    "situacao": "trabalho_construcao",
    "order": 162,
    "pt": "Temos seguro de acidentes de trabalho?",
    "en": "Do we have workplace accident insurance?",
    "zhHans": "我们有工伤保险吗？",
    "zhHant": "我們有工傷保險嗎？"
  },
  {
    "id": "cartao-trabalho-construcao-falta-material-vou-a-loja",
    "situacao": "trabalho_construcao",
    "order": 163,
    "pt": "Falta material — vou à loja.",
    "en": "We're short on materials — I'll go to the shop.",
    "zhHans": "材料不够——我去建材店。",
    "zhHant": "材料不夠——我去建材店。"
  },
  {
    "id": "cartao-trabalho-construcao-onde-despejamos-o-entulho",
    "situacao": "trabalho_construcao",
    "order": 164,
    "pt": "Onde despejamos o entulho?",
    "en": "Where do we dump the rubble?",
    "zhHans": "建筑垃圾倒在哪里？",
    "zhHant": "建築垃圾倒在哪裡？"
  },
  {
    "id": "cartao-trabalho-construcao-as-horas-extra-sao-pagas-com-acrescimo",
    "situacao": "trabalho_construcao",
    "order": 165,
    "pt": "As horas extra são pagas com acréscimo.",
    "en": "Overtime is paid at a higher rate.",
    "zhHans": "加班费按加成支付。",
    "zhHant": "加班費按加成支付。"
  },
  {
    "id": "cartao-trabalho-entregas-venho-recolher-o-pedido-n",
    "situacao": "trabalho_entregas",
    "order": 166,
    "pt": "Venho recolher o pedido n.º […]",
    "en": "I'm here to pick up order no. […]",
    "zhHans": "我來取……号订单。",
    "zhHant": "我來取……號訂單。"
  },
  {
    "id": "cartao-trabalho-entregas-o-pedido-ainda-nao-esta-pronto-vou-marcar-a-demora",
    "situacao": "trabalho_entregas",
    "order": 167,
    "pt": "O pedido ainda não está pronto — vou marcar a demora.",
    "en": "The order isn't ready — I'll log the delay.",
    "zhHans": "订单还没好——我标记一下等候。",
    "zhHant": "訂單還沒好——我標記一下等候。"
  },
  {
    "id": "cartao-trabalho-entregas-o-cliente-nao-atende-vou-reportar-ao-suporte",
    "situacao": "trabalho_entregas",
    "order": 168,
    "pt": "O cliente não atende — vou reportar ao suporte.",
    "en": "The customer isn't answering — I'll report it to support.",
    "zhHans": "顾客不接电话——我上報客服。",
    "zhHant": "顧客不接電話——我上報客服。"
  },
  {
    "id": "cartao-trabalho-entregas-a-morada-esta-errada-pode-confirmar",
    "situacao": "trabalho_entregas",
    "order": 169,
    "pt": "A morada está errada — pode confirmar?",
    "en": "The address is wrong — can you confirm it?",
    "zhHans": "地址不对——您能确认一下吗？",
    "zhHant": "地址不對——您能確認一下嗎？"
  },
  {
    "id": "cartao-trabalho-entregas-e-pagamento-em-dinheiro-tem-troco",
    "situacao": "trabalho_entregas",
    "order": 170,
    "pt": "É pagamento em dinheiro — tem troco?",
    "en": "It's a cash payment — do you have change?",
    "zhHans": "现金支付——您有零钱找吗？",
    "zhHant": "現金支付——您有零錢找嗎？"
  }
];
