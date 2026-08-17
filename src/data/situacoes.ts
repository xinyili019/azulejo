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
      },
      {
        "id": "espaco_cidadao",
        "label": "Espaço Cidadão"
      },
      {
        "id": "imt_carta_conducao",
        "label": "IMT e Carta de Condução"
      },
      {
        "id": "conservatoria_registo_civil",
        "label": "Conservatória e Registo Civil"
      },
      {
        "id": "camara_municipal",
        "label": "Câmara Municipal"
      },
      {
        "id": "reconhecimento_diplomas",
        "label": "Reconhecimento de Diplomas"
      },
      {
        "id": "consulado_documentos",
        "label": "Consulado e Documentos Estrangeiros"
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
      },
      {
        "id": "veterinario",
        "label": "Veterinário"
      },
      {
        "id": "ginasio",
        "label": "Ginásio"
      },
      {
        "id": "convivio",
        "label": "Convívio"
      },
      {
        "id": "vizinhos",
        "label": "Vizinhos"
      },
      {
        "id": "cabeleireiro_barbeiro",
        "label": "Cabeleireiro e Barbeiro"
      },
      {
        "id": "farmacia",
        "label": "Farmácia"
      },
      {
        "id": "supermercado_mercado",
        "label": "Supermercado e Mercado"
      },
      {
        "id": "cafe_restaurante",
        "label": "Café e Restaurante"
      },
      {
        "id": "consultorio_medico",
        "label": "Consultório Médico"
      },
      {
        "id": "casa_reparacoes",
        "label": "Casa: Avarias e Reparações"
      },
      {
        "id": "agua_luz_gas",
        "label": "Água, Luz e Gás"
      },
      {
        "id": "telemovel_internet",
        "label": "Telemóvel e Internet"
      },
      {
        "id": "trocas_devolucoes",
        "label": "Compras, Trocas e Devoluções"
      },
      {
        "id": "policia_documentos",
        "label": "Polícia e Documentos Perdidos"
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
  "trabalho_entregas": "Entregas",
  "veterinario": "Veterinário",
  "ginasio": "Ginásio",
  "convivio": "Convívio",
  "vizinhos": "Vizinhos",
  "cabeleireiro_barbeiro": "Cabeleireiro e Barbeiro",
  "farmacia": "Farmácia",
  "supermercado_mercado": "Supermercado e Mercado",
  "cafe_restaurante": "Café e Restaurante",
  "consultorio_medico": "Consultório Médico",
  "casa_reparacoes": "Casa: Avarias e Reparações",
  "agua_luz_gas": "Água, Luz e Gás",
  "telemovel_internet": "Telemóvel e Internet",
  "trocas_devolucoes": "Compras, Trocas e Devoluções",
  "policia_documentos": "Polícia e Documentos Perdidos",
  "espaco_cidadao": "Espaço Cidadão",
  "imt_carta_conducao": "IMT e Carta de Condução",
  "conservatoria_registo_civil": "Conservatória e Registo Civil",
  "camara_municipal": "Câmara Municipal",
  "reconhecimento_diplomas": "Reconhecimento de Diplomas",
  "consulado_documentos": "Consulado e Documentos Estrangeiros"
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
    "pt": "AIMA",
    "en": "Agency for Integration, Migration and Asylum",
    "zhHans": "移民与庇护融合署",
    "zhHant": "移民與庇護融合署",
    "id": "az-0658",
    "legacyIds": [
      "situacao-a-aima"
    ],
    "pos": "noun"
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
  },
  {
    "situacao": "veterinario",
    "pt": "o veterinário",
    "en": "veterinarian",
    "zhHans": "兽医",
    "zhHant": "獸醫",
    "id": "az-1099",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-veterinario"
    ],
    "examplePt": "O veterinário é simpático.",
    "exampleEn": "The vet is friendly.",
    "exampleZhHans": "兽医人很好。",
    "exampleZhHant": "獸醫人很好。"
  },
  {
    "situacao": "veterinario",
    "pt": "a clínica veterinária",
    "en": "veterinary clinic",
    "zhHans": "兽医诊所",
    "zhHant": "獸醫診所",
    "id": "az-1100",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-clinica-veterinaria"
    ],
    "examplePt": "A clínica abre às nove.",
    "exampleEn": "The clinic opens at nine.",
    "exampleZhHans": "诊所九点开门。",
    "exampleZhHant": "診所九點開門。"
  },
  {
    "situacao": "veterinario",
    "pt": "o animal de estimação",
    "en": "pet",
    "zhHans": "宠物",
    "zhHant": "寵物",
    "id": "az-1101",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-animal-de-estimacao"
    ],
    "examplePt": "Tens animais de estimação?",
    "exampleEn": "Do you have pets?",
    "exampleZhHans": "你有养宠物吗？",
    "exampleZhHant": "你有養寵物嗎？"
  },
  {
    "situacao": "veterinario",
    "pt": "o cão",
    "en": "dog",
    "zhHans": "狗",
    "zhHant": "狗",
    "id": "az-1102",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-cao"
    ],
    "examplePt": "O meu cão chama-se Rex.",
    "exampleEn": "My dog is called Rex.",
    "exampleZhHans": "我的狗叫Rex。",
    "exampleZhHant": "我的狗叫Rex。"
  },
  {
    "situacao": "veterinario",
    "pt": "o gato",
    "en": "cat",
    "zhHans": "猫",
    "zhHant": "貓",
    "id": "az-1103",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-gato"
    ],
    "examplePt": "O gato dorme muito.",
    "exampleEn": "The cat sleeps a lot.",
    "exampleZhHans": "猫睡很多。",
    "exampleZhHant": "貓睡很多。"
  },
  {
    "situacao": "veterinario",
    "pt": "a vacina",
    "en": "vaccine",
    "zhHans": "疫苗",
    "zhHant": "疫苗",
    "id": "az-0872",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-vacina"
    ],
    "examplePt": "A vacina está em dia.",
    "exampleEn": "The vaccine is up to date.",
    "exampleZhHans": "疫苗都是最新的。",
    "exampleZhHant": "疫苗都是最新的。"
  },
  {
    "situacao": "veterinario",
    "pt": "vacinar",
    "en": "to vaccinate",
    "zhHans": "打疫苗",
    "zhHant": "打疫苗",
    "id": "az-1104",
    "pos": "verb",
    "legacyIds": [
      "situacao-vacinar"
    ],
    "examplePt": "Vamos vacinar o cão.",
    "exampleEn": "Let's vaccinate the dog.",
    "exampleZhHans": "我们去帮狗打疫苗。",
    "exampleZhHant": "我們去幫狗打疫苗。"
  },
  {
    "situacao": "veterinario",
    "pt": "a desparasitação",
    "en": "deworming",
    "zhHans": "驱虫",
    "zhHant": "驅蟲",
    "id": "az-1105",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-desparasitacao"
    ],
    "examplePt": "Fiz a desparasitação em casa.",
    "exampleEn": "I did the deworming at home.",
    "exampleZhHans": "我在家帮它驱虫了。",
    "exampleZhHant": "我在家幫牠驅蟲了。"
  },
  {
    "situacao": "veterinario",
    "pt": "o microchip",
    "en": "microchip",
    "zhHans": "芯片",
    "zhHant": "晶片",
    "id": "az-1106",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-microchip"
    ],
    "examplePt": "O gato já tem microchip.",
    "exampleEn": "The cat already has a microchip.",
    "exampleZhHans": "猫已经植入芯片了。",
    "exampleZhHant": "貓已經植入晶片了。"
  },
  {
    "situacao": "veterinario",
    "pt": "o registo",
    "en": "registration",
    "zhHans": "登记",
    "zhHant": "登記",
    "id": "az-1107",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-registo"
    ],
    "examplePt": "O registo é obrigatório.",
    "exampleEn": "Registration is mandatory.",
    "exampleZhHans": "登记是强制的。",
    "exampleZhHant": "登記是強制的。"
  },
  {
    "situacao": "veterinario",
    "pt": "a consulta",
    "en": "appointment",
    "zhHans": "看诊",
    "zhHant": "看診",
    "id": "az-1108",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-consulta"
    ],
    "examplePt": "Marquei consulta para hoje.",
    "exampleEn": "I made an appointment for today.",
    "exampleZhHans": "我约了今天看诊。",
    "exampleZhHant": "我約了今天看診。"
  },
  {
    "situacao": "veterinario",
    "pt": "a urgência",
    "en": "emergency",
    "zhHans": "急诊",
    "zhHant": "急診",
    "id": "az-0512",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Fomos à urgência ontem.",
    "exampleEn": "We went to the emergency room yesterday.",
    "exampleZhHans": "我们昨天去了急诊。",
    "exampleZhHant": "我們昨天去了急診。"
  },
  {
    "situacao": "veterinario",
    "pt": "a ração",
    "en": "pet food",
    "zhHans": "饲料",
    "zhHant": "飼料",
    "id": "az-1109",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-racao"
    ],
    "examplePt": "Comprei ração nova.",
    "exampleEn": "I bought new food.",
    "exampleZhHans": "我买了新的饲料。",
    "exampleZhHant": "我買了新的飼料。"
  },
  {
    "situacao": "veterinario",
    "pt": "a trela",
    "en": "leash",
    "zhHans": "牵绳",
    "zhHant": "牽繩",
    "id": "az-1110",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-trela"
    ],
    "examplePt": "Usa sempre a trela.",
    "exampleEn": "Always use the leash.",
    "exampleZhHans": "要一直用牵绳。",
    "exampleZhHant": "要一直用牽繩。"
  },
  {
    "situacao": "veterinario",
    "pt": "o açaime",
    "en": "muzzle",
    "zhHans": "嘴套",
    "zhHant": "嘴套",
    "id": "az-1111",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-acaime"
    ],
    "examplePt": "O açaime é obrigatório?",
    "exampleEn": "Is the muzzle mandatory?",
    "exampleZhHans": "一定要戴嘴套吗？",
    "exampleZhHant": "一定要戴嘴套嗎？"
  },
  {
    "situacao": "veterinario",
    "pt": "a coleira",
    "en": "collar",
    "zhHans": "项圈",
    "zhHant": "項圈",
    "id": "az-1112",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-coleira"
    ],
    "examplePt": "A coleira é vermelha.",
    "exampleEn": "The collar is red.",
    "exampleZhHans": "项圈是红色的。",
    "exampleZhHant": "項圈是紅色的。"
  },
  {
    "situacao": "veterinario",
    "pt": "a transportadora",
    "en": "pet carrier",
    "zhHans": "宠物提笼",
    "zhHant": "寵物提籠",
    "id": "az-1113",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-transportadora"
    ],
    "examplePt": "O gato odeia a transportadora.",
    "exampleEn": "The cat hates the carrier.",
    "exampleZhHans": "猫讨厌提笼。",
    "exampleZhHant": "貓討厭提籠。"
  },
  {
    "situacao": "veterinario",
    "pt": "a esterilização",
    "en": "spaying / neutering",
    "zhHans": "绝育",
    "zhHant": "絕育",
    "id": "az-1114",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-esterilizacao"
    ],
    "examplePt": "A esterilização é amanhã.",
    "exampleEn": "Sterilization is tomorrow.",
    "exampleZhHans": "明天做绝育手术。",
    "exampleZhHant": "明天做絕育手術。"
  },
  {
    "situacao": "veterinario",
    "pt": "vomitar",
    "en": "to vomit",
    "zhHans": "呕吐",
    "zhHant": "嘔吐",
    "id": "az-1115",
    "pos": "verb",
    "legacyIds": [
      "situacao-vomitar"
    ],
    "examplePt": "Ele vomitou de manhã.",
    "exampleEn": "He vomited in the morning.",
    "exampleZhHans": "它早上吐了。",
    "exampleZhHant": "牠早上吐了。"
  },
  {
    "situacao": "veterinario",
    "pt": "a diarreia",
    "en": "diarrhea",
    "zhHans": "腹泻",
    "zhHant": "腹瀉",
    "id": "az-1116",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-diarreia"
    ],
    "examplePt": "O cão tem diarreia.",
    "exampleEn": "The dog has diarrhea.",
    "exampleZhHans": "狗拉肚子了。",
    "exampleZhHant": "狗拉肚子了。"
  },
  {
    "situacao": "veterinario",
    "pt": "a ferida",
    "en": "wound",
    "zhHans": "伤口",
    "zhHant": "傷口",
    "id": "az-1117",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-ferida"
    ],
    "examplePt": "A ferida está a sarar.",
    "exampleEn": "The wound is healing.",
    "exampleZhHans": "伤口在愈合。",
    "exampleZhHant": "傷口在癒合。"
  },
  {
    "situacao": "veterinario",
    "pt": "a pata",
    "en": "paw",
    "zhHans": "爪子",
    "zhHant": "爪子",
    "id": "az-1118",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-pata"
    ],
    "examplePt": "Ele magoou a pata.",
    "exampleEn": "He hurt his paw.",
    "exampleZhHans": "它的脚受伤了。",
    "exampleZhHant": "牠的腳受傷了。"
  },
  {
    "situacao": "veterinario",
    "pt": "o pelo",
    "en": "fur",
    "zhHans": "毛",
    "zhHant": "毛",
    "id": "az-1119",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-pelo"
    ],
    "examplePt": "O pelo cai muito.",
    "exampleEn": "The hair falls out a lot.",
    "exampleZhHans": "它掉很多毛。",
    "exampleZhHant": "牠掉很多毛。"
  },
  {
    "situacao": "veterinario",
    "pt": "a pulga",
    "en": "flea",
    "zhHans": "跳蚤",
    "zhHant": "跳蚤",
    "id": "az-1120",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-pulga"
    ],
    "examplePt": "Acho que tem pulgas.",
    "exampleEn": "I think it has fleas.",
    "exampleZhHans": "我觉得它有跳蚤。",
    "exampleZhHant": "我覺得牠有跳蚤。"
  },
  {
    "situacao": "veterinario",
    "pt": "a carraça",
    "en": "tick",
    "zhHans": "蜱虫",
    "zhHant": "蜱蟲",
    "id": "az-1121",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-carraca"
    ],
    "examplePt": "Encontrei uma carraça nele.",
    "exampleEn": "I found a tick on him.",
    "exampleZhHans": "我在它身上找到一只蜱虫。",
    "exampleZhHant": "我在牠身上找到一隻蜱蟲。"
  },
  {
    "situacao": "veterinario",
    "pt": "o comprimido",
    "en": "pill",
    "zhHans": "药片",
    "zhHant": "藥片",
    "id": "az-0318",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Dá-lhe meio comprimido.",
    "exampleEn": "Give him half a pill.",
    "exampleZhHans": "给它半颗药片。",
    "exampleZhHant": "給牠半顆藥片。"
  },
  {
    "situacao": "veterinario",
    "pt": "a pomada",
    "en": "ointment",
    "zhHans": "药膏",
    "zhHant": "藥膏",
    "id": "az-1122",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-pomada"
    ],
    "examplePt": "Põe pomada na ferida.",
    "exampleEn": "Put ointment on the wound.",
    "exampleZhHans": "在伤口涂药膏。",
    "exampleZhHant": "在傷口塗藥膏。"
  },
  {
    "situacao": "veterinario",
    "pt": "morder",
    "en": "to bite",
    "zhHans": "咬",
    "zhHant": "咬",
    "id": "az-1123",
    "pos": "verb",
    "legacyIds": [
      "situacao-morder"
    ],
    "examplePt": "O cão não morde.",
    "exampleEn": "The dog doesn't bite.",
    "exampleZhHans": "这只狗不咬人。",
    "exampleZhHant": "這隻狗不咬人。"
  },
  {
    "situacao": "veterinario",
    "pt": "arranhar",
    "en": "to scratch (something)",
    "zhHans": "抓",
    "zhHant": "抓",
    "id": "az-1124",
    "pos": "verb",
    "legacyIds": [
      "situacao-arranhar"
    ],
    "examplePt": "O gato arranhou o sofá.",
    "exampleEn": "The cat scratched the sofa.",
    "exampleZhHans": "猫抓坏了沙发。",
    "exampleZhHant": "貓抓壞了沙發。"
  },
  {
    "situacao": "veterinario",
    "pt": "ladrar",
    "en": "to bark",
    "zhHans": "吠叫",
    "zhHant": "吠叫",
    "id": "az-1125",
    "pos": "verb",
    "legacyIds": [
      "situacao-ladrar"
    ],
    "examplePt": "Ele ladra à noite.",
    "exampleEn": "He barks at night.",
    "exampleZhHans": "它晚上会吠。",
    "exampleZhHant": "牠晚上會吠。"
  },
  {
    "situacao": "veterinario",
    "pt": "miar",
    "en": "to meow",
    "zhHans": "喵喵叫",
    "zhHant": "喵喵叫",
    "id": "az-1126",
    "pos": "verb",
    "legacyIds": [
      "situacao-miar"
    ],
    "examplePt": "A gata mia muito.",
    "exampleEn": "The cat meows a lot.",
    "exampleZhHans": "母猫很爱叫。",
    "exampleZhHant": "母貓很愛叫。"
  },
  {
    "situacao": "veterinario",
    "pt": "pesar",
    "en": "to weigh",
    "zhHans": "称重",
    "zhHant": "稱重",
    "id": "az-0829",
    "pos": "verb",
    "legacyIds": [
      "situacao-pesar"
    ],
    "examplePt": "Vamos pesar o gato.",
    "exampleEn": "Let's weigh the cat.",
    "exampleZhHans": "我们来帮猫量体重。",
    "exampleZhHant": "我們來幫貓量體重。"
  },
  {
    "situacao": "veterinario",
    "pt": "o passaporte de animal",
    "en": "pet passport",
    "zhHans": "宠物护照",
    "zhHant": "寵物護照",
    "id": "az-1127",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-passaporte-de-animal"
    ],
    "examplePt": "Ele já tem passaporte.",
    "exampleEn": "He already has a passport.",
    "exampleZhHans": "它已经有宠物护照了。",
    "exampleZhHant": "牠已經有寵物護照了。"
  },
  {
    "situacao": "veterinario",
    "pt": "coçar-se",
    "en": "to scratch oneself",
    "zhHans": "抓痒",
    "zhHant": "抓癢",
    "id": "az-1128",
    "pos": "verb",
    "legacyIds": [
      "situacao-cocar-se"
    ],
    "examplePt": "Ele coça-se muito.",
    "exampleEn": "He scratches a lot.",
    "exampleZhHans": "它一直抓痒。",
    "exampleZhHant": "牠一直抓癢。"
  },
  {
    "situacao": "ginasio",
    "pt": "o ginásio",
    "en": "gym",
    "zhHans": "健身房",
    "zhHant": "健身房",
    "id": "az-1129",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-ginasio"
    ],
    "examplePt": "Vou ao ginásio à noite.",
    "exampleEn": "I go to the gym at night.",
    "exampleZhHans": "我晚上去健身房。",
    "exampleZhHant": "我晚上去健身房。"
  },
  {
    "situacao": "ginasio",
    "pt": "a inscrição",
    "en": "enrollment",
    "zhHans": "报名",
    "zhHant": "報名",
    "id": "az-0330",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A inscrição faz-se online.",
    "exampleEn": "Registration is done online.",
    "exampleZhHans": "报名在线上办理。",
    "exampleZhHant": "報名在線上辦理。"
  },
  {
    "situacao": "ginasio",
    "pt": "inscrever-se",
    "en": "to sign up",
    "zhHans": "报名",
    "zhHant": "報名",
    "id": "az-1130",
    "pos": "verb",
    "legacyIds": [
      "situacao-inscrever-se"
    ],
    "examplePt": "Quero inscrever-me hoje.",
    "exampleEn": "I want to sign up today.",
    "exampleZhHans": "我想今天报名。",
    "exampleZhHant": "我想今天報名。"
  },
  {
    "situacao": "ginasio",
    "pt": "a mensalidade",
    "en": "monthly fee",
    "zhHans": "月费",
    "zhHant": "月費",
    "id": "az-1131",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-mensalidade"
    ],
    "examplePt": "A mensalidade é de trinta euros.",
    "exampleEn": "The monthly fee is thirty euros.",
    "exampleZhHans": "月费是三十欧元。",
    "exampleZhHant": "月費是三十歐元。"
  },
  {
    "situacao": "ginasio",
    "pt": "a taxa de inscrição",
    "en": "joining fee",
    "zhHans": "入会费",
    "zhHant": "入會費",
    "id": "az-1132",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-taxa-de-inscricao"
    ],
    "examplePt": "A taxa de inscrição paga-se uma vez.",
    "exampleEn": "The registration fee is paid once.",
    "exampleZhHans": "入会费只付一次。",
    "exampleZhHant": "入會費只付一次。"
  },
  {
    "situacao": "ginasio",
    "pt": "a fidelização",
    "en": "loyalty period (lock-in)",
    "zhHans": "绑约",
    "zhHant": "綁約",
    "id": "az-1133",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-fidelizacao"
    ],
    "examplePt": "Não quero fidelização.",
    "exampleEn": "I don't want loyalty.",
    "exampleZhHans": "我不想绑约。",
    "exampleZhHant": "我不想綁約。"
  },
  {
    "situacao": "ginasio",
    "pt": "o contrato",
    "en": "contract",
    "zhHans": "合约",
    "zhHant": "合約",
    "id": "az-1134",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-contrato"
    ],
    "examplePt": "Li o contrato todo.",
    "exampleEn": "I read the entire contract.",
    "exampleZhHans": "我把合约全看了。",
    "exampleZhHant": "我把合約全看了。"
  },
  {
    "situacao": "ginasio",
    "pt": "cancelar",
    "en": "to cancel",
    "zhHans": "取消",
    "zhHant": "取消",
    "id": "az-1135",
    "pos": "verb",
    "legacyIds": [
      "situacao-cancelar"
    ],
    "examplePt": "Quero cancelar a inscrição.",
    "exampleEn": "I want to unsubscribe.",
    "exampleZhHans": "我想取消会籍。",
    "exampleZhHant": "我想取消會籍。"
  },
  {
    "situacao": "ginasio",
    "pt": "a aula experimental",
    "en": "trial class",
    "zhHans": "体验课",
    "zhHant": "體驗課",
    "id": "az-1136",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-aula-experimental"
    ],
    "examplePt": "A aula experimental é grátis.",
    "exampleEn": "The trial class is free.",
    "exampleZhHans": "体验课是免费的。",
    "exampleZhHant": "體驗課是免費的。"
  },
  {
    "situacao": "ginasio",
    "pt": "a aula de grupo",
    "en": "group class",
    "zhHans": "团体课",
    "zhHant": "團體課",
    "id": "az-1137",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-aula-de-grupo"
    ],
    "examplePt": "Adoro as aulas de grupo.",
    "exampleEn": "I love group classes.",
    "exampleZhHans": "我很喜欢团体课。",
    "exampleZhHant": "我很喜歡團體課。"
  },
  {
    "situacao": "ginasio",
    "pt": "o treino",
    "en": "workout",
    "zhHans": "训练",
    "zhHant": "訓練",
    "id": "az-1138",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-treino"
    ],
    "examplePt": "O treino foi duro.",
    "exampleEn": "The training was tough.",
    "exampleZhHans": "这次训练很累。",
    "exampleZhHant": "這次訓練很累。"
  },
  {
    "situacao": "ginasio",
    "pt": "o treinador",
    "en": "trainer",
    "zhHans": "教练",
    "zhHant": "教練",
    "id": "az-1139",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-treinador"
    ],
    "examplePt": "O treinador ajuda-me muito.",
    "exampleEn": "The coach helps me a lot.",
    "exampleZhHans": "教练帮了我很多。",
    "exampleZhHant": "教練幫了我很多。"
  },
  {
    "situacao": "ginasio",
    "pt": "o plano de treino",
    "en": "training plan",
    "zhHans": "训练计划",
    "zhHant": "訓練計劃",
    "id": "az-1140",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-plano-de-treino"
    ],
    "examplePt": "Segue o plano de treino.",
    "exampleEn": "Follow the training plan.",
    "exampleZhHans": "按照训练计划做。",
    "exampleZhHant": "按照訓練計劃做。"
  },
  {
    "situacao": "ginasio",
    "pt": "o cacifo",
    "en": "locker",
    "zhHans": "置物柜",
    "zhHant": "置物櫃",
    "id": "az-1141",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-cacifo"
    ],
    "examplePt": "Deixei tudo no cacifo.",
    "exampleEn": "I left everything in the locker.",
    "exampleZhHans": "我把东西都放在置物柜。",
    "exampleZhHant": "我把東西都放在置物櫃。"
  },
  {
    "situacao": "ginasio",
    "pt": "o cadeado",
    "en": "padlock",
    "zhHans": "挂锁",
    "zhHant": "掛鎖",
    "id": "az-1142",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-cadeado"
    ],
    "examplePt": "Esqueci-me do cadeado.",
    "exampleEn": "I forgot the padlock.",
    "exampleZhHans": "我忘了带挂锁。",
    "exampleZhHant": "我忘了帶掛鎖。"
  },
  {
    "situacao": "ginasio",
    "pt": "o balneário",
    "en": "changing room",
    "zhHans": "更衣室",
    "zhHant": "更衣室",
    "id": "az-1143",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-balneario"
    ],
    "examplePt": "O balneário está limpo.",
    "exampleEn": "The locker room is clean.",
    "exampleZhHans": "更衣室很干净。",
    "exampleZhHant": "更衣室很乾淨。"
  },
  {
    "situacao": "ginasio",
    "pt": "o chuveiro",
    "en": "shower",
    "zhHans": "淋浴",
    "zhHant": "淋浴",
    "id": "az-1144",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-chuveiro"
    ],
    "examplePt": "O chuveiro é quente.",
    "exampleEn": "The shower is hot.",
    "exampleZhHans": "淋浴的水是热的。",
    "exampleZhHant": "淋浴的水是熱的。"
  },
  {
    "situacao": "ginasio",
    "pt": "a toalha",
    "en": "towel",
    "zhHans": "毛巾",
    "zhHant": "毛巾",
    "id": "az-1145",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-toalha"
    ],
    "examplePt": "A toalha é obrigatória.",
    "exampleEn": "A towel is mandatory.",
    "exampleZhHans": "毛巾是必备的。",
    "exampleZhHant": "毛巾是必備的。"
  },
  {
    "situacao": "ginasio",
    "pt": "as sapatilhas",
    "en": "sneakers",
    "zhHans": "运动鞋",
    "zhHant": "運動鞋",
    "id": "az-1146",
    "pos": "noun",
    "gender": "f-pl",
    "legacyIds": [
      "situacao-as-sapatilhas"
    ],
    "examplePt": "Comprei sapatilhas novas.",
    "exampleEn": "I bought new sneakers.",
    "exampleZhHans": "我买了新运动鞋。",
    "exampleZhHant": "我買了新運動鞋。"
  },
  {
    "situacao": "ginasio",
    "pt": "a passadeira",
    "en": "treadmill",
    "zhHans": "跑步机",
    "zhHant": "跑步機",
    "id": "az-1147",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-passadeira"
    ],
    "examplePt": "Corro na passadeira.",
    "exampleEn": "I run on the treadmill.",
    "exampleZhHans": "我在跑步机上跑步。",
    "exampleZhHant": "我在跑步機上跑步。"
  },
  {
    "situacao": "ginasio",
    "pt": "os halteres",
    "en": "dumbbells",
    "zhHans": "哑铃",
    "zhHant": "啞鈴",
    "id": "az-1148",
    "pos": "noun",
    "gender": "m-pl",
    "legacyIds": [
      "situacao-os-halteres"
    ],
    "examplePt": "Os halteres são pesados.",
    "exampleEn": "Dumbbells are heavy.",
    "exampleZhHans": "这些哑铃很重。",
    "exampleZhHant": "這些啞鈴很重。"
  },
  {
    "situacao": "ginasio",
    "pt": "a elíptica",
    "en": "elliptical machine",
    "zhHans": "椭圆机",
    "zhHant": "橢圓機",
    "id": "az-1149",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-eliptica"
    ],
    "examplePt": "Prefiro a elíptica à passadeira.",
    "exampleEn": "I prefer the elliptical to the treadmill.",
    "exampleZhHans": "比起跑步机我更爱椭圆机。",
    "exampleZhHant": "比起跑步機我更愛橢圓機。"
  },
  {
    "situacao": "ginasio",
    "pt": "a bicicleta estática",
    "en": "exercise bike",
    "zhHans": "健身车",
    "zhHant": "健身車",
    "id": "az-1150",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-bicicleta-estatica"
    ],
    "examplePt": "Faço bicicleta vinte minutos.",
    "exampleEn": "I cycle for twenty minutes.",
    "exampleZhHans": "我踩健身车二十分钟。",
    "exampleZhHant": "我踩健身車二十分鐘。"
  },
  {
    "situacao": "ginasio",
    "pt": "o remo",
    "en": "rowing machine",
    "zhHans": "划船机",
    "zhHant": "划船機",
    "id": "az-1151",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-remo"
    ],
    "examplePt": "O remo cansa muito.",
    "exampleEn": "Rowing is very tiring.",
    "exampleZhHans": "划船机很累人。",
    "exampleZhHant": "划船機很累人。"
  },
  {
    "situacao": "ginasio",
    "pt": "a barra",
    "en": "barbell",
    "zhHans": "杠铃",
    "zhHant": "槓鈴",
    "id": "az-1152",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-barra"
    ],
    "examplePt": "A barra pesa vinte quilos.",
    "exampleEn": "The bar weighs twenty kilos.",
    "exampleZhHans": "杠铃重二十公斤。",
    "exampleZhHant": "槓鈴重二十公斤。"
  },
  {
    "situacao": "ginasio",
    "pt": "a máquina",
    "en": "machine (gym)",
    "zhHans": "器械",
    "zhHant": "器械",
    "id": "az-1153",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-maquina"
    ],
    "examplePt": "Esta máquina está ocupada.",
    "exampleEn": "This machine is busy.",
    "exampleZhHans": "这台器械有人在用。",
    "exampleZhHant": "這台器械有人在用。"
  },
  {
    "situacao": "ginasio",
    "pt": "o peso",
    "en": "weight",
    "zhHans": "重量",
    "zhHant": "重量",
    "id": "az-0830",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-peso"
    ],
    "examplePt": "Baixa um pouco o peso.",
    "exampleEn": "Lower the weight a little.",
    "exampleZhHans": "把重量调轻一点。",
    "exampleZhHant": "把重量調輕一點。"
  },
  {
    "situacao": "ginasio",
    "pt": "o alongamento",
    "en": "stretching",
    "zhHans": "伸展",
    "zhHant": "伸展",
    "id": "az-1154",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-alongamento"
    ],
    "examplePt": "Faz alongamentos no fim.",
    "exampleEn": "Stretches at the end.",
    "exampleZhHans": "最后要做伸展。",
    "exampleZhHant": "最後要做伸展。"
  },
  {
    "situacao": "ginasio",
    "pt": "o aquecimento",
    "en": "warm-up",
    "zhHans": "热身",
    "zhHant": "熱身",
    "id": "az-0967",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-aquecimento"
    ],
    "examplePt": "Nunca saltes o aquecimento.",
    "exampleEn": "Never skip the warm-up.",
    "exampleZhHans": "千万别跳过热身。",
    "exampleZhHant": "千萬別跳過熱身。"
  },
  {
    "situacao": "ginasio",
    "pt": "a musculação",
    "en": "weight training",
    "zhHans": "重量训练",
    "zhHant": "重量訓練",
    "id": "az-1155",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-musculacao"
    ],
    "examplePt": "Prefiro musculação a cardio.",
    "exampleEn": "I prefer weight training to cardio.",
    "exampleZhHans": "我爱重训胜过有氧。",
    "exampleZhHant": "我愛重訓勝過有氧。"
  },
  {
    "situacao": "ginasio",
    "pt": "o horário",
    "en": "opening hours",
    "zhHans": "营业时间",
    "zhHant": "營業時間",
    "id": "az-0679",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-horario"
    ],
    "examplePt": "O horário é alargado.",
    "exampleEn": "The hours are extended.",
    "exampleZhHans": "营业时间很长。",
    "exampleZhHant": "營業時間很長。"
  },
  {
    "situacao": "ginasio",
    "pt": "o cartão de sócio",
    "en": "membership card",
    "zhHans": "会员卡",
    "zhHant": "會員卡",
    "id": "az-1156",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-cartao-de-socio"
    ],
    "examplePt": "Traz o cartão de sócio.",
    "exampleEn": "Bring your membership card.",
    "exampleZhHans": "带上会员卡。",
    "exampleZhHant": "帶上會員卡。"
  },
  {
    "situacao": "ginasio",
    "pt": "a avaliação física",
    "en": "fitness assessment",
    "zhHans": "体能评估",
    "zhHant": "體能評估",
    "id": "az-1157",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-avaliacao-fisica"
    ],
    "examplePt": "Fiz a avaliação física ontem.",
    "exampleEn": "I did the physical assessment yesterday.",
    "exampleZhHans": "我昨天做了体能评估。",
    "exampleZhHant": "我昨天做了體能評估。"
  },
  {
    "situacao": "ginasio",
    "pt": "a lesão",
    "en": "injury",
    "zhHans": "损伤",
    "zhHant": "損傷",
    "id": "az-1158",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-lesao"
    ],
    "examplePt": "Tenho uma lesão no joelho.",
    "exampleEn": "I have a knee injury.",
    "exampleZhHans": "我膝盖受伤了。",
    "exampleZhHant": "我膝蓋受傷了。"
  },
  {
    "situacao": "ginasio",
    "pt": "magoar-se",
    "en": "to hurt oneself",
    "zhHans": "受伤",
    "zhHant": "受傷",
    "id": "az-1159",
    "pos": "verb",
    "legacyIds": [
      "situacao-magoar-se"
    ],
    "examplePt": "Magoei-me nas costas.",
    "exampleEn": "I hurt my back.",
    "exampleZhHans": "我背受伤了。",
    "exampleZhHant": "我背受傷了。"
  },
  {
    "situacao": "ginasio",
    "pt": "suar",
    "en": "to sweat",
    "zhHans": "流汗",
    "zhHant": "流汗",
    "id": "az-1160",
    "pos": "verb",
    "legacyIds": [
      "situacao-suar"
    ],
    "examplePt": "Suei imenso hoje.",
    "exampleEn": "I sweated a lot today.",
    "exampleZhHans": "我今天流了好多汗。",
    "exampleZhHant": "我今天流了好多汗。"
  },
  {
    "situacao": "convivio",
    "pt": "o convite",
    "en": "invitation",
    "zhHans": "邀请",
    "zhHant": "邀請",
    "id": "az-1161",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-convite"
    ],
    "examplePt": "Aceito o convite, obrigado.",
    "exampleEn": "I accept the invitation, thank you.",
    "exampleZhHans": "我接受邀请，谢谢。",
    "exampleZhHant": "我接受邀請，謝謝。"
  },
  {
    "situacao": "convivio",
    "pt": "convidar",
    "en": "to invite",
    "zhHans": "邀请",
    "zhHant": "邀請",
    "id": "az-1162",
    "pos": "verb",
    "legacyIds": [
      "situacao-convidar"
    ],
    "examplePt": "Vou convidar a Ana.",
    "exampleEn": "I'm going to invite Ana.",
    "exampleZhHans": "我要邀请Ana。",
    "exampleZhHant": "我要邀請Ana。"
  },
  {
    "situacao": "convivio",
    "pt": "combinar",
    "en": "to arrange to meet",
    "zhHans": "约定",
    "zhHant": "約定",
    "id": "az-1163",
    "pos": "verb",
    "legacyIds": [
      "situacao-combinar"
    ],
    "examplePt": "Combinamos para sábado?",
    "exampleEn": "Shall we arrange for Saturday?",
    "exampleZhHans": "我们约周六好吗？",
    "exampleZhHant": "我們約週六好嗎？"
  },
  {
    "situacao": "convivio",
    "pt": "a esplanada",
    "en": "outdoor café terrace",
    "zhHans": "露天座位",
    "zhHant": "露天座位",
    "id": "az-0747",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-esplanada"
    ],
    "examplePt": "Sentamo-nos na esplanada?",
    "exampleEn": "Shall we sit on the terrace?",
    "exampleZhHans": "我们坐露天座位好吗？",
    "exampleZhHant": "我們坐露天座位好嗎？"
  },
  {
    "situacao": "convivio",
    "pt": "o aniversário",
    "en": "birthday",
    "zhHans": "生日",
    "zhHant": "生日",
    "id": "az-1164",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-aniversario"
    ],
    "examplePt": "O aniversário dele é hoje.",
    "exampleEn": "His birthday is today.",
    "exampleZhHans": "今天是他的生日。",
    "exampleZhHant": "今天是他的生日。"
  },
  {
    "situacao": "convivio",
    "pt": "os parabéns",
    "en": "congratulations / happy birthday",
    "zhHans": "恭喜",
    "zhHant": "恭喜",
    "id": "az-1165",
    "pos": "noun",
    "gender": "m-pl",
    "legacyIds": [
      "situacao-os-parabens"
    ],
    "examplePt": "Dei-lhe os parabéns.",
    "exampleEn": "I congratulated him.",
    "exampleZhHans": "我向他道贺了。",
    "exampleZhHant": "我向他道賀了。"
  },
  {
    "situacao": "convivio",
    "pt": "a festa",
    "en": "party",
    "zhHans": "派对",
    "zhHant": "派對",
    "id": "az-1166",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-festa"
    ],
    "examplePt": "A festa começa às nove.",
    "exampleEn": "The party starts at nine.",
    "exampleZhHans": "派对九点开始。",
    "exampleZhHant": "派對九點開始。"
  },
  {
    "situacao": "convivio",
    "pt": "a conta",
    "en": "bill",
    "zhHans": "账单",
    "zhHant": "帳單",
    "id": "az-0160",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A conta, por favor.",
    "exampleEn": "The check, please.",
    "exampleZhHans": "请买单。",
    "exampleZhHant": "請買單。"
  },
  {
    "situacao": "convivio",
    "pt": "dividir a conta",
    "en": "to split the bill",
    "zhHans": "分摊账单",
    "zhHant": "分攤帳單",
    "id": "az-1167",
    "legacyIds": [
      "situacao-dividir-a-conta"
    ],
    "examplePt": "Dividimos a conta a meias.",
    "exampleEn": "We split the bill halves.",
    "exampleZhHans": "我们对半分账单。",
    "exampleZhHant": "我們對半分帳單。"
  },
  {
    "situacao": "convivio",
    "pt": "oferecer",
    "en": "to treat (pay for someone)",
    "zhHans": "请客",
    "zhHant": "請客",
    "id": "az-1168",
    "pos": "verb",
    "legacyIds": [
      "situacao-oferecer"
    ],
    "examplePt": "Hoje ofereço eu.",
    "exampleEn": "Today I offer.",
    "exampleZhHans": "今天我请客。",
    "exampleZhHant": "今天我請客。"
  },
  {
    "situacao": "convivio",
    "pt": "brindar",
    "en": "to toast",
    "zhHans": "举杯",
    "zhHant": "舉杯",
    "id": "az-1169",
    "pos": "verb",
    "legacyIds": [
      "situacao-brindar"
    ],
    "examplePt": "Brindámos ao aniversário.",
    "exampleEn": "We toasted the birthday.",
    "exampleZhHans": "我们为生日举杯。",
    "exampleZhHant": "我們為生日舉杯。"
  },
  {
    "situacao": "convivio",
    "pt": "saúde!",
    "en": "cheers!",
    "zhHans": "干杯",
    "zhHant": "乾杯",
    "id": "az-1170",
    "legacyIds": [
      "situacao-saude"
    ],
    "examplePt": "Saúde! À nossa!",
    "exampleEn": "Health! Ours!",
    "exampleZhHans": "干杯！敬我们！",
    "exampleZhHant": "乾杯！敬我們！"
  },
  {
    "situacao": "convivio",
    "pt": "encontrar-se",
    "en": "to meet up",
    "zhHans": "见面",
    "zhHant": "見面",
    "id": "az-1171",
    "pos": "verb",
    "legacyIds": [
      "situacao-encontrar-se"
    ],
    "examplePt": "Encontramo-nos às oito.",
    "exampleEn": "We meet at eight.",
    "exampleZhHans": "我们八点见面。",
    "exampleZhHant": "我們八點見面。"
  },
  {
    "situacao": "convivio",
    "pt": "chegar atrasado",
    "en": "to arrive late",
    "zhHans": "迟到",
    "zhHant": "遲到",
    "id": "az-1172",
    "legacyIds": [
      "situacao-chegar-atrasado"
    ],
    "examplePt": "Ele chega sempre atrasado.",
    "exampleEn": "He always arrives late.",
    "exampleZhHans": "他总是迟到。",
    "exampleZhHant": "他總是遲到。"
  },
  {
    "situacao": "convivio",
    "pt": "o atraso",
    "en": "lateness / delay",
    "zhHans": "延误",
    "zhHant": "延誤",
    "id": "az-1173",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-atraso"
    ],
    "examplePt": "Desculpa o atraso.",
    "exampleEn": "Sorry for the delay.",
    "exampleZhHans": "抱歉我迟到了。",
    "exampleZhHant": "抱歉我遲到了。"
  },
  {
    "situacao": "convivio",
    "pt": "desmarcar",
    "en": "to cancel (plans)",
    "zhHans": "取消约定",
    "zhHant": "取消約定",
    "id": "az-1174",
    "pos": "verb",
    "legacyIds": [
      "situacao-desmarcar"
    ],
    "examplePt": "Tive de desmarcar o café.",
    "exampleEn": "I had to cancel the coffee.",
    "exampleZhHans": "我只好取消喝咖啡的约。",
    "exampleZhHant": "我只好取消喝咖啡的約。"
  },
  {
    "situacao": "convivio",
    "pt": "adiar",
    "en": "to postpone",
    "zhHans": "延期",
    "zhHant": "延期",
    "id": "az-1175",
    "pos": "verb",
    "legacyIds": [
      "situacao-adiar"
    ],
    "examplePt": "Podemos adiar para sexta?",
    "exampleEn": "Can we postpone it until Friday?",
    "exampleZhHans": "能改到周五吗？",
    "exampleZhHant": "能改到週五嗎？"
  },
  {
    "situacao": "convivio",
    "pt": "estar livre",
    "en": "to be free",
    "zhHans": "有空",
    "zhHant": "有空",
    "id": "az-1176",
    "legacyIds": [
      "situacao-estar-livre"
    ],
    "examplePt": "Estou livre à tarde.",
    "exampleEn": "I'm free in the afternoon.",
    "exampleZhHans": "我下午有空。",
    "exampleZhHant": "我下午有空。"
  },
  {
    "situacao": "convivio",
    "pt": "estar ocupado",
    "en": "to be busy",
    "zhHans": "忙碌",
    "zhHant": "忙碌",
    "id": "az-1177",
    "legacyIds": [
      "situacao-estar-ocupado"
    ],
    "examplePt": "Hoje estou muito ocupado.",
    "exampleEn": "Today I am very busy.",
    "exampleZhHans": "我今天很忙。",
    "exampleZhHant": "我今天很忙。"
  },
  {
    "situacao": "convivio",
    "pt": "apetecer",
    "en": "to feel like",
    "zhHans": "想要",
    "zhHant": "想要",
    "id": "az-1178",
    "pos": "verb",
    "legacyIds": [
      "situacao-apetecer"
    ],
    "examplePt": "Apetece-me um gelado.",
    "exampleEn": "I feel like an ice cream.",
    "exampleZhHans": "我想吃冰淇淋。",
    "exampleZhHant": "我想吃冰淇淋。"
  },
  {
    "situacao": "convivio",
    "pt": "a conversa",
    "en": "conversation",
    "zhHans": "谈话",
    "zhHant": "談話",
    "id": "az-1179",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-conversa"
    ],
    "examplePt": "A conversa foi boa.",
    "exampleEn": "The conversation was good.",
    "exampleZhHans": "聊得很愉快。",
    "exampleZhHant": "聊得很愉快。"
  },
  {
    "situacao": "convivio",
    "pt": "conversar",
    "en": "to chat",
    "zhHans": "聊天",
    "zhHant": "聊天",
    "id": "az-0176",
    "pos": "verb",
    "examplePt": "Gosto de conversar contigo.",
    "exampleEn": "I like talking to you.",
    "exampleZhHans": "我喜欢和你聊天。",
    "exampleZhHant": "我喜歡和你聊天。"
  },
  {
    "situacao": "convivio",
    "pt": "conhecer",
    "en": "to meet / get to know",
    "zhHans": "认识",
    "zhHant": "認識",
    "id": "az-0441",
    "pos": "verb",
    "examplePt": "Quero conhecer os teus amigos.",
    "exampleEn": "I want to meet your friends.",
    "exampleZhHans": "我想认识你的朋友。",
    "exampleZhHant": "我想認識你的朋友。"
  },
  {
    "situacao": "convivio",
    "pt": "apresentar",
    "en": "to introduce",
    "zhHans": "介绍",
    "zhHant": "介紹",
    "id": "az-1180",
    "pos": "verb",
    "legacyIds": [
      "situacao-apresentar"
    ],
    "examplePt": "Apresento-te o Pedro.",
    "exampleEn": "Let me introduce you to Pedro.",
    "exampleZhHans": "我帮你介绍Pedro。",
    "exampleZhHant": "我幫你介紹Pedro。"
  },
  {
    "situacao": "convivio",
    "pt": "o colega",
    "en": "colleague",
    "zhHans": "同事",
    "zhHant": "同事",
    "id": "az-1181",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-colega"
    ],
    "examplePt": "Vou com uma colega.",
    "exampleEn": "I'm going with a colleague.",
    "exampleZhHans": "我和一位同事一起去。",
    "exampleZhHant": "我和一位同事一起去。"
  },
  {
    "situacao": "convivio",
    "pt": "a piada",
    "en": "joke",
    "zhHans": "笑话",
    "zhHant": "笑話",
    "id": "az-1182",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-piada"
    ],
    "examplePt": "Que piada tão boa!",
    "exampleEn": "What a good joke!",
    "exampleZhHans": "这笑话真好笑！",
    "exampleZhHant": "這笑話真好笑！"
  },
  {
    "situacao": "convivio",
    "pt": "rir",
    "en": "to laugh",
    "zhHans": "笑",
    "zhHant": "笑",
    "id": "az-1183",
    "pos": "verb",
    "legacyIds": [
      "situacao-rir"
    ],
    "examplePt": "Rimos a noite toda.",
    "exampleEn": "We laughed all night.",
    "exampleZhHans": "我们笑了一整晚。",
    "exampleZhHant": "我們笑了一整晚。"
  },
  {
    "situacao": "convivio",
    "pt": "divertir-se",
    "en": "to have fun",
    "zhHans": "玩得开心",
    "zhHant": "玩得開心",
    "id": "az-0207",
    "pos": "verb",
    "examplePt": "Divertimo-nos imenso ontem.",
    "exampleEn": "We had a lot of fun yesterday.",
    "exampleZhHans": "我们昨天玩得超开心。",
    "exampleZhHant": "我們昨天玩得超開心。"
  },
  {
    "situacao": "convivio",
    "pt": "o encontro",
    "en": "get-together",
    "zhHans": "聚会",
    "zhHant": "聚會",
    "id": "az-1184",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-encontro"
    ],
    "examplePt": "O encontro é no café.",
    "exampleEn": "The meeting is at the cafe.",
    "exampleZhHans": "聚会在咖啡馆。",
    "exampleZhHant": "聚會在咖啡館。"
  },
  {
    "situacao": "convivio",
    "pt": "a rodada",
    "en": "round (of drinks)",
    "zhHans": "一轮酒",
    "zhHant": "一輪酒",
    "id": "az-1185",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-rodada"
    ],
    "examplePt": "Esta rodada é minha.",
    "exampleEn": "This round is mine.",
    "exampleZhHans": "这轮酒我请。",
    "exampleZhHant": "這輪酒我請。"
  },
  {
    "situacao": "convivio",
    "pt": "pagar",
    "en": "to pay",
    "zhHans": "付钱",
    "zhHant": "付錢",
    "id": "az-1186",
    "pos": "verb",
    "legacyIds": [
      "situacao-pagar"
    ],
    "examplePt": "Deixa, pago eu.",
    "exampleEn": "Leave it, I'll pay.",
    "exampleZhHans": "别抢，我来付。",
    "exampleZhHant": "別搶，我來付。"
  },
  {
    "situacao": "convivio",
    "pt": "o brinde",
    "en": "toast (raising glasses)",
    "zhHans": "祝酒",
    "zhHant": "祝酒",
    "id": "az-1187",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-brinde"
    ],
    "examplePt": "Fizemos um brinde à Rita.",
    "exampleEn": "We toasted Rita.",
    "exampleZhHans": "我们为Rita举杯。",
    "exampleZhHant": "我們為Rita舉杯。"
  },
  {
    "situacao": "vizinhos",
    "pt": "o vizinho",
    "en": "neighbor",
    "zhHans": "邻居",
    "zhHant": "鄰居",
    "id": "az-1188",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-vizinho"
    ],
    "examplePt": "O vizinho de cima é simpático.",
    "exampleEn": "The upstairs neighbor is friendly.",
    "exampleZhHans": "楼上的邻居人很好。",
    "exampleZhHant": "樓上的鄰居人很好。"
  },
  {
    "situacao": "vizinhos",
    "pt": "o prédio",
    "en": "building",
    "zhHans": "大楼",
    "zhHant": "大樓",
    "id": "az-0083",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O prédio tem seis andares.",
    "exampleEn": "The building has six floors.",
    "exampleZhHans": "这栋楼有六层。",
    "exampleZhHant": "這棟樓有六層。"
  },
  {
    "situacao": "vizinhos",
    "pt": "o condomínio",
    "en": "building association / service charge",
    "zhHans": "大楼管理",
    "zhHant": "大樓管理",
    "id": "az-0715",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-condominio"
    ],
    "examplePt": "Pago o condomínio amanhã.",
    "exampleEn": "I pay the condo tomorrow.",
    "exampleZhHans": "我明天缴管理费。",
    "exampleZhHant": "我明天繳管理費。"
  },
  {
    "situacao": "vizinhos",
    "pt": "a reunião de condomínio",
    "en": "building meeting",
    "zhHans": "业主大会",
    "zhHant": "業主大會",
    "id": "az-1189",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-reuniao-de-condominio"
    ],
    "examplePt": "A reunião é na quinta.",
    "exampleEn": "The meeting is on Thursday.",
    "exampleZhHans": "会议在周四。",
    "exampleZhHant": "會議在週四。"
  },
  {
    "situacao": "vizinhos",
    "pt": "a quota",
    "en": "monthly share / fee",
    "zhHans": "管理费",
    "zhHant": "管理費",
    "id": "az-1190",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-quota"
    ],
    "examplePt": "A quota subiu este ano.",
    "exampleEn": "The quota went up this year.",
    "exampleZhHans": "管理费今年涨了。",
    "exampleZhHant": "管理費今年漲了。"
  },
  {
    "situacao": "vizinhos",
    "pt": "o andar",
    "en": "floor",
    "zhHans": "楼层",
    "zhHant": "樓層",
    "id": "az-0078",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Moro no terceiro andar.",
    "exampleEn": "I live on the third floor.",
    "exampleZhHans": "我住在三楼。",
    "exampleZhHant": "我住在三樓。"
  },
  {
    "situacao": "vizinhos",
    "pt": "o elevador",
    "en": "elevator",
    "zhHans": "电梯",
    "zhHant": "電梯",
    "id": "az-1191",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-elevador"
    ],
    "examplePt": "Apanho sempre o elevador.",
    "exampleEn": "I always take the elevator.",
    "exampleZhHans": "我总是坐电梯。",
    "exampleZhHant": "我總是搭電梯。"
  },
  {
    "situacao": "vizinhos",
    "pt": "as escadas",
    "en": "stairs",
    "zhHans": "楼梯",
    "zhHant": "樓梯",
    "id": "az-1192",
    "pos": "noun",
    "gender": "f-pl",
    "legacyIds": [
      "situacao-as-escadas"
    ],
    "examplePt": "Subi pelas escadas hoje.",
    "exampleEn": "I took the stairs today.",
    "exampleZhHans": "我今天走楼梯上来。",
    "exampleZhHant": "我今天走樓梯上來。"
  },
  {
    "situacao": "vizinhos",
    "pt": "o barulho",
    "en": "noise",
    "zhHans": "噪音",
    "zhHant": "噪音",
    "id": "az-1193",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-barulho"
    ],
    "examplePt": "O barulho acordou-me.",
    "exampleEn": "The noise woke me up.",
    "exampleZhHans": "噪音把我吵醒了。",
    "exampleZhHant": "噪音把我吵醒了。"
  },
  {
    "situacao": "vizinhos",
    "pt": "o silêncio",
    "en": "silence",
    "zhHans": "安静",
    "zhHant": "安靜",
    "id": "az-1194",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-silencio"
    ],
    "examplePt": "Gosto do silêncio aqui.",
    "exampleEn": "I like the silence here.",
    "exampleZhHans": "我喜欢这里的安静。",
    "exampleZhHant": "我喜歡這裡的安靜。"
  },
  {
    "situacao": "vizinhos",
    "pt": "incomodar",
    "en": "to bother",
    "zhHans": "打扰",
    "zhHant": "打擾",
    "id": "az-1195",
    "pos": "verb",
    "legacyIds": [
      "situacao-incomodar"
    ],
    "examplePt": "Desculpe incomodar tão tarde.",
    "exampleEn": "Sorry to bother you so late.",
    "exampleZhHans": "抱歉这么晚打扰。",
    "exampleZhHant": "抱歉這麼晚打擾。"
  },
  {
    "situacao": "vizinhos",
    "pt": "a queixa",
    "en": "complaint",
    "zhHans": "投诉",
    "zhHant": "投訴",
    "id": "az-0534",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Ninguém fez queixa.",
    "exampleEn": "Nobody filed a complaint.",
    "exampleZhHans": "没有人投诉。",
    "exampleZhHant": "沒有人投訴。"
  },
  {
    "situacao": "vizinhos",
    "pt": "as obras",
    "en": "construction works",
    "zhHans": "施工",
    "zhHant": "施工",
    "id": "az-0359",
    "pos": "noun",
    "gender": "f-pl",
    "examplePt": "As obras acabam em maio.",
    "exampleEn": "The works end in May.",
    "exampleZhHans": "工程五月完工。",
    "exampleZhHant": "工程五月完工。"
  },
  {
    "situacao": "vizinhos",
    "pt": "o lixo",
    "en": "trash",
    "zhHans": "垃圾",
    "zhHant": "垃圾",
    "id": "az-1196",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-lixo"
    ],
    "examplePt": "Já pus o lixo fora.",
    "exampleEn": "I already took out the trash.",
    "exampleZhHans": "我已经把垃圾拿出去了。",
    "exampleZhHant": "我已經把垃圾拿出去了。"
  },
  {
    "situacao": "vizinhos",
    "pt": "a reciclagem",
    "en": "recycling",
    "zhHans": "回收",
    "zhHant": "回收",
    "id": "az-1197",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-reciclagem"
    ],
    "examplePt": "A reciclagem é ao fundo.",
    "exampleEn": "Recycling is in the background.",
    "exampleZhHans": "回收站在最里面。",
    "exampleZhHant": "回收站在最裡面。"
  },
  {
    "situacao": "vizinhos",
    "pt": "o contentor",
    "en": "bin / container",
    "zhHans": "垃圾箱",
    "zhHant": "垃圾箱",
    "id": "az-1198",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-contentor"
    ],
    "examplePt": "O contentor está cheio.",
    "exampleEn": "The container is full.",
    "exampleZhHans": "垃圾箱满了。",
    "exampleZhHant": "垃圾箱滿了。"
  },
  {
    "situacao": "vizinhos",
    "pt": "a encomenda",
    "en": "package",
    "zhHans": "包裹",
    "zhHant": "包裹",
    "id": "az-0222",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Chegou uma encomenda para ti.",
    "exampleEn": "An order has arrived for you.",
    "exampleZhHans": "有你的一个包裹。",
    "exampleZhHant": "有你的一個包裹。"
  },
  {
    "situacao": "vizinhos",
    "pt": "o favor",
    "en": "favor",
    "zhHans": "帮忙",
    "zhHant": "幫忙",
    "id": "az-1199",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-favor"
    ],
    "examplePt": "Preciso de um favor.",
    "exampleEn": "I need a favor.",
    "exampleZhHans": "我需要帮个忙。",
    "exampleZhHant": "我需要幫個忙。"
  },
  {
    "situacao": "vizinhos",
    "pt": "emprestar",
    "en": "to lend",
    "zhHans": "借",
    "zhHant": "借",
    "id": "az-1200",
    "pos": "verb",
    "legacyIds": [
      "situacao-emprestar"
    ],
    "examplePt": "Emprestas-me um pouco de sal?",
    "exampleEn": "Can you lend me some salt?",
    "exampleZhHans": "能借我一点盐吗？",
    "exampleZhHant": "能借我一點鹽嗎？"
  },
  {
    "situacao": "vizinhos",
    "pt": "regar",
    "en": "to water",
    "zhHans": "浇水",
    "zhHant": "澆水",
    "id": "az-1201",
    "pos": "verb",
    "legacyIds": [
      "situacao-regar"
    ],
    "examplePt": "Rego as plantas à noite.",
    "exampleEn": "I water the plants at night.",
    "exampleZhHans": "我晚上浇花。",
    "exampleZhHant": "我晚上澆花。"
  },
  {
    "situacao": "vizinhos",
    "pt": "a chave",
    "en": "key",
    "zhHans": "钥匙",
    "zhHant": "鑰匙",
    "id": "az-1202",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-chave"
    ],
    "examplePt": "Deixo a chave ao vizinho.",
    "exampleEn": "I leave the key to the neighbor.",
    "exampleZhHans": "我把钥匙留给邻居。",
    "exampleZhHant": "我把鑰匙留給鄰居。"
  },
  {
    "situacao": "vizinhos",
    "pt": "a garagem",
    "en": "garage",
    "zhHans": "车库",
    "zhHant": "車庫",
    "id": "az-1203",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-garagem"
    ],
    "examplePt": "O carro está na garagem.",
    "exampleEn": "The car is in the garage.",
    "exampleZhHans": "车在车库里。",
    "exampleZhHant": "車在車庫裡。"
  },
  {
    "situacao": "vizinhos",
    "pt": "o lugar de estacionamento",
    "en": "parking spot",
    "zhHans": "停车位",
    "zhHant": "停車位",
    "id": "az-1204",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-lugar-de-estacionamento"
    ],
    "examplePt": "O meu lugar é o dez.",
    "exampleEn": "My place is ten.",
    "exampleZhHans": "我的车位是十号。",
    "exampleZhHant": "我的車位是十號。"
  },
  {
    "situacao": "vizinhos",
    "pt": "a caixa do correio",
    "en": "mailbox",
    "zhHans": "信箱",
    "zhHant": "信箱",
    "id": "az-1205",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-caixa-do-correio"
    ],
    "examplePt": "Vê a caixa do correio.",
    "exampleEn": "Check the mailbox.",
    "exampleZhHans": "看一下信箱。",
    "exampleZhHant": "看一下信箱。"
  },
  {
    "situacao": "vizinhos",
    "pt": "avariado",
    "en": "out of order",
    "zhHans": "故障",
    "zhHant": "故障",
    "id": "az-1206",
    "legacyIds": [
      "situacao-avariado"
    ],
    "examplePt": "O elevador está avariado.",
    "exampleEn": "The elevator is out of order.",
    "exampleZhHans": "电梯故障了。",
    "exampleZhHant": "電梯故障了。"
  },
  {
    "situacao": "vizinhos",
    "pt": "a mudança",
    "en": "move (house move)",
    "zhHans": "搬家",
    "zhHant": "搬家",
    "id": "az-1207",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-mudanca"
    ],
    "examplePt": "A mudança é no sábado.",
    "exampleEn": "Changeover is on Saturday.",
    "exampleZhHans": "周六搬家。",
    "exampleZhHant": "週六搬家。"
  },
  {
    "situacao": "vizinhos",
    "pt": "mudar-se",
    "en": "to move (house)",
    "zhHans": "搬家",
    "zhHant": "搬家",
    "id": "az-1208",
    "pos": "verb",
    "legacyIds": [
      "situacao-mudar-se"
    ],
    "examplePt": "Mudámo-nos em janeiro.",
    "exampleEn": "We moved in January.",
    "exampleZhHans": "我们一月搬的家。",
    "exampleZhHant": "我們一月搬的家。"
  },
  {
    "situacao": "vizinhos",
    "pt": "cumprimentar",
    "en": "to greet",
    "zhHans": "打招呼",
    "zhHant": "打招呼",
    "id": "az-1209",
    "pos": "verb",
    "legacyIds": [
      "situacao-cumprimentar"
    ],
    "examplePt": "Cumprimento sempre a vizinha.",
    "exampleEn": "I always greet my neighbor.",
    "exampleZhHans": "我总是跟邻居打招呼。",
    "exampleZhHant": "我總是跟鄰居打招呼。"
  },
  {
    "situacao": "vizinhos",
    "pt": "o administrador",
    "en": "building manager",
    "zhHans": "管理员",
    "zhHant": "管理員",
    "id": "az-1210",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-administrador"
    ],
    "examplePt": "Falei com o administrador.",
    "exampleEn": "I spoke to the administrator.",
    "exampleZhHans": "我跟管理员谈过了。",
    "exampleZhHant": "我跟管理員談過了。"
  },
  {
    "situacao": "vizinhos",
    "pt": "a campainha",
    "en": "doorbell",
    "zhHans": "门铃",
    "zhHant": "門鈴",
    "id": "az-1211",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-campainha"
    ],
    "examplePt": "Tocaram à campainha.",
    "exampleEn": "They rang the doorbell.",
    "exampleZhHans": "有人按了门铃。",
    "exampleZhHant": "有人按了門鈴。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "o cabeleireiro",
    "en": "hairdresser / hair salon",
    "zhHans": "理发师",
    "zhHant": "理髮師",
    "id": "az-1212",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-cabeleireiro"
    ],
    "examplePt": "Vou ao cabeleireiro amanhã.",
    "exampleEn": "I'm going to the hairdresser tomorrow.",
    "exampleZhHans": "我明天去理发。",
    "exampleZhHant": "我明天去理髮。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "o barbeiro",
    "en": "barber",
    "zhHans": "男士理发师",
    "zhHant": "男士理髮師",
    "id": "az-1213",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-barbeiro"
    ],
    "examplePt": "O barbeiro corta bem.",
    "exampleEn": "The barber cuts well.",
    "exampleZhHans": "这位理发师剪得好。",
    "exampleZhHant": "這位理髮師剪得好。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "a barbearia",
    "en": "barbershop",
    "zhHans": "理发店",
    "zhHant": "理髮店",
    "id": "az-1214",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-barbearia"
    ],
    "examplePt": "A barbearia é ali.",
    "exampleEn": "The barbershop is over there.",
    "exampleZhHans": "理发店在那边。",
    "exampleZhHant": "理髮店在那邊。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "o salão",
    "en": "salon",
    "zhHans": "美发沙龙",
    "zhHant": "美髮沙龍",
    "id": "az-1215",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-salao"
    ],
    "examplePt": "O salão está cheio.",
    "exampleEn": "The hall is full.",
    "exampleZhHans": "店里客满了。",
    "exampleZhHant": "店裡客滿了。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "a marcação",
    "en": "appointment",
    "zhHans": "预约",
    "zhHant": "預約",
    "id": "az-1216",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-marcacao"
    ],
    "examplePt": "Tenho marcação às três.",
    "exampleEn": "I have an appointment at three.",
    "exampleZhHans": "我约了三点。",
    "exampleZhHant": "我約了三點。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "marcar",
    "en": "to book",
    "zhHans": "预约",
    "zhHant": "預約",
    "id": "az-1217",
    "pos": "verb",
    "legacyIds": [
      "situacao-marcar"
    ],
    "examplePt": "Quero marcar para sábado.",
    "exampleEn": "I want to make an appointment for Saturday.",
    "exampleZhHans": "我想预约周六。",
    "exampleZhHant": "我想預約週六。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "o corte",
    "en": "haircut",
    "zhHans": "剪发",
    "zhHant": "剪髮",
    "id": "az-1218",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-corte"
    ],
    "examplePt": "O corte ficou ótimo.",
    "exampleEn": "The cut was great.",
    "exampleZhHans": "这发型剪得很好。",
    "exampleZhHant": "這髮型剪得很好。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "cortar",
    "en": "to cut",
    "zhHans": "剪",
    "zhHant": "剪",
    "id": "az-1219",
    "pos": "verb",
    "legacyIds": [
      "situacao-cortar"
    ],
    "examplePt": "Corta só um pouco.",
    "exampleEn": "Cut just a little.",
    "exampleZhHans": "只剪一点点。",
    "exampleZhHant": "只剪一點點。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "aparar",
    "en": "to trim",
    "zhHans": "修剪",
    "zhHant": "修剪",
    "id": "az-1220",
    "pos": "verb",
    "legacyIds": [
      "situacao-aparar"
    ],
    "examplePt": "Só quero aparar as pontas.",
    "exampleEn": "I just want to trim the ends.",
    "exampleZhHans": "我只想修发尾。",
    "exampleZhHant": "我只想修髮尾。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "as pontas",
    "en": "ends (of hair)",
    "zhHans": "发尾",
    "zhHant": "髮尾",
    "id": "az-1221",
    "pos": "noun",
    "gender": "f-pl",
    "legacyIds": [
      "situacao-as-pontas"
    ],
    "examplePt": "As pontas estão secas.",
    "exampleEn": "The ends are dry.",
    "exampleZhHans": "发尾很干。",
    "exampleZhHant": "髮尾很乾。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "curto",
    "en": "short",
    "zhHans": "短",
    "zhHant": "短",
    "id": "az-1222",
    "legacyIds": [
      "situacao-curto"
    ],
    "examplePt": "Prefiro o cabelo curto.",
    "exampleEn": "I prefer short hair.",
    "exampleZhHans": "我喜欢短发。",
    "exampleZhHant": "我喜歡短髮。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "comprido",
    "en": "long",
    "zhHans": "长",
    "zhHant": "長",
    "id": "az-1223",
    "legacyIds": [
      "situacao-comprido"
    ],
    "examplePt": "O cabelo está muito comprido.",
    "exampleEn": "The hair is very long.",
    "exampleZhHans": "头发太长了。",
    "exampleZhHant": "頭髮太長了。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "a franja",
    "en": "bangs / fringe",
    "zhHans": "刘海",
    "zhHant": "瀏海",
    "id": "az-1224",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-franja"
    ],
    "examplePt": "A franja tapa-me os olhos.",
    "exampleEn": "The bangs cover my eyes.",
    "exampleZhHans": "刘海遮到眼睛了。",
    "exampleZhHant": "瀏海遮到眼睛了。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "o risco",
    "en": "parting",
    "zhHans": "分线",
    "zhHant": "分線",
    "id": "az-1225",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-risco"
    ],
    "examplePt": "Faço o risco ao lado.",
    "exampleEn": "I make the risk on the side.",
    "exampleZhHans": "我旁分。",
    "exampleZhHant": "我旁分。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "a máquina",
    "en": "clippers",
    "zhHans": "电剪",
    "zhHant": "電剪",
    "id": "az-1153",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-maquina"
    ],
    "examplePt": "Usa a máquina dos lados.",
    "exampleEn": "Use the machine on the sides.",
    "exampleZhHans": "两侧用电剪。",
    "exampleZhHant": "兩側用電剪。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "o número",
    "en": "clipper guard number",
    "zhHans": "号数",
    "zhHant": "號數",
    "id": "az-1226",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-numero"
    ],
    "examplePt": "Número três, por favor.",
    "exampleEn": "Number three, please.",
    "exampleZhHans": "三号，麻烦了。",
    "exampleZhHant": "三號，麻煩了。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "a tesoura",
    "en": "scissors",
    "zhHans": "剪刀",
    "zhHant": "剪刀",
    "id": "az-0364",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Em cima, só tesoura.",
    "exampleEn": "On top, just scissors.",
    "exampleZhHans": "上面只用剪刀。",
    "exampleZhHant": "上面只用剪刀。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "lavar",
    "en": "to wash",
    "zhHans": "洗",
    "zhHant": "洗",
    "id": "az-1227",
    "pos": "verb",
    "legacyIds": [
      "situacao-lavar"
    ],
    "examplePt": "Lavamos primeiro o cabelo.",
    "exampleEn": "We wash our hair first.",
    "exampleZhHans": "我们先洗头。",
    "exampleZhHant": "我們先洗頭。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "secar",
    "en": "to blow-dry",
    "zhHans": "吹干",
    "zhHant": "吹乾",
    "id": "az-1228",
    "pos": "verb",
    "legacyIds": [
      "situacao-secar"
    ],
    "examplePt": "Pode secar, por favor?",
    "exampleEn": "Can you dry, please?",
    "exampleZhHans": "可以吹干吗？",
    "exampleZhHant": "可以吹乾嗎？"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "o secador",
    "en": "hairdryer",
    "zhHans": "吹风机",
    "zhHant": "吹風機",
    "id": "az-1229",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-secador"
    ],
    "examplePt": "O secador está quente.",
    "exampleEn": "The dryer is hot.",
    "exampleZhHans": "吹风机很烫。",
    "exampleZhHant": "吹風機很燙。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "pentear",
    "en": "to comb / style",
    "zhHans": "梳头",
    "zhHant": "梳頭",
    "id": "az-0367",
    "pos": "verb",
    "examplePt": "Penteia para trás, por favor.",
    "exampleEn": "Comb it back, please.",
    "exampleZhHans": "请往后梳。",
    "exampleZhHant": "請往後梳。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "o penteado",
    "en": "hairstyle",
    "zhHans": "发型",
    "zhHant": "髮型",
    "id": "az-1230",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-penteado"
    ],
    "examplePt": "Gosto do teu penteado.",
    "exampleEn": "I like your hairstyle.",
    "exampleZhHans": "我喜欢你的发型。",
    "exampleZhHant": "我喜歡你的髮型。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "a barba",
    "en": "beard",
    "zhHans": "胡子",
    "zhHant": "鬍子",
    "id": "az-1231",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-barba"
    ],
    "examplePt": "A barba cresce depressa.",
    "exampleEn": "The beard grows quickly.",
    "exampleZhHans": "胡子长得快。",
    "exampleZhHant": "鬍子長得快。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "fazer a barba",
    "en": "to shave",
    "zhHans": "刮胡子",
    "zhHant": "刮鬍子",
    "id": "az-1232",
    "legacyIds": [
      "situacao-fazer-a-barba"
    ],
    "examplePt": "Faço a barba em casa.",
    "exampleEn": "I shave at home.",
    "exampleZhHans": "我在家刮胡子。",
    "exampleZhHant": "我在家刮鬍子。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "o bigode",
    "en": "mustache",
    "zhHans": "小胡子",
    "zhHant": "小鬍子",
    "id": "az-1233",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-bigode"
    ],
    "examplePt": "Deixe o bigode assim.",
    "exampleEn": "Leave the mustache like this.",
    "exampleZhHans": "小胡子就这样留着。",
    "exampleZhHant": "小鬍子就這樣留著。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "pintar",
    "en": "to dye",
    "zhHans": "染发",
    "zhHant": "染髮",
    "id": "az-1234",
    "pos": "verb",
    "legacyIds": [
      "situacao-pintar"
    ],
    "examplePt": "Quero pintar de castanho.",
    "exampleEn": "I want to paint it brown.",
    "exampleZhHans": "我想染成棕色。",
    "exampleZhHant": "我想染成棕色。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "a cor",
    "en": "color",
    "zhHans": "颜色",
    "zhHant": "顏色",
    "id": "az-1235",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-cor"
    ],
    "examplePt": "Que cor prefere?",
    "exampleEn": "What color do you prefer?",
    "exampleZhHans": "您想要什么颜色？",
    "exampleZhHant": "您想要什麼顏色？"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "as madeixas",
    "en": "highlights",
    "zhHans": "挑染",
    "zhHant": "挑染",
    "id": "az-1236",
    "pos": "noun",
    "gender": "f-pl",
    "legacyIds": [
      "situacao-as-madeixas"
    ],
    "examplePt": "Fiz madeixas no verão.",
    "exampleEn": "I got highlights in the summer.",
    "exampleZhHans": "我夏天做了挑染。",
    "exampleZhHant": "我夏天做了挑染。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "o tom",
    "en": "shade / tone",
    "zhHans": "色调",
    "zhHant": "色調",
    "id": "az-1237",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-tom"
    ],
    "examplePt": "Quero um tom mais claro.",
    "exampleEn": "I want a lighter tone.",
    "exampleZhHans": "我想要浅一点的色调。",
    "exampleZhHant": "我想要淺一點的色調。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "claro",
    "en": "light (color)",
    "zhHans": "浅",
    "zhHant": "淺",
    "id": "az-1238",
    "legacyIds": [
      "situacao-claro"
    ],
    "examplePt": "Prefiro um tom claro.",
    "exampleEn": "I prefer a light tone.",
    "exampleZhHans": "我喜欢浅色调。",
    "exampleZhHant": "我喜歡淺色調。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "escuro",
    "en": "dark (color)",
    "zhHans": "深",
    "zhHant": "深",
    "id": "az-1239",
    "legacyIds": [
      "situacao-escuro"
    ],
    "examplePt": "Pinto de castanho escuro.",
    "exampleEn": "Paint dark brown.",
    "exampleZhHans": "我染深棕色。",
    "exampleZhHant": "我染深棕色。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "liso",
    "en": "straight (hair)",
    "zhHans": "直",
    "zhHant": "直",
    "id": "az-1240",
    "legacyIds": [
      "situacao-liso"
    ],
    "examplePt": "O meu cabelo é liso.",
    "exampleEn": "My hair is straight.",
    "exampleZhHans": "我的头发是直的。",
    "exampleZhHant": "我的頭髮是直的。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "encaracolado",
    "en": "curly",
    "zhHans": "卷",
    "zhHant": "捲",
    "id": "az-1241",
    "legacyIds": [
      "situacao-encaracolado"
    ],
    "examplePt": "Ela tem cabelo encaracolado.",
    "exampleEn": "She has curly hair.",
    "exampleZhHans": "她是卷发。",
    "exampleZhHant": "她是捲髮。"
  },
  {
    "situacao": "cabeleireiro_barbeiro",
    "pt": "o gel",
    "en": "hair gel",
    "zhHans": "发胶",
    "zhHant": "髮膠",
    "id": "az-1242",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-gel"
    ],
    "examplePt": "Não uso gel.",
    "exampleEn": "I don't use gel.",
    "exampleZhHans": "我不用发胶。",
    "exampleZhHant": "我不用髮膠。"
  },
  {
    "situacao": "farmacia",
    "pt": "a farmácia",
    "en": "pharmacy",
    "zhHans": "药店",
    "zhHant": "藥局",
    "id": "az-0312",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A farmácia fecha às sete.",
    "exampleEn": "The pharmacy closes at seven.",
    "exampleZhHans": "药店七点关门。",
    "exampleZhHant": "藥局七點關門。"
  },
  {
    "situacao": "farmacia",
    "pt": "a farmácia de serviço",
    "en": "on-duty pharmacy",
    "zhHans": "值班药店",
    "zhHant": "值班藥局",
    "id": "az-1243",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-farmacia-de-servico"
    ],
    "examplePt": "Procura a farmácia de serviço.",
    "exampleEn": "Look for the pharmacy on duty.",
    "exampleZhHans": "找一下值班药店。",
    "exampleZhHant": "找一下值班藥局。"
  },
  {
    "situacao": "farmacia",
    "pt": "o farmacêutico",
    "en": "pharmacist",
    "zhHans": "药剂师",
    "zhHant": "藥劑師",
    "id": "az-1244",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-farmaceutico"
    ],
    "examplePt": "O farmacêutico explicou tudo.",
    "exampleEn": "The pharmacist explained everything.",
    "exampleZhHans": "药剂师都解释清楚了。",
    "exampleZhHant": "藥劑師都解釋清楚了。"
  },
  {
    "situacao": "farmacia",
    "pt": "a receita",
    "en": "prescription",
    "zhHans": "处方",
    "zhHant": "處方",
    "id": "az-0311",
    "pos": "noun",
    "gender": "f",
    "examplePt": "É preciso receita?",
    "exampleEn": "Do I need a prescription?",
    "exampleZhHans": "需要处方吗？",
    "exampleZhHant": "需要處方嗎？"
  },
  {
    "situacao": "farmacia",
    "pt": "o medicamento",
    "en": "medicine",
    "zhHans": "药",
    "zhHant": "藥",
    "id": "az-0333",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Tomo o medicamento à noite.",
    "exampleEn": "I take the medicine at night.",
    "exampleZhHans": "我晚上吃药。",
    "exampleZhHant": "我晚上吃藥。"
  },
  {
    "situacao": "farmacia",
    "pt": "o genérico",
    "en": "generic drug",
    "zhHans": "仿制药",
    "zhHant": "學名藥",
    "id": "az-1245",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-generico"
    ],
    "examplePt": "O genérico é mais barato.",
    "exampleEn": "The generic is cheaper.",
    "exampleZhHans": "仿制药比较便宜。",
    "exampleZhHant": "學名藥比較便宜。"
  },
  {
    "situacao": "farmacia",
    "pt": "o comprimido",
    "en": "pill",
    "zhHans": "药片",
    "zhHant": "藥片",
    "id": "az-0318",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Tomo um comprimido por dia.",
    "exampleEn": "I take one pill a day.",
    "exampleZhHans": "我一天吃一颗药。",
    "exampleZhHant": "我一天吃一顆藥。"
  },
  {
    "situacao": "farmacia",
    "pt": "o xarope",
    "en": "syrup",
    "zhHans": "糖浆",
    "zhHant": "糖漿",
    "id": "az-1246",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-xarope"
    ],
    "examplePt": "O xarope é para a tosse.",
    "exampleEn": "The syrup is for coughs.",
    "exampleZhHans": "这糖浆是止咳的。",
    "exampleZhHant": "這糖漿是止咳的。"
  },
  {
    "situacao": "farmacia",
    "pt": "a pomada",
    "en": "ointment",
    "zhHans": "药膏",
    "zhHant": "藥膏",
    "id": "az-1122",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-pomada"
    ],
    "examplePt": "A pomada é para a pele.",
    "exampleEn": "The ointment is for the skin.",
    "exampleZhHans": "这药膏是擦皮肤的。",
    "exampleZhHant": "這藥膏是擦皮膚的。"
  },
  {
    "situacao": "farmacia",
    "pt": "as gotas",
    "en": "drops",
    "zhHans": "滴剂",
    "zhHant": "滴劑",
    "id": "az-1247",
    "pos": "noun",
    "gender": "f-pl",
    "legacyIds": [
      "situacao-as-gotas"
    ],
    "examplePt": "Duas gotas em cada olho.",
    "exampleEn": "Two drops in each eye.",
    "exampleZhHans": "每只眼睛滴两滴。",
    "exampleZhHant": "每隻眼睛滴兩滴。"
  },
  {
    "situacao": "farmacia",
    "pt": "a dose",
    "en": "dose",
    "zhHans": "剂量",
    "zhHant": "劑量",
    "id": "az-0882",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-dose"
    ],
    "examplePt": "Qual é a dose certa?",
    "exampleEn": "What is the right dose?",
    "exampleZhHans": "正确剂量是多少？",
    "exampleZhHant": "正確劑量是多少？"
  },
  {
    "situacao": "farmacia",
    "pt": "tomar",
    "en": "to take (medicine)",
    "zhHans": "服用",
    "zhHant": "服用",
    "id": "az-1248",
    "pos": "verb",
    "legacyIds": [
      "situacao-tomar"
    ],
    "examplePt": "Tome sempre com água.",
    "exampleEn": "Always take with water.",
    "exampleZhHans": "一定要配水服用。",
    "exampleZhHant": "一定要配水服用。"
  },
  {
    "situacao": "farmacia",
    "pt": "em jejum",
    "en": "on an empty stomach",
    "zhHans": "空腹",
    "zhHant": "空腹",
    "id": "az-0875",
    "legacyIds": [
      "situacao-em-jejum"
    ],
    "examplePt": "Tome este em jejum.",
    "exampleEn": "Take this on an empty stomach.",
    "exampleZhHans": "这个要空腹吃。",
    "exampleZhHant": "這個要空腹吃。"
  },
  {
    "situacao": "farmacia",
    "pt": "às refeições",
    "en": "with meals",
    "zhHans": "随餐",
    "zhHant": "隨餐",
    "id": "az-1249",
    "legacyIds": [
      "situacao-as-refeicoes"
    ],
    "examplePt": "Um comprimido às refeições.",
    "exampleEn": "One tablet with meals.",
    "exampleZhHans": "随餐吃一颗。",
    "exampleZhHant": "隨餐吃一顆。"
  },
  {
    "situacao": "farmacia",
    "pt": "a dor",
    "en": "pain",
    "zhHans": "疼痛",
    "zhHant": "疼痛",
    "id": "az-1250",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-dor"
    ],
    "examplePt": "Tenho uma dor aqui.",
    "exampleEn": "I have a pain here.",
    "exampleZhHans": "我这里痛。",
    "exampleZhHant": "我這裡痛。"
  },
  {
    "situacao": "farmacia",
    "pt": "a dor de cabeça",
    "en": "headache",
    "zhHans": "头痛",
    "zhHant": "頭痛",
    "id": "az-0492",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A dor de cabeça passou.",
    "exampleEn": "The headache went away.",
    "exampleZhHans": "头痛好了。",
    "exampleZhHant": "頭痛好了。"
  },
  {
    "situacao": "farmacia",
    "pt": "a dor de garganta",
    "en": "sore throat",
    "zhHans": "喉咙痛",
    "zhHant": "喉嚨痛",
    "id": "az-1251",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-dor-de-garganta"
    ],
    "examplePt": "Tenho dor de garganta.",
    "exampleEn": "I have a sore throat.",
    "exampleZhHans": "我喉咙痛。",
    "exampleZhHant": "我喉嚨痛。"
  },
  {
    "situacao": "farmacia",
    "pt": "a febre",
    "en": "fever",
    "zhHans": "发烧",
    "zhHant": "發燒",
    "id": "az-1252",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-febre"
    ],
    "examplePt": "Ele tem febre alta.",
    "exampleEn": "He has a high fever.",
    "exampleZhHans": "他发高烧。",
    "exampleZhHant": "他發高燒。"
  },
  {
    "situacao": "farmacia",
    "pt": "o termómetro",
    "en": "thermometer",
    "zhHans": "体温计",
    "zhHant": "體溫計",
    "id": "az-1253",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-termometro"
    ],
    "examplePt": "Compra um termómetro novo.",
    "exampleEn": "Buy a new thermometer.",
    "exampleZhHans": "买个新的体温计。",
    "exampleZhHant": "買個新的體溫計。"
  },
  {
    "situacao": "farmacia",
    "pt": "a tosse",
    "en": "cough",
    "zhHans": "咳嗽",
    "zhHant": "咳嗽",
    "id": "az-1254",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-tosse"
    ],
    "examplePt": "A tosse não passa.",
    "exampleEn": "The cough doesn't go away.",
    "exampleZhHans": "咳嗽好不了。",
    "exampleZhHant": "咳嗽好不了。"
  },
  {
    "situacao": "farmacia",
    "pt": "a constipação",
    "en": "cold (illness)",
    "zhHans": "感冒",
    "zhHant": "感冒",
    "id": "az-1255",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-constipacao"
    ],
    "examplePt": "Apanhei uma constipação.",
    "exampleEn": "I caught a cold.",
    "exampleZhHans": "我感冒了。",
    "exampleZhHant": "我感冒了。"
  },
  {
    "situacao": "farmacia",
    "pt": "a gripe",
    "en": "flu",
    "zhHans": "流感",
    "zhHant": "流感",
    "id": "az-1256",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-gripe"
    ],
    "examplePt": "A gripe já passou.",
    "exampleEn": "The flu is gone.",
    "exampleZhHans": "流感已经好了。",
    "exampleZhHant": "流感已經好了。"
  },
  {
    "situacao": "farmacia",
    "pt": "a alergia",
    "en": "allergy",
    "zhHans": "过敏",
    "zhHant": "過敏",
    "id": "az-0310",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Tenho alergia ao pólen.",
    "exampleEn": "I am allergic to pollen.",
    "exampleZhHans": "我对花粉过敏。",
    "exampleZhHant": "我對花粉過敏。"
  },
  {
    "situacao": "farmacia",
    "pt": "o anti-histamínico",
    "en": "antihistamine",
    "zhHans": "抗组胺药",
    "zhHant": "抗組織胺",
    "id": "az-1257",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-anti-histaminico"
    ],
    "examplePt": "Tomei um anti-histamínico.",
    "exampleEn": "I took an antihistamine.",
    "exampleZhHans": "我吃了抗组胺药。",
    "exampleZhHant": "我吃了抗組織胺。"
  },
  {
    "situacao": "farmacia",
    "pt": "o analgésico",
    "en": "painkiller",
    "zhHans": "止痛药",
    "zhHant": "止痛藥",
    "id": "az-1258",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-analgesico"
    ],
    "examplePt": "Este analgésico é forte.",
    "exampleEn": "This painkiller is strong.",
    "exampleZhHans": "这止痛药很强。",
    "exampleZhHant": "這止痛藥很強。"
  },
  {
    "situacao": "farmacia",
    "pt": "o antibiótico",
    "en": "antibiotic",
    "zhHans": "抗生素",
    "zhHant": "抗生素",
    "id": "az-0350",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O antibiótico é com receita.",
    "exampleEn": "The antibiotic is prescription.",
    "exampleZhHans": "抗生素要处方。",
    "exampleZhHant": "抗生素要處方。"
  },
  {
    "situacao": "farmacia",
    "pt": "a vitamina",
    "en": "vitamin",
    "zhHans": "维生素",
    "zhHant": "維他命",
    "id": "az-1259",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-vitamina"
    ],
    "examplePt": "Tomo vitaminas no inverno.",
    "exampleEn": "I take vitamins in winter.",
    "exampleZhHans": "我冬天吃维生素。",
    "exampleZhHant": "我冬天吃維他命。"
  },
  {
    "situacao": "farmacia",
    "pt": "o penso rápido",
    "en": "band-aid",
    "zhHans": "创可贴",
    "zhHant": "OK繃",
    "id": "az-1260",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-penso-rapido"
    ],
    "examplePt": "Preciso de um penso rápido.",
    "exampleEn": "I need a Band-Aid.",
    "exampleZhHans": "我需要创可贴。",
    "exampleZhHant": "我需要OK繃。"
  },
  {
    "situacao": "farmacia",
    "pt": "o desinfetante",
    "en": "disinfectant",
    "zhHans": "消毒液",
    "zhHant": "消毒液",
    "id": "az-1046",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-desinfetante"
    ],
    "examplePt": "Põe desinfetante na ferida.",
    "exampleEn": "Put disinfectant on the wound.",
    "exampleZhHans": "在伤口上抹消毒液。",
    "exampleZhHant": "在傷口上抹消毒液。"
  },
  {
    "situacao": "farmacia",
    "pt": "a máscara",
    "en": "mask",
    "zhHans": "口罩",
    "zhHant": "口罩",
    "id": "az-0309",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Levo sempre uma máscara.",
    "exampleEn": "I always carry a mask.",
    "exampleZhHans": "我总是带着口罩。",
    "exampleZhHant": "我總是帶著口罩。"
  },
  {
    "situacao": "farmacia",
    "pt": "o teste",
    "en": "test",
    "zhHans": "检测",
    "zhHant": "檢測",
    "id": "az-1261",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-teste"
    ],
    "examplePt": "Fiz um teste rápido.",
    "exampleEn": "I took a quick test.",
    "exampleZhHans": "我做了快筛。",
    "exampleZhHant": "我做了快篩。"
  },
  {
    "situacao": "farmacia",
    "pt": "a tensão",
    "en": "blood pressure",
    "zhHans": "血压",
    "zhHant": "血壓",
    "id": "az-1262",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-tensao"
    ],
    "examplePt": "A minha tensão está alta.",
    "exampleEn": "My tension is high.",
    "exampleZhHans": "我血压偏高。",
    "exampleZhHant": "我血壓偏高。"
  },
  {
    "situacao": "farmacia",
    "pt": "medir",
    "en": "to measure",
    "zhHans": "量",
    "zhHant": "量",
    "id": "az-1263",
    "pos": "verb",
    "legacyIds": [
      "situacao-medir"
    ],
    "examplePt": "Vou medir a febre.",
    "exampleEn": "I'll measure the fever.",
    "exampleZhHans": "我来量一下体温。",
    "exampleZhHant": "我來量一下體溫。"
  },
  {
    "situacao": "farmacia",
    "pt": "o protetor solar",
    "en": "sunscreen",
    "zhHans": "防晒霜",
    "zhHant": "防曬乳",
    "id": "az-1264",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-protetor-solar"
    ],
    "examplePt": "Usa protetor solar na praia.",
    "exampleEn": "Use sunscreen on the beach.",
    "exampleZhHans": "在海滩要擦防晒。",
    "exampleZhHant": "在海灘要擦防曬。"
  },
  {
    "situacao": "farmacia",
    "pt": "o efeito secundário",
    "en": "side effect",
    "zhHans": "副作用",
    "zhHant": "副作用",
    "id": "az-1265",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-efeito-secundario"
    ],
    "examplePt": "Tem efeitos secundários?",
    "exampleEn": "Does it have side effects?",
    "exampleZhHans": "有副作用吗？",
    "exampleZhHant": "有副作用嗎？"
  },
  {
    "situacao": "farmacia",
    "pt": "grávida",
    "en": "pregnant",
    "zhHans": "怀孕",
    "zhHant": "懷孕",
    "id": "az-1266",
    "legacyIds": [
      "situacao-gravida"
    ],
    "examplePt": "Ela está grávida.",
    "exampleEn": "She is pregnant.",
    "exampleZhHans": "她怀孕了。",
    "exampleZhHant": "她懷孕了。"
  },
  {
    "id": "az-0247",
    "legacyIds": [
      "m5-supermercado"
    ],
    "situacao": "supermercado_mercado",
    "pt": "o supermercado",
    "en": "supermarket",
    "zhHans": "超市",
    "zhHant": "超級市場",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Vou ao supermercado.",
    "exampleEn": "I am going to the supermarket.",
    "exampleZhHans": "我去超市。",
    "exampleZhHant": "我去超市。"
  },
  {
    "id": "az-0134",
    "legacyIds": [
      "m2-ir-compras"
    ],
    "situacao": "supermercado_mercado",
    "pt": "ir às compras",
    "en": "to go shopping",
    "zhHans": "去购物",
    "zhHant": "去購物",
    "examplePt": "Vou às compras ao sábado.",
    "exampleEn": "I go shopping on Saturdays.",
    "exampleZhHans": "我周六去购物。",
    "exampleZhHant": "我週六去購物。"
  },
  {
    "id": "az-0155",
    "legacyIds": [
      "m3-mercearia"
    ],
    "situacao": "supermercado_mercado",
    "pt": "a mercearia",
    "en": "grocery shop",
    "zhHans": "杂货店",
    "zhHant": "雜貨店",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Vou à mercearia.",
    "exampleEn": "I am going to the grocery shop.",
    "exampleZhHans": "我去杂货店。",
    "exampleZhHant": "我去雜貨店。"
  },
  {
    "id": "az-0156",
    "legacyIds": [
      "m3-padaria"
    ],
    "situacao": "supermercado_mercado",
    "pt": "a padaria",
    "en": "bakery",
    "zhHans": "面包店",
    "zhHant": "麵包店",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Compro pão na padaria.",
    "exampleEn": "I buy bread at the bakery.",
    "exampleZhHans": "我在面包店买面包。",
    "exampleZhHant": "我在麵包店買麵包。"
  },
  {
    "id": "az-0157",
    "legacyIds": [
      "m3-talho"
    ],
    "situacao": "supermercado_mercado",
    "pt": "o talho",
    "en": "butcher's",
    "zhHans": "肉店",
    "zhHant": "肉店",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Compro carne no talho.",
    "exampleEn": "I buy meat at the butcher's.",
    "exampleZhHans": "我在肉店买肉。",
    "exampleZhHant": "我在肉店買肉。"
  },
  {
    "id": "az-0158",
    "legacyIds": [
      "m3-peixaria"
    ],
    "situacao": "supermercado_mercado",
    "pt": "a peixaria",
    "en": "fish shop",
    "zhHans": "鱼店",
    "zhHant": "魚店",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Compro peixe na peixaria.",
    "exampleEn": "I buy fish at the fish shop.",
    "exampleZhHans": "我在鱼店买鱼。",
    "exampleZhHant": "我在魚店買魚。"
  },
  {
    "id": "az-0146",
    "legacyIds": [
      "m3-maca"
    ],
    "situacao": "supermercado_mercado",
    "pt": "a maçã",
    "en": "apple",
    "zhHans": "苹果",
    "zhHant": "蘋果",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A maçã é melhor do que as limas.",
    "exampleEn": "The apple is better than the limes.",
    "exampleZhHans": "苹果比青柠更好。",
    "exampleZhHant": "蘋果比青檸更好。"
  },
  {
    "id": "az-0147",
    "legacyIds": [
      "m3-banana"
    ],
    "situacao": "supermercado_mercado",
    "pt": "a banana",
    "en": "banana",
    "zhHans": "香蕉",
    "zhHant": "香蕉",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Compro bananas.",
    "exampleEn": "I buy bananas.",
    "exampleZhHans": "我买香蕉。",
    "exampleZhHant": "我買香蕉。"
  },
  {
    "id": "az-0148",
    "legacyIds": [
      "m3-queijo"
    ],
    "situacao": "supermercado_mercado",
    "pt": "o queijo",
    "en": "cheese",
    "zhHans": "奶酪",
    "zhHant": "起司",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Quero um queijo fresco.",
    "exampleEn": "I want a fresh cheese.",
    "exampleZhHans": "我想要一块新鲜奶酪。",
    "exampleZhHant": "我想要一塊新鮮起司。"
  },
  {
    "id": "az-0149",
    "legacyIds": [
      "m3-carne-vaca"
    ],
    "situacao": "supermercado_mercado",
    "pt": "a carne de vaca",
    "en": "beef",
    "zhHans": "牛肉",
    "zhHant": "牛肉",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A carne de vaca está no talho.",
    "exampleEn": "The beef is at the butcher's.",
    "exampleZhHans": "牛肉在肉店。",
    "exampleZhHant": "牛肉在肉店。"
  },
  {
    "id": "az-0150",
    "legacyIds": [
      "m3-frango"
    ],
    "situacao": "supermercado_mercado",
    "pt": "o frango",
    "en": "chicken",
    "zhHans": "鸡肉",
    "zhHant": "雞肉",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Quero frango assado.",
    "exampleEn": "I want roast chicken.",
    "exampleZhHans": "我想要烤鸡。",
    "exampleZhHant": "我想要烤雞。"
  },
  {
    "id": "az-0137",
    "legacyIds": [
      "m3-agua"
    ],
    "situacao": "supermercado_mercado",
    "pt": "a água",
    "en": "water",
    "zhHans": "水",
    "zhHant": "水",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Ponha água na panela.",
    "exampleEn": "Put water in the pot.",
    "exampleZhHans": "请把水倒进锅里。",
    "exampleZhHant": "請把水倒進鍋裡。"
  },
  {
    "id": "az-0138",
    "legacyIds": [
      "m3-acucar"
    ],
    "situacao": "supermercado_mercado",
    "pt": "o açúcar",
    "en": "sugar",
    "zhHans": "糖",
    "zhHant": "糖",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Preciso de um pacote de açúcar.",
    "exampleEn": "I need a packet of sugar.",
    "exampleZhHans": "我需要一包糖。",
    "exampleZhHant": "我需要一包糖。"
  },
  {
    "id": "az-0139",
    "legacyIds": [
      "m3-arroz"
    ],
    "situacao": "supermercado_mercado",
    "pt": "o arroz",
    "en": "rice",
    "zhHans": "米",
    "zhHant": "白飯",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Queria dois quilos de arroz.",
    "exampleEn": "I would like two kilos of rice.",
    "exampleZhHans": "我想要两公斤米。",
    "exampleZhHant": "我想要兩公斤米。"
  },
  {
    "id": "az-0140",
    "legacyIds": [
      "m3-azeite"
    ],
    "situacao": "supermercado_mercado",
    "pt": "o azeite",
    "en": "olive oil",
    "zhHans": "橄榄油",
    "zhHant": "橄欖油",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Queria uma garrafa de azeite.",
    "exampleEn": "I would like a bottle of olive oil.",
    "exampleZhHans": "我想要一瓶橄榄油。",
    "exampleZhHant": "我想要一瓶橄欖油。"
  },
  {
    "id": "az-0141",
    "legacyIds": [
      "m3-leite"
    ],
    "situacao": "supermercado_mercado",
    "pt": "o leite",
    "en": "milk",
    "zhHans": "牛奶",
    "zhHant": "牛奶",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Compro quatro pacotes de leite.",
    "exampleEn": "I buy four cartons of milk.",
    "exampleZhHans": "我买四盒牛奶。",
    "exampleZhHant": "我買四盒牛奶。"
  },
  {
    "id": "az-0142",
    "legacyIds": [
      "m3-pao-forma"
    ],
    "situacao": "supermercado_mercado",
    "pt": "o pão de forma",
    "en": "sliced bread",
    "zhHans": "切片面包",
    "zhHant": "切片麵包",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Compro pão de forma.",
    "exampleEn": "I buy sliced bread.",
    "exampleZhHans": "我买切片面包。",
    "exampleZhHant": "我買切片麵包。"
  },
  {
    "id": "az-0143",
    "legacyIds": [
      "m3-cebola"
    ],
    "situacao": "supermercado_mercado",
    "pt": "a cebola",
    "en": "onion",
    "zhHans": "洋葱",
    "zhHant": "洋蔥",
    "pos": "noun",
    "gender": "f",
    "examplePt": "As cebolas são baratas.",
    "exampleEn": "The onions are cheap.",
    "exampleZhHans": "洋葱很便宜。",
    "exampleZhHant": "洋蔥很便宜。"
  },
  {
    "id": "az-0144",
    "legacyIds": [
      "m3-alho"
    ],
    "situacao": "supermercado_mercado",
    "pt": "o alho",
    "en": "garlic",
    "zhHans": "蒜",
    "zhHant": "蒜",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Compro alhos no mercado.",
    "exampleEn": "I buy garlic at the market.",
    "exampleZhHans": "我在市场买大蒜。",
    "exampleZhHant": "我在市場買大蒜。"
  },
  {
    "id": "az-0145",
    "legacyIds": [
      "m3-tomate"
    ],
    "situacao": "supermercado_mercado",
    "pt": "o tomate",
    "en": "tomato",
    "zhHans": "番茄",
    "zhHant": "番茄",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Queria duas latas de tomate pelado.",
    "exampleEn": "I would like two cans of peeled tomatoes.",
    "exampleZhHans": "我想要两罐去皮番茄。",
    "exampleZhHant": "我想要兩罐去皮番茄。"
  },
  {
    "id": "az-0165",
    "legacyIds": [
      "m3-prazo-validade"
    ],
    "situacao": "supermercado_mercado",
    "pt": "o prazo de validade",
    "en": "expiry date",
    "zhHans": "到期日",
    "zhHant": "到期日",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Qual é o prazo de validade?",
    "exampleEn": "What is the expiry date?",
    "exampleZhHans": "有效期到什么时候？",
    "exampleZhHant": "有效期限到什麼時候？"
  },
  {
    "id": "az-0161",
    "legacyIds": [
      "m3-talao"
    ],
    "situacao": "supermercado_mercado",
    "pt": "o talão",
    "en": "receipt",
    "zhHans": "收据",
    "zhHant": "收據",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Aqui tem o talão.",
    "exampleEn": "Here is the receipt.",
    "exampleZhHans": "这是您的收据。",
    "exampleZhHant": "這是您的收據。"
  },
  {
    "id": "az-0162",
    "legacyIds": [
      "m3-fatura"
    ],
    "situacao": "supermercado_mercado",
    "pt": "a fatura",
    "en": "invoice",
    "zhHans": "发票",
    "zhHant": "發票",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Pode dar-me uma fatura?",
    "exampleEn": "Can you give me an invoice?",
    "exampleZhHans": "可以给我一张发票吗？",
    "exampleZhHant": "可以給我一張發票嗎？"
  },
  {
    "id": "az-0163",
    "legacyIds": [
      "m3-contribuinte"
    ],
    "situacao": "supermercado_mercado",
    "pt": "o número de contribuinte",
    "en": "tax number",
    "zhHans": "税号",
    "zhHant": "稅號",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O meu número de contribuinte é 243 333 218.",
    "exampleEn": "My tax number is 243 333 218.",
    "exampleZhHans": "我的税号是 243 333 218。",
    "exampleZhHant": "我的稅號是 243 333 218。"
  },
  {
    "id": "az-0154",
    "legacyIds": [
      "m3-cartao-multibanco"
    ],
    "situacao": "supermercado_mercado",
    "pt": "o cartão multibanco",
    "en": "debit card",
    "zhHans": "借记卡",
    "zhHant": "金融卡",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Posso pagar com o multibanco?",
    "exampleEn": "Can I pay by debit card?",
    "exampleZhHans": "我可以用借记卡付款吗？",
    "exampleZhHant": "我可以用金融卡付款嗎？"
  },
  {
    "id": "az-0260",
    "legacyIds": [
      "m5-troco"
    ],
    "situacao": "supermercado_mercado",
    "pt": "o troco",
    "en": "change",
    "zhHans": "找零",
    "zhHant": "找零",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Ele dá-me o troco.",
    "exampleEn": "He gives me the change.",
    "exampleZhHans": "他把零钱找给我。",
    "exampleZhHant": "他把零錢找給我。"
  },
  {
    "situacao": "supermercado_mercado",
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
    "situacao": "supermercado_mercado",
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
    "id": "az-0169",
    "legacyIds": [
      "m3-caro"
    ],
    "situacao": "supermercado_mercado",
    "pt": "caro",
    "en": "expensive",
    "zhHans": "昂贵的",
    "zhHant": "昂貴的",
    "examplePt": "Este produto é caro.",
    "exampleEn": "This product is expensive.",
    "exampleZhHans": "这个产品很贵。",
    "exampleZhHant": "這個產品很貴。"
  },
  {
    "id": "az-0170",
    "legacyIds": [
      "m3-barato"
    ],
    "situacao": "supermercado_mercado",
    "pt": "barato",
    "en": "cheap",
    "zhHans": "便宜的",
    "zhHant": "便宜的",
    "examplePt": "As peras são menos caras.",
    "exampleEn": "The pears are less expensive.",
    "exampleZhHans": "梨比较便宜。",
    "exampleZhHant": "梨比較便宜。"
  },
  {
    "id": "az-0159",
    "legacyIds": [
      "m3-restaurante"
    ],
    "situacao": "cafe_restaurante",
    "pt": "o restaurante",
    "en": "restaurant",
    "zhHans": "餐厅",
    "zhHant": "餐廳",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Vamos jantar num restaurante português.",
    "exampleEn": "We are going to have dinner at a Portuguese restaurant.",
    "exampleZhHans": "我们去一家葡萄牙餐厅吃晚饭。",
    "exampleZhHant": "我們去一家葡萄牙餐廳吃晚餐。"
  },
  {
    "id": "az-0164",
    "legacyIds": [
      "m3-ementa"
    ],
    "situacao": "cafe_restaurante",
    "pt": "a ementa",
    "en": "menu",
    "zhHans": "菜单",
    "zhHant": "選單",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Pode trazer a ementa?",
    "exampleEn": "Can you bring the menu?",
    "exampleZhHans": "可以拿菜单给我吗？",
    "exampleZhHant": "可以拿菜單給我嗎？"
  },
  {
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "situacao": "cafe_restaurante",
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
    "id": "az-0532",
    "legacyIds": [
      "m11-chavena"
    ],
    "situacao": "cafe_restaurante",
    "pt": "a chávena",
    "en": "cup",
    "zhHans": "杯子",
    "zhHant": "杯子",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Use uma chávena de açúcar.",
    "exampleEn": "Use a cup of sugar.",
    "exampleZhHans": "使用一杯糖。",
    "exampleZhHant": "使用一杯糖。"
  },
  {
    "id": "az-0531",
    "legacyIds": [
      "m11-ingrediente"
    ],
    "situacao": "cafe_restaurante",
    "pt": "o ingrediente",
    "en": "ingredient",
    "zhHans": "成分",
    "zhHant": "成分",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Misture os ingredientes.",
    "exampleEn": "Mix the ingredients.",
    "exampleZhHans": "把这些食材混合起来。",
    "exampleZhHant": "把這些食材混合起來。"
  },
  {
    "id": "az-0151",
    "legacyIds": [
      "m3-sandes"
    ],
    "situacao": "cafe_restaurante",
    "pt": "a sandes",
    "en": "sandwich",
    "zhHans": "三明治",
    "zhHant": "三明治",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Como uma sandes.",
    "exampleEn": "I eat a sandwich.",
    "exampleZhHans": "我吃一个三明治。",
    "exampleZhHant": "我吃一個三明治。"
  },
  {
    "id": "az-0136",
    "legacyIds": [
      "m3-cafe"
    ],
    "situacao": "cafe_restaurante",
    "pt": "o café",
    "en": "coffee; cafe",
    "zhHans": "咖啡/咖啡馆",
    "zhHant": "咖啡/咖啡館",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Queria uma bica.",
    "exampleEn": "I would like an espresso.",
    "exampleZhHans": "我想要一杯意式浓缩咖啡。",
    "exampleZhHant": "我想要一杯義式濃縮咖啡。"
  },
  {
    "id": "az-0166",
    "legacyIds": [
      "m3-pedir"
    ],
    "situacao": "cafe_restaurante",
    "pt": "pedir",
    "en": "to ask for; to order",
    "zhHans": "请求/点餐",
    "zhHant": "請求/點餐",
    "examplePt": "Vou pedir a conta.",
    "exampleEn": "I am going to ask for the bill.",
    "exampleZhHans": "我要结账。",
    "exampleZhHant": "我要結帳。"
  },
  {
    "id": "az-0231",
    "legacyIds": [
      "m5-pagar-a-conta"
    ],
    "situacao": "cafe_restaurante",
    "pt": "pagar a conta",
    "en": "to pay the bill",
    "zhHans": "支付账单",
    "zhHant": "支付帳單",
    "examplePt": "Queria pagar a conta da água.",
    "exampleEn": "I would like to pay the water bill.",
    "exampleZhHans": "我想付水费账单。",
    "exampleZhHant": "我想付水費帳單。"
  },
  {
    "id": "az-0160",
    "legacyIds": [
      "m3-conta"
    ],
    "situacao": "cafe_restaurante",
    "pt": "a conta",
    "en": "bill",
    "zhHans": "账单",
    "zhHant": "帳單",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Era a conta, se faz favor.",
    "exampleEn": "The bill, please.",
    "exampleZhHans": "请给我账单。",
    "exampleZhHant": "請給我帳單。"
  },
  {
    "id": "az-0260",
    "legacyIds": [
      "m5-troco"
    ],
    "situacao": "cafe_restaurante",
    "pt": "o troco",
    "en": "change",
    "zhHans": "找零",
    "zhHant": "找零",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Ele dá-me o troco.",
    "exampleEn": "He gives me the change.",
    "exampleZhHans": "他把零钱找给我。",
    "exampleZhHant": "他把零錢找給我。"
  },
  {
    "id": "az-0313",
    "legacyIds": [
      "m6-consultorio-medico"
    ],
    "situacao": "consultorio_medico",
    "pt": "o consultório médico",
    "en": "doctor's office",
    "zhHans": "医生办公室",
    "zhHant": "醫生辦公室",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Estou no consultório médico.",
    "exampleEn": "I am at the doctor's office.",
    "exampleZhHans": "我在医生诊所。",
    "exampleZhHant": "我在醫生診所。"
  },
  {
    "id": "az-0340",
    "legacyIds": [
      "m6-marcar-uma-consulta"
    ],
    "situacao": "consultorio_medico",
    "pt": "marcar uma consulta",
    "en": "to book an appointment",
    "zhHans": "预约",
    "zhHant": "預約",
    "examplePt": "Vou marcar uma consulta.",
    "exampleEn": "I am going to book an appointment.",
    "exampleZhHans": "我要预约看诊。",
    "exampleZhHant": "我要預約看診。"
  },
  {
    "id": "az-0348",
    "legacyIds": [
      "m6-consultar-o-medico"
    ],
    "situacao": "consultorio_medico",
    "pt": "consultar o médico",
    "en": "to consult the doctor",
    "zhHans": "咨询医生",
    "zhHant": "諮詢醫生",
    "examplePt": "Não dê medicamentos sem consultar o médico.",
    "exampleEn": "Do not give medicines without consulting the doctor.",
    "exampleZhHans": "不要在未咨询医生的情况下给药。",
    "exampleZhHant": "不要在未諮詢醫生的情況下給藥。"
  },
  {
    "id": "az-0381",
    "legacyIds": [
      "m7-medico"
    ],
    "situacao": "consultorio_medico",
    "pt": "médico(a)",
    "en": "doctor",
    "zhHans": "医生",
    "zhHant": "醫生",
    "examplePt": "A médica observa o doente.",
    "exampleEn": "The doctor examines the patient.",
    "exampleZhHans": "女医生观察病人。",
    "exampleZhHant": "女醫生觀察病人。"
  },
  {
    "id": "az-0382",
    "legacyIds": [
      "m7-observar-doente"
    ],
    "situacao": "consultorio_medico",
    "pt": "observar o doente",
    "en": "to examine the patient",
    "zhHans": "检查病人",
    "zhHant": "檢查病人",
    "examplePt": "A médica observa o doente.",
    "exampleEn": "The doctor examines the patient.",
    "exampleZhHans": "女医生观察病人。",
    "exampleZhHant": "女醫生觀察病人。"
  },
  {
    "id": "az-0316",
    "legacyIds": [
      "m6-ha-quanto-tempo"
    ],
    "situacao": "consultorio_medico",
    "pt": "há quanto tempo?",
    "en": "for how long?",
    "zhHans": "多长时间？",
    "zhHant": "多長時間？",
    "examplePt": "Há quanto tempo está assim?",
    "exampleEn": "How long have you been like this?",
    "exampleZhHans": "您这样多久了？",
    "exampleZhHant": "您這樣多久了？"
  },
  {
    "id": "az-0341",
    "legacyIds": [
      "m6-doer"
    ],
    "situacao": "consultorio_medico",
    "pt": "doer",
    "en": "to hurt",
    "zhHans": "疼/痛",
    "zhHant": "疼痛",
    "examplePt": "Dói-me a barriga.",
    "exampleEn": "My belly hurts.",
    "exampleZhHans": "我肚子疼。",
    "exampleZhHant": "我肚子痛。"
  },
  {
    "id": "az-0342",
    "legacyIds": [
      "m6-doi-me"
    ],
    "situacao": "consultorio_medico",
    "pt": "dói-me",
    "en": "it hurts me",
    "zhHans": "我疼/我痛",
    "zhHant": "我痛/我……痛",
    "examplePt": "Dói-me a cabeça.",
    "exampleEn": "My head hurts.",
    "exampleZhHans": "我头疼。",
    "exampleZhHant": "我頭痛。"
  },
  {
    "id": "az-0297",
    "legacyIds": [
      "m6-estar-constipado"
    ],
    "situacao": "consultorio_medico",
    "pt": "estar constipado(a)",
    "en": "to have a cold",
    "zhHans": "感冒了",
    "zhHant": "感冒了",
    "examplePt": "Ele está constipado. Ela está constipada.",
    "exampleEn": "He has a cold. She has a cold.",
    "exampleZhHans": "他感冒了。她感冒了。",
    "exampleZhHant": "他感冒了。她感冒了。"
  },
  {
    "id": "az-0298",
    "legacyIds": [
      "m6-ter-febre"
    ],
    "situacao": "consultorio_medico",
    "pt": "ter febre",
    "en": "to have a fever",
    "zhHans": "发烧",
    "zhHant": "發燒",
    "examplePt": "O menino tem febre.",
    "exampleEn": "The boy has a fever.",
    "exampleZhHans": "男孩发烧了。",
    "exampleZhHant": "男孩發燒了。"
  },
  {
    "id": "az-0299",
    "legacyIds": [
      "m6-ter-tosse"
    ],
    "situacao": "consultorio_medico",
    "pt": "ter tosse",
    "en": "to have a cough",
    "zhHans": "咳嗽",
    "zhHant": "咳嗽",
    "examplePt": "Está com tosse?",
    "exampleEn": "Do you have a cough?",
    "exampleZhHans": "您咳嗽吗？",
    "exampleZhHant": "您咳嗽嗎？"
  },
  {
    "id": "az-0300",
    "legacyIds": [
      "m6-ter-uma-intoxicacao"
    ],
    "situacao": "consultorio_medico",
    "pt": "ter uma intoxicação",
    "en": "to have poisoning",
    "zhHans": "中毒",
    "zhHant": "中毒",
    "examplePt": "Ele tem uma intoxicação.",
    "exampleEn": "He has poisoning.",
    "exampleZhHans": "他中毒了。",
    "exampleZhHant": "他中毒了。"
  },
  {
    "id": "az-0303",
    "legacyIds": [
      "m6-estar-enjoado"
    ],
    "situacao": "consultorio_medico",
    "pt": "estar enjoado(a)",
    "en": "to feel nauseous",
    "zhHans": "感到恶心",
    "zhHant": "感到噁心",
    "examplePt": "Ele está enjoado. Ela está enjoada.",
    "exampleEn": "He feels nauseous. She feels nauseous.",
    "exampleZhHans": "他觉得恶心。她觉得恶心。",
    "exampleZhHant": "他覺得噁心。她覺得噁心。"
  },
  {
    "id": "az-0307",
    "legacyIds": [
      "m6-sentir-se-cansado"
    ],
    "situacao": "consultorio_medico",
    "pt": "sentir-se cansado(a)",
    "en": "to feel tired",
    "zhHans": "感到疲倦",
    "zhHant": "感到疲倦",
    "examplePt": "Ele sente-se cansado. Ela sente-se cansada.",
    "exampleEn": "He feels tired. She feels tired.",
    "exampleZhHans": "他觉得累。她觉得累。",
    "exampleZhHant": "他覺得累。她覺得累。"
  },
  {
    "id": "az-0308",
    "legacyIds": [
      "m6-sem-forcas"
    ],
    "situacao": "consultorio_medico",
    "pt": "sem forças",
    "en": "weak",
    "zhHans": "虚弱的",
    "zhHant": "虛弱的",
    "examplePt": "Estou sem forças.",
    "exampleEn": "I have no strength.",
    "exampleZhHans": "我没有力气。",
    "exampleZhHant": "我沒有力氣。"
  },
  {
    "id": "az-0349",
    "legacyIds": [
      "m6-tonto"
    ],
    "situacao": "consultorio_medico",
    "pt": "tonto(a)",
    "en": "dizzy",
    "zhHans": "晕眩的",
    "zhHant": "暈眩的",
    "examplePt": "Sinto-me tonto. Sinto-me tonta.",
    "exampleEn": "I feel dizzy.",
    "exampleZhHans": "我觉得头晕。",
    "exampleZhHant": "我覺得頭暈。"
  },
  {
    "id": "az-0344",
    "legacyIds": [
      "m6-peito"
    ],
    "situacao": "consultorio_medico",
    "pt": "o peito",
    "en": "chest",
    "zhHans": "胸部",
    "zhHant": "胸部",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Dói-te o peito?",
    "exampleEn": "Does your chest hurt?",
    "exampleZhHans": "你胸口疼吗？",
    "exampleZhHant": "你胸口痛嗎？"
  },
  {
    "id": "az-0345",
    "legacyIds": [
      "m6-ouvidos"
    ],
    "situacao": "consultorio_medico",
    "pt": "os ouvidos",
    "en": "ears",
    "zhHans": "耳朵",
    "zhHant": "耳朵",
    "pos": "noun",
    "gender": "m-pl",
    "examplePt": "Doem-me os ouvidos.",
    "exampleEn": "My ears hurt.",
    "exampleZhHans": "我耳朵疼。",
    "exampleZhHant": "我耳朵痛。"
  },
  {
    "id": "az-0346",
    "legacyIds": [
      "m6-estomago"
    ],
    "situacao": "consultorio_medico",
    "pt": "o estômago",
    "en": "stomach",
    "zhHans": "胃",
    "zhHant": "胃",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Dói-me o estômago.",
    "exampleEn": "My stomach hurts.",
    "exampleZhHans": "我胃疼。",
    "exampleZhHant": "我胃痛。"
  },
  {
    "id": "az-0284",
    "legacyIds": [
      "m6-hospital"
    ],
    "situacao": "consultorio_medico",
    "pt": "o hospital",
    "en": "hospital",
    "zhHans": "医院",
    "zhHant": "醫院",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Vou ao hospital.",
    "exampleEn": "I am going to the hospital.",
    "exampleZhHans": "我去医院。",
    "exampleZhHant": "我去醫院。"
  },
  {
    "id": "az-0285",
    "legacyIds": [
      "m6-centro-de-saude"
    ],
    "situacao": "consultorio_medico",
    "pt": "o Centro de Saúde",
    "en": "health centre",
    "zhHans": "健康中心/社区诊所",
    "zhHant": "健康中心/社區診所",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Vou ao Centro de Saúde da minha área.",
    "exampleEn": "I am going to the health centre in my area.",
    "exampleZhHans": "我去我所在区域的健康中心。",
    "exampleZhHant": "我去我所在區域的健康中心。"
  },
  {
    "id": "az-0286",
    "legacyIds": [
      "m6-usf"
    ],
    "situacao": "consultorio_medico",
    "pt": "a USF",
    "en": "family health unit",
    "zhHans": "家庭保健单位",
    "zhHant": "家庭健康單位",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A USF é uma Unidade de Saúde Familiar.",
    "exampleEn": "The USF is a Family Health Unit.",
    "exampleZhHans": "USF 是家庭健康单位。",
    "exampleZhHant": "USF 是家庭健康單位。"
  },
  {
    "id": "az-0292",
    "legacyIds": [
      "m6-medico-de-familia"
    ],
    "situacao": "consultorio_medico",
    "pt": "médico(a) de família",
    "en": "family doctor",
    "zhHans": "家庭医生",
    "zhHant": "家庭醫生",
    "examplePt": "Marco consulta com o médico de família.",
    "exampleEn": "I make an appointment with the family doctor.",
    "exampleZhHans": "我和家庭医生预约看诊。",
    "exampleZhHant": "我和家庭醫生預約看診。"
  },
  {
    "id": "az-0294",
    "legacyIds": [
      "m6-medir-a-tensao"
    ],
    "situacao": "consultorio_medico",
    "pt": "medir a tensão",
    "en": "to measure blood pressure",
    "zhHans": "测量血压",
    "zhHant": "測量血壓",
    "examplePt": "A enfermeira vai medir a tensão.",
    "exampleEn": "The nurse is going to measure the blood pressure.",
    "exampleZhHans": "护士将测量血压。",
    "exampleZhHant": "護士將量血壓。"
  },
  {
    "id": "az-0295",
    "legacyIds": [
      "m6-fazer-uma-radiografia"
    ],
    "situacao": "consultorio_medico",
    "pt": "fazer uma radiografia",
    "en": "to have an X-ray",
    "zhHans": "照X光",
    "zhHant": "照X光",
    "examplePt": "Tenho de fazer uma radiografia.",
    "exampleEn": "I have to have an X-ray.",
    "exampleZhHans": "我得拍一张 X 光片。",
    "exampleZhHant": "我得照一張 X 光片。"
  },
  {
    "id": "az-0296",
    "legacyIds": [
      "m6-fazer-analises"
    ],
    "situacao": "consultorio_medico",
    "pt": "fazer análises",
    "en": "to have tests",
    "zhHans": "做化验/做检查",
    "zhHant": "做化驗/做檢查",
    "examplePt": "Deve fazer análises.",
    "exampleEn": "You should have tests done.",
    "exampleZhHans": "您应该做化验。",
    "exampleZhHant": "您應該做化驗。"
  },
  {
    "situacao": "consultorio_medico",
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
    "situacao": "consultorio_medico",
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
    "situacao": "consultorio_medico",
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
    "situacao": "consultorio_medico",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "situacao": "casa_reparacoes",
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
    "id": "az-0137",
    "legacyIds": [
      "m3-agua"
    ],
    "situacao": "agua_luz_gas",
    "pt": "a água",
    "en": "water",
    "zhHans": "水",
    "zhHant": "水",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Ponha água na panela.",
    "exampleEn": "Put water in the pot.",
    "exampleZhHans": "请把水倒进锅里。",
    "exampleZhHant": "請把水倒進鍋裡。"
  },
  {
    "id": "az-0160",
    "legacyIds": [
      "m3-conta"
    ],
    "situacao": "agua_luz_gas",
    "pt": "a conta",
    "en": "bill",
    "zhHans": "账单",
    "zhHant": "帳單",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Era a conta, se faz favor.",
    "exampleEn": "The bill, please.",
    "exampleZhHans": "请给我账单。",
    "exampleZhHant": "請給我帳單。"
  },
  {
    "id": "az-0162",
    "legacyIds": [
      "m3-fatura"
    ],
    "situacao": "agua_luz_gas",
    "pt": "a fatura",
    "en": "invoice",
    "zhHans": "发票",
    "zhHant": "發票",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Pode dar-me uma fatura?",
    "exampleEn": "Can you give me an invoice?",
    "exampleZhHans": "可以给我一张发票吗？",
    "exampleZhHant": "可以給我一張發票嗎？"
  },
  {
    "id": "az-0231",
    "legacyIds": [
      "m5-pagar-a-conta"
    ],
    "situacao": "agua_luz_gas",
    "pt": "pagar a conta",
    "en": "to pay the bill",
    "zhHans": "支付账单",
    "zhHant": "支付帳單",
    "examplePt": "Queria pagar a conta da água.",
    "exampleEn": "I would like to pay the water bill.",
    "exampleZhHans": "我想付水费账单。",
    "exampleZhHant": "我想付水費帳單。"
  },
  {
    "situacao": "agua_luz_gas",
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
    "situacao": "agua_luz_gas",
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
    "situacao": "agua_luz_gas",
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
    "situacao": "agua_luz_gas",
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
    "situacao": "agua_luz_gas",
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
    "situacao": "agua_luz_gas",
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
    "situacao": "agua_luz_gas",
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
    "situacao": "agua_luz_gas",
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
    "situacao": "agua_luz_gas",
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
    "situacao": "agua_luz_gas",
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
    "situacao": "agua_luz_gas",
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
    "situacao": "agua_luz_gas",
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
    "situacao": "agua_luz_gas",
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
    "situacao": "agua_luz_gas",
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
    "situacao": "agua_luz_gas",
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
    "situacao": "agua_luz_gas",
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
    "id": "az-0017",
    "legacyIds": [
      "m1-telefone"
    ],
    "situacao": "telemovel_internet",
    "pt": "o telefone",
    "en": "telephone",
    "zhHans": "电话",
    "zhHant": "電話",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Qual é o seu número de telefone?",
    "exampleEn": "What is your telephone number?",
    "exampleZhHans": "您的电话号码是多少？",
    "exampleZhHant": "您的電話號碼是多少？"
  },
  {
    "id": "az-0018",
    "legacyIds": [
      "m1-telemovel"
    ],
    "situacao": "telemovel_internet",
    "pt": "o telemóvel",
    "en": "mobile phone",
    "zhHans": "手机/移动电话",
    "zhHant": "手機/行動電話",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O meu telemóvel é novo.",
    "exampleEn": "My mobile phone is new.",
    "exampleZhHans": "我的手机是新的。",
    "exampleZhHant": "我的手機是新的。"
  },
  {
    "id": "az-0254",
    "legacyIds": [
      "m5-atender"
    ],
    "situacao": "telemovel_internet",
    "pt": "atender",
    "en": "to answer",
    "zhHans": "接电话",
    "zhHant": "接電話",
    "examplePt": "Não atenda o telemóvel.",
    "exampleEn": "Do not answer the mobile phone.",
    "exampleZhHans": "不要接手机。",
    "exampleZhHant": "不要接手機。"
  },
  {
    "id": "az-0255",
    "legacyIds": [
      "m5-desligar"
    ],
    "situacao": "telemovel_internet",
    "pt": "desligar",
    "en": "to turn off",
    "zhHans": "关闭",
    "zhHant": "關閉",
    "examplePt": "Desligue o telemóvel.",
    "exampleEn": "Turn off the mobile phone.",
    "exampleZhHans": "请关掉手机。",
    "exampleZhHant": "請關掉手機。"
  },
  {
    "id": "az-0460",
    "legacyIds": [
      "m9-falar-telemovel"
    ],
    "situacao": "telemovel_internet",
    "pt": "falar ao telemóvel",
    "en": "to talk on the mobile phone",
    "zhHans": "用手机通话",
    "zhHant": "用手機通話",
    "examplePt": "As pessoas falam ao telemóvel.",
    "exampleEn": "People talk on mobile phones.",
    "exampleZhHans": "人们用手机通话。",
    "exampleZhHant": "人們用手機通話。"
  },
  {
    "id": "az-0482",
    "legacyIds": [
      "m10-navegar-na-net"
    ],
    "situacao": "telemovel_internet",
    "pt": "navegar na net",
    "en": "to browse the internet",
    "zhHans": "浏览互联网",
    "zhHant": "瀏覽網路",
    "examplePt": "Eu tenho navegado na net.",
    "exampleEn": "I have been browsing the internet.",
    "exampleZhHans": "我最近一直在上网。",
    "exampleZhHant": "我最近一直在上網。"
  },
  {
    "id": "az-0506",
    "legacyIds": [
      "m11-mensagem"
    ],
    "situacao": "telemovel_internet",
    "pt": "a mensagem",
    "en": "message",
    "zhHans": "信息",
    "zhHant": "訊息",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Mandei uma mensagem.",
    "exampleEn": "I sent a message.",
    "exampleZhHans": "我发了一条消息。",
    "exampleZhHant": "我發了一則訊息。"
  },
  {
    "id": "az-0509",
    "legacyIds": [
      "m11-email"
    ],
    "situacao": "telemovel_internet",
    "pt": "o e-mail",
    "en": "email",
    "zhHans": "电子邮件",
    "zhHant": "電子郵件",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Enviei o currículo por e-mail.",
    "exampleEn": "I sent the resume by email.",
    "exampleZhHans": "我通过电子邮件发送了简历。",
    "exampleZhHant": "我透過電子郵件寄出了履歷。"
  },
  {
    "situacao": "telemovel_internet",
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
    "situacao": "telemovel_internet",
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
    "situacao": "telemovel_internet",
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
    "situacao": "telemovel_internet",
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
    "situacao": "telemovel_internet",
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
    "situacao": "telemovel_internet",
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
    "situacao": "telemovel_internet",
    "pt": "o contrato",
    "en": "contract",
    "zhHans": "合约",
    "zhHant": "合約",
    "id": "az-1134",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-contrato"
    ],
    "examplePt": "Li o contrato todo.",
    "exampleEn": "I read the entire contract.",
    "exampleZhHans": "我把合约全看了。",
    "exampleZhHant": "我把合約全看了。"
  },
  {
    "id": "az-0134",
    "legacyIds": [
      "m2-ir-compras"
    ],
    "situacao": "trocas_devolucoes",
    "pt": "ir às compras",
    "en": "to go shopping",
    "zhHans": "去购物",
    "zhHant": "去購物",
    "examplePt": "Vou às compras ao sábado.",
    "exampleEn": "I go shopping on Saturdays.",
    "exampleZhHans": "我周六去购物。",
    "exampleZhHant": "我週六去購物。"
  },
  {
    "id": "az-0197",
    "legacyIds": [
      "m4-centro-comercial"
    ],
    "situacao": "trocas_devolucoes",
    "pt": "o centro comercial",
    "en": "shopping centre",
    "zhHans": "购物中心",
    "zhHant": "購物中心",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Vou ao centro comercial.",
    "exampleEn": "I am going to the shopping centre.",
    "exampleZhHans": "我去购物中心。",
    "exampleZhHant": "我去購物中心。"
  },
  {
    "id": "az-0216",
    "legacyIds": [
      "m5-loja-de-roupa"
    ],
    "situacao": "trocas_devolucoes",
    "pt": "a loja de roupa",
    "en": "clothes shop",
    "zhHans": "服装店",
    "zhHant": "服飾店",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A loja de roupa está aberta.",
    "exampleEn": "The clothes shop is open.",
    "exampleZhHans": "服装店开着。",
    "exampleZhHant": "服裝店開著。"
  },
  {
    "id": "az-0450",
    "legacyIds": [
      "m9-calcas-ganga"
    ],
    "situacao": "trocas_devolucoes",
    "pt": "as calças de ganga",
    "en": "jeans",
    "zhHans": "牛仔裤",
    "zhHant": "牛仔褲",
    "pos": "noun",
    "gender": "f-pl",
    "examplePt": "Ele usava calças de ganga.",
    "exampleEn": "He used to wear jeans.",
    "exampleZhHans": "他以前穿牛仔裤。",
    "exampleZhHant": "他以前穿牛仔褲。"
  },
  {
    "id": "az-0511",
    "legacyIds": [
      "m11-marca"
    ],
    "situacao": "trocas_devolucoes",
    "pt": "a marca",
    "en": "brand",
    "zhHans": "品牌",
    "zhHant": "品牌",
    "pos": "noun",
    "gender": "f",
    "examplePt": "O telemóvel é da marca Vodafone.",
    "exampleEn": "The mobile phone is from the Vodafone brand.",
    "exampleZhHans": "这部手机是 Vodafone 品牌的。",
    "exampleZhHant": "這支手機是 Vodafone 品牌的。"
  },
  {
    "id": "az-0522",
    "legacyIds": [
      "m11-roupa-estragada"
    ],
    "situacao": "trocas_devolucoes",
    "pt": "a roupa estragada",
    "en": "damaged clothing",
    "zhHans": "损坏的衣服",
    "zhHant": "損壞的衣服",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A reclamação é por roupa estragada.",
    "exampleEn": "The complaint is about damaged clothing.",
    "exampleZhHans": "投诉是因为衣物损坏。",
    "exampleZhHant": "投訴是因為衣物損壞。"
  },
  {
    "id": "az-0523",
    "legacyIds": [
      "m11-estabelecimento"
    ],
    "situacao": "trocas_devolucoes",
    "pt": "o estabelecimento",
    "en": "establishment; shop",
    "zhHans": "机构/商店",
    "zhHant": "機構/商店",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Entreguei a roupa no vosso estabelecimento.",
    "exampleEn": "I delivered the clothing to your establishment.",
    "exampleZhHans": "我把衣服交到了贵店。",
    "exampleZhHant": "我把衣服交到了貴店。"
  },
  {
    "id": "az-0525",
    "legacyIds": [
      "m11-estrago"
    ],
    "situacao": "trocas_devolucoes",
    "pt": "o estrago",
    "en": "damage",
    "zhHans": "损害",
    "zhHant": "損害",
    "pos": "noun",
    "gender": "m",
    "examplePt": "A empresa é responsável pelos estragos.",
    "exampleEn": "The company is responsible for the damage.",
    "exampleZhHans": "该公司应对损坏负责。",
    "exampleZhHant": "該公司應對損壞負責。"
  },
  {
    "id": "az-0526",
    "legacyIds": [
      "m11-exigir"
    ],
    "situacao": "trocas_devolucoes",
    "pt": "exigir",
    "en": "to demand",
    "zhHans": "要求",
    "zhHant": "要求",
    "examplePt": "Exijo uma indemnização.",
    "exampleEn": "I demand compensation.",
    "exampleZhHans": "我要求赔偿。",
    "exampleZhHant": "我要求賠償。"
  },
  {
    "id": "az-0528",
    "legacyIds": [
      "m11-recibo"
    ],
    "situacao": "trocas_devolucoes",
    "pt": "o recibo",
    "en": "receipt",
    "zhHans": "收据/付款凭证",
    "zhHant": "收據/付款憑證",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Junto cópia do recibo de compra.",
    "exampleEn": "I am enclosing a copy of the purchase receipt.",
    "exampleZhHans": "我附上购买收据的副本。",
    "exampleZhHant": "我附上購買收據的副本。"
  },
  {
    "id": "az-0529",
    "legacyIds": [
      "m11-prazo"
    ],
    "situacao": "trocas_devolucoes",
    "pt": "o prazo",
    "en": "deadline",
    "zhHans": "最后期限",
    "zhHant": "最後期限",
    "pos": "noun",
    "gender": "m",
    "examplePt": "A quantia deve ser entregue no prazo de oito dias.",
    "exampleEn": "The amount must be delivered within eight days.",
    "exampleZhHans": "该金额应在八天期限内交付。",
    "exampleZhHant": "該金額應在八天期限內交付。"
  },
  {
    "id": "az-0533",
    "legacyIds": [
      "m11-reclamar"
    ],
    "situacao": "trocas_devolucoes",
    "pt": "reclamar",
    "en": "to complain",
    "zhHans": "抱怨/投诉",
    "zhHant": "抱怨/投訴",
    "examplePt": "Temos de reclamar.",
    "exampleEn": "We have to complain.",
    "exampleZhHans": "我们必须投诉。",
    "exampleZhHant": "我們必須投訴。"
  },
  {
    "id": "az-0534",
    "legacyIds": [
      "m11-queixa"
    ],
    "situacao": "trocas_devolucoes",
    "pt": "a queixa",
    "en": "complaint",
    "zhHans": "抱怨/投诉",
    "zhHant": "抱怨/投訴",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A DECO tem recebido queixas de consumidores.",
    "exampleEn": "DECO has received complaints from consumers.",
    "exampleZhHans": "DECO 一直收到消费者的投诉。",
    "exampleZhHant": "DECO 一直收到消費者的投訴。"
  },
  {
    "id": "az-0535",
    "legacyIds": [
      "m11-consumidor"
    ],
    "situacao": "trocas_devolucoes",
    "pt": "o consumidor",
    "en": "consumer",
    "zhHans": "消费者",
    "zhHant": "消費者",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Os consumidores fizeram queixas.",
    "exampleEn": "Consumers made complaints.",
    "exampleZhHans": "消费者提出了投诉。",
    "exampleZhHant": "消費者提出了投訴。"
  },
  {
    "id": "az-0161",
    "legacyIds": [
      "m3-talao"
    ],
    "situacao": "trocas_devolucoes",
    "pt": "o talão",
    "en": "receipt",
    "zhHans": "收据",
    "zhHant": "收據",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Aqui tem o talão.",
    "exampleEn": "Here is the receipt.",
    "exampleZhHans": "这是您的收据。",
    "exampleZhHant": "這是您的收據。"
  },
  {
    "id": "az-0324",
    "legacyIds": [
      "m6-assalto"
    ],
    "situacao": "policia_documentos",
    "pt": "o assalto",
    "en": "robbery",
    "zhHans": "抢劫",
    "zhHant": "搶劫",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O 112 atende situações de assalto.",
    "exampleEn": "112 handles robbery situations.",
    "exampleZhHans": "112 处理抢劫情况。",
    "exampleZhHant": "112 處理搶劫情況。"
  },
  {
    "id": "az-0323",
    "legacyIds": [
      "m6-incendio"
    ],
    "situacao": "policia_documentos",
    "pt": "o incêndio",
    "en": "fire",
    "zhHans": "火灾",
    "zhHant": "火災",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O 112 atende situações de incêndio.",
    "exampleEn": "112 handles fire situations.",
    "exampleZhHans": "112 处理火灾情况。",
    "exampleZhHant": "112 處理火災情況。"
  },
  {
    "id": "az-0320",
    "legacyIds": [
      "m6-numero-europeu-de-emergencia"
    ],
    "situacao": "policia_documentos",
    "pt": "o Número Europeu de Emergência",
    "en": "European emergency number",
    "zhHans": "欧洲紧急电话号码",
    "zhHant": "歐洲緊急電話號碼",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O 112 é o Número Europeu de Emergência.",
    "exampleEn": "112 is the European Emergency Number.",
    "exampleZhHans": "112 是欧洲紧急电话号码。",
    "exampleZhHant": "112 是歐洲緊急電話號碼。"
  },
  {
    "situacao": "policia_documentos",
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
    "id": "az-0552",
    "legacyIds": [
      "m11-assaltar"
    ],
    "situacao": "policia_documentos",
    "pt": "assaltar",
    "en": "to rob",
    "zhHans": "抢劫",
    "zhHant": "搶劫",
    "examplePt": "O banco foi assaltado ontem de manhã.",
    "exampleEn": "The bank was robbed yesterday morning.",
    "exampleZhHans": "银行昨天早上被抢劫了。",
    "exampleZhHant": "銀行昨天早上被搶劫了。"
  },
  {
    "id": "az-0534",
    "legacyIds": [
      "m11-queixa"
    ],
    "situacao": "policia_documentos",
    "pt": "a queixa",
    "en": "complaint",
    "zhHans": "抱怨/投诉",
    "zhHant": "抱怨/投訴",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A DECO tem recebido queixas de consumidores.",
    "exampleEn": "DECO has received complaints from consumers.",
    "exampleZhHans": "DECO 一直收到消费者的投诉。",
    "exampleZhHant": "DECO 一直收到消費者的投訴。"
  },
  {
    "id": "az-0239",
    "legacyIds": [
      "m5-passaporte"
    ],
    "situacao": "policia_documentos",
    "pt": "o passaporte",
    "en": "passport",
    "zhHans": "护照",
    "zhHant": "護照",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Deve levar o passaporte.",
    "exampleEn": "You should take the passport.",
    "exampleZhHans": "您应该带上护照。",
    "exampleZhHant": "您應該帶上護照。"
  },
  {
    "id": "az-0240",
    "legacyIds": [
      "m5-registo-criminal"
    ],
    "situacao": "policia_documentos",
    "pt": "o registo criminal",
    "en": "criminal record",
    "zhHans": "犯罪记录",
    "zhHant": "犯罪記錄",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Preciso de autorização para consulta do registo criminal.",
    "exampleEn": "I need authorisation to consult the criminal record.",
    "exampleZhHans": "我需要授权查询犯罪记录。",
    "exampleZhHant": "我需要授權查詢犯罪紀錄。"
  },
  {
    "id": "az-0506",
    "legacyIds": [
      "m11-mensagem"
    ],
    "situacao": "policia_documentos",
    "pt": "a mensagem",
    "en": "message",
    "zhHans": "信息",
    "zhHant": "訊息",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Mandei uma mensagem.",
    "exampleEn": "I sent a message.",
    "exampleZhHans": "我发了一条消息。",
    "exampleZhHant": "我發了一則訊息。"
  },
  {
    "id": "az-0542",
    "legacyIds": [
      "m11-destinatario"
    ],
    "situacao": "policia_documentos",
    "pt": "o destinatário",
    "en": "recipient",
    "zhHans": "接受者",
    "zhHant": "接受者",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Não conhecemos o destinatário.",
    "exampleEn": "We do not know the recipient.",
    "exampleZhHans": "我们不认识收件人。",
    "exampleZhHant": "我們不認識收件人。"
  },
  {
    "id": "az-0553",
    "legacyIds": [
      "m11-alguem"
    ],
    "situacao": "policia_documentos",
    "pt": "alguém",
    "en": "someone",
    "zhHans": "某人",
    "zhHant": "某人",
    "examplePt": "Alguém sabe onde fica o ACM?",
    "exampleEn": "Does anyone know where the ACM is?",
    "exampleZhHans": "有人知道 ACM 在哪里吗？",
    "exampleZhHant": "有人知道 ACM 在哪裡嗎？"
  },
  {
    "id": "az-0554",
    "legacyIds": [
      "m11-ninguem"
    ],
    "situacao": "policia_documentos",
    "pt": "ninguém",
    "en": "no one",
    "zhHans": "没有人",
    "zhHant": "沒有人",
    "examplePt": "Ninguém deve estar ilegal.",
    "exampleEn": "No one should be in an illegal situation.",
    "exampleZhHans": "任何人都不应该处于非法状态。",
    "exampleZhHant": "任何人都不應該處於非法狀態。"
  },
  {
    "id": "az-0579",
    "legacyIds": [
      "m12-preencher"
    ],
    "situacao": "policia_documentos",
    "pt": "preencher",
    "en": "to fill in",
    "zhHans": "填写",
    "zhHant": "填寫",
    "examplePt": "Basta preencher o requerimento.",
    "exampleEn": "It is enough to fill in the application form.",
    "exampleZhHans": "只需填写申请表。",
    "exampleZhHant": "只需填寫申請表。"
  },
  {
    "situacao": "policia_documentos",
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
    "situacao": "policia_documentos",
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
    "id": "az-1267",
    "legacyIds": [
      "situacao-o-contrato-de-fornecimento"
    ],
    "pt": "o contrato de fornecimento",
    "en": "utility supply contract",
    "zhHans": "公用事业供应合同",
    "zhHant": "公用事業供應合約",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O contrato de fornecimento fica em nome da inquilina.",
    "exampleEn": "The utility contract is in the tenant's name.",
    "exampleZhHans": "公用事业合同登记在房客名下。",
    "exampleZhHant": "公用事業合約登記在房客名下。",
    "situacao": "agua_luz_gas"
  },
  {
    "id": "az-1268",
    "legacyIds": [
      "situacao-o-contador"
    ],
    "pt": "o contador",
    "en": "meter",
    "zhHans": "计量表",
    "zhHant": "計量錶",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O contador da eletricidade fica no corredor.",
    "exampleEn": "The electricity meter is in the corridor.",
    "exampleZhHans": "电表在走廊里。",
    "exampleZhHant": "電錶在走廊裡。",
    "situacao": "agua_luz_gas"
  },
  {
    "id": "az-1269",
    "legacyIds": [
      "situacao-a-leitura-do-contador"
    ],
    "pt": "a leitura do contador",
    "en": "meter reading",
    "zhHans": "抄表数值",
    "zhHant": "抄錶數值",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Enviei a leitura do contador pela aplicação.",
    "exampleEn": "I sent the meter reading through the app.",
    "exampleZhHans": "我通过应用程序提交了抄表数值。",
    "exampleZhHant": "我透過應用程式提交了抄錶數值。",
    "situacao": "agua_luz_gas"
  },
  {
    "id": "az-1270",
    "legacyIds": [
      "situacao-a-potencia-contratada"
    ],
    "pt": "a potência contratada",
    "en": "contracted power level",
    "zhHans": "合同电力容量",
    "zhHant": "合約電力容量",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Esta potência contratada não chega para a casa toda.",
    "exampleEn": "This contracted power level is not enough for the whole home.",
    "exampleZhHans": "这个合同电力容量不够全屋使用。",
    "exampleZhHant": "這個合約電力容量不夠全屋使用。",
    "situacao": "agua_luz_gas"
  },
  {
    "id": "az-1271",
    "legacyIds": [
      "situacao-a-tarifa-bi-horaria"
    ],
    "pt": "a tarifa bi-horária",
    "en": "time-of-use tariff",
    "zhHans": "分时电价",
    "zhHant": "分時電價",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A tarifa bi-horária fica mais barata durante a noite.",
    "exampleEn": "The time-of-use tariff is cheaper at night.",
    "exampleZhHans": "分时电价在夜间更便宜。",
    "exampleZhHant": "分時電價在夜間更便宜。",
    "situacao": "agua_luz_gas"
  },
  {
    "id": "az-1272",
    "legacyIds": [
      "situacao-a-falha-de-eletricidade"
    ],
    "pt": "a falha de eletricidade",
    "en": "power cut",
    "zhHans": "停电",
    "zhHant": "停電",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Houve uma falha de eletricidade no prédio.",
    "exampleEn": "There was a power cut in the building.",
    "exampleZhHans": "这栋楼停电了。",
    "exampleZhHant": "這棟樓停電了。",
    "situacao": "agua_luz_gas"
  },
  {
    "id": "az-1273",
    "legacyIds": [
      "situacao-a-fuga-de-gas"
    ],
    "pt": "a fuga de gás",
    "en": "gas leak",
    "zhHans": "燃气泄漏",
    "zhHant": "燃氣洩漏",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Se sentir cheiro, feche o gás e comunique a fuga.",
    "exampleEn": "If you smell gas, turn it off and report the leak.",
    "exampleZhHans": "闻到气味时要关闭燃气并报告泄漏。",
    "exampleZhHant": "聞到氣味時要關閉燃氣並報告洩漏。",
    "situacao": "agua_luz_gas"
  },
  {
    "id": "az-1274",
    "legacyIds": [
      "situacao-mudar-o-titular"
    ],
    "pt": "mudar o titular",
    "en": "to change the account holder",
    "zhHans": "更改户名",
    "zhHant": "更改戶名",
    "pos": "verb",
    "examplePt": "Quero mudar o titular do contrato.",
    "exampleEn": "I want to change the account holder on the contract.",
    "exampleZhHans": "我想更改合同户名。",
    "exampleZhHant": "我想更改合約戶名。",
    "situacao": "agua_luz_gas"
  },
  {
    "id": "az-1275",
    "legacyIds": [
      "situacao-comunicar-a-leitura"
    ],
    "pt": "comunicar a leitura",
    "en": "to submit a meter reading",
    "zhHans": "提交抄表数值",
    "zhHant": "提交抄錶數值",
    "examplePt": "Pode comunicar a leitura por telefone.",
    "exampleEn": "You can submit the reading by phone.",
    "exampleZhHans": "您可以通过电话提交抄表数值。",
    "exampleZhHant": "您可以透過電話提交抄錶數值。",
    "situacao": "agua_luz_gas"
  },
  {
    "id": "az-1276",
    "legacyIds": [
      "situacao-a-data-limite-de-pagamento"
    ],
    "pt": "a data limite de pagamento",
    "en": "payment deadline",
    "zhHans": "付款截止日期",
    "zhHant": "付款截止日期",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A data limite de pagamento é dia vinte.",
    "exampleEn": "The payment deadline is the twentieth.",
    "exampleZhHans": "付款截止日期是二十日。",
    "exampleZhHant": "付款截止日期是二十日。",
    "situacao": "agua_luz_gas"
  },
  {
    "id": "az-1277",
    "legacyIds": [
      "situacao-o-cartao-sim"
    ],
    "pt": "o cartão SIM",
    "en": "SIM card",
    "zhHans": "SIM卡",
    "zhHant": "SIM卡",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Preciso de um cartão SIM português.",
    "exampleEn": "I need a Portuguese SIM card.",
    "exampleZhHans": "我需要一张葡萄牙SIM卡。",
    "exampleZhHant": "我需要一張葡萄牙SIM卡。",
    "situacao": "telemovel_internet"
  },
  {
    "id": "az-1278",
    "legacyIds": [
      "situacao-o-tarifario"
    ],
    "pt": "o tarifário",
    "en": "mobile plan",
    "zhHans": "手机套餐",
    "zhHant": "手機方案",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Este tarifário inclui chamadas e dados móveis.",
    "exampleEn": "This plan includes calls and mobile data.",
    "exampleZhHans": "这个套餐包括通话和移动数据。",
    "exampleZhHant": "這個方案包括通話和行動數據。",
    "situacao": "telemovel_internet"
  },
  {
    "id": "az-1279",
    "legacyIds": [
      "situacao-pre-pago"
    ],
    "pt": "pré-pago",
    "en": "prepaid",
    "zhHans": "预付费的",
    "zhHant": "預付費的",
    "examplePt": "Prefiro um cartão pré-pago sem contrato.",
    "exampleEn": "I prefer a prepaid card without a contract.",
    "exampleZhHans": "我想要无需合同的预付费卡。",
    "exampleZhHant": "我想要無需合約的預付費卡。",
    "situacao": "telemovel_internet"
  },
  {
    "id": "az-1280",
    "legacyIds": [
      "situacao-pos-pago"
    ],
    "pt": "pós-pago",
    "en": "postpaid",
    "zhHans": "后付费的",
    "zhHant": "後付費的",
    "examplePt": "O tarifário pós-pago tem fidelização.",
    "exampleEn": "The postpaid plan has a lock-in period.",
    "exampleZhHans": "后付费套餐有合约期。",
    "exampleZhHant": "後付費方案有綁約期。",
    "situacao": "telemovel_internet"
  },
  {
    "id": "az-1281",
    "legacyIds": [
      "situacao-os-dados-moveis"
    ],
    "pt": "os dados móveis",
    "en": "mobile data",
    "zhHans": "移动数据",
    "zhHant": "行動數據",
    "pos": "noun",
    "gender": "m-pl",
    "examplePt": "Os dados móveis acabaram antes do fim do mês.",
    "exampleEn": "My mobile data ran out before the end of the month.",
    "exampleZhHans": "我的移动数据月底前就用完了。",
    "exampleZhHant": "我的行動數據月底前就用完了。",
    "situacao": "telemovel_internet"
  },
  {
    "id": "az-1282",
    "legacyIds": [
      "situacao-a-rede"
    ],
    "pt": "a rede",
    "en": "network",
    "zhHans": "网络",
    "zhHant": "網絡",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A rede está em baixo nesta zona.",
    "exampleEn": "The network is down in this area.",
    "exampleZhHans": "这个地区的网络中断了。",
    "exampleZhHant": "這個地區的網絡中斷了。",
    "situacao": "telemovel_internet"
  },
  {
    "id": "az-1283",
    "legacyIds": [
      "situacao-a-cobertura"
    ],
    "pt": "a cobertura",
    "en": "coverage",
    "zhHans": "信号覆盖",
    "zhHant": "訊號覆蓋",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Há pouca cobertura dentro de casa.",
    "exampleEn": "There is poor coverage inside the house.",
    "exampleZhHans": "屋内信号覆盖很差。",
    "exampleZhHant": "屋內訊號覆蓋很差。",
    "situacao": "telemovel_internet"
  },
  {
    "id": "az-1284",
    "legacyIds": [
      "situacao-o-sinal"
    ],
    "pt": "o sinal",
    "en": "signal",
    "zhHans": "信号",
    "zhHant": "訊號",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O sinal do Wi-Fi não chega ao quarto.",
    "exampleEn": "The Wi-Fi signal does not reach the bedroom.",
    "exampleZhHans": "Wi-Fi信号到不了卧室。",
    "exampleZhHant": "Wi-Fi訊號到不了睡房。",
    "situacao": "telemovel_internet"
  },
  {
    "id": "az-1285",
    "legacyIds": [
      "situacao-o-router"
    ],
    "pt": "o router",
    "en": "router",
    "zhHans": "路由器",
    "zhHant": "路由器",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Reinicie o router e espere dois minutos.",
    "exampleEn": "Restart the router and wait two minutes.",
    "exampleZhHans": "请重启路由器并等待两分钟。",
    "exampleZhHant": "請重啟路由器並等待兩分鐘。",
    "situacao": "telemovel_internet"
  },
  {
    "id": "az-1286",
    "legacyIds": [
      "situacao-a-palavra-passe-do-wi-fi"
    ],
    "pt": "a palavra-passe do Wi-Fi",
    "en": "Wi-Fi password",
    "zhHans": "Wi-Fi密码",
    "zhHant": "Wi-Fi密碼",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Qual é a palavra-passe do Wi-Fi?",
    "exampleEn": "What is the Wi-Fi password?",
    "exampleZhHans": "Wi-Fi密码是什么？",
    "exampleZhHant": "Wi-Fi密碼是甚麼？",
    "situacao": "telemovel_internet"
  },
  {
    "id": "az-1287",
    "legacyIds": [
      "situacao-a-fibra"
    ],
    "pt": "a fibra",
    "en": "fibre broadband",
    "zhHans": "光纤宽带",
    "zhHant": "光纖寬頻",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A fibra ainda não está disponível nesta morada.",
    "exampleEn": "Fibre is not yet available at this address.",
    "exampleZhHans": "这个地址尚未开通光纤。",
    "exampleZhHant": "這個地址尚未開通光纖。",
    "situacao": "telemovel_internet"
  },
  {
    "id": "az-1288",
    "legacyIds": [
      "situacao-a-instalacao"
    ],
    "pt": "a instalação",
    "en": "installation",
    "zhHans": "安装",
    "zhHant": "安裝",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A instalação ficou marcada para sexta-feira.",
    "exampleEn": "The installation was booked for Friday.",
    "exampleZhHans": "安装预约在星期五。",
    "exampleZhHant": "安裝預約在星期五。",
    "situacao": "telemovel_internet"
  },
  {
    "id": "az-1289",
    "legacyIds": [
      "situacao-o-tecnico"
    ],
    "pt": "o técnico",
    "en": "technician",
    "zhHans": "技术人员",
    "zhHant": "技術人員",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O técnico liga antes de chegar.",
    "exampleEn": "The technician will call before arriving.",
    "exampleZhHans": "技术人员到达前会打电话。",
    "exampleZhHant": "技術人員到達前會打電話。",
    "situacao": "telemovel_internet"
  },
  {
    "id": "az-1290",
    "legacyIds": [
      "situacao-o-periodo-de-fidelizacao"
    ],
    "pt": "o período de fidelização",
    "en": "lock-in period",
    "zhHans": "合约期",
    "zhHant": "綁約期",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O período de fidelização é de vinte e quatro meses.",
    "exampleEn": "The lock-in period is twenty-four months.",
    "exampleZhHans": "合约期为二十四个月。",
    "exampleZhHant": "綁約期為二十四個月。",
    "situacao": "telemovel_internet"
  },
  {
    "id": "az-1291",
    "legacyIds": [
      "situacao-a-portabilidade-do-numero"
    ],
    "pt": "a portabilidade do número",
    "en": "number porting",
    "zhHans": "携号转网",
    "zhHant": "攜號轉台",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Pedi a portabilidade do meu número antigo.",
    "exampleEn": "I requested to port my old number.",
    "exampleZhHans": "我申请保留原来的号码转网。",
    "exampleZhHant": "我申請保留原來的號碼轉台。",
    "situacao": "telemovel_internet"
  },
  {
    "id": "az-1292",
    "legacyIds": [
      "situacao-o-tamanho"
    ],
    "pt": "o tamanho",
    "en": "size",
    "zhHans": "尺码",
    "zhHant": "尺碼",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Tem este casaco no meu tamanho?",
    "exampleEn": "Do you have this jacket in my size?",
    "exampleZhHans": "这件外套有我的尺码吗？",
    "exampleZhHant": "這件外套有我的尺碼嗎？",
    "situacao": "trocas_devolucoes"
  },
  {
    "id": "az-1293",
    "legacyIds": [
      "situacao-o-provador"
    ],
    "pt": "o provador",
    "en": "fitting room",
    "zhHans": "试衣间",
    "zhHant": "試身室",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Os provadores ficam ao fundo da loja.",
    "exampleEn": "The fitting rooms are at the back of the shop.",
    "exampleZhHans": "试衣间在商店里面。",
    "exampleZhHant": "試身室在店內後方。",
    "situacao": "trocas_devolucoes"
  },
  {
    "id": "az-1294",
    "legacyIds": [
      "situacao-experimentar"
    ],
    "pt": "experimentar",
    "en": "to try on",
    "zhHans": "试穿",
    "zhHant": "試穿",
    "pos": "verb",
    "examplePt": "Posso experimentar estas calças?",
    "exampleEn": "May I try on these trousers?",
    "exampleZhHans": "我可以试穿这条裤子吗？",
    "exampleZhHant": "我可以試穿這條褲子嗎？",
    "situacao": "trocas_devolucoes"
  },
  {
    "id": "az-1295",
    "legacyIds": [
      "situacao-servir"
    ],
    "pt": "servir",
    "en": "to fit",
    "zhHans": "合身",
    "zhHant": "合身",
    "pos": "verb",
    "examplePt": "Este número não me serve.",
    "exampleEn": "This size does not fit me.",
    "exampleZhHans": "这个尺码不合身。",
    "exampleZhHant": "這個尺碼不合身。",
    "situacao": "trocas_devolucoes"
  },
  {
    "id": "az-1296",
    "legacyIds": [
      "situacao-apertado-a"
    ],
    "pt": "apertado/a",
    "en": "tight",
    "zhHans": "紧的",
    "zhHant": "緊的",
    "examplePt": "O vestido fica um pouco apertado.",
    "exampleEn": "The dress is a little tight.",
    "exampleZhHans": "这条裙子有点紧。",
    "exampleZhHant": "這條裙子有點緊。",
    "situacao": "trocas_devolucoes"
  },
  {
    "id": "az-1297",
    "legacyIds": [
      "situacao-largo-a"
    ],
    "pt": "largo/a",
    "en": "loose",
    "zhHans": "宽松的",
    "zhHant": "寬鬆的",
    "examplePt": "As calças ficam demasiado largas.",
    "exampleEn": "The trousers are too loose.",
    "exampleZhHans": "这条裤子太宽松。",
    "exampleZhHant": "這條褲子太寬鬆。",
    "situacao": "trocas_devolucoes"
  },
  {
    "id": "az-1298",
    "legacyIds": [
      "situacao-trocar-um-artigo"
    ],
    "pt": "trocar um artigo",
    "en": "to exchange an item",
    "zhHans": "换货",
    "zhHant": "換貨",
    "examplePt": "Queria trocar este artigo por outro tamanho.",
    "exampleEn": "I'd like to exchange this item for another size.",
    "exampleZhHans": "我想把这件商品换成另一个尺码。",
    "exampleZhHant": "我想把這件商品換成另一個尺碼。",
    "situacao": "trocas_devolucoes"
  },
  {
    "id": "az-1299",
    "legacyIds": [
      "situacao-devolver-um-artigo"
    ],
    "pt": "devolver um artigo",
    "en": "to return an item",
    "zhHans": "退货",
    "zhHant": "退貨",
    "examplePt": "Pode devolver o artigo no prazo de trinta dias.",
    "exampleEn": "You can return the item within thirty days.",
    "exampleZhHans": "您可以在三十天内退货。",
    "exampleZhHant": "您可以在三十天內退貨。",
    "situacao": "trocas_devolucoes"
  },
  {
    "situacao": "trocas_devolucoes",
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
    "id": "az-1300",
    "legacyIds": [
      "situacao-o-defeito"
    ],
    "pt": "o defeito",
    "en": "defect",
    "zhHans": "瑕疵",
    "zhHant": "瑕疵",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O fecho tem um defeito.",
    "exampleEn": "The zip has a defect.",
    "exampleZhHans": "拉链有瑕疵。",
    "exampleZhHant": "拉鏈有瑕疵。",
    "situacao": "trocas_devolucoes"
  },
  {
    "id": "az-1301",
    "legacyIds": [
      "situacao-a-garantia"
    ],
    "pt": "a garantia",
    "en": "warranty",
    "zhHans": "保修",
    "zhHant": "保養",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Este aparelho tem dois anos de garantia.",
    "exampleEn": "This appliance has a two-year warranty.",
    "exampleZhHans": "这台设备有两年保修。",
    "exampleZhHant": "這台設備有兩年保養。",
    "situacao": "trocas_devolucoes"
  },
  {
    "id": "az-1302",
    "legacyIds": [
      "situacao-a-etiqueta"
    ],
    "pt": "a etiqueta",
    "en": "label / tag",
    "zhHans": "标签",
    "zhHant": "標籤",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Não retire a etiqueta antes de experimentar.",
    "exampleEn": "Do not remove the tag before trying it on.",
    "exampleZhHans": "试穿前请勿撕下标签。",
    "exampleZhHant": "試穿前請勿撕下標籤。",
    "situacao": "trocas_devolucoes"
  },
  {
    "id": "az-1303",
    "legacyIds": [
      "situacao-a-promocao"
    ],
    "pt": "a promoção",
    "en": "special offer",
    "zhHans": "促销",
    "zhHant": "促銷",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A promoção termina no domingo.",
    "exampleEn": "The special offer ends on Sunday.",
    "exampleZhHans": "促销活动星期日结束。",
    "exampleZhHant": "促銷活動星期日結束。",
    "situacao": "trocas_devolucoes"
  },
  {
    "id": "az-1304",
    "legacyIds": [
      "situacao-esgotado-a"
    ],
    "pt": "esgotado/a",
    "en": "sold out",
    "zhHans": "售罄的",
    "zhHant": "售罄的",
    "examplePt": "Esse tamanho está esgotado.",
    "exampleEn": "That size is sold out.",
    "exampleZhHans": "那个尺码已经售罄。",
    "exampleZhHant": "那個尺碼已經售罄。",
    "situacao": "trocas_devolucoes"
  },
  {
    "id": "az-1305",
    "legacyIds": [
      "situacao-o-vale-de-troca"
    ],
    "pt": "o vale de troca",
    "en": "exchange voucher",
    "zhHans": "换货券",
    "zhHant": "換貨券",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Sem talão, só podemos emitir um vale de troca.",
    "exampleEn": "Without a receipt, we can only issue an exchange voucher.",
    "exampleZhHans": "没有收据只能开换货券。",
    "exampleZhHant": "沒有收據只能開換貨券。",
    "situacao": "trocas_devolucoes"
  },
  {
    "id": "az-1306",
    "legacyIds": [
      "situacao-a-esquadra"
    ],
    "pt": "a esquadra",
    "en": "police station",
    "zhHans": "警察局",
    "zhHant": "警署",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A esquadra mais próxima fica nesta rua.",
    "exampleEn": "The nearest police station is on this street.",
    "exampleZhHans": "最近的警察局在这条街上。",
    "exampleZhHant": "最近的警署在這條街上。",
    "situacao": "policia_documentos"
  },
  {
    "id": "az-1307",
    "legacyIds": [
      "situacao-a-policia"
    ],
    "pt": "a polícia",
    "en": "police",
    "zhHans": "警察",
    "zhHant": "警察",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A polícia chegou poucos minutos depois.",
    "exampleEn": "The police arrived a few minutes later.",
    "exampleZhHans": "警察几分钟后到达。",
    "exampleZhHant": "警察幾分鐘後到達。",
    "situacao": "policia_documentos"
  },
  {
    "id": "az-1308",
    "legacyIds": [
      "situacao-apresentar-uma-denuncia"
    ],
    "pt": "apresentar uma denúncia",
    "en": "to file a police report",
    "zhHans": "报案",
    "zhHant": "報案",
    "examplePt": "Quero apresentar uma denúncia por furto.",
    "exampleEn": "I want to file a report for theft.",
    "exampleZhHans": "我要报案，物品被盗。",
    "exampleZhHant": "我要報案，物品被盜。",
    "situacao": "policia_documentos"
  },
  {
    "id": "az-1309",
    "legacyIds": [
      "situacao-a-ocorrencia"
    ],
    "pt": "a ocorrência",
    "en": "incident",
    "zhHans": "事件记录",
    "zhHant": "事件紀錄",
    "pos": "noun",
    "gender": "f",
    "examplePt": "O agente registou a ocorrência.",
    "exampleEn": "The officer recorded the incident.",
    "exampleZhHans": "警员记录了这起事件。",
    "exampleZhHant": "警員記錄了這宗事件。",
    "situacao": "policia_documentos"
  },
  {
    "id": "az-1310",
    "legacyIds": [
      "situacao-o-furto"
    ],
    "pt": "o furto",
    "en": "theft",
    "zhHans": "盗窃",
    "zhHant": "盜竊",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O furto aconteceu dentro do autocarro.",
    "exampleEn": "The theft happened on the bus.",
    "exampleZhHans": "盗窃发生在公交车上。",
    "exampleZhHant": "盜竊發生在巴士上。",
    "situacao": "policia_documentos"
  },
  {
    "id": "az-1311",
    "legacyIds": [
      "situacao-a-carteira"
    ],
    "pt": "a carteira",
    "en": "wallet",
    "zhHans": "钱包",
    "zhHant": "銀包",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Perdi a carteira com os documentos.",
    "exampleEn": "I lost my wallet with my documents.",
    "exampleZhHans": "我丢了装有证件的钱包。",
    "exampleZhHant": "我遺失了裝有證件的銀包。",
    "situacao": "policia_documentos"
  },
  {
    "id": "az-1312",
    "legacyIds": [
      "situacao-o-documento-de-identificacao"
    ],
    "pt": "o documento de identificação",
    "en": "identity document",
    "zhHans": "身份证件",
    "zhHant": "身份證明文件",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Levaram o meu documento de identificação.",
    "exampleEn": "My identity document was taken.",
    "exampleZhHans": "我的身份证件被拿走了。",
    "exampleZhHant": "我的身份證明文件被取走了。",
    "situacao": "policia_documentos"
  },
  {
    "id": "az-1313",
    "legacyIds": [
      "situacao-os-perdidos-e-achados"
    ],
    "pt": "os perdidos e achados",
    "en": "lost and found",
    "zhHans": "失物招领处",
    "zhHant": "失物認領處",
    "pos": "noun",
    "gender": "m-pl",
    "examplePt": "Pergunte primeiro nos perdidos e achados.",
    "exampleEn": "Ask at lost and found first.",
    "exampleZhHans": "请先到失物招领处询问。",
    "exampleZhHant": "請先到失物認領處查詢。",
    "situacao": "policia_documentos"
  },
  {
    "id": "az-1314",
    "legacyIds": [
      "situacao-a-descricao"
    ],
    "pt": "a descrição",
    "en": "description",
    "zhHans": "描述",
    "zhHant": "描述",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Pode dar uma descrição da mochila?",
    "exampleEn": "Can you describe the backpack?",
    "exampleZhHans": "您可以描述一下背包吗？",
    "exampleZhHant": "您可以描述一下背包嗎？",
    "situacao": "policia_documentos"
  },
  {
    "id": "az-1315",
    "legacyIds": [
      "situacao-a-testemunha"
    ],
    "pt": "a testemunha",
    "en": "witness",
    "zhHans": "目击者",
    "zhHant": "目擊證人",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Uma testemunha viu o que aconteceu.",
    "exampleEn": "A witness saw what happened.",
    "exampleZhHans": "一名目击者看到了事情经过。",
    "exampleZhHant": "一名目擊證人看到了事情經過。",
    "situacao": "policia_documentos"
  },
  {
    "id": "az-1316",
    "legacyIds": [
      "situacao-o-suspeito"
    ],
    "pt": "o suspeito",
    "en": "suspect",
    "zhHans": "嫌疑人",
    "zhHant": "疑犯",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Não consegui ver a cara do suspeito.",
    "exampleEn": "I could not see the suspect's face.",
    "exampleZhHans": "我没看清嫌疑人的脸。",
    "exampleZhHant": "我沒有看清疑犯的臉。",
    "situacao": "policia_documentos"
  },
  {
    "id": "az-1317",
    "legacyIds": [
      "situacao-o-auto-da-ocorrencia"
    ],
    "pt": "o auto da ocorrência",
    "en": "incident report",
    "zhHans": "事件报告",
    "zhHant": "事件報告",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Preciso de uma cópia do auto da ocorrência.",
    "exampleEn": "I need a copy of the incident report.",
    "exampleZhHans": "我需要一份事件报告副本。",
    "exampleZhHant": "我需要一份事件報告副本。",
    "situacao": "policia_documentos"
  },
  {
    "id": "az-1318",
    "legacyIds": [
      "situacao-o-numero-da-ocorrencia"
    ],
    "pt": "o número da ocorrência",
    "en": "incident reference number",
    "zhHans": "事件编号",
    "zhHant": "事件編號",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Guarde o número da ocorrência.",
    "exampleEn": "Keep the incident reference number.",
    "exampleZhHans": "请保留事件编号。",
    "exampleZhHant": "請保留事件編號。",
    "situacao": "policia_documentos"
  },
  {
    "id": "az-1319",
    "legacyIds": [
      "situacao-bloquear-os-cartoes"
    ],
    "pt": "bloquear os cartões",
    "en": "to block the cards",
    "zhHans": "冻结银行卡",
    "zhHant": "停用銀行卡",
    "examplePt": "Liguei ao banco para bloquear os cartões.",
    "exampleEn": "I called the bank to block the cards.",
    "exampleZhHans": "我给银行打电话冻结银行卡。",
    "exampleZhHant": "我致電銀行停用銀行卡。",
    "situacao": "policia_documentos"
  },
  {
    "id": "az-1320",
    "legacyIds": [
      "situacao-foi-roubado-a"
    ],
    "pt": "foi roubado/a",
    "en": "was stolen",
    "zhHans": "被盗了",
    "zhHant": "被盜了",
    "examplePt": "O meu telemóvel foi roubado.",
    "exampleEn": "My phone was stolen.",
    "exampleZhHans": "我的手机被盗了。",
    "exampleZhHant": "我的手機被盜了。",
    "situacao": "policia_documentos"
  },
  {
    "situacao": "espaco_cidadao",
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
    "situacao": "espaco_cidadao",
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
    "situacao": "espaco_cidadao",
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
    "situacao": "espaco_cidadao",
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
    "situacao": "espaco_cidadao",
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
    "id": "az-0579",
    "legacyIds": [
      "m12-preencher"
    ],
    "situacao": "espaco_cidadao",
    "pt": "preencher",
    "en": "to fill in",
    "zhHans": "填写",
    "zhHant": "填寫",
    "examplePt": "Basta preencher o requerimento.",
    "exampleEn": "It is enough to fill in the application form.",
    "exampleZhHans": "只需填写申请表。",
    "exampleZhHant": "只需填寫申請表。"
  },
  {
    "id": "az-0580",
    "legacyIds": [
      "m12-tratar-de"
    ],
    "situacao": "espaco_cidadao",
    "pt": "tratar de",
    "en": "to take care of",
    "zhHans": "办理/处理",
    "zhHant": "辦理/處理",
    "examplePt": "Ajudam-te a tratar de tudo.",
    "exampleEn": "They help you take care of everything.",
    "exampleZhHans": "他们会帮你处理一切。",
    "exampleZhHant": "他們會幫你處理一切。"
  },
  {
    "id": "az-0595",
    "legacyIds": [
      "m12-balcao"
    ],
    "situacao": "espaco_cidadao",
    "pt": "o balcão",
    "en": "counter",
    "zhHans": "柜台/服务台",
    "zhHant": "櫃台/服務台",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Falou do outro lado do balcão.",
    "exampleEn": "He spoke from the other side of the counter.",
    "exampleZhHans": "他在柜台的另一边说话。",
    "exampleZhHant": "他在櫃台的另一邊說話。"
  },
  {
    "situacao": "espaco_cidadao",
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
    "id": "az-0232",
    "legacyIds": [
      "m5-senha"
    ],
    "situacao": "espaco_cidadao",
    "pt": "a senha",
    "en": "ticket number",
    "zhHans": "票号",
    "zhHant": "票號",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Pode dar-me a sua senha?",
    "exampleEn": "Can you give me your ticket number?",
    "exampleZhHans": "您可以给我您的号码票吗？",
    "exampleZhHant": "您可以給我您的號碼牌嗎？"
  },
  {
    "id": "az-0529",
    "legacyIds": [
      "m11-prazo"
    ],
    "situacao": "espaco_cidadao",
    "pt": "o prazo",
    "en": "deadline",
    "zhHans": "最后期限",
    "zhHant": "最後期限",
    "pos": "noun",
    "gender": "m",
    "examplePt": "A quantia deve ser entregue no prazo de oito dias.",
    "exampleEn": "The amount must be delivered within eight days.",
    "exampleZhHans": "该金额应在八天期限内交付。",
    "exampleZhHant": "該金額應在八天期限內交付。"
  },
  {
    "id": "az-0509",
    "legacyIds": [
      "m11-email"
    ],
    "situacao": "espaco_cidadao",
    "pt": "o e-mail",
    "en": "email",
    "zhHans": "电子邮件",
    "zhHant": "電子郵件",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Enviei o currículo por e-mail.",
    "exampleEn": "I sent the resume by email.",
    "exampleZhHans": "我通过电子邮件发送了简历。",
    "exampleZhHant": "我透過電子郵件寄出了履歷。"
  },
  {
    "id": "az-0506",
    "legacyIds": [
      "m11-mensagem"
    ],
    "situacao": "espaco_cidadao",
    "pt": "a mensagem",
    "en": "message",
    "zhHans": "信息",
    "zhHant": "訊息",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Mandei uma mensagem.",
    "exampleEn": "I sent a message.",
    "exampleZhHans": "我发了一条消息。",
    "exampleZhHant": "我發了一則訊息。"
  },
  {
    "situacao": "espaco_cidadao",
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
    "situacao": "espaco_cidadao",
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
    "situacao": "espaco_cidadao",
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
    "situacao": "espaco_cidadao",
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
    "situacao": "espaco_cidadao",
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
    "situacao": "espaco_cidadao",
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
    "situacao": "espaco_cidadao",
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
    "situacao": "espaco_cidadao",
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
    "situacao": "espaco_cidadao",
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
    "id": "az-0162",
    "legacyIds": [
      "m3-fatura"
    ],
    "situacao": "espaco_cidadao",
    "pt": "a fatura",
    "en": "invoice",
    "zhHans": "发票",
    "zhHant": "發票",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Pode dar-me uma fatura?",
    "exampleEn": "Can you give me an invoice?",
    "exampleZhHans": "可以给我一张发票吗？",
    "exampleZhHant": "可以給我一張發票嗎？"
  },
  {
    "id": "az-0017",
    "legacyIds": [
      "m1-telefone"
    ],
    "situacao": "espaco_cidadao",
    "pt": "o telefone",
    "en": "telephone",
    "zhHans": "电话",
    "zhHant": "電話",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Qual é o seu número de telefone?",
    "exampleEn": "What is your telephone number?",
    "exampleZhHans": "您的电话号码是多少？",
    "exampleZhHant": "您的電話號碼是多少？"
  },
  {
    "id": "az-0018",
    "legacyIds": [
      "m1-telemovel"
    ],
    "situacao": "espaco_cidadao",
    "pt": "o telemóvel",
    "en": "mobile phone",
    "zhHans": "手机/移动电话",
    "zhHant": "手機/行動電話",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O meu telemóvel é novo.",
    "exampleEn": "My mobile phone is new.",
    "exampleZhHans": "我的手机是新的。",
    "exampleZhHant": "我的手機是新的。"
  },
  {
    "situacao": "espaco_cidadao",
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
    "id": "az-0254",
    "legacyIds": [
      "m5-atender"
    ],
    "situacao": "espaco_cidadao",
    "pt": "atender",
    "en": "to answer",
    "zhHans": "接电话",
    "zhHant": "接電話",
    "examplePt": "Não atenda o telemóvel.",
    "exampleEn": "Do not answer the mobile phone.",
    "exampleZhHans": "不要接手机。",
    "exampleZhHant": "不要接手機。"
  },
  {
    "id": "az-0255",
    "legacyIds": [
      "m5-desligar"
    ],
    "situacao": "espaco_cidadao",
    "pt": "desligar",
    "en": "to turn off",
    "zhHans": "关闭",
    "zhHant": "關閉",
    "examplePt": "Desligue o telemóvel.",
    "exampleEn": "Turn off the mobile phone.",
    "exampleZhHans": "请关掉手机。",
    "exampleZhHant": "請關掉手機。"
  },
  {
    "id": "az-0596",
    "legacyIds": [
      "m12-informar-se"
    ],
    "situacao": "espaco_cidadao",
    "pt": "informar-se",
    "en": "to get informed",
    "zhHans": "了解情况",
    "zhHant": "了解情況",
    "examplePt": "Tenta informar-se sobre os candidatos.",
    "exampleEn": "He tries to find out about the candidates.",
    "exampleZhHans": "他试图了解候选人的情况。",
    "exampleZhHant": "他試圖了解候選人的情況。"
  },
  {
    "id": "az-0570",
    "legacyIds": [
      "m12-gratuito"
    ],
    "situacao": "espaco_cidadao",
    "pt": "gratuito(a)",
    "en": "free of charge",
    "zhHans": "免费",
    "zhHant": "免費",
    "examplePt": "O serviço é gratuito. A consulta é gratuita.",
    "exampleEn": "The service is free of charge. The consultation is free of charge.",
    "exampleZhHans": "该服务是免费的。咨询是免费的。",
    "exampleZhHant": "該服務是免費的。諮詢是免費的。"
  },
  {
    "id": "az-0428",
    "legacyIds": [
      "m8-carta-conducao"
    ],
    "situacao": "imt_carta_conducao",
    "pt": "a carta de condução",
    "en": "driving licence",
    "zhHans": "驾驶执照",
    "zhHant": "駕駛執照",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Tenho carta de condução.",
    "exampleEn": "I have a driving licence.",
    "exampleZhHans": "我有驾驶执照。",
    "exampleZhHant": "我有駕駛執照。"
  },
  {
    "id": "az-0239",
    "legacyIds": [
      "m5-passaporte"
    ],
    "situacao": "imt_carta_conducao",
    "pt": "o passaporte",
    "en": "passport",
    "zhHans": "护照",
    "zhHant": "護照",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Deve levar o passaporte.",
    "exampleEn": "You should take the passport.",
    "exampleZhHans": "您应该带上护照。",
    "exampleZhHant": "您應該帶上護照。"
  },
  {
    "id": "az-0241",
    "legacyIds": [
      "m5-pessoalmente"
    ],
    "situacao": "imt_carta_conducao",
    "pt": "pessoalmente",
    "en": "in person",
    "zhHans": "亲自",
    "zhHant": "親自",
    "examplePt": "Tem de vir cá pessoalmente.",
    "exampleEn": "You have to come here in person.",
    "exampleZhHans": "您必须亲自来这里。",
    "exampleZhHant": "您必須親自來這裡。"
  },
  {
    "id": "az-0234",
    "legacyIds": [
      "m5-impresso"
    ],
    "situacao": "imt_carta_conducao",
    "pt": "o impresso",
    "en": "form",
    "zhHans": "表格",
    "zhHant": "表格",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Preencha este impresso.",
    "exampleEn": "Fill in this form.",
    "exampleZhHans": "请填写这张表格。",
    "exampleZhHant": "請填寫這張表格。"
  },
  {
    "id": "az-0235",
    "legacyIds": [
      "m5-renovar"
    ],
    "situacao": "imt_carta_conducao",
    "pt": "renovar",
    "en": "to renew",
    "zhHans": "续签/更新",
    "zhHant": "續簽/更新",
    "examplePt": "Queria renovar a autorização de residência.",
    "exampleEn": "I would like to renew the residence permit.",
    "exampleZhHans": "我想续居留许可。",
    "exampleZhHant": "我想續居留許可。"
  },
  {
    "id": "az-0236",
    "legacyIds": [
      "m5-documentos-necessarios"
    ],
    "situacao": "imt_carta_conducao",
    "pt": "os documentos necessários",
    "en": "required documents",
    "zhHans": "所需文件",
    "zhHant": "所需文件",
    "pos": "noun",
    "gender": "m-pl",
    "examplePt": "Que documentos necessários devo trazer?",
    "exampleEn": "What required documents should I bring?",
    "exampleZhHans": "我应该带哪些必要文件？",
    "exampleZhHant": "我應該帶哪些必要文件？"
  },
  {
    "id": "az-0237",
    "legacyIds": [
      "m5-requerente"
    ],
    "situacao": "imt_carta_conducao",
    "pt": "o requerente",
    "en": "applicant",
    "zhHans": "申请人",
    "zhHant": "申請人",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O requerente assina o pedido.",
    "exampleEn": "The applicant signs the request.",
    "exampleZhHans": "申请人在申请书上签字。",
    "exampleZhHant": "申請人在申請書上簽字。"
  },
  {
    "id": "az-0238",
    "legacyIds": [
      "m5-fotografia-tipo-passe"
    ],
    "situacao": "imt_carta_conducao",
    "pt": "a fotografia tipo passe",
    "en": "passport photo",
    "zhHans": "护照照片",
    "zhHant": "護照照片",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Preciso de duas fotografias tipo passe.",
    "exampleEn": "I need two passport-style photographs.",
    "exampleZhHans": "我需要两张证件照。",
    "exampleZhHant": "我需要兩張證件照。"
  },
  {
    "id": "az-0240",
    "legacyIds": [
      "m5-registo-criminal"
    ],
    "situacao": "imt_carta_conducao",
    "pt": "o registo criminal",
    "en": "criminal record",
    "zhHans": "犯罪记录",
    "zhHant": "犯罪記錄",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Preciso de autorização para consulta do registo criminal.",
    "exampleEn": "I need authorisation to consult the criminal record.",
    "exampleZhHans": "我需要授权查询犯罪记录。",
    "exampleZhHant": "我需要授權查詢犯罪紀錄。"
  },
  {
    "id": "az-0268",
    "legacyIds": [
      "m5-cartao-de-residencia"
    ],
    "situacao": "imt_carta_conducao",
    "pt": "o cartão de residência",
    "en": "residence card",
    "zhHans": "居留卡",
    "zhHant": "居留卡",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Preciso do cartão de residência.",
    "exampleEn": "I need the residence card.",
    "exampleZhHans": "我需要居留卡。",
    "exampleZhHant": "我需要居留卡。"
  },
  {
    "situacao": "imt_carta_conducao",
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
    "situacao": "imt_carta_conducao",
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
    "situacao": "imt_carta_conducao",
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
    "situacao": "imt_carta_conducao",
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
    "situacao": "imt_carta_conducao",
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
    "situacao": "imt_carta_conducao",
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
    "situacao": "imt_carta_conducao",
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
    "situacao": "imt_carta_conducao",
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
    "situacao": "imt_carta_conducao",
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
    "situacao": "imt_carta_conducao",
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
    "situacao": "imt_carta_conducao",
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
    "situacao": "imt_carta_conducao",
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
    "situacao": "imt_carta_conducao",
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
    "situacao": "imt_carta_conducao",
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
    "situacao": "imt_carta_conducao",
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
    "situacao": "imt_carta_conducao",
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
    "situacao": "imt_carta_conducao",
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
    "id": "az-0463",
    "legacyIds": [
      "m9-cedula"
    ],
    "situacao": "conservatoria_registo_civil",
    "pt": "a cédula",
    "en": "birth certificate",
    "zhHans": "出生证明",
    "zhHant": "出生證明",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A escola pede a cédula da criança.",
    "exampleEn": "The school asks for the child's birth certificate.",
    "exampleZhHans": "学校要求提供孩子的出生证明。",
    "exampleZhHant": "學校要求提供孩子的出生證明。"
  },
  {
    "id": "az-0517",
    "legacyIds": [
      "m11-diploma"
    ],
    "situacao": "conservatoria_registo_civil",
    "pt": "o diploma",
    "en": "diploma",
    "zhHans": "文凭",
    "zhHant": "文憑",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Recebi o meu diploma de Informática.",
    "exampleEn": "I received my diploma in Computer Science.",
    "exampleZhHans": "我收到了我的信息学文凭。",
    "exampleZhHant": "我收到了我的資訊學文憑。"
  },
  {
    "id": "az-0546",
    "legacyIds": [
      "m11-residente"
    ],
    "situacao": "conservatoria_registo_civil",
    "pt": "residente",
    "en": "resident",
    "zhHans": "居民",
    "zhHant": "居民",
    "examplePt": "Olga Ivanova é residente em Lisboa.",
    "exampleEn": "Olga Ivanova is a resident of Lisbon.",
    "exampleZhHans": "Olga Ivanova 是里斯本居民。",
    "exampleZhHant": "Olga Ivanova 是里斯本居民。"
  },
  {
    "id": "az-0559",
    "legacyIds": [
      "m12-cidadania"
    ],
    "situacao": "conservatoria_registo_civil",
    "pt": "a cidadania",
    "en": "citizenship",
    "zhHans": "公民身份/公民权",
    "zhHant": "公民身分/公民權",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Cidadania é a qualidade ou direito do cidadão.",
    "exampleEn": "Citizenship is the status or right of the citizen.",
    "exampleZhHans": "公民身份是公民的资格或权利。",
    "exampleZhHant": "公民身分是公民的資格或權利。"
  },
  {
    "id": "az-0560",
    "legacyIds": [
      "m12-cidadao"
    ],
    "situacao": "conservatoria_registo_civil",
    "pt": "o cidadão",
    "en": "citizen",
    "zhHans": "公民",
    "zhHant": "公民",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Ser cidadão significa envolver-se na comunidade.",
    "exampleEn": "Being a citizen means getting involved in the community.",
    "exampleZhHans": "作为公民意味着参与社区事务。",
    "exampleZhHant": "作為公民意味著參與社區事務。"
  },
  {
    "id": "az-0576",
    "legacyIds": [
      "m12-adquirir"
    ],
    "situacao": "conservatoria_registo_civil",
    "pt": "adquirir",
    "en": "to acquire",
    "zhHans": "获得",
    "zhHant": "獲得",
    "examplePt": "Quero adquirir a nacionalidade portuguesa.",
    "exampleEn": "I want to acquire Portuguese nationality.",
    "exampleZhHans": "我想取得葡萄牙国籍。",
    "exampleZhHant": "我想取得葡萄牙國籍。"
  },
  {
    "id": "az-0577",
    "legacyIds": [
      "m12-requerimento"
    ],
    "situacao": "conservatoria_registo_civil",
    "pt": "o requerimento",
    "en": "application form",
    "zhHans": "申请表",
    "zhHant": "申請表",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Deve juntar documentos ao requerimento.",
    "exampleEn": "You must attach documents to the application form.",
    "exampleZhHans": "应把文件附在申请表上。",
    "exampleZhHant": "應把文件附在申請表上。"
  },
  {
    "id": "az-0578",
    "legacyIds": [
      "m12-certificado"
    ],
    "situacao": "conservatoria_registo_civil",
    "pt": "o certificado",
    "en": "certificate",
    "zhHans": "证书",
    "zhHant": "證書",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Tem de apresentar um Certificado de Língua Portuguesa.",
    "exampleEn": "You have to present a Portuguese Language Certificate.",
    "exampleZhHans": "必须提交一份葡萄牙语证书。",
    "exampleZhHant": "必須提交一份葡萄牙語證書。"
  },
  {
    "id": "az-0579",
    "legacyIds": [
      "m12-preencher"
    ],
    "situacao": "conservatoria_registo_civil",
    "pt": "preencher",
    "en": "to fill in",
    "zhHans": "填写",
    "zhHant": "填寫",
    "examplePt": "Basta preencher o requerimento.",
    "exampleEn": "It is enough to fill in the application form.",
    "exampleZhHans": "只需填写申请表。",
    "exampleZhHant": "只需填寫申請表。"
  },
  {
    "situacao": "conservatoria_registo_civil",
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
    "situacao": "conservatoria_registo_civil",
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
    "situacao": "conservatoria_registo_civil",
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
    "situacao": "conservatoria_registo_civil",
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
    "situacao": "conservatoria_registo_civil",
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
    "situacao": "conservatoria_registo_civil",
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
    "situacao": "conservatoria_registo_civil",
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
    "situacao": "conservatoria_registo_civil",
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
    "situacao": "conservatoria_registo_civil",
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
    "situacao": "conservatoria_registo_civil",
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
    "situacao": "conservatoria_registo_civil",
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
    "situacao": "conservatoria_registo_civil",
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
    "situacao": "conservatoria_registo_civil",
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
    "situacao": "conservatoria_registo_civil",
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
    "situacao": "conservatoria_registo_civil",
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
    "situacao": "conservatoria_registo_civil",
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
    "situacao": "conservatoria_registo_civil",
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
    "situacao": "conservatoria_registo_civil",
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
    "id": "az-0594",
    "legacyIds": [
      "m12-camara-municipal"
    ],
    "situacao": "camara_municipal",
    "pt": "a Câmara Municipal",
    "en": "city council",
    "zhHans": "市议会",
    "zhHant": "市議會",
    "pos": "noun",
    "gender": "f",
    "examplePt": "É candidato à presidência da Câmara Municipal.",
    "exampleEn": "He is a candidate for president of the City Council.",
    "exampleZhHans": "他是市政厅主席职位的候选人。",
    "exampleZhHant": "他是市政廳主席職位的候選人。"
  },
  {
    "id": "az-0581",
    "legacyIds": [
      "m12-comunidade"
    ],
    "situacao": "camara_municipal",
    "pt": "a comunidade",
    "en": "community",
    "zhHans": "社区/共同体",
    "zhHant": "社區/共同體",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Participa na vida da comunidade.",
    "exampleEn": "Participate in community life.",
    "exampleZhHans": "参与社区生活。",
    "exampleZhHant": "參與社區生活。"
  },
  {
    "id": "az-0586",
    "legacyIds": [
      "m12-residir"
    ],
    "situacao": "camara_municipal",
    "pt": "residir",
    "en": "to reside",
    "zhHans": "居住",
    "zhHant": "居住",
    "examplePt": "Pode residir no espaço europeu.",
    "exampleEn": "You can reside in the European area.",
    "exampleZhHans": "可以在欧洲空间居住。",
    "exampleZhHant": "可以在歐洲空間居住。"
  },
  {
    "id": "az-0592",
    "legacyIds": [
      "m12-sugestao"
    ],
    "situacao": "camara_municipal",
    "pt": "a sugestão",
    "en": "suggestion",
    "zhHans": "建议",
    "zhHant": "建議",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Pode apresentar sugestões.",
    "exampleEn": "You can make suggestions.",
    "exampleZhHans": "可以提出建议。",
    "exampleZhHant": "可以提出建議。"
  },
  {
    "id": "az-0596",
    "legacyIds": [
      "m12-informar-se"
    ],
    "situacao": "camara_municipal",
    "pt": "informar-se",
    "en": "to get informed",
    "zhHans": "了解情况",
    "zhHant": "了解情況",
    "examplePt": "Tenta informar-se sobre os candidatos.",
    "exampleEn": "He tries to find out about the candidates.",
    "exampleZhHans": "他试图了解候选人的情况。",
    "exampleZhHant": "他試圖了解候選人的情況。"
  },
  {
    "situacao": "camara_municipal",
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
    "situacao": "camara_municipal",
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
    "situacao": "camara_municipal",
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
    "situacao": "camara_municipal",
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
    "situacao": "camara_municipal",
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
    "situacao": "camara_municipal",
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
    "situacao": "camara_municipal",
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
    "situacao": "camara_municipal",
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
    "situacao": "camara_municipal",
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
    "situacao": "camara_municipal",
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
    "situacao": "camara_municipal",
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
    "situacao": "camara_municipal",
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
    "situacao": "camara_municipal",
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
    "situacao": "camara_municipal",
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
    "situacao": "camara_municipal",
    "pt": "o lixo",
    "en": "trash",
    "zhHans": "垃圾",
    "zhHant": "垃圾",
    "id": "az-1196",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-lixo"
    ],
    "examplePt": "Já pus o lixo fora.",
    "exampleEn": "I already took out the trash.",
    "exampleZhHans": "我已经把垃圾拿出去了。",
    "exampleZhHant": "我已經把垃圾拿出去了。"
  },
  {
    "situacao": "camara_municipal",
    "pt": "a reciclagem",
    "en": "recycling",
    "zhHans": "回收",
    "zhHant": "回收",
    "id": "az-1197",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-reciclagem"
    ],
    "examplePt": "A reciclagem é ao fundo.",
    "exampleEn": "Recycling is in the background.",
    "exampleZhHans": "回收站在最里面。",
    "exampleZhHant": "回收站在最裡面。"
  },
  {
    "situacao": "camara_municipal",
    "pt": "o contentor",
    "en": "bin / container",
    "zhHans": "垃圾箱",
    "zhHant": "垃圾箱",
    "id": "az-1198",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-contentor"
    ],
    "examplePt": "O contentor está cheio.",
    "exampleEn": "The container is full.",
    "exampleZhHans": "垃圾箱满了。",
    "exampleZhHant": "垃圾箱滿了。"
  },
  {
    "situacao": "camara_municipal",
    "pt": "a garagem",
    "en": "garage",
    "zhHans": "车库",
    "zhHant": "車庫",
    "id": "az-1203",
    "pos": "noun",
    "gender": "f",
    "legacyIds": [
      "situacao-a-garagem"
    ],
    "examplePt": "O carro está na garagem.",
    "exampleEn": "The car is in the garage.",
    "exampleZhHans": "车在车库里。",
    "exampleZhHant": "車在車庫裡。"
  },
  {
    "situacao": "camara_municipal",
    "pt": "o lugar de estacionamento",
    "en": "parking spot",
    "zhHans": "停车位",
    "zhHant": "停車位",
    "id": "az-1204",
    "pos": "noun",
    "gender": "m",
    "legacyIds": [
      "situacao-o-lugar-de-estacionamento"
    ],
    "examplePt": "O meu lugar é o dez.",
    "exampleEn": "My place is ten.",
    "exampleZhHans": "我的车位是十号。",
    "exampleZhHant": "我的車位是十號。"
  },
  {
    "situacao": "camara_municipal",
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
    "situacao": "camara_municipal",
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
    "id": "az-0533",
    "legacyIds": [
      "m11-reclamar"
    ],
    "situacao": "camara_municipal",
    "pt": "reclamar",
    "en": "to complain",
    "zhHans": "抱怨/投诉",
    "zhHant": "抱怨/投訴",
    "examplePt": "Temos de reclamar.",
    "exampleEn": "We have to complain.",
    "exampleZhHans": "我们必须投诉。",
    "exampleZhHant": "我們必須投訴。"
  },
  {
    "id": "az-0517",
    "legacyIds": [
      "m11-diploma"
    ],
    "situacao": "reconhecimento_diplomas",
    "pt": "o diploma",
    "en": "diploma",
    "zhHans": "文凭",
    "zhHant": "文憑",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Recebi o meu diploma de Informática.",
    "exampleEn": "I received my diploma in Computer Science.",
    "exampleZhHans": "我收到了我的信息学文凭。",
    "exampleZhHant": "我收到了我的資訊學文憑。"
  },
  {
    "id": "az-0518",
    "legacyIds": [
      "m11-competencia"
    ],
    "situacao": "reconhecimento_diplomas",
    "pt": "a competência",
    "en": "skill; competence",
    "zhHans": "能力/技能",
    "zhHant": "能力/技能",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Desenvolvi competências na minha formação.",
    "exampleEn": "I developed skills during my training.",
    "exampleZhHans": "我在培训中培养了技能。",
    "exampleZhHant": "我在培訓中培養了技能。"
  },
  {
    "id": "az-0536",
    "legacyIds": [
      "m11-candidatura"
    ],
    "situacao": "reconhecimento_diplomas",
    "pt": "a candidatura",
    "en": "application",
    "zhHans": "申请",
    "zhHant": "申請/求職申請",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Saiu o resultado das candidaturas.",
    "exampleEn": "The application results have been released.",
    "exampleZhHans": "申请结果出来了。",
    "exampleZhHant": "申請結果出來了。"
  },
  {
    "id": "az-0537",
    "legacyIds": [
      "m11-tradutor"
    ],
    "situacao": "reconhecimento_diplomas",
    "pt": "tradutor(a)",
    "en": "translator",
    "zhHans": "翻译者",
    "zhHant": "翻譯者",
    "examplePt": "Há uma vaga de tradutor.",
    "exampleEn": "There is a translator vacancy.",
    "exampleZhHans": "有一个译员职位空缺。",
    "exampleZhHant": "有一個譯員職位空缺。"
  },
  {
    "id": "az-0577",
    "legacyIds": [
      "m12-requerimento"
    ],
    "situacao": "reconhecimento_diplomas",
    "pt": "o requerimento",
    "en": "application form",
    "zhHans": "申请表",
    "zhHant": "申請表",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Deve juntar documentos ao requerimento.",
    "exampleEn": "You must attach documents to the application form.",
    "exampleZhHans": "应把文件附在申请表上。",
    "exampleZhHant": "應把文件附在申請表上。"
  },
  {
    "id": "az-0578",
    "legacyIds": [
      "m12-certificado"
    ],
    "situacao": "reconhecimento_diplomas",
    "pt": "o certificado",
    "en": "certificate",
    "zhHans": "证书",
    "zhHant": "證書",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Tem de apresentar um Certificado de Língua Portuguesa.",
    "exampleEn": "You have to present a Portuguese Language Certificate.",
    "exampleZhHans": "必须提交一份葡萄牙语证书。",
    "exampleZhHant": "必須提交一份葡萄牙語證書。"
  },
  {
    "id": "az-0579",
    "legacyIds": [
      "m12-preencher"
    ],
    "situacao": "reconhecimento_diplomas",
    "pt": "preencher",
    "en": "to fill in",
    "zhHans": "填写",
    "zhHant": "填寫",
    "examplePt": "Basta preencher o requerimento.",
    "exampleEn": "It is enough to fill in the application form.",
    "exampleZhHans": "只需填写申请表。",
    "exampleZhHant": "只需填寫申請表。"
  },
  {
    "situacao": "reconhecimento_diplomas",
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
    "situacao": "reconhecimento_diplomas",
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
    "situacao": "reconhecimento_diplomas",
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
    "situacao": "reconhecimento_diplomas",
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
    "situacao": "reconhecimento_diplomas",
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
    "situacao": "reconhecimento_diplomas",
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
    "situacao": "reconhecimento_diplomas",
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
    "situacao": "reconhecimento_diplomas",
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
    "situacao": "reconhecimento_diplomas",
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
    "situacao": "reconhecimento_diplomas",
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
    "situacao": "reconhecimento_diplomas",
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
    "situacao": "reconhecimento_diplomas",
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
    "situacao": "reconhecimento_diplomas",
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
    "situacao": "reconhecimento_diplomas",
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
    "situacao": "reconhecimento_diplomas",
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
    "situacao": "reconhecimento_diplomas",
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
    "situacao": "reconhecimento_diplomas",
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
    "situacao": "reconhecimento_diplomas",
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
    "situacao": "reconhecimento_diplomas",
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
    "id": "az-0239",
    "legacyIds": [
      "m5-passaporte"
    ],
    "situacao": "consulado_documentos",
    "pt": "o passaporte",
    "en": "passport",
    "zhHans": "护照",
    "zhHant": "護照",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Deve levar o passaporte.",
    "exampleEn": "You should take the passport.",
    "exampleZhHans": "您应该带上护照。",
    "exampleZhHant": "您應該帶上護照。"
  },
  {
    "id": "az-0240",
    "legacyIds": [
      "m5-registo-criminal"
    ],
    "situacao": "consulado_documentos",
    "pt": "o registo criminal",
    "en": "criminal record",
    "zhHans": "犯罪记录",
    "zhHant": "犯罪記錄",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Preciso de autorização para consulta do registo criminal.",
    "exampleEn": "I need authorisation to consult the criminal record.",
    "exampleZhHans": "我需要授权查询犯罪记录。",
    "exampleZhHant": "我需要授權查詢犯罪紀錄。"
  },
  {
    "id": "az-0509",
    "legacyIds": [
      "m11-email"
    ],
    "situacao": "consulado_documentos",
    "pt": "o e-mail",
    "en": "email",
    "zhHans": "电子邮件",
    "zhHant": "電子郵件",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Enviei o currículo por e-mail.",
    "exampleEn": "I sent the resume by email.",
    "exampleZhHans": "我通过电子邮件发送了简历。",
    "exampleZhHant": "我透過電子郵件寄出了履歷。"
  },
  {
    "id": "az-0510",
    "legacyIds": [
      "m11-exmo-senhor"
    ],
    "situacao": "consulado_documentos",
    "pt": "Ex.mo Senhor",
    "en": "Dear Sir",
    "zhHans": "尊敬的先生",
    "zhHant": "尊敬的先生",
    "examplePt": "Ex.mo Senhor, solicito uma informação.",
    "exampleEn": "Dear Sir, I am requesting information.",
    "exampleZhHans": "尊敬的先生，我想咨询一项信息。",
    "exampleZhHant": "尊敬的先生，我想諮詢一項資訊。"
  },
  {
    "id": "az-0520",
    "legacyIds": [
      "m11-anexo"
    ],
    "situacao": "consulado_documentos",
    "pt": "o anexo",
    "en": "attachment; enclosure",
    "zhHans": "附件/附录",
    "zhHant": "附件/附錄",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Anexo: Currículo.",
    "exampleEn": "Attachment: Resume.",
    "exampleZhHans": "附件：简历。",
    "exampleZhHant": "附件：履歷。"
  },
  {
    "id": "az-0521",
    "legacyIds": [
      "m11-assunto"
    ],
    "situacao": "consulado_documentos",
    "pt": "o assunto",
    "en": "subject",
    "zhHans": "主题",
    "zhHant": "主題",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Assunto: Reclamação por roupa estragada.",
    "exampleEn": "Subject: Complaint about damaged clothing.",
    "exampleZhHans": "主题：关于衣物损坏的投诉。",
    "exampleZhHant": "主旨：關於衣物損壞的投訴。"
  },
  {
    "id": "az-0542",
    "legacyIds": [
      "m11-destinatario"
    ],
    "situacao": "consulado_documentos",
    "pt": "o destinatário",
    "en": "recipient",
    "zhHans": "接受者",
    "zhHant": "接受者",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Não conhecemos o destinatário.",
    "exampleEn": "We do not know the recipient.",
    "exampleZhHans": "我们不认识收件人。",
    "exampleZhHant": "我們不認識收件人。"
  },
  {
    "id": "az-0577",
    "legacyIds": [
      "m12-requerimento"
    ],
    "situacao": "consulado_documentos",
    "pt": "o requerimento",
    "en": "application form",
    "zhHans": "申请表",
    "zhHant": "申請表",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Deve juntar documentos ao requerimento.",
    "exampleEn": "You must attach documents to the application form.",
    "exampleZhHans": "应把文件附在申请表上。",
    "exampleZhHant": "應把文件附在申請表上。"
  },
  {
    "id": "az-0578",
    "legacyIds": [
      "m12-certificado"
    ],
    "situacao": "consulado_documentos",
    "pt": "o certificado",
    "en": "certificate",
    "zhHans": "证书",
    "zhHant": "證書",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Tem de apresentar um Certificado de Língua Portuguesa.",
    "exampleEn": "You have to present a Portuguese Language Certificate.",
    "exampleZhHans": "必须提交一份葡萄牙语证书。",
    "exampleZhHant": "必須提交一份葡萄牙語證書。"
  },
  {
    "id": "az-0579",
    "legacyIds": [
      "m12-preencher"
    ],
    "situacao": "consulado_documentos",
    "pt": "preencher",
    "en": "to fill in",
    "zhHans": "填写",
    "zhHant": "填寫",
    "examplePt": "Basta preencher o requerimento.",
    "exampleEn": "It is enough to fill in the application form.",
    "exampleZhHans": "只需填写申请表。",
    "exampleZhHant": "只需填寫申請表。"
  },
  {
    "situacao": "consulado_documentos",
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
    "situacao": "consulado_documentos",
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
    "situacao": "consulado_documentos",
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
    "situacao": "consulado_documentos",
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
    "situacao": "consulado_documentos",
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
    "situacao": "consulado_documentos",
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
    "situacao": "consulado_documentos",
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
    "situacao": "consulado_documentos",
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
    "situacao": "consulado_documentos",
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
    "situacao": "consulado_documentos",
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
    "situacao": "consulado_documentos",
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
    "situacao": "consulado_documentos",
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
    "situacao": "consulado_documentos",
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
    "situacao": "consulado_documentos",
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
    "situacao": "consulado_documentos",
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
    "situacao": "consulado_documentos",
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
    "situacao": "consulado_documentos",
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
    "id": "az-1321",
    "legacyIds": [
      "situacao-o-imt"
    ],
    "pt": "o IMT",
    "en": "Institute for Mobility and Transport (IMT)",
    "zhHans": "交通与运输局（IMT）",
    "zhHant": "交通及運輸局（IMT）",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O pedido foi enviado ao IMT.",
    "exampleEn": "The application was sent to the IMT.",
    "exampleZhHans": "申请已提交给IMT。",
    "exampleZhHant": "申請已提交給IMT。",
    "situacao": "imt_carta_conducao"
  },
  {
    "id": "az-1322",
    "legacyIds": [
      "situacao-trocar-a-carta-de-conducao"
    ],
    "pt": "trocar a carta de condução",
    "en": "to exchange a driving licence",
    "zhHans": "换领驾驶证",
    "zhHant": "換領駕駛執照",
    "examplePt": "Quero trocar a minha carta estrangeira.",
    "exampleEn": "I want to exchange my foreign licence.",
    "exampleZhHans": "我想换领外国驾驶证。",
    "exampleZhHant": "我想換領外國駕駛執照。",
    "situacao": "imt_carta_conducao"
  },
  {
    "id": "az-1323",
    "legacyIds": [
      "situacao-o-atestado-medico-eletronico"
    ],
    "pt": "o atestado médico eletrónico",
    "en": "electronic medical certificate",
    "zhHans": "电子健康证明",
    "zhHant": "電子健康證明",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O médico enviou o atestado eletrónico ao IMT.",
    "exampleEn": "The doctor sent the electronic certificate to the IMT.",
    "exampleZhHans": "医生已将电子健康证明发送给IMT。",
    "exampleZhHant": "醫生已將電子健康證明傳送給IMT。",
    "situacao": "imt_carta_conducao"
  },
  {
    "id": "az-1324",
    "legacyIds": [
      "situacao-a-conservatoria"
    ],
    "pt": "a conservatória",
    "en": "registry office",
    "zhHans": "登记处",
    "zhHant": "登記處",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A certidão pode ser pedida na conservatória.",
    "exampleEn": "The certificate can be requested at the registry office.",
    "exampleZhHans": "可以在登记处申请证明。",
    "exampleZhHant": "可以在登記處申請證明。",
    "situacao": "conservatoria_registo_civil"
  },
  {
    "id": "az-1325",
    "legacyIds": [
      "situacao-o-registo-civil"
    ],
    "pt": "o registo civil",
    "en": "civil registry",
    "zhHans": "民事登记",
    "zhHant": "民事登記",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O casamento consta do registo civil.",
    "exampleEn": "The marriage is recorded in the civil registry.",
    "exampleZhHans": "婚姻已登记在民事登记册中。",
    "exampleZhHant": "婚姻已登記在民事登記冊中。",
    "situacao": "conservatoria_registo_civil"
  },
  {
    "id": "az-1326",
    "legacyIds": [
      "situacao-a-certidao-de-casamento"
    ],
    "pt": "a certidão de casamento",
    "en": "marriage certificate",
    "zhHans": "结婚证明",
    "zhHant": "結婚證明書",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Preciso de uma certidão de casamento recente.",
    "exampleEn": "I need a recent marriage certificate.",
    "exampleZhHans": "我需要一份近期的结婚证明。",
    "exampleZhHant": "我需要一份近期的結婚證明書。",
    "situacao": "conservatoria_registo_civil"
  },
  {
    "id": "az-1327",
    "legacyIds": [
      "situacao-a-transcricao-do-casamento"
    ],
    "pt": "a transcrição do casamento",
    "en": "registration of a foreign marriage",
    "zhHans": "境外婚姻转录登记",
    "zhHant": "海外婚姻轉錄登記",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Pedi a transcrição do casamento celebrado no estrangeiro.",
    "exampleEn": "I requested registration of the marriage celebrated abroad.",
    "exampleZhHans": "我申请了境外婚姻转录登记。",
    "exampleZhHant": "我申請了海外婚姻轉錄登記。",
    "situacao": "conservatoria_registo_civil"
  },
  {
    "id": "az-1328",
    "legacyIds": [
      "situacao-o-municipio"
    ],
    "pt": "o município",
    "en": "municipality",
    "zhHans": "市镇",
    "zhHant": "市鎮",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O serviço é gerido pelo município.",
    "exampleEn": "The service is managed by the municipality.",
    "exampleZhHans": "该服务由市镇管理。",
    "exampleZhHant": "該服務由市鎮管理。",
    "situacao": "camara_municipal"
  },
  {
    "id": "az-1329",
    "legacyIds": [
      "situacao-o-distico-de-residente"
    ],
    "pt": "o dístico de residente",
    "en": "resident parking permit",
    "zhHans": "居民停车证",
    "zhHant": "居民泊車證",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Pedi o dístico de residente para esta zona.",
    "exampleEn": "I applied for a resident parking permit for this area.",
    "exampleZhHans": "我申请了这个区域的居民停车证。",
    "exampleZhHant": "我申請了這個區域的居民泊車證。",
    "situacao": "camara_municipal"
  },
  {
    "id": "az-1330",
    "legacyIds": [
      "situacao-os-monos"
    ],
    "pt": "os monos",
    "en": "bulky household waste",
    "zhHans": "大件垃圾",
    "zhHant": "大型家居廢物",
    "pos": "noun",
    "gender": "m-pl",
    "examplePt": "A Câmara recolhe os monos mediante marcação.",
    "exampleEn": "The council collects bulky waste by appointment.",
    "exampleZhHans": "市政府预约上门收取大件垃圾。",
    "exampleZhHant": "市政府預約上門收取大型家居廢物。",
    "situacao": "camara_municipal"
  },
  {
    "id": "az-1331",
    "legacyIds": [
      "situacao-o-reconhecimento-automatico"
    ],
    "pt": "o reconhecimento automático",
    "en": "automatic recognition",
    "zhHans": "自动认可",
    "zhHant": "自動認可",
    "pos": "noun",
    "gender": "m",
    "examplePt": "O meu diploma permite reconhecimento automático.",
    "exampleEn": "My diploma is eligible for automatic recognition.",
    "exampleZhHans": "我的文凭符合自动认可条件。",
    "exampleZhHant": "我的文憑符合自動認可條件。",
    "situacao": "reconhecimento_diplomas"
  },
  {
    "id": "az-1332",
    "legacyIds": [
      "situacao-o-reconhecimento-de-nivel"
    ],
    "pt": "o reconhecimento de nível",
    "en": "level recognition",
    "zhHans": "等级认可",
    "zhHant": "級別認可",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Pedi o reconhecimento de nível de mestre.",
    "exampleEn": "I requested recognition at master's level.",
    "exampleZhHans": "我申请了硕士等级认可。",
    "exampleZhHant": "我申請了碩士級別認可。",
    "situacao": "reconhecimento_diplomas"
  },
  {
    "id": "az-1333",
    "legacyIds": [
      "situacao-o-reconhecimento-especifico"
    ],
    "pt": "o reconhecimento específico",
    "en": "specific recognition",
    "zhHans": "专业认可",
    "zhHant": "特定認可",
    "pos": "noun",
    "gender": "m",
    "examplePt": "A profissão exige reconhecimento específico.",
    "exampleEn": "The profession requires specific recognition.",
    "exampleZhHans": "该职业要求专业认可。",
    "exampleZhHant": "該職業要求特定認可。",
    "situacao": "reconhecimento_diplomas"
  },
  {
    "id": "az-1334",
    "legacyIds": [
      "situacao-o-certificado-de-disciplinas"
    ],
    "pt": "o certificado de disciplinas",
    "en": "academic transcript",
    "zhHans": "成绩单",
    "zhHant": "成績單",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Anexei o certificado de disciplinas ao pedido.",
    "exampleEn": "I attached the academic transcript to the application.",
    "exampleZhHans": "我在申请中附上了成绩单。",
    "exampleZhHant": "我在申請中附上了成績單。",
    "situacao": "reconhecimento_diplomas"
  },
  {
    "id": "az-1335",
    "legacyIds": [
      "situacao-o-consulado"
    ],
    "pt": "o consulado",
    "en": "consulate",
    "zhHans": "领事馆",
    "zhHant": "領事館",
    "pos": "noun",
    "gender": "m",
    "examplePt": "Marquei atendimento no consulado.",
    "exampleEn": "I booked an appointment at the consulate.",
    "exampleZhHans": "我预约了领事馆服务。",
    "exampleZhHant": "我預約了領事館服務。",
    "situacao": "consulado_documentos"
  },
  {
    "id": "az-1336",
    "legacyIds": [
      "situacao-a-embaixada"
    ],
    "pt": "a embaixada",
    "en": "embassy",
    "zhHans": "大使馆",
    "zhHant": "大使館",
    "pos": "noun",
    "gender": "f",
    "examplePt": "A embaixada confirmou a informação.",
    "exampleEn": "The embassy confirmed the information.",
    "exampleZhHans": "大使馆确认了信息。",
    "exampleZhHant": "大使館確認了資料。",
    "situacao": "consulado_documentos"
  },
  {
    "id": "az-1337",
    "legacyIds": [
      "situacao-a-procuracao"
    ],
    "pt": "a procuração",
    "en": "power of attorney",
    "zhHans": "授权委托书",
    "zhHant": "授權書",
    "pos": "noun",
    "gender": "f",
    "examplePt": "Assinei uma procuração para tratar do processo.",
    "exampleEn": "I signed a power of attorney for someone to handle the case.",
    "exampleZhHans": "我签署了授权委托书代办手续。",
    "exampleZhHant": "我簽署了授權書代辦手續。",
    "situacao": "consulado_documentos"
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
  },
  {
    "id": "dialogo-veterinario-bom-dia-queria-marcar-uma-consulta",
    "situacao": "veterinario",
    "order": 306,
    "pt": "Bom dia, queria marcar uma consulta.",
    "en": "Good morning, I'd like to book an appointment.",
    "zhHans": "早上好，我想预约看诊。",
    "zhHant": "早安，我想預約看診。"
  },
  {
    "id": "dialogo-veterinario-claro-e-para-que-animal",
    "situacao": "veterinario",
    "order": 307,
    "pt": "Claro. É para que animal?",
    "en": "Of course. For which animal?",
    "zhHans": "好的。是哪只动物？",
    "zhHant": "好的。是哪隻動物？"
  },
  {
    "id": "dialogo-veterinario-para-o-meu-gato-nao-come-ha-dois-dias",
    "situacao": "veterinario",
    "order": 308,
    "pt": "Para o meu gato. Não come há dois dias.",
    "en": "For my cat. He hasn't eaten for two days.",
    "zhHans": "我的猫。它两天没吃了。",
    "zhHant": "我的貓。牠兩天沒吃了。"
  },
  {
    "id": "dialogo-veterinario-esta-a-vomitar-ou-tem-diarreia",
    "situacao": "veterinario",
    "order": 309,
    "pt": "Está a vomitar ou tem diarreia?",
    "en": "Is he vomiting, or does he have diarrhea?",
    "zhHans": "有呕吐或腹泻吗？",
    "zhHant": "有嘔吐或腹瀉嗎？"
  },
  {
    "id": "dialogo-veterinario-vomitou-ontem-duas-vezes",
    "situacao": "veterinario",
    "order": 310,
    "pt": "Vomitou ontem duas vezes.",
    "en": "He vomited twice yesterday.",
    "zhHans": "昨天吐了两次。",
    "zhHant": "昨天吐了兩次。"
  },
  {
    "id": "dialogo-veterinario-pode-vir-hoje-as-quatro",
    "situacao": "veterinario",
    "order": 311,
    "pt": "Pode vir hoje às quatro?",
    "en": "Can you come today at four?",
    "zhHans": "今天四点能来吗？",
    "zhHant": "今天四點能來嗎？"
  },
  {
    "id": "dialogo-veterinario-sim-pode-ser-obrigado",
    "situacao": "veterinario",
    "order": 312,
    "pt": "Sim, pode ser. Obrigado.",
    "en": "Yes, that works. Thank you.",
    "zhHans": "可以，谢谢。",
    "zhHant": "可以，謝謝。"
  },
  {
    "id": "dialogo-veterinario-o-gato-tem-microchip-e-vacinas-em-dia",
    "situacao": "veterinario",
    "order": 313,
    "pt": "O gato tem microchip e vacinas em dia?",
    "en": "Does the cat have a microchip and up-to-date vaccines?",
    "zhHans": "猫有芯片吗？疫苗打了吗？",
    "zhHant": "貓有晶片嗎？疫苗打了嗎？"
  },
  {
    "id": "dialogo-veterinario-tem-chip-mas-a-vacina-esta-atrasada",
    "situacao": "veterinario",
    "order": 314,
    "pt": "Tem chip, mas a vacina está atrasada.",
    "en": "He has a chip, but the vaccine is overdue.",
    "zhHans": "有芯片，但疫苗过期了。",
    "zhHant": "有晶片，但疫苗過期了。"
  },
  {
    "id": "dialogo-veterinario-entao-aproveitamos-e-vacinamos",
    "situacao": "veterinario",
    "order": 315,
    "pt": "Então aproveitamos e vacinamos.",
    "en": "Then we'll take the chance to vaccinate him.",
    "zhHans": "那就顺便打疫苗。",
    "zhHant": "那就順便打疫苗。"
  },
  {
    "id": "dialogo-veterinario-quanto-custa-a-consulta",
    "situacao": "veterinario",
    "order": 316,
    "pt": "Quanto custa a consulta?",
    "en": "How much is the appointment?",
    "zhHans": "看诊多少钱？",
    "zhHant": "看診多少錢？"
  },
  {
    "id": "dialogo-veterinario-sao-trinta-euros-sem-os-medicamentos",
    "situacao": "veterinario",
    "order": 317,
    "pt": "São trinta euros, sem os medicamentos.",
    "en": "It's thirty euros, not counting medication.",
    "zhHans": "三十欧元，不含药。",
    "zhHant": "三十歐元，不含藥。"
  },
  {
    "id": "dialogo-veterinario-ele-precisa-de-ficar-internado",
    "situacao": "veterinario",
    "order": 318,
    "pt": "Ele precisa de ficar internado?",
    "en": "Does he need to stay overnight?",
    "zhHans": "它需要住院吗？",
    "zhHant": "牠需要住院嗎？"
  },
  {
    "id": "dialogo-veterinario-primeiro-fazemos-analises",
    "situacao": "veterinario",
    "order": 319,
    "pt": "Primeiro fazemos análises.",
    "en": "First we'll run some tests.",
    "zhHans": "先做检查。",
    "zhHant": "先做檢查。"
  },
  {
    "id": "dialogo-veterinario-ele-tem-medo-posso-ficar-ao-lado",
    "situacao": "veterinario",
    "order": 320,
    "pt": "Ele tem medo. Posso ficar ao lado?",
    "en": "He's scared. Can I stay by his side?",
    "zhHans": "它会怕，我能陪着吗？",
    "zhHant": "牠會怕，我能陪著嗎？"
  },
  {
    "id": "dialogo-veterinario-claro-que-pode",
    "situacao": "veterinario",
    "order": 321,
    "pt": "Claro que pode.",
    "en": "Of course you can.",
    "zhHans": "当然可以。",
    "zhHant": "當然可以。"
  },
  {
    "id": "dialogo-ginasio-boa-tarde-queria-informacoes-sobre-a-inscricao",
    "situacao": "ginasio",
    "order": 322,
    "pt": "Boa tarde, queria informações sobre a inscrição.",
    "en": "Good afternoon, I'd like some information about signing up.",
    "zhHans": "下午好，我想了解报名信息。",
    "zhHant": "午安，我想了解報名資訊。"
  },
  {
    "id": "dialogo-ginasio-com-certeza-ja-conhece-o-ginasio",
    "situacao": "ginasio",
    "order": 323,
    "pt": "Com certeza. Já conhece o ginásio?",
    "en": "Of course. Do you know the gym already?",
    "zhHans": "好的。您来过这家健身房吗？",
    "zhHant": "好的。您來過這家健身房嗎？"
  },
  {
    "id": "dialogo-ginasio-nao-e-a-primeira-vez",
    "situacao": "ginasio",
    "order": 324,
    "pt": "Não, é a primeira vez.",
    "en": "No, it's my first time.",
    "zhHans": "没有，第一次来。",
    "zhHant": "沒有，第一次來。"
  },
  {
    "id": "dialogo-ginasio-quer-fazer-uma-aula-experimental-gratis",
    "situacao": "ginasio",
    "order": 325,
    "pt": "Quer fazer uma aula experimental grátis?",
    "en": "Would you like a free trial class?",
    "zhHans": "想上免费体验课吗？",
    "zhHant": "想上免費體驗課嗎？"
  },
  {
    "id": "dialogo-ginasio-sim-otimo-quanto-e-a-mensalidade",
    "situacao": "ginasio",
    "order": 326,
    "pt": "Sim, ótimo. Quanto é a mensalidade?",
    "en": "Yes, great. How much is the monthly fee?",
    "zhHans": "好啊。月费多少？",
    "zhHant": "好啊。月費多少？"
  },
  {
    "id": "dialogo-ginasio-trinta-euros-com-fidelizacao-de-um-ano",
    "situacao": "ginasio",
    "order": 327,
    "pt": "Trinta euros, com fidelização de um ano.",
    "en": "Thirty euros, with a one-year lock-in.",
    "zhHans": "三十欧元，绑约一年。",
    "zhHant": "三十歐元，綁約一年。"
  },
  {
    "id": "dialogo-ginasio-e-sem-fidelizacao",
    "situacao": "ginasio",
    "order": 328,
    "pt": "E sem fidelização?",
    "en": "And without the lock-in?",
    "zhHans": "不绑约呢？",
    "zhHant": "不綁約呢？"
  },
  {
    "id": "dialogo-ginasio-fica-em-quarenta-euros-por-mes",
    "situacao": "ginasio",
    "order": 329,
    "pt": "Fica em quarenta euros por mês.",
    "en": "It comes to forty euros a month.",
    "zhHans": "那就每月四十欧元。",
    "zhHant": "那就每月四十歐元。"
  },
  {
    "id": "dialogo-ginasio-a-taxa-de-inscricao-esta-incluida",
    "situacao": "ginasio",
    "order": 330,
    "pt": "A taxa de inscrição está incluída?",
    "en": "Is the joining fee included?",
    "zhHans": "含入会费吗？",
    "zhHant": "含入會費嗎？"
  },
  {
    "id": "dialogo-ginasio-sao-vinte-euros-pagos-so-uma-vez",
    "situacao": "ginasio",
    "order": 331,
    "pt": "São vinte euros, pagos só uma vez.",
    "en": "It's twenty euros, paid one time only.",
    "zhHans": "二十欧元，只收一次。",
    "zhHant": "二十歐元，只收一次。"
  },
  {
    "id": "dialogo-ginasio-posso-cancelar-quando-quiser",
    "situacao": "ginasio",
    "order": 332,
    "pt": "Posso cancelar quando quiser?",
    "en": "Can I cancel whenever I want?",
    "zhHans": "可以随时取消吗？",
    "zhHant": "可以隨時取消嗎？"
  },
  {
    "id": "dialogo-ginasio-sem-fidelizacao-sim-com-um-mes-de-aviso",
    "situacao": "ginasio",
    "order": 333,
    "pt": "Sem fidelização, sim, com um mês de aviso.",
    "en": "Without the lock-in, yes, with one month's notice.",
    "zhHans": "不绑约可以，提前一个月通知。",
    "zhHant": "不綁約可以，提前一個月通知。"
  },
  {
    "id": "dialogo-ginasio-qual-e-o-horario",
    "situacao": "ginasio",
    "order": 334,
    "pt": "Qual é o horário?",
    "en": "What are the opening hours?",
    "zhHans": "营业时间是？",
    "zhHant": "營業時間是？"
  },
  {
    "id": "dialogo-ginasio-das-sete-as-vinte-e-duas-todos-os-dias",
    "situacao": "ginasio",
    "order": 335,
    "pt": "Das sete às vinte e duas, todos os dias.",
    "en": "From seven to ten p.m., every day.",
    "zhHans": "每天七点到二十二点。",
    "zhHant": "每天七點到二十二點。"
  },
  {
    "id": "dialogo-ginasio-preciso-de-trazer-toalha",
    "situacao": "ginasio",
    "order": 336,
    "pt": "Preciso de trazer toalha?",
    "en": "Do I need to bring a towel?",
    "zhHans": "要自备毛巾吗？",
    "zhHant": "要自備毛巾嗎？"
  },
  {
    "id": "dialogo-ginasio-sim-a-toalha-e-obrigatoria",
    "situacao": "ginasio",
    "order": 337,
    "pt": "Sim, a toalha é obrigatória.",
    "en": "Yes, a towel is mandatory.",
    "zhHans": "要，毛巾是必备的。",
    "zhHant": "要，毛巾是必備的。"
  },
  {
    "id": "dialogo-convivio-ola-entao-tudo-bem",
    "situacao": "convivio",
    "order": 338,
    "pt": "Olá! Então, tudo bem?",
    "en": "Hi! So, how's it going?",
    "zhHans": "嗨！最近好吗？",
    "zhHant": "嗨！最近好嗎？"
  },
  {
    "id": "dialogo-convivio-tudo-e-contigo",
    "situacao": "convivio",
    "order": 339,
    "pt": "Tudo, e contigo?",
    "en": "Good, and you?",
    "zhHans": "挺好的，你呢？",
    "zhHant": "挺好的，你呢？"
  },
  {
    "id": "dialogo-convivio-tambem-ha-quanto-tempo",
    "situacao": "convivio",
    "order": 340,
    "pt": "Também. Há quanto tempo!",
    "en": "Me too. Long time no see!",
    "zhHans": "我也是。好久不见！",
    "zhHant": "我也是。好久不見！"
  },
  {
    "id": "dialogo-convivio-pois-e-temos-de-combinar-algo",
    "situacao": "convivio",
    "order": 341,
    "pt": "Pois é! Temos de combinar algo.",
    "en": "Right! We should make plans.",
    "zhHans": "对啊！我们该约一下。",
    "zhHant": "對啊！我們該約一下。"
  },
  {
    "id": "dialogo-convivio-queres-ir-tomar-um-cafe-amanha",
    "situacao": "convivio",
    "order": 342,
    "pt": "Queres ir tomar um café amanhã?",
    "en": "Want to grab a coffee tomorrow?",
    "zhHans": "明天去喝咖啡吗？",
    "zhHant": "明天去喝咖啡嗎？"
  },
  {
    "id": "dialogo-convivio-amanha-nao-posso-estou-ocupado",
    "situacao": "convivio",
    "order": 343,
    "pt": "Amanhã não posso, estou ocupado.",
    "en": "I can't tomorrow, I'm busy.",
    "zhHans": "明天不行，我很忙。",
    "zhHant": "明天不行，我很忙。"
  },
  {
    "id": "dialogo-convivio-e-no-sabado-a-tarde",
    "situacao": "convivio",
    "order": 344,
    "pt": "E no sábado à tarde?",
    "en": "What about Saturday afternoon?",
    "zhHans": "那周六下午呢？",
    "zhHant": "那週六下午呢？"
  },
  {
    "id": "dialogo-convivio-no-sabado-estou-livre-onde",
    "situacao": "convivio",
    "order": 345,
    "pt": "No sábado estou livre. Onde?",
    "en": "I'm free on Saturday. Where?",
    "zhHans": "周六有空。在哪？",
    "zhHant": "週六有空。在哪？"
  },
  {
    "id": "dialogo-convivio-naquela-esplanada-perto-do-rio",
    "situacao": "convivio",
    "order": 346,
    "pt": "Naquela esplanada perto do rio?",
    "en": "At that terrace café near the river?",
    "zhHans": "河边那家露天咖啡座？",
    "zhHant": "河邊那家露天咖啡座？"
  },
  {
    "id": "dialogo-convivio-boa-ideia-as-quatro",
    "situacao": "convivio",
    "order": 347,
    "pt": "Boa ideia. Às quatro?",
    "en": "Good idea. At four?",
    "zhHans": "好主意。四点？",
    "zhHant": "好主意。四點？"
  },
  {
    "id": "dialogo-convivio-perfeito-posso-levar-uma-colega",
    "situacao": "convivio",
    "order": 348,
    "pt": "Perfeito. Posso levar uma colega?",
    "en": "Perfect. Can I bring a colleague?",
    "zhHans": "好。我能带同事吗？",
    "zhHant": "好。我能帶同事嗎？"
  },
  {
    "id": "dialogo-convivio-claro-quantos-mais-melhor",
    "situacao": "convivio",
    "order": 349,
    "pt": "Claro! Quantos mais, melhor.",
    "en": "Sure! The more the merrier.",
    "zhHans": "当然！人越多越好。",
    "zhHant": "當然！人越多越好。"
  },
  {
    "id": "dialogo-convivio-se-chegares-atrasado-avisa",
    "situacao": "convivio",
    "order": 350,
    "pt": "Se chegares atrasado, avisa.",
    "en": "If you're running late, let me know.",
    "zhHans": "要迟到就说一声。",
    "zhHant": "要遲到就說一聲。"
  },
  {
    "id": "dialogo-convivio-prometo-e-os-cafes-pago-eu",
    "situacao": "convivio",
    "order": 351,
    "pt": "Prometo. E os cafés pago eu.",
    "en": "Promise. And the coffees are on me.",
    "zhHans": "好。咖啡我请。",
    "zhHant": "好。咖啡我請。"
  },
  {
    "id": "dialogo-convivio-entao-a-proxima-e-minha",
    "situacao": "convivio",
    "order": 352,
    "pt": "Então a próxima é minha.",
    "en": "Then the next one's on me.",
    "zhHans": "那下次我请。",
    "zhHant": "那下次我請。"
  },
  {
    "id": "dialogo-convivio-combinado-ate-sabado",
    "situacao": "convivio",
    "order": 353,
    "pt": "Combinado. Até sábado!",
    "en": "Deal. See you Saturday!",
    "zhHans": "说定了。周六见！",
    "zhHant": "說定了。週六見！"
  },
  {
    "id": "dialogo-vizinhos-ola-bom-dia-sou-o-seu-vizinho-novo",
    "situacao": "vizinhos",
    "order": 354,
    "pt": "Olá, bom dia. Sou o seu vizinho novo.",
    "en": "Hello, good morning. I'm your new neighbor.",
    "zhHans": "您好，早上好。我是新邻居。",
    "zhHant": "您好，早安。我是新鄰居。"
  },
  {
    "id": "dialogo-vizinhos-ah-bem-vindo-ao-predio",
    "situacao": "vizinhos",
    "order": 355,
    "pt": "Ah, bem-vindo ao prédio!",
    "en": "Ah, welcome to the building!",
    "zhHans": "啊，欢迎搬来！",
    "zhHant": "啊，歡迎搬來！"
  },
  {
    "id": "dialogo-vizinhos-obrigado-mudei-me-na-semana-passada",
    "situacao": "vizinhos",
    "order": 356,
    "pt": "Obrigado. Mudei-me na semana passada.",
    "en": "Thanks. I moved in last week.",
    "zhHans": "谢谢。我上周搬来的。",
    "zhHant": "謝謝。我上週搬來的。"
  },
  {
    "id": "dialogo-vizinhos-precisa-de-alguma-coisa",
    "situacao": "vizinhos",
    "order": 357,
    "pt": "Precisa de alguma coisa?",
    "en": "Do you need anything?",
    "zhHans": "需要什么帮忙吗？",
    "zhHant": "需要什麼幫忙嗎？"
  },
  {
    "id": "dialogo-vizinhos-sim-onde-fica-o-contentor-da-reciclagem",
    "situacao": "vizinhos",
    "order": 358,
    "pt": "Sim, onde fica o contentor da reciclagem?",
    "en": "Yes, where's the recycling container?",
    "zhHans": "回收箱在哪里？",
    "zhHant": "回收箱在哪裡？"
  },
  {
    "id": "dialogo-vizinhos-ao-fundo-da-rua-a-esquerda",
    "situacao": "vizinhos",
    "order": 359,
    "pt": "Ao fundo da rua, à esquerda.",
    "en": "At the end of the street, on the left.",
    "zhHans": "街尾左边。",
    "zhHant": "街尾左邊。"
  },
  {
    "id": "dialogo-vizinhos-e-o-lixo-quando-e-recolhido",
    "situacao": "vizinhos",
    "order": 360,
    "pt": "E o lixo, quando é recolhido?",
    "en": "And the trash, when is it collected?",
    "zhHans": "垃圾什么时候收？",
    "zhHant": "垃圾什麼時候收？"
  },
  {
    "id": "dialogo-vizinhos-todos-os-dias-a-noite",
    "situacao": "vizinhos",
    "order": 361,
    "pt": "Todos os dias, à noite.",
    "en": "Every day, at night.",
    "zhHans": "每天晚上。",
    "zhHant": "每天晚上。"
  },
  {
    "id": "dialogo-vizinhos-o-elevador-esta-avariado",
    "situacao": "vizinhos",
    "order": 362,
    "pt": "O elevador está avariado?",
    "en": "Is the elevator out of order?",
    "zhHans": "电梯坏了吗？",
    "zhHant": "電梯壞了嗎？"
  },
  {
    "id": "dialogo-vizinhos-esta-ja-chamamos-o-tecnico",
    "situacao": "vizinhos",
    "order": 363,
    "pt": "Está, já chamámos o técnico.",
    "en": "It is, we've already called the technician.",
    "zhHans": "是的，已经叫人修了。",
    "zhHant": "是的，已經叫人修了。"
  },
  {
    "id": "dialogo-vizinhos-posso-pedir-lhe-um-favor",
    "situacao": "vizinhos",
    "order": 364,
    "pt": "Posso pedir-lhe um favor?",
    "en": "Can I ask you a favor?",
    "zhHans": "能请您帮个忙吗？",
    "zhHant": "能請您幫個忙嗎？"
  },
  {
    "id": "dialogo-vizinhos-claro-diga",
    "situacao": "vizinhos",
    "order": 365,
    "pt": "Claro, diga.",
    "en": "Of course, go ahead.",
    "zhHans": "当然，请说。",
    "zhHant": "當然，請說。"
  },
  {
    "id": "dialogo-vizinhos-pode-receber-uma-encomenda-amanha",
    "situacao": "vizinhos",
    "order": 366,
    "pt": "Pode receber uma encomenda amanhã?",
    "en": "Can you take in a package tomorrow?",
    "zhHans": "明天能帮我收包裹吗？",
    "zhHant": "明天能幫我收包裹嗎？"
  },
  {
    "id": "dialogo-vizinhos-com-certeza-deixo-a-a-sua-porta",
    "situacao": "vizinhos",
    "order": 367,
    "pt": "Com certeza, deixo-a à sua porta.",
    "en": "Certainly, I'll leave it at your door.",
    "zhHans": "没问题，我放您门口。",
    "zhHant": "沒問題，我放您門口。"
  },
  {
    "id": "dialogo-vizinhos-muito-obrigado-qualquer-barulho-avise-me",
    "situacao": "vizinhos",
    "order": 368,
    "pt": "Muito obrigado. Qualquer barulho, avise-me.",
    "en": "Thank you. If I'm ever noisy, let me know.",
    "zhHans": "谢谢。太吵的话请告诉我。",
    "zhHant": "謝謝。太吵的話請告訴我。"
  },
  {
    "id": "dialogo-vizinhos-fique-descansado-boa-mudanca",
    "situacao": "vizinhos",
    "order": 369,
    "pt": "Fique descansado. Boa mudança!",
    "en": "Don't worry. Happy moving!",
    "zhHans": "放心。祝乔迁顺利！",
    "zhHant": "放心。祝喬遷順利！"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-boa-tarde-tem-marcacao",
    "situacao": "cabeleireiro_barbeiro",
    "order": 370,
    "pt": "Boa tarde! Tem marcação?",
    "en": "Good afternoon! Do you have an appointment?",
    "zhHans": "下午好！有预约吗？",
    "zhHant": "午安！有預約嗎？"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-nao-e-preciso-marcar",
    "situacao": "cabeleireiro_barbeiro",
    "order": 371,
    "pt": "Não. É preciso marcar?",
    "en": "No. Do I need to book?",
    "zhHans": "没有。需要预约吗？",
    "zhHant": "沒有。需要預約嗎？"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-hoje-nao-espere-so-dez-minutos",
    "situacao": "cabeleireiro_barbeiro",
    "order": 372,
    "pt": "Hoje não, espere só dez minutos.",
    "en": "Not today, just wait ten minutes.",
    "zhHans": "今天不用，等十分钟就好。",
    "zhHant": "今天不用，等十分鐘就好。"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-esta-bem-eu-espero",
    "situacao": "cabeleireiro_barbeiro",
    "order": 373,
    "pt": "Está bem, eu espero.",
    "en": "Alright, I'll wait.",
    "zhHans": "好，我等。",
    "zhHant": "好，我等。"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-entao-o-que-vamos-fazer",
    "situacao": "cabeleireiro_barbeiro",
    "order": 374,
    "pt": "Então, o que vamos fazer?",
    "en": "So, what are we doing today?",
    "zhHans": "那今天想怎么弄？",
    "zhHant": "那今天想怎麼弄？"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-queria-cortar-mas-nao-muito-curto",
    "situacao": "cabeleireiro_barbeiro",
    "order": 375,
    "pt": "Queria cortar, mas não muito curto.",
    "en": "I'd like a cut, but not too short.",
    "zhHans": "想剪发，但别太短。",
    "zhHant": "想剪髮，但別太短。"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-so-aparar-as-pontas",
    "situacao": "cabeleireiro_barbeiro",
    "order": 376,
    "pt": "Só aparar as pontas?",
    "en": "Just trim the ends?",
    "zhHans": "只修发尾吗？",
    "zhHant": "只修髮尾嗎？"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-sim-uns-dois-dedos-e-a-franja",
    "situacao": "cabeleireiro_barbeiro",
    "order": 377,
    "pt": "Sim, uns dois dedos. E a franja.",
    "en": "Yes, about two fingers. And the bangs.",
    "zhHans": "对，大概两指。刘海也要。",
    "zhHant": "對，大概兩指。瀏海也要。"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-quer-lavar-primeiro",
    "situacao": "cabeleireiro_barbeiro",
    "order": 378,
    "pt": "Quer lavar primeiro?",
    "en": "Do you want a wash first?",
    "zhHans": "要先洗头吗？",
    "zhHant": "要先洗頭嗎？"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-sim-por-favor",
    "situacao": "cabeleireiro_barbeiro",
    "order": 379,
    "pt": "Sim, por favor.",
    "en": "Yes, please.",
    "zhHans": "好，麻烦了。",
    "zhHant": "好，麻煩了。"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-dos-lados-uso-a-maquina",
    "situacao": "cabeleireiro_barbeiro",
    "order": 380,
    "pt": "Dos lados, uso a máquina?",
    "en": "Shall I use the clippers on the sides?",
    "zhHans": "两侧用电剪吗？",
    "zhHant": "兩側用電剪嗎？"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-pode-ser-numero-tres",
    "situacao": "cabeleireiro_barbeiro",
    "order": 381,
    "pt": "Pode ser, número três.",
    "en": "Sure, number three.",
    "zhHans": "可以，三号。",
    "zhHant": "可以，三號。"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-e-a-barba-aparamos",
    "situacao": "cabeleireiro_barbeiro",
    "order": 382,
    "pt": "E a barba, aparamos?",
    "en": "And the beard, shall we trim it?",
    "zhHans": "胡子要修吗？",
    "zhHant": "鬍子要修嗎？"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-sim-mas-deixe-o-bigode",
    "situacao": "cabeleireiro_barbeiro",
    "order": 383,
    "pt": "Sim, mas deixe o bigode.",
    "en": "Yes, but leave the mustache.",
    "zhHans": "要，但小胡子留着。",
    "zhHant": "要，但小鬍子留著。"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-pronto-o-que-acha",
    "situacao": "cabeleireiro_barbeiro",
    "order": 384,
    "pt": "Pronto! O que acha?",
    "en": "Done! What do you think?",
    "zhHans": "好了！您觉得呢？",
    "zhHant": "好了！您覺得呢？"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-ficou-otimo-quanto-e",
    "situacao": "cabeleireiro_barbeiro",
    "order": 385,
    "pt": "Ficou ótimo. Quanto é?",
    "en": "It looks great. How much is it?",
    "zhHans": "很好看。多少钱？",
    "zhHant": "很好看。多少錢？"
  },
  {
    "id": "dialogo-farmacia-boa-tarde-o-que-deseja",
    "situacao": "farmacia",
    "order": 386,
    "pt": "Boa tarde, o que deseja?",
    "en": "Good afternoon, how can I help?",
    "zhHans": "下午好，需要什么？",
    "zhHant": "午安，需要什麼？"
  },
  {
    "id": "dialogo-farmacia-tenho-dor-de-garganta-e-tosse",
    "situacao": "farmacia",
    "order": 387,
    "pt": "Tenho dor de garganta e tosse.",
    "en": "I have a sore throat and a cough.",
    "zhHans": "我喉咙痛还咳嗽。",
    "zhHant": "我喉嚨痛還咳嗽。"
  },
  {
    "id": "dialogo-farmacia-tem-febre",
    "situacao": "farmacia",
    "order": 388,
    "pt": "Tem febre?",
    "en": "Do you have a fever?",
    "zhHans": "有发烧吗？",
    "zhHant": "有發燒嗎？"
  },
  {
    "id": "dialogo-farmacia-um-pouco-ontem-a-noite",
    "situacao": "farmacia",
    "order": 389,
    "pt": "Um pouco, ontem à noite.",
    "en": "A little, last night.",
    "zhHans": "有一点，昨晚烧的。",
    "zhHant": "有一點，昨晚燒的。"
  },
  {
    "id": "dialogo-farmacia-parece-uma-constipacao-tem-alergias",
    "situacao": "farmacia",
    "order": 390,
    "pt": "Parece uma constipação. Tem alergias?",
    "en": "Sounds like a cold. Any allergies?",
    "zhHans": "像是感冒。有过敏吗？",
    "zhHant": "像是感冒。有過敏嗎？"
  },
  {
    "id": "dialogo-farmacia-nao-que-eu-saiba",
    "situacao": "farmacia",
    "order": 391,
    "pt": "Não que eu saiba.",
    "en": "Not that I know of.",
    "zhHans": "据我所知没有。",
    "zhHant": "據我所知沒有。"
  },
  {
    "id": "dialogo-farmacia-leve-este-xarope-e-estes-comprimidos",
    "situacao": "farmacia",
    "order": 392,
    "pt": "Leve este xarope e estes comprimidos.",
    "en": "Take this syrup and these pills.",
    "zhHans": "拿这瓶糖浆和这些药片。",
    "zhHant": "拿這瓶糖漿和這些藥片。"
  },
  {
    "id": "dialogo-farmacia-como-tomo-os-comprimidos",
    "situacao": "farmacia",
    "order": 393,
    "pt": "Como tomo os comprimidos?",
    "en": "How do I take the pills?",
    "zhHans": "药片怎么吃？",
    "zhHant": "藥片怎麼吃？"
  },
  {
    "id": "dialogo-farmacia-um-de-oito-em-oito-horas-as-refeicoes",
    "situacao": "farmacia",
    "order": 394,
    "pt": "Um de oito em oito horas, às refeições.",
    "en": "One every eight hours, with meals.",
    "zhHans": "每八小时一片，随餐。",
    "zhHant": "每八小時一片，隨餐。"
  },
  {
    "id": "dialogo-farmacia-e-o-xarope",
    "situacao": "farmacia",
    "order": 395,
    "pt": "E o xarope?",
    "en": "And the syrup?",
    "zhHans": "糖浆呢？",
    "zhHant": "糖漿呢？"
  },
  {
    "id": "dialogo-farmacia-duas-vezes-por-dia-manha-e-noite",
    "situacao": "farmacia",
    "order": 396,
    "pt": "Duas vezes por dia, manhã e noite.",
    "en": "Twice a day, morning and night.",
    "zhHans": "一天两次，早晚。",
    "zhHant": "一天兩次，早晚。"
  },
  {
    "id": "dialogo-farmacia-este-medicamento-precisa-de-receita",
    "situacao": "farmacia",
    "order": 397,
    "pt": "Este medicamento precisa de receita?",
    "en": "Does this medicine need a prescription?",
    "zhHans": "这药要处方吗？",
    "zhHant": "這藥要處方嗎？"
  },
  {
    "id": "dialogo-farmacia-nao-e-de-venda-livre",
    "situacao": "farmacia",
    "order": 398,
    "pt": "Não, é de venda livre.",
    "en": "No, it's over the counter.",
    "zhHans": "不用，是非处方药。",
    "zhHant": "不用，是非處方藥。"
  },
  {
    "id": "dialogo-farmacia-ha-generico-e-mais-barato",
    "situacao": "farmacia",
    "order": 399,
    "pt": "Há genérico? É mais barato?",
    "en": "Is there a generic? Is it cheaper?",
    "zhHans": "有仿制药吗？便宜点吗？",
    "zhHant": "有學名藥嗎？便宜點嗎？"
  },
  {
    "id": "dialogo-farmacia-ha-sim-custa-quatro-euros",
    "situacao": "farmacia",
    "order": 400,
    "pt": "Há, sim. Custa quatro euros.",
    "en": "Yes, there is. It's four euros.",
    "zhHans": "有，四欧元。",
    "zhHant": "有，四歐元。"
  },
  {
    "id": "dialogo-farmacia-e-se-nao-melhorar",
    "situacao": "farmacia",
    "order": 401,
    "pt": "E se não melhorar?",
    "en": "And if I don't get better?",
    "zhHans": "要是没好转呢？",
    "zhHant": "要是沒好轉呢？"
  },
  {
    "id": "dialogo-farmacia-em-tres-dias-sem-melhoras-va-ao-medico",
    "situacao": "farmacia",
    "order": 402,
    "pt": "Em três dias sem melhoras, vá ao médico.",
    "en": "If you're no better in three days, see a doctor.",
    "zhHans": "三天没好就去看医生。",
    "zhHant": "三天沒好就去看醫生。"
  },
  {
    "id": "dialogo-supermercado_mercado-bom-dia-onde-encontro-o-leite-sem-lactose",
    "situacao": "supermercado_mercado",
    "order": 403,
    "pt": "Bom dia. Onde encontro o leite sem lactose?",
    "en": "Good morning. Where can I find lactose-free milk?",
    "zhHans": "早上好。无乳糖牛奶在哪里？",
    "zhHant": "早晨。無乳糖牛奶在哪裡？"
  },
  {
    "id": "dialogo-supermercado_mercado-fica-no-corredor-seis-ao-lado-dos-iogurtes",
    "situacao": "supermercado_mercado",
    "order": 404,
    "pt": "Fica no corredor seis, ao lado dos iogurtes.",
    "en": "It's in aisle six, next to the yoghurts.",
    "zhHans": "在六号通道，酸奶旁边。",
    "zhHant": "在六號通道，乳酪旁邊。"
  },
  {
    "id": "dialogo-supermercado_mercado-e-este-tomate-e-vendido-ao-quilo",
    "situacao": "supermercado_mercado",
    "order": 405,
    "pt": "E estes tomates vendem-se ao quilo?",
    "en": "And are these tomatoes sold by the kilo?",
    "zhHans": "这些西红柿按公斤卖吗？",
    "zhHant": "這些番茄按公斤賣嗎？"
  },
  {
    "id": "dialogo-supermercado_mercado-sim-tem-de-o-pesar-antes-de-ir-para-a-caixa",
    "situacao": "supermercado_mercado",
    "order": 406,
    "pt": "Sim. Tem de os pesar antes de ir para a caixa.",
    "en": "Yes. You need to weigh them before going to the checkout.",
    "zhHans": "是的，结账前需要先称重。",
    "zhHant": "是的，付款前需要先磅重。"
  },
  {
    "id": "dialogo-supermercado_mercado-este-produto-esta-em-promocao",
    "situacao": "supermercado_mercado",
    "order": 407,
    "pt": "Este produto está em promoção?",
    "en": "Is this product on special offer?",
    "zhHans": "这个商品在促销吗？",
    "zhHant": "這件商品有促銷嗎？"
  },
  {
    "id": "dialogo-supermercado_mercado-sim-mas-so-com-o-cartao-da-loja",
    "situacao": "supermercado_mercado",
    "order": 408,
    "pt": "Sim, mas só com o cartão da loja.",
    "en": "Yes, but only with the store card.",
    "zhHans": "是的，但仅限使用会员卡。",
    "zhHant": "是的，但只限使用會員卡。"
  },
  {
    "id": "dialogo-supermercado_mercado-queria-fatura-com-numero-de-contribuinte-por-favor",
    "situacao": "supermercado_mercado",
    "order": 409,
    "pt": "Queria fatura com NIF, por favor.",
    "en": "I'd like a receipt with my NIF, please.",
    "zhHans": "请在发票上填写我的税号。",
    "zhHant": "請在發票上填寫我的稅號。"
  },
  {
    "id": "dialogo-supermercado_mercado-claro-pode-indicar-o-nif",
    "situacao": "supermercado_mercado",
    "order": 410,
    "pt": "Claro. Pode indicar o NIF?",
    "en": "Of course. Can you give me the NIF?",
    "zhHans": "当然，请告诉我税号。",
    "zhHant": "當然，請告訴我稅號。"
  },
  {
    "id": "dialogo-cafe_restaurante-boa-tarde-tem-mesa-para-duas-pessoas",
    "situacao": "cafe_restaurante",
    "order": 411,
    "pt": "Boa tarde. Tem mesa para duas pessoas?",
    "en": "Good afternoon. Do you have a table for two?",
    "zhHans": "下午好。有两个人的桌位吗？",
    "zhHant": "午安。有兩個人的座位嗎？"
  },
  {
    "id": "dialogo-cafe_restaurante-tenho-uma-mesa-la-dentro-ou-outra-na-esplanada",
    "situacao": "cafe_restaurante",
    "order": 412,
    "pt": "Temos uma mesa lá dentro e outra na esplanada.",
    "en": "We have one table inside and another on the terrace.",
    "zhHans": "里面和露台各有一张桌子。",
    "zhHant": "室內和露台各有一張桌子。"
  },
  {
    "id": "dialogo-cafe_restaurante-preferimos-a-esplanada-qual-e-o-prato-do-dia",
    "situacao": "cafe_restaurante",
    "order": 413,
    "pt": "Preferimos a esplanada. Qual é o prato do dia?",
    "en": "We prefer the terrace. What's today's special?",
    "zhHans": "我们想坐露台。今日特餐是什么？",
    "zhHant": "我們想坐露台。今日特餐是甚麼？"
  },
  {
    "id": "dialogo-cafe_restaurante-e-peixe-grelhado-com-arroz-e-salada",
    "situacao": "cafe_restaurante",
    "order": 414,
    "pt": "É peixe grelhado com arroz e salada.",
    "en": "It's grilled fish with rice and salad.",
    "zhHans": "是烤鱼配米饭和沙拉。",
    "zhHant": "是烤魚配飯和沙律。"
  },
  {
    "id": "dialogo-cafe_restaurante-este-prato-contem-frutos-secos-tenho-alergia",
    "situacao": "cafe_restaurante",
    "order": 415,
    "pt": "Este prato contém frutos secos? Tenho alergia.",
    "en": "Does this dish contain nuts? I have an allergy.",
    "zhHans": "这道菜含坚果吗？我过敏。",
    "zhHant": "這道菜含果仁嗎？我有敏感。"
  },
  {
    "id": "dialogo-cafe_restaurante-nao-contem-mas-vou-confirmar-com-a-cozinha",
    "situacao": "cafe_restaurante",
    "order": 416,
    "pt": "Não contém, mas vou confirmar com a cozinha.",
    "en": "It doesn't, but I'll confirm with the kitchen.",
    "zhHans": "不含，但我会向厨房确认。",
    "zhHant": "不含，但我會向廚房確認。"
  },
  {
    "id": "dialogo-cafe_restaurante-podemos-pagar-em-separado",
    "situacao": "cafe_restaurante",
    "order": 417,
    "pt": "Podemos pagar em separado?",
    "en": "Can we pay separately?",
    "zhHans": "我们可以分开付款吗？",
    "zhHant": "我們可以分開付款嗎？"
  },
  {
    "id": "dialogo-cafe_restaurante-sim-querem-pagar-com-cartao-ou-em-dinheiro",
    "situacao": "cafe_restaurante",
    "order": 418,
    "pt": "Sim. Querem pagar com cartão ou em dinheiro?",
    "en": "Yes. Would you like to pay by card or cash?",
    "zhHans": "可以。刷卡还是现金？",
    "zhHant": "可以。用卡還是現金？"
  },
  {
    "id": "dialogo-consultorio_medico-bom-dia-o-que-o-traz-ca-hoje",
    "situacao": "consultorio_medico",
    "order": 419,
    "pt": "Bom dia. O que o traz cá hoje?",
    "en": "Good morning. What brings you in today?",
    "zhHans": "早上好。今天哪里不舒服？",
    "zhHant": "早晨。今天哪裡不舒服？"
  },
  {
    "id": "dialogo-consultorio_medico-tenho-uma-dor-no-peito-desde-ontem",
    "situacao": "consultorio_medico",
    "order": 420,
    "pt": "Tenho uma dor no peito desde ontem.",
    "en": "I've had chest pain since yesterday.",
    "zhHans": "我从昨天起胸痛。",
    "zhHant": "我從昨天起胸口痛。"
  },
  {
    "id": "dialogo-consultorio_medico-a-dor-e-constante-ou-vai-e-vem",
    "situacao": "consultorio_medico",
    "order": 421,
    "pt": "A dor é constante ou vai e vem?",
    "en": "Is the pain constant, or does it come and go?",
    "zhHans": "疼痛是持续的还是间歇的？",
    "zhHant": "疼痛是持續的還是間歇的？"
  },
  {
    "id": "dialogo-consultorio_medico-vai-e-vem-e-piora-quando-respiro-fundo",
    "situacao": "consultorio_medico",
    "order": 422,
    "pt": "Vai e vem e piora quando respiro fundo.",
    "en": "It comes and goes and gets worse when I breathe deeply.",
    "zhHans": "时有时无，深呼吸时更痛。",
    "zhHant": "時有時無，深呼吸時更痛。"
  },
  {
    "id": "dialogo-consultorio_medico-tem-febre-tosse-ou-falta-de-ar",
    "situacao": "consultorio_medico",
    "order": 423,
    "pt": "Tem febre, tosse ou falta de ar?",
    "en": "Do you have a fever, cough, or shortness of breath?",
    "zhHans": "有发烧、咳嗽或呼吸困难吗？",
    "zhHant": "有發燒、咳嗽或呼吸困難嗎？"
  },
  {
    "id": "dialogo-consultorio_medico-tenho-tosse-mas-nao-tenho-febre",
    "situacao": "consultorio_medico",
    "order": 424,
    "pt": "Tenho tosse, mas não tenho febre.",
    "en": "I have a cough, but no fever.",
    "zhHans": "我咳嗽，但没有发烧。",
    "zhHant": "我咳嗽，但沒有發燒。"
  },
  {
    "id": "dialogo-consultorio_medico-vou-examina-lo-e-pedir-uma-radiografia",
    "situacao": "consultorio_medico",
    "order": 425,
    "pt": "Vou examiná-lo e pedir uma radiografia.",
    "en": "I'm going to examine you and request an X-ray.",
    "zhHans": "我会为您检查并安排X光。",
    "zhHant": "我會為您檢查並安排X光。"
  },
  {
    "id": "dialogo-consultorio_medico-quando-devo-voltar-para-mostrar-o-resultado",
    "situacao": "consultorio_medico",
    "order": 426,
    "pt": "Quando devo voltar para mostrar o resultado?",
    "en": "When should I come back to show you the result?",
    "zhHans": "我什么时候回来给您看结果？",
    "zhHant": "我甚麼時候回來給您看結果？"
  },
  {
    "id": "dialogo-casa_reparacoes-bom-dia-estou-a-ligar-por-causa-de-uma-avaria-em-casa",
    "situacao": "casa_reparacoes",
    "order": 427,
    "pt": "Bom dia. Estou a ligar por causa de uma avaria em casa.",
    "en": "Good morning. I'm calling about a fault at home.",
    "zhHans": "早上好。我打电话是因为家里出了故障。",
    "zhHant": "早晨。我致電是因為家裡出了故障。"
  },
  {
    "id": "dialogo-casa_reparacoes-pode-explicar-o-que-aconteceu",
    "situacao": "casa_reparacoes",
    "order": 428,
    "pt": "Pode explicar o que aconteceu?",
    "en": "Can you explain what happened?",
    "zhHans": "可以说明发生了什么吗？",
    "zhHant": "可以說明發生了甚麼嗎？"
  },
  {
    "id": "dialogo-casa_reparacoes-ha-uma-fuga-de-agua-debaixo-do-lava-loica",
    "situacao": "casa_reparacoes",
    "order": 429,
    "pt": "Há uma fuga de água debaixo do lava-loiça.",
    "en": "There's a water leak under the kitchen sink.",
    "zhHans": "厨房水槽下面漏水。",
    "zhHant": "廚房洗手盆下面漏水。"
  },
  {
    "id": "dialogo-casa_reparacoes-ja-fechou-a-torneira-de-seguranca",
    "situacao": "casa_reparacoes",
    "order": 430,
    "pt": "Já fechou a torneira de corte?",
    "en": "Have you turned off the stopcock?",
    "zhHans": "您已经关掉总水阀了吗？",
    "zhHant": "您已經關掉總水掣了嗎？"
  },
  {
    "id": "dialogo-casa_reparacoes-sim-mas-agora-nao-temos-agua-em-casa",
    "situacao": "casa_reparacoes",
    "order": 431,
    "pt": "Sim, mas agora não temos água em casa.",
    "en": "Yes, but now we have no water at home.",
    "zhHans": "关了，但现在家里没水。",
    "zhHant": "關了，但現在家裡沒有水。"
  },
  {
    "id": "dialogo-casa_reparacoes-o-canalizador-pode-ir-ai-entre-as-duas-e-as-quatro",
    "situacao": "casa_reparacoes",
    "order": 432,
    "pt": "O canalizador pode ir aí entre as duas e as quatro.",
    "en": "The plumber can go there between two and four.",
    "zhHans": "水管工可以在两点到四点之间到。",
    "zhHant": "水喉匠可以在兩點至四點之間到。"
  },
  {
    "id": "dialogo-casa_reparacoes-pode-enviar-me-primeiro-o-orcamento",
    "situacao": "casa_reparacoes",
    "order": 433,
    "pt": "Pode enviar-me primeiro o orçamento?",
    "en": "Can you send me the quote first?",
    "zhHans": "可以先把报价发给我吗？",
    "zhHant": "可以先把報價傳給我嗎？"
  },
  {
    "id": "dialogo-casa_reparacoes-sim-ele-verifica-a-avaria-e-envia-lhe-o-valor",
    "situacao": "casa_reparacoes",
    "order": 434,
    "pt": "Sim. Ele verifica a avaria e depois envia-lhe o orçamento.",
    "en": "Yes. He'll inspect the fault and then send you the quote.",
    "zhHans": "可以。他会检查故障，然后把报价发给您。",
    "zhHant": "可以。他會檢查故障，然後把報價傳給您。"
  },
  {
    "id": "dialogo-agua_luz_gas-boa-tarde-quero-por-o-contrato-da-eletricidade-em-meu-nome",
    "situacao": "agua_luz_gas",
    "order": 435,
    "pt": "Boa tarde. Quero pôr o contrato da eletricidade em meu nome.",
    "en": "Good afternoon. I want to put the electricity contract in my name.",
    "zhHans": "下午好。我想把电力合同改成我的名字。",
    "zhHant": "午安。我想把電力合約改成我的名字。"
  },
  {
    "id": "dialogo-agua_luz_gas-tem-o-contrato-de-arrendamento-e-uma-leitura-do-contador",
    "situacao": "agua_luz_gas",
    "order": 436,
    "pt": "Tem o contrato de arrendamento e uma leitura do contador?",
    "en": "Do you have the tenancy agreement and a meter reading?",
    "zhHans": "您有租赁合同和抄表数值吗？",
    "zhHant": "您有租賃合約和抄錶數值嗎？"
  },
  {
    "id": "dialogo-agua_luz_gas-tenho-tambem-queria-aderir-ao-debito-direto",
    "situacao": "agua_luz_gas",
    "order": 437,
    "pt": "Tenho. Também queria aderir ao débito direto.",
    "en": "I do. I'd also like to set up direct debit.",
    "zhHans": "有。我还想开通自动扣款。",
    "zhHant": "有。我還想設定直接付款。"
  },
  {
    "id": "dialogo-agua_luz_gas-preciso-do-seu-iban-e-documento-de-identificacao",
    "situacao": "agua_luz_gas",
    "order": 438,
    "pt": "Preciso do seu IBAN e documento de identificação.",
    "en": "I need your IBAN and identity document.",
    "zhHans": "我需要您的IBAN和身份证件。",
    "zhHant": "我需要您的IBAN和身份證明文件。"
  },
  {
    "id": "dialogo-agua_luz_gas-qual-e-a-potencia-contratada-mais-indicada",
    "situacao": "agua_luz_gas",
    "order": 439,
    "pt": "Qual é a potência contratada mais indicada?",
    "en": "Which contracted power level is most suitable?",
    "zhHans": "哪种合同电力容量最合适？",
    "zhHant": "哪種合約電力容量最合適？"
  },
  {
    "id": "dialogo-agua_luz_gas-para-duas-pessoas-3-45-kva-costuma-ser-suficiente",
    "situacao": "agua_luz_gas",
    "order": 440,
    "pt": "Para duas pessoas, 3,45 kVA costuma ser suficiente.",
    "en": "For two people, 3.45 kVA is usually enough.",
    "zhHans": "两个人通常3.45千伏安就够了。",
    "zhHant": "兩個人通常3.45千伏安就夠了。"
  },
  {
    "id": "dialogo-agua_luz_gas-quando-comeca-o-fornecimento",
    "situacao": "agua_luz_gas",
    "order": 441,
    "pt": "Quando começa o fornecimento?",
    "en": "When does the supply start?",
    "zhHans": "什么时候开始供电？",
    "zhHant": "甚麼時候開始供電？"
  },
  {
    "id": "dialogo-agua_luz_gas-se-nao-houver-problemas-fica-ativo-amanha",
    "situacao": "agua_luz_gas",
    "order": 442,
    "pt": "Se não houver problemas, o contrato fica ativo amanhã.",
    "en": "If there are no issues, the contract will be active tomorrow.",
    "zhHans": "如果没有问题，合同明天就会生效。",
    "zhHant": "如果沒有問題，合約明天就會生效。"
  },
  {
    "id": "dialogo-telemovel_internet-bom-dia-queria-internet-para-esta-morada",
    "situacao": "telemovel_internet",
    "order": 443,
    "pt": "Bom dia. Queria internet para esta morada.",
    "en": "Good morning. I'd like internet service at this address.",
    "zhHans": "早上好。我想为这个地址办理网络。",
    "zhHant": "早晨。我想為這個地址申請上網服務。"
  },
  {
    "id": "dialogo-telemovel_internet-vou-verificar-se-ha-cobertura-de-fibra",
    "situacao": "telemovel_internet",
    "order": 444,
    "pt": "Vou verificar se há cobertura de fibra.",
    "en": "I'll check whether fibre is available.",
    "zhHans": "我来查看是否有光纤覆盖。",
    "zhHant": "我來查看是否有光纖覆蓋。"
  },
  {
    "id": "dialogo-telemovel_internet-ha-fibra-o-tarifario-tem-fidelizacao",
    "situacao": "telemovel_internet",
    "order": 445,
    "pt": "Há fibra. O tarifário tem fidelização?",
    "en": "Fibre is available. Does the plan have a lock-in period?",
    "zhHans": "有光纤。这个套餐有合约期吗？",
    "zhHant": "有光纖。這個方案有綁約期嗎？"
  },
  {
    "id": "dialogo-telemovel_internet-sim-durante-vinte-e-quatro-meses",
    "situacao": "telemovel_internet",
    "order": 446,
    "pt": "Sim, durante vinte e quatro meses.",
    "en": "Yes, for twenty-four months.",
    "zhHans": "有，二十四个月。",
    "zhHant": "有，二十四個月。"
  },
  {
    "id": "dialogo-telemovel_internet-e-quanto-tempo-demora-a-instalacao",
    "situacao": "telemovel_internet",
    "order": 447,
    "pt": "E quanto tempo demora a instalação?",
    "en": "And how long does installation take?",
    "zhHans": "安装需要多长时间？",
    "zhHant": "安裝需要多長時間？"
  },
  {
    "id": "dialogo-telemovel_internet-o-tecnico-pode-ir-na-proxima-terca-feira-de-manha",
    "situacao": "telemovel_internet",
    "order": 448,
    "pt": "O técnico pode ir na próxima terça-feira de manhã.",
    "en": "The technician can go next Tuesday morning.",
    "zhHans": "技术人员下周二上午可以上门。",
    "zhHant": "技術人員下星期二上午可以上門。"
  },
  {
    "id": "dialogo-telemovel_internet-preciso-de-ficar-em-casa-durante-toda-a-manha",
    "situacao": "telemovel_internet",
    "order": 449,
    "pt": "Preciso de ficar em casa durante toda a manhã?",
    "en": "Do I need to stay home all morning?",
    "zhHans": "我需要整个上午都在家吗？",
    "zhHant": "我需要整個上午都在家嗎？"
  },
  {
    "id": "dialogo-telemovel_internet-ele-liga-cerca-de-meia-hora-antes-de-chegar",
    "situacao": "telemovel_internet",
    "order": 450,
    "pt": "Ele liga cerca de meia hora antes de chegar.",
    "en": "He'll call about half an hour before arriving.",
    "zhHans": "他会在到达前约半小时打电话。",
    "zhHant": "他會在到達前約半小時致電。"
  },
  {
    "id": "dialogo-trocas_devolucoes-boa-tarde-queria-trocar-estas-calcas",
    "situacao": "trocas_devolucoes",
    "order": 451,
    "pt": "Boa tarde. Queria trocar estas calças.",
    "en": "Good afternoon. I'd like to exchange these trousers.",
    "zhHans": "下午好。我想换这条裤子。",
    "zhHant": "午安。我想換這條褲子。"
  },
  {
    "id": "dialogo-trocas_devolucoes-tem-o-talao-e-a-etiqueta",
    "situacao": "trocas_devolucoes",
    "order": 452,
    "pt": "Tem o talão e a etiqueta?",
    "en": "Do you have the receipt and the tag?",
    "zhHans": "您有收据和标签吗？",
    "zhHant": "您有收據和標籤嗎？"
  },
  {
    "id": "dialogo-trocas_devolucoes-sim-so-experimentei-em-casa-mas-ficam-apertadas",
    "situacao": "trocas_devolucoes",
    "order": 453,
    "pt": "Sim. Só experimentei em casa, mas ficam apertadas.",
    "en": "Yes. I only tried them on at home, but they're tight.",
    "zhHans": "有。我只在家试穿过，但太紧了。",
    "zhHant": "有。我只在家試穿過，但太緊了。"
  },
  {
    "id": "dialogo-trocas_devolucoes-quer-outro-tamanho-ou-prefere-o-reembolso",
    "situacao": "trocas_devolucoes",
    "order": 454,
    "pt": "Quer outro tamanho ou prefere o reembolso?",
    "en": "Would you like another size or a refund?",
    "zhHans": "您想换尺码还是退款？",
    "zhHant": "您想換尺碼還是退款？"
  },
  {
    "id": "dialogo-trocas_devolucoes-queria-o-tamanho-acima-se-houver",
    "situacao": "trocas_devolucoes",
    "order": 455,
    "pt": "Queria o tamanho acima, se houver.",
    "en": "I'd like the next size up, if available.",
    "zhHans": "如果有，我想要大一码。",
    "zhHant": "如果有，我想要大一個尺碼。"
  },
  {
    "id": "dialogo-trocas_devolucoes-esse-tamanho-esta-esgotado-nesta-loja",
    "situacao": "trocas_devolucoes",
    "order": 456,
    "pt": "Esse tamanho está esgotado nesta loja.",
    "en": "That size is sold out in this shop.",
    "zhHans": "这家店那个尺码售罄了。",
    "zhHant": "這間店那個尺碼售罄了。"
  },
  {
    "id": "dialogo-trocas_devolucoes-entao-prefiro-receber-o-dinheiro-de-volta",
    "situacao": "trocas_devolucoes",
    "order": 457,
    "pt": "Então prefiro receber o dinheiro de volta.",
    "en": "Then I'd prefer to get my money back.",
    "zhHans": "那我想退款。",
    "zhHant": "那我想退款。"
  },
  {
    "id": "dialogo-trocas_devolucoes-o-reembolso-sera-feito-para-o-mesmo-cartao",
    "situacao": "trocas_devolucoes",
    "order": 458,
    "pt": "O reembolso será feito para o mesmo cartão.",
    "en": "The refund will be made to the same card.",
    "zhHans": "退款会退回原卡。",
    "zhHant": "退款會退回原卡。"
  },
  {
    "id": "dialogo-policia_documentos-boa-noite-quero-apresentar-uma-denuncia",
    "situacao": "policia_documentos",
    "order": 459,
    "pt": "Boa noite. Quero apresentar uma denúncia.",
    "en": "Good evening. I want to file a police report.",
    "zhHans": "晚上好。我要报案。",
    "zhHant": "晚上好。我要報案。"
  },
  {
    "id": "dialogo-policia_documentos-o-que-aconteceu",
    "situacao": "policia_documentos",
    "order": 460,
    "pt": "O que aconteceu?",
    "en": "What happened?",
    "zhHans": "发生了什么？",
    "zhHant": "發生了甚麼事？"
  },
  {
    "id": "dialogo-policia_documentos-roubaram-me-a-carteira-no-metro",
    "situacao": "policia_documentos",
    "order": 461,
    "pt": "Roubaram-me a carteira no metro.",
    "en": "My wallet was stolen on the metro.",
    "zhHans": "我的钱包在地铁里被偷了。",
    "zhHant": "我的銀包在地鐵裡被偷了。"
  },
  {
    "id": "dialogo-policia_documentos-a-que-horas-e-em-que-estacao",
    "situacao": "policia_documentos",
    "order": 462,
    "pt": "A que horas e em que estação?",
    "en": "At what time and at which station?",
    "zhHans": "几点？在哪个车站？",
    "zhHant": "幾點？在哪個車站？"
  },
  {
    "id": "dialogo-policia_documentos-por-volta-das-seis-entre-o-saldanha-e-o-marques",
    "situacao": "policia_documentos",
    "order": 463,
    "pt": "Por volta das seis, entre Saldanha e o Marquês de Pombal.",
    "en": "At around six, between Saldanha and Marquês de Pombal.",
    "zhHans": "大约六点，在Saldanha和Marquês de Pombal之间。",
    "zhHant": "大約六點，在Saldanha和Marquês de Pombal之間。"
  },
  {
    "id": "dialogo-policia_documentos-que-documentos-estavam-na-carteira",
    "situacao": "policia_documentos",
    "order": 464,
    "pt": "Que documentos estavam na carteira?",
    "en": "Which documents were in the wallet?",
    "zhHans": "钱包里有哪些证件？",
    "zhHant": "銀包裡有哪些證件？"
  },
  {
    "id": "dialogo-policia_documentos-o-cartao-de-residencia-o-cartao-do-banco-e-a-carta-de-conducao",
    "situacao": "policia_documentos",
    "order": 465,
    "pt": "O cartão de residência, o cartão do banco e a carta de condução.",
    "en": "My residence card, bank card, and driving licence.",
    "zhHans": "居留卡、银行卡和驾驶证。",
    "zhHant": "居留卡、銀行卡和駕駛執照。"
  },
  {
    "id": "dialogo-policia_documentos-vou-registar-a-ocorrencia-e-dar-lhe-uma-copia-do-auto",
    "situacao": "policia_documentos",
    "order": 466,
    "pt": "Vou registar a ocorrência e dar-lhe uma cópia do auto.",
    "en": "I'll record the incident and give you a copy of the report.",
    "zhHans": "我会登记事件并给您一份报告副本。",
    "zhHant": "我會登記事件並給您一份報告副本。"
  },
  {
    "id": "dialogo-espaco_cidadao-bom-dia-preciso-de-ativar-a-chave-movel-digital",
    "situacao": "espaco_cidadao",
    "order": 467,
    "purpose": "opening",
    "pt": "Bom dia. Preciso de ativar a Chave Móvel Digital.",
    "en": "Good morning. I need to activate my Digital Mobile Key.",
    "zhHans": "早上好。我需要开通数字移动密钥。",
    "zhHant": "早晨。我需要啟用數碼流動金鑰。"
  },
  {
    "id": "dialogo-espaco_cidadao-este-servico-esta-disponivel-neste-espaco-cidadao",
    "situacao": "espaco_cidadao",
    "order": 468,
    "purpose": "availability",
    "pt": "Este serviço está disponível neste Espaço Cidadão?",
    "en": "Is this service available at this Citizen's Desk?",
    "zhHans": "这个市民服务中心可以办理这项服务吗？",
    "zhHant": "這個市民服務中心可以辦理這項服務嗎？"
  },
  {
    "id": "dialogo-espaco_cidadao-sim-aqui-fazemos-a-ativacao-com-apoio-de-um-assistente",
    "situacao": "espaco_cidadao",
    "order": 469,
    "purpose": "availability",
    "pt": "Sim. Aqui fazemos a ativação com apoio de um assistente.",
    "en": "Yes. We provide assisted activation here.",
    "zhHans": "可以。这里有工作人员协助开通。",
    "zhHant": "可以。這裡有職員協助啟用。"
  },
  {
    "id": "dialogo-espaco_cidadao-e-preciso-marcar-atendimento",
    "situacao": "espaco_cidadao",
    "order": 470,
    "purpose": "appointment",
    "pt": "É preciso marcar atendimento?",
    "en": "Do I need an appointment?",
    "zhHans": "需要预约吗？",
    "zhHant": "需要預約嗎？"
  },
  {
    "id": "dialogo-espaco_cidadao-nao-o-atendimento-normal-e-feito-sem-marcacao",
    "situacao": "espaco_cidadao",
    "order": 471,
    "purpose": "appointment",
    "pt": "Não. O atendimento normal é feito sem marcação.",
    "en": "No. Regular service is provided without an appointment.",
    "zhHans": "不需要。普通服务无需预约。",
    "zhHant": "不需要。一般服務毋須預約。"
  },
  {
    "id": "dialogo-espaco_cidadao-trouxe-o-documento-de-identificacao-e-o-telemovel",
    "situacao": "espaco_cidadao",
    "order": 472,
    "purpose": "documents",
    "pt": "Trouxe o documento de identificação e o telemóvel.",
    "en": "I brought my identity document and phone.",
    "zhHans": "我带了身份证件和手机。",
    "zhHant": "我帶了身份證明文件和手機。"
  },
  {
    "id": "dialogo-espaco_cidadao-nao-me-lembro-do-pin-e-ja-nao-uso-o-email-antigo",
    "situacao": "espaco_cidadao",
    "order": 473,
    "purpose": "problem",
    "pt": "Não me lembro do PIN e já não uso o email antigo.",
    "en": "I don't remember the PIN and no longer use my old email.",
    "zhHans": "我不记得密码，也不再使用原来的邮箱。",
    "zhHant": "我不記得密碼，也不再使用以前的電郵。"
  },
  {
    "id": "dialogo-espaco_cidadao-vamos-primeiro-confirmar-a-sua-identidade-e-atualizar-os-contactos",
    "situacao": "espaco_cidadao",
    "order": 474,
    "purpose": "recovery",
    "pt": "Vamos primeiro confirmar a sua identidade e atualizar os contactos.",
    "en": "We will first confirm your identity and update your contact details.",
    "zhHans": "我们先核实您的身份并更新联系方式。",
    "zhHant": "我們先核實您的身份並更新聯絡資料。"
  },
  {
    "id": "dialogo-espaco_cidadao-no-fim-recebo-algum-comprovativo",
    "situacao": "espaco_cidadao",
    "order": 475,
    "purpose": "confirmation",
    "pt": "No fim, recebo algum comprovativo?",
    "en": "Will I receive confirmation when it is finished?",
    "zhHans": "办完后会收到凭证吗？",
    "zhHant": "辦妥後會收到確認嗎？"
  },
  {
    "id": "dialogo-espaco_cidadao-sim-pode-confirmar-a-ativacao-no-ecra-e-guardar-a-mensagem",
    "situacao": "espaco_cidadao",
    "order": 476,
    "purpose": "confirmation",
    "pt": "Sim. Pode confirmar a ativação no ecrã e guardar a mensagem.",
    "en": "Yes. You can confirm activation on screen and keep the message.",
    "zhHans": "会。您可以在屏幕上确认开通并保存通知。",
    "zhHant": "會。您可以在畫面上確認啟用並保留訊息。"
  },
  {
    "id": "dialogo-imt_carta_conducao-bom-dia-quero-trocar-a-minha-carta-de-conducao-estrangeira",
    "situacao": "imt_carta_conducao",
    "order": 477,
    "purpose": "opening",
    "pt": "Bom dia. Quero trocar a minha carta de condução estrangeira.",
    "en": "Good morning. I want to exchange my foreign driving licence.",
    "zhHans": "早上好。我想换领外国驾驶证。",
    "zhHant": "早晨。我想換領外國駕駛執照。"
  },
  {
    "id": "dialogo-imt_carta_conducao-em-que-pais-foi-emitida-e-desde-quando-reside-em-portugal",
    "situacao": "imt_carta_conducao",
    "order": 478,
    "purpose": "eligibility",
    "pt": "Em que país foi emitida e desde quando reside em Portugal?",
    "en": "Which country issued it, and since when have you lived in Portugal?",
    "zhHans": "驾驶证由哪个国家签发？您从什么时候开始在葡萄牙居住？",
    "zhHant": "駕駛執照由哪個國家簽發？您從甚麼時候開始在葡萄牙居住？"
  },
  {
    "id": "dialogo-imt_carta_conducao-foi-emitida-na-china-e-tenho-residencia-desde-marco",
    "situacao": "imt_carta_conducao",
    "order": 479,
    "purpose": "eligibility",
    "pt": "Foi emitida na China e tenho residência desde março.",
    "en": "It was issued in China, and I have been resident since March.",
    "zhHans": "由中国签发，我从三月起在葡萄牙居住。",
    "zhHant": "由中國簽發，我從三月起在葡萄牙居住。"
  },
  {
    "id": "dialogo-imt_carta_conducao-a-lista-de-documentos-depende-do-pais-vamos-confirmar-o-seu-caso",
    "situacao": "imt_carta_conducao",
    "order": 480,
    "purpose": "documents",
    "pt": "A lista de documentos depende do país. Vamos confirmar o seu caso.",
    "en": "The document list depends on the country. Let us check your case.",
    "zhHans": "所需文件取决于签发国。我们先核对您的情况。",
    "zhHant": "所需文件視乎簽發國。我們先核對您的情況。"
  },
  {
    "id": "dialogo-imt_carta_conducao-tenho-a-carta-original-o-atestado-medico-e-o-titulo-de-residencia",
    "situacao": "imt_carta_conducao",
    "order": 481,
    "purpose": "documents",
    "pt": "Tenho a carta original, o atestado médico e o título de residência.",
    "en": "I have the original licence, medical certificate, and residence permit.",
    "zhHans": "我带了驾驶证原件、健康证明和居留证。",
    "zhHant": "我帶了駕駛執照正本、健康證明和居留證。"
  },
  {
    "id": "dialogo-imt_carta_conducao-pode-ainda-ser-necessaria-uma-declaracao-de-autenticidade-ou-traducao-certificada",
    "situacao": "imt_carta_conducao",
    "order": 482,
    "purpose": "documents",
    "pt": "Pode ainda ser necessária uma declaração de autenticidade ou tradução certificada.",
    "en": "A declaration of authenticity or certified translation may also be required.",
    "zhHans": "还可能需要真实性声明或认证翻译。",
    "zhHant": "還可能需要真實性聲明或核證翻譯。"
  },
  {
    "id": "dialogo-imt_carta_conducao-posso-entregar-tudo-online",
    "situacao": "imt_carta_conducao",
    "order": 483,
    "purpose": "submission",
    "pt": "Posso entregar tudo online?",
    "en": "Can I submit everything online?",
    "zhHans": "可以全部在线提交吗？",
    "zhHant": "可以全部網上提交嗎？"
  },
  {
    "id": "dialogo-imt_carta_conducao-o-pedido-comeca-no-formulario-online-siga-depois-as-instrucoes-do-imt",
    "situacao": "imt_carta_conducao",
    "order": 484,
    "purpose": "submission",
    "pt": "O pedido começa no formulário online; siga depois as instruções do IMT.",
    "en": "The application starts with the online form; then follow the IMT instructions.",
    "zhHans": "申请从在线表格开始，之后请按IMT的指示办理。",
    "zhHant": "申請由網上表格開始，之後請按IMT的指示辦理。"
  },
  {
    "id": "dialogo-imt_carta_conducao-qual-e-o-custo-e-como-faco-o-pagamento",
    "situacao": "imt_carta_conducao",
    "order": 485,
    "purpose": "cost",
    "pt": "Qual é o custo e como faço o pagamento?",
    "en": "What does it cost, and how do I pay?",
    "zhHans": "费用是多少？如何付款？",
    "zhHant": "費用是多少？如何付款？"
  },
  {
    "id": "dialogo-imt_carta_conducao-a-taxa-base-aparece-no-pedido-guarde-a-referencia-para-acompanhar-o-processo",
    "situacao": "imt_carta_conducao",
    "order": 486,
    "purpose": "tracking",
    "pt": "A taxa base aparece no pedido. Guarde a referência para acompanhar o processo.",
    "en": "The base fee appears in the application. Keep the reference to track the process.",
    "zhHans": "基本费用会显示在申请中。请保存编号以查询进度。",
    "zhHant": "基本費用會顯示在申請中。請保留編號以查詢進度。"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-bom-dia-quero-transcrever-um-casamento-celebrado-no-estrangeiro",
    "situacao": "conservatoria_registo_civil",
    "order": 487,
    "purpose": "opening",
    "pt": "Bom dia. Quero transcrever um casamento celebrado no estrangeiro.",
    "en": "Good morning. I want to register a marriage celebrated abroad.",
    "zhHans": "早上好。我想登记在国外缔结的婚姻。",
    "zhHant": "早晨。我想登記在外國締結的婚姻。"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-uma-das-pessoas-do-casal-tem-nacionalidade-portuguesa",
    "situacao": "conservatoria_registo_civil",
    "order": 488,
    "purpose": "eligibility",
    "pt": "Uma das pessoas do casal tem nacionalidade portuguesa?",
    "en": "Is either spouse a Portuguese national?",
    "zhHans": "夫妻中有一方是葡萄牙公民吗？",
    "zhHant": "夫妻中有一方是葡萄牙公民嗎？"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-sim-eu-sou-portuguesa-e-o-casamento-foi-celebrado-em-xangai",
    "situacao": "conservatoria_registo_civil",
    "order": 489,
    "purpose": "eligibility",
    "pt": "Sim, eu sou portuguesa e o casamento foi celebrado em Xangai.",
    "en": "Yes, I am Portuguese, and the marriage was celebrated in Shanghai.",
    "zhHans": "是的，我是葡萄牙公民，婚姻在上海登记。",
    "zhHant": "是的，我是葡萄牙公民，婚姻在上海登記。"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-precisa-da-certidao-de-casamento-e-dos-documentos-de-identificacao-do-casal",
    "situacao": "conservatoria_registo_civil",
    "order": 490,
    "purpose": "documents",
    "pt": "Precisa da certidão de casamento e dos documentos de identificação do casal.",
    "en": "You need the marriage certificate and both spouses' identity documents.",
    "zhHans": "需要结婚证明和夫妻双方的身份证件。",
    "zhHant": "需要結婚證明書和夫妻雙方的身份證明文件。"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-o-meu-marido-estrangeiro-tambem-precisa-da-certidao-de-nascimento",
    "situacao": "conservatoria_registo_civil",
    "order": 491,
    "purpose": "documents",
    "pt": "O meu marido estrangeiro também precisa da certidão de nascimento?",
    "en": "Does my foreign husband also need his birth certificate?",
    "zhHans": "我的外籍丈夫也需要出生证明吗？",
    "zhHant": "我的外籍丈夫也需要出生證明書嗎？"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-sim-traga-a-e-indique-se-existe-convencao-antenupcial",
    "situacao": "conservatoria_registo_civil",
    "order": 492,
    "purpose": "documents",
    "pt": "Sim. Traga-a e indique se existe convenção antenupcial.",
    "en": "Yes. Bring it and state whether there is a prenuptial agreement.",
    "zhHans": "需要。请带上，并说明是否有婚前协议。",
    "zhHant": "需要。請帶同，並說明是否有婚前協議。"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-a-certidao-chinesa-tem-de-ser-legalizada-e-traduzida",
    "situacao": "conservatoria_registo_civil",
    "order": 493,
    "purpose": "legalisation",
    "pt": "A certidão chinesa tem de ser legalizada e traduzida?",
    "en": "Must the Chinese certificate be legalised and translated?",
    "zhHans": "中国证明需要认证和翻译吗？",
    "zhHant": "中國證明書需要認證和翻譯嗎？"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-vamos-verificar-a-legalizacao-e-se-a-traducao-certificada-e-necessaria",
    "situacao": "conservatoria_registo_civil",
    "order": 494,
    "purpose": "legalisation",
    "pt": "Vamos verificar a legalização e se a tradução certificada é necessária.",
    "en": "We will check the legalisation and whether a certified translation is required.",
    "zhHans": "我们会核查认证要求以及是否需要认证翻译。",
    "zhHant": "我們會核查認證要求以及是否需要核證翻譯。"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-quanto-tempo-demora-e-como-sei-que-ficou-concluido",
    "situacao": "conservatoria_registo_civil",
    "order": 495,
    "purpose": "timing",
    "pt": "Quanto tempo demora e como sei que ficou concluído?",
    "en": "How long does it take, and how will I know it is complete?",
    "zhHans": "需要多长时间？我怎样知道手续已完成？",
    "zhHant": "需要多長時間？我怎樣知道手續已完成？"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-guarde-a-referencia-do-processo-o-servico-contacta-a-se-faltar-algum-documento",
    "situacao": "conservatoria_registo_civil",
    "order": 496,
    "purpose": "tracking",
    "pt": "Guarde a referência do processo; o serviço contacta-a se faltar algum documento.",
    "en": "Keep the case reference; the office will contact you if a document is missing.",
    "zhHans": "请保存申请编号；如缺少文件，登记处会联系您。",
    "zhHant": "請保留申請編號；如欠缺文件，登記處會聯絡您。"
  },
  {
    "id": "dialogo-camara_municipal-bom-dia-quero-comunicar-um-buraco-perigoso-no-passeio",
    "situacao": "camara_municipal",
    "order": 497,
    "purpose": "opening",
    "pt": "Bom dia. Quero comunicar um buraco perigoso no passeio.",
    "en": "Good morning. I want to report a dangerous hole in the pavement.",
    "zhHans": "早上好。我想报告人行道上一个危险的坑。",
    "zhHant": "早晨。我想報告行人路上一個危險的坑。"
  },
  {
    "id": "dialogo-camara_municipal-pode-indicar-a-rua-e-o-numero-de-porta-mais-proximo",
    "situacao": "camara_municipal",
    "order": 498,
    "purpose": "details",
    "pt": "Pode indicar a rua e o número de porta mais próximo?",
    "en": "Can you give the street and nearest door number?",
    "zhHans": "可以提供街道和最近的门牌号吗？",
    "zhHant": "可以提供街道和最近的門牌號碼嗎？"
  },
  {
    "id": "dialogo-camara_municipal-e-na-rua-das-flores-em-frente-ao-numero-vinte",
    "situacao": "camara_municipal",
    "order": 499,
    "purpose": "details",
    "pt": "É na Rua das Flores, em frente ao número vinte.",
    "en": "It is on Rua das Flores, opposite number twenty.",
    "zhHans": "在花街二十号对面。",
    "zhHant": "在花街二十號對面。"
  },
  {
    "id": "dialogo-camara_municipal-tem-uma-fotografia-que-mostre-o-problema",
    "situacao": "camara_municipal",
    "order": 500,
    "purpose": "evidence",
    "pt": "Tem uma fotografia que mostre o problema?",
    "en": "Do you have a photograph showing the problem?",
    "zhHans": "您有显示问题的照片吗？",
    "zhHant": "您有顯示問題的相片嗎？"
  },
  {
    "id": "dialogo-camara_municipal-sim-posso-anexa-la-ao-pedido",
    "situacao": "camara_municipal",
    "order": 501,
    "purpose": "evidence",
    "pt": "Sim. Posso anexá-la ao pedido.",
    "en": "Yes. I can attach it to the report.",
    "zhHans": "有。我可以把照片附在报告中。",
    "zhHant": "有。我可以把相片附在報告中。"
  },
  {
    "id": "dialogo-camara_municipal-pode-submeter-no-portal-do-municipio-ou-deixa-la-aqui-no-atendimento",
    "situacao": "camara_municipal",
    "order": 502,
    "purpose": "submission",
    "pt": "Pode submeter no portal do município ou deixá-la aqui no atendimento.",
    "en": "You can submit it on the municipal portal or leave it here at the service desk.",
    "zhHans": "可以在市政府网站提交，也可以在这里办理。",
    "zhHant": "可以在市政府網站提交，也可以在這裡辦理。"
  },
  {
    "id": "dialogo-camara_municipal-ha-risco-de-alguem-cair-pode-ser-tratado-como-urgente",
    "situacao": "camara_municipal",
    "order": 503,
    "purpose": "priority",
    "pt": "Há risco de alguém cair. Pode ser tratado como urgente?",
    "en": "Someone could fall. Can it be treated as urgent?",
    "zhHans": "有人可能摔倒。可以按紧急情况处理吗？",
    "zhHant": "有人可能跌倒。可以按緊急情況處理嗎？"
  },
  {
    "id": "dialogo-camara_municipal-vou-assinalar-o-risco-a-equipa-responsavel",
    "situacao": "camara_municipal",
    "order": 504,
    "purpose": "priority",
    "pt": "Vou assinalar o risco à equipa responsável.",
    "en": "I will flag the risk to the responsible team.",
    "zhHans": "我会向负责部门标明这一风险。",
    "zhHant": "我會向負責部門標明這項風險。"
  },
  {
    "id": "dialogo-camara_municipal-pode-dar-me-o-numero-da-ocorrencia",
    "situacao": "camara_municipal",
    "order": 505,
    "purpose": "tracking",
    "pt": "Pode dar-me o número da ocorrência?",
    "en": "Can you give me the report reference number?",
    "zhHans": "可以给我报告编号吗？",
    "zhHant": "可以給我報告編號嗎？"
  },
  {
    "id": "dialogo-camara_municipal-sim-com-este-numero-pode-acompanhar-a-resposta-do-municipio",
    "situacao": "camara_municipal",
    "order": 506,
    "purpose": "tracking",
    "pt": "Sim. Com este número pode acompanhar a resposta do município.",
    "en": "Yes. You can use this number to follow the council's response.",
    "zhHans": "可以。您可以用这个编号查询市政府的处理进度。",
    "zhHant": "可以。您可以用這個編號查詢市政府的處理進度。"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-bom-dia-quero-pedir-o-reconhecimento-do-meu-diploma-estrangeiro",
    "situacao": "reconhecimento_diplomas",
    "order": 507,
    "purpose": "opening",
    "pt": "Bom dia. Quero pedir o reconhecimento do meu diploma estrangeiro.",
    "en": "Good morning. I want to apply for recognition of my foreign diploma.",
    "zhHans": "早上好。我想申请外国文凭认可。",
    "zhHant": "早晨。我想申請外國文憑認可。"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-precisa-apenas-do-grau-ou-tambem-do-curso-e-da-area-cientifica",
    "situacao": "reconhecimento_diplomas",
    "order": 508,
    "purpose": "route",
    "pt": "Precisa apenas do grau ou também do curso e da área científica?",
    "en": "Do you need only the degree level, or also the course and subject area?",
    "zhHans": "您只需要认可学位等级，还是还要认可专业和学科领域？",
    "zhHant": "您只需要認可學位級別，還是也要認可課程和學科範疇？"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-preciso-que-o-meu-mestrado-em-engenharia-seja-reconhecido-nessa-area",
    "situacao": "reconhecimento_diplomas",
    "order": 509,
    "purpose": "route",
    "pt": "Preciso que o meu mestrado em engenharia seja reconhecido nessa área.",
    "en": "I need my master's in engineering recognised in that subject area.",
    "zhHans": "我需要工程学硕士在该专业领域获得认可。",
    "zhHant": "我需要工程學碩士在該專業範疇獲得認可。"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-nesse-caso-verifique-o-reconhecimento-especifico-o-automatico-so-se-aplica-a-diplomas-da-lista",
    "situacao": "reconhecimento_diplomas",
    "order": 510,
    "purpose": "route",
    "pt": "Nesse caso, verifique o reconhecimento específico; o automático só se aplica a diplomas da lista.",
    "en": "In that case, check specific recognition; automatic recognition only applies to listed diplomas.",
    "zhHans": "这种情况请查看专业认可；自动认可只适用于名单内的文凭。",
    "zhHant": "這種情況請查看特定認可；自動認可只適用於名單內的文憑。"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-o-pedido-e-entregue-diretamente-na-universidade",
    "situacao": "reconhecimento_diplomas",
    "order": 511,
    "purpose": "submission",
    "pt": "O pedido é entregue diretamente na universidade?",
    "en": "Is the application submitted directly to the university?",
    "zhHans": "申请要直接交给大学吗？",
    "zhHant": "申請要直接交給大學嗎？"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-e-submetido-no-formulario-online-onde-escolhe-a-instituicao-responsavel",
    "situacao": "reconhecimento_diplomas",
    "order": 512,
    "purpose": "submission",
    "pt": "É submetido no formulário online, onde escolhe a instituição responsável.",
    "en": "It is submitted through the online form, where you choose the responsible institution.",
    "zhHans": "请通过在线表格提交，并在表格中选择负责机构。",
    "zhHant": "請透過網上表格提交，並在表格中選擇負責機構。"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-vou-anexar-o-diploma-e-o-certificado-com-disciplinas-e-notas",
    "situacao": "reconhecimento_diplomas",
    "order": 513,
    "purpose": "documents",
    "pt": "Vou anexar o diploma e o certificado com disciplinas e notas.",
    "en": "I will attach the diploma and transcript with subjects and grades.",
    "zhHans": "我会上传文凭及载有课程和成绩的成绩单。",
    "zhHant": "我會上載文憑及載有科目和成績的成績單。"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-confirme-tambem-as-regras-de-autenticacao-e-traducao-dos-documentos",
    "situacao": "reconhecimento_diplomas",
    "order": 514,
    "purpose": "documents",
    "pt": "Confirme também as regras de autenticação e tradução dos documentos.",
    "en": "Also check the authentication and translation rules for the documents.",
    "zhHans": "还请确认文件认证和翻译要求。",
    "zhHant": "還請確認文件認證和翻譯要求。"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-o-preco-e-o-prazo-sao-iguais-para-todos-os-tipos",
    "situacao": "reconhecimento_diplomas",
    "order": 515,
    "purpose": "cost",
    "pt": "O preço e o prazo são iguais para todos os tipos?",
    "en": "Are the price and deadline the same for every type?",
    "zhHans": "所有认可类型的费用和期限都一样吗？",
    "zhHant": "所有認可類型的費用和期限都一樣嗎？"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-nao-dependem-do-tipo-e-da-instituicao-o-prazo-conta-apos-o-processo-estar-completo",
    "situacao": "reconhecimento_diplomas",
    "order": 516,
    "purpose": "timing",
    "pt": "Não. Dependem do tipo e da instituição; o prazo conta após o processo estar completo.",
    "en": "No. They depend on the type and institution; the deadline starts once the file is complete.",
    "zhHans": "不一样，取决于认可类型和机构；期限从材料齐全后开始计算。",
    "zhHant": "不一樣，視乎認可類型和機構；期限由文件齊全後開始計算。"
  },
  {
    "id": "dialogo-consulado_documentos-bom-dia-preciso-de-fazer-uma-procuracao-para-usar-em-portugal",
    "situacao": "consulado_documentos",
    "order": 517,
    "purpose": "opening",
    "pt": "Bom dia. Preciso de fazer uma procuração para usar em Portugal.",
    "en": "Good morning. I need to make a power of attorney for use in Portugal.",
    "zhHans": "早上好。我需要办理一份在葡萄牙使用的授权书。",
    "zhHant": "早晨。我需要辦理一份在葡萄牙使用的授權書。"
  },
  {
    "id": "dialogo-consulado_documentos-ja-marcou-atendimento-no-portal-consular",
    "situacao": "consulado_documentos",
    "order": 518,
    "purpose": "appointment",
    "pt": "Já marcou atendimento no portal consular?",
    "en": "Have you booked an appointment on the consular portal?",
    "zhHans": "您已经在领事服务网站预约了吗？",
    "zhHant": "您已經在領事服務網站預約了嗎？"
  },
  {
    "id": "dialogo-consulado_documentos-sim-queria-confirmar-o-que-tenho-de-levar",
    "situacao": "consulado_documentos",
    "order": 519,
    "purpose": "appointment",
    "pt": "Sim. Queria confirmar o que tenho de levar.",
    "en": "Yes. I would like to confirm what I must bring.",
    "zhHans": "预约了。我想确认需要带什么。",
    "zhHant": "預約了。我想確認需要帶甚麼。"
  },
  {
    "id": "dialogo-consulado_documentos-traga-o-passaporte-valido-e-o-texto-da-procuracao",
    "situacao": "consulado_documentos",
    "order": 520,
    "purpose": "documents",
    "pt": "Traga o passaporte válido e o texto da procuração.",
    "en": "Bring your valid passport and the power-of-attorney text.",
    "zhHans": "请带有效护照和授权书文本。",
    "zhHant": "請帶有效護照和授權書文本。"
  },
  {
    "id": "dialogo-consulado_documentos-posso-trazer-o-documento-ja-assinado",
    "situacao": "consulado_documentos",
    "order": 521,
    "purpose": "signature",
    "pt": "Posso trazer o documento já assinado?",
    "en": "Can I bring the document already signed?",
    "zhHans": "可以把已经签好的文件带来吗？",
    "zhHant": "可以把已經簽署的文件帶來嗎？"
  },
  {
    "id": "dialogo-consulado_documentos-nao-deve-assinar-perante-o-funcionario-consular",
    "situacao": "consulado_documentos",
    "order": 522,
    "purpose": "signature",
    "pt": "Não. Deve assinar perante o funcionário consular.",
    "en": "No. You must sign in front of the consular officer.",
    "zhHans": "不可以。您必须在领事工作人员面前签字。",
    "zhHant": "不可以。您必須在領事職員面前簽署。"
  },
  {
    "id": "dialogo-consulado_documentos-quanto-custa-e-que-meios-de-pagamento-aceitam",
    "situacao": "consulado_documentos",
    "order": 523,
    "purpose": "cost",
    "pt": "Quanto custa e que meios de pagamento aceitam?",
    "en": "How much does it cost, and which payment methods do you accept?",
    "zhHans": "费用是多少？接受哪些付款方式？",
    "zhHant": "費用是多少？接受哪些付款方式？"
  },
  {
    "id": "dialogo-consulado_documentos-o-valor-e-o-pagamento-dependem-do-posto-confirme-na-tabela-consular",
    "situacao": "consulado_documentos",
    "order": 524,
    "purpose": "cost",
    "pt": "O valor e o pagamento dependem do posto; confirme na tabela consular.",
    "en": "The fee and payment method depend on the post; check the consular fee table.",
    "zhHans": "费用和付款方式因领事机构而异，请查看领事收费表。",
    "zhHant": "費用和付款方式視乎領事機構，請查看領事收費表。"
  },
  {
    "id": "dialogo-consulado_documentos-o-documento-fica-pronto-no-proprio-dia",
    "situacao": "consulado_documentos",
    "order": 525,
    "purpose": "collection",
    "pt": "O documento fica pronto no próprio dia?",
    "en": "Will the document be ready the same day?",
    "zhHans": "文件当天能办好吗？",
    "zhHant": "文件當天能辦妥嗎？"
  },
  {
    "id": "dialogo-consulado_documentos-confirmaremos-o-prazo-quando-verificarmos-o-documento",
    "situacao": "consulado_documentos",
    "order": 526,
    "purpose": "timing",
    "pt": "Confirmaremos o prazo quando verificarmos o documento.",
    "en": "We will confirm the timeframe after checking the document.",
    "zhHans": "核查文件后，我们会确认办理时间。",
    "zhHant": "核查文件後，我們會確認辦理時間。"
  },
  {
    "id": "dialogo-correios-passado-esse-prazo-a-encomenda-regressa-a-loja-dos-ctt",
    "situacao": "correios",
    "order": 527,
    "purpose": "expanded real-world coverage",
    "pt": "Passado esse prazo, a encomenda regressa à loja dos CTT.",
    "en": "After that deadline, the parcel returns to the CTT post office.",
    "zhHans": "超过期限后，包裹会退回 CTT 邮局。",
    "zhHant": "超過期限後，包裹會退回 CTT 郵局。"
  },
  {
    "id": "dialogo-espaco_cidadao-tambem-preciso-de-alterar-a-morada-do-cartao-de-cidadao",
    "situacao": "espaco_cidadao",
    "order": 528,
    "purpose": "expanded real-world coverage",
    "pt": "Também preciso de alterar a morada do Cartão de Cidadão.",
    "en": "I also need to change the address on my Citizen Card.",
    "zhHans": "我还需要更改公民卡上的地址。",
    "zhHant": "我還需要更改公民證上的地址。"
  },
  {
    "id": "dialogo-espaco_cidadao-tem-consigo-os-codigos-pin-e-um-comprovativo-da-nova-morada",
    "situacao": "espaco_cidadao",
    "order": 529,
    "purpose": "expanded real-world coverage",
    "pt": "Tem consigo os códigos PIN e um comprovativo da nova morada?",
    "en": "Do you have the PIN codes and proof of the new address with you?",
    "zhHans": "您带了 PIN 码和新地址证明吗？",
    "zhHant": "您帶了 PIN 碼和新地址證明嗎？"
  },
  {
    "id": "dialogo-espaco_cidadao-tenho-os-codigos-mas-o-contrato-da-casa-esta-no-nome-da-minha-mulher",
    "situacao": "espaco_cidadao",
    "order": 530,
    "purpose": "expanded real-world coverage",
    "pt": "Tenho os códigos, mas o contrato da casa está no nome da minha mulher.",
    "en": "I have the codes, but the tenancy agreement is in my wife's name.",
    "zhHans": "我有 PIN 码，但租房合同是我妻子的名字。",
    "zhHant": "我有 PIN 碼，但租約是我妻子的名字。"
  },
  {
    "id": "dialogo-espaco_cidadao-pode-apresentar-o-contrato-e-uma-declaracao-assinada-por-ela",
    "situacao": "espaco_cidadao",
    "order": 531,
    "purpose": "expanded real-world coverage",
    "pt": "Pode apresentar o contrato e uma declaração assinada por ela.",
    "en": "You can present the agreement and a declaration signed by her.",
    "zhHans": "您可以提交合同和她签署的声明。",
    "zhHant": "您可以提交租約和她簽署的聲明。"
  },
  {
    "id": "dialogo-espaco_cidadao-a-alteracao-fica-concluida-hoje",
    "situacao": "espaco_cidadao",
    "order": 532,
    "purpose": "expanded real-world coverage",
    "pt": "A alteração fica concluída hoje?",
    "en": "Will the change be completed today?",
    "zhHans": "今天能完成更改吗？",
    "zhHant": "今天能完成更改嗎？"
  },
  {
    "id": "dialogo-espaco_cidadao-primeiro-recebe-uma-carta-com-um-codigo-de-confirmacao-na-nova-morada",
    "situacao": "espaco_cidadao",
    "order": 533,
    "purpose": "expanded real-world coverage",
    "pt": "Primeiro recebe uma carta com um código de confirmação na nova morada.",
    "en": "First, you will receive a letter with a confirmation code at the new address.",
    "zhHans": "您会先在新地址收到一封带确认码的信。",
    "zhHant": "您會先在新地址收到一封附有確認碼的信。"
  },
  {
    "id": "dialogo-espaco_cidadao-posso-confirmar-o-codigo-aqui-no-balcao",
    "situacao": "espaco_cidadao",
    "order": 534,
    "purpose": "expanded real-world coverage",
    "pt": "Posso confirmar o código aqui no balcão?",
    "en": "Can I confirm the code here at the service desk?",
    "zhHans": "我可以在这里的服务台确认吗？",
    "zhHant": "我可以在這裡的服務櫃位確認嗎？"
  },
  {
    "id": "dialogo-espaco_cidadao-sim-ou-pela-internet-dentro-do-prazo-indicado-na-carta",
    "situacao": "espaco_cidadao",
    "order": 535,
    "purpose": "expanded real-world coverage",
    "pt": "Sim, ou pela internet, dentro do prazo indicado na carta.",
    "en": "Yes, or online, within the deadline stated in the letter.",
    "zhHans": "可以，也可以在信中注明的期限内在线确认。",
    "zhHant": "可以，也可以在信中註明的期限內網上確認。"
  },
  {
    "id": "dialogo-espaco_cidadao-e-se-a-carta-nao-chegar",
    "situacao": "espaco_cidadao",
    "order": 536,
    "purpose": "expanded real-world coverage",
    "pt": "E se a carta não chegar?",
    "en": "What if the letter does not arrive?",
    "zhHans": "如果信没有寄到怎么办？",
    "zhHant": "如果信沒有寄到怎麼辦？"
  },
  {
    "id": "dialogo-espaco_cidadao-volte-ao-balcao-para-verificarmos-a-morada-e-pedirmos-um-novo-codigo",
    "situacao": "espaco_cidadao",
    "order": 537,
    "purpose": "expanded real-world coverage",
    "pt": "Volte ao balcão para verificarmos a morada e pedirmos um novo código.",
    "en": "Come back to the desk so we can check the address and request a new code.",
    "zhHans": "请回到服务台，我们会核对地址并申请新代码。",
    "zhHant": "請回到服務櫃位，我們會核對地址並申請新代碼。"
  },
  {
    "id": "dialogo-imt_carta_conducao-a-minha-carta-portuguesa-caduca-no-proximo-mes",
    "situacao": "imt_carta_conducao",
    "order": 538,
    "purpose": "expanded real-world coverage",
    "pt": "A minha carta portuguesa caduca no próximo mês.",
    "en": "My Portuguese driving licence expires next month.",
    "zhHans": "我的葡萄牙驾驶证下个月到期。",
    "zhHant": "我的葡萄牙駕駛執照下個月到期。"
  },
  {
    "id": "dialogo-imt_carta_conducao-pode-pedir-a-renovacao-nos-seis-meses-anteriores-a-data-de-validade",
    "situacao": "imt_carta_conducao",
    "order": 539,
    "purpose": "expanded real-world coverage",
    "pt": "Pode pedir a renovação nos seis meses anteriores à data de validade.",
    "en": "You can request renewal during the six months before the expiry date.",
    "zhHans": "您可以在有效期届满前六个月内申请续期。",
    "zhHant": "您可以在有效期屆滿前六個月內申請續期。"
  },
  {
    "id": "dialogo-imt_carta_conducao-preciso-de-fazer-um-novo-atestado-medico",
    "situacao": "imt_carta_conducao",
    "order": 540,
    "purpose": "expanded real-world coverage",
    "pt": "Preciso de fazer um novo atestado médico?",
    "en": "Do I need a new medical certificate?",
    "zhHans": "我需要重新办理体检证明吗？",
    "zhHant": "我需要重新辦理醫療證明嗎？"
  },
  {
    "id": "dialogo-imt_carta_conducao-depende-da-sua-idade-e-das-categorias-da-carta",
    "situacao": "imt_carta_conducao",
    "order": 541,
    "purpose": "expanded real-world coverage",
    "pt": "Depende da sua idade e das categorias da carta.",
    "en": "It depends on your age and the licence categories.",
    "zhHans": "这取决于您的年龄和驾驶证类别。",
    "zhHant": "這取決於您的年齡和駕駛執照類別。"
  },
  {
    "id": "dialogo-imt_carta_conducao-mudei-de-morada-tenho-de-atualizar-a-carta",
    "situacao": "imt_carta_conducao",
    "order": 542,
    "purpose": "expanded real-world coverage",
    "pt": "Mudei de morada. Tenho de atualizar a carta?",
    "en": "I have changed address. Must I update the licence?",
    "zhHans": "我搬家了，需要更新驾驶证吗？",
    "zhHant": "我搬家了，需要更新駕駛執照嗎？"
  },
  {
    "id": "dialogo-imt_carta_conducao-a-morada-deve-estar-atualizada-nos-seus-dados-de-identificacao",
    "situacao": "imt_carta_conducao",
    "order": 543,
    "purpose": "expanded real-world coverage",
    "pt": "A morada deve estar atualizada nos seus dados de identificação.",
    "en": "Your address must be current in your identification records.",
    "zhHans": "您的身份资料中必须登记最新地址。",
    "zhHant": "您的身份資料中必須登記最新地址。"
  },
  {
    "id": "dialogo-imt_carta_conducao-enquanto-espero-posso-continuar-a-conduzir",
    "situacao": "imt_carta_conducao",
    "order": 544,
    "purpose": "expanded real-world coverage",
    "pt": "Enquanto espero, posso continuar a conduzir?",
    "en": "Can I keep driving while I wait?",
    "zhHans": "等待期间我可以继续驾驶吗？",
    "zhHant": "等候期間我可以繼續駕駛嗎？"
  },
  {
    "id": "dialogo-imt_carta_conducao-guarde-o-comprovativo-do-pedido-e-confirme-a-validade-indicada",
    "situacao": "imt_carta_conducao",
    "order": 545,
    "purpose": "expanded real-world coverage",
    "pt": "Guarde o comprovativo do pedido e confirme a validade indicada.",
    "en": "Keep the application receipt and check the validity shown on it.",
    "zhHans": "请保留申请凭证，并确认上面注明的有效期。",
    "zhHant": "請保留申請證明，並確認上面註明的有效期。"
  },
  {
    "id": "dialogo-imt_carta_conducao-como-recebo-a-nova-carta",
    "situacao": "imt_carta_conducao",
    "order": 546,
    "purpose": "expanded real-world coverage",
    "pt": "Como recebo a nova carta?",
    "en": "How will I receive the new licence?",
    "zhHans": "新驾驶证会怎样寄给我？",
    "zhHant": "新駕駛執照會怎樣寄給我？"
  },
  {
    "id": "dialogo-imt_carta_conducao-e-enviada-para-a-morada-registada-acompanhe-o-pedido-no-portal",
    "situacao": "imt_carta_conducao",
    "order": 547,
    "purpose": "expanded real-world coverage",
    "pt": "É enviada para a morada registada; acompanhe o pedido no portal.",
    "en": "It is sent to the registered address; track the application on the portal.",
    "zhHans": "会寄到登记地址；您可以在网站查询进度。",
    "zhHant": "會寄到登記地址；您可以在網站查詢進度。"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-queria-pedir-uma-certidao-de-nascimento-para-usar-no-estrangeiro",
    "situacao": "conservatoria_registo_civil",
    "order": 548,
    "purpose": "expanded real-world coverage",
    "pt": "Queria pedir uma certidão de nascimento para usar no estrangeiro.",
    "en": "I would like to request a birth certificate for use abroad.",
    "zhHans": "我想申请一份在国外使用的出生证明。",
    "zhHant": "我想申請一份在海外使用的出生證明書。"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-precisa-de-uma-certidao-narrativa-ou-de-copia-integral",
    "situacao": "conservatoria_registo_civil",
    "order": 549,
    "purpose": "expanded real-world coverage",
    "pt": "Precisa de uma certidão narrativa ou de cópia integral?",
    "en": "Do you need a standard certificate or a full-form copy?",
    "zhHans": "您需要叙述式证明还是完整副本？",
    "zhHant": "您需要敘述式證明書還是完整副本？"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-pediram-me-uma-copia-integral-com-apostila",
    "situacao": "conservatoria_registo_civil",
    "order": 550,
    "purpose": "expanded real-world coverage",
    "pt": "Pediram-me uma cópia integral com apostila.",
    "en": "They asked me for a full-form copy with an apostille.",
    "zhHans": "对方要求完整副本并附加海牙认证。",
    "zhHant": "對方要求完整副本並附加海牙認證。"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-a-certidao-e-pedida-aqui-a-apostila-e-tratada-pela-entidade-competente",
    "situacao": "conservatoria_registo_civil",
    "order": 551,
    "purpose": "expanded real-world coverage",
    "pt": "A certidão é pedida aqui; a apostila é tratada pela entidade competente.",
    "en": "The certificate is requested here; the apostille is handled by the competent authority.",
    "zhHans": "证明在这里申请；海牙认证由主管机构办理。",
    "zhHant": "證明書在這裡申請；海牙認證由主管機構辦理。"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-notei-que-o-apelido-da-minha-mae-esta-mal-escrito",
    "situacao": "conservatoria_registo_civil",
    "order": 552,
    "purpose": "expanded real-world coverage",
    "pt": "Notei que o apelido da minha mãe está mal escrito.",
    "en": "I noticed that my mother's surname is misspelled.",
    "zhHans": "我发现母亲的姓氏拼错了。",
    "zhHant": "我發現母親的姓氏拼錯了。"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-traga-um-documento-que-comprove-a-grafia-correta",
    "situacao": "conservatoria_registo_civil",
    "order": 553,
    "purpose": "expanded real-world coverage",
    "pt": "Traga um documento que comprove a grafia correta.",
    "en": "Bring a document proving the correct spelling.",
    "zhHans": "请带一份能证明正确写法的文件。",
    "zhHant": "請帶一份能證明正確寫法的文件。"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-posso-pedir-a-correcao-e-a-certidao-ao-mesmo-tempo",
    "situacao": "conservatoria_registo_civil",
    "order": 554,
    "purpose": "expanded real-world coverage",
    "pt": "Posso pedir a correção e a certidão ao mesmo tempo?",
    "en": "Can I request the correction and the certificate at the same time?",
    "zhHans": "我可以同时申请更正和证明吗？",
    "zhHant": "我可以同時申請更正和證明書嗎？"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-a-certidao-deve-ser-emitida-depois-de-a-correcao-ficar-registada",
    "situacao": "conservatoria_registo_civil",
    "order": 555,
    "purpose": "expanded real-world coverage",
    "pt": "A certidão deve ser emitida depois de a correção ficar registada.",
    "en": "The certificate should be issued after the correction is registered.",
    "zhHans": "证明应在更正登记完成后签发。",
    "zhHant": "證明書應在更正登記完成後簽發。"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-recebo-um-aviso-quando-estiver-pronta",
    "situacao": "conservatoria_registo_civil",
    "order": 556,
    "purpose": "expanded real-world coverage",
    "pt": "Recebo um aviso quando estiver pronta?",
    "en": "Will I be notified when it is ready?",
    "zhHans": "办好后会通知我吗？",
    "zhHant": "辦妥後會通知我嗎？"
  },
  {
    "id": "dialogo-conservatoria_registo_civil-sim-confirme-o-email-e-o-numero-de-telemovel-no-requerimento",
    "situacao": "conservatoria_registo_civil",
    "order": 557,
    "purpose": "expanded real-world coverage",
    "pt": "Sim. Confirme o email e o número de telemóvel no requerimento.",
    "en": "Yes. Confirm your email and mobile number on the application.",
    "zhHans": "会。请在申请表中确认邮箱和手机号码。",
    "zhHant": "會。請在申請表中確認電郵和手提電話號碼。"
  },
  {
    "id": "dialogo-camara_municipal-tambem-preciso-de-mandar-recolher-um-sofa-velho",
    "situacao": "camara_municipal",
    "order": 558,
    "purpose": "expanded real-world coverage",
    "pt": "Também preciso de mandar recolher um sofá velho.",
    "en": "I also need to arrange collection of an old sofa.",
    "zhHans": "我还需要预约回收一张旧沙发。",
    "zhHant": "我還需要預約回收一張舊梳化。"
  },
  {
    "id": "dialogo-camara_municipal-a-recolha-de-monos-e-marcada-pelo-telefone-ou-pelo-portal-municipal",
    "situacao": "camara_municipal",
    "order": 559,
    "purpose": "expanded real-world coverage",
    "pt": "A recolha de monos é marcada pelo telefone ou pelo portal municipal.",
    "en": "Bulky-waste collection is booked by phone or on the municipal portal.",
    "zhHans": "大件垃圾回收可通过电话或市政府网站预约。",
    "zhHant": "大型廢物回收可透過電話或市政府網站預約。"
  },
  {
    "id": "dialogo-camara_municipal-posso-deixa-lo-junto-aos-contentores-esta-noite",
    "situacao": "camara_municipal",
    "order": 560,
    "purpose": "expanded real-world coverage",
    "pt": "Posso deixá-lo junto aos contentores esta noite?",
    "en": "Can I leave it beside the bins tonight?",
    "zhHans": "今晚可以把它放在垃圾箱旁吗？",
    "zhHant": "今晚可以把它放在垃圾箱旁嗎？"
  },
  {
    "id": "dialogo-camara_municipal-so-depois-de-receber-a-data-e-as-instrucoes-da-recolha",
    "situacao": "camara_municipal",
    "order": 561,
    "purpose": "expanded real-world coverage",
    "pt": "Só depois de receber a data e as instruções da recolha.",
    "en": "Only after you receive the collection date and instructions.",
    "zhHans": "请先等到收到回收日期和指示后再放。",
    "zhHant": "請先等到收到回收日期和指示後再放。"
  },
  {
    "id": "dialogo-camara_municipal-ha-algum-custo-para-uma-recolha-domestica",
    "situacao": "camara_municipal",
    "order": 562,
    "purpose": "expanded real-world coverage",
    "pt": "Há algum custo para uma recolha doméstica?",
    "en": "Is there a fee for a household collection?",
    "zhHans": "家庭大件垃圾回收收费吗？",
    "zhHant": "家居大型廢物回收收費嗎？"
  },
  {
    "id": "dialogo-camara_municipal-consulte-as-condicoes-do-seu-municipio-quando-fizer-a-marcacao",
    "situacao": "camara_municipal",
    "order": 563,
    "purpose": "expanded real-world coverage",
    "pt": "Consulte as condições do seu município quando fizer a marcação.",
    "en": "Check your municipality's conditions when you book.",
    "zhHans": "预约时请查看您所在市政府的规定。",
    "zhHant": "預約時請查看您所屬市政府的規定。"
  },
  {
    "id": "dialogo-camara_municipal-quero-ainda-comunicar-barulho-de-obras-fora-do-horario",
    "situacao": "camara_municipal",
    "order": 564,
    "purpose": "expanded real-world coverage",
    "pt": "Quero ainda comunicar barulho de obras fora do horário.",
    "en": "I also want to report building noise outside permitted hours.",
    "zhHans": "我还想投诉非施工时段的装修噪音。",
    "zhHant": "我還想投訴非施工時段的裝修噪音。"
  },
  {
    "id": "dialogo-camara_municipal-registe-os-dias-as-horas-e-a-morada-onde-ocorre-o-ruido",
    "situacao": "camara_municipal",
    "order": 565,
    "purpose": "expanded real-world coverage",
    "pt": "Registe os dias, as horas e a morada onde ocorre o ruído.",
    "en": "Record the dates, times, and address where the noise occurs.",
    "zhHans": "请记录噪音发生的日期、时间和地址。",
    "zhHant": "請記錄噪音發生的日期、時間和地址。"
  },
  {
    "id": "dialogo-camara_municipal-a-situacao-acontece-quase-todas-as-noites",
    "situacao": "camara_municipal",
    "order": 566,
    "purpose": "expanded real-world coverage",
    "pt": "A situação acontece quase todas as noites.",
    "en": "It happens almost every night.",
    "zhHans": "这种情况几乎每晚都发生。",
    "zhHant": "這種情況幾乎每晚都發生。"
  },
  {
    "id": "dialogo-camara_municipal-se-estiver-a-acontecer-agora-contacte-tambem-as-autoridades-policiais",
    "situacao": "camara_municipal",
    "order": 567,
    "purpose": "expanded real-world coverage",
    "pt": "Se estiver a acontecer agora, contacte também as autoridades policiais.",
    "en": "If it is happening now, also contact the police authorities.",
    "zhHans": "如果现在正在发生，也请联系警方。",
    "zhHant": "如果現在正在發生，也請聯絡警方。"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-a-minha-profissao-e-regulamentada-em-portugal",
    "situacao": "reconhecimento_diplomas",
    "order": 568,
    "purpose": "expanded real-world coverage",
    "pt": "A minha profissão é regulamentada em Portugal?",
    "en": "Is my profession regulated in Portugal?",
    "zhHans": "我的职业在葡萄牙属于受监管职业吗？",
    "zhHant": "我的職業在葡萄牙屬於受規管職業嗎？"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-consulte-a-autoridade-competente-antes-de-escolher-o-tipo-de-reconhecimento",
    "situacao": "reconhecimento_diplomas",
    "order": 569,
    "purpose": "expanded real-world coverage",
    "pt": "Consulte a autoridade competente antes de escolher o tipo de reconhecimento.",
    "en": "Check with the competent authority before choosing the recognition type.",
    "zhHans": "选择认可类型前，请先咨询主管机构。",
    "zhHant": "選擇認可類型前，請先向主管機構查詢。"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-os-meus-documentos-estao-em-ingles-preciso-de-traducao",
    "situacao": "reconhecimento_diplomas",
    "order": 570,
    "purpose": "expanded real-world coverage",
    "pt": "Os meus documentos estão em inglês. Preciso de tradução?",
    "en": "My documents are in English. Do I need a translation?",
    "zhHans": "我的文件是英文的，需要翻译吗？",
    "zhHant": "我的文件是英文的，需要翻譯嗎？"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-confirme-as-regras-da-instituicao-que-vai-analisar-o-pedido",
    "situacao": "reconhecimento_diplomas",
    "order": 571,
    "purpose": "expanded real-world coverage",
    "pt": "Confirme as regras da instituição que vai analisar o pedido.",
    "en": "Check the rules of the institution that will assess the application.",
    "zhHans": "请确认负责审核申请的机构要求。",
    "zhHant": "請確認負責審核申請的院校規定。"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-o-portal-da-erro-quando-tento-anexar-o-certificado",
    "situacao": "reconhecimento_diplomas",
    "order": 572,
    "purpose": "expanded real-world coverage",
    "pt": "O portal dá erro quando tento anexar o certificado.",
    "en": "The portal shows an error when I try to attach the transcript.",
    "zhHans": "我上传成绩单时网站报错。",
    "zhHant": "我上載成績單時網站出錯。"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-verifique-o-formato-e-o-tamanho-do-ficheiro-antes-de-tentar-novamente",
    "situacao": "reconhecimento_diplomas",
    "order": 573,
    "purpose": "expanded real-world coverage",
    "pt": "Verifique o formato e o tamanho do ficheiro antes de tentar novamente.",
    "en": "Check the file format and size before trying again.",
    "zhHans": "重新尝试前，请检查文件格式和大小。",
    "zhHant": "再次嘗試前，請檢查檔案格式和大小。"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-ja-submeti-o-pedido-mas-falta-uma-disciplina-no-certificado",
    "situacao": "reconhecimento_diplomas",
    "order": 574,
    "purpose": "expanded real-world coverage",
    "pt": "Já submeti o pedido, mas falta uma disciplina no certificado.",
    "en": "I have submitted the application, but one subject is missing from the transcript.",
    "zhHans": "我已经提交申请，但成绩单上少了一门课程。",
    "zhHant": "我已經提交申請，但成績單上欠了一門科目。"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-contacte-a-instituicao-e-indique-a-referencia-antes-de-enviar-outro-ficheiro",
    "situacao": "reconhecimento_diplomas",
    "order": 575,
    "purpose": "expanded real-world coverage",
    "pt": "Contacte a instituição e indique a referência antes de enviar outro ficheiro.",
    "en": "Contact the institution and give the reference before sending another file.",
    "zhHans": "发送新文件前，请联系机构并提供申请编号。",
    "zhHant": "傳送新檔案前，請聯絡院校並提供申請編號。"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-tambem-posso-pedir-a-conversao-da-classificacao-final",
    "situacao": "reconhecimento_diplomas",
    "order": 576,
    "purpose": "expanded real-world coverage",
    "pt": "Também posso pedir a conversão da classificação final?",
    "en": "Can I also request conversion of the final grade?",
    "zhHans": "我也可以申请最终成绩换算吗？",
    "zhHant": "我也可以申請最終成績換算嗎？"
  },
  {
    "id": "dialogo-reconhecimento_diplomas-sim-mas-confirme-se-esse-servico-esta-incluido-no-pedido-escolhido",
    "situacao": "reconhecimento_diplomas",
    "order": 577,
    "purpose": "expanded real-world coverage",
    "pt": "Sim, mas confirme se esse serviço está incluído no pedido escolhido.",
    "en": "Yes, but check whether that service is included in the chosen application.",
    "zhHans": "可以，但请确认所选申请是否包含这项服务。",
    "zhHant": "可以，但請確認所選申請是否包括這項服務。"
  },
  {
    "id": "dialogo-consulado_documentos-perdi-o-passaporte-e-tenho-uma-viagem-marcada-para-sexta-feira",
    "situacao": "consulado_documentos",
    "order": 578,
    "purpose": "expanded real-world coverage",
    "pt": "Perdi o passaporte e tenho uma viagem marcada para sexta-feira.",
    "en": "I lost my passport and have a trip booked for Friday.",
    "zhHans": "我丢了护照，星期五有行程。",
    "zhHant": "我遺失了護照，星期五有行程。"
  },
  {
    "id": "dialogo-consulado_documentos-ja-apresentou-a-denuncia-na-policia-local",
    "situacao": "consulado_documentos",
    "order": 579,
    "purpose": "expanded real-world coverage",
    "pt": "Já apresentou a denúncia na polícia local?",
    "en": "Have you already filed a report with the local police?",
    "zhHans": "您已经向当地警方报案了吗？",
    "zhHant": "您已經向當地警方報案了嗎？"
  },
  {
    "id": "dialogo-consulado_documentos-sim-trouxe-a-participacao-e-uma-copia-do-passaporte",
    "situacao": "consulado_documentos",
    "order": 580,
    "purpose": "expanded real-world coverage",
    "pt": "Sim. Trouxe a participação e uma cópia do passaporte.",
    "en": "Yes. I brought the police report and a copy of the passport.",
    "zhHans": "报案了。我带了报案证明和护照复印件。",
    "zhHant": "報案了。我帶了報案證明和護照副本。"
  },
  {
    "id": "dialogo-consulado_documentos-vamos-avaliar-se-pode-ser-emitido-um-documento-de-viagem-de-emergencia",
    "situacao": "consulado_documentos",
    "order": 581,
    "purpose": "expanded real-world coverage",
    "pt": "Vamos avaliar se pode ser emitido um documento de viagem de emergência.",
    "en": "We will assess whether an emergency travel document can be issued.",
    "zhHans": "我们会评估能否签发紧急旅行证件。",
    "zhHant": "我們會評估能否簽發緊急旅行證件。"
  },
  {
    "id": "dialogo-consulado_documentos-esse-documento-serve-para-regressar-ao-meu-pais",
    "situacao": "consulado_documentos",
    "order": 582,
    "purpose": "expanded real-world coverage",
    "pt": "Esse documento serve para regressar ao meu país?",
    "en": "Can that document be used to return to my country?",
    "zhHans": "这份证件可以用来返回我的国家吗？",
    "zhHant": "這份證件可以用來返回我的國家嗎？"
  },
  {
    "id": "dialogo-consulado_documentos-a-validade-e-o-percurso-permitido-sao-explicados-quando-for-emitido",
    "situacao": "consulado_documentos",
    "order": 583,
    "purpose": "expanded real-world coverage",
    "pt": "A validade e o percurso permitido são explicados quando for emitido.",
    "en": "Its validity and permitted route will be explained when it is issued.",
    "zhHans": "签发时会说明有效期和允许的路线。",
    "zhHant": "簽發時會說明有效期和允許的路線。"
  },
  {
    "id": "dialogo-consulado_documentos-preciso-de-fotografias-e-de-outra-identificacao",
    "situacao": "consulado_documentos",
    "order": 584,
    "purpose": "expanded real-world coverage",
    "pt": "Preciso de fotografias e de outra identificação?",
    "en": "Do I need photographs and another form of identification?",
    "zhHans": "我需要照片和其他身份证明吗？",
    "zhHant": "我需要相片和其他身份證明嗎？"
  },
  {
    "id": "dialogo-consulado_documentos-traga-tudo-o-que-tiver-o-posto-confirma-os-documentos-necessarios",
    "situacao": "consulado_documentos",
    "order": 585,
    "purpose": "expanded real-world coverage",
    "pt": "Traga tudo o que tiver; o posto confirma os documentos necessários.",
    "en": "Bring everything you have; the consular post will confirm what is required.",
    "zhHans": "请带上所有现有材料；领事机构会确认所需文件。",
    "zhHant": "請帶備所有現有資料；領事機構會確認所需文件。"
  },
  {
    "id": "dialogo-consulado_documentos-posso-receber-o-documento-antes-da-viagem",
    "situacao": "consulado_documentos",
    "order": 586,
    "purpose": "expanded real-world coverage",
    "pt": "Posso receber o documento antes da viagem?",
    "en": "Can I receive the document before the trip?",
    "zhHans": "我能在出发前拿到证件吗？",
    "zhHant": "我能在出發前拿到證件嗎？"
  },
  {
    "id": "dialogo-consulado_documentos-vamos-registar-a-urgencia-mas-so-confirmamos-o-prazo-depois-da-analise",
    "situacao": "consulado_documentos",
    "order": 587,
    "purpose": "expanded real-world coverage",
    "pt": "Vamos registar a urgência, mas só confirmamos o prazo depois da análise.",
    "en": "We will record the urgency, but can only confirm the timing after assessment.",
    "zhHans": "我们会登记紧急情况，但只能在审核后确认时间。",
    "zhHant": "我們會登記緊急情況，但只能在審核後確認時間。"
  },
  {
    "id": "dialogo-arrendamento-faco-a-vistoria-consigo-e-envio-a-transferencia-depois-de-entregar-as-chaves",
    "situacao": "arrendamento",
    "order": 588,
    "purpose": "expanded real-world coverage",
    "pt": "Faço a vistoria consigo e envio a transferência depois de entregar as chaves.",
    "en": "I will inspect the property with you and transfer the deposit after you return the keys.",
    "zhHans": "我会和您一起验房，交还钥匙后转还押金。",
    "zhHant": "我會和您一起驗樓，交還鎖匙後轉還按金。"
  },
  {
    "id": "dialogo-transportes-obrigado-onde-posso-validar-antes-da-proxima-viagem",
    "situacao": "transportes",
    "order": 589,
    "purpose": "expanded real-world coverage",
    "pt": "Obrigado. Onde posso validar antes da próxima viagem?",
    "en": "Thank you. Where can I validate before my next journey?",
    "zhHans": "谢谢。下次乘车前在哪里验证？",
    "zhHant": "謝謝。下次乘車前在哪裡拍卡？"
  },
  {
    "id": "dialogo-transportes-use-a-maquina-junto-a-porta-ou-ao-acesso-a-plataforma",
    "situacao": "transportes",
    "order": 590,
    "purpose": "expanded real-world coverage",
    "pt": "Use a máquina junto à porta ou ao acesso à plataforma.",
    "en": "Use the machine by the door or at the platform entrance.",
    "zhHans": "请使用车门旁或站台入口处的机器。",
    "zhHant": "請使用車門旁或月台入口的拍卡機。"
  },
  {
    "id": "dialogo-transportes-percebi-vou-validar-sempre-mesmo-com-o-passe-mensal",
    "situacao": "transportes",
    "order": 591,
    "purpose": "expanded real-world coverage",
    "pt": "Percebi. Vou validar sempre, mesmo com o passe mensal.",
    "en": "I understand. I will always validate, even with a monthly pass.",
    "zhHans": "明白了。即使使用月票，我也会每次验证。",
    "zhHant": "明白了。即使用月票，我也會每次拍卡。"
  },
  {
    "id": "dialogo-veterinario-quando-ficam-prontos-os-resultados-das-analises",
    "situacao": "veterinario",
    "order": 592,
    "purpose": "expanded real-world coverage",
    "pt": "Quando ficam prontos os resultados das análises?",
    "en": "When will the test results be ready?",
    "zhHans": "检查结果什么时候出来？",
    "zhHant": "化驗結果甚麼時候有？"
  },
  {
    "id": "dialogo-veterinario-amanha-de-manha-telefonamos-lhe-com-os-resultados",
    "situacao": "veterinario",
    "order": 593,
    "purpose": "expanded real-world coverage",
    "pt": "Amanhã de manhã telefonamos-lhe com os resultados.",
    "en": "We will call you tomorrow morning with the results.",
    "zhHans": "明天上午我们会打电话告知结果。",
    "zhHant": "明天上午我們會致電告知結果。"
  },
  {
    "id": "dialogo-veterinario-ate-la-posso-dar-lhe-comida-ou-agua",
    "situacao": "veterinario",
    "order": 594,
    "purpose": "expanded real-world coverage",
    "pt": "Até lá, posso dar-lhe comida ou água?",
    "en": "Until then, may I give him food or water?",
    "zhHans": "在此之前可以给它吃东西或喝水吗？",
    "zhHant": "在此之前可以給牠吃東西或喝水嗎？"
  },
  {
    "id": "dialogo-veterinario-pode-dar-agua-espere-pelas-nossas-indicacoes-antes-de-lhe-dar-comida",
    "situacao": "veterinario",
    "order": 595,
    "purpose": "expanded real-world coverage",
    "pt": "Pode dar água; espere pelas nossas indicações antes de lhe dar comida.",
    "en": "You may give water; wait for our instructions before giving food.",
    "zhHans": "可以喝水；喂食前请等我们的指示。",
    "zhHant": "可以喝水；餵食前請等我們的指示。"
  },
  {
    "id": "dialogo-ginasio-ha-alguem-que-me-explique-como-usar-as-maquinas",
    "situacao": "ginasio",
    "order": 596,
    "purpose": "expanded real-world coverage",
    "pt": "Há alguém que me explique como usar as máquinas?",
    "en": "Is there someone who can explain how to use the machines?",
    "zhHans": "有人可以教我怎样使用器械吗？",
    "zhHant": "有人可以教我怎樣使用健身器械嗎？"
  },
  {
    "id": "dialogo-ginasio-sim-a-avaliacao-inicial-inclui-uma-orientacao-com-um-instrutor",
    "situacao": "ginasio",
    "order": 597,
    "purpose": "expanded real-world coverage",
    "pt": "Sim, a avaliação inicial inclui uma orientação com um instrutor.",
    "en": "Yes, the initial assessment includes guidance from an instructor.",
    "zhHans": "有，初次评估包括教练指导。",
    "zhHant": "有，初次評估包括教練指導。"
  },
  {
    "id": "dialogo-ginasio-tenho-uma-lesao-no-joelho-devo-avisar-antes-da-aula",
    "situacao": "ginasio",
    "order": 598,
    "purpose": "expanded real-world coverage",
    "pt": "Tenho uma lesão no joelho. Devo avisar antes da aula?",
    "en": "I have a knee injury. Should I mention it before the class?",
    "zhHans": "我的膝盖有伤，上课前需要说明吗？",
    "zhHant": "我的膝蓋有傷，上堂前需要說明嗎？"
  },
  {
    "id": "dialogo-ginasio-sim-fale-com-o-instrutor-para-adaptar-os-exercicios",
    "situacao": "ginasio",
    "order": 599,
    "purpose": "expanded real-world coverage",
    "pt": "Sim. Fale com o instrutor para adaptar os exercícios.",
    "en": "Yes. Speak to the instructor so the exercises can be adapted.",
    "zhHans": "需要。请告诉教练，以便调整练习。",
    "zhHant": "需要。請告訴教練，以便調整練習。"
  },
  {
    "id": "dialogo-convivio-queres-que-leve-alguma-coisa-para-o-lanche",
    "situacao": "convivio",
    "order": 600,
    "purpose": "expanded real-world coverage",
    "pt": "Queres que leve alguma coisa para o lanche?",
    "en": "Would you like me to bring something for the snack?",
    "zhHans": "要我带点什么来吃吗？",
    "zhHant": "要我帶點甚麼來吃嗎？"
  },
  {
    "id": "dialogo-convivio-traz-fruta-se-puderes-eu-levo-sandes-e-agua",
    "situacao": "convivio",
    "order": 601,
    "purpose": "expanded real-world coverage",
    "pt": "Traz fruta, se puderes. Eu levo sandes e água.",
    "en": "Bring some fruit if you can. I will bring sandwiches and water.",
    "zhHans": "可以的话带些水果。我带三明治和水。",
    "zhHant": "可以的話帶些水果。我帶三文治和水。"
  },
  {
    "id": "dialogo-convivio-esta-combinado-manda-me-a-localizacao-quando-chegares",
    "situacao": "convivio",
    "order": 602,
    "purpose": "expanded real-world coverage",
    "pt": "Está combinado. Manda-me a localização quando chegares.",
    "en": "Agreed. Send me the location when you arrive.",
    "zhHans": "说好了。你到了以后把位置发给我。",
    "zhHant": "說好了。你到了之後把位置傳給我。"
  },
  {
    "id": "dialogo-convivio-mando-sim-ate-sabado",
    "situacao": "convivio",
    "order": 603,
    "purpose": "expanded real-world coverage",
    "pt": "Mando, sim. Até sábado!",
    "en": "I will. See you on Saturday!",
    "zhHans": "好的，星期六见！",
    "zhHant": "好的，星期六見！"
  },
  {
    "id": "dialogo-vizinhos-sabe-a-quem-devo-avisar-sobre-uma-fuga-na-garagem",
    "situacao": "vizinhos",
    "order": 604,
    "purpose": "expanded real-world coverage",
    "pt": "Sabe a quem devo avisar sobre uma fuga na garagem?",
    "en": "Do you know whom I should tell about a leak in the garage?",
    "zhHans": "您知道车库漏水应该通知谁吗？",
    "zhHant": "您知道車房漏水應該通知誰嗎？"
  },
  {
    "id": "dialogo-vizinhos-avise-a-administradora-do-condominio-o-numero-esta-no-atrio",
    "situacao": "vizinhos",
    "order": 605,
    "purpose": "expanded real-world coverage",
    "pt": "Avise a administradora do condomínio; o número está no átrio.",
    "en": "Tell the condominium manager; the number is in the entrance hall.",
    "zhHans": "请通知物业管理员；大厅里有电话号码。",
    "zhHant": "請通知大廈管理公司；大堂有電話號碼。"
  },
  {
    "id": "dialogo-vizinhos-vou-tirar-uma-fotografia-e-ligar-ja",
    "situacao": "vizinhos",
    "order": 606,
    "purpose": "expanded real-world coverage",
    "pt": "Vou tirar uma fotografia e ligar já.",
    "en": "I will take a photograph and call now.",
    "zhHans": "我拍张照片马上打电话。",
    "zhHant": "我會拍張相片，現在就致電。"
  },
  {
    "id": "dialogo-vizinhos-obrigado-eu-tambem-vou-afastar-as-caixas-da-agua",
    "situacao": "vizinhos",
    "order": 607,
    "purpose": "expanded real-world coverage",
    "pt": "Obrigado. Eu também vou afastar as caixas da água.",
    "en": "Thank you. I will also move the boxes away from the water.",
    "zhHans": "谢谢。我也会把箱子移离积水。",
    "zhHant": "謝謝。我也會把紙箱移離積水。"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-queria-tambem-fazer-madeixas-mas-num-tom-natural",
    "situacao": "cabeleireiro_barbeiro",
    "order": 608,
    "purpose": "expanded real-world coverage",
    "pt": "Queria também fazer madeixas, mas num tom natural.",
    "en": "I would also like highlights, but in a natural shade.",
    "zhHans": "我还想挑染，但希望颜色自然。",
    "zhHant": "我還想挑染，但希望顏色自然。"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-podemos-escolher-a-cor-e-fazer-primeiro-um-teste-numa-madeixa",
    "situacao": "cabeleireiro_barbeiro",
    "order": 609,
    "purpose": "expanded real-world coverage",
    "pt": "Podemos escolher a cor e fazer primeiro um teste numa madeixa.",
    "en": "We can choose the colour and test it on one strand first.",
    "zhHans": "我们可以先选颜色，再用一小束头发测试。",
    "zhHant": "我們可以先選顏色，再用一小束頭髮測試。"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-quanto-tempo-demora-o-corte-e-a-coloracao",
    "situacao": "cabeleireiro_barbeiro",
    "order": 610,
    "purpose": "expanded real-world coverage",
    "pt": "Quanto tempo demora o corte e a coloração?",
    "en": "How long will the cut and colour take?",
    "zhHans": "剪发和染发需要多长时间？",
    "zhHant": "剪髮和染髮需要多長時間？"
  },
  {
    "id": "dialogo-cabeleireiro_barbeiro-conte-com-cerca-de-duas-horas-aviso-antes-de-comecar",
    "situacao": "cabeleireiro_barbeiro",
    "order": 611,
    "purpose": "expanded real-world coverage",
    "pt": "Conte com cerca de duas horas; aviso antes de começar.",
    "en": "Allow about two hours; I will let you know before we start.",
    "zhHans": "大约需要两小时；开始前我会告诉您。",
    "zhHant": "大約需要兩小時；開始前我會告訴您。"
  },
  {
    "id": "dialogo-farmacia-posso-tomar-este-medicamento-com-os-outros-que-ja-tomo",
    "situacao": "farmacia",
    "order": 612,
    "purpose": "expanded real-world coverage",
    "pt": "Posso tomar este medicamento com os outros que já tomo?",
    "en": "Can I take this medicine with the others I already take?",
    "zhHans": "这种药可以和我正在服用的其他药一起吃吗？",
    "zhHant": "這種藥可以和我正在服用的其他藥一起吃嗎？"
  },
  {
    "id": "dialogo-farmacia-diga-me-quais-sao-ou-mostre-me-a-sua-lista-de-medicacao",
    "situacao": "farmacia",
    "order": 613,
    "purpose": "expanded real-world coverage",
    "pt": "Diga-me quais são ou mostre-me a sua lista de medicação.",
    "en": "Tell me which ones they are, or show me your medication list.",
    "zhHans": "请告诉我药名，或出示您的用药清单。",
    "zhHant": "請告訴我藥名，或出示您的用藥清單。"
  },
  {
    "id": "dialogo-farmacia-tenho-a-lista-no-telemovel-pode-verificar-por-favor",
    "situacao": "farmacia",
    "order": 614,
    "purpose": "expanded real-world coverage",
    "pt": "Tenho a lista no telemóvel. Pode verificar, por favor?",
    "en": "I have the list on my phone. Could you check it, please?",
    "zhHans": "清单在手机里。可以帮我查看吗？",
    "zhHant": "清單在手提電話裡。可以幫我查看嗎？"
  },
  {
    "id": "dialogo-supermercado_mercado-desculpe-esta-embalagem-esta-aberta-posso-troca-la",
    "situacao": "supermercado_mercado",
    "order": 615,
    "purpose": "expanded real-world coverage",
    "pt": "Desculpe, esta embalagem está aberta. Posso trocá-la?",
    "en": "Excuse me, this package is open. Can I exchange it?",
    "zhHans": "不好意思，这个包装开了，可以换吗？",
    "zhHant": "不好意思，這個包裝開了，可以換嗎？"
  },
  {
    "id": "dialogo-supermercado_mercado-sim-leve-a-ao-apoio-ao-cliente-com-o-talao",
    "situacao": "supermercado_mercado",
    "order": 616,
    "purpose": "expanded real-world coverage",
    "pt": "Sim. Leve-a ao apoio ao cliente com o talão.",
    "en": "Yes. Take it to customer service with the receipt.",
    "zhHans": "可以，请带收据到顾客服务台。",
    "zhHant": "可以，請帶收據到顧客服務處。"
  },
  {
    "id": "dialogo-supermercado_mercado-na-peixaria-pode-arranjar-este-peixe-para-grelhar",
    "situacao": "supermercado_mercado",
    "order": 617,
    "purpose": "expanded real-world coverage",
    "pt": "Na peixaria, pode arranjar este peixe para grelhar?",
    "en": "At the fish counter, can you prepare this fish for grilling?",
    "zhHans": "在鱼柜台可以帮我把这条鱼处理好用来烤吗？",
    "zhHant": "在魚檔可以幫我把這條魚處理好用來燒烤嗎？"
  },
  {
    "id": "dialogo-supermercado_mercado-claro-quer-sem-cabeca-e-aberto-ao-meio",
    "situacao": "supermercado_mercado",
    "order": 618,
    "purpose": "expanded real-world coverage",
    "pt": "Claro. Quer sem cabeça e aberto ao meio?",
    "en": "Of course. Would you like the head removed and the fish split open?",
    "zhHans": "可以。要去头并从中间剖开吗？",
    "zhHant": "可以。要去頭並從中間切開嗎？"
  },
  {
    "id": "dialogo-supermercado_mercado-sim-por-favor-e-guarde-as-espinhas-a-parte",
    "situacao": "supermercado_mercado",
    "order": 619,
    "purpose": "expanded real-world coverage",
    "pt": "Sim, por favor. E guarde as espinhas à parte.",
    "en": "Yes, please. And keep the bones separately.",
    "zhHans": "好的，也请把鱼骨另外装起来。",
    "zhHant": "好的，也請把魚骨另外包起來。"
  },
  {
    "id": "dialogo-supermercado_mercado-com-certeza-fica-pronto-dentro-de-cinco-minutos",
    "situacao": "supermercado_mercado",
    "order": 620,
    "purpose": "expanded real-world coverage",
    "pt": "Com certeza. Fica pronto dentro de cinco minutos.",
    "en": "Certainly. It will be ready in five minutes.",
    "zhHans": "没问题，五分钟后就好。",
    "zhHant": "沒問題，五分鐘後就好。"
  },
  {
    "id": "dialogo-supermercado_mercado-esta-caixa-e-so-para-quem-tem-menos-de-dez-artigos",
    "situacao": "supermercado_mercado",
    "order": 621,
    "purpose": "expanded real-world coverage",
    "pt": "Esta caixa é só para quem tem menos de dez artigos?",
    "en": "Is this checkout only for people with fewer than ten items?",
    "zhHans": "这个收银台只供少于十件商品的顾客使用吗？",
    "zhHant": "這個收銀處只供少於十件貨品的顧客使用嗎？"
  },
  {
    "id": "dialogo-supermercado_mercado-sim-para-um-carrinho-cheio-use-a-caixa-seguinte",
    "situacao": "supermercado_mercado",
    "order": 622,
    "purpose": "expanded real-world coverage",
    "pt": "Sim. Para um carrinho cheio, use a caixa seguinte.",
    "en": "Yes. For a full trolley, use the next checkout.",
    "zhHans": "是的。购物车装满的话，请用下一个收银台。",
    "zhHant": "是的。購物車裝滿的話，請用下一個收銀處。"
  },
  {
    "id": "dialogo-supermercado_mercado-esqueci-me-de-pesar-as-macas-posso-voltar-atras",
    "situacao": "supermercado_mercado",
    "order": 623,
    "purpose": "expanded real-world coverage",
    "pt": "Esqueci-me de pesar as maçãs. Posso voltar atrás?",
    "en": "I forgot to weigh the apples. Can I go back?",
    "zhHans": "我忘了给苹果称重，可以回去称吗？",
    "zhHant": "我忘了給蘋果磅重，可以回去磅嗎？"
  },
  {
    "id": "dialogo-supermercado_mercado-pode-deixo-a-compra-em-espera-enquanto-as-pesa",
    "situacao": "supermercado_mercado",
    "order": 624,
    "purpose": "expanded real-world coverage",
    "pt": "Pode. Deixo a compra em espera enquanto as pesa.",
    "en": "Yes. I will hold the transaction while you weigh them.",
    "zhHans": "可以。您去称重时，我先暂停结账。",
    "zhHant": "可以。您去磅重時，我先暫停結帳。"
  },
  {
    "id": "dialogo-supermercado_mercado-o-desconto-nao-apareceu-no-total",
    "situacao": "supermercado_mercado",
    "order": 625,
    "purpose": "expanded real-world coverage",
    "pt": "O desconto não apareceu no total.",
    "en": "The discount did not appear in the total.",
    "zhHans": "折扣没有显示在总额里。",
    "zhHant": "折扣沒有顯示在總額裡。"
  },
  {
    "id": "dialogo-supermercado_mercado-vou-confirmar-se-a-promocao-exige-o-cartao-da-loja",
    "situacao": "supermercado_mercado",
    "order": 626,
    "purpose": "expanded real-world coverage",
    "pt": "Vou confirmar se a promoção exige o cartão da loja.",
    "en": "I will check whether the offer requires the store card.",
    "zhHans": "我来确认这项优惠是否需要会员卡。",
    "zhHant": "我來確認這項優惠是否需要會員卡。"
  },
  {
    "id": "dialogo-cafe_restaurante-queria-reservar-uma-mesa-para-seis-no-sabado-a-noite",
    "situacao": "cafe_restaurante",
    "order": 627,
    "purpose": "expanded real-world coverage",
    "pt": "Queria reservar uma mesa para seis no sábado à noite.",
    "en": "I would like to book a table for six on Saturday evening.",
    "zhHans": "我想预订星期六晚上六个人的桌位。",
    "zhHant": "我想預訂星期六晚上六個人的座位。"
  },
  {
    "id": "dialogo-cafe_restaurante-a-que-horas-e-em-nome-de-quem",
    "situacao": "cafe_restaurante",
    "order": 628,
    "purpose": "expanded real-world coverage",
    "pt": "A que horas e em nome de quem?",
    "en": "At what time, and under what name?",
    "zhHans": "几点？用谁的名字预订？",
    "zhHant": "幾點？用誰的名字預訂？"
  },
  {
    "id": "dialogo-cafe_restaurante-as-oito-em-nome-de-li-vamos-levar-uma-crianca-pequena",
    "situacao": "cafe_restaurante",
    "order": 629,
    "purpose": "expanded real-world coverage",
    "pt": "Às oito, em nome de Li. Vamos levar uma criança pequena.",
    "en": "At eight, under Li. We will have a young child with us.",
    "zhHans": "八点，姓 Li。我们会带一个小孩。",
    "zhHant": "八點，姓 Li。我們會帶一個小孩。"
  },
  {
    "id": "dialogo-cafe_restaurante-temos-cadeira-de-bebe-quer-a-mesa-numa-zona-mais-tranquila",
    "situacao": "cafe_restaurante",
    "order": 630,
    "purpose": "expanded real-world coverage",
    "pt": "Temos cadeira de bebé. Quer a mesa numa zona mais tranquila?",
    "en": "We have a high chair. Would you like a table in a quieter area?",
    "zhHans": "我们有儿童椅。您想坐在安静一点的区域吗？",
    "zhHant": "我們有兒童椅。您想坐在安靜一點的位置嗎？"
  },
  {
    "id": "dialogo-cafe_restaurante-sim-por-favor-uma-pessoa-do-grupo-e-vegetariana",
    "situacao": "cafe_restaurante",
    "order": 631,
    "purpose": "expanded real-world coverage",
    "pt": "Sim, por favor. Uma pessoa do grupo é vegetariana.",
    "en": "Yes, please. One person in the group is vegetarian.",
    "zhHans": "好的。我们有一位素食者。",
    "zhHant": "好的。我們有一位素食者。"
  },
  {
    "id": "dialogo-cafe_restaurante-temos-duas-opcoes-vegetarianas-e-sopa-sem-carne",
    "situacao": "cafe_restaurante",
    "order": 632,
    "purpose": "expanded real-world coverage",
    "pt": "Temos duas opções vegetarianas e sopa sem carne.",
    "en": "We have two vegetarian options and a meat-free soup.",
    "zhHans": "我们有两种素食选择和不含肉的汤。",
    "zhHant": "我們有兩款素食選擇和不含肉的湯。"
  },
  {
    "id": "dialogo-cafe_restaurante-podemos-encomendar-uma-dose-para-levar",
    "situacao": "cafe_restaurante",
    "order": 633,
    "purpose": "expanded real-world coverage",
    "pt": "Podemos encomendar uma dose para levar?",
    "en": "Can we order a portion to take away?",
    "zhHans": "我们可以点一份外带吗？",
    "zhHant": "我們可以點一份外賣嗎？"
  },
  {
    "id": "dialogo-cafe_restaurante-pode-mas-a-embalagem-tem-um-custo-de-cinquenta-centimos",
    "situacao": "cafe_restaurante",
    "order": 634,
    "purpose": "expanded real-world coverage",
    "pt": "Pode, mas a embalagem tem um custo de cinquenta cêntimos.",
    "en": "Yes, but the container costs fifty cents.",
    "zhHans": "可以，但餐盒收费五十欧分。",
    "zhHant": "可以，但餐盒收費五十歐仙。"
  },
  {
    "id": "dialogo-cafe_restaurante-o-cafe-esta-incluido-no-menu-de-almoco",
    "situacao": "cafe_restaurante",
    "order": 635,
    "purpose": "expanded real-world coverage",
    "pt": "O café está incluído no menu de almoço?",
    "en": "Is coffee included in the lunch menu?",
    "zhHans": "午餐套餐包括咖啡吗？",
    "zhHant": "午餐套餐包括咖啡嗎？"
  },
  {
    "id": "dialogo-cafe_restaurante-inclui-cafe-ou-cha-mas-nao-inclui-sobremesa",
    "situacao": "cafe_restaurante",
    "order": 636,
    "purpose": "expanded real-world coverage",
    "pt": "Inclui café ou chá, mas não inclui sobremesa.",
    "en": "It includes coffee or tea, but not dessert.",
    "zhHans": "包括咖啡或茶，但不包括甜点。",
    "zhHant": "包括咖啡或茶，但不包括甜品。"
  },
  {
    "id": "dialogo-cafe_restaurante-pode-trazer-a-conta-quando-tiver-um-momento",
    "situacao": "cafe_restaurante",
    "order": 637,
    "purpose": "expanded real-world coverage",
    "pt": "Pode trazer a conta quando tiver um momento?",
    "en": "Could you bring the bill when you have a moment?",
    "zhHans": "您方便时可以把账单拿来吗？",
    "zhHant": "您方便時可以把帳單拿來嗎？"
  },
  {
    "id": "dialogo-cafe_restaurante-claro-quer-deixar-a-gorjeta-no-cartao-ou-em-dinheiro",
    "situacao": "cafe_restaurante",
    "order": 638,
    "purpose": "expanded real-world coverage",
    "pt": "Claro. Quer deixar a gorjeta no cartão ou em dinheiro?",
    "en": "Of course. Would you like to leave the tip by card or in cash?",
    "zhHans": "好的。小费要刷卡还是付现金？",
    "zhHant": "好的。小費想用卡還是現金支付？"
  },
  {
    "id": "dialogo-consultorio_medico-tambem-queria-falar-da-minha-filha-tem-febre-desde-esta-manha",
    "situacao": "consultorio_medico",
    "order": 639,
    "purpose": "expanded real-world coverage",
    "pt": "Também queria falar da minha filha. Tem febre desde esta manhã.",
    "en": "I would also like to discuss my daughter. She has had a fever since this morning.",
    "zhHans": "我还想咨询女儿的情况。她从今天早上开始发烧。",
    "zhHant": "我還想問女兒的情況。她由今天早上開始發燒。"
  },
  {
    "id": "dialogo-consultorio_medico-que-idade-tem-e-qual-foi-a-temperatura-mais-alta",
    "situacao": "consultorio_medico",
    "order": 640,
    "purpose": "expanded real-world coverage",
    "pt": "Que idade tem e qual foi a temperatura mais alta?",
    "en": "How old is she, and what was the highest temperature?",
    "zhHans": "她几岁？最高体温是多少？",
    "zhHant": "她幾歲？最高體溫是多少？"
  },
  {
    "id": "dialogo-consultorio_medico-tem-quatro-anos-e-chegou-aos-trinta-e-nove-graus",
    "situacao": "consultorio_medico",
    "order": 641,
    "purpose": "expanded real-world coverage",
    "pt": "Tem quatro anos e chegou aos trinta e nove graus.",
    "en": "She is four, and it reached thirty-nine degrees.",
    "zhHans": "她四岁，体温最高到三十九度。",
    "zhHant": "她四歲，體溫最高到三十九度。"
  },
  {
    "id": "dialogo-consultorio_medico-esta-a-beber-liquidos-e-a-urinar-normalmente",
    "situacao": "consultorio_medico",
    "order": 642,
    "purpose": "expanded real-world coverage",
    "pt": "Está a beber líquidos e a urinar normalmente?",
    "en": "Is she drinking fluids and urinating normally?",
    "zhHans": "她喝水和排尿正常吗？",
    "zhHant": "她飲水和小便正常嗎？"
  },
  {
    "id": "dialogo-consultorio_medico-bebe-pouco-e-diz-que-lhe-doi-o-ouvido",
    "situacao": "consultorio_medico",
    "order": 643,
    "purpose": "expanded real-world coverage",
    "pt": "Bebe pouco e diz que lhe dói o ouvido.",
    "en": "She drinks very little and says her ear hurts.",
    "zhHans": "她喝得很少，还说耳朵痛。",
    "zhHant": "她飲得很少，還說耳朵痛。"
  },
  {
    "id": "dialogo-consultorio_medico-vou-observar-o-ouvido-e-pesar-a-crianca-antes-de-indicar-a-dose",
    "situacao": "consultorio_medico",
    "order": 644,
    "purpose": "expanded real-world coverage",
    "pt": "Vou observar o ouvido e pesar a criança antes de indicar a dose.",
    "en": "I will examine her ear and weigh her before advising the dose.",
    "zhHans": "我会检查耳朵并先称体重，再确定剂量。",
    "zhHant": "我會檢查耳朵並先量體重，再確定劑量。"
  },
  {
    "id": "dialogo-consultorio_medico-se-a-febre-subir-durante-a-noite-o-que-devo-fazer",
    "situacao": "consultorio_medico",
    "order": 645,
    "purpose": "expanded real-world coverage",
    "pt": "Se a febre subir durante a noite, o que devo fazer?",
    "en": "What should I do if the fever rises during the night?",
    "zhHans": "如果夜里体温升高，我该怎么办？",
    "zhHant": "如果夜間體溫升高，我應該怎麼辦？"
  },
  {
    "id": "dialogo-consultorio_medico-ligue-para-o-sns-24-se-tiver-dificuldade-em-respirar-procure-ajuda-urgente",
    "situacao": "consultorio_medico",
    "order": 646,
    "purpose": "expanded real-world coverage",
    "pt": "Ligue para o SNS 24; se tiver dificuldade em respirar, procure ajuda urgente.",
    "en": "Call SNS 24; if she has difficulty breathing, seek urgent help.",
    "zhHans": "请致电 SNS 24；如果呼吸困难，请立即求助。",
    "zhHant": "請致電 SNS 24；如果呼吸困難，請立即求助。"
  },
  {
    "id": "dialogo-consultorio_medico-o-medicamento-deve-ser-dado-antes-ou-depois-de-comer",
    "situacao": "consultorio_medico",
    "order": 647,
    "purpose": "expanded real-world coverage",
    "pt": "O medicamento deve ser dado antes ou depois de comer?",
    "en": "Should the medicine be given before or after food?",
    "zhHans": "这种药要饭前还是饭后服用？",
    "zhHant": "這種藥要餐前還是餐後服用？"
  },
  {
    "id": "dialogo-consultorio_medico-pode-dar-depois-de-uma-refeicao-leve-e-respeitar-o-intervalo-indicado",
    "situacao": "consultorio_medico",
    "order": 648,
    "purpose": "expanded real-world coverage",
    "pt": "Pode dar depois de uma refeição leve e respeitar o intervalo indicado.",
    "en": "You can give it after a light meal and follow the stated interval.",
    "zhHans": "可以在少量进食后服用，并遵守规定的间隔。",
    "zhHant": "可以在少量進食後服用，並遵守指定的間隔。"
  },
  {
    "id": "dialogo-consultorio_medico-quando-devemos-voltar-para-ser-reavaliada",
    "situacao": "consultorio_medico",
    "order": 649,
    "purpose": "expanded real-world coverage",
    "pt": "Quando devemos voltar para ser reavaliada?",
    "en": "When should we come back for reassessment?",
    "zhHans": "我们什么时候需要回来复诊？",
    "zhHant": "我們甚麼時候需要回來覆診？"
  },
  {
    "id": "dialogo-consultorio_medico-voltem-se-nao-melhorar-em-quarenta-e-oito-horas-ou-se-surgir-outro-sintoma",
    "situacao": "consultorio_medico",
    "order": 650,
    "purpose": "expanded real-world coverage",
    "pt": "Voltem se não melhorar em quarenta e oito horas ou se surgir outro sintoma.",
    "en": "Come back if she does not improve within forty-eight hours or develops another symptom.",
    "zhHans": "如果四十八小时内没有好转或出现其他症状，请回来复诊。",
    "zhHant": "如果四十八小時內沒有好轉或出現其他症狀，請回來覆診。"
  },
  {
    "id": "dialogo-casa_reparacoes-a-tomada-da-cozinha-faz-faisca-quando-ligo-o-forno",
    "situacao": "casa_reparacoes",
    "order": 651,
    "purpose": "expanded real-world coverage",
    "pt": "A tomada da cozinha faz faísca quando ligo o forno.",
    "en": "The kitchen socket sparks when I switch on the oven.",
    "zhHans": "我打开烤箱时，厨房插座会冒火花。",
    "zhHant": "我開焗爐時，廚房插座會冒火花。"
  },
  {
    "id": "dialogo-casa_reparacoes-nao-volte-a-usa-la-e-desligue-esse-circuito-no-quadro-eletrico",
    "situacao": "casa_reparacoes",
    "order": 652,
    "purpose": "expanded real-world coverage",
    "pt": "Não volte a usá-la e desligue esse circuito no quadro elétrico.",
    "en": "Do not use it again, and switch off that circuit at the fuse box.",
    "zhHans": "请不要再使用，并在配电箱关闭该回路。",
    "zhHant": "請不要再使用，並在電箱關掉該電路。"
  },
  {
    "id": "dialogo-casa_reparacoes-o-eletricista-consegue-vir-hoje",
    "situacao": "casa_reparacoes",
    "order": 653,
    "purpose": "expanded real-world coverage",
    "pt": "O eletricista consegue vir hoje?",
    "en": "Can the electrician come today?",
    "zhHans": "电工今天能来吗？",
    "zhHant": "電工今天能來嗎？"
  },
  {
    "id": "dialogo-casa_reparacoes-consigo-marcar-uma-urgencia-para-o-fim-da-tarde",
    "situacao": "casa_reparacoes",
    "order": 654,
    "purpose": "expanded real-world coverage",
    "pt": "Consigo marcar uma urgência para o fim da tarde.",
    "en": "I can book an emergency visit for late afternoon.",
    "zhHans": "我可以预约今天傍晚的紧急上门服务。",
    "zhHant": "我可以預約今天傍晚的緊急上門服務。"
  },
  {
    "id": "dialogo-casa_reparacoes-a-deslocacao-tem-um-preco-fixo",
    "situacao": "casa_reparacoes",
    "order": 655,
    "purpose": "expanded real-world coverage",
    "pt": "A deslocação tem um preço fixo?",
    "en": "Is there a fixed call-out fee?",
    "zhHans": "上门费是固定的吗？",
    "zhHant": "上門費是固定的嗎？"
  },
  {
    "id": "dialogo-casa_reparacoes-sim-a-reparacao-e-as-pecas-sao-orcamentadas-depois-do-diagnostico",
    "situacao": "casa_reparacoes",
    "order": 656,
    "purpose": "expanded real-world coverage",
    "pt": "Sim. A reparação e as peças são orçamentadas depois do diagnóstico.",
    "en": "Yes. The repair and parts are quoted after diagnosis.",
    "zhHans": "是的。检查后会另行报价维修和零件费用。",
    "zhHant": "是的。檢查後會另行報價維修和零件費用。"
  },
  {
    "id": "dialogo-casa_reparacoes-o-autoclismo-tambem-fica-sempre-a-correr",
    "situacao": "casa_reparacoes",
    "order": 657,
    "purpose": "expanded real-world coverage",
    "pt": "O autoclismo também fica sempre a correr.",
    "en": "The toilet cistern also keeps running.",
    "zhHans": "马桶水箱也一直流水。",
    "zhHant": "坐廁水箱也一直流水。"
  },
  {
    "id": "dialogo-casa_reparacoes-peca-ao-canalizador-para-verificar-a-valvula-quando-estiver-ai",
    "situacao": "casa_reparacoes",
    "order": 658,
    "purpose": "expanded real-world coverage",
    "pt": "Peça ao canalizador para verificar a válvula quando estiver aí.",
    "en": "Ask the plumber to check the valve while there.",
    "zhHans": "水管工到时请他也检查一下阀门。",
    "zhHant": "水喉匠到時請他也檢查一下水掣。"
  },
  {
    "id": "dialogo-casa_reparacoes-pode-enviar-me-a-fatura-e-a-garantia-por-email",
    "situacao": "casa_reparacoes",
    "order": 659,
    "purpose": "expanded real-world coverage",
    "pt": "Pode enviar-me a fatura e a garantia por email?",
    "en": "Can you email me the invoice and warranty?",
    "zhHans": "可以把发票和保修通过邮件发给我吗？",
    "zhHant": "可以把發票和保養證明透過電郵傳給我嗎？"
  },
  {
    "id": "dialogo-casa_reparacoes-claro-confirme-o-email-quando-assinar-a-folha-de-servico",
    "situacao": "casa_reparacoes",
    "order": 660,
    "purpose": "expanded real-world coverage",
    "pt": "Claro. Confirme o email quando assinar a folha de serviço.",
    "en": "Of course. Confirm the email when you sign the service sheet.",
    "zhHans": "可以。签服务单时请确认邮箱。",
    "zhHant": "可以。簽署服務單時請確認電郵。"
  },
  {
    "id": "dialogo-casa_reparacoes-se-a-avaria-voltar-ha-nova-cobranca",
    "situacao": "casa_reparacoes",
    "order": 661,
    "purpose": "expanded real-world coverage",
    "pt": "Se a avaria voltar, há nova cobrança?",
    "en": "If the fault returns, will there be another charge?",
    "zhHans": "如果故障再次出现，还会收费吗？",
    "zhHant": "如果故障再次出現，還會收費嗎？"
  },
  {
    "id": "dialogo-casa_reparacoes-se-for-a-mesma-avaria-dentro-da-garantia-contacte-nos-com-o-numero-da-fatura",
    "situacao": "casa_reparacoes",
    "order": 662,
    "purpose": "expanded real-world coverage",
    "pt": "Se for a mesma avaria dentro da garantia, contacte-nos com o número da fatura.",
    "en": "If it is the same fault within the warranty, contact us with the invoice number.",
    "zhHans": "如果在保修期内出现同一故障，请提供发票编号联系我们。",
    "zhHant": "如果在保養期內出現同一故障，請提供發票編號聯絡我們。"
  },
  {
    "id": "dialogo-agua_luz_gas-a-fatura-deste-mes-e-muito-mais-alta-do-que-o-habitual",
    "situacao": "agua_luz_gas",
    "order": 663,
    "purpose": "expanded real-world coverage",
    "pt": "A fatura deste mês é muito mais alta do que o habitual.",
    "en": "This month's bill is much higher than usual.",
    "zhHans": "这个月的账单比平时高很多。",
    "zhHant": "這個月的賬單比平時高很多。"
  },
  {
    "id": "dialogo-agua_luz_gas-pode-confirmar-se-a-leitura-e-real-ou-estimada",
    "situacao": "agua_luz_gas",
    "order": 664,
    "purpose": "expanded real-world coverage",
    "pt": "Pode confirmar se a leitura é real ou estimada?",
    "en": "Can you check whether the reading is actual or estimated?",
    "zhHans": "您能确认这是实际读数还是估算读数吗？",
    "zhHant": "您能確認這是實際讀數還是估算讀數嗎？"
  },
  {
    "id": "dialogo-agua_luz_gas-diz-que-e-estimada-posso-comunicar-a-leitura-agora",
    "situacao": "agua_luz_gas",
    "order": 665,
    "purpose": "expanded real-world coverage",
    "pt": "Diz que é estimada. Posso comunicar a leitura agora?",
    "en": "It says it is estimated. Can I submit the reading now?",
    "zhHans": "上面写的是估算。我现在可以提交读数吗？",
    "zhHant": "上面寫的是估算。我現在可以提交讀數嗎？"
  },
  {
    "id": "dialogo-agua_luz_gas-sim-diga-os-numeros-que-aparecem-no-contador",
    "situacao": "agua_luz_gas",
    "order": 666,
    "purpose": "expanded real-world coverage",
    "pt": "Sim. Diga os números que aparecem no contador.",
    "en": "Yes. Tell me the numbers shown on the meter.",
    "zhHans": "可以。请告诉我计量表上显示的数字。",
    "zhHant": "可以。請告訴我錶上顯示的數字。"
  },
  {
    "id": "dialogo-agua_luz_gas-tambem-ficamos-sem-eletricidade-so-neste-apartamento",
    "situacao": "agua_luz_gas",
    "order": 667,
    "purpose": "expanded real-world coverage",
    "pt": "Também ficámos sem eletricidade só neste apartamento.",
    "en": "We have also lost power only in this flat.",
    "zhHans": "另外，只有我们这套公寓停电了。",
    "zhHant": "另外，只有我們這個單位停電了。"
  },
  {
    "id": "dialogo-agua_luz_gas-verifique-primeiro-o-disjuntor-e-se-ha-avisos-de-avaria-na-zona",
    "situacao": "agua_luz_gas",
    "order": 668,
    "purpose": "expanded real-world coverage",
    "pt": "Verifique primeiro o disjuntor e se há avisos de avaria na zona.",
    "en": "First check the circuit breaker and whether there are outage notices for the area.",
    "zhHans": "请先检查断路器，并查看该地区是否有故障通知。",
    "zhHant": "請先檢查斷路器，並查看該區是否有故障通知。"
  },
  {
    "id": "dialogo-agua_luz_gas-o-disjuntor-volta-a-desligar-quando-ligo-o-esquentador",
    "situacao": "agua_luz_gas",
    "order": 669,
    "purpose": "expanded real-world coverage",
    "pt": "O disjuntor volta a desligar quando ligo o esquentador.",
    "en": "The breaker trips again when I switch on the water heater.",
    "zhHans": "一开热水器，断路器就再次跳闸。",
    "zhHant": "一開熱水爐，斷路器就再次跳掣。"
  },
  {
    "id": "dialogo-agua_luz_gas-desligue-o-aparelho-e-chame-um-tecnico-qualificado",
    "situacao": "agua_luz_gas",
    "order": 670,
    "purpose": "expanded real-world coverage",
    "pt": "Desligue o aparelho e chame um técnico qualificado.",
    "en": "Switch off the appliance and call a qualified technician.",
    "zhHans": "请关闭设备并联系合资格技术人员。",
    "zhHant": "請關掉設備並聯絡合資格技術人員。"
  },
  {
    "id": "dialogo-agua_luz_gas-senti-cheiro-a-gas-no-patamar-do-predio",
    "situacao": "agua_luz_gas",
    "order": 671,
    "purpose": "expanded real-world coverage",
    "pt": "Senti cheiro a gás no patamar do prédio.",
    "en": "I smelled gas on the building landing.",
    "zhHans": "我在楼层走廊闻到燃气味。",
    "zhHant": "我在樓層走廊聞到煤氣味。"
  },
  {
    "id": "dialogo-agua_luz_gas-nao-acenda-luzes-ventile-se-for-seguro-e-ligue-para-a-emergencia-do-gas",
    "situacao": "agua_luz_gas",
    "order": 672,
    "purpose": "expanded real-world coverage",
    "pt": "Não acenda luzes, ventile se for seguro e ligue para a emergência do gás.",
    "en": "Do not switch on lights; ventilate if safe and call the gas emergency line.",
    "zhHans": "不要开灯；在安全情况下通风，并拨打燃气紧急电话。",
    "zhHant": "不要開燈；在安全情況下通風，並致電煤氣緊急熱線。"
  },
  {
    "id": "dialogo-agua_luz_gas-tenho-de-sair-do-predio",
    "situacao": "agua_luz_gas",
    "order": 673,
    "purpose": "expanded real-world coverage",
    "pt": "Tenho de sair do prédio?",
    "en": "Do I need to leave the building?",
    "zhHans": "我需要离开大楼吗？",
    "zhHant": "我需要離開大廈嗎？"
  },
  {
    "id": "dialogo-agua_luz_gas-siga-as-instrucoes-da-linha-de-emergencia-e-avise-os-vizinhos-sem-usar-campainhas",
    "situacao": "agua_luz_gas",
    "order": 674,
    "purpose": "expanded real-world coverage",
    "pt": "Siga as instruções da linha de emergência e avise os vizinhos sem usar campainhas.",
    "en": "Follow the emergency line's instructions and warn neighbours without using doorbells.",
    "zhHans": "请遵循紧急热线指示，并不要使用门铃，通知邻居。",
    "zhHant": "請遵從緊急熱線指示，並不要使用門鐘，通知鄰居。"
  },
  {
    "id": "dialogo-telemovel_internet-queria-um-cartao-pre-pago-sem-periodo-de-fidelizacao",
    "situacao": "telemovel_internet",
    "order": 675,
    "purpose": "expanded real-world coverage",
    "pt": "Queria um cartão pré-pago sem período de fidelização.",
    "en": "I would like a prepaid SIM with no lock-in period.",
    "zhHans": "我想要一张没有合约期的预付费 SIM 卡。",
    "zhHant": "我想要一張沒有綁約期的預付費 SIM 卡。"
  },
  {
    "id": "dialogo-telemovel_internet-precisa-sobretudo-de-chamadas-ou-de-dados-moveis",
    "situacao": "telemovel_internet",
    "order": 676,
    "purpose": "expanded real-world coverage",
    "pt": "Precisa sobretudo de chamadas ou de dados móveis?",
    "en": "Do you mainly need calls or mobile data?",
    "zhHans": "您主要需要通话还是移动数据？",
    "zhHant": "您主要需要通話還是流動數據？"
  },
  {
    "id": "dialogo-telemovel_internet-preciso-de-muitos-dados-e-de-usar-o-telemovel-noutros-paises-da-uniao-europeia",
    "situacao": "telemovel_internet",
    "order": 677,
    "purpose": "expanded real-world coverage",
    "pt": "Preciso de muitos dados e de usar o telemóvel noutros países da União Europeia.",
    "en": "I need plenty of data and to use the phone in other EU countries.",
    "zhHans": "我需要较多流量，并会在其他欧盟国家使用。",
    "zhHant": "我需要較多數據，並會在其他歐盟國家使用。"
  },
  {
    "id": "dialogo-telemovel_internet-este-tarifario-inclui-roaming-na-uniao-europeia-sujeito-a-politica-de-utilizacao-responsavel",
    "situacao": "telemovel_internet",
    "order": 678,
    "purpose": "expanded real-world coverage",
    "pt": "Este tarifário inclui roaming na União Europeia, sujeito à política de utilização responsável.",
    "en": "This plan includes EU roaming, subject to the fair-use policy.",
    "zhHans": "这个套餐包括欧盟漫游，但受公平使用政策限制。",
    "zhHant": "這個計劃包括歐盟漫遊，但受公平使用政策限制。"
  },
  {
    "id": "dialogo-telemovel_internet-posso-manter-o-meu-numero-atual",
    "situacao": "telemovel_internet",
    "order": 679,
    "purpose": "expanded real-world coverage",
    "pt": "Posso manter o meu número atual?",
    "en": "Can I keep my current number?",
    "zhHans": "我可以保留现在的号码吗？",
    "zhHant": "我可以保留現有號碼嗎？"
  },
  {
    "id": "dialogo-telemovel_internet-sim-para-a-portabilidade-precisamos-do-codigo-de-validacao-da-operadora-atual",
    "situacao": "telemovel_internet",
    "order": 680,
    "purpose": "expanded real-world coverage",
    "pt": "Sim. Para a portabilidade, precisamos do código de validação da operadora atual.",
    "en": "Yes. For number porting, we need the validation code from your current provider.",
    "zhHans": "可以。携号转网需要现运营商的验证码。",
    "zhHant": "可以。攜號轉台需要現有電訊商的驗證碼。"
  },
  {
    "id": "dialogo-telemovel_internet-em-casa-o-wi-fi-cai-varias-vezes-por-dia",
    "situacao": "telemovel_internet",
    "order": 681,
    "purpose": "expanded real-world coverage",
    "pt": "Em casa, o Wi-Fi cai várias vezes por dia.",
    "en": "At home, the Wi-Fi drops several times a day.",
    "zhHans": "家里的 Wi-Fi 每天会断几次。",
    "zhHant": "家裡的 Wi-Fi 每天會斷線幾次。"
  },
  {
    "id": "dialogo-telemovel_internet-as-luzes-do-router-mudam-quando-a-ligacao-cai",
    "situacao": "telemovel_internet",
    "order": 682,
    "purpose": "expanded real-world coverage",
    "pt": "As luzes do router mudam quando a ligação cai?",
    "en": "Do the router lights change when the connection drops?",
    "zhHans": "断网时路由器指示灯会变化吗？",
    "zhHant": "斷線時路由器指示燈會變化嗎？"
  },
  {
    "id": "dialogo-telemovel_internet-a-luz-da-internet-fica-vermelha",
    "situacao": "telemovel_internet",
    "order": 683,
    "purpose": "expanded real-world coverage",
    "pt": "A luz da internet fica vermelha.",
    "en": "The internet light turns red.",
    "zhHans": "网络指示灯会变红。",
    "zhHant": "網絡指示燈會變紅。"
  },
  {
    "id": "dialogo-telemovel_internet-vamos-fazer-um-teste-remoto-e-se-necessario-marcar-um-tecnico",
    "situacao": "telemovel_internet",
    "order": 684,
    "purpose": "expanded real-world coverage",
    "pt": "Vamos fazer um teste remoto e, se necessário, marcar um técnico.",
    "en": "We will run a remote test and, if needed, book a technician.",
    "zhHans": "我们会进行远程测试，必要时预约技术人员。",
    "zhHant": "我們會進行遙距測試，必要時預約技術人員。"
  },
  {
    "id": "dialogo-telemovel_internet-a-visita-tecnica-tem-algum-custo",
    "situacao": "telemovel_internet",
    "order": 685,
    "purpose": "expanded real-world coverage",
    "pt": "A visita técnica tem algum custo?",
    "en": "Is there a charge for the technician's visit?",
    "zhHans": "技术人员上门收费吗？",
    "zhHant": "技術人員上門收費嗎？"
  },
  {
    "id": "dialogo-telemovel_internet-so-ha-cobranca-se-a-avaria-nao-for-da-rede-ou-do-equipamento-fornecido",
    "situacao": "telemovel_internet",
    "order": 686,
    "purpose": "expanded real-world coverage",
    "pt": "Só há cobrança se a avaria não for da rede ou do equipamento fornecido.",
    "en": "There is only a charge if the fault is not in the network or supplied equipment.",
    "zhHans": "只有故障不属于网络或供应设备时才会收费。",
    "zhHant": "只有故障不屬於網絡或供應設備時才會收費。"
  },
  {
    "id": "dialogo-trocas_devolucoes-este-aparelho-deixou-de-funcionar-ao-fim-de-duas-semanas",
    "situacao": "trocas_devolucoes",
    "order": 687,
    "purpose": "expanded real-world coverage",
    "pt": "Este aparelho deixou de funcionar ao fim de duas semanas.",
    "en": "This appliance stopped working after two weeks.",
    "zhHans": "这台设备用了两周就坏了。",
    "zhHant": "這部電器用了兩星期就壞了。"
  },
  {
    "id": "dialogo-trocas_devolucoes-tem-a-fatura-e-trouxe-todos-os-acessorios",
    "situacao": "trocas_devolucoes",
    "order": 688,
    "purpose": "expanded real-world coverage",
    "pt": "Tem a fatura e trouxe todos os acessórios?",
    "en": "Do you have the invoice, and did you bring all the accessories?",
    "zhHans": "您有发票并带齐所有配件吗？",
    "zhHant": "您有發票並帶齊所有配件嗎？"
  },
  {
    "id": "dialogo-trocas_devolucoes-sim-prefiro-a-reparacao-a-receber-um-vale",
    "situacao": "trocas_devolucoes",
    "order": 689,
    "purpose": "expanded real-world coverage",
    "pt": "Sim. Prefiro a reparação a receber um vale.",
    "en": "Yes. I would prefer a repair rather than a voucher.",
    "zhHans": "有。我希望维修，不想要代金券。",
    "zhHant": "有。我希望維修，不想要購物券。"
  },
  {
    "id": "dialogo-trocas_devolucoes-vamos-registar-o-artigo-e-envia-lo-para-a-assistencia-tecnica",
    "situacao": "trocas_devolucoes",
    "order": 690,
    "purpose": "expanded real-world coverage",
    "pt": "Vamos registar o artigo e enviá-lo para a assistência técnica.",
    "en": "We will register the item and send it for technical service.",
    "zhHans": "我们会登记商品并送往技术维修。",
    "zhHant": "我們會登記貨品並送往技術維修。"
  },
  {
    "id": "dialogo-trocas_devolucoes-quanto-tempo-pode-demorar",
    "situacao": "trocas_devolucoes",
    "order": 691,
    "purpose": "expanded real-world coverage",
    "pt": "Quanto tempo pode demorar?",
    "en": "How long might it take?",
    "zhHans": "可能需要多长时间？",
    "zhHant": "可能需要多長時間？"
  },
  {
    "id": "dialogo-trocas_devolucoes-damos-uma-previsao-no-comprovativo-de-entrega-e-avisamos-por-mensagem",
    "situacao": "trocas_devolucoes",
    "order": 692,
    "purpose": "expanded real-world coverage",
    "pt": "Damos uma previsão no comprovativo de entrega e avisamos por mensagem.",
    "en": "We will give an estimate on the receipt and notify you by message.",
    "zhHans": "我们会在收件凭证上提供预计时间，并通过短信通知。",
    "zhHant": "我們會在收件證明上提供預計時間，並透過短訊通知。"
  },
  {
    "id": "dialogo-trocas_devolucoes-recebi-esta-camisola-como-presente-e-nao-tenho-o-talao",
    "situacao": "trocas_devolucoes",
    "order": 693,
    "purpose": "expanded real-world coverage",
    "pt": "Recebi esta camisola como presente e não tenho o talão.",
    "en": "I received this jumper as a gift and do not have the receipt.",
    "zhHans": "这件毛衣是礼物，我没有收据。",
    "zhHant": "這件冷衫是禮物，我沒有收據。"
  },
  {
    "id": "dialogo-trocas_devolucoes-tem-um-talao-de-oferta-ou-algum-comprovativo-da-compra",
    "situacao": "trocas_devolucoes",
    "order": 694,
    "purpose": "expanded real-world coverage",
    "pt": "Tem um talão de oferta ou algum comprovativo da compra?",
    "en": "Do you have a gift receipt or any proof of purchase?",
    "zhHans": "您有礼品收据或其他购买证明吗？",
    "zhHant": "您有禮物收據或其他購買證明嗎？"
  },
  {
    "id": "dialogo-trocas_devolucoes-tenho-o-talao-de-oferta-posso-escolher-outro-artigo",
    "situacao": "trocas_devolucoes",
    "order": 695,
    "purpose": "expanded real-world coverage",
    "pt": "Tenho o talão de oferta. Posso escolher outro artigo?",
    "en": "I have the gift receipt. Can I choose another item?",
    "zhHans": "我有礼品收据，可以换其他商品吗？",
    "zhHant": "我有禮物收據，可以換其他貨品嗎？"
  },
  {
    "id": "dialogo-trocas_devolucoes-sim-dentro-do-prazo-e-pelo-valor-indicado-no-talao",
    "situacao": "trocas_devolucoes",
    "order": 696,
    "purpose": "expanded real-world coverage",
    "pt": "Sim, dentro do prazo e pelo valor indicado no talão.",
    "en": "Yes, within the deadline and for the value shown on the receipt.",
    "zhHans": "可以，请在期限内按收据金额换购。",
    "zhHant": "可以，請在期限內按收據金額換購。"
  },
  {
    "id": "dialogo-trocas_devolucoes-uma-compra-online-pode-ser-devolvida-nesta-loja",
    "situacao": "trocas_devolucoes",
    "order": 697,
    "purpose": "expanded real-world coverage",
    "pt": "Uma compra online pode ser devolvida nesta loja?",
    "en": "Can an online purchase be returned to this shop?",
    "zhHans": "网购商品可以在这家门店退货吗？",
    "zhHant": "網購貨品可以在這間分店退貨嗎？"
  },
  {
    "id": "dialogo-trocas_devolucoes-depende-do-vendedor-vou-confirmar-pelo-numero-da-encomenda",
    "situacao": "trocas_devolucoes",
    "order": 698,
    "purpose": "expanded real-world coverage",
    "pt": "Depende do vendedor. Vou confirmar pelo número da encomenda.",
    "en": "It depends on the seller. I will check using the order number.",
    "zhHans": "这取决于卖家。我会用订单号查询。",
    "zhHant": "這取決於賣家。我會用訂單編號查詢。"
  },
  {
    "id": "dialogo-policia_documentos-tambem-perdi-o-passaporte-preciso-de-viajar-amanha",
    "situacao": "policia_documentos",
    "order": 699,
    "purpose": "expanded real-world coverage",
    "pt": "Também perdi o passaporte. Preciso de viajar amanhã.",
    "en": "I also lost my passport. I need to travel tomorrow.",
    "zhHans": "我的护照也丢了，明天需要出行。",
    "zhHant": "我的護照也遺失了，明天需要出行。"
  },
  {
    "id": "dialogo-policia_documentos-depois-da-denuncia-contacte-imediatamente-o-seu-consulado",
    "situacao": "policia_documentos",
    "order": 700,
    "purpose": "expanded real-world coverage",
    "pt": "Depois da denúncia, contacte imediatamente o seu consulado.",
    "en": "After filing the report, contact your consulate immediately.",
    "zhHans": "报案后，请立即联系您的领事馆。",
    "zhHant": "報案後，請立即聯絡您的領事館。"
  },
  {
    "id": "dialogo-policia_documentos-posso-receber-uma-copia-em-ingles",
    "situacao": "policia_documentos",
    "order": 701,
    "purpose": "expanded real-world coverage",
    "pt": "Posso receber uma cópia em inglês?",
    "en": "Can I receive a copy in English?",
    "zhHans": "我可以拿到英文副本吗？",
    "zhHant": "我可以取得英文副本嗎？"
  },
  {
    "id": "dialogo-policia_documentos-a-participacao-e-emitida-em-portugues-peca-ao-consulado-orientacao-sobre-traducao",
    "situacao": "policia_documentos",
    "order": 702,
    "purpose": "expanded real-world coverage",
    "pt": "A participação é emitida em português; peça ao consulado orientação sobre tradução.",
    "en": "The report is issued in Portuguese; ask the consulate for guidance on translation.",
    "zhHans": "报案证明以葡萄牙语签发；翻译事宜请咨询领事馆。",
    "zhHant": "報案證明以葡萄牙語簽發；翻譯事宜請向領事館查詢。"
  },
  {
    "id": "dialogo-policia_documentos-encontraram-uma-mochila-parecida-nos-perdidos-e-achados",
    "situacao": "policia_documentos",
    "order": 703,
    "purpose": "expanded real-world coverage",
    "pt": "Encontraram uma mochila parecida nos perdidos e achados.",
    "en": "A similar backpack was found at lost and found.",
    "zhHans": "失物招领处找到一个相似的背包。",
    "zhHant": "失物認領處找到一個相似的背囊。"
  },
  {
    "id": "dialogo-policia_documentos-descreva-a-cor-a-marca-e-o-que-estava-la-dentro",
    "situacao": "policia_documentos",
    "order": 704,
    "purpose": "expanded real-world coverage",
    "pt": "Descreva a cor, a marca e o que estava lá dentro.",
    "en": "Describe the colour, brand, and what was inside.",
    "zhHans": "请描述颜色、品牌和里面的物品。",
    "zhHant": "請描述顏色、品牌和裡面的物品。"
  },
  {
    "id": "dialogo-policia_documentos-era-azul-escura-e-tinha-os-livros-da-minha-filha",
    "situacao": "policia_documentos",
    "order": 705,
    "purpose": "expanded real-world coverage",
    "pt": "Era azul-escura e tinha os livros da minha filha.",
    "en": "It was dark blue and contained my daughter's books.",
    "zhHans": "是深蓝色的，里面有我女儿的书。",
    "zhHant": "是深藍色的，裡面有我女兒的書。"
  },
  {
    "id": "dialogo-policia_documentos-vamos-comparar-a-descricao-antes-de-lhe-mostrar-a-mochila",
    "situacao": "policia_documentos",
    "order": 706,
    "purpose": "expanded real-world coverage",
    "pt": "Vamos comparar a descrição antes de lhe mostrar a mochila.",
    "en": "We will compare the description before showing you the backpack.",
    "zhHans": "我们会先核对描述，再给您看背包。",
    "zhHant": "我們會先核對描述，再給您看背囊。"
  },
  {
    "id": "dialogo-policia_documentos-partiram-o-vidro-do-carro-e-levaram-o-computador",
    "situacao": "policia_documentos",
    "order": 707,
    "purpose": "expanded real-world coverage",
    "pt": "Partiram o vidro do carro e levaram o computador.",
    "en": "They broke the car window and took the computer.",
    "zhHans": "有人砸了车窗并偷走电脑。",
    "zhHant": "有人打破車窗並偷走電腦。"
  },
  {
    "id": "dialogo-policia_documentos-nao-mexa-no-veiculo-ate-os-agentes-registarem-os-danos",
    "situacao": "policia_documentos",
    "order": 708,
    "purpose": "expanded real-world coverage",
    "pt": "Não mexa no veículo até os agentes registarem os danos.",
    "en": "Do not touch the vehicle until the officers record the damage.",
    "zhHans": "警员记录损坏情况前，请不要动车。",
    "zhHant": "警員記錄損毀情況前，請不要移動車輛。"
  },
  {
    "id": "dialogo-policia_documentos-preciso-do-auto-para-entregar-a-seguradora",
    "situacao": "policia_documentos",
    "order": 709,
    "purpose": "expanded real-world coverage",
    "pt": "Preciso do auto para entregar à seguradora.",
    "en": "I need the report for the insurance company.",
    "zhHans": "我需要报案记录交给保险公司。",
    "zhHant": "我需要報案紀錄交給保險公司。"
  },
  {
    "id": "dialogo-policia_documentos-indicamos-o-numero-da-ocorrencia-e-como-pedir-uma-certidao",
    "situacao": "policia_documentos",
    "order": 710,
    "purpose": "expanded real-world coverage",
    "pt": "Indicamos o número da ocorrência e como pedir uma certidão.",
    "en": "We will give you the incident number and explain how to request a certificate.",
    "zhHans": "我们会提供事件编号，并说明如何申请证明。",
    "zhHant": "我們會提供事件編號，並說明如何申請證明書。"
  },
  {
    "id": "dialogo-trabalho_hotelaria-sim-por-favor-e-a-que-horas-e-servido-o-pequeno-almoco",
    "situacao": "trabalho_hotelaria",
    "order": 711,
    "purpose": "expanded real-world coverage",
    "pt": "Sim, por favor. E a que horas é servido o pequeno-almoço?",
    "en": "Yes, please. And what time is breakfast served?",
    "zhHans": "好的。早餐几点供应？",
    "zhHant": "好的。早餐幾點供應？"
  },
  {
    "id": "dialogo-trabalho_hotelaria-das-sete-as-dez-no-restaurante-do-res-do-chao",
    "situacao": "trabalho_hotelaria",
    "order": 712,
    "purpose": "expanded real-world coverage",
    "pt": "Das sete às dez, no restaurante do rés do chão.",
    "en": "From seven to ten, in the restaurant on the ground floor.",
    "zhHans": "七点到十点，在一楼餐厅。",
    "zhHant": "七點到十點，在地下餐廳。"
  },
  {
    "id": "dialogo-trabalho_restauracao-obrigado-pode-trazer-tambem-um-copo-de-agua-por-favor",
    "situacao": "trabalho_restauracao",
    "order": 713,
    "purpose": "expanded real-world coverage",
    "pt": "Obrigado. Pode trazer também um copo de água, por favor?",
    "en": "Thank you. Could you also bring a glass of water, please?",
    "zhHans": "谢谢。也请给我一杯水。",
    "zhHant": "謝謝。也請給我一杯水。"
  },
  {
    "id": "dialogo-trabalho_limpezas-na-proxima-semana-mantenho-o-mesmo-horario",
    "situacao": "trabalho_limpezas",
    "order": 714,
    "purpose": "expanded real-world coverage",
    "pt": "Na próxima semana mantenho o mesmo horário?",
    "en": "Do I keep the same schedule next week?",
    "zhHans": "下周还是同样的时间吗？",
    "zhHant": "下星期還是同樣的時間嗎？"
  },
  {
    "id": "dialogo-trabalho_limpezas-sim-terca-e-sexta-as-nove-se-houver-mudanca-aviso-com-antecedencia",
    "situacao": "trabalho_limpezas",
    "order": 715,
    "purpose": "expanded real-world coverage",
    "pt": "Sim, terça e sexta às nove. Se houver mudança, aviso com antecedência.",
    "en": "Yes, Tuesday and Friday at nine. If anything changes, I will let you know in advance.",
    "zhHans": "是的，星期二和星期五九点。如有变化，我会提前通知。",
    "zhHant": "是的，星期二和星期五九點。如有改動，我會提前通知。"
  },
  {
    "id": "dialogo-trabalho_construcao-esta-bem-vou-confirmar-as-horas-na-folha-antes-de-assinar",
    "situacao": "trabalho_construcao",
    "order": 716,
    "purpose": "expanded real-world coverage",
    "pt": "Está bem. Vou confirmar as horas na folha antes de assinar.",
    "en": "All right. I will check the hours on the sheet before signing.",
    "zhHans": "好的。我签字前会核对工时记录。",
    "zhHant": "好的。我簽名之前會核對工時紀錄。"
  },
  {
    "id": "dialogo-trabalho_entregas-a-app-manda-me-agora-para-o-ponto-de-apoio",
    "situacao": "trabalho_entregas",
    "order": 717,
    "purpose": "expanded real-world coverage",
    "pt": "A app manda-me agora para o ponto de apoio.",
    "en": "The app is now directing me to the support point.",
    "zhHans": "应用程序现在让我前往服务点。",
    "zhHant": "應用程式現在指示我前往支援點。"
  },
  {
    "id": "dialogo-trabalho_entregas-leva-o-pedido-selado-e-mostra-o-numero-da-entrega",
    "situacao": "trabalho_entregas",
    "order": 718,
    "purpose": "expanded real-world coverage",
    "pt": "Leva o pedido selado e mostra o número da entrega.",
    "en": "Take the sealed order and show the delivery number.",
    "zhHans": "带上密封的订单，并出示配送编号。",
    "zhHant": "帶上密封的訂單，並出示送貨編號。"
  },
  {
    "id": "dialogo-trabalho_entregas-entendido-vou-tirar-uma-fotografia-do-comprovativo-quando-o-entregar",
    "situacao": "trabalho_entregas",
    "order": 719,
    "purpose": "expanded real-world coverage",
    "pt": "Entendido. Vou tirar uma fotografia do comprovativo quando o entregar.",
    "en": "Understood. I will photograph the receipt when I hand it over.",
    "zhHans": "明白。交付后我会拍下凭证。",
    "zhHant": "明白。交付後我會拍下證明。"
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
    "pt": "Quero pedir o abono de família para o meu filho. O que tenho de fazer?",
    "en": "I want to apply for family allowance for my child. What do I need to do?",
    "zhHans": "我想给孩子申请家庭津贴。我需要怎么做？",
    "zhHant": "我想給孩子申請家庭津貼。我需要怎麼做？",
    "audioMode": "browser"
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
    "pt": "É preciso levar um berço ou uma cama extra ao quarto [n.º].",
    "en": "A cot or an extra bed needs to be taken to room [no.].",
    "zhHans": "需要把一张婴儿床或加床送到[房号]。",
    "zhHant": "需要把一張嬰兒床或加床送到[房號]。",
    "audioMode": "browser"
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
  },
  {
    "id": "cartao-veterinario-o-meu-cao-nao-come",
    "situacao": "veterinario",
    "order": 171,
    "pt": "O meu cão não come.",
    "en": "My dog isn't eating.",
    "zhHans": "我的狗不吃东西。",
    "zhHant": "我的狗不吃東西。"
  },
  {
    "id": "cartao-veterinario-o-meu-gato-esta-a-vomitar",
    "situacao": "veterinario",
    "order": 172,
    "pt": "O meu gato está a vomitar.",
    "en": "My cat is vomiting.",
    "zhHans": "我的猫在呕吐。",
    "zhHant": "我的貓在嘔吐。"
  },
  {
    "id": "cartao-veterinario-preciso-de-uma-consulta-urgente",
    "situacao": "veterinario",
    "order": 173,
    "pt": "Preciso de uma consulta urgente.",
    "en": "I need an urgent appointment.",
    "zhHans": "我需要紧急看诊。",
    "zhHant": "我需要緊急看診。"
  },
  {
    "id": "cartao-veterinario-e-grave",
    "situacao": "veterinario",
    "order": 174,
    "pt": "É grave?",
    "en": "Is it serious?",
    "zhHans": "严重吗？",
    "zhHant": "嚴重嗎？"
  },
  {
    "id": "cartao-veterinario-a-vacina-esta-em-dia",
    "situacao": "veterinario",
    "order": 175,
    "pt": "A vacina está em dia?",
    "en": "Are the vaccines up to date?",
    "zhHans": "疫苗都打了吗？",
    "zhHant": "疫苗都打了嗎？"
  },
  {
    "id": "cartao-veterinario-quanto-custa-a-vacina",
    "situacao": "veterinario",
    "order": 176,
    "pt": "Quanto custa a vacina?",
    "en": "How much is the vaccine?",
    "zhHans": "疫苗多少钱？",
    "zhHant": "疫苗多少錢？"
  },
  {
    "id": "cartao-veterinario-ele-tem-microchip",
    "situacao": "veterinario",
    "order": 177,
    "pt": "Ele tem microchip.",
    "en": "He has a microchip.",
    "zhHans": "它有芯片。",
    "zhHant": "牠有晶片。"
  },
  {
    "id": "cartao-veterinario-queria-desparasitar-o-meu-gato",
    "situacao": "veterinario",
    "order": 178,
    "pt": "Queria desparasitar o meu gato.",
    "en": "I'd like to deworm my cat.",
    "zhHans": "我想帮猫驱虫。",
    "zhHant": "我想幫貓驅蟲。"
  },
  {
    "id": "cartao-veterinario-ele-coca-se-muito",
    "situacao": "veterinario",
    "order": 179,
    "pt": "Ele coça-se muito.",
    "en": "He scratches himself a lot.",
    "zhHans": "它一直抓痒。",
    "zhHant": "牠一直抓癢。"
  },
  {
    "id": "cartao-veterinario-acho-que-tem-pulgas",
    "situacao": "veterinario",
    "order": 180,
    "pt": "Acho que tem pulgas.",
    "en": "I think he has fleas.",
    "zhHans": "我觉得它有跳蚤。",
    "zhHant": "我覺得牠有跳蚤。"
  },
  {
    "id": "cartao-veterinario-quero-esterilizar-a-minha-gata",
    "situacao": "veterinario",
    "order": 181,
    "pt": "Quero esterilizar a minha gata.",
    "en": "I want to spay my cat.",
    "zhHans": "我想让母猫绝育。",
    "zhHant": "我想讓母貓絕育。"
  },
  {
    "id": "cartao-veterinario-que-racao-recomenda",
    "situacao": "veterinario",
    "order": 182,
    "pt": "Que ração recomenda?",
    "en": "What food do you recommend?",
    "zhHans": "推荐哪种饲料？",
    "zhHant": "推薦哪種飼料？"
  },
  {
    "id": "cartao-veterinario-ele-precisa-de-acaime",
    "situacao": "veterinario",
    "order": 183,
    "pt": "Ele precisa de açaime?",
    "en": "Does he need a muzzle?",
    "zhHans": "它需要嘴套吗？",
    "zhHant": "牠需要嘴套嗎？"
  },
  {
    "id": "cartao-veterinario-posso-ficar-com-ele",
    "situacao": "veterinario",
    "order": 184,
    "pt": "Posso ficar com ele?",
    "en": "Can I stay with him?",
    "zhHans": "我可以陪它吗？",
    "zhHant": "我可以陪牠嗎？"
  },
  {
    "id": "cartao-veterinario-ele-magoou-a-pata",
    "situacao": "veterinario",
    "order": 185,
    "pt": "Ele magoou a pata.",
    "en": "He hurt his paw.",
    "zhHans": "它的脚受伤了。",
    "zhHant": "牠的腳受傷了。"
  },
  {
    "id": "cartao-veterinario-quando-volto-ca",
    "situacao": "veterinario",
    "order": 186,
    "pt": "Quando volto cá?",
    "en": "When do I come back?",
    "zhHans": "我什么时候回诊？",
    "zhHant": "我什麼時候回診？"
  },
  {
    "id": "cartao-ginasio-quanto-e-a-mensalidade",
    "situacao": "ginasio",
    "order": 187,
    "pt": "Quanto é a mensalidade?",
    "en": "How much is the monthly fee?",
    "zhHans": "月费多少？",
    "zhHant": "月費多少？"
  },
  {
    "id": "cartao-ginasio-ha-fidelizacao",
    "situacao": "ginasio",
    "order": 188,
    "pt": "Há fidelização?",
    "en": "Is there a lock-in period?",
    "zhHans": "有绑约吗？",
    "zhHant": "有綁約嗎？"
  },
  {
    "id": "cartao-ginasio-posso-cancelar-quando-quiser",
    "situacao": "ginasio",
    "order": 189,
    "pt": "Posso cancelar quando quiser?",
    "en": "Can I cancel anytime?",
    "zhHans": "可以随时取消吗？",
    "zhHant": "可以隨時取消嗎？"
  },
  {
    "id": "cartao-ginasio-queria-uma-aula-experimental",
    "situacao": "ginasio",
    "order": 190,
    "pt": "Queria uma aula experimental.",
    "en": "I'd like a trial class.",
    "zhHans": "我想上体验课。",
    "zhHant": "我想上體驗課。"
  },
  {
    "id": "cartao-ginasio-a-taxa-de-inscricao-esta-incluida",
    "situacao": "ginasio",
    "order": 191,
    "pt": "A taxa de inscrição está incluída?",
    "en": "Is the joining fee included?",
    "zhHans": "含入会费吗？",
    "zhHant": "含入會費嗎？"
  },
  {
    "id": "cartao-ginasio-ha-aulas-de-grupo",
    "situacao": "ginasio",
    "order": 193,
    "pt": "Há aulas de grupo?",
    "en": "Are there group classes?",
    "zhHans": "有团体课吗？",
    "zhHant": "有團體課嗎？"
  },
  {
    "id": "cartao-ginasio-onde-sao-os-balnearios",
    "situacao": "ginasio",
    "order": 195,
    "pt": "Onde são os balneários?",
    "en": "Where are the changing rooms?",
    "zhHans": "更衣室在哪？",
    "zhHant": "更衣室在哪？"
  },
  {
    "id": "cartao-ginasio-onde-estao-os-cacifos",
    "situacao": "ginasio",
    "order": 196,
    "pt": "Onde estão os cacifos?",
    "en": "Where are the lockers?",
    "zhHans": "置物柜在哪？",
    "zhHant": "置物櫃在哪？"
  },
  {
    "id": "cartao-ginasio-preciso-de-cadeado",
    "situacao": "ginasio",
    "order": 197,
    "pt": "Preciso de cadeado?",
    "en": "Do I need a padlock?",
    "zhHans": "需要挂锁吗？",
    "zhHant": "需要掛鎖嗎？"
  },
  {
    "id": "cartao-ginasio-como-funciona-esta-maquina",
    "situacao": "ginasio",
    "order": 198,
    "pt": "Como funciona esta máquina?",
    "en": "How does this machine work?",
    "zhHans": "这台器械怎么用？",
    "zhHant": "這台器械怎麼用？"
  },
  {
    "id": "cartao-ginasio-pode-ajudar-me-por-favor",
    "situacao": "ginasio",
    "order": 199,
    "pt": "Pode ajudar-me, por favor?",
    "en": "Can you help me, please?",
    "zhHans": "可以帮我吗？",
    "zhHant": "可以幫我嗎？"
  },
  {
    "id": "cartao-ginasio-magoei-me-no-treino",
    "situacao": "ginasio",
    "order": 200,
    "pt": "Magoei-me no treino.",
    "en": "I hurt myself training.",
    "zhHans": "我训练时受伤了。",
    "zhHant": "我訓練時受傷了。"
  },
  {
    "id": "cartao-ginasio-quero-falar-com-um-treinador",
    "situacao": "ginasio",
    "order": 201,
    "pt": "Quero falar com um treinador.",
    "en": "I want to talk to a trainer.",
    "zhHans": "我想找教练。",
    "zhHant": "我想找教練。"
  },
  {
    "id": "cartao-ginasio-quero-cancelar-o-contrato",
    "situacao": "ginasio",
    "order": 202,
    "pt": "Quero cancelar o contrato.",
    "en": "I want to cancel my contract.",
    "zhHans": "我想解约。",
    "zhHant": "我想解約。"
  },
  {
    "id": "cartao-convivio-entao-tudo-bem",
    "situacao": "convivio",
    "order": 203,
    "pt": "Então, tudo bem?",
    "en": "So, how's it going?",
    "zhHans": "最近好吗？",
    "zhHant": "最近好嗎？"
  },
  {
    "id": "cartao-convivio-ha-quanto-tempo",
    "situacao": "convivio",
    "order": 204,
    "pt": "Há quanto tempo!",
    "en": "Long time no see!",
    "zhHans": "好久不见！",
    "zhHant": "好久不見！"
  },
  {
    "id": "cartao-convivio-queres-ir-tomar-um-cafe",
    "situacao": "convivio",
    "order": 205,
    "pt": "Queres ir tomar um café?",
    "en": "Want to grab a coffee?",
    "zhHans": "要去喝咖啡吗？",
    "zhHant": "要去喝咖啡嗎？"
  },
  {
    "id": "cartao-convivio-estas-livre-no-sabado",
    "situacao": "convivio",
    "order": 206,
    "pt": "Estás livre no sábado?",
    "en": "Are you free on Saturday?",
    "zhHans": "你周六有空吗？",
    "zhHant": "你週六有空嗎？"
  },
  {
    "id": "cartao-convivio-apetece-te-jantar-fora",
    "situacao": "convivio",
    "order": 207,
    "pt": "Apetece-te jantar fora?",
    "en": "Feel like eating out?",
    "zhHans": "想出去吃晚餐吗？",
    "zhHant": "想出去吃晚餐嗎？"
  },
  {
    "id": "cartao-convivio-onde-nos-encontramos",
    "situacao": "convivio",
    "order": 208,
    "pt": "Onde nos encontramos?",
    "en": "Where shall we meet?",
    "zhHans": "我们在哪见面？",
    "zhHant": "我們在哪見面？"
  },
  {
    "id": "cartao-convivio-a-que-horas-combinamos",
    "situacao": "convivio",
    "order": 209,
    "pt": "A que horas combinamos?",
    "en": "What time shall we say?",
    "zhHans": "约几点？",
    "zhHant": "約幾點？"
  },
  {
    "id": "cartao-convivio-desculpa-o-atraso",
    "situacao": "convivio",
    "order": 210,
    "pt": "Desculpa o atraso.",
    "en": "Sorry I'm late.",
    "zhHans": "抱歉迟到了。",
    "zhHant": "抱歉遲到了。"
  },
  {
    "id": "cartao-convivio-tenho-de-desmarcar-desculpa",
    "situacao": "convivio",
    "order": 211,
    "pt": "Tenho de desmarcar, desculpa.",
    "en": "I have to cancel, sorry.",
    "zhHans": "抱歉，我得取消。",
    "zhHant": "抱歉，我得取消。"
  },
  {
    "id": "cartao-convivio-fica-para-a-proxima",
    "situacao": "convivio",
    "order": 212,
    "pt": "Fica para a próxima.",
    "en": "Next time, then.",
    "zhHans": "下次再约。",
    "zhHant": "下次再約。"
  },
  {
    "id": "cartao-convivio-eu-ofereco",
    "situacao": "convivio",
    "order": 213,
    "pt": "Eu ofereço!",
    "en": "My treat!",
    "zhHans": "我请客！",
    "zhHant": "我請客！"
  },
  {
    "id": "cartao-convivio-vamos-dividir-a-conta",
    "situacao": "convivio",
    "order": 214,
    "pt": "Vamos dividir a conta?",
    "en": "Shall we split the bill?",
    "zhHans": "我们分摊吧？",
    "zhHant": "我們分攤吧？"
  },
  {
    "id": "cartao-convivio-parabens",
    "situacao": "convivio",
    "order": 215,
    "pt": "Parabéns!",
    "en": "Happy birthday! / Congratulations!",
    "zhHans": "恭喜！",
    "zhHant": "恭喜！"
  },
  {
    "id": "cartao-convivio-saude",
    "situacao": "convivio",
    "order": 216,
    "pt": "Saúde!",
    "en": "Cheers!",
    "zhHans": "干杯！",
    "zhHant": "乾杯！"
  },
  {
    "id": "cartao-convivio-diverti-me-muito",
    "situacao": "convivio",
    "order": 217,
    "pt": "Diverti-me muito.",
    "en": "I had a great time.",
    "zhHans": "我玩得很开心。",
    "zhHant": "我玩得很開心。"
  },
  {
    "id": "cartao-convivio-ate-a-proxima",
    "situacao": "convivio",
    "order": 218,
    "pt": "Até à próxima!",
    "en": "See you next time!",
    "zhHans": "下次见！",
    "zhHant": "下次見！"
  },
  {
    "id": "cartao-vizinhos-sou-o-seu-vizinho-novo",
    "situacao": "vizinhos",
    "order": 219,
    "pt": "Sou o seu vizinho novo.",
    "en": "I'm your new neighbor.",
    "zhHans": "我是新邻居。",
    "zhHant": "我是新鄰居。"
  },
  {
    "id": "cartao-vizinhos-desculpe-o-barulho",
    "situacao": "vizinhos",
    "order": 220,
    "pt": "Desculpe o barulho.",
    "en": "Sorry about the noise.",
    "zhHans": "抱歉吵到您了。",
    "zhHant": "抱歉吵到您了。"
  },
  {
    "id": "cartao-vizinhos-pode-falar-mais-baixo-por-favor",
    "situacao": "vizinhos",
    "order": 221,
    "pt": "Pode falar mais baixo, por favor?",
    "en": "Could you keep it down, please?",
    "zhHans": "可以小声一点吗？",
    "zhHant": "可以小聲一點嗎？"
  },
  {
    "id": "cartao-vizinhos-o-barulho-incomoda-e-tarde",
    "situacao": "vizinhos",
    "order": 222,
    "pt": "O barulho incomoda, é tarde.",
    "en": "The noise is bothering us, it's late.",
    "zhHans": "太晚了，噪音打扰到人。",
    "zhHant": "太晚了，噪音打擾到人。"
  },
  {
    "id": "cartao-vizinhos-o-elevador-esta-avariado",
    "situacao": "vizinhos",
    "order": 223,
    "pt": "O elevador está avariado.",
    "en": "The elevator is out of order.",
    "zhHans": "电梯坏了。",
    "zhHant": "電梯壞了。"
  },
  {
    "id": "cartao-vizinhos-quando-e-a-reuniao-de-condominio",
    "situacao": "vizinhos",
    "order": 224,
    "pt": "Quando é a reunião de condomínio?",
    "en": "When is the building meeting?",
    "zhHans": "业主大会是什么时候？",
    "zhHant": "業主大會是什麼時候？"
  },
  {
    "id": "cartao-vizinhos-pode-receber-uma-encomenda",
    "situacao": "vizinhos",
    "order": 225,
    "pt": "Pode receber uma encomenda?",
    "en": "Can you take in a package?",
    "zhHans": "可以帮我收包裹吗？",
    "zhHant": "可以幫我收包裹嗎？"
  },
  {
    "id": "cartao-vizinhos-pode-regar-as-minhas-plantas",
    "situacao": "vizinhos",
    "order": 226,
    "pt": "Pode regar as minhas plantas?",
    "en": "Can you water my plants?",
    "zhHans": "可以帮我浇花吗？",
    "zhHant": "可以幫我澆花嗎？"
  },
  {
    "id": "cartao-vizinhos-posso-deixar-lhe-a-chave",
    "situacao": "vizinhos",
    "order": 227,
    "pt": "Posso deixar-lhe a chave?",
    "en": "Can I leave you my key?",
    "zhHans": "钥匙可以放您那吗？",
    "zhHant": "鑰匙可以放您那嗎？"
  },
  {
    "id": "cartao-vizinhos-onde-fica-a-reciclagem",
    "situacao": "vizinhos",
    "order": 228,
    "pt": "Onde fica a reciclagem?",
    "en": "Where's the recycling?",
    "zhHans": "回收站在哪？",
    "zhHant": "回收站在哪？"
  },
  {
    "id": "cartao-vizinhos-quando-recolhem-o-lixo",
    "situacao": "vizinhos",
    "order": 229,
    "pt": "Quando recolhem o lixo?",
    "en": "When is the trash collected?",
    "zhHans": "垃圾什么时候收？",
    "zhHant": "垃圾什麼時候收？"
  },
  {
    "id": "cartao-vizinhos-ha-obras-no-predio",
    "situacao": "vizinhos",
    "order": 230,
    "pt": "Há obras no prédio?",
    "en": "Is there construction in the building?",
    "zhHans": "大楼在施工吗？",
    "zhHant": "大樓在施工嗎？"
  },
  {
    "id": "cartao-vizinhos-este-lugar-de-estacionamento-e-seu",
    "situacao": "vizinhos",
    "order": 231,
    "pt": "Este lugar de estacionamento é seu?",
    "en": "Is this parking spot yours?",
    "zhHans": "这个车位是您的吗？",
    "zhHant": "這個車位是您的嗎？"
  },
  {
    "id": "cartao-vizinhos-posso-pedir-lhe-um-favor",
    "situacao": "vizinhos",
    "order": 232,
    "pt": "Posso pedir-lhe um favor?",
    "en": "Can I ask you a favor?",
    "zhHans": "能请您帮个忙吗？",
    "zhHant": "能請您幫個忙嗎？"
  },
  {
    "id": "cartao-vizinhos-obrigado-pela-ajuda",
    "situacao": "vizinhos",
    "order": 233,
    "pt": "Obrigado pela ajuda.",
    "en": "Thanks for the help.",
    "zhHans": "谢谢帮忙。",
    "zhHant": "謝謝幫忙。"
  },
  {
    "id": "cartao-vizinhos-a-campainha-nao-funciona",
    "situacao": "vizinhos",
    "order": 234,
    "pt": "A campainha não funciona.",
    "en": "The doorbell doesn't work.",
    "zhHans": "门铃坏了。",
    "zhHant": "門鈴壞了。"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-queria-marcar-um-corte",
    "situacao": "cabeleireiro_barbeiro",
    "order": 235,
    "pt": "Queria marcar um corte.",
    "en": "I'd like to book a haircut.",
    "zhHans": "我想预约剪发。",
    "zhHant": "我想預約剪髮。"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-e-preciso-marcacao",
    "situacao": "cabeleireiro_barbeiro",
    "order": 236,
    "pt": "É preciso marcação?",
    "en": "Do I need an appointment?",
    "zhHans": "需要预约吗？",
    "zhHant": "需要預約嗎？"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-so-aparar-as-pontas",
    "situacao": "cabeleireiro_barbeiro",
    "order": 237,
    "pt": "Só aparar as pontas.",
    "en": "Just trim the ends.",
    "zhHans": "只修发尾。",
    "zhHant": "只修髮尾。"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-nao-muito-curto-por-favor",
    "situacao": "cabeleireiro_barbeiro",
    "order": 238,
    "pt": "Não muito curto, por favor.",
    "en": "Not too short, please.",
    "zhHans": "别剪太短。",
    "zhHant": "別剪太短。"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-uns-dois-dedos",
    "situacao": "cabeleireiro_barbeiro",
    "order": 239,
    "pt": "Uns dois dedos.",
    "en": "About two fingers' worth.",
    "zhHans": "大概两指长。",
    "zhHant": "大概兩指長。"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-corte-a-franja-tambem",
    "situacao": "cabeleireiro_barbeiro",
    "order": 240,
    "pt": "Corte a franja também.",
    "en": "Cut the bangs too.",
    "zhHans": "刘海也剪一下。",
    "zhHant": "瀏海也剪一下。"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-maquina-numero-tres-dos-lados",
    "situacao": "cabeleireiro_barbeiro",
    "order": 241,
    "pt": "Máquina número três dos lados.",
    "en": "Number three clippers on the sides.",
    "zhHans": "两侧用三号电剪。",
    "zhHant": "兩側用三號電剪。"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-quero-mudar-de-visual",
    "situacao": "cabeleireiro_barbeiro",
    "order": 242,
    "pt": "Quero mudar de visual.",
    "en": "I want a new look.",
    "zhHans": "我想换造型。",
    "zhHant": "我想換造型。"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-queria-pintar-o-cabelo",
    "situacao": "cabeleireiro_barbeiro",
    "order": 243,
    "pt": "Queria pintar o cabelo.",
    "en": "I'd like to dye my hair.",
    "zhHans": "我想染发。",
    "zhHant": "我想染髮。"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-um-tom-mais-claro",
    "situacao": "cabeleireiro_barbeiro",
    "order": 244,
    "pt": "Um tom mais claro.",
    "en": "A lighter shade.",
    "zhHans": "浅一点的颜色。",
    "zhHant": "淺一點的顏色。"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-pode-aparar-a-barba",
    "situacao": "cabeleireiro_barbeiro",
    "order": 245,
    "pt": "Pode aparar a barba?",
    "en": "Can you trim my beard?",
    "zhHans": "可以修胡子吗？",
    "zhHant": "可以修鬍子嗎？"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-deixe-o-bigode",
    "situacao": "cabeleireiro_barbeiro",
    "order": 246,
    "pt": "Deixe o bigode.",
    "en": "Leave the mustache.",
    "zhHans": "小胡子留着。",
    "zhHant": "小鬍子留著。"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-sem-gel-obrigado",
    "situacao": "cabeleireiro_barbeiro",
    "order": 247,
    "pt": "Sem gel, obrigado.",
    "en": "No gel, thanks.",
    "zhHans": "不用发胶，谢谢。",
    "zhHant": "不用髮膠，謝謝。"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-pode-secar",
    "situacao": "cabeleireiro_barbeiro",
    "order": 248,
    "pt": "Pode secar?",
    "en": "Can you blow-dry it?",
    "zhHans": "可以吹干吗？",
    "zhHant": "可以吹乾嗎？"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-assim-esta-perfeito",
    "situacao": "cabeleireiro_barbeiro",
    "order": 249,
    "pt": "Assim está perfeito.",
    "en": "It's perfect like this.",
    "zhHans": "这样就很好。",
    "zhHant": "這樣就很好。"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-quanto-custa-o-corte",
    "situacao": "cabeleireiro_barbeiro",
    "order": 250,
    "pt": "Quanto custa o corte?",
    "en": "How much is the haircut?",
    "zhHans": "剪发多少钱？",
    "zhHant": "剪髮多少錢？"
  },
  {
    "id": "cartao-farmacia-tenho-dor-de-cabeca",
    "situacao": "farmacia",
    "order": 251,
    "pt": "Tenho dor de cabeça.",
    "en": "I have a headache.",
    "zhHans": "我头痛。",
    "zhHant": "我頭痛。"
  },
  {
    "id": "cartao-farmacia-tenho-dor-de-garganta",
    "situacao": "farmacia",
    "order": 252,
    "pt": "Tenho dor de garganta.",
    "en": "I have a sore throat.",
    "zhHans": "我喉咙痛。",
    "zhHant": "我喉嚨痛。"
  },
  {
    "id": "cartao-farmacia-tenho-tosse-e-febre",
    "situacao": "farmacia",
    "order": 253,
    "pt": "Tenho tosse e febre.",
    "en": "I have a cough and a fever.",
    "zhHans": "我咳嗽又发烧。",
    "zhHant": "我咳嗽又發燒。"
  },
  {
    "id": "cartao-farmacia-estou-constipado",
    "situacao": "farmacia",
    "order": 254,
    "pt": "Estou constipado.",
    "en": "I have a cold.",
    "zhHans": "我感冒了。",
    "zhHant": "我感冒了。"
  },
  {
    "id": "cartao-farmacia-tenho-alergia",
    "situacao": "farmacia",
    "order": 255,
    "pt": "Tenho alergia.",
    "en": "I have an allergy.",
    "zhHans": "我过敏。",
    "zhHant": "我過敏。"
  },
  {
    "id": "cartao-farmacia-preciso-de-algo-para-a-dor",
    "situacao": "farmacia",
    "order": 256,
    "pt": "Preciso de algo para a dor.",
    "en": "I need something for pain.",
    "zhHans": "我需要止痛的药。",
    "zhHant": "我需要止痛的藥。"
  },
  {
    "id": "cartao-farmacia-e-preciso-receita",
    "situacao": "farmacia",
    "order": 257,
    "pt": "É preciso receita?",
    "en": "Do I need a prescription?",
    "zhHans": "需要处方吗？",
    "zhHant": "需要處方嗎？"
  },
  {
    "id": "cartao-farmacia-ha-generico",
    "situacao": "farmacia",
    "order": 258,
    "pt": "Há genérico?",
    "en": "Is there a generic?",
    "zhHans": "有仿制药吗？",
    "zhHant": "有學名藥嗎？"
  },
  {
    "id": "cartao-farmacia-como-se-toma",
    "situacao": "farmacia",
    "order": 259,
    "pt": "Como se toma?",
    "en": "How do I take it?",
    "zhHans": "怎么服用？",
    "zhHant": "怎麼服用？"
  },
  {
    "id": "cartao-farmacia-quantas-vezes-por-dia",
    "situacao": "farmacia",
    "order": 260,
    "pt": "Quantas vezes por dia?",
    "en": "How many times a day?",
    "zhHans": "一天几次？",
    "zhHant": "一天幾次？"
  },
  {
    "id": "cartao-farmacia-em-jejum-ou-as-refeicoes",
    "situacao": "farmacia",
    "order": 261,
    "pt": "Em jejum ou às refeições?",
    "en": "On an empty stomach or with meals?",
    "zhHans": "空腹还是随餐？",
    "zhHant": "空腹還是隨餐？"
  },
  {
    "id": "cartao-farmacia-tem-efeitos-secundarios",
    "situacao": "farmacia",
    "order": 262,
    "pt": "Tem efeitos secundários?",
    "en": "Does it have side effects?",
    "zhHans": "有副作用吗？",
    "zhHant": "有副作用嗎？"
  },
  {
    "id": "cartao-farmacia-estou-gravida-posso-tomar",
    "situacao": "farmacia",
    "order": 263,
    "pt": "Estou grávida. Posso tomar?",
    "en": "I'm pregnant. Can I take it?",
    "zhHans": "我怀孕了，能吃吗？",
    "zhHant": "我懷孕了，能吃嗎？"
  },
  {
    "id": "cartao-farmacia-pode-medir-me-a-tensao",
    "situacao": "farmacia",
    "order": 264,
    "pt": "Pode medir-me a tensão?",
    "en": "Can you take my blood pressure?",
    "zhHans": "可以帮我量血压吗？",
    "zhHant": "可以幫我量血壓嗎？"
  },
  {
    "id": "cartao-farmacia-onde-e-a-farmacia-de-servico",
    "situacao": "farmacia",
    "order": 265,
    "pt": "Onde é a farmácia de serviço?",
    "en": "Where's the on-duty pharmacy?",
    "zhHans": "值班药店在哪？",
    "zhHant": "值班藥局在哪？"
  },
  {
    "id": "cartao-farmacia-queria-pensos-rapidos",
    "situacao": "farmacia",
    "order": 266,
    "pt": "Queria pensos rápidos.",
    "en": "I'd like some band-aids.",
    "zhHans": "我要创可贴。",
    "zhHant": "我要OK繃。"
  },
  {
    "id": "cartao-supermercado_mercado-onde-encontro-este-produto",
    "situacao": "supermercado_mercado",
    "order": 267,
    "pt": "Onde encontro este produto?",
    "en": "Where can I find this product?",
    "zhHans": "这个商品在哪里？",
    "zhHant": "這件商品在哪裡？"
  },
  {
    "id": "cartao-supermercado_mercado-pode-pesar-isto-por-favor",
    "situacao": "supermercado_mercado",
    "order": 268,
    "pt": "Pode pesar isto, por favor?",
    "en": "Can you weigh this, please?",
    "zhHans": "可以帮我称一下吗？",
    "zhHant": "可以幫我磅一下嗎？"
  },
  {
    "id": "cartao-supermercado_mercado-este-preco-e-por-quilo",
    "situacao": "supermercado_mercado",
    "order": 269,
    "pt": "Este preço é por quilo?",
    "en": "Is this price per kilo?",
    "zhHans": "这个价格是每公斤吗？",
    "zhHant": "這個價錢是每公斤嗎？"
  },
  {
    "id": "cartao-supermercado_mercado-queria-fatura-com-nif",
    "situacao": "supermercado_mercado",
    "order": 270,
    "pt": "Queria fatura com NIF.",
    "en": "I'd like a receipt with my NIF.",
    "zhHans": "请开具含税号的发票。",
    "zhHant": "請開具含稅號的發票。"
  },
  {
    "id": "cartao-supermercado_mercado-posso-pagar-com-cartao",
    "situacao": "supermercado_mercado",
    "order": 271,
    "pt": "Posso pagar com cartão?",
    "en": "Can I pay by card?",
    "zhHans": "可以刷卡吗？",
    "zhHant": "可以用卡付款嗎？"
  },
  {
    "id": "cartao-cafe_restaurante-tem-mesa-para-duas-pessoas",
    "situacao": "cafe_restaurante",
    "order": 272,
    "pt": "Tem mesa para duas pessoas?",
    "en": "Do you have a table for two?",
    "zhHans": "有两个人的桌位吗？",
    "zhHant": "有兩個人的座位嗎？"
  },
  {
    "id": "cartao-cafe_restaurante-qual-e-o-prato-do-dia",
    "situacao": "cafe_restaurante",
    "order": 273,
    "pt": "Qual é o prato do dia?",
    "en": "What's today's special?",
    "zhHans": "今日特餐是什么？",
    "zhHant": "今日特餐是甚麼？"
  },
  {
    "id": "cartao-cafe_restaurante-tenho-alergia-a-frutos-secos",
    "situacao": "cafe_restaurante",
    "order": 274,
    "pt": "Tenho alergia a frutos secos.",
    "en": "I'm allergic to nuts.",
    "zhHans": "我对坚果过敏。",
    "zhHant": "我對果仁敏感。"
  },
  {
    "id": "cartao-cafe_restaurante-podemos-pagar-em-separado",
    "situacao": "cafe_restaurante",
    "order": 275,
    "pt": "Podemos pagar em separado?",
    "en": "Can we pay separately?",
    "zhHans": "可以分开付款吗？",
    "zhHant": "可以分開付款嗎？"
  },
  {
    "id": "cartao-cafe_restaurante-a-conta-por-favor",
    "situacao": "cafe_restaurante",
    "order": 276,
    "pt": "A conta, por favor.",
    "en": "The bill, please.",
    "zhHans": "请结账。",
    "zhHant": "唔該埋單。"
  },
  {
    "id": "cartao-consultorio_medico-tenho-esta-dor-ha-tres-dias",
    "situacao": "consultorio_medico",
    "order": 277,
    "pt": "Tenho esta dor há três dias.",
    "en": "I've had this pain for three days.",
    "zhHans": "我已经痛了三天。",
    "zhHant": "我已經痛了三天。"
  },
  {
    "id": "cartao-consultorio_medico-a-dor-piora-quando-respiro",
    "situacao": "consultorio_medico",
    "order": 278,
    "pt": "A dor piora quando respiro.",
    "en": "The pain gets worse when I breathe.",
    "zhHans": "呼吸时疼痛加重。",
    "zhHant": "呼吸時疼痛加重。"
  },
  {
    "id": "cartao-consultorio_medico-estou-a-tomar-este-medicamento",
    "situacao": "consultorio_medico",
    "order": 279,
    "pt": "Estou a tomar este medicamento.",
    "en": "I'm taking this medicine.",
    "zhHans": "我正在服用这种药。",
    "zhHant": "我正在服用這種藥。"
  },
  {
    "id": "cartao-consultorio_medico-sou-alergico-a-penicilina",
    "situacao": "consultorio_medico",
    "order": 280,
    "pt": "Sou alérgico a penicilina.",
    "en": "I'm allergic to penicillin.",
    "zhHans": "我对青霉素过敏。",
    "zhHant": "我對盤尼西林敏感。"
  },
  {
    "id": "cartao-consultorio_medico-quando-devo-voltar",
    "situacao": "consultorio_medico",
    "order": 281,
    "pt": "Quando devo voltar?",
    "en": "When should I come back?",
    "zhHans": "我什么时候再来？",
    "zhHant": "我甚麼時候再來？"
  },
  {
    "id": "cartao-casa_reparacoes-ha-uma-fuga-de-agua",
    "situacao": "casa_reparacoes",
    "order": 282,
    "pt": "Há uma fuga de água.",
    "en": "There's a water leak.",
    "zhHans": "漏水了。",
    "zhHant": "漏水了。"
  },
  {
    "id": "cartao-casa_reparacoes-o-esquentador-nao-liga",
    "situacao": "casa_reparacoes",
    "order": 283,
    "pt": "O esquentador não liga.",
    "en": "The water heater won't turn on.",
    "zhHans": "热水器无法启动。",
    "zhHant": "熱水爐無法啟動。"
  },
  {
    "id": "cartao-casa_reparacoes-pode-enviar-me-um-orcamento",
    "situacao": "casa_reparacoes",
    "order": 284,
    "pt": "Pode enviar-me um orçamento?",
    "en": "Can you send me a quote?",
    "zhHans": "可以给我发报价吗？",
    "zhHant": "可以傳報價給我嗎？"
  },
  {
    "id": "cartao-casa_reparacoes-quando-pode-vir-fazer-a-reparacao",
    "situacao": "casa_reparacoes",
    "order": 285,
    "pt": "Quando pode vir fazer a reparação?",
    "en": "When can you come and repair it?",
    "zhHans": "什么时候可以来维修？",
    "zhHant": "甚麼時候可以來維修？"
  },
  {
    "id": "cartao-casa_reparacoes-a-avaria-e-urgente",
    "situacao": "casa_reparacoes",
    "order": 286,
    "pt": "A avaria é urgente.",
    "en": "The fault is urgent.",
    "zhHans": "这个故障很紧急。",
    "zhHant": "這個故障很緊急。"
  },
  {
    "id": "cartao-agua_luz_gas-quero-mudar-o-titular-do-contrato",
    "situacao": "agua_luz_gas",
    "order": 287,
    "pt": "Quero mudar o titular do contrato.",
    "en": "I want to change the account holder.",
    "zhHans": "我想更改合同户名。",
    "zhHant": "我想更改合約戶名。"
  },
  {
    "id": "cartao-agua_luz_gas-quero-comunicar-a-leitura-do-contador",
    "situacao": "agua_luz_gas",
    "order": 288,
    "pt": "Quero comunicar a leitura do contador.",
    "en": "I want to submit a meter reading.",
    "zhHans": "我想提交抄表数值。",
    "zhHant": "我想提交抄錶數值。"
  },
  {
    "id": "cartao-agua_luz_gas-a-fatura-parece-estar-errada",
    "situacao": "agua_luz_gas",
    "order": 289,
    "pt": "A fatura parece estar errada.",
    "en": "The bill seems to be wrong.",
    "zhHans": "账单似乎有误。",
    "zhHant": "賬單似乎有誤。"
  },
  {
    "id": "cartao-agua_luz_gas-estamos-sem-eletricidade",
    "situacao": "agua_luz_gas",
    "order": 290,
    "pt": "Estamos sem eletricidade.",
    "en": "We have no electricity.",
    "zhHans": "我们停电了。",
    "zhHant": "我們停電了。"
  },
  {
    "id": "cartao-agua_luz_gas-sinto-cheiro-a-gas",
    "situacao": "agua_luz_gas",
    "order": 291,
    "pt": "Sinto cheiro a gás.",
    "en": "I can smell gas.",
    "zhHans": "我闻到燃气味。",
    "zhHant": "我聞到燃氣味。"
  },
  {
    "id": "cartao-telemovel_internet-queria-um-cartao-pre-pago",
    "situacao": "telemovel_internet",
    "order": 292,
    "pt": "Queria um cartão pré-pago.",
    "en": "I'd like a prepaid SIM card.",
    "zhHans": "我想要一张预付费卡。",
    "zhHant": "我想要一張預付費卡。"
  },
  {
    "id": "cartao-telemovel_internet-este-tarifario-tem-fidelizacao",
    "situacao": "telemovel_internet",
    "order": 293,
    "pt": "Este tarifário tem fidelização?",
    "en": "Does this plan have a lock-in period?",
    "zhHans": "这个套餐有合约期吗？",
    "zhHant": "這個方案有綁約期嗎？"
  },
  {
    "id": "cartao-telemovel_internet-a-internet-esta-sempre-a-falhar",
    "situacao": "telemovel_internet",
    "order": 294,
    "pt": "A internet está sempre a falhar.",
    "en": "The internet keeps dropping out.",
    "zhHans": "网络总是断线。",
    "zhHant": "網絡經常斷線。"
  },
  {
    "id": "cartao-telemovel_internet-o-router-nao-tem-sinal",
    "situacao": "telemovel_internet",
    "order": 295,
    "pt": "O router não tem sinal.",
    "en": "The router has no signal.",
    "zhHans": "路由器没有信号。",
    "zhHant": "路由器沒有訊號。"
  },
  {
    "id": "cartao-telemovel_internet-quando-pode-vir-o-tecnico",
    "situacao": "telemovel_internet",
    "order": 296,
    "pt": "Quando pode vir o técnico?",
    "en": "When can the technician come?",
    "zhHans": "技术人员什么时候能来？",
    "zhHant": "技術人員甚麼時候能來？"
  },
  {
    "id": "cartao-trocas_devolucoes-posso-experimentar",
    "situacao": "trocas_devolucoes",
    "order": 297,
    "pt": "Posso experimentar?",
    "en": "May I try it on?",
    "zhHans": "可以试穿吗？",
    "zhHant": "可以試穿嗎？"
  },
  {
    "id": "cartao-trocas_devolucoes-tem-este-modelo-noutro-tamanho",
    "situacao": "trocas_devolucoes",
    "order": 298,
    "pt": "Tem este modelo noutro tamanho?",
    "en": "Do you have this in another size?",
    "zhHans": "这个款式有其他尺码吗？",
    "zhHant": "這個款式有其他尺碼嗎？"
  },
  {
    "id": "cartao-trocas_devolucoes-queria-trocar-este-artigo",
    "situacao": "trocas_devolucoes",
    "order": 299,
    "pt": "Queria trocar este artigo.",
    "en": "I'd like to exchange this item.",
    "zhHans": "我想换这件商品。",
    "zhHant": "我想換這件商品。"
  },
  {
    "id": "cartao-trocas_devolucoes-o-produto-veio-com-defeito",
    "situacao": "trocas_devolucoes",
    "order": 300,
    "pt": "O produto veio com defeito.",
    "en": "The product arrived defective.",
    "zhHans": "商品到货时有瑕疵。",
    "zhHant": "商品到貨時有瑕疵。"
  },
  {
    "id": "cartao-trocas_devolucoes-prefiro-o-reembolso",
    "situacao": "trocas_devolucoes",
    "order": 301,
    "pt": "Prefiro o reembolso.",
    "en": "I'd prefer a refund.",
    "zhHans": "我想退款。",
    "zhHant": "我想退款。"
  },
  {
    "id": "cartao-policia_documentos-perdi-a-carteira",
    "situacao": "policia_documentos",
    "order": 302,
    "pt": "Perdi a carteira.",
    "en": "I lost my wallet.",
    "zhHans": "我丢了钱包。",
    "zhHant": "我遺失了銀包。"
  },
  {
    "id": "cartao-policia_documentos-o-meu-telemovel-foi-roubado",
    "situacao": "policia_documentos",
    "order": 303,
    "pt": "O meu telemóvel foi roubado.",
    "en": "My phone was stolen.",
    "zhHans": "我的手机被盗了。",
    "zhHant": "我的手機被盜了。"
  },
  {
    "id": "cartao-policia_documentos-quero-apresentar-uma-denuncia",
    "situacao": "policia_documentos",
    "order": 304,
    "pt": "Quero apresentar uma denúncia.",
    "en": "I want to file a police report.",
    "zhHans": "我要报案。",
    "zhHant": "我要報案。"
  },
  {
    "id": "cartao-policia_documentos-preciso-de-uma-copia-do-auto",
    "situacao": "policia_documentos",
    "order": 305,
    "pt": "Preciso de uma cópia do auto.",
    "en": "I need a copy of the report.",
    "zhHans": "我需要报告副本。",
    "zhHant": "我需要報告副本。"
  },
  {
    "id": "cartao-policia_documentos-qual-e-o-numero-da-ocorrencia",
    "situacao": "policia_documentos",
    "order": 306,
    "pt": "Qual é o número da ocorrência?",
    "en": "What is the incident reference number?",
    "zhHans": "事件编号是多少？",
    "zhHant": "事件編號是多少？"
  },
  {
    "id": "cartao-espaco_cidadao-quero-alterar-e-confirmar-a-morada-do-cartao-de-cidadao",
    "situacao": "espaco_cidadao",
    "order": 307,
    "purpose": "other-service",
    "pt": "Quero alterar e confirmar a morada do Cartão de Cidadão.",
    "en": "I want to change and confirm the address on my Citizen Card.",
    "zhHans": "我想更改并确认公民卡地址。",
    "zhHant": "我想更改並確認公民證地址。"
  },
  {
    "id": "cartao-espaco_cidadao-este-balcao-faz-renovacao-da-carta-de-conducao",
    "situacao": "espaco_cidadao",
    "order": 308,
    "purpose": "availability",
    "pt": "Este balcão faz renovação da carta de condução?",
    "en": "Does this desk renew driving licences?",
    "zhHans": "这个服务台可以续期驾驶证吗？",
    "zhHant": "這個服務台可以續期駕駛執照嗎？"
  },
  {
    "id": "cartao-espaco_cidadao-falta-algum-documento-para-concluir-o-servico",
    "situacao": "espaco_cidadao",
    "order": 309,
    "purpose": "documents",
    "pt": "Falta algum documento para concluir o serviço?",
    "en": "Is any document missing to complete the service?",
    "zhHans": "办完这项服务还缺什么文件吗？",
    "zhHant": "辦妥這項服務還欠甚麼文件嗎？"
  },
  {
    "id": "cartao-espaco_cidadao-este-servico-tem-algum-custo",
    "situacao": "espaco_cidadao",
    "order": 310,
    "purpose": "cost",
    "pt": "Este serviço tem algum custo?",
    "en": "Is there a fee for this service?",
    "zhHans": "这项服务收费吗？",
    "zhHant": "這項服務收費嗎？"
  },
  {
    "id": "cartao-espaco_cidadao-pode-mostrar-me-como-fazer-isto-online-da-proxima-vez",
    "situacao": "espaco_cidadao",
    "order": 311,
    "purpose": "assistance",
    "pt": "Pode mostrar-me como fazer isto online da próxima vez?",
    "en": "Can you show me how to do this online next time?",
    "zhHans": "可以教我下次怎样在线办理吗？",
    "zhHant": "可以教我下次怎樣在網上辦理嗎？"
  },
  {
    "id": "cartao-espaco_cidadao-pode-repetir-o-ultimo-passo-mais-devagar",
    "situacao": "espaco_cidadao",
    "order": 312,
    "purpose": "recovery",
    "pt": "Pode repetir o último passo mais devagar?",
    "en": "Can you repeat the last step more slowly?",
    "zhHans": "可以慢一点重复最后一个步骤吗？",
    "zhHant": "可以慢一點重複最後一個步驟嗎？"
  },
  {
    "id": "cartao-espaco_cidadao-preciso-de-confirmar-a-alteracao-depois",
    "situacao": "espaco_cidadao",
    "order": 313,
    "purpose": "confirmation",
    "pt": "Preciso de confirmar a alteração depois?",
    "en": "Do I need to confirm the change afterwards?",
    "zhHans": "之后还需要确认更改吗？",
    "zhHant": "之後還需要確認更改嗎？"
  },
  {
    "id": "cartao-espaco_cidadao-onde-posso-consultar-o-estado-deste-pedido",
    "situacao": "espaco_cidadao",
    "order": 314,
    "purpose": "tracking",
    "pt": "Onde posso consultar o estado deste pedido?",
    "en": "Where can I check the status of this request?",
    "zhHans": "在哪里可以查询这项申请的状态？",
    "zhHant": "在哪裡可以查詢這項申請的狀態？"
  },
  {
    "id": "cartao-imt_carta_conducao-posso-conduzir-em-portugal-com-esta-carta",
    "situacao": "imt_carta_conducao",
    "order": 315,
    "purpose": "eligibility",
    "pt": "Posso conduzir em Portugal com esta carta?",
    "en": "Can I drive in Portugal with this licence?",
    "zhHans": "我可以持这本驾驶证在葡萄牙驾驶吗？",
    "zhHant": "我可以持這本駕駛執照在葡萄牙駕駛嗎？"
  },
  {
    "id": "cartao-imt_carta_conducao-qual-e-o-prazo-para-fazer-a-troca",
    "situacao": "imt_carta_conducao",
    "order": 316,
    "purpose": "deadline",
    "pt": "Qual é o prazo para fazer a troca?",
    "en": "What is the deadline for exchanging it?",
    "zhHans": "换领期限是多久？",
    "zhHant": "換領期限是多久？"
  },
  {
    "id": "cartao-imt_carta_conducao-preciso-de-ir-a-um-balcao-ou-basta-o-pedido-online",
    "situacao": "imt_carta_conducao",
    "order": 317,
    "purpose": "appointment",
    "pt": "Preciso de ir a um balcão ou basta o pedido online?",
    "en": "Must I visit a desk, or is the online application enough?",
    "zhHans": "需要到服务台办理，还是在线申请即可？",
    "zhHant": "需要到服務櫃位辦理，還是網上申請即可？"
  },
  {
    "id": "cartao-imt_carta_conducao-qual-destes-documentos-ainda-falta",
    "situacao": "imt_carta_conducao",
    "order": 318,
    "purpose": "documents",
    "pt": "Qual destes documentos ainda falta?",
    "en": "Which of these documents is still missing?",
    "zhHans": "这些文件中还缺哪一份？",
    "zhHant": "這些文件中還欠哪一份？"
  },
  {
    "id": "cartao-imt_carta_conducao-onde-encontro-a-referencia-para-pagar",
    "situacao": "imt_carta_conducao",
    "order": 319,
    "purpose": "payment",
    "pt": "Onde encontro a referência para pagar?",
    "en": "Where can I find the payment reference?",
    "zhHans": "在哪里可以找到付款编号？",
    "zhHant": "在哪裡可以找到付款編號？"
  },
  {
    "id": "cartao-imt_carta_conducao-recebo-algum-comprovativo-enquanto-espero-pela-nova-carta",
    "situacao": "imt_carta_conducao",
    "order": 320,
    "purpose": "temporary-proof",
    "pt": "Recebo algum comprovativo enquanto espero pela nova carta?",
    "en": "Will I receive proof while waiting for the new licence?",
    "zhHans": "等待新驾驶证期间会收到临时凭证吗？",
    "zhHant": "等候新駕駛執照期間會收到臨時證明嗎？"
  },
  {
    "id": "cartao-imt_carta_conducao-recebi-um-pedido-de-documentos-adicionais",
    "situacao": "imt_carta_conducao",
    "order": 321,
    "purpose": "problem",
    "pt": "Recebi um pedido de documentos adicionais.",
    "en": "I received a request for additional documents.",
    "zhHans": "我收到补交文件的通知。",
    "zhHant": "我收到補交文件的通知。"
  },
  {
    "id": "cartao-imt_carta_conducao-a-referencia-do-meu-pedido-e-esta",
    "situacao": "imt_carta_conducao",
    "order": 322,
    "purpose": "tracking",
    "pt": "A referência do meu pedido é esta.",
    "en": "This is my application reference.",
    "zhHans": "这是我的申请编号。",
    "zhHant": "這是我的申請編號。"
  },
  {
    "id": "cartao-conservatoria_registo_civil-quero-pedir-uma-certidao-de-nascimento-em-papel",
    "situacao": "conservatoria_registo_civil",
    "order": 323,
    "purpose": "other-service",
    "pt": "Quero pedir uma certidão de nascimento em papel.",
    "en": "I want to request a paper birth certificate.",
    "zhHans": "我想申请纸质出生证明。",
    "zhHant": "我想申請紙本出生證明書。"
  },
  {
    "id": "cartao-conservatoria_registo_civil-preciso-de-uma-certidao-de-copia-integral",
    "situacao": "conservatoria_registo_civil",
    "order": 324,
    "purpose": "format",
    "pt": "Preciso de uma certidão de cópia integral.",
    "en": "I need a full-form certificate.",
    "zhHans": "我需要完整副本证明。",
    "zhHant": "我需要完整副本證明書。"
  },
  {
    "id": "cartao-conservatoria_registo_civil-posso-receber-um-codigo-de-acesso-a-certidao-online",
    "situacao": "conservatoria_registo_civil",
    "order": 325,
    "purpose": "format",
    "pt": "Posso receber um código de acesso à certidão online?",
    "en": "Can I receive an access code for the online certificate?",
    "zhHans": "可以取得在线证明的访问码吗？",
    "zhHant": "可以取得網上證明書的存取碼嗎？"
  },
  {
    "id": "cartao-conservatoria_registo_civil-quanto-custa-esta-certidao",
    "situacao": "conservatoria_registo_civil",
    "order": 326,
    "purpose": "cost",
    "pt": "Quanto custa esta certidão?",
    "en": "How much does this certificate cost?",
    "zhHans": "这份证明多少钱？",
    "zhHant": "這份證明書多少錢？"
  },
  {
    "id": "cartao-conservatoria_registo_civil-ha-um-erro-no-nome-que-consta-do-registo",
    "situacao": "conservatoria_registo_civil",
    "order": 327,
    "purpose": "correction",
    "pt": "Há um erro no nome que consta do registo.",
    "en": "There is an error in the name recorded in the registry.",
    "zhHans": "登记中的姓名有错误。",
    "zhHant": "登記中的姓名有錯誤。"
  },
  {
    "id": "cartao-conservatoria_registo_civil-como-posso-entregar-o-documento-que-falta",
    "situacao": "conservatoria_registo_civil",
    "order": 328,
    "purpose": "documents",
    "pt": "Como posso entregar o documento que falta?",
    "en": "How can I provide the missing document?",
    "zhHans": "怎样补交缺少的文件？",
    "zhHant": "怎樣補交欠缺的文件？"
  },
  {
    "id": "cartao-conservatoria_registo_civil-a-certidao-e-enviada-ou-tenho-de-a-levantar",
    "situacao": "conservatoria_registo_civil",
    "order": 329,
    "purpose": "collection",
    "pt": "A certidão é enviada ou tenho de a levantar?",
    "en": "Will the certificate be sent, or must I collect it?",
    "zhHans": "证明会寄出，还是需要领取？",
    "zhHant": "證明書會寄出，還是需要領取？"
  },
  {
    "id": "cartao-conservatoria_registo_civil-quero-saber-em-que-estado-esta-o-processo",
    "situacao": "conservatoria_registo_civil",
    "order": 330,
    "purpose": "tracking",
    "pt": "Quero saber em que estado está o processo.",
    "en": "I want to know the current status of the case.",
    "zhHans": "我想查询手续的当前状态。",
    "zhHant": "我想查詢手續的目前狀態。"
  },
  {
    "id": "cartao-camara_municipal-quero-pedir-um-distico-de-estacionamento-para-residente",
    "situacao": "camara_municipal",
    "order": 331,
    "purpose": "parking",
    "pt": "Quero pedir um dístico de estacionamento para residente.",
    "en": "I want to apply for a resident parking permit.",
    "zhHans": "我想申请居民停车证。",
    "zhHant": "我想申請居民泊車證。"
  },
  {
    "id": "cartao-camara_municipal-como-marco-a-recolha-de-um-sofa-e-de-um-colchao",
    "situacao": "camara_municipal",
    "order": 332,
    "purpose": "waste",
    "pt": "Como marco a recolha de um sofá e de um colchão?",
    "en": "How do I arrange collection of a sofa and mattress?",
    "zhHans": "怎样预约收取沙发和床垫？",
    "zhHant": "怎樣預約收取梳化和床褥？"
  },
  {
    "id": "cartao-camara_municipal-preciso-de-licenca-para-fazer-estas-obras",
    "situacao": "camara_municipal",
    "order": 333,
    "purpose": "licence",
    "pt": "Preciso de licença para fazer estas obras?",
    "en": "Do I need a permit for this building work?",
    "zhHans": "进行这些工程需要许可证吗？",
    "zhHant": "進行這些工程需要許可證嗎？"
  },
  {
    "id": "cartao-camara_municipal-quero-apresentar-uma-reclamacao-por-causa-do-ruido",
    "situacao": "camara_municipal",
    "order": 334,
    "purpose": "noise",
    "pt": "Quero apresentar uma reclamação por causa do ruído.",
    "en": "I want to make a complaint about noise.",
    "zhHans": "我想投诉噪音问题。",
    "zhHant": "我想投訴噪音問題。"
  },
  {
    "id": "cartao-camara_municipal-este-assunto-precisa-de-marcacao-no-atendimento-municipal",
    "situacao": "camara_municipal",
    "order": 335,
    "purpose": "appointment",
    "pt": "Este assunto precisa de marcação no atendimento municipal?",
    "en": "Does this matter require an appointment at the municipal office?",
    "zhHans": "这项事务需要预约市政府服务吗？",
    "zhHant": "這項事務需要預約市政府服務嗎？"
  },
  {
    "id": "cartao-camara_municipal-que-comprovativos-tenho-de-juntar-ao-requerimento",
    "situacao": "camara_municipal",
    "order": 336,
    "purpose": "documents",
    "pt": "Que comprovativos tenho de juntar ao requerimento?",
    "en": "Which supporting documents must I attach to the application?",
    "zhHans": "申请需要附上哪些证明文件？",
    "zhHant": "申請需要附上哪些證明文件？"
  },
  {
    "id": "cartao-camara_municipal-onde-posso-consultar-as-taxas-municipais",
    "situacao": "camara_municipal",
    "order": 337,
    "purpose": "cost",
    "pt": "Onde posso consultar as taxas municipais?",
    "en": "Where can I check the municipal fees?",
    "zhHans": "在哪里可以查询市政费用？",
    "zhHant": "在哪裡可以查詢市政費用？"
  },
  {
    "id": "cartao-camara_municipal-ainda-nao-recebi-resposta-ao-meu-requerimento",
    "situacao": "camara_municipal",
    "order": 338,
    "purpose": "tracking",
    "pt": "Ainda não recebi resposta ao meu requerimento.",
    "en": "I have not yet received a response to my application.",
    "zhHans": "我的申请还没有收到回复。",
    "zhHant": "我的申請還沒有收到回覆。"
  },
  {
    "id": "cartao-reconhecimento_diplomas-o-meu-diploma-consta-da-lista-de-reconhecimento-automatico",
    "situacao": "reconhecimento_diplomas",
    "order": 339,
    "purpose": "route",
    "pt": "O meu diploma consta da lista de reconhecimento automático?",
    "en": "Is my diploma on the automatic-recognition list?",
    "zhHans": "我的文凭在自动认可名单中吗？",
    "zhHant": "我的文憑在自動認可名單中嗎？"
  },
  {
    "id": "cartao-reconhecimento_diplomas-esta-e-uma-profissao-regulamentada-em-portugal",
    "situacao": "reconhecimento_diplomas",
    "order": 340,
    "purpose": "profession",
    "pt": "Esta é uma profissão regulamentada em Portugal?",
    "en": "Is this a regulated profession in Portugal?",
    "zhHans": "这是葡萄牙的受监管职业吗？",
    "zhHant": "這是葡萄牙的受規管職業嗎？"
  },
  {
    "id": "cartao-reconhecimento_diplomas-aceitam-estes-documentos-em-ingles-ou-precisam-de-traducao",
    "situacao": "reconhecimento_diplomas",
    "order": 341,
    "purpose": "translation",
    "pt": "Aceitam estes documentos em inglês ou precisam de tradução?",
    "en": "Do you accept these documents in English, or is a translation required?",
    "zhHans": "这些英文文件可以接受，还是需要翻译？",
    "zhHant": "這些英文文件可以接受，還是需要翻譯？"
  },
  {
    "id": "cartao-reconhecimento_diplomas-ja-paguei-onde-envio-o-comprovativo",
    "situacao": "reconhecimento_diplomas",
    "order": 342,
    "purpose": "payment",
    "pt": "Já paguei. Onde envio o comprovativo?",
    "en": "I have paid. Where do I send the receipt?",
    "zhHans": "我已经付款。付款凭证要发到哪里？",
    "zhHant": "我已經付款。付款證明要傳送到哪裡？"
  },
  {
    "id": "cartao-reconhecimento_diplomas-o-formulario-da-erro-quando-tento-anexar-o-diploma",
    "situacao": "reconhecimento_diplomas",
    "order": 343,
    "purpose": "problem",
    "pt": "O formulário dá erro quando tento anexar o diploma.",
    "en": "The form shows an error when I try to attach the diploma.",
    "zhHans": "上传文凭时表格显示错误。",
    "zhHant": "上載文憑時表格顯示錯誤。"
  },
  {
    "id": "cartao-reconhecimento_diplomas-posso-acrescentar-um-documento-ao-pedido-ja-submetido",
    "situacao": "reconhecimento_diplomas",
    "order": 344,
    "purpose": "documents",
    "pt": "Posso acrescentar um documento ao pedido já submetido?",
    "en": "Can I add a document to an application already submitted?",
    "zhHans": "已提交的申请可以补充文件吗？",
    "zhHant": "已提交的申請可以補充文件嗎？"
  },
  {
    "id": "cartao-reconhecimento_diplomas-tambem-quero-pedir-a-conversao-da-classificacao-final",
    "situacao": "reconhecimento_diplomas",
    "order": 345,
    "purpose": "grade",
    "pt": "Também quero pedir a conversão da classificação final.",
    "en": "I also want to request conversion of my final grade.",
    "zhHans": "我还想申请最终成绩换算。",
    "zhHant": "我還想申請最終成績換算。"
  },
  {
    "id": "cartao-reconhecimento_diplomas-vou-contactar-a-instituicao-e-indicar-a-referencia-do-pedido",
    "situacao": "reconhecimento_diplomas",
    "order": 346,
    "purpose": "tracking",
    "pt": "Vou contactar a instituição e indicar a referência do pedido.",
    "en": "I will contact the institution and give the application reference.",
    "zhHans": "我会联系负责机构并提供申请编号。",
    "zhHant": "我會聯絡負責機構並提供申請編號。"
  },
  {
    "id": "cartao-consulado_documentos-quero-renovar-o-passaporte-que-documentos-devo-levar",
    "situacao": "consulado_documentos",
    "order": 347,
    "purpose": "passport",
    "pt": "Quero renovar o passaporte. Que documentos devo levar?",
    "en": "I want to renew my passport. Which documents should I bring?",
    "zhHans": "我想续期护照。需要带哪些文件？",
    "zhHant": "我想續期護照。需要帶哪些文件？"
  },
  {
    "id": "cartao-consulado_documentos-perdi-o-passaporte-e-preciso-de-viajar-com-urgencia",
    "situacao": "consulado_documentos",
    "order": 348,
    "purpose": "emergency",
    "pt": "Perdi o passaporte e preciso de viajar com urgência.",
    "en": "I lost my passport and need to travel urgently.",
    "zhHans": "我丢了护照，需要紧急出行。",
    "zhHant": "我遺失了護照，需要緊急出行。"
  },
  {
    "id": "cartao-consulado_documentos-este-documento-precisa-de-apostila-ou-de-legalizacao-consular",
    "situacao": "consulado_documentos",
    "order": 349,
    "purpose": "legalisation",
    "pt": "Este documento precisa de apostila ou de legalização consular?",
    "en": "Does this document need an apostille or consular legalisation?",
    "zhHans": "这份文件需要海牙认证还是领事认证？",
    "zhHant": "這份文件需要海牙認證還是領事認證？"
  },
  {
    "id": "cartao-consulado_documentos-quero-reconhecer-a-minha-assinatura-neste-documento",
    "situacao": "consulado_documentos",
    "order": 350,
    "purpose": "signature",
    "pt": "Quero reconhecer a minha assinatura neste documento.",
    "en": "I want to have my signature certified on this document.",
    "zhHans": "我想认证这份文件上的签名。",
    "zhHant": "我想核證這份文件上的簽名。"
  },
  {
    "id": "cartao-consulado_documentos-quero-registar-em-portugal-o-meu-casamento-no-estrangeiro",
    "situacao": "consulado_documentos",
    "order": 351,
    "purpose": "civil-record",
    "pt": "Quero registar em Portugal o meu casamento no estrangeiro.",
    "en": "I want to register my foreign marriage in Portugal.",
    "zhHans": "我想在葡萄牙登记我的境外婚姻。",
    "zhHant": "我想在葡萄牙登記我的海外婚姻。"
  },
  {
    "id": "cartao-consulado_documentos-nao-encontro-horarios-disponiveis-para-marcacao",
    "situacao": "consulado_documentos",
    "order": 352,
    "purpose": "appointment",
    "pt": "Não encontro horários disponíveis para marcação.",
    "en": "I cannot find any available appointment times.",
    "zhHans": "我找不到可预约的时间。",
    "zhHant": "我找不到可預約的時間。"
  },
  {
    "id": "cartao-consulado_documentos-pode-confirmar-se-esta-copia-tem-de-ser-autenticada",
    "situacao": "consulado_documentos",
    "order": 353,
    "purpose": "documents",
    "pt": "Pode confirmar se esta cópia tem de ser autenticada?",
    "en": "Can you confirm whether this copy must be certified?",
    "zhHans": "可以确认这份副本是否需要认证吗？",
    "zhHant": "可以確認這份副本是否需要核證嗎？"
  },
  {
    "id": "cartao-consulado_documentos-como-acompanho-o-pedido-depois-de-o-entregar",
    "situacao": "consulado_documentos",
    "order": 354,
    "purpose": "tracking",
    "pt": "Como acompanho o pedido depois de o entregar?",
    "en": "How can I track the request after submitting it?",
    "zhHans": "提交后怎样查询申请进度？",
    "zhHant": "提交後怎樣查詢申請進度？"
  },
  {
    "id": "cartao-banco-onde-posso-encontrar-informacoes-sobre-a-comissao-de-manutencao",
    "situacao": "banco",
    "order": 355,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre a comissão de manutenção?",
    "en": "Where can I find information about account maintenance fee?",
    "zhHans": "我可以在哪里查到有关账户管理费的信息？",
    "zhHant": "我可以在哪裡查到有關帳戶管理費的資訊？"
  },
  {
    "id": "cartao-banco-onde-posso-encontrar-informacoes-sobre-a-transferencia-imediata",
    "situacao": "banco",
    "order": 356,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre a transferência imediata.",
    "en": "I would like to know more about instant transfer.",
    "zhHans": "我想进一步了解即时转账。",
    "zhHant": "我想進一步了解即時轉帳。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-banco-onde-posso-encontrar-informacoes-sobre-o-extrato-bancario",
    "situacao": "banco",
    "order": 357,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre o extrato bancário?",
    "en": "Who can advise me about bank statement?",
    "zhHans": "关于银行对账单，谁可以给我指引？",
    "zhHant": "關於銀行對帳單，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-banco-onde-posso-encontrar-informacoes-sobre-a-conta-poupanca",
    "situacao": "banco",
    "order": 358,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com a conta poupança.",
    "en": "I have a question related to savings account.",
    "zhHans": "我有一个与储蓄账户有关的问题。",
    "zhHant": "我有一個與儲蓄帳戶有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-banco-pode-dar-me-informacoes-sobre-o-limite-de-levantamento",
    "situacao": "banco",
    "order": 359,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre o limite de levantamento?",
    "en": "Could you give me information about withdrawal limit?",
    "zhHans": "可以告诉我有关提款限额的信息吗？",
    "zhHant": "可以告訴我有關提款限額的資訊嗎？"
  },
  {
    "id": "cartao-banco-onde-posso-encontrar-informacoes-sobre-a-assinatura",
    "situacao": "banco",
    "order": 360,
    "purpose": "useful situation example",
    "pt": "Consegue ajudar-me com uma dúvida sobre a assinatura?",
    "en": "Can you help me with a question about signature?",
    "zhHans": "您能帮我解答一个有关签名的问题吗？",
    "zhHant": "您能幫我解答一個有關簽名的問題嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-banco-pode-dar-me-informacoes-sobre-o-credito-habitacao",
    "situacao": "banco",
    "order": 361,
    "purpose": "useful situation example",
    "pt": "A quem posso pedir esclarecimentos sobre o crédito habitação?",
    "en": "Who can I ask for clarification about mortgage?",
    "zhHans": "关于房屋貸款，我可以向谁咨询？",
    "zhHant": "關於房屋貸款，我可以向誰查詢？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-banco-pode-dar-me-informacoes-sobre-o-titular-da-conta",
    "situacao": "banco",
    "order": 362,
    "purpose": "useful situation example",
    "pt": "Pode explicar-me melhor o que preciso de saber sobre o titular da conta?",
    "en": "Could you explain what I need to know about account holder?",
    "zhHans": "您能说明我需要了解账户持有人的哪些信息吗？",
    "zhHant": "您能說明我需要了解帳戶持有人的哪些資訊嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-banco-onde-posso-encontrar-informacoes-sobre-o-mb-way",
    "situacao": "banco",
    "order": 363,
    "purpose": "useful situation example",
    "pt": "Onde posso obter ajuda para questões sobre o MB Way?",
    "en": "Where can I get help with questions about MB Way (mobile payment app)?",
    "zhHans": "我可以在哪里获得有关MB Way（手机支付应用）的帮助？",
    "zhHant": "我可以在哪裡獲得有關MB Way（手機支付應用）的協助？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-financas-onde-posso-encontrar-informacoes-sobre-o-recibo-verde-eletronico",
    "situacao": "financas",
    "order": 364,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre o recibo verde eletrónico?",
    "en": "Where can I find information about electronic freelance receipt?",
    "zhHans": "我可以在哪里查到有关电子綠色收据的信息？",
    "zhHant": "我可以在哪裡查到有關電子綠色收據的資訊？"
  },
  {
    "id": "cartao-financas-pode-dar-me-informacoes-sobre-a-certidao-de-residencia-fiscal",
    "situacao": "financas",
    "order": 365,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre a certidão de residência fiscal?",
    "en": "Could you give me information about certificate of tax residency?",
    "zhHans": "可以告诉我有关税务居民证明的信息吗？",
    "zhHant": "可以告訴我有關稅務居民證明的資訊嗎？"
  },
  {
    "id": "cartao-financas-onde-posso-encontrar-informacoes-sobre-o-portal-das-financas",
    "situacao": "financas",
    "order": 366,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre o Portal das Finanças.",
    "en": "I would like to know more about the Finanças online portal.",
    "zhHans": "我想进一步了解财政入口网站。",
    "zhHant": "我想進一步了解財政入口網站。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-financas-onde-posso-encontrar-informacoes-sobre-o-rendimento",
    "situacao": "financas",
    "order": 367,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre o rendimento?",
    "en": "Who can advise me about income?",
    "zhHans": "关于收入，谁可以给我指引？",
    "zhHant": "關於收入，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-financas-pode-dar-me-informacoes-sobre-o-certificado-digital",
    "situacao": "financas",
    "order": 368,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com o certificado digital.",
    "en": "I have a question related to digital certificate.",
    "zhHans": "我有一个与数字证书有关的问题。",
    "zhHant": "我有一個與數字證書有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-financas-onde-posso-encontrar-informacoes-sobre-o-imi",
    "situacao": "financas",
    "order": 369,
    "purpose": "useful situation example",
    "pt": "Consegue ajudar-me com uma dúvida sobre o IMI?",
    "en": "Can you help me with a question about property tax?",
    "zhHans": "您能帮我解答一个有关房产税（IMI）的问题吗？",
    "zhHant": "您能幫我解答一個有關房產稅（IMI）的問題嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-financas-pode-dar-me-informacoes-sobre-o-reembolso",
    "situacao": "financas",
    "order": 370,
    "purpose": "useful situation example",
    "pt": "A quem posso pedir esclarecimentos sobre o reembolso?",
    "en": "Who can I ask for clarification about tax refund?",
    "zhHans": "关于退税，我可以向谁咨询？",
    "zhHant": "關於退稅，我可以向誰查詢？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-financas-pode-dar-me-informacoes-sobre-o-iva",
    "situacao": "financas",
    "order": 371,
    "purpose": "useful situation example",
    "pt": "Pode explicar-me melhor o que preciso de saber sobre o IVA?",
    "en": "Could you explain what I need to know about VAT?",
    "zhHans": "您能说明我需要了解增值税（IVA）的哪些信息吗？",
    "zhHant": "您能說明我需要了解增值稅（IVA）的哪些資訊嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-financas-preciso-de-esclarecer-uma-duvida-sobre-o-representante-fiscal",
    "situacao": "financas",
    "order": 372,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre o representante fiscal.",
    "en": "I have a question about tax representative.",
    "zhHans": "我需要咨询有关税务代表的问题。",
    "zhHant": "我需要查詢有關稅務代表的問題。"
  },
  {
    "id": "cartao-correios-onde-posso-encontrar-informacoes-sobre-o-prazo-de-entrega",
    "situacao": "correios",
    "order": 373,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre o prazo de entrega?",
    "en": "Where can I find information about delivery time?",
    "zhHans": "我可以在哪里查到有关送达时间的信息？",
    "zhHant": "我可以在哪裡查到有關送達時間的資訊？"
  },
  {
    "id": "cartao-correios-pode-dar-me-informacoes-sobre-o-horario-de-funcionamento",
    "situacao": "correios",
    "order": 374,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre o horário de funcionamento?",
    "en": "Could you give me information about opening hours?",
    "zhHans": "可以告诉我有关營业时间的信息吗？",
    "zhHant": "可以告訴我有關營業時間的資訊嗎？"
  },
  {
    "id": "cartao-correios-onde-posso-encontrar-informacoes-sobre-o-vale-postal",
    "situacao": "correios",
    "order": 375,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre o vale postal.",
    "en": "I would like to know more about postal money order.",
    "zhHans": "我想进一步了解邮政汇票。",
    "zhHant": "我想進一步了解郵政匯票。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-correios-pode-dar-me-informacoes-sobre-o-codigo-de-rastreio",
    "situacao": "correios",
    "order": 376,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre o código de rastreio?",
    "en": "Who can advise me about tracking number?",
    "zhHans": "关于追踪編号，谁可以给我指引？",
    "zhHant": "關於追蹤編號，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-correios-pode-dar-me-informacoes-sobre-a-taxa-alfandegaria",
    "situacao": "correios",
    "order": 377,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com a taxa alfandegária.",
    "en": "I have a question related to customs fee.",
    "zhHans": "我有一个与关税有关的问题。",
    "zhHant": "我有一個與關稅有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-correios-com-quem-devo-falar-sobre-a-segunda-tentativa-de-entrega",
    "situacao": "correios",
    "order": 378,
    "purpose": "useful situation example",
    "pt": "Com quem devo falar sobre a segunda tentativa de entrega?",
    "en": "Who should I speak to about second delivery attempt?",
    "zhHans": "关于第二次派送，我应该和谁联系？",
    "zhHant": "關於第二次派送，我應該聯絡誰？"
  },
  {
    "id": "cartao-correios-preciso-de-esclarecer-uma-duvida-sobre-o-formulario-aduaneiro",
    "situacao": "correios",
    "order": 379,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre o formulário aduaneiro.",
    "en": "I have a question about customs form.",
    "zhHans": "我需要咨询有关報关单的问题。",
    "zhHant": "我需要查詢有關報關單的問題。"
  },
  {
    "id": "cartao-correios-preciso-de-esclarecer-uma-duvida-sobre-a-entrega-ao-domicilio",
    "situacao": "correios",
    "order": 380,
    "purpose": "useful situation example",
    "pt": "Consegue ajudar-me com uma dúvida sobre a entrega ao domicílio?",
    "en": "Can you help me with a question about home delivery?",
    "zhHans": "您能帮我解答一个有关送货上门的问题吗？",
    "zhHant": "您能幫我解答一個有關送貨上門的問題嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-correios-preciso-de-esclarecer-uma-duvida-sobre-o-aviso-de-rececao",
    "situacao": "correios",
    "order": 381,
    "purpose": "useful situation example",
    "pt": "A quem posso pedir esclarecimentos sobre o aviso de receção?",
    "en": "Who can I ask for clarification about proof of delivery (return receipt)?",
    "zhHans": "关于回执（签收证明），我可以向谁咨询？",
    "zhHant": "關於回執（簽收證明），我可以向誰查詢？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-junta_de_freguesia-onde-posso-encontrar-informacoes-sobre-a-fotocopia-autenticada",
    "situacao": "junta_de_freguesia",
    "order": 382,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre a fotocópia autenticada?",
    "en": "Where can I find information about certified photocopy?",
    "zhHans": "我可以在哪里查到有关认证副本的信息？",
    "zhHant": "我可以在哪裡查到有關認證副本的資訊？"
  },
  {
    "id": "cartao-junta_de_freguesia-onde-posso-encontrar-informacoes-sobre-o-agregado-familiar",
    "situacao": "junta_de_freguesia",
    "order": 383,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre o agregado familiar.",
    "en": "I would like to know more about household.",
    "zhHans": "我想进一步了解家庭成员（同户）。",
    "zhHant": "我想進一步了解家庭成員（同戶）。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-junta_de_freguesia-pode-dar-me-informacoes-sobre-o-contrato-de-arrendamento",
    "situacao": "junta_de_freguesia",
    "order": 384,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre o contrato de arrendamento?",
    "en": "Could you give me information about rental contract?",
    "zhHans": "可以告诉我有关租赁合同的信息吗？",
    "zhHant": "可以告訴我有關租賃合同的資訊嗎？"
  },
  {
    "id": "cartao-junta_de_freguesia-pode-dar-me-informacoes-sobre-o-recenseamento-eleitoral",
    "situacao": "junta_de_freguesia",
    "order": 385,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre o recenseamento eleitoral?",
    "en": "Who can advise me about electoral registration?",
    "zhHans": "关于选民登记，谁可以给我指引？",
    "zhHant": "關於選民登記，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-junta_de_freguesia-pode-dar-me-informacoes-sobre-o-atestado-de-residencia",
    "situacao": "junta_de_freguesia",
    "order": 386,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com o atestado de residência.",
    "en": "I have a question related to certificate of residence.",
    "zhHans": "我有一个与居住证明书有关的问题。",
    "zhHant": "我有一個與居住證明書有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-junta_de_freguesia-pode-dar-me-informacoes-sobre-a-taxa-de-emissao",
    "situacao": "junta_de_freguesia",
    "order": 387,
    "purpose": "useful situation example",
    "pt": "Consegue ajudar-me com uma dúvida sobre a taxa de emissão?",
    "en": "Can you help me with a question about issuance fee?",
    "zhHans": "您能帮我解答一个有关办理费用的问题吗？",
    "zhHant": "您能幫我解答一個有關辦理費用的問題嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-junta_de_freguesia-com-quem-devo-falar-sobre-o-atestado-de-agregado-familiar",
    "situacao": "junta_de_freguesia",
    "order": 388,
    "purpose": "useful situation example",
    "pt": "Com quem devo falar sobre o atestado de agregado familiar?",
    "en": "Who should I speak to about household certificate?",
    "zhHans": "关于家庭成员证明，我应该和谁联系？",
    "zhHant": "關於家庭成員證明，我應該聯絡誰？"
  },
  {
    "id": "cartao-junta_de_freguesia-preciso-de-esclarecer-uma-duvida-sobre-o-horario-de-atendimento",
    "situacao": "junta_de_freguesia",
    "order": 389,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre o horário de atendimento.",
    "en": "I have a question about office hours.",
    "zhHans": "我需要咨询有关办公时间的问题。",
    "zhHant": "我需要查詢有關辦公時間的問題。"
  },
  {
    "id": "cartao-junta_de_freguesia-queria-informacoes-sobre-a-declaracao-sob-compromisso-de-honra",
    "situacao": "junta_de_freguesia",
    "order": 390,
    "purpose": "useful situation example",
    "pt": "Queria informações sobre a declaração sob compromisso de honra.",
    "en": "I would like information about sworn declaration.",
    "zhHans": "我想了解誓词声明（保证声明）。",
    "zhHant": "我想了解誓詞聲明（保證聲明）。"
  },
  {
    "id": "cartao-junta_de_freguesia-com-quem-devo-falar-sobre-o-comprovativo-de-pagamento",
    "situacao": "junta_de_freguesia",
    "order": 391,
    "purpose": "useful situation example",
    "pt": "A quem posso pedir esclarecimentos sobre o comprovativo de pagamento?",
    "en": "Who can I ask for clarification about proof of payment?",
    "zhHans": "关于缴费憑证，我可以向谁咨询？",
    "zhHant": "關於繳費憑證，我可以向誰查詢？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-aima-onde-posso-encontrar-informacoes-sobre-a-declaracao-da-entidade-patronal",
    "situacao": "aima",
    "order": 392,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre a declaração da entidade patronal?",
    "en": "Where can I find information about employer's declaration?",
    "zhHans": "我可以在哪里查到有关雇主声明的信息？",
    "zhHant": "我可以在哪裡查到有關僱主聲明的資訊？"
  },
  {
    "id": "cartao-aima-onde-posso-encontrar-informacoes-sobre-a-prorrogacao-de-permanencia",
    "situacao": "aima",
    "order": 393,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre a prorrogação de permanência.",
    "en": "I would like to know more about extension of stay.",
    "zhHans": "我想进一步了解延期居留。",
    "zhHant": "我想進一步了解延期居留。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-aima-onde-posso-encontrar-informacoes-sobre-o-portal-das-renovacoes",
    "situacao": "aima",
    "order": 394,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre o Portal das Renovações?",
    "en": "Who can advise me about the online Renewals Portal?",
    "zhHans": "关于线上续期平台，谁可以给我指引？",
    "zhHant": "關於線上續期平台，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-aima-pode-dar-me-informacoes-sobre-a-recolha-de-dados-biometricos",
    "situacao": "aima",
    "order": 395,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre a recolha de dados biométricos?",
    "en": "Could you give me information about biometric data collection?",
    "zhHans": "可以告诉我有关採集生物识別资料（按指紋等）的信息吗？",
    "zhHant": "可以告訴我有關採集生物識別資料（按指紋等）的資訊嗎？"
  },
  {
    "id": "cartao-aima-pode-dar-me-informacoes-sobre-a-certidao-de-nascimento",
    "situacao": "aima",
    "order": 396,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com a certidão de nascimento.",
    "en": "I have a question related to birth certificate.",
    "zhHans": "我有一个与出生证明有关的问题。",
    "zhHant": "我有一個與出生證明有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-aima-preciso-de-esclarecer-uma-duvida-sobre-o-comprovativo-de-meios-de-subsistencia",
    "situacao": "aima",
    "order": 397,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre o comprovativo de meios de subsistência.",
    "en": "I have a question about proof of means of subsistence.",
    "zhHans": "我需要咨询有关生活來源证明的问题。",
    "zhHant": "我需要查詢有關生活來源證明的問題。"
  },
  {
    "id": "cartao-aima-pode-dar-me-informacoes-sobre-o-numero-de-processo",
    "situacao": "aima",
    "order": 398,
    "purpose": "useful situation example",
    "pt": "Consegue ajudar-me com uma dúvida sobre o número de processo?",
    "en": "Can you help me with a question about case number?",
    "zhHans": "您能帮我解答一个有关案件編号的问题吗？",
    "zhHant": "您能幫我解答一個有關案件編號的問題嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-aima-pode-dar-me-informacoes-sobre-a-residencia-legal",
    "situacao": "aima",
    "order": 399,
    "purpose": "useful situation example",
    "pt": "A quem posso pedir esclarecimentos sobre a residência legal?",
    "en": "Who can I ask for clarification about legal residence?",
    "zhHans": "关于合法居留，我可以向谁咨询？",
    "zhHant": "關於合法居留，我可以向誰查詢？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-aima-preciso-de-esclarecer-uma-duvida-sobre-o-registo-criminal-do-pais-de-origem",
    "situacao": "aima",
    "order": 400,
    "purpose": "useful situation example",
    "pt": "Pode explicar-me melhor o que preciso de saber sobre o registo criminal do país de origem?",
    "en": "Could you explain what I need to know about criminal record from home country?",
    "zhHans": "您能说明我需要了解原籍國无犯罪记录的哪些信息吗？",
    "zhHant": "您能說明我需要了解原籍國無犯罪記錄的哪些資訊嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-seguranca_social-onde-posso-encontrar-informacoes-sobre-a-declaracao-trimestral",
    "situacao": "seguranca_social",
    "order": 401,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre a declaração trimestral?",
    "en": "Where can I find information about quarterly declaration (self-employed)?",
    "zhHans": "我可以在哪里查到有关季度申報（自雇）的信息？",
    "zhHant": "我可以在哪裡查到有關季度申報（自僱）的資訊？"
  },
  {
    "id": "cartao-seguranca_social-onde-posso-encontrar-informacoes-sobre-o-registo-do-nascimento",
    "situacao": "seguranca_social",
    "order": 402,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre o registo do nascimento.",
    "en": "I would like to know more about birth registration.",
    "zhHans": "我想进一步了解出生登记。",
    "zhHant": "我想進一步了解出生登記。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-seguranca_social-onde-posso-encontrar-informacoes-sobre-o-plano-prestacional",
    "situacao": "seguranca_social",
    "order": 403,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre o plano prestacional?",
    "en": "Who can advise me about instalment plan?",
    "zhHans": "关于分期还款计划，谁可以给我指引？",
    "zhHant": "關於分期還款計劃，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-seguranca_social-pode-dar-me-informacoes-sobre-o-balcao-da-seguranca-social",
    "situacao": "seguranca_social",
    "order": 404,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre o balcão da Segurança Social?",
    "en": "Could you give me information about Social Security counter?",
    "zhHans": "可以告诉我有关社保局柜台的信息吗？",
    "zhHant": "可以告訴我有關社保局櫃檯的資訊嗎？"
  },
  {
    "id": "cartao-seguranca_social-onde-posso-encontrar-informacoes-sobre-a-baixa-por-doenca",
    "situacao": "seguranca_social",
    "order": 405,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com a baixa por doença.",
    "en": "I have a question related to paid sick leave.",
    "zhHans": "我有一个与病假津贴有关的问题。",
    "zhHant": "我有一個與病假津貼有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-seguranca_social-pode-dar-me-informacoes-sobre-o-trabalhador-independente",
    "situacao": "seguranca_social",
    "order": 406,
    "purpose": "useful situation example",
    "pt": "Consegue ajudar-me com uma dúvida sobre o trabalhador independente?",
    "en": "Can you help me with a question about self-employed worker?",
    "zhHans": "您能帮我解答一个有关自雇人士的问题吗？",
    "zhHant": "您能幫我解答一個有關自僱人士的問題嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-seguranca_social-pode-dar-me-informacoes-sobre-a-isencao-de-contribuicoes",
    "situacao": "seguranca_social",
    "order": 407,
    "purpose": "useful situation example",
    "pt": "A quem posso pedir esclarecimentos sobre a isenção de contribuições?",
    "en": "Who can I ask for clarification about contributions exemption?",
    "zhHans": "关于供款豁免，我可以向谁咨询？",
    "zhHant": "關於供款豁免，我可以向誰查詢？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-seguranca_social-onde-posso-encontrar-informacoes-sobre-os-descontos",
    "situacao": "seguranca_social",
    "order": 408,
    "purpose": "useful situation example",
    "pt": "Pode explicar-me melhor o que preciso de saber sobre os descontos?",
    "en": "Could you explain what I need to know about (social security) contributions?",
    "zhHans": "您能说明我需要了解社保供款（扣缴）的哪些信息吗？",
    "zhHant": "您能說明我需要了解社保供款（扣繳）的哪些資訊嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-seguranca_social-pode-dar-me-informacoes-sobre-o-abono-pre-natal",
    "situacao": "seguranca_social",
    "order": 409,
    "purpose": "useful situation example",
    "pt": "Onde posso obter ajuda para questões sobre o abono pré-natal?",
    "en": "Where can I get help with questions about prenatal allowance?",
    "zhHans": "我可以在哪里获得有关产前津贴的帮助？",
    "zhHant": "我可以在哪裡獲得有關產前津貼的協助？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-seguranca_social-pode-dar-me-informacoes-sobre-o-comprovativo",
    "situacao": "seguranca_social",
    "order": 410,
    "purpose": "useful situation example",
    "pt": "Preciso de confirmar uma informação sobre o comprovativo.",
    "en": "I need to confirm some information about proof / receipt (of application).",
    "zhHans": "我需要确认一些有关申请憑证的信息。",
    "zhHant": "我需要確認一些有關申請憑證的資訊。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-espaco_cidadao-onde-posso-encontrar-informacoes-sobre-o-comprovativo-de-pagamento",
    "situacao": "espaco_cidadao",
    "order": 411,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre o comprovativo de pagamento?",
    "en": "Where can I find information about proof of payment?",
    "zhHans": "我可以在哪里查到有关缴费憑证的信息？",
    "zhHant": "我可以在哪裡查到有關繳費憑證的資訊？"
  },
  {
    "id": "cartao-espaco_cidadao-onde-posso-encontrar-informacoes-sobre-o-comprovativo-de-morada",
    "situacao": "espaco_cidadao",
    "order": 412,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre o comprovativo de morada.",
    "en": "I would like to know more about proof of address.",
    "zhHans": "我想进一步了解住址证明。",
    "zhHant": "我想進一步了解住址證明。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-espaco_cidadao-pode-explicar-me-o-que-devo-fazer-para-atualizar-a-morada",
    "situacao": "espaco_cidadao",
    "order": 413,
    "purpose": "useful situation example",
    "pt": "Pode explicar-me o que devo fazer para atualizar a morada?",
    "en": "Could you explain what I need to do to update my address?",
    "zhHans": "可以说明我要怎样更新地址吗？",
    "zhHant": "可以說明我要怎樣更新地址嗎？"
  },
  {
    "id": "cartao-espaco_cidadao-pode-explicar-me-o-que-devo-fazer-para-tirar-a-senha",
    "situacao": "espaco_cidadao",
    "order": 414,
    "purpose": "useful situation example",
    "pt": "Onde tiro a senha para ser atendido?",
    "en": "Where do I take a queue ticket to be served?",
    "zhHans": "我应该在哪里取号等候办理？",
    "zhHant": "我應該在哪裡取號等候辦理？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-espaco_cidadao-pode-dar-me-informacoes-sobre-o-comprovativo",
    "situacao": "espaco_cidadao",
    "order": 415,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre o comprovativo?",
    "en": "Could you give me information about proof / receipt (of application)?",
    "zhHans": "可以告诉我有关申请憑证的信息吗？",
    "zhHant": "可以告訴我有關申請憑證的資訊嗎？"
  },
  {
    "id": "cartao-espaco_cidadao-preciso-de-esclarecer-uma-duvida-sobre-o-horario-de-atendimento",
    "situacao": "espaco_cidadao",
    "order": 416,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre o horário de atendimento.",
    "en": "I have a question about office hours.",
    "zhHans": "我需要咨询有关办公时间的问题。",
    "zhHant": "我需要查詢有關辦公時間的問題。"
  },
  {
    "id": "cartao-espaco_cidadao-como-posso-levantar-o-documento",
    "situacao": "espaco_cidadao",
    "order": 417,
    "purpose": "useful situation example",
    "pt": "Como posso levantar o documento?",
    "en": "How can I collect the document?",
    "zhHans": "我该怎样领取文件？",
    "zhHant": "我該怎樣領取文件？"
  },
  {
    "id": "cartao-espaco_cidadao-qual-e-o-seu-numero-de-telefone",
    "situacao": "espaco_cidadao",
    "order": 418,
    "purpose": "useful situation example",
    "pt": "Qual é o seu número de telefone?",
    "en": "What is your telephone number?",
    "zhHans": "您的电话号码是多少？",
    "zhHant": "您的電話號碼是多少？"
  },
  {
    "id": "cartao-espaco_cidadao-preciso-de-esclarecer-uma-duvida-sobre-a-senha-de-acesso",
    "situacao": "espaco_cidadao",
    "order": 419,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre a senha de acesso?",
    "en": "Who can advise me about access password (portal login)?",
    "zhHans": "关于登入密码，谁可以给我指引？",
    "zhHant": "關於登入密碼，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-espaco_cidadao-com-quem-devo-falar-sobre-a-senha-de-atendimento",
    "situacao": "espaco_cidadao",
    "order": 420,
    "purpose": "useful situation example",
    "pt": "Com quem devo falar sobre a senha de atendimento?",
    "en": "Who should I speak to about queue ticket?",
    "zhHans": "关于排队取号，我应该和谁联系？",
    "zhHant": "關於排隊取號，我應該聯絡誰？"
  },
  {
    "id": "cartao-espaco_cidadao-pode-dar-me-a-sua-senha",
    "situacao": "espaco_cidadao",
    "order": 421,
    "purpose": "useful situation example",
    "pt": "Pode dar-me a sua senha?",
    "en": "Can you give me your ticket number?",
    "zhHans": "您可以给我您的号码票吗？",
    "zhHant": "您可以給我您的號碼牌嗎？"
  },
  {
    "id": "cartao-espaco_cidadao-com-quem-devo-falar-sobre-o-formulario",
    "situacao": "espaco_cidadao",
    "order": 422,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com o formulário.",
    "en": "I have a question related to form.",
    "zhHans": "我有一个与表格有关的问题。",
    "zhHant": "我有一個與表格有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-imt_carta_conducao-onde-posso-encontrar-informacoes-sobre-o-comprovativo-de-agendamento",
    "situacao": "imt_carta_conducao",
    "order": 423,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre o comprovativo de agendamento?",
    "en": "Where can I find information about proof of appointment?",
    "zhHans": "我可以在哪里查到有关预约憑证的信息？",
    "zhHant": "我可以在哪裡查到有關預約憑證的資訊？"
  },
  {
    "id": "cartao-imt_carta_conducao-pode-dar-me-informacoes-sobre-o-estado-do-processo",
    "situacao": "imt_carta_conducao",
    "order": 424,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre o estado do processo?",
    "en": "Could you give me information about case status?",
    "zhHans": "可以告诉我有关案件状态的信息吗？",
    "zhHant": "可以告訴我有關案件狀態的資訊嗎？"
  },
  {
    "id": "cartao-imt_carta_conducao-onde-posso-encontrar-informacoes-sobre-as-taxas",
    "situacao": "imt_carta_conducao",
    "order": 425,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre as taxas.",
    "en": "I would like to know more about fees.",
    "zhHans": "我想进一步了解费用。",
    "zhHant": "我想進一步了解費用。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-imt_carta_conducao-pode-dar-me-informacoes-sobre-o-atestado-medico",
    "situacao": "imt_carta_conducao",
    "order": 426,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre o atestado médico?",
    "en": "Who can advise me about medical certificate?",
    "zhHans": "关于医生证明，谁可以给我指引？",
    "zhHant": "關於醫生證明，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-imt_carta_conducao-preciso-de-esclarecer-uma-duvida-sobre-a-recolha-de-dados-biometricos",
    "situacao": "imt_carta_conducao",
    "order": 427,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre a recolha de dados biométricos.",
    "en": "I have a question about biometric data collection.",
    "zhHans": "我需要咨询有关採集生物识別资料（按指紋等）的问题。",
    "zhHant": "我需要查詢有關採集生物識別資料（按指紋等）的問題。"
  },
  {
    "id": "cartao-imt_carta_conducao-preciso-de-esclarecer-uma-duvida-sobre-a-fotocopia-autenticada",
    "situacao": "imt_carta_conducao",
    "order": 428,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com a fotocópia autenticada.",
    "en": "I have a question related to certified photocopy.",
    "zhHans": "我有一个与认证副本有关的问题。",
    "zhHant": "我有一個與認證副本有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-imt_carta_conducao-com-quem-devo-falar-sobre-o-reconhecimento-de-assinatura",
    "situacao": "imt_carta_conducao",
    "order": 429,
    "purpose": "useful situation example",
    "pt": "Com quem devo falar sobre o reconhecimento de assinatura?",
    "en": "Who should I speak to about signature certification?",
    "zhHans": "关于签名认证，我应该和谁联系？",
    "zhHant": "關於簽名認證，我應該聯絡誰？"
  },
  {
    "id": "cartao-imt_carta_conducao-preciso-de-autorizacao-para-consulta-do-registo-criminal",
    "situacao": "imt_carta_conducao",
    "order": 430,
    "purpose": "useful situation example",
    "pt": "Preciso de autorização para consulta do registo criminal.",
    "en": "I need authorisation to consult the criminal record.",
    "zhHans": "我需要授权查询犯罪记录。",
    "zhHant": "我需要授權查詢犯罪紀錄。"
  },
  {
    "id": "cartao-imt_carta_conducao-com-quem-devo-falar-sobre-a-traducao-certificada",
    "situacao": "imt_carta_conducao",
    "order": 431,
    "purpose": "useful situation example",
    "pt": "Consegue ajudar-me com uma dúvida sobre a tradução certificada?",
    "en": "Can you help me with a question about certified translation?",
    "zhHans": "您能帮我解答一个有关认证翻译的问题吗？",
    "zhHant": "您能幫我解答一個有關認證翻譯的問題嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-imt_carta_conducao-queria-informacoes-sobre-o-comprovativo-de-pagamento",
    "situacao": "imt_carta_conducao",
    "order": 432,
    "purpose": "useful situation example",
    "pt": "Queria informações sobre o comprovativo de pagamento.",
    "en": "I would like information about proof of payment.",
    "zhHans": "我想了解缴费憑证。",
    "zhHant": "我想了解繳費憑證。"
  },
  {
    "id": "cartao-imt_carta_conducao-queria-informacoes-sobre-o-numero-de-processo",
    "situacao": "imt_carta_conducao",
    "order": 433,
    "purpose": "useful situation example",
    "pt": "A quem posso pedir esclarecimentos sobre o número de processo?",
    "en": "Who can I ask for clarification about case number?",
    "zhHans": "关于案件編号，我可以向谁咨询？",
    "zhHant": "關於案件編號，我可以向誰查詢？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-imt_carta_conducao-que-documentos-necessarios-devo-trazer",
    "situacao": "imt_carta_conducao",
    "order": 434,
    "purpose": "useful situation example",
    "pt": "Que documentos devo trazer?",
    "en": "Which documents should I bring?",
    "zhHans": "我需要带哪些文件？",
    "zhHant": "我需要帶哪些文件？"
  },
  {
    "id": "cartao-conservatoria_registo_civil-onde-posso-encontrar-informacoes-sobre-o-registo-criminal-do-pais-de-origem",
    "situacao": "conservatoria_registo_civil",
    "order": 435,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre o registo criminal do país de origem?",
    "en": "Where can I find information about criminal record from home country?",
    "zhHans": "我可以在哪里查到有关原籍國无犯罪记录的信息？",
    "zhHant": "我可以在哪裡查到有關原籍國無犯罪記錄的資訊？"
  },
  {
    "id": "cartao-conservatoria_registo_civil-onde-posso-encontrar-informacoes-sobre-o-reconhecimento-de-assinatura",
    "situacao": "conservatoria_registo_civil",
    "order": 436,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre o reconhecimento de assinatura.",
    "en": "I would like to know more about signature certification.",
    "zhHans": "我想进一步了解签名认证。",
    "zhHant": "我想進一步了解簽名認證。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-conservatoria_registo_civil-pode-dar-me-informacoes-sobre-o-estado-do-processo",
    "situacao": "conservatoria_registo_civil",
    "order": 437,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre o estado do processo?",
    "en": "Could you give me information about case status?",
    "zhHans": "可以告诉我有关案件状态的信息吗？",
    "zhHant": "可以告訴我有關案件狀態的資訊嗎？"
  },
  {
    "id": "cartao-conservatoria_registo_civil-onde-posso-encontrar-informacoes-sobre-a-certidao",
    "situacao": "conservatoria_registo_civil",
    "order": 438,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre a certidão?",
    "en": "Who can advise me about certificate / official copy?",
    "zhHans": "关于证明书／正式副本，谁可以给我指引？",
    "zhHant": "關於證明書／正式副本，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-conservatoria_registo_civil-pode-dar-me-informacoes-sobre-o-formulario",
    "situacao": "conservatoria_registo_civil",
    "order": 439,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com o formulário.",
    "en": "I have a question related to form.",
    "zhHans": "我有一个与表格有关的问题。",
    "zhHant": "我有一個與表格有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-conservatoria_registo_civil-preciso-de-esclarecer-uma-duvida-sobre-a-traducao-certificada",
    "situacao": "conservatoria_registo_civil",
    "order": 440,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre a tradução certificada.",
    "en": "I have a question about certified translation.",
    "zhHans": "我需要咨询有关认证翻译的问题。",
    "zhHant": "我需要查詢有關認證翻譯的問題。"
  },
  {
    "id": "cartao-conservatoria_registo_civil-com-quem-devo-falar-sobre-o-comprovativo-de-pagamento",
    "situacao": "conservatoria_registo_civil",
    "order": 441,
    "purpose": "useful situation example",
    "pt": "Com quem devo falar sobre o comprovativo de pagamento?",
    "en": "Who should I speak to about proof of payment?",
    "zhHans": "关于缴费憑证，我应该和谁联系？",
    "zhHant": "關於繳費憑證，我應該聯絡誰？"
  },
  {
    "id": "cartao-conservatoria_registo_civil-com-quem-devo-falar-sobre-a-certidao-de-nascimento",
    "situacao": "conservatoria_registo_civil",
    "order": 442,
    "purpose": "useful situation example",
    "pt": "Consegue ajudar-me com uma dúvida sobre a certidão de nascimento?",
    "en": "Can you help me with a question about birth certificate?",
    "zhHans": "您能帮我解答一个有关出生证明的问题吗？",
    "zhHant": "您能幫我解答一個有關出生證明的問題嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-conservatoria_registo_civil-com-quem-devo-falar-sobre-a-fotocopia-autenticada",
    "situacao": "conservatoria_registo_civil",
    "order": 443,
    "purpose": "useful situation example",
    "pt": "A quem posso pedir esclarecimentos sobre a fotocópia autenticada?",
    "en": "Who can I ask for clarification about certified photocopy?",
    "zhHans": "关于认证副本，我可以向谁咨询？",
    "zhHant": "關於認證副本，我可以向誰查詢？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-conservatoria_registo_civil-preciso-de-esclarecer-uma-duvida-sobre-a-assinatura",
    "situacao": "conservatoria_registo_civil",
    "order": 444,
    "purpose": "useful situation example",
    "pt": "Pode explicar-me melhor o que preciso de saber sobre a assinatura?",
    "en": "Could you explain what I need to know about signature?",
    "zhHans": "您能说明我需要了解签名的哪些信息吗？",
    "zhHant": "您能說明我需要了解簽名的哪些資訊嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-conservatoria_registo_civil-queria-informacoes-sobre-o-pedido-de-nacionalidade",
    "situacao": "conservatoria_registo_civil",
    "order": 445,
    "purpose": "useful situation example",
    "pt": "Queria informações sobre o pedido de nacionalidade.",
    "en": "I would like information about citizenship application.",
    "zhHans": "我想了解入籍申请。",
    "zhHant": "我想了解入籍申請。"
  },
  {
    "id": "cartao-conservatoria_registo_civil-queria-informacoes-sobre-o-numero-de-processo",
    "situacao": "conservatoria_registo_civil",
    "order": 446,
    "purpose": "useful situation example",
    "pt": "Onde posso obter ajuda para questões sobre o número de processo?",
    "en": "Where can I get help with questions about case number?",
    "zhHans": "我可以在哪里获得有关案件編号的帮助？",
    "zhHant": "我可以在哪裡獲得有關案件編號的協助？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-camara_municipal-onde-posso-encontrar-informacoes-sobre-o-horario-de-atendimento",
    "situacao": "camara_municipal",
    "order": 447,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre o horário de atendimento?",
    "en": "Where can I find information about office hours?",
    "zhHans": "我可以在哪里查到有关办公时间的信息？",
    "zhHant": "我可以在哪裡查到有關辦公時間的資訊？"
  },
  {
    "id": "cartao-camara_municipal-pode-dar-me-informacoes-sobre-o-comprovativo-de-pagamento",
    "situacao": "camara_municipal",
    "order": 448,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre o comprovativo de pagamento?",
    "en": "Could you give me information about proof of payment?",
    "zhHans": "可以告诉我有关缴费憑证的信息吗？",
    "zhHant": "可以告訴我有關繳費憑證的資訊嗎？"
  },
  {
    "id": "cartao-camara_municipal-onde-posso-encontrar-informacoes-sobre-o-formulario",
    "situacao": "camara_municipal",
    "order": 449,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre o formulário.",
    "en": "I would like to know more about form.",
    "zhHans": "我想进一步了解表格。",
    "zhHant": "我想進一步了解表格。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-camara_municipal-pode-explicar-me-o-que-devo-fazer-para-estacionar",
    "situacao": "camara_municipal",
    "order": 450,
    "purpose": "useful situation example",
    "pt": "Pode explicar-me o que devo fazer para estacionar?",
    "en": "Could you explain what I need to do to park?",
    "zhHans": "可以说明我要怎样停车吗？",
    "zhHant": "可以說明我要怎樣停車嗎？"
  },
  {
    "id": "cartao-camara_municipal-onde-posso-encontrar-informacoes-sobre-o-entulho",
    "situacao": "camara_municipal",
    "order": 451,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre o entulho?",
    "en": "Who can advise me about rubble / construction waste?",
    "zhHans": "关于建筑垃圾，谁可以给我指引？",
    "zhHant": "關於建築垃圾，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-camara_municipal-pode-dar-me-informacoes-sobre-a-declaracao",
    "situacao": "camara_municipal",
    "order": 452,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com a declaração.",
    "en": "I have a question related to declaration / statement.",
    "zhHans": "我有一个与声明书有关的问题。",
    "zhHant": "我有一個與聲明書有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-camara_municipal-com-quem-devo-falar-sobre-o-horario-de-funcionamento",
    "situacao": "camara_municipal",
    "order": 453,
    "purpose": "useful situation example",
    "pt": "Com quem devo falar sobre o horário de funcionamento?",
    "en": "Who should I speak to about opening hours?",
    "zhHans": "关于營业时间，我应该和谁联系？",
    "zhHant": "關於營業時間，我應該聯絡誰？"
  },
  {
    "id": "cartao-camara_municipal-preciso-de-esclarecer-uma-duvida-sobre-a-freguesia",
    "situacao": "camara_municipal",
    "order": 454,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre a freguesia.",
    "en": "I have a question about parish (administrative area).",
    "zhHans": "我需要咨询有关堂区（行政区）的问题。",
    "zhHant": "我需要查詢有關堂區（行政區）的問題。"
  },
  {
    "id": "cartao-camara_municipal-queria-informacoes-sobre-a-senha-de-atendimento",
    "situacao": "camara_municipal",
    "order": 455,
    "purpose": "useful situation example",
    "pt": "Queria informações sobre a senha de atendimento.",
    "en": "I would like information about queue ticket.",
    "zhHans": "我想了解排队取号。",
    "zhHant": "我想了解排隊取號。"
  },
  {
    "id": "cartao-camara_municipal-e-possivel-levantar-o-documento-aqui",
    "situacao": "camara_municipal",
    "order": 456,
    "purpose": "useful situation example",
    "pt": "É possível levantar o documento aqui?",
    "en": "Is it possible to collect the document here?",
    "zhHans": "可以在这里领取文件吗？",
    "zhHant": "可以在這裡領取文件嗎？"
  },
  {
    "id": "cartao-camara_municipal-queria-informacoes-sobre-a-reclamacao",
    "situacao": "camara_municipal",
    "order": 457,
    "purpose": "useful situation example",
    "pt": "Consegue ajudar-me com uma dúvida sobre a reclamação?",
    "en": "Can you help me with a question about complaint?",
    "zhHans": "您能帮我解答一个有关投诉的问题吗？",
    "zhHant": "您能幫我解答一個有關投訴的問題嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-camara_municipal-preciso-de-ajuda-para-pagar-uma-taxa",
    "situacao": "camara_municipal",
    "order": 458,
    "purpose": "useful situation example",
    "pt": "Preciso de ajuda para pagar uma taxa.",
    "en": "I need help to pay a fee.",
    "zhHans": "我需要协助缴納费用。",
    "zhHant": "我需要協助繳納費用。"
  },
  {
    "id": "cartao-reconhecimento_diplomas-onde-posso-encontrar-informacoes-sobre-o-certificado-de-habilitacoes",
    "situacao": "reconhecimento_diplomas",
    "order": 459,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre o certificado de habilitações?",
    "en": "Where can I find information about qualifications certificate?",
    "zhHans": "我可以在哪里查到有关学历证明的信息？",
    "zhHant": "我可以在哪裡查到有關學歷證明的資訊？"
  },
  {
    "id": "cartao-reconhecimento_diplomas-onde-posso-encontrar-informacoes-sobre-a-equivalencia-de-estudos",
    "situacao": "reconhecimento_diplomas",
    "order": 460,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre a equivalência de estudos.",
    "en": "I would like to know more about recognition of foreign studies.",
    "zhHans": "我想进一步了解学历同等认证。",
    "zhHant": "我想進一步了解學歷同等認證。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-reconhecimento_diplomas-onde-posso-encontrar-informacoes-sobre-o-numero-de-processo",
    "situacao": "reconhecimento_diplomas",
    "order": 461,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre o número de processo?",
    "en": "Who can advise me about case number?",
    "zhHans": "关于案件編号，谁可以给我指引？",
    "zhHant": "關於案件編號，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-reconhecimento_diplomas-pode-dar-me-informacoes-sobre-o-comprovativo-de-pagamento",
    "situacao": "reconhecimento_diplomas",
    "order": 462,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre o comprovativo de pagamento?",
    "en": "Could you give me information about proof of payment?",
    "zhHans": "可以告诉我有关缴费憑证的信息吗？",
    "zhHant": "可以告訴我有關繳費憑證的資訊嗎？"
  },
  {
    "id": "cartao-reconhecimento_diplomas-pode-explicar-me-o-que-devo-fazer-para-pagar-uma-taxa",
    "situacao": "reconhecimento_diplomas",
    "order": 463,
    "purpose": "useful situation example",
    "pt": "Pode explicar-me o que devo fazer para pagar uma taxa?",
    "en": "Could you explain what I need to do to pay a fee?",
    "zhHans": "可以说明我要怎样缴納费用吗？",
    "zhHant": "可以說明我要怎樣繳納費用嗎？"
  },
  {
    "id": "cartao-reconhecimento_diplomas-pode-dar-me-informacoes-sobre-o-certificado-digital",
    "situacao": "reconhecimento_diplomas",
    "order": 464,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com o certificado digital.",
    "en": "I have a question related to digital certificate.",
    "zhHans": "我有一个与数字证书有关的问题。",
    "zhHant": "我有一個與數字證書有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-reconhecimento_diplomas-onde-posso-encontrar-informacoes-sobre-o-formulario",
    "situacao": "reconhecimento_diplomas",
    "order": 465,
    "purpose": "useful situation example",
    "pt": "Consegue ajudar-me com uma dúvida sobre o formulário?",
    "en": "Can you help me with a question about form?",
    "zhHans": "您能帮我解答一个有关表格的问题吗？",
    "zhHant": "您能幫我解答一個有關表格的問題嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-reconhecimento_diplomas-pode-dar-me-informacoes-sobre-a-notificacao",
    "situacao": "reconhecimento_diplomas",
    "order": 466,
    "purpose": "useful situation example",
    "pt": "A quem posso pedir esclarecimentos sobre a notificação?",
    "en": "Who can I ask for clarification about official notification?",
    "zhHans": "关于官方通知，我可以向谁咨询？",
    "zhHant": "關於官方通知，我可以向誰查詢？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-reconhecimento_diplomas-preciso-de-esclarecer-uma-duvida-sobre-a-fotocopia-autenticada",
    "situacao": "reconhecimento_diplomas",
    "order": 467,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre a fotocópia autenticada.",
    "en": "I have a question about certified photocopy.",
    "zhHans": "我需要咨询有关认证副本的问题。",
    "zhHant": "我需要查詢有關認證副本的問題。"
  },
  {
    "id": "cartao-reconhecimento_diplomas-com-quem-devo-falar-sobre-o-reconhecimento-de-assinatura",
    "situacao": "reconhecimento_diplomas",
    "order": 468,
    "purpose": "useful situation example",
    "pt": "Com quem devo falar sobre o reconhecimento de assinatura?",
    "en": "Who should I speak to about signature certification?",
    "zhHans": "关于签名认证，我应该和谁联系？",
    "zhHant": "關於簽名認證，我應該聯絡誰？"
  },
  {
    "id": "cartao-reconhecimento_diplomas-com-quem-devo-falar-sobre-a-traducao-certificada",
    "situacao": "reconhecimento_diplomas",
    "order": 469,
    "purpose": "useful situation example",
    "pt": "Pode explicar-me melhor o que preciso de saber sobre a tradução certificada?",
    "en": "Could you explain what I need to know about certified translation?",
    "zhHans": "您能说明我需要了解认证翻译的哪些信息吗？",
    "zhHant": "您能說明我需要了解認證翻譯的哪些資訊嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-reconhecimento_diplomas-queria-informacoes-sobre-o-certificado-de-formacao",
    "situacao": "reconhecimento_diplomas",
    "order": 470,
    "purpose": "useful situation example",
    "pt": "Queria informações sobre o certificado de formação.",
    "en": "I would like information about training certificate.",
    "zhHans": "我想了解培训证书。",
    "zhHant": "我想了解培訓證書。"
  },
  {
    "id": "cartao-consulado_documentos-onde-posso-encontrar-informacoes-sobre-a-certidao-de-nascimento",
    "situacao": "consulado_documentos",
    "order": 471,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre a certidão de nascimento?",
    "en": "Where can I find information about birth certificate?",
    "zhHans": "我可以在哪里查到有关出生证明的信息？",
    "zhHant": "我可以在哪裡查到有關出生證明的資訊？"
  },
  {
    "id": "cartao-consulado_documentos-pode-dar-me-informacoes-sobre-o-reconhecimento-de-assinatura",
    "situacao": "consulado_documentos",
    "order": 472,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre o reconhecimento de assinatura?",
    "en": "Could you give me information about signature certification?",
    "zhHans": "可以告诉我有关签名认证的信息吗？",
    "zhHant": "可以告訴我有關簽名認證的資訊嗎？"
  },
  {
    "id": "cartao-consulado_documentos-pode-explicar-me-o-que-devo-fazer-para-pagar-uma-taxa",
    "situacao": "consulado_documentos",
    "order": 473,
    "purpose": "useful situation example",
    "pt": "Pode explicar-me o que devo fazer para pagar uma taxa?",
    "en": "Could you explain what I need to do to pay a fee?",
    "zhHans": "可以说明我要怎样缴納费用吗？",
    "zhHant": "可以說明我要怎樣繳納費用嗎？"
  },
  {
    "id": "cartao-consulado_documentos-onde-posso-encontrar-informacoes-sobre-a-assinatura",
    "situacao": "consulado_documentos",
    "order": 474,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre a assinatura.",
    "en": "I would like to know more about signature.",
    "zhHans": "我想进一步了解签名。",
    "zhHant": "我想進一步了解簽名。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-consulado_documentos-pode-dar-me-informacoes-sobre-a-notificacao",
    "situacao": "consulado_documentos",
    "order": 475,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre a notificação?",
    "en": "Who can advise me about official notification?",
    "zhHans": "关于官方通知，谁可以给我指引？",
    "zhHant": "關於官方通知，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-consulado_documentos-pode-dar-me-informacoes-sobre-a-certidao",
    "situacao": "consulado_documentos",
    "order": 476,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com a certidão.",
    "en": "I have a question related to certificate / official copy.",
    "zhHans": "我有一个与证明书／正式副本有关的问题。",
    "zhHant": "我有一個與證明書／正式副本有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-consulado_documentos-queria-informacoes-sobre-o-registo-criminal-do-pais-de-origem",
    "situacao": "consulado_documentos",
    "order": 477,
    "purpose": "useful situation example",
    "pt": "Queria informações sobre o registo criminal do país de origem.",
    "en": "I would like information about criminal record from home country.",
    "zhHans": "我想了解原籍國无犯罪记录。",
    "zhHant": "我想了解原籍國無犯罪記錄。"
  },
  {
    "id": "cartao-consulado_documentos-preciso-de-autorizacao-para-consulta-do-registo-criminal",
    "situacao": "consulado_documentos",
    "order": 478,
    "purpose": "useful situation example",
    "pt": "Preciso de autorização para consulta do registo criminal.",
    "en": "I need authorisation to consult the criminal record.",
    "zhHans": "我需要授权查询犯罪记录。",
    "zhHant": "我需要授權查詢犯罪紀錄。"
  },
  {
    "id": "cartao-consulado_documentos-queria-informacoes-sobre-a-certidao-de-residencia-fiscal",
    "situacao": "consulado_documentos",
    "order": 479,
    "purpose": "useful situation example",
    "pt": "Consegue ajudar-me com uma dúvida sobre a certidão de residência fiscal?",
    "en": "Can you help me with a question about certificate of tax residency?",
    "zhHans": "您能帮我解答一个有关税务居民证明的问题吗？",
    "zhHant": "您能幫我解答一個有關稅務居民證明的問題嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-consulado_documentos-com-quem-devo-falar-sobre-a-traducao-certificada",
    "situacao": "consulado_documentos",
    "order": 480,
    "purpose": "useful situation example",
    "pt": "Com quem devo falar sobre a tradução certificada?",
    "en": "Who should I speak to about certified translation?",
    "zhHans": "关于认证翻译，我应该和谁联系？",
    "zhHant": "關於認證翻譯，我應該聯絡誰？"
  },
  {
    "id": "cartao-consulado_documentos-queria-informacoes-sobre-o-comprovativo-de-pagamento",
    "situacao": "consulado_documentos",
    "order": 481,
    "purpose": "useful situation example",
    "pt": "A quem posso pedir esclarecimentos sobre o comprovativo de pagamento?",
    "en": "Who can I ask for clarification about proof of payment?",
    "zhHans": "关于缴费憑证，我可以向谁咨询？",
    "zhHant": "關於繳費憑證，我可以向誰查詢？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-consulado_documentos-preciso-de-esclarecer-uma-duvida-sobre-a-declaracao",
    "situacao": "consulado_documentos",
    "order": 482,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre a declaração.",
    "en": "I have a question about declaration / statement.",
    "zhHans": "我需要咨询有关声明书的问题。",
    "zhHant": "我需要查詢有關聲明書的問題。"
  },
  {
    "id": "cartao-saude-pode-explicar-me-o-que-devo-fazer-para-tomar-o-medicamento",
    "situacao": "saude",
    "order": 483,
    "purpose": "useful situation example",
    "pt": "Pode explicar-me o que devo fazer para tomar o medicamento?",
    "en": "Could you explain what I need to do to take the medicine?",
    "zhHans": "可以说明我要怎样服药吗？",
    "zhHant": "可以說明我要怎樣服藥嗎？"
  },
  {
    "id": "cartao-saude-onde-posso-encontrar-informacoes-sobre-a-baixa-medica",
    "situacao": "saude",
    "order": 484,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre a baixa médica?",
    "en": "Where can I find information about sick leave certificate?",
    "zhHans": "我可以在哪里查到有关病假证明的信息？",
    "zhHant": "我可以在哪裡查到有關病假證明的資訊？"
  },
  {
    "id": "cartao-saude-pode-dar-me-informacoes-sobre-o-medicamento-generico",
    "situacao": "saude",
    "order": 485,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre o medicamento genérico?",
    "en": "Could you give me information about generic medicine?",
    "zhHans": "可以告诉我有关仿制药（平价替代药）的信息吗？",
    "zhHant": "可以告訴我有關仿製藥（平價替代藥）的資訊嗎？"
  },
  {
    "id": "cartao-saude-onde-posso-encontrar-informacoes-sobre-o-resultado",
    "situacao": "saude",
    "order": 486,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre o resultado.",
    "en": "I would like to know more about result.",
    "zhHans": "我想进一步了解结果。",
    "zhHant": "我想進一步了解結果。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-saude-pode-dar-me-informacoes-sobre-o-raio-x",
    "situacao": "saude",
    "order": 487,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre o raio-X?",
    "en": "Who can advise me about X-ray?",
    "zhHans": "关于X光，谁可以给我指引？",
    "zhHant": "關於X光，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-saude-preciso-de-esclarecer-uma-duvida-sobre-o-medico-de-familia",
    "situacao": "saude",
    "order": 488,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre o médico de família.",
    "en": "I have a question about family doctor (GP).",
    "zhHans": "我需要咨询有关家庭医生的问题。",
    "zhHant": "我需要查詢有關家庭醫生的問題。"
  },
  {
    "id": "cartao-saude-preciso-de-esclarecer-uma-duvida-sobre-a-analise-ao-sangue",
    "situacao": "saude",
    "order": 489,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com a análise ao sangue.",
    "en": "I have a question related to blood test.",
    "zhHans": "我有一个与验血有关的问题。",
    "zhHant": "我有一個與驗血有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-saude-preciso-de-esclarecer-uma-duvida-sobre-o-seguro-de-saude",
    "situacao": "saude",
    "order": 490,
    "purpose": "useful situation example",
    "pt": "Consegue ajudar-me com uma dúvida sobre o seguro de saúde?",
    "en": "Can you help me with a question about health insurance?",
    "zhHans": "您能帮我解答一个有关医疗保险的问题吗？",
    "zhHant": "您能幫我解答一個有關醫療保險的問題嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-saude-preciso-de-esclarecer-uma-duvida-sobre-o-atestado-medico",
    "situacao": "saude",
    "order": 491,
    "purpose": "useful situation example",
    "pt": "A quem posso pedir esclarecimentos sobre o atestado médico?",
    "en": "Who can I ask for clarification about medical certificate?",
    "zhHans": "关于医生证明，我可以向谁咨询？",
    "zhHant": "關於醫生證明，我可以向誰查詢？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-escola-onde-posso-encontrar-informacoes-sobre-a-escola-da-area-de-residencia",
    "situacao": "escola",
    "order": 492,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre a escola da área de residência?",
    "en": "Where can I find information about the school for your home address?",
    "zhHans": "我可以在哪里查到有关居住地划片学校的信息？",
    "zhHant": "我可以在哪裡查到有關居住地劃片學校的資訊？"
  },
  {
    "id": "cartao-escola-onde-posso-encontrar-informacoes-sobre-os-manuais-escolares",
    "situacao": "escola",
    "order": 493,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre os manuais escolares.",
    "en": "I would like to know more about textbooks.",
    "zhHans": "我想进一步了解教科书。",
    "zhHant": "我想進一步了解教科書。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-escola-onde-posso-encontrar-informacoes-sobre-o-diretor-de-turma",
    "situacao": "escola",
    "order": 494,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre o diretor de turma?",
    "en": "Who can advise me about form tutor / homeroom teacher?",
    "zhHans": "关于班主任，谁可以给我指引？",
    "zhHant": "關於班主任，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-escola-pode-dar-me-informacoes-sobre-o-portal-das-matriculas",
    "situacao": "escola",
    "order": 495,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre o Portal das Matrículas?",
    "en": "Could you give me information about the online enrolment portal?",
    "zhHans": "可以告诉我有关入学註册网站的信息吗？",
    "zhHant": "可以告訴我有關入學註冊網站的資訊嗎？"
  },
  {
    "id": "cartao-escola-pode-dar-me-informacoes-sobre-a-reuniao-de-pais",
    "situacao": "escola",
    "order": 496,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com a reunião de pais.",
    "en": "I have a question related to parents' meeting.",
    "zhHans": "我有一个与家长会有关的问题。",
    "zhHant": "我有一個與家長會有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-escola-onde-posso-encontrar-informacoes-sobre-a-creche",
    "situacao": "escola",
    "order": 497,
    "purpose": "useful situation example",
    "pt": "Consegue ajudar-me com uma dúvida sobre a creche?",
    "en": "Can you help me with a question about nursery (0-3)?",
    "zhHans": "您能帮我解答一个有关託儿所的问题吗？",
    "zhHant": "您能幫我解答一個有關託兒所的問題嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-escola-pode-dar-me-informacoes-sobre-o-cartao-do-aluno",
    "situacao": "escola",
    "order": 498,
    "purpose": "useful situation example",
    "pt": "A quem posso pedir esclarecimentos sobre o cartão do aluno?",
    "en": "Who can I ask for clarification about student card?",
    "zhHans": "关于学生卡，我可以向谁咨询？",
    "zhHant": "關於學生卡，我可以向誰查詢？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-escola-onde-posso-encontrar-informacoes-sobre-a-falta",
    "situacao": "escola",
    "order": 499,
    "purpose": "useful situation example",
    "pt": "Pode explicar-me melhor o que preciso de saber sobre a falta?",
    "en": "Could you explain what I need to know about absence?",
    "zhHans": "您能说明我需要了解缺勤的哪些信息吗？",
    "zhHant": "您能說明我需要了解缺勤的哪些資訊嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-escola-preciso-de-esclarecer-uma-duvida-sobre-o-encarregado-de-educacao",
    "situacao": "escola",
    "order": 500,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre o encarregado de educação.",
    "en": "I have a question about legal guardian (for school purposes).",
    "zhHans": "我需要咨询有关教育监护人的问题。",
    "zhHant": "我需要查詢有關教育監護人的問題。"
  },
  {
    "id": "cartao-arrendamento-onde-posso-encontrar-informacoes-sobre-o-esquentador",
    "situacao": "arrendamento",
    "order": 501,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre o esquentador?",
    "en": "Where can I find information about gas water heater?",
    "zhHans": "我可以在哪里查到有关燃气热水器的信息？",
    "zhHant": "我可以在哪裡查到有關燃氣熱水器的資訊？"
  },
  {
    "id": "cartao-arrendamento-pode-dar-me-informacoes-sobre-a-denuncia-do-contrato",
    "situacao": "arrendamento",
    "order": 502,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre a denúncia do contrato?",
    "en": "Could you give me information about termination notice (of tenancy)?",
    "zhHans": "可以告诉我有关解约通知的信息吗？",
    "zhHant": "可以告訴我有關解約通知的資訊嗎？"
  },
  {
    "id": "cartao-arrendamento-pode-dar-me-informacoes-sobre-o-agente-imobiliario",
    "situacao": "arrendamento",
    "order": 503,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre o agente imobiliário.",
    "en": "I would like to know more about real estate agent.",
    "zhHans": "我想进一步了解房产中介。",
    "zhHant": "我想進一步了解房產中介。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-arrendamento-onde-posso-encontrar-informacoes-sobre-o-anuncio",
    "situacao": "arrendamento",
    "order": 504,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre o anúncio?",
    "en": "Who can advise me about listing / advert?",
    "zhHans": "关于租房广告，谁可以给我指引？",
    "zhHant": "關於租房廣告，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-arrendamento-pode-dar-me-informacoes-sobre-o-eletrodomestico",
    "situacao": "arrendamento",
    "order": 505,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com o eletrodoméstico.",
    "en": "I have a question related to household appliance.",
    "zhHans": "我有一个与家用电器有关的问题。",
    "zhHant": "我有一個與家用電器有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-arrendamento-pode-dar-me-informacoes-sobre-o-condominio",
    "situacao": "arrendamento",
    "order": 506,
    "purpose": "useful situation example",
    "pt": "Consegue ajudar-me com uma dúvida sobre o condomínio?",
    "en": "Can you help me with a question about building service charge?",
    "zhHans": "您能帮我解答一个有关大厦管理费的问题吗？",
    "zhHant": "您能幫我解答一個有關大廈管理費的問題嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-arrendamento-pode-dar-me-informacoes-sobre-o-fiador",
    "situacao": "arrendamento",
    "order": 507,
    "purpose": "useful situation example",
    "pt": "A quem posso pedir esclarecimentos sobre o fiador?",
    "en": "Who can I ask for clarification about guarantor?",
    "zhHans": "关于担保人，我可以向谁咨询？",
    "zhHant": "關於擔保人，我可以向誰查詢？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-arrendamento-preciso-de-esclarecer-uma-duvida-sobre-o-contrato-de-arrendamento",
    "situacao": "arrendamento",
    "order": 508,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre o contrato de arrendamento.",
    "en": "I have a question about rental contract.",
    "zhHans": "我需要咨询有关租赁合同的问题。",
    "zhHant": "我需要查詢有關租賃合同的問題。"
  },
  {
    "id": "cartao-arrendamento-preciso-de-esclarecer-uma-duvida-sobre-a-devolucao-da-caucao",
    "situacao": "arrendamento",
    "order": 509,
    "purpose": "useful situation example",
    "pt": "Pode explicar-me melhor o que preciso de saber sobre a devolução da caução?",
    "en": "Could you explain what I need to know about return of the deposit?",
    "zhHans": "您能说明我需要了解退还押金的哪些信息吗？",
    "zhHant": "您能說明我需要了解退還押金的哪些資訊嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-transportes-onde-posso-encontrar-informacoes-sobre-o-titulo-de-transporte",
    "situacao": "transportes",
    "order": 510,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre o título de transporte?",
    "en": "Where can I find information about valid ticket / travel document?",
    "zhHans": "我可以在哪里查到有关有效车票的信息？",
    "zhHant": "我可以在哪裡查到有關有效車票的資訊？"
  },
  {
    "id": "cartao-transportes-onde-posso-encontrar-informacoes-sobre-o-lugar-reservado",
    "situacao": "transportes",
    "order": 511,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre o lugar reservado.",
    "en": "I would like to know more about reserved seat.",
    "zhHans": "我想进一步了解预留座位。",
    "zhHant": "我想進一步了解預留座位。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-transportes-onde-posso-encontrar-informacoes-sobre-o-horario",
    "situacao": "transportes",
    "order": 512,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre o horário?",
    "en": "Who can advise me about timetable?",
    "zhHans": "关于时刻表，谁可以给我指引？",
    "zhHant": "關於時刻表，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-transportes-pode-dar-me-informacoes-sobre-a-app-do-operador",
    "situacao": "transportes",
    "order": 513,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre a app do operador?",
    "en": "Could you give me information about the operator's app?",
    "zhHans": "可以告诉我有关运營商应用程式的信息吗？",
    "zhHant": "可以告訴我有關運營商應用程式的資訊嗎？"
  },
  {
    "id": "cartao-transportes-pode-dar-me-informacoes-sobre-o-eletrico",
    "situacao": "transportes",
    "order": 514,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com o elétrico.",
    "en": "I have a question related to tram.",
    "zhHans": "我有一个与有轨电车有关的问题。",
    "zhHant": "我有一個與有軌電車有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-transportes-pode-dar-me-informacoes-sobre-a-estacao",
    "situacao": "transportes",
    "order": 515,
    "purpose": "useful situation example",
    "pt": "Consegue ajudar-me com uma dúvida sobre a estação?",
    "en": "Can you help me with a question about station?",
    "zhHans": "您能帮我解答一个有关车站（火车/地铁站）的问题吗？",
    "zhHant": "您能幫我解答一個有關車站（火車/地鐵站）的問題嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-transportes-pode-dar-me-informacoes-sobre-o-sentido",
    "situacao": "transportes",
    "order": 516,
    "purpose": "useful situation example",
    "pt": "A quem posso pedir esclarecimentos sobre o sentido?",
    "en": "Who can I ask for clarification about direction?",
    "zhHans": "关于方向，我可以向谁咨询？",
    "zhHant": "關於方向，我可以向誰查詢？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-transportes-como-posso-viajar-sem-titulo",
    "situacao": "transportes",
    "order": 517,
    "purpose": "useful situation example",
    "pt": "Onde posso comprar um título de transporte?",
    "en": "Where can I buy a ticket?",
    "zhHans": "我可以在哪里买车票？",
    "zhHant": "我可以在哪裡買車票？"
  },
  {
    "id": "cartao-transportes-queria-informacoes-sobre-a-estacao-de-metro-mais-proxima",
    "situacao": "transportes",
    "order": 518,
    "purpose": "useful situation example",
    "pt": "Queria informações sobre a estação de metro mais próxima.",
    "en": "I would like information about the nearest metro station.",
    "zhHans": "我想了解最近的地铁站。",
    "zhHant": "我想了解最近的地鐵站。"
  },
  {
    "id": "cartao-transportes-preciso-de-esclarecer-uma-duvida-sobre-o-passe-mensal",
    "situacao": "transportes",
    "order": 519,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre o passe mensal.",
    "en": "I have a question about monthly pass.",
    "zhHans": "我需要咨询有关月票的问题。",
    "zhHant": "我需要查詢有關月票的問題。"
  },
  {
    "id": "cartao-veterinario-tens-animais-de-estimacao",
    "situacao": "veterinario",
    "order": 520,
    "purpose": "useful situation example",
    "pt": "Tens animais de estimação?",
    "en": "Do you have pets?",
    "zhHans": "你有养宠物吗？",
    "zhHant": "你有養寵物嗎？"
  },
  {
    "id": "cartao-veterinario-o-acaime-e-obrigatorio",
    "situacao": "veterinario",
    "order": 521,
    "purpose": "useful situation example",
    "pt": "O açaime é obrigatório?",
    "en": "Is the muzzle mandatory?",
    "zhHans": "一定要戴嘴套吗？",
    "zhHant": "一定要戴嘴套嗎？"
  },
  {
    "id": "cartao-veterinario-o-gato-odeia-a-transportadora",
    "situacao": "veterinario",
    "order": 522,
    "purpose": "useful situation example",
    "pt": "O gato odeia a transportadora.",
    "en": "The cat hates the carrier.",
    "zhHans": "猫讨厌提笼。",
    "zhHant": "貓討厭提籠。"
  },
  {
    "id": "cartao-veterinario-fiz-a-desparasitacao-em-casa",
    "situacao": "veterinario",
    "order": 523,
    "purpose": "useful situation example",
    "pt": "Fiz a desparasitação em casa.",
    "en": "I did the deworming at home.",
    "zhHans": "我在家帮它驱虫了。",
    "zhHant": "我在家幫牠驅蟲了。"
  },
  {
    "id": "cartao-ginasio-quero-cancelar-a-inscricao",
    "situacao": "ginasio",
    "order": 524,
    "purpose": "useful situation example",
    "pt": "Quero cancelar a inscrição.",
    "en": "I want to cancel my membership.",
    "zhHans": "我想取消会员资格。",
    "zhHant": "我想取消會籍。"
  },
  {
    "id": "cartao-ginasio-tenho-uma-lesao-no-joelho",
    "situacao": "ginasio",
    "order": 525,
    "purpose": "useful situation example",
    "pt": "Tenho uma lesão no joelho.",
    "en": "I have a knee injury.",
    "zhHans": "我膝盖受伤了。",
    "zhHant": "我膝蓋受傷了。"
  },
  {
    "id": "cartao-ginasio-quero-inscrever-me-hoje",
    "situacao": "ginasio",
    "order": 526,
    "purpose": "useful situation example",
    "pt": "Quero inscrever-me hoje.",
    "en": "I want to sign up today.",
    "zhHans": "我想今天报名。",
    "zhHant": "我想今天報名。"
  },
  {
    "id": "cartao-ginasio-a-taxa-de-inscricao-paga-se-uma-vez",
    "situacao": "ginasio",
    "order": 527,
    "purpose": "useful situation example",
    "pt": "A taxa de inscrição paga-se uma vez.",
    "en": "The registration fee is paid once.",
    "zhHans": "入会费只付一次。",
    "zhHant": "入會費只付一次。"
  },
  {
    "id": "cartao-ginasio-a-mensalidade-e-de-trinta-euros",
    "situacao": "ginasio",
    "order": 528,
    "purpose": "useful situation example",
    "pt": "A mensalidade é de trinta euros.",
    "en": "The monthly fee is thirty euros.",
    "zhHans": "月费是三十欧元。",
    "zhHant": "月費是三十歐元。"
  },
  {
    "id": "cartao-ginasio-nao-quero-fidelizacao",
    "situacao": "ginasio",
    "order": 529,
    "purpose": "useful situation example",
    "pt": "Não quero um contrato com fidelização.",
    "en": "I do not want a contract with a lock-in period.",
    "zhHans": "我不想签有绑定期的合同。",
    "zhHant": "我不想簽有綁約期的合約。"
  },
  {
    "id": "cartao-convivio-sentamo-nos-na-esplanada",
    "situacao": "convivio",
    "order": 530,
    "purpose": "useful situation example",
    "pt": "Sentamo-nos na esplanada?",
    "en": "Shall we sit on the terrace?",
    "zhHans": "我们坐露天座位好吗？",
    "zhHant": "我們坐露天座位好嗎？"
  },
  {
    "id": "cartao-convivio-podemos-adiar-para-sexta",
    "situacao": "convivio",
    "order": 531,
    "purpose": "useful situation example",
    "pt": "Podemos adiar para sexta?",
    "en": "Can we postpone it until Friday?",
    "zhHans": "能改到周五吗？",
    "zhHant": "能改到週五嗎？"
  },
  {
    "id": "cartao-convivio-quero-conhecer-os-teus-amigos",
    "situacao": "convivio",
    "order": 532,
    "purpose": "useful situation example",
    "pt": "Quero conhecer os teus amigos.",
    "en": "I want to meet your friends.",
    "zhHans": "我想认识你的朋友。",
    "zhHant": "我想認識你的朋友。"
  },
  {
    "id": "cartao-convivio-combinamos-para-sabado",
    "situacao": "convivio",
    "order": 533,
    "purpose": "useful situation example",
    "pt": "Combinamos para sábado?",
    "en": "Shall we arrange for Saturday?",
    "zhHans": "我们约周六好吗？",
    "zhHant": "我們約週六好嗎？"
  },
  {
    "id": "cartao-vizinhos-emprestas-me-um-pouco-de-sal",
    "situacao": "vizinhos",
    "order": 534,
    "purpose": "useful situation example",
    "pt": "Emprestas-me um pouco de sal?",
    "en": "Can you lend me some salt?",
    "zhHans": "能借我一点盐吗？",
    "zhHant": "能借我一點鹽嗎？"
  },
  {
    "id": "cartao-vizinhos-o-vizinho-de-cima-e-simpatico",
    "situacao": "vizinhos",
    "order": 535,
    "purpose": "useful situation example",
    "pt": "O vizinho de cima é simpático.",
    "en": "The upstairs neighbor is friendly.",
    "zhHans": "楼上的邻居人很好。",
    "zhHant": "樓上的鄰居人很好。"
  },
  {
    "id": "cartao-vizinhos-preciso-de-um-favor",
    "situacao": "vizinhos",
    "order": 536,
    "purpose": "useful situation example",
    "pt": "Preciso de um favor.",
    "en": "I need a favor.",
    "zhHans": "我需要帮个忙。",
    "zhHant": "我需要幫個忙。"
  },
  {
    "id": "cartao-vizinhos-desculpe-incomodar-tao-tarde",
    "situacao": "vizinhos",
    "order": 537,
    "purpose": "useful situation example",
    "pt": "Desculpe incomodar tão tarde.",
    "en": "Sorry to bother you so late.",
    "zhHans": "抱歉这么晚打扰。",
    "zhHant": "抱歉這麼晚打擾。"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-pode-secar-por-favor",
    "situacao": "cabeleireiro_barbeiro",
    "order": 538,
    "purpose": "useful situation example",
    "pt": "Pode secar, por favor?",
    "en": "Could you blow-dry it, please?",
    "zhHans": "可以帮我吹干吗？",
    "zhHant": "可以幫我吹乾嗎？"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-quero-marcar-para-sabado",
    "situacao": "cabeleireiro_barbeiro",
    "order": 539,
    "purpose": "useful situation example",
    "pt": "Quero marcar para sábado.",
    "en": "I want to make an appointment for Saturday.",
    "zhHans": "我想预约周六。",
    "zhHant": "我想預約週六。"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-quero-pintar-de-castanho",
    "situacao": "cabeleireiro_barbeiro",
    "order": 540,
    "purpose": "useful situation example",
    "pt": "Quero pintar o cabelo de castanho.",
    "en": "I want to dye my hair brown.",
    "zhHans": "我想把头发染成棕色。",
    "zhHant": "我想把頭髮染成啡色。"
  },
  {
    "id": "cartao-cabeleireiro_barbeiro-quero-um-tom-mais-claro",
    "situacao": "cabeleireiro_barbeiro",
    "order": 541,
    "purpose": "useful situation example",
    "pt": "Quero um tom mais claro.",
    "en": "I want a lighter tone.",
    "zhHans": "我想要浅一点的色调。",
    "zhHant": "我想要淺一點的色調。"
  },
  {
    "id": "cartao-farmacia-qual-e-a-dose-certa",
    "situacao": "farmacia",
    "order": 542,
    "purpose": "useful situation example",
    "pt": "Qual é a dose certa?",
    "en": "What is the right dose?",
    "zhHans": "正确剂量是多少？",
    "zhHant": "正確劑量是多少？"
  },
  {
    "id": "cartao-farmacia-preciso-de-um-penso-rapido",
    "situacao": "farmacia",
    "order": 543,
    "purpose": "useful situation example",
    "pt": "Preciso de um penso rápido.",
    "en": "I need a Band-Aid.",
    "zhHans": "我需要创可贴。",
    "zhHant": "我需要OK繃。"
  },
  {
    "id": "cartao-farmacia-tenho-alergia-ao-polen",
    "situacao": "farmacia",
    "order": 544,
    "purpose": "useful situation example",
    "pt": "Tenho alergia ao pólen.",
    "en": "I am allergic to pollen.",
    "zhHans": "我对花粉过敏。",
    "zhHant": "我對花粉過敏。"
  },
  {
    "id": "cartao-farmacia-procura-a-farmacia-de-servico",
    "situacao": "farmacia",
    "order": 545,
    "purpose": "useful situation example",
    "pt": "Procura a farmácia de serviço.",
    "en": "Look for the pharmacy on duty.",
    "zhHans": "找一下值班药店。",
    "zhHant": "找一下值班藥局。"
  },
  {
    "id": "cartao-supermercado_mercado-posso-pagar-com-o-multibanco",
    "situacao": "supermercado_mercado",
    "order": 546,
    "purpose": "useful situation example",
    "pt": "Posso pagar com o multibanco?",
    "en": "Can I pay by debit card?",
    "zhHans": "我可以用借记卡付款吗？",
    "zhHant": "我可以用金融卡付款嗎？"
  },
  {
    "id": "cartao-supermercado_mercado-qual-e-o-prazo-de-validade",
    "situacao": "supermercado_mercado",
    "order": 547,
    "purpose": "useful situation example",
    "pt": "Qual é o prazo de validade?",
    "en": "What is the expiry date?",
    "zhHans": "有效期到什么时候？",
    "zhHant": "有效期限到什麼時候？"
  },
  {
    "id": "cartao-supermercado_mercado-preciso-de-esclarecer-uma-duvida-sobre-o-peso",
    "situacao": "supermercado_mercado",
    "order": 548,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre o peso.",
    "en": "I have a question about weight.",
    "zhHans": "我需要咨询有关重量的问题。",
    "zhHant": "我需要查詢有關重量的問題。"
  },
  {
    "id": "cartao-supermercado_mercado-pode-dar-me-uma-fatura",
    "situacao": "supermercado_mercado",
    "order": 549,
    "purpose": "useful situation example",
    "pt": "Pode dar-me uma fatura?",
    "en": "Can you give me an invoice?",
    "zhHans": "可以给我一张发票吗？",
    "zhHant": "可以給我一張發票嗎？"
  },
  {
    "id": "cartao-supermercado_mercado-queria-duas-latas-de-tomate-pelado",
    "situacao": "supermercado_mercado",
    "order": 550,
    "purpose": "useful situation example",
    "pt": "Queria duas latas de tomate pelado.",
    "en": "I would like two cans of peeled tomatoes.",
    "zhHans": "我想要两罐去皮番茄。",
    "zhHant": "我想要兩罐去皮番茄。"
  },
  {
    "id": "cartao-supermercado_mercado-preciso-de-um-pacote-de-acucar",
    "situacao": "supermercado_mercado",
    "order": 551,
    "purpose": "useful situation example",
    "pt": "Preciso de um pacote de açúcar.",
    "en": "I need a packet of sugar.",
    "zhHans": "我需要一包糖。",
    "zhHant": "我需要一包糖。"
  },
  {
    "id": "cartao-supermercado_mercado-queria-uma-garrafa-de-azeite",
    "situacao": "supermercado_mercado",
    "order": 552,
    "purpose": "useful situation example",
    "pt": "Queria uma garrafa de azeite.",
    "en": "I would like a bottle of olive oil.",
    "zhHans": "我想要一瓶橄榄油。",
    "zhHant": "我想要一瓶橄欖油。"
  },
  {
    "id": "cartao-supermercado_mercado-queria-dois-quilos-de-arroz",
    "situacao": "supermercado_mercado",
    "order": 553,
    "purpose": "useful situation example",
    "pt": "Queria dois quilos de arroz.",
    "en": "I would like two kilos of rice.",
    "zhHans": "我想要两公斤米。",
    "zhHant": "我想要兩公斤米。"
  },
  {
    "id": "cartao-supermercado_mercado-preciso-de-ajuda-para-pesar",
    "situacao": "supermercado_mercado",
    "order": 554,
    "purpose": "useful situation example",
    "pt": "Preciso de ajuda para pesar.",
    "en": "I need help to weigh.",
    "zhHans": "我需要协助稱重。",
    "zhHant": "我需要協助稱重。"
  },
  {
    "id": "cartao-supermercado_mercado-o-meu-numero-de-contribuinte-e-243-333-218",
    "situacao": "supermercado_mercado",
    "order": 555,
    "purpose": "useful situation example",
    "pt": "O meu número de contribuinte é 243 333 218.",
    "en": "My tax number is 243 333 218.",
    "zhHans": "我的税号是 243 333 218。",
    "zhHant": "我的稅號是 243 333 218。"
  },
  {
    "id": "cartao-supermercado_mercado-quero-um-queijo-fresco",
    "situacao": "supermercado_mercado",
    "order": 556,
    "purpose": "useful situation example",
    "pt": "Quero um queijo fresco.",
    "en": "I want a fresh cheese.",
    "zhHans": "我想要一块新鲜奶酪。",
    "zhHant": "我想要一塊新鮮起司。"
  },
  {
    "id": "cartao-supermercado_mercado-a-maca-e-melhor-do-que-as-limas",
    "situacao": "supermercado_mercado",
    "order": 557,
    "purpose": "useful situation example",
    "pt": "Quanto custam as maçãs?",
    "en": "How much are the apples?",
    "zhHans": "苹果多少钱？",
    "zhHant": "蘋果多少錢？"
  },
  {
    "id": "cartao-supermercado_mercado-compro-quatro-pacotes-de-leite",
    "situacao": "supermercado_mercado",
    "order": 558,
    "purpose": "useful situation example",
    "pt": "Levo quatro pacotes de leite, por favor.",
    "en": "I'll take four cartons of milk, please.",
    "zhHans": "我要四盒牛奶。",
    "zhHant": "我要四盒牛奶。"
  },
  {
    "id": "cartao-supermercado_mercado-a-carne-de-vaca-esta-no-talho",
    "situacao": "supermercado_mercado",
    "order": 559,
    "purpose": "useful situation example",
    "pt": "A carne de vaca está no talho.",
    "en": "The beef is at the butcher's.",
    "zhHans": "牛肉在肉店。",
    "zhHant": "牛肉在肉店。"
  },
  {
    "id": "cartao-supermercado_mercado-quero-frango-assado",
    "situacao": "supermercado_mercado",
    "order": 560,
    "purpose": "useful situation example",
    "pt": "Quero frango assado.",
    "en": "I want roast chicken.",
    "zhHans": "我想要烤鸡。",
    "zhHant": "我想要烤雞。"
  },
  {
    "id": "cartao-cafe_restaurante-pode-explicar-me-o-que-devo-fazer-para-anotar-o-pedido",
    "situacao": "cafe_restaurante",
    "order": 561,
    "purpose": "useful situation example",
    "pt": "Pode anotar o nosso pedido?",
    "en": "Could you take our order?",
    "zhHans": "可以帮我们点餐吗？",
    "zhHant": "可以幫我們點餐嗎？"
  },
  {
    "id": "cartao-cafe_restaurante-onde-posso-encontrar-informacoes-sobre-a-esplanada",
    "situacao": "cafe_restaurante",
    "order": 562,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre a esplanada?",
    "en": "Where can I find information about outdoor terrace?",
    "zhHans": "我可以在哪里查到有关露天座位的信息？",
    "zhHant": "我可以在哪裡查到有關露天座位的資訊？"
  },
  {
    "id": "cartao-cafe_restaurante-onde-posso-encontrar-informacoes-sobre-o-couvert",
    "situacao": "cafe_restaurante",
    "order": 563,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre o couvert.",
    "en": "I would like to know more about couvert (bread/olives, charged).",
    "zhHans": "我想进一步了解餐前小食（收费）。",
    "zhHant": "我想進一步了解餐前小食（收費）。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-cafe_restaurante-pode-dar-me-informacoes-sobre-o-prato-principal",
    "situacao": "cafe_restaurante",
    "order": 564,
    "purpose": "useful situation example",
    "pt": "Quais são os pratos principais?",
    "en": "What main courses do you have?",
    "zhHans": "你们有哪些主菜？",
    "zhHant": "你們有哪些主菜？"
  },
  {
    "id": "cartao-cafe_restaurante-pode-dar-me-informacoes-sobre-a-gorjeta",
    "situacao": "cafe_restaurante",
    "order": 565,
    "purpose": "useful situation example",
    "pt": "A gorjeta está incluída?",
    "en": "Is the tip included?",
    "zhHans": "小费包括在内吗？",
    "zhHant": "小費包括在內嗎？"
  },
  {
    "id": "cartao-cafe_restaurante-com-quem-devo-falar-sobre-a-alergia-alimentar",
    "situacao": "cafe_restaurante",
    "order": 566,
    "purpose": "useful situation example",
    "pt": "Com quem devo falar sobre a alergia alimentar?",
    "en": "Who should I speak to about food allergy?",
    "zhHans": "关于食物过敏，我应该和谁联系？",
    "zhHant": "關於食物過敏，我應該聯絡誰？"
  },
  {
    "id": "cartao-cafe_restaurante-preciso-de-esclarecer-uma-duvida-sobre-a-sobremesa",
    "situacao": "cafe_restaurante",
    "order": 567,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre a sobremesa.",
    "en": "I have a question about dessert.",
    "zhHans": "我需要咨询有关甜品的问题。",
    "zhHant": "我需要查詢有關甜品的問題。"
  },
  {
    "id": "cartao-cafe_restaurante-com-quem-devo-falar-sobre-o-prato-do-dia",
    "situacao": "cafe_restaurante",
    "order": 568,
    "purpose": "useful situation example",
    "pt": "Pode dizer-me o que inclui o prato do dia?",
    "en": "Could you tell me what today's special includes?",
    "zhHans": "您能告诉我今日特色菜包括什么吗？",
    "zhHant": "您能告訴我今日特色菜包括什麼嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-cafe_restaurante-pode-trazer-a-ementa",
    "situacao": "cafe_restaurante",
    "order": 569,
    "purpose": "useful situation example",
    "pt": "Pode trazer a ementa?",
    "en": "Can you bring the menu?",
    "zhHans": "可以拿菜单给我吗？",
    "zhHant": "可以拿菜單給我嗎？"
  },
  {
    "id": "cartao-cafe_restaurante-queria-informacoes-sobre-a-entrada",
    "situacao": "cafe_restaurante",
    "order": 570,
    "purpose": "useful situation example",
    "pt": "Que entradas têm?",
    "en": "What starters do you have?",
    "zhHans": "你们有哪些前菜？",
    "zhHant": "你們有哪些前菜？"
  },
  {
    "id": "cartao-cafe_restaurante-queria-pagar-a-conta-da-agua",
    "situacao": "cafe_restaurante",
    "order": 571,
    "purpose": "useful situation example",
    "pt": "Podia trazer-me a conta, por favor?",
    "en": "Could you bring me the bill, please?",
    "zhHans": "请把账单拿给我，好吗？",
    "zhHant": "請把帳單拿給我，好嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-cafe_restaurante-vamos-jantar-num-restaurante-portugues",
    "situacao": "cafe_restaurante",
    "order": 572,
    "purpose": "useful situation example",
    "pt": "Vamos jantar num restaurante português.",
    "en": "We are going to have dinner at a Portuguese restaurant.",
    "zhHans": "我们去一家葡萄牙餐厅吃晚饭。",
    "zhHant": "我們去一家葡萄牙餐廳吃晚餐。"
  },
  {
    "id": "cartao-cafe_restaurante-use-uma-chavena-de-acucar",
    "situacao": "cafe_restaurante",
    "order": 573,
    "purpose": "useful situation example",
    "pt": "Este prato contém açúcar?",
    "en": "Does this dish contain sugar?",
    "zhHans": "这道菜含糖吗？",
    "zhHant": "這道菜含糖嗎？"
  },
  {
    "id": "cartao-cafe_restaurante-como-uma-sandes",
    "situacao": "cafe_restaurante",
    "order": 574,
    "purpose": "useful situation example",
    "pt": "Queria uma sandes, por favor.",
    "en": "I would like a sandwich, please.",
    "zhHans": "我想要一份三明治。",
    "zhHant": "我想要一份三文治。"
  },
  {
    "id": "cartao-cafe_restaurante-queria-uma-bica",
    "situacao": "cafe_restaurante",
    "order": 575,
    "purpose": "useful situation example",
    "pt": "Queria uma bica.",
    "en": "I would like an espresso.",
    "zhHans": "我想要一杯意式浓缩咖啡。",
    "zhHant": "我想要一杯義式濃縮咖啡。"
  },
  {
    "id": "cartao-consultorio_medico-pode-dar-me-informacoes-sobre-o-raio-x",
    "situacao": "consultorio_medico",
    "order": 576,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre o raio-X?",
    "en": "Could you give me information about X-ray?",
    "zhHans": "可以告诉我有关X光的信息吗？",
    "zhHant": "可以告訴我有關X光的資訊嗎？"
  },
  {
    "id": "cartao-consultorio_medico-preciso-de-esclarecer-uma-duvida-sobre-a-analise-ao-sangue",
    "situacao": "consultorio_medico",
    "order": 577,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre a análise ao sangue.",
    "en": "I have a question about blood test.",
    "zhHans": "我需要咨询有关验血的问题。",
    "zhHant": "我需要查詢有關驗血的問題。"
  },
  {
    "id": "cartao-consultorio_medico-com-quem-devo-falar-sobre-o-medico-especialista",
    "situacao": "consultorio_medico",
    "order": 578,
    "purpose": "useful situation example",
    "pt": "Com quem devo falar sobre o médico especialista?",
    "en": "Who should I speak to about specialist doctor?",
    "zhHans": "关于专科医生，我应该和谁联系？",
    "zhHant": "關於專科醫生，我應該聯絡誰？"
  },
  {
    "id": "cartao-consultorio_medico-nao-de-medicamentos-sem-consultar-o-medico",
    "situacao": "consultorio_medico",
    "order": 579,
    "purpose": "useful situation example",
    "pt": "Não dê medicamentos sem consultar o médico.",
    "en": "Do not give medicines without consulting the doctor.",
    "zhHans": "不要在未咨询医生的情况下给药。",
    "zhHant": "不要在未諮詢醫生的情況下給藥。"
  },
  {
    "id": "cartao-consultorio_medico-ha-quanto-tempo-esta-assim",
    "situacao": "consultorio_medico",
    "order": 580,
    "purpose": "useful situation example",
    "pt": "Há quanto tempo está assim?",
    "en": "How long have you been like this?",
    "zhHans": "您这样多久了？",
    "zhHant": "您這樣多久了？"
  },
  {
    "id": "cartao-consultorio_medico-tenho-de-fazer-uma-radiografia",
    "situacao": "consultorio_medico",
    "order": 581,
    "purpose": "useful situation example",
    "pt": "Tenho de fazer uma radiografia.",
    "en": "I have to have an X-ray.",
    "zhHans": "我得拍一张 X 光片。",
    "zhHant": "我得照一張 X 光片。"
  },
  {
    "id": "cartao-consultorio_medico-estou-no-consultorio-medico",
    "situacao": "consultorio_medico",
    "order": 582,
    "purpose": "useful situation example",
    "pt": "Estou no consultório médico.",
    "en": "I am at the doctor's office.",
    "zhHans": "我在医生诊所。",
    "zhHant": "我在醫生診所。"
  },
  {
    "id": "cartao-consultorio_medico-ele-sente-se-cansado-ela-sente-se-cansada",
    "situacao": "consultorio_medico",
    "order": 583,
    "purpose": "useful situation example",
    "pt": "Sinto-me muito cansado/a.",
    "en": "I feel very tired.",
    "zhHans": "我觉得很累。",
    "zhHant": "我覺得很累。"
  },
  {
    "id": "cartao-consultorio_medico-ele-esta-constipado-ela-esta-constipada",
    "situacao": "consultorio_medico",
    "order": 584,
    "purpose": "useful situation example",
    "pt": "Estou constipado/a.",
    "en": "I have a cold.",
    "zhHans": "我感冒了。",
    "zhHant": "我感冒了。"
  },
  {
    "id": "cartao-consultorio_medico-marco-consulta-com-o-medico-de-familia",
    "situacao": "consultorio_medico",
    "order": 585,
    "purpose": "useful situation example",
    "pt": "Marco consulta com o médico de família.",
    "en": "I make an appointment with the family doctor.",
    "zhHans": "我和家庭医生预约看诊。",
    "zhHant": "我和家庭醫生預約看診。"
  },
  {
    "id": "cartao-consultorio_medico-a-usf-e-uma-unidade-de-saude-familiar",
    "situacao": "consultorio_medico",
    "order": 586,
    "purpose": "useful situation example",
    "pt": "Esta é a minha Unidade de Saúde Familiar.",
    "en": "This is my Family Health Unit.",
    "zhHans": "这是我的家庭健康中心。",
    "zhHant": "這是我的家庭健康中心。"
  },
  {
    "id": "cartao-consultorio_medico-vou-ao-centro-de-saude-da-minha-area",
    "situacao": "consultorio_medico",
    "order": 587,
    "purpose": "useful situation example",
    "pt": "Vou ao Centro de Saúde da minha área.",
    "en": "I am going to the health centre in my area.",
    "zhHans": "我去我所在区域的健康中心。",
    "zhHant": "我去我所在區域的健康中心。"
  },
  {
    "id": "cartao-consultorio_medico-ele-esta-enjoado-ela-esta-enjoada",
    "situacao": "consultorio_medico",
    "order": 588,
    "purpose": "useful situation example",
    "pt": "Sinto-me enjoado/a.",
    "en": "I feel nauseous.",
    "zhHans": "我觉得恶心。",
    "zhHant": "我覺得噁心。"
  },
  {
    "id": "cartao-consultorio_medico-a-enfermeira-vai-medir-a-tensao",
    "situacao": "consultorio_medico",
    "order": 589,
    "purpose": "useful situation example",
    "pt": "A enfermeira vai medir a tensão.",
    "en": "The nurse is going to measure the blood pressure.",
    "zhHans": "护士将测量血压。",
    "zhHant": "護士將量血壓。"
  },
  {
    "id": "cartao-consultorio_medico-esta-com-tosse",
    "situacao": "consultorio_medico",
    "order": 590,
    "purpose": "useful situation example",
    "pt": "Está com tosse?",
    "en": "Do you have a cough?",
    "zhHans": "您咳嗽吗？",
    "zhHant": "您咳嗽嗎？"
  },
  {
    "id": "cartao-casa_reparacoes-onde-posso-encontrar-informacoes-sobre-a-chave-de-fendas",
    "situacao": "casa_reparacoes",
    "order": 591,
    "purpose": "useful situation example",
    "pt": "Tem uma chave de fendas?",
    "en": "Do you have a screwdriver?",
    "zhHans": "您有螺丝刀吗？",
    "zhHant": "您有螺絲批嗎？"
  },
  {
    "id": "cartao-casa_reparacoes-onde-posso-encontrar-informacoes-sobre-a-chave-de-casa",
    "situacao": "casa_reparacoes",
    "order": 592,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre a chave de casa?",
    "en": "Where can I find information about house key?",
    "zhHans": "我可以在哪里查到有关家门钥匙的信息？",
    "zhHant": "我可以在哪裡查到有關家門鑰匙的資訊？"
  },
  {
    "id": "cartao-casa_reparacoes-pode-dar-me-informacoes-sobre-o-esquentador",
    "situacao": "casa_reparacoes",
    "order": 593,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre o esquentador?",
    "en": "Could you give me information about gas water heater?",
    "zhHans": "可以告诉我有关燃气热水器的信息吗？",
    "zhHant": "可以告訴我有關燃氣熱水器的資訊嗎？"
  },
  {
    "id": "cartao-casa_reparacoes-pode-dar-me-informacoes-sobre-o-canalizador",
    "situacao": "casa_reparacoes",
    "order": 594,
    "purpose": "useful situation example",
    "pt": "Preciso de chamar um canalizador.",
    "en": "I need to call a plumber.",
    "zhHans": "我需要叫水管工。",
    "zhHant": "我需要找水喉匠。"
  },
  {
    "id": "cartao-casa_reparacoes-pode-dar-me-informacoes-sobre-o-condominio",
    "situacao": "casa_reparacoes",
    "order": 595,
    "purpose": "useful situation example",
    "pt": "A reparação é responsabilidade do condomínio?",
    "en": "Is the building management responsible for the repair?",
    "zhHans": "维修由物业负责吗？",
    "zhHant": "維修由大廈管理處負責嗎？"
  },
  {
    "id": "cartao-casa_reparacoes-pode-dar-me-informacoes-sobre-o-martelo",
    "situacao": "casa_reparacoes",
    "order": 596,
    "purpose": "useful situation example",
    "pt": "Preciso de um martelo.",
    "en": "I need a hammer.",
    "zhHans": "我需要一把锤子。",
    "zhHant": "我需要一把鎚仔。"
  },
  {
    "id": "cartao-casa_reparacoes-preciso-de-esclarecer-uma-duvida-sobre-o-contrato-de-arrendamento",
    "situacao": "casa_reparacoes",
    "order": 597,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre o contrato de arrendamento.",
    "en": "I have a question about rental contract.",
    "zhHans": "我需要咨询有关租赁合同的问题。",
    "zhHant": "我需要查詢有關租賃合同的問題。"
  },
  {
    "id": "cartao-casa_reparacoes-preciso-de-esclarecer-uma-duvida-sobre-a-remodelacao",
    "situacao": "casa_reparacoes",
    "order": 598,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre a remodelação.",
    "en": "I would like to know more about renovation.",
    "zhHans": "我想进一步了解翻新装修。",
    "zhHant": "我想進一步了解翻新裝修。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-casa_reparacoes-preciso-de-esclarecer-uma-duvida-sobre-a-caldeira",
    "situacao": "casa_reparacoes",
    "order": 599,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre a caldeira?",
    "en": "Who can advise me about boiler?",
    "zhHans": "关于锅炉，谁可以给我指引？",
    "zhHant": "關於鍋爐，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-casa_reparacoes-com-quem-devo-falar-sobre-o-eletrodomestico",
    "situacao": "casa_reparacoes",
    "order": 600,
    "purpose": "useful situation example",
    "pt": "Este eletrodoméstico avariou-se.",
    "en": "This appliance has broken down.",
    "zhHans": "这台家电坏了。",
    "zhHant": "這部家電壞了。"
  },
  {
    "id": "cartao-casa_reparacoes-preciso-de-esclarecer-uma-duvida-sobre-a-humidade",
    "situacao": "casa_reparacoes",
    "order": 601,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com a humidade.",
    "en": "I have a question related to damp.",
    "zhHans": "我有一个与潮湿有关的问题。",
    "zhHant": "我有一個與潮濕有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-casa_reparacoes-com-quem-devo-falar-sobre-o-orcamento",
    "situacao": "casa_reparacoes",
    "order": 602,
    "purpose": "useful situation example",
    "pt": "Com quem devo falar sobre o orçamento?",
    "en": "Who should I speak to about quote / estimate?",
    "zhHans": "关于報价，我应该和谁联系？",
    "zhHant": "關於報價，我應該聯絡誰？"
  },
  {
    "id": "cartao-casa_reparacoes-com-quem-devo-falar-sobre-a-serra",
    "situacao": "casa_reparacoes",
    "order": 603,
    "purpose": "useful situation example",
    "pt": "Tem uma serra?",
    "en": "Do you have a saw?",
    "zhHans": "您有锯子吗？",
    "zhHant": "您有鋸嗎？"
  },
  {
    "id": "cartao-casa_reparacoes-queria-informacoes-sobre-o-aquecimento",
    "situacao": "casa_reparacoes",
    "order": 604,
    "purpose": "useful situation example",
    "pt": "Queria informações sobre o aquecimento.",
    "en": "I would like information about heating.",
    "zhHans": "我想了解暖气。",
    "zhHant": "我想了解暖氣。"
  },
  {
    "id": "cartao-casa_reparacoes-queria-informacoes-sobre-o-eletricista",
    "situacao": "casa_reparacoes",
    "order": 605,
    "purpose": "useful situation example",
    "pt": "Preciso de chamar um eletricista.",
    "en": "I need to call an electrician.",
    "zhHans": "我需要叫电工。",
    "zhHant": "我需要找電工。"
  },
  {
    "id": "cartao-agua_luz_gas-pode-dar-me-informacoes-sobre-o-titular-da-conta",
    "situacao": "agua_luz_gas",
    "order": 606,
    "purpose": "useful situation example",
    "pt": "Quero alterar o titular da conta.",
    "en": "I want to change the account holder.",
    "zhHans": "我想更改账户持有人。",
    "zhHant": "我想更改帳戶持有人。"
  },
  {
    "id": "cartao-agua_luz_gas-onde-posso-encontrar-informacoes-sobre-o-iban",
    "situacao": "agua_luz_gas",
    "order": 607,
    "purpose": "useful situation example",
    "pt": "Onde posso atualizar o IBAN?",
    "en": "Where can I update the IBAN?",
    "zhHans": "我可以在哪里更新 IBAN？",
    "zhHant": "我可以在哪裡更新 IBAN？"
  },
  {
    "id": "cartao-agua_luz_gas-pode-dar-me-informacoes-sobre-o-esquentador",
    "situacao": "agua_luz_gas",
    "order": 608,
    "purpose": "useful situation example",
    "pt": "O esquentador não acende.",
    "en": "The water heater will not light.",
    "zhHans": "热水器点不着。",
    "zhHant": "熱水爐點不著。"
  },
  {
    "id": "cartao-agua_luz_gas-preciso-de-esclarecer-uma-duvida-sobre-o-debito-direto",
    "situacao": "agua_luz_gas",
    "order": 609,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre o débito direto.",
    "en": "I have a question about direct debit.",
    "zhHans": "我需要咨询有关自动扣款的问题。",
    "zhHant": "我需要查詢有關自動扣款的問題。"
  },
  {
    "id": "cartao-agua_luz_gas-com-quem-devo-falar-sobre-as-guias-de-pagamento",
    "situacao": "agua_luz_gas",
    "order": 610,
    "purpose": "useful situation example",
    "pt": "Onde posso obter as guias de pagamento?",
    "en": "Where can I get the payment slips?",
    "zhHans": "我可以在哪里取得缴费单？",
    "zhHant": "我可以在哪裡取得繳費單？"
  },
  {
    "id": "cartao-agua_luz_gas-queria-informacoes-sobre-a-transferencia-bancaria",
    "situacao": "agua_luz_gas",
    "order": 611,
    "purpose": "useful situation example",
    "pt": "Posso pagar por transferência bancária?",
    "en": "Can I pay by bank transfer?",
    "zhHans": "可以银行转账付款吗？",
    "zhHant": "可以銀行轉帳付款嗎？"
  },
  {
    "id": "cartao-agua_luz_gas-preciso-de-esclarecer-uma-duvida-sobre-a-caldeira",
    "situacao": "agua_luz_gas",
    "order": 612,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre a caldeira.",
    "en": "I would like to know more about boiler.",
    "zhHans": "我想进一步了解锅炉。",
    "zhHant": "我想進一步了解鍋爐。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-agua_luz_gas-com-quem-devo-falar-sobre-a-comissao",
    "situacao": "agua_luz_gas",
    "order": 613,
    "purpose": "useful situation example",
    "pt": "Esta forma de pagamento tem comissão?",
    "en": "Is there a fee for this payment method?",
    "zhHans": "这种付款方式收手续费吗？",
    "zhHant": "這種付款方式收手續費嗎？"
  },
  {
    "id": "cartao-agua_luz_gas-queria-informacoes-sobre-o-comprovativo",
    "situacao": "agua_luz_gas",
    "order": 614,
    "purpose": "useful situation example",
    "pt": "Preciso de um comprovativo de pagamento.",
    "en": "I need proof of payment.",
    "zhHans": "我需要付款凭证。",
    "zhHant": "我需要付款證明。"
  },
  {
    "id": "cartao-agua_luz_gas-pode-dar-me-uma-fatura",
    "situacao": "agua_luz_gas",
    "order": 615,
    "purpose": "useful situation example",
    "pt": "Pode dar-me uma fatura?",
    "en": "Can you give me an invoice?",
    "zhHans": "可以给我一张发票吗？",
    "zhHant": "可以給我一張發票嗎？"
  },
  {
    "id": "cartao-agua_luz_gas-queria-informacoes-sobre-o-aquecimento",
    "situacao": "agua_luz_gas",
    "order": 616,
    "purpose": "useful situation example",
    "pt": "O aquecimento não está a funcionar.",
    "en": "The heating is not working.",
    "zhHans": "暖气坏了。",
    "zhHant": "暖氣壞了。"
  },
  {
    "id": "cartao-agua_luz_gas-queria-pagar-em-prestacoes-por-favor",
    "situacao": "agua_luz_gas",
    "order": 617,
    "purpose": "useful situation example",
    "pt": "Queria pagar em prestações, por favor.",
    "en": "I would like to pay in instalments, please.",
    "zhHans": "我想分期缴納。",
    "zhHant": "我想分期繳納。"
  },
  {
    "id": "cartao-agua_luz_gas-queria-reportar-uma-avaria-por-favor",
    "situacao": "agua_luz_gas",
    "order": 618,
    "purpose": "useful situation example",
    "pt": "Queria reportar uma avaria, por favor.",
    "en": "I would like to report a fault, please.",
    "zhHans": "我想報修。",
    "zhHant": "我想報修。"
  },
  {
    "id": "cartao-agua_luz_gas-pode-comunicar-a-leitura-por-telefone",
    "situacao": "agua_luz_gas",
    "order": 619,
    "purpose": "useful situation example",
    "pt": "Pode comunicar a leitura por telefone.",
    "en": "You can submit the reading by phone.",
    "zhHans": "您可以通过电话提交抄表数值。",
    "zhHant": "您可以透過電話提交抄錶數值。"
  },
  {
    "id": "cartao-agua_luz_gas-queria-pagar-uma-taxa-por-favor",
    "situacao": "agua_luz_gas",
    "order": 620,
    "purpose": "useful situation example",
    "pt": "Queria pagar uma taxa, por favor.",
    "en": "I would like to pay a fee, please.",
    "zhHans": "我想缴納费用。",
    "zhHant": "我想繳納費用。"
  },
  {
    "id": "cartao-telemovel_internet-pode-explicar-me-o-que-devo-fazer-para-avisar-com-antecedencia",
    "situacao": "telemovel_internet",
    "order": 621,
    "purpose": "useful situation example",
    "pt": "Com quanto tempo de antecedência tenho de avisar?",
    "en": "How much notice do I need to give?",
    "zhHans": "我需要提前多久通知？",
    "zhHant": "我需要提前多久通知？"
  },
  {
    "id": "cartao-telemovel_internet-qual-e-o-seu-numero-de-telefone",
    "situacao": "telemovel_internet",
    "order": 622,
    "purpose": "useful situation example",
    "pt": "Quero manter o meu número de telefone.",
    "en": "I want to keep my phone number.",
    "zhHans": "我想保留现有的手机号码。",
    "zhHant": "我想保留現有的手提電話號碼。"
  },
  {
    "id": "cartao-telemovel_internet-qual-e-a-palavra-passe-do-wi-fi",
    "situacao": "telemovel_internet",
    "order": 623,
    "purpose": "useful situation example",
    "pt": "Qual é a palavra-passe do Wi-Fi?",
    "en": "What is the Wi-Fi password?",
    "zhHans": "Wi-Fi密码是什么？",
    "zhHant": "Wi-Fi密碼是甚麼？"
  },
  {
    "id": "cartao-telemovel_internet-com-quem-devo-falar-sobre-a-senha-de-acesso",
    "situacao": "telemovel_internet",
    "order": 624,
    "purpose": "useful situation example",
    "pt": "Esqueci-me da senha de acesso.",
    "en": "I forgot my login password.",
    "zhHans": "我忘记登录密码了。",
    "zhHant": "我忘記登入密碼了。"
  },
  {
    "id": "cartao-telemovel_internet-preciso-de-ajuda-para-reportar-uma-avaria",
    "situacao": "telemovel_internet",
    "order": 625,
    "purpose": "useful situation example",
    "pt": "Preciso de ajuda para reportar uma avaria.",
    "en": "I need help to report a fault.",
    "zhHans": "我需要协助報修。",
    "zhHant": "我需要協助報修。"
  },
  {
    "id": "cartao-telemovel_internet-preciso-de-um-cartao-sim-portugues",
    "situacao": "telemovel_internet",
    "order": 626,
    "purpose": "useful situation example",
    "pt": "Preciso de um cartão SIM português.",
    "en": "I need a Portuguese SIM card.",
    "zhHans": "我需要一张葡萄牙SIM卡。",
    "zhHant": "我需要一張葡萄牙SIM卡。"
  },
  {
    "id": "cartao-telemovel_internet-e-possivel-remarcar-aqui",
    "situacao": "telemovel_internet",
    "order": 627,
    "purpose": "useful situation example",
    "pt": "Posso remarcar a instalação?",
    "en": "Can I reschedule the installation?",
    "zhHans": "我可以改约安装时间吗？",
    "zhHant": "我可以更改安裝預約嗎？"
  },
  {
    "id": "cartao-telemovel_internet-o-periodo-de-fidelizacao-e-de-vinte-e-quatro-meses",
    "situacao": "telemovel_internet",
    "order": 628,
    "purpose": "useful situation example",
    "pt": "O período de fidelização é de vinte e quatro meses.",
    "en": "The lock-in period is twenty-four months.",
    "zhHans": "合约期为二十四个月。",
    "zhHant": "綁約期為二十四個月。"
  },
  {
    "id": "cartao-telemovel_internet-a-fibra-ainda-nao-esta-disponivel-nesta-morada",
    "situacao": "telemovel_internet",
    "order": 629,
    "purpose": "useful situation example",
    "pt": "A fibra ainda não está disponível nesta morada.",
    "en": "Fibre is not yet available at this address.",
    "zhHans": "这个地址尚未开通光纤。",
    "zhHant": "這個地址尚未開通光纖。"
  },
  {
    "id": "cartao-telemovel_internet-este-tarifario-inclui-chamadas-e-dados-moveis",
    "situacao": "telemovel_internet",
    "order": 630,
    "purpose": "useful situation example",
    "pt": "Este tarifário inclui chamadas e dados móveis.",
    "en": "This plan includes calls and mobile data.",
    "zhHans": "这个套餐包括通话和移动数据。",
    "zhHant": "這個方案包括通話和行動數據。"
  },
  {
    "id": "cartao-telemovel_internet-os-dados-moveis-acabaram-antes-do-fim-do-mes",
    "situacao": "telemovel_internet",
    "order": 631,
    "purpose": "useful situation example",
    "pt": "Os dados móveis acabaram antes do fim do mês.",
    "en": "My mobile data ran out before the end of the month.",
    "zhHans": "我的移动数据月底前就用完了。",
    "zhHant": "我的行動數據月底前就用完了。"
  },
  {
    "id": "cartao-telemovel_internet-a-instalacao-ficou-marcada-para-sexta-feira",
    "situacao": "telemovel_internet",
    "order": 632,
    "purpose": "useful situation example",
    "pt": "A instalação ficou marcada para sexta-feira.",
    "en": "The installation was booked for Friday.",
    "zhHans": "安装预约在星期五。",
    "zhHant": "安裝預約在星期五。"
  },
  {
    "id": "cartao-telemovel_internet-pedi-a-portabilidade-do-meu-numero-antigo",
    "situacao": "telemovel_internet",
    "order": 633,
    "purpose": "useful situation example",
    "pt": "Pedi a portabilidade do meu número antigo.",
    "en": "I requested to port my old number.",
    "zhHans": "我申请保留原来的号码转网。",
    "zhHant": "我申請保留原來的號碼轉台。"
  },
  {
    "id": "cartao-telemovel_internet-prefiro-um-cartao-pre-pago-sem-contrato",
    "situacao": "telemovel_internet",
    "order": 634,
    "purpose": "useful situation example",
    "pt": "Prefiro um cartão pré-pago sem contrato.",
    "en": "I prefer a prepaid card without a contract.",
    "zhHans": "我想要无需合同的预付费卡。",
    "zhHant": "我想要無需合約的預付費卡。"
  },
  {
    "id": "cartao-telemovel_internet-reinicie-o-router-e-espere-dois-minutos",
    "situacao": "telemovel_internet",
    "order": 635,
    "purpose": "useful situation example",
    "pt": "Reinicie o router e espere dois minutos.",
    "en": "Restart the router and wait two minutes.",
    "zhHans": "请重启路由器并等待两分钟。",
    "zhHant": "請重啟路由器並等待兩分鐘。"
  },
  {
    "id": "cartao-trocas_devolucoes-posso-experimentar-estas-calcas",
    "situacao": "trocas_devolucoes",
    "order": 636,
    "purpose": "useful situation example",
    "pt": "Posso experimentar estas calças?",
    "en": "May I try on these trousers?",
    "zhHans": "我可以试穿这条裤子吗？",
    "zhHant": "我可以試穿這條褲子嗎？"
  },
  {
    "id": "cartao-trocas_devolucoes-pode-devolver-o-artigo-no-prazo-de-trinta-dias",
    "situacao": "trocas_devolucoes",
    "order": 637,
    "purpose": "useful situation example",
    "pt": "Pode devolver o artigo no prazo de trinta dias.",
    "en": "You can return the item within thirty days.",
    "zhHans": "您可以在三十天内退货。",
    "zhHant": "您可以在三十天內退貨。"
  },
  {
    "id": "cartao-trocas_devolucoes-queria-trocar-este-artigo-por-outro-tamanho",
    "situacao": "trocas_devolucoes",
    "order": 638,
    "purpose": "useful situation example",
    "pt": "Queria trocar este artigo por outro tamanho.",
    "en": "I'd like to exchange this item for another size.",
    "zhHans": "我想把这件商品换成另一个尺码。",
    "zhHant": "我想把這件商品換成另一個尺碼。"
  },
  {
    "id": "cartao-trocas_devolucoes-com-quem-devo-falar-sobre-o-reembolso",
    "situacao": "trocas_devolucoes",
    "order": 639,
    "purpose": "useful situation example",
    "pt": "Quando recebo o reembolso?",
    "en": "When will I receive the refund?",
    "zhHans": "我什么时候能收到退款？",
    "zhHant": "我什麼時候能收到退款？"
  },
  {
    "id": "cartao-trocas_devolucoes-nao-retire-a-etiqueta-antes-de-experimentar",
    "situacao": "trocas_devolucoes",
    "order": 640,
    "purpose": "useful situation example",
    "pt": "Não retire a etiqueta antes de experimentar.",
    "en": "Do not remove the tag before trying it on.",
    "zhHans": "试穿前请勿撕下标签。",
    "zhHant": "試穿前請勿撕下標籤。"
  },
  {
    "id": "cartao-trocas_devolucoes-tem-este-casaco-no-meu-tamanho",
    "situacao": "trocas_devolucoes",
    "order": 641,
    "purpose": "useful situation example",
    "pt": "Tem este casaco no meu tamanho?",
    "en": "Do you have this jacket in my size?",
    "zhHans": "这件外套有我的尺码吗？",
    "zhHant": "這件外套有我的尺碼嗎？"
  },
  {
    "id": "cartao-trocas_devolucoes-a-quantia-deve-ser-entregue-no-prazo-de-oito-dias",
    "situacao": "trocas_devolucoes",
    "order": 642,
    "purpose": "useful situation example",
    "pt": "O reembolso demora quantos dias?",
    "en": "How many days will the refund take?",
    "zhHans": "退款需要多少天？",
    "zhHant": "退款需要多少天？"
  },
  {
    "id": "cartao-trocas_devolucoes-sem-talao-so-podemos-emitir-um-vale-de-troca",
    "situacao": "trocas_devolucoes",
    "order": 643,
    "purpose": "useful situation example",
    "pt": "Sem talão, só podemos emitir um vale de troca.",
    "en": "Without a receipt, we can only issue an exchange voucher.",
    "zhHans": "没有收据只能开换货券。",
    "zhHant": "沒有收據只能開換貨券。"
  },
  {
    "id": "cartao-trocas_devolucoes-a-deco-tem-recebido-queixas-de-consumidores",
    "situacao": "trocas_devolucoes",
    "order": 644,
    "purpose": "useful situation example",
    "pt": "Onde posso apresentar uma reclamação?",
    "en": "Where can I make a complaint?",
    "zhHans": "我可以在哪里投诉？",
    "zhHant": "我可以在哪裡投訴？"
  },
  {
    "id": "cartao-trocas_devolucoes-entreguei-a-roupa-no-vosso-estabelecimento",
    "situacao": "trocas_devolucoes",
    "order": 645,
    "purpose": "useful situation example",
    "pt": "Comprei este artigo nesta loja.",
    "en": "I bought this item in this shop.",
    "zhHans": "这件商品是在这家店买的。",
    "zhHant": "這件貨品是在這間店買的。"
  },
  {
    "id": "cartao-trocas_devolucoes-este-aparelho-tem-dois-anos-de-garantia",
    "situacao": "trocas_devolucoes",
    "order": 646,
    "purpose": "useful situation example",
    "pt": "Este aparelho tem dois anos de garantia.",
    "en": "This appliance has a two-year warranty.",
    "zhHans": "这台设备有两年保修。",
    "zhHant": "這台設備有兩年保養。"
  },
  {
    "id": "cartao-trocas_devolucoes-a-empresa-e-responsavel-pelos-estragos",
    "situacao": "trocas_devolucoes",
    "order": 647,
    "purpose": "useful situation example",
    "pt": "A empresa é responsável pelos estragos.",
    "en": "The company is responsible for the damage.",
    "zhHans": "该公司应对损坏负责。",
    "zhHant": "該公司應對損壞負責。"
  },
  {
    "id": "cartao-trocas_devolucoes-os-provadores-ficam-ao-fundo-da-loja",
    "situacao": "trocas_devolucoes",
    "order": 648,
    "purpose": "useful situation example",
    "pt": "Os provadores ficam ao fundo da loja.",
    "en": "The fitting rooms are at the back of the shop.",
    "zhHans": "试衣间在商店里面。",
    "zhHant": "試身室在店內後方。"
  },
  {
    "id": "cartao-trocas_devolucoes-a-reclamacao-e-por-roupa-estragada",
    "situacao": "trocas_devolucoes",
    "order": 649,
    "purpose": "useful situation example",
    "pt": "A reclamação é por roupa estragada.",
    "en": "The complaint is about damaged clothing.",
    "zhHans": "投诉是因为衣物损坏。",
    "zhHant": "投訴是因為衣物損壞。"
  },
  {
    "id": "cartao-trocas_devolucoes-o-vestido-fica-um-pouco-apertado",
    "situacao": "trocas_devolucoes",
    "order": 650,
    "purpose": "useful situation example",
    "pt": "O vestido fica um pouco apertado.",
    "en": "The dress is a little tight.",
    "zhHans": "这条裙子有点紧。",
    "zhHant": "這條裙子有點緊。"
  },
  {
    "id": "cartao-policia_documentos-pode-dar-uma-descricao-da-mochila",
    "situacao": "policia_documentos",
    "order": 651,
    "purpose": "useful situation example",
    "pt": "Pode dar uma descrição da mochila?",
    "en": "Can you describe the backpack?",
    "zhHans": "您可以描述一下背包吗？",
    "zhHant": "您可以描述一下背包嗎？"
  },
  {
    "id": "cartao-policia_documentos-preciso-de-autorizacao-para-consulta-do-registo-criminal",
    "situacao": "policia_documentos",
    "order": 652,
    "purpose": "useful situation example",
    "pt": "Preciso de substituir os documentos roubados.",
    "en": "I need to replace the stolen documents.",
    "zhHans": "我需要补办被盗的证件。",
    "zhHant": "我需要補領被盜的證件。"
  },
  {
    "id": "cartao-policia_documentos-com-quem-devo-falar-sobre-o-comprovativo",
    "situacao": "policia_documentos",
    "order": 653,
    "purpose": "useful situation example",
    "pt": "Este é o comprovativo da compra.",
    "en": "This is the proof of purchase.",
    "zhHans": "这是购买凭证。",
    "zhHant": "這是購買證明。"
  },
  {
    "id": "cartao-policia_documentos-preciso-de-uma-copia-do-auto-da-ocorrencia",
    "situacao": "policia_documentos",
    "order": 654,
    "purpose": "useful situation example",
    "pt": "Pode dar-me uma cópia do auto da ocorrência?",
    "en": "Could you give me a copy of the incident report?",
    "zhHans": "您能给我一份事件报告副本吗？",
    "zhHant": "您能給我一份事件報告副本嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-policia_documentos-quero-apresentar-uma-denuncia-por-furto",
    "situacao": "policia_documentos",
    "order": 655,
    "purpose": "useful situation example",
    "pt": "Quero apresentar uma denúncia por furto.",
    "en": "I want to file a report for theft.",
    "zhHans": "我要报案，物品被盗。",
    "zhHant": "我要報案，物品被盜。"
  },
  {
    "id": "cartao-policia_documentos-com-quem-devo-falar-sobre-o-112",
    "situacao": "policia_documentos",
    "order": 656,
    "purpose": "useful situation example",
    "pt": "É uma emergência. Vou ligar para o 112.",
    "en": "It is an emergency. I am going to call 112.",
    "zhHans": "这是紧急情况，我要拨打 112。",
    "zhHant": "這是緊急情況，我要致電 112。"
  },
  {
    "id": "cartao-policia_documentos-queria-bloquear-o-cartao-por-favor",
    "situacao": "policia_documentos",
    "order": 657,
    "purpose": "useful situation example",
    "pt": "Queria bloquear o cartão, por favor.",
    "en": "I would like to block the card, please.",
    "zhHans": "我想挂失／冻结银行卡。",
    "zhHant": "我想掛失／凍結銀行卡。"
  },
  {
    "id": "cartao-policia_documentos-nao-consegui-ver-a-cara-do-suspeito",
    "situacao": "policia_documentos",
    "order": 658,
    "purpose": "useful situation example",
    "pt": "Não consegui ver a cara do suspeito.",
    "en": "I could not see the suspect's face.",
    "zhHans": "我没看清嫌疑人的脸。",
    "zhHant": "我沒有看清疑犯的臉。"
  },
  {
    "id": "cartao-policia_documentos-alguem-sabe-onde-fica-o-acm",
    "situacao": "policia_documentos",
    "order": 659,
    "purpose": "useful situation example",
    "pt": "Onde ficam os perdidos e achados?",
    "en": "Where is lost and found?",
    "zhHans": "失物招领处在哪里？",
    "zhHant": "失物認領處在哪裡？"
  },
  {
    "id": "cartao-policia_documentos-nao-conhecemos-o-destinatario",
    "situacao": "policia_documentos",
    "order": 660,
    "purpose": "useful situation example",
    "pt": "Não conheço o suspeito.",
    "en": "I do not know the suspect.",
    "zhHans": "我不认识嫌疑人。",
    "zhHant": "我不認識疑犯。"
  },
  {
    "id": "cartao-policia_documentos-a-deco-tem-recebido-queixas-de-consumidores",
    "situacao": "policia_documentos",
    "order": 661,
    "purpose": "useful situation example",
    "pt": "Quero denunciar uma burla.",
    "en": "I want to report a scam.",
    "zhHans": "我要举报诈骗。",
    "zhHant": "我要舉報騙案。"
  },
  {
    "id": "cartao-policia_documentos-levaram-o-meu-documento-de-identificacao",
    "situacao": "policia_documentos",
    "order": 662,
    "purpose": "useful situation example",
    "pt": "Levaram o meu documento de identificação.",
    "en": "My identity document was taken.",
    "zhHans": "我的身份证件被拿走了。",
    "zhHant": "我的身份證明文件被取走了。"
  },
  {
    "id": "cartao-policia_documentos-pergunte-primeiro-nos-perdidos-e-achados",
    "situacao": "policia_documentos",
    "order": 663,
    "purpose": "useful situation example",
    "pt": "Pergunte primeiro nos perdidos e achados.",
    "en": "Ask at lost and found first.",
    "zhHans": "请先到失物招领处询问。",
    "zhHant": "請先到失物認領處查詢。"
  },
  {
    "id": "cartao-policia_documentos-liguei-ao-banco-para-bloquear-os-cartoes",
    "situacao": "policia_documentos",
    "order": 664,
    "purpose": "useful situation example",
    "pt": "Liguei ao banco para bloquear os cartões.",
    "en": "I called the bank to block the cards.",
    "zhHans": "我给银行打电话冻结银行卡。",
    "zhHant": "我致電銀行停用銀行卡。"
  },
  {
    "id": "cartao-policia_documentos-o-112-e-o-numero-europeu-de-emergencia",
    "situacao": "policia_documentos",
    "order": 665,
    "purpose": "useful situation example",
    "pt": "O 112 é o Número Europeu de Emergência.",
    "en": "112 is the European Emergency Number.",
    "zhHans": "112 是欧洲紧急电话号码。",
    "zhHant": "112 是歐洲緊急電話號碼。"
  },
  {
    "id": "cartao-iefp-onde-posso-encontrar-informacoes-sobre-a-declaracao-da-entidade-empregadora",
    "situacao": "iefp",
    "order": 666,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre a declaração da entidade empregadora?",
    "en": "Where can I find information about employer's declaration (of dismissal)?",
    "zhHans": "我可以在哪里查到有关雇主解雇声明的信息？",
    "zhHant": "我可以在哪裡查到有關僱主解僱聲明的資訊？"
  },
  {
    "id": "cartao-iefp-pode-dar-me-informacoes-sobre-o-curso-de-portugues-para-estrangeiros",
    "situacao": "iefp",
    "order": 667,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre o curso de português para estrangeiros?",
    "en": "Could you give me information about Portuguese course for foreigners?",
    "zhHans": "可以告诉我有关对外葡语课程的信息吗？",
    "zhHant": "可以告訴我有關對外葡語課程的資訊嗎？"
  },
  {
    "id": "cartao-iefp-onde-posso-encontrar-informacoes-sobre-a-entrevista-de-emprego",
    "situacao": "iefp",
    "order": 668,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre a entrevista de emprego.",
    "en": "I would like to know more about job interview.",
    "zhHans": "我想进一步了解求职面试。",
    "zhHant": "我想進一步了解求職面試。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-iefp-onde-posso-encontrar-informacoes-sobre-o-recibo-de-vencimento",
    "situacao": "iefp",
    "order": 669,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre o recibo de vencimento?",
    "en": "Who can advise me about payslip?",
    "zhHans": "关于工资单，谁可以给我指引？",
    "zhHant": "關於工資單，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-iefp-pode-dar-me-informacoes-sobre-o-periodo-experimental",
    "situacao": "iefp",
    "order": 670,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com o período experimental.",
    "en": "I have a question related to probation period.",
    "zhHans": "我有一个与试用期有关的问题。",
    "zhHant": "我有一個與試用期有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-iefp-pode-dar-me-informacoes-sobre-a-rescisao-do-contrato",
    "situacao": "iefp",
    "order": 671,
    "purpose": "useful situation example",
    "pt": "Consegue ajudar-me com uma dúvida sobre a rescisão do contrato?",
    "en": "Can you help me with a question about contract termination?",
    "zhHans": "您能帮我解答一个有关解除合同的问题吗？",
    "zhHant": "您能幫我解答一個有關解除合同的問題嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-iefp-pode-dar-me-informacoes-sobre-o-gestor-pessoal",
    "situacao": "iefp",
    "order": 672,
    "purpose": "useful situation example",
    "pt": "A quem posso pedir esclarecimentos sobre o gestor pessoal?",
    "en": "Who can I ask for clarification about personal case officer?",
    "zhHans": "关于个人专员，我可以向谁咨询？",
    "zhHant": "關於個人專員，我可以向誰查詢？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-iefp-preciso-de-esclarecer-uma-duvida-sobre-a-agencia-de-trabalho-temporario",
    "situacao": "iefp",
    "order": 673,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre a agência de trabalho temporário.",
    "en": "I have a question about temp agency.",
    "zhHans": "我需要咨询有关劳务派遣公司的问题。",
    "zhHant": "我需要查詢有關勞務派遣公司的問題。"
  },
  {
    "id": "cartao-iefp-pode-dar-me-informacoes-sobre-o-sindicato",
    "situacao": "iefp",
    "order": 674,
    "purpose": "useful situation example",
    "pt": "Pode explicar-me melhor o que preciso de saber sobre o sindicato?",
    "en": "Could you explain what I need to know about trade union?",
    "zhHans": "您能说明我需要了解工会的哪些信息吗？",
    "zhHant": "您能說明我需要了解工會的哪些資訊嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-trabalho_hotelaria-pode-explicar-me-o-que-devo-fazer-para-guardar-a-bagagem",
    "situacao": "trabalho_hotelaria",
    "order": 675,
    "purpose": "useful situation example",
    "pt": "Pode explicar-me o que devo fazer para guardar a bagagem?",
    "en": "Could you explain what I need to do to store luggage?",
    "zhHans": "可以说明我要怎样寄存行李吗？",
    "zhHant": "可以說明我要怎樣寄存行李嗎？"
  },
  {
    "id": "cartao-trabalho_hotelaria-onde-posso-encontrar-informacoes-sobre-a-folga",
    "situacao": "trabalho_hotelaria",
    "order": 676,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre a folga?",
    "en": "Where can I find information about day off?",
    "zhHans": "我可以在哪里查到有关休息日的信息？",
    "zhHant": "我可以在哪裡查到有關休息日的資訊？"
  },
  {
    "id": "cartao-trabalho_hotelaria-onde-posso-encontrar-o-carrinho-de-limpeza",
    "situacao": "trabalho_hotelaria",
    "order": 677,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar o carrinho de limpeza?",
    "en": "Where can I find housekeeping cart?",
    "zhHans": "清洁工作车在哪里？",
    "zhHant": "清潔工作車在哪裡？"
  },
  {
    "id": "cartao-trabalho_hotelaria-pode-dar-me-informacoes-sobre-a-reclamacao",
    "situacao": "trabalho_hotelaria",
    "order": 678,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre a reclamação?",
    "en": "Could you give me information about complaint?",
    "zhHans": "可以告诉我有关投诉的信息吗？",
    "zhHant": "可以告訴我有關投訴的資訊嗎？"
  },
  {
    "id": "cartao-trabalho_hotelaria-onde-posso-encontrar-o-elevador-de-servico",
    "situacao": "trabalho_hotelaria",
    "order": 679,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar o elevador de serviço?",
    "en": "Where can I find service lift?",
    "zhHans": "员工电梯在哪里？",
    "zhHant": "員工電梯在哪裡？"
  },
  {
    "id": "cartao-trabalho_hotelaria-onde-posso-encontrar-o-rececionista",
    "situacao": "trabalho_hotelaria",
    "order": 680,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar o rececionista?",
    "en": "Where can I find receptionist?",
    "zhHans": "前台接待员在哪里？",
    "zhHant": "前台接待員在哪裡？"
  },
  {
    "id": "cartao-trabalho_hotelaria-onde-posso-encontrar-a-governanta",
    "situacao": "trabalho_hotelaria",
    "order": 681,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar a governanta?",
    "en": "Where can I find head housekeeper?",
    "zhHans": "客房部主管在哪里？",
    "zhHant": "客房部主管在哪裡？"
  },
  {
    "id": "cartao-trabalho_hotelaria-onde-posso-encontrar-o-uniforme",
    "situacao": "trabalho_hotelaria",
    "order": 682,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar o uniforme?",
    "en": "Where can I find uniform?",
    "zhHans": "制服在哪里？",
    "zhHant": "制服在哪裡？"
  },
  {
    "id": "cartao-trabalho_hotelaria-preciso-de-esclarecer-uma-duvida-sobre-a-folha-de-tarefas",
    "situacao": "trabalho_hotelaria",
    "order": 683,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre a folha de tarefas.",
    "en": "I have a question about task sheet.",
    "zhHans": "我需要咨询有关工作任务单的问题。",
    "zhHant": "我需要查詢有關工作任務單的問題。"
  },
  {
    "id": "cartao-trabalho_restauracao-onde-posso-encontrar-informacoes-sobre-o-turno-partido",
    "situacao": "trabalho_restauracao",
    "order": 684,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre o turno partido?",
    "en": "Where can I find information about split shift?",
    "zhHans": "我可以在哪里查到有关两头班（分段班）的信息？",
    "zhHant": "我可以在哪裡查到有關兩頭班（分段班）的資訊？"
  },
  {
    "id": "cartao-trabalho_restauracao-onde-posso-encontrar-informacoes-sobre-a-gorjeta",
    "situacao": "trabalho_restauracao",
    "order": 685,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre a gorjeta.",
    "en": "I would like to know more about tip.",
    "zhHans": "我想进一步了解小费。",
    "zhHant": "我想進一步了解小費。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-trabalho_restauracao-onde-posso-encontrar-informacoes-sobre-o-couvert",
    "situacao": "trabalho_restauracao",
    "order": 686,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre o couvert?",
    "en": "Who can advise me about couvert (bread/olives, charged)?",
    "zhHans": "关于餐前小食（收费），谁可以给我指引？",
    "zhHant": "關於餐前小食（收費），誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-trabalho_restauracao-pode-dar-me-informacoes-sobre-o-prato-principal",
    "situacao": "trabalho_restauracao",
    "order": 687,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre o prato principal?",
    "en": "Could you give me information about main course?",
    "zhHans": "可以告诉我有关主菜的信息吗？",
    "zhHant": "可以告訴我有關主菜的資訊嗎？"
  },
  {
    "id": "cartao-trabalho_restauracao-onde-posso-encontrar-o-ajudante-de-cozinha",
    "situacao": "trabalho_restauracao",
    "order": 688,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar o ajudante de cozinha?",
    "en": "Where can I find kitchen assistant?",
    "zhHans": "厨房帮工在哪里？",
    "zhHant": "廚房幫工在哪裡？"
  },
  {
    "id": "cartao-trabalho_restauracao-pode-dar-me-informacoes-sobre-a-comanda",
    "situacao": "trabalho_restauracao",
    "order": 689,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com a comanda.",
    "en": "I have a question related to order slip.",
    "zhHans": "我有一个与点菜单有关的问题。",
    "zhHant": "我有一個與點菜單有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-trabalho_restauracao-onde-posso-encontrar-o-cliente-habitual",
    "situacao": "trabalho_restauracao",
    "order": 690,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar o cliente habitual?",
    "en": "Where can I find regular customer?",
    "zhHans": "熟客在哪里？",
    "zhHant": "熟客在哪裡？"
  },
  {
    "id": "cartao-trabalho_restauracao-preciso-de-esclarecer-uma-duvida-sobre-a-esplanada-cheia",
    "situacao": "trabalho_restauracao",
    "order": 691,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre a esplanada cheia.",
    "en": "I have a question about full terrace.",
    "zhHans": "我需要咨询有关露天座位已满的问题。",
    "zhHant": "我需要查詢有關露天座位已滿的問題。"
  },
  {
    "id": "cartao-trabalho_restauracao-como-posso-lavar-a-loica",
    "situacao": "trabalho_restauracao",
    "order": 692,
    "purpose": "useful situation example",
    "pt": "Como posso lavar a loiça?",
    "en": "How can I wash the dishes?",
    "zhHans": "我该怎样洗碗？",
    "zhHant": "我該怎樣洗碗？"
  },
  {
    "id": "cartao-trabalho_limpezas-onde-posso-encontrar-a-tabua-e-o-ferro-de-engomar",
    "situacao": "trabalho_limpezas",
    "order": 693,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar a tábua e o ferro de engomar?",
    "en": "Where can I find ironing board and iron?",
    "zhHans": "烫衣板和熨斗在哪里？",
    "zhHant": "燙衣板和熨斗在哪裡？"
  },
  {
    "id": "cartao-trabalho_limpezas-onde-posso-encontrar-a-esfregona-e-o-balde",
    "situacao": "trabalho_limpezas",
    "order": 694,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar a esfregona e o balde?",
    "en": "Where can I find mop and bucket?",
    "zhHans": "拖把和水桶在哪里？",
    "zhHant": "拖把和水桶在哪裡？"
  },
  {
    "id": "cartao-trabalho_limpezas-onde-posso-encontrar-o-material-de-limpeza",
    "situacao": "trabalho_limpezas",
    "order": 695,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar o material de limpeza?",
    "en": "Where can I find cleaning supplies?",
    "zhHans": "清洁用品在哪里？",
    "zhHant": "清潔用品在哪裡？"
  },
  {
    "id": "cartao-trabalho_limpezas-onde-posso-encontrar-o-produto-de-limpeza",
    "situacao": "trabalho_limpezas",
    "order": 696,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar o produto de limpeza?",
    "en": "Where can I find cleaning product?",
    "zhHans": "清洁剂在哪里？",
    "zhHant": "清潔劑在哪裡？"
  },
  {
    "id": "cartao-trabalho_limpezas-onde-posso-encontrar-a-chave-de-casa",
    "situacao": "trabalho_limpezas",
    "order": 697,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar a chave de casa?",
    "en": "Where can I find house key?",
    "zhHans": "家门钥匙在哪里？",
    "zhHant": "家門鑰匙在哪裡？"
  },
  {
    "id": "cartao-trabalho_limpezas-onde-posso-encontrar-o-pano-do-po",
    "situacao": "trabalho_limpezas",
    "order": 698,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar o pano do pó?",
    "en": "Where can I find dust cloth?",
    "zhHans": "抹布在哪里？",
    "zhHant": "抹布在哪裡？"
  },
  {
    "id": "cartao-trabalho_limpezas-com-quem-devo-falar-sobre-o-pagamento-por-transferencia",
    "situacao": "trabalho_limpezas",
    "order": 699,
    "purpose": "useful situation example",
    "pt": "Com quem devo falar sobre o pagamento por transferência?",
    "en": "Who should I speak to about payment by bank transfer?",
    "zhHans": "关于转账付款，我应该和谁联系？",
    "zhHant": "關於轉帳付款，我應該聯絡誰？"
  },
  {
    "id": "cartao-trabalho_limpezas-onde-posso-encontrar-a-lixivia",
    "situacao": "trabalho_limpezas",
    "order": 700,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar a lixívia?",
    "en": "Where can I find bleach?",
    "zhHans": "漂白水在哪里？",
    "zhHant": "漂白水在哪裡？"
  },
  {
    "id": "cartao-trabalho_limpezas-preciso-de-esclarecer-uma-duvida-sobre-a-limpeza-a-fundo",
    "situacao": "trabalho_limpezas",
    "order": 701,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre a limpeza a fundo.",
    "en": "I have a question about deep clean.",
    "zhHans": "我需要咨询有关深度清洁的问题。",
    "zhHant": "我需要查詢有關深度清潔的問題。"
  },
  {
    "id": "cartao-trabalho_limpezas-como-posso-estender-a-roupa",
    "situacao": "trabalho_limpezas",
    "order": 702,
    "purpose": "useful situation example",
    "pt": "Como posso estender a roupa?",
    "en": "How can I hang out the laundry?",
    "zhHans": "我该怎样晾衣服？",
    "zhHant": "我該怎樣晾衣服？"
  },
  {
    "id": "cartao-trabalho_construcao-pode-explicar-me-o-que-devo-fazer-para-descarregar-o-material",
    "situacao": "trabalho_construcao",
    "order": 703,
    "purpose": "useful situation example",
    "pt": "Pode explicar-me o que devo fazer para descarregar o material?",
    "en": "Could you explain what I need to do to unload materials?",
    "zhHans": "可以说明我要怎样卸货（材料）吗？",
    "zhHant": "可以說明我要怎樣卸貨（材料）嗎？"
  },
  {
    "id": "cartao-trabalho_construcao-preciso-de-esclarecer-uma-duvida-sobre-o-seguro-de-acidentes-de-trabalho",
    "situacao": "trabalho_construcao",
    "order": 704,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre o seguro de acidentes de trabalho.",
    "en": "I have a question about workplace accident insurance.",
    "zhHans": "我需要咨询有关工伤保险的问题。",
    "zhHant": "我需要查詢有關工傷保險的問題。"
  },
  {
    "id": "cartao-trabalho_construcao-pode-dar-me-informacoes-sobre-o-orcamento",
    "situacao": "trabalho_construcao",
    "order": 705,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre o orçamento?",
    "en": "Could you give me information about quote / estimate?",
    "zhHans": "可以告诉我有关報价的信息吗？",
    "zhHant": "可以告訴我有關報價的資訊嗎？"
  },
  {
    "id": "cartao-trabalho_construcao-onde-posso-encontrar-o-colete-refletor",
    "situacao": "trabalho_construcao",
    "order": 706,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar o colete refletor?",
    "en": "Where can I find hi-vis vest?",
    "zhHans": "反光背心在哪里？",
    "zhHant": "反光背心在哪裡？"
  },
  {
    "id": "cartao-trabalho_construcao-onde-posso-encontrar-a-chave-de-fendas",
    "situacao": "trabalho_construcao",
    "order": 707,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar a chave de fendas?",
    "en": "Where can I find screwdriver?",
    "zhHans": "螺絲刀在哪里？",
    "zhHant": "螺絲刀在哪裡？"
  },
  {
    "id": "cartao-trabalho_construcao-pode-dar-me-informacoes-sobre-a-serra",
    "situacao": "trabalho_construcao",
    "order": 708,
    "purpose": "useful situation example",
    "pt": "Onde está a serra?",
    "en": "Where is the saw?",
    "zhHans": "锯子在哪里？",
    "zhHant": "鋸在哪裡？"
  },
  {
    "id": "cartao-trabalho_construcao-onde-posso-encontrar-o-canalizador",
    "situacao": "trabalho_construcao",
    "order": 709,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar o canalizador?",
    "en": "Where can I find plumber?",
    "zhHans": "水管工在哪里？",
    "zhHant": "水管工在哪裡？"
  },
  {
    "id": "cartao-trabalho_construcao-onde-posso-encontrar-a-betoneira",
    "situacao": "trabalho_construcao",
    "order": 710,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar a betoneira?",
    "en": "Where can I find cement mixer?",
    "zhHans": "搅拌机在哪里？",
    "zhHant": "攪拌機在哪裡？"
  },
  {
    "id": "cartao-trabalho_construcao-onde-posso-encontrar-o-servente",
    "situacao": "trabalho_construcao",
    "order": 711,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar o servente?",
    "en": "Where can I find labourer?",
    "zhHans": "小工（杂工）在哪里？",
    "zhHant": "小工（雜工）在哪裡？"
  },
  {
    "id": "cartao-trabalho_entregas-onde-posso-encontrar-informacoes-sobre-o-pagamento-semanal",
    "situacao": "trabalho_entregas",
    "order": 712,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar informações sobre o pagamento semanal?",
    "en": "Where can I find information about weekly payout?",
    "zhHans": "我可以在哪里查到有关周结（每周结算）的信息？",
    "zhHant": "我可以在哪裡查到有關週結（每週結算）的資訊？"
  },
  {
    "id": "cartao-trabalho_entregas-pode-explicar-me-o-que-devo-fazer-para-ligar-ao-cliente",
    "situacao": "trabalho_entregas",
    "order": 713,
    "purpose": "useful situation example",
    "pt": "Pode explicar-me o que devo fazer para ligar ao cliente?",
    "en": "Could you explain what I need to do to call the customer?",
    "zhHans": "可以说明我要怎样给顾客打电话吗？",
    "zhHant": "可以說明我要怎樣給顧客打電話嗎？"
  },
  {
    "id": "cartao-trabalho_entregas-pode-explicar-me-o-que-devo-fazer-para-estacionar",
    "situacao": "trabalho_entregas",
    "order": 714,
    "purpose": "useful situation example",
    "pt": "Qual é a forma correta de estacionar aqui?",
    "en": "What is the correct way to park here?",
    "zhHans": "在这里应该怎样正确停车？",
    "zhHant": "在這裡應該怎樣正確停車？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-trabalho_entregas-pode-dar-me-informacoes-sobre-o-codigo-da-porta",
    "situacao": "trabalho_entregas",
    "order": 715,
    "purpose": "useful situation example",
    "pt": "Pode dar-me informações sobre o código da porta?",
    "en": "Could you give me information about door/entry code?",
    "zhHans": "可以告诉我有关门禁密码的信息吗？",
    "zhHant": "可以告訴我有關門禁密碼的資訊嗎？"
  },
  {
    "id": "cartao-trabalho_entregas-onde-posso-encontrar-informacoes-sobre-a-demora",
    "situacao": "trabalho_entregas",
    "order": 716,
    "purpose": "useful situation example",
    "pt": "Gostaria de saber mais sobre a demora.",
    "en": "I would like to know more about delay / wait.",
    "zhHans": "我想进一步了解等候／延误。",
    "zhHant": "我想進一步了解等候／延誤。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-trabalho_entregas-pode-dar-me-informacoes-sobre-a-zona-de-entrega",
    "situacao": "trabalho_entregas",
    "order": 717,
    "purpose": "useful situation example",
    "pt": "Quem me pode orientar sobre a zona de entrega?",
    "en": "Who can advise me about delivery zone?",
    "zhHans": "关于配送区域，谁可以给我指引？",
    "zhHant": "關於配送區域，誰可以給我指引？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-trabalho_entregas-pode-dar-me-informacoes-sobre-a-conta-bloqueada",
    "situacao": "trabalho_entregas",
    "order": 718,
    "purpose": "useful situation example",
    "pt": "Tenho uma questão relacionada com a conta bloqueada.",
    "en": "I have a question related to blocked account.",
    "zhHans": "我有一个与账号被封有关的问题。",
    "zhHant": "我有一個與帳號被封有關的問題。",
    "audioMode": "browser"
  },
  {
    "id": "cartao-trabalho_entregas-pode-dar-me-informacoes-sobre-a-entrega",
    "situacao": "trabalho_entregas",
    "order": 719,
    "purpose": "useful situation example",
    "pt": "Consegue ajudar-me com uma dúvida sobre a entrega?",
    "en": "Can you help me with a question about delivery?",
    "zhHans": "您能帮我解答一个有关配送的问题吗？",
    "zhHant": "您能幫我解答一個有關配送的問題嗎？",
    "audioMode": "browser"
  },
  {
    "id": "cartao-trabalho_entregas-onde-posso-encontrar-a-mochila-termica",
    "situacao": "trabalho_entregas",
    "order": 720,
    "purpose": "useful situation example",
    "pt": "Onde posso encontrar a mochila térmica?",
    "en": "Where can I find thermal delivery bag?",
    "zhHans": "保溫配送箱在哪里？",
    "zhHant": "保溫配送箱在哪裡？"
  },
  {
    "id": "cartao-trabalho_entregas-preciso-de-esclarecer-uma-duvida-sobre-a-taxa-de-entrega",
    "situacao": "trabalho_entregas",
    "order": 721,
    "purpose": "useful situation example",
    "pt": "Preciso de esclarecer uma dúvida sobre a taxa de entrega.",
    "en": "I have a question about delivery fee.",
    "zhHans": "我需要咨询有关配送费的问题。",
    "zhHant": "我需要查詢有關配送費的問題。"
  }
];
