import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const situacoesPath = join(root, "src", "data", "situacoes.ts");
const vocabularyPath = join(root, "src", "data", "vocabulary.ts");
let source = readFileSync(situacoesPath, "utf8");

const groups = extract("situacaoGroups");
const labels = extract("situacaoLabels");
const rows = extract("situacaoVocabularyRows");
const dialogues = extract("situacaoDialogueLines");
const cards = extract("situacaoCheatSheetLines");
const manual = JSON.parse(
  readFileSync(vocabularyPath, "utf8").match(/export const vocabulary: VocabularyEntry\[] = ([\s\S]*?) satisfies VocabularyEntry\[];/)?.[1] ?? "[]"
);

const scenarios = [
  { id: "supermercado_mercado", label: "Supermercado e Mercado" },
  { id: "cafe_restaurante", label: "Café e Restaurante" },
  { id: "consultorio_medico", label: "Consultório Médico" },
  { id: "casa_reparacoes", label: "Casa: Avarias e Reparações" },
  { id: "agua_luz_gas", label: "Água, Luz e Gás" },
  { id: "telemovel_internet", label: "Telemóvel e Internet" },
  { id: "trocas_devolucoes", label: "Compras, Trocas e Devoluções" },
  { id: "policia_documentos", label: "Polícia e Documentos Perdidos" }
];

const sharedIds = {
  supermercado_mercado: ["az-0247","az-0134","az-0155","az-0156","az-0157","az-0158","az-0146","az-0147","az-0148","az-0149","az-0150","az-0137","az-0138","az-0139","az-0140","az-0141","az-0142","az-0143","az-0144","az-0145","az-0165","az-0161","az-0162","az-0163","az-0154","az-0260","az-0829","az-0830","az-0169","az-0170"],
  cafe_restaurante: ["az-0159","az-0164","az-0744","az-0745","az-1022","az-1023","az-1024","az-1025","az-1026","az-1027","az-1028","az-1029","az-1030","az-1031","az-1032","az-1033","az-1034","az-0754","az-0746","az-0747","az-0749","az-0751","az-0532","az-0531","az-0151","az-0136","az-0166","az-0231","az-0160","az-0260"],
  consultorio_medico: ["az-0313","az-0340","az-0348","az-0381","az-0382","az-0316","az-0341","az-0342","az-0297","az-0298","az-0299","az-0300","az-0303","az-0307","az-0308","az-0349","az-0344","az-0345","az-0346","az-0284","az-0285","az-0286","az-0292","az-0294","az-0295","az-0296","az-0873","az-0874","az-0877","az-0878"],
  casa_reparacoes: ["az-0967","az-0968","az-0969","az-0970","az-0971","az-0972","az-0973","az-0974","az-0975","az-1011","az-1012","az-1060","az-1061","az-1062","az-1063","az-1064","az-1065","az-1066","az-1067","az-1068","az-1069","az-1070","az-1071","az-1077","az-1052","az-1096","az-0715","az-0643","az-0707","az-0708"],
  agua_luz_gas: ["az-0137","az-0160","az-0162","az-0231","az-0602","az-0606","az-0612","az-0613","az-0626","az-0646","az-0704","az-0713","az-0796","az-0805","az-0811","az-0967","az-0968","az-0969","az-0972","az-1011"],
  telemovel_internet: ["az-0017","az-0018","az-0254","az-0255","az-0460","az-0482","az-0506","az-0509","az-0620","az-0781","az-0972","az-1011","az-1053","az-1054","az-1134"],
  trocas_devolucoes: ["az-0134","az-0197","az-0216","az-0450","az-0511","az-0522","az-0523","az-0525","az-0526","az-0528","az-0529","az-0533","az-0534","az-0535","az-0161"],
  policia_documentos: ["az-0324","az-0323","az-0320","az-0653","az-0552","az-0534","az-0239","az-0240","az-0506","az-0542","az-0553","az-0554","az-0579","az-0704","az-0800"]
};

const newWords = {
  agua_luz_gas: [
    w("o contrato de fornecimento","utility supply contract","公用事业供应合同","公用事業供應合約","O contrato de fornecimento fica em nome da inquilina.","The utility contract is in the tenant's name.","公用事业合同登记在房客名下。","公用事業合約登記在房客名下。"),
    w("o contador","meter","计量表","計量錶","O contador da eletricidade fica no corredor.","The electricity meter is in the corridor.","电表在走廊里。","電錶在走廊裡。"),
    w("a leitura do contador","meter reading","抄表数值","抄錶數值","Enviei a leitura do contador pela aplicação.","I sent the meter reading through the app.","我通过应用程序提交了抄表数值。","我透過應用程式提交了抄錶數值。"),
    w("a potência contratada","contracted power level","合同电力容量","合約電力容量","Esta potência contratada não chega para a casa toda.","This contracted power level is not enough for the whole home.","这个合同电力容量不够全屋使用。","這個合約電力容量不夠全屋使用。"),
    w("a tarifa bi-horária","time-of-use tariff","分时电价","分時電價","A tarifa bi-horária fica mais barata durante a noite.","The time-of-use tariff is cheaper at night.","分时电价在夜间更便宜。","分時電價在夜間更便宜。"),
    w("a falha de eletricidade","power cut","停电","停電","Houve uma falha de eletricidade no prédio.","There was a power cut in the building.","这栋楼停电了。","這棟樓停電了。"),
    w("a fuga de gás","gas leak","燃气泄漏","燃氣洩漏","Se sentir cheiro, feche o gás e comunique a fuga.","If you smell gas, turn it off and report the leak.","闻到气味时要关闭燃气并报告泄漏。","聞到氣味時要關閉燃氣並報告洩漏。"),
    w("mudar o titular","to change the account holder","更改户名","更改戶名","Quero mudar o titular do contrato.","I want to change the account holder on the contract.","我想更改合同户名。","我想更改合約戶名。"),
    w("comunicar a leitura","to submit a meter reading","提交抄表数值","提交抄錶數值","Pode comunicar a leitura por telefone.","You can submit the reading by phone.","您可以通过电话提交抄表数值。","您可以透過電話提交抄錶數值。"),
    w("a data limite de pagamento","payment deadline","付款截止日期","付款截止日期","A data limite de pagamento é dia vinte.","The payment deadline is the twentieth.","付款截止日期是二十日。","付款截止日期是二十日。")
  ],
  telemovel_internet: [
    w("o cartão SIM","SIM card","SIM卡","SIM卡","Preciso de um cartão SIM português.","I need a Portuguese SIM card.","我需要一张葡萄牙SIM卡。","我需要一張葡萄牙SIM卡。"),
    w("o tarifário","mobile plan","手机套餐","手機方案","Este tarifário inclui chamadas e dados móveis.","This plan includes calls and mobile data.","这个套餐包括通话和移动数据。","這個方案包括通話和行動數據。"),
    w("pré-pago","prepaid","预付费的","預付費的","Prefiro um cartão pré-pago sem contrato.","I prefer a prepaid card without a contract.","我想要无需合同的预付费卡。","我想要無需合約的預付費卡。"),
    w("pós-pago","postpaid","后付费的","後付費的","O tarifário pós-pago tem fidelização.","The postpaid plan has a lock-in period.","后付费套餐有合约期。","後付費方案有綁約期。"),
    w("os dados móveis","mobile data","移动数据","行動數據","Os dados móveis acabaram antes do fim do mês.","My mobile data ran out before the end of the month.","我的移动数据月底前就用完了。","我的行動數據月底前就用完了。"),
    w("a rede","network","网络","網絡","A rede está em baixo nesta zona.","The network is down in this area.","这个地区的网络中断了。","這個地區的網絡中斷了。"),
    w("a cobertura","coverage","信号覆盖","訊號覆蓋","Há pouca cobertura dentro de casa.","There is poor coverage inside the house.","屋内信号覆盖很差。","屋內訊號覆蓋很差。"),
    w("o sinal","signal","信号","訊號","O sinal do Wi-Fi não chega ao quarto.","The Wi-Fi signal does not reach the bedroom.","Wi-Fi信号到不了卧室。","Wi-Fi訊號到不了睡房。"),
    w("o router","router","路由器","路由器","Reinicie o router e espere dois minutos.","Restart the router and wait two minutes.","请重启路由器并等待两分钟。","請重啟路由器並等待兩分鐘。"),
    w("a palavra-passe do Wi-Fi","Wi-Fi password","Wi-Fi密码","Wi-Fi密碼","Qual é a palavra-passe do Wi-Fi?","What is the Wi-Fi password?","Wi-Fi密码是什么？","Wi-Fi密碼是甚麼？"),
    w("a fibra","fibre broadband","光纤宽带","光纖寬頻","A fibra ainda não está disponível nesta morada.","Fibre is not yet available at this address.","这个地址尚未开通光纤。","這個地址尚未開通光纖。"),
    w("a instalação","installation","安装","安裝","A instalação ficou marcada para sexta-feira.","The installation was booked for Friday.","安装预约在星期五。","安裝預約在星期五。"),
    w("o técnico","technician","技术人员","技術人員","O técnico liga antes de chegar.","The technician will call before arriving.","技术人员到达前会打电话。","技術人員到達前會打電話。"),
    w("o período de fidelização","lock-in period","合约期","綁約期","O período de fidelização é de vinte e quatro meses.","The lock-in period is twenty-four months.","合约期为二十四个月。","綁約期為二十四個月。"),
    w("a portabilidade do número","number porting","携号转网","攜號轉台","Pedi a portabilidade do meu número antigo.","I requested to port my old number.","我申请保留原来的号码转网。","我申請保留原來的號碼轉台。")
  ],
  trocas_devolucoes: [
    w("o tamanho","size","尺码","尺碼","Tem este casaco no meu tamanho?","Do you have this jacket in my size?","这件外套有我的尺码吗？","這件外套有我的尺碼嗎？"),
    w("o provador","fitting room","试衣间","試身室","Os provadores ficam ao fundo da loja.","The fitting rooms are at the back of the shop.","试衣间在商店里面。","試身室在店內後方。"),
    w("experimentar","to try on","试穿","試穿","Posso experimentar estas calças?","May I try on these trousers?","我可以试穿这条裤子吗？","我可以試穿這條褲子嗎？"),
    w("servir","to fit","合身","合身","Este número não me serve.","This size does not fit me.","这个尺码不合身。","這個尺碼不合身。"),
    w("apertado/a","tight","紧的","緊的","O vestido fica um pouco apertado.","The dress is a little tight.","这条裙子有点紧。","這條裙子有點緊。"),
    w("largo/a","loose","宽松的","寬鬆的","As calças ficam demasiado largas.","The trousers are too loose.","这条裤子太宽松。","這條褲子太寬鬆。"),
    w("trocar um artigo","to exchange an item","换货","換貨","Queria trocar este artigo por outro tamanho.","I'd like to exchange this item for another size.","我想把这件商品换成另一个尺码。","我想把這件商品換成另一個尺碼。"),
    w("devolver um artigo","to return an item","退货","退貨","Pode devolver o artigo no prazo de trinta dias.","You can return the item within thirty days.","您可以在三十天内退货。","您可以在三十天內退貨。"),
    w("o reembolso","refund","退款","退款","O reembolso demora até cinco dias úteis.","The refund takes up to five working days.","退款最多需要五个工作日。","退款最多需要五個工作日。"),
    w("o defeito","defect","瑕疵","瑕疵","O fecho tem um defeito.","The zip has a defect.","拉链有瑕疵。","拉鏈有瑕疵。"),
    w("a garantia","warranty","保修","保養","Este aparelho tem dois anos de garantia.","This appliance has a two-year warranty.","这台设备有两年保修。","這台設備有兩年保養。"),
    w("a etiqueta","label / tag","标签","標籤","Não retire a etiqueta antes de experimentar.","Do not remove the tag before trying it on.","试穿前请勿撕下标签。","試穿前請勿撕下標籤。"),
    w("a promoção","special offer","促销","促銷","A promoção termina no domingo.","The special offer ends on Sunday.","促销活动星期日结束。","促銷活動星期日結束。"),
    w("esgotado/a","sold out","售罄的","售罄的","Esse tamanho está esgotado.","That size is sold out.","那个尺码已经售罄。","那個尺碼已經售罄。"),
    w("o vale de troca","exchange voucher","换货券","換貨券","Sem talão, só podemos emitir um vale de troca.","Without a receipt, we can only issue an exchange voucher.","没有收据只能开换货券。","沒有收據只能開換貨券。")
  ],
  policia_documentos: [
    w("a esquadra","police station","警察局","警署","A esquadra mais próxima fica nesta rua.","The nearest police station is on this street.","最近的警察局在这条街上。","最近的警署在這條街上。"),
    w("a polícia","police","警察","警察","A polícia chegou poucos minutos depois.","The police arrived a few minutes later.","警察几分钟后到达。","警察幾分鐘後到達。"),
    w("apresentar uma denúncia","to file a police report","报案","報案","Quero apresentar uma denúncia por furto.","I want to file a report for theft.","我要报案，物品被盗。","我要報案，物品被盜。"),
    w("a ocorrência","incident","事件记录","事件紀錄","O agente registou a ocorrência.","The officer recorded the incident.","警员记录了这起事件。","警員記錄了這宗事件。"),
    w("o furto","theft","盗窃","盜竊","O furto aconteceu dentro do autocarro.","The theft happened on the bus.","盗窃发生在公交车上。","盜竊發生在巴士上。"),
    w("a carteira","wallet","钱包","銀包","Perdi a carteira com os documentos.","I lost my wallet with my documents.","我丢了装有证件的钱包。","我遺失了裝有證件的銀包。"),
    w("o documento de identificação","identity document","身份证件","身份證明文件","Levaram o meu documento de identificação.","My identity document was taken.","我的身份证件被拿走了。","我的身份證明文件被取走了。"),
    w("os perdidos e achados","lost and found","失物招领处","失物認領處","Pergunte primeiro nos perdidos e achados.","Ask at lost and found first.","请先到失物招领处询问。","請先到失物認領處查詢。"),
    w("a descrição","description","描述","描述","Pode dar uma descrição da mochila?","Can you describe the backpack?","您可以描述一下背包吗？","您可以描述一下背包嗎？"),
    w("a testemunha","witness","目击者","目擊證人","Uma testemunha viu o que aconteceu.","A witness saw what happened.","一名目击者看到了事情经过。","一名目擊證人看到了事情經過。"),
    w("o suspeito","suspect","嫌疑人","疑犯","Não consegui ver a cara do suspeito.","I could not see the suspect's face.","我没看清嫌疑人的脸。","我沒有看清疑犯的臉。"),
    w("o auto da ocorrência","incident report","事件报告","事件報告","Preciso de uma cópia do auto da ocorrência.","I need a copy of the incident report.","我需要一份事件报告副本。","我需要一份事件報告副本。"),
    w("o número da ocorrência","incident reference number","事件编号","事件編號","Guarde o número da ocorrência.","Keep the incident reference number.","请保留事件编号。","請保留事件編號。"),
    w("bloquear os cartões","to block the cards","冻结银行卡","停用銀行卡","Liguei ao banco para bloquear os cartões.","I called the bank to block the cards.","我给银行打电话冻结银行卡。","我致電銀行停用銀行卡。"),
    w("foi roubado/a","was stolen","被盗了","被盜了","O meu telemóvel foi roubado.","My phone was stolen.","我的手机被盗了。","我的手機被盜了。")
  ]
};

const dialogueData = {
  supermercado_mercado: [
    l("Bom dia. Onde encontro o leite sem lactose?","Good morning. Where can I find lactose-free milk?","早上好。无乳糖牛奶在哪里？","早晨。無乳糖牛奶在哪裡？"), l("Fica no corredor seis, ao lado dos iogurtes.","It's in aisle six, next to the yoghurts.","在六号通道，酸奶旁边。","在六號通道，乳酪旁邊。"), l("E este tomate é vendido ao quilo?","And are these tomatoes sold by weight?","这种西红柿按公斤卖吗？","這種番茄按公斤賣嗎？"), l("Sim. Tem de o pesar antes de ir para a caixa.","Yes. You need to weigh it before going to the checkout.","是的，结账前需要先称重。","是的，付款前需要先磅重。"), l("Este produto está em promoção?","Is this product on special offer?","这个商品在促销吗？","這件商品有促銷嗎？"), l("Sim, mas só com o cartão da loja.","Yes, but only with the store card.","是的，但仅限使用会员卡。","是的，但只限使用會員卡。"), l("Queria fatura com número de contribuinte, por favor.","I'd like a receipt with my tax number, please.","请在发票上填写我的税号。","請在發票上填寫我的稅號。"), l("Claro. Pode indicar o NIF?","Of course. Can you give me the NIF?","当然，请告诉我税号。","當然，請告訴我稅號。")
  ],
  cafe_restaurante: [
    l("Boa tarde. Tem mesa para duas pessoas?","Good afternoon. Do you have a table for two?","下午好。有两个人的桌位吗？","午安。有兩個人的座位嗎？"), l("Tenho uma mesa lá dentro ou outra na esplanada.","I have one table inside and another on the terrace.","里面和露台各有一张桌子。","室內和露台各有一張桌子。"), l("Preferimos a esplanada. Qual é o prato do dia?","We prefer the terrace. What's today's special?","我们想坐露台。今日特餐是什么？","我們想坐露台。今日特餐是甚麼？"), l("É peixe grelhado com arroz e salada.","It's grilled fish with rice and salad.","是烤鱼配米饭和沙拉。","是烤魚配飯和沙律。"), l("Este prato contém frutos secos? Tenho alergia.","Does this dish contain nuts? I have an allergy.","这道菜含坚果吗？我过敏。","這道菜含果仁嗎？我有敏感。"), l("Não contém, mas vou confirmar com a cozinha.","It doesn't, but I'll confirm with the kitchen.","不含，但我会向厨房确认。","不含，但我會向廚房確認。"), l("Podemos pagar em separado?","Can we pay separately?","我们可以分开付款吗？","我們可以分開付款嗎？"), l("Sim. Querem pagar com cartão ou em dinheiro?","Yes. Would you like to pay by card or cash?","可以。刷卡还是现金？","可以。用卡還是現金？")
  ],
  consultorio_medico: [
    l("Bom dia. O que o traz cá hoje?","Good morning. What brings you in today?","早上好。今天哪里不舒服？","早晨。今天哪裡不舒服？"), l("Tenho uma dor no peito desde ontem.","I've had chest pain since yesterday.","我从昨天起胸痛。","我從昨天起胸口痛。"), l("A dor é constante ou vai e vem?","Is the pain constant, or does it come and go?","疼痛是持续的还是间歇的？","疼痛是持續的還是間歇的？"), l("Vai e vem e piora quando respiro fundo.","It comes and goes and gets worse when I breathe deeply.","时有时无，深呼吸时更痛。","時有時無，深呼吸時更痛。"), l("Tem febre, tosse ou falta de ar?","Do you have a fever, cough, or shortness of breath?","有发烧、咳嗽或呼吸困难吗？","有發燒、咳嗽或呼吸困難嗎？"), l("Tenho tosse, mas não tenho febre.","I have a cough, but no fever.","我咳嗽，但没有发烧。","我咳嗽，但沒有發燒。"), l("Vou examiná-lo e pedir uma radiografia.","I'm going to examine you and request an X-ray.","我会为您检查并安排X光。","我會為您檢查並安排X光。"), l("Quando devo voltar para mostrar o resultado?","When should I come back to show you the result?","我什么时候回来给您看结果？","我甚麼時候回來給您看結果？")
  ],
  casa_reparacoes: [
    l("Bom dia. Estou a ligar por causa de uma avaria em casa.","Good morning. I'm calling about a fault at home.","早上好。我打电话是因为家里出了故障。","早晨。我致電是因為家裡出了故障。"), l("Pode explicar o que aconteceu?","Can you explain what happened?","可以说明发生了什么吗？","可以說明發生了甚麼嗎？"), l("Há uma fuga de água debaixo do lava-loiça.","There's a water leak under the kitchen sink.","厨房水槽下面漏水。","廚房洗手盆下面漏水。"), l("Já fechou a torneira de segurança?","Have you turned off the stopcock?","您已经关掉总水阀了吗？","您已經關掉總水掣了嗎？"), l("Sim, mas agora não temos água em casa.","Yes, but now we have no water at home.","关了，但现在家里没水。","關了，但現在家裡沒有水。"), l("O canalizador pode ir aí entre as duas e as quatro.","The plumber can go there between two and four.","水管工可以在两点到四点之间到。","水喉匠可以在兩點至四點之間到。"), l("Pode enviar-me primeiro o orçamento?","Can you send me the quote first?","可以先把报价发给我吗？","可以先把報價傳給我嗎？"), l("Sim. Ele verifica a avaria e envia-lhe o valor.","Yes. He'll inspect the fault and send you the price.","可以。他会检查故障并把价格发给您。","可以。他會檢查故障並把價錢傳給您。")
  ],
  agua_luz_gas: [
    l("Boa tarde. Quero pôr o contrato da eletricidade em meu nome.","Good afternoon. I want to put the electricity contract in my name.","下午好。我想把电力合同改成我的名字。","午安。我想把電力合約改成我的名字。"), l("Tem o contrato de arrendamento e uma leitura do contador?","Do you have the tenancy agreement and a meter reading?","您有租赁合同和抄表数值吗？","您有租賃合約和抄錶數值嗎？"), l("Tenho. Também queria aderir ao débito direto.","I do. I'd also like to set up direct debit.","有。我还想开通自动扣款。","有。我還想設定直接付款。"), l("Preciso do seu IBAN e documento de identificação.","I need your IBAN and identity document.","我需要您的IBAN和身份证件。","我需要您的IBAN和身份證明文件。"), l("Qual é a potência contratada mais indicada?","Which contracted power level is most suitable?","哪种合同电力容量最合适？","哪種合約電力容量最合適？"), l("Para duas pessoas, 3,45 kVA costuma ser suficiente.","For two people, 3.45 kVA is usually enough.","两个人通常3.45千伏安就够了。","兩個人通常3.45千伏安就夠了。"), l("Quando começa o fornecimento?","When does the supply start?","什么时候开始供电？","甚麼時候開始供電？"), l("Se não houver problemas, fica ativo amanhã.","If there are no issues, it will be active tomorrow.","如果没有问题，明天就会开通。","如果沒有問題，明天就會開通。")
  ],
  telemovel_internet: [
    l("Bom dia. Queria internet para esta morada.","Good morning. I'd like internet service at this address.","早上好。我想为这个地址办理网络。","早晨。我想為這個地址申請上網服務。"), l("Vou verificar se há cobertura de fibra.","I'll check whether fibre is available.","我来查看是否有光纤覆盖。","我來查看是否有光纖覆蓋。"), l("Há fibra. O tarifário tem fidelização?","Fibre is available. Does the plan have a lock-in period?","有光纤。这个套餐有合约期吗？","有光纖。這個方案有綁約期嗎？"), l("Sim, durante vinte e quatro meses.","Yes, for twenty-four months.","有，二十四个月。","有，二十四個月。"), l("E quanto tempo demora a instalação?","And how long does installation take?","安装需要多长时间？","安裝需要多長時間？"), l("O técnico pode ir na próxima terça-feira de manhã.","The technician can go next Tuesday morning.","技术人员下周二上午可以上门。","技術人員下星期二上午可以上門。"), l("Preciso de ficar em casa durante toda a manhã?","Do I need to stay home all morning?","我需要整个上午都在家吗？","我需要整個上午都在家嗎？"), l("Ele liga cerca de meia hora antes de chegar.","He'll call about half an hour before arriving.","他会在到达前约半小时打电话。","他會在到達前約半小時致電。")
  ],
  trocas_devolucoes: [
    l("Boa tarde. Queria trocar estas calças.","Good afternoon. I'd like to exchange these trousers.","下午好。我想换这条裤子。","午安。我想換這條褲子。"), l("Tem o talão e a etiqueta?","Do you have the receipt and the tag?","您有收据和标签吗？","您有收據和標籤嗎？"), l("Sim. Só experimentei em casa, mas ficam apertadas.","Yes. I only tried them on at home, but they're tight.","有。我只在家试穿过，但太紧了。","有。我只在家試穿過，但太緊了。"), l("Quer outro tamanho ou prefere o reembolso?","Would you like another size or a refund?","您想换尺码还是退款？","您想換尺碼還是退款？"), l("Queria o tamanho acima, se houver.","I'd like the next size up, if available.","如果有，我想要大一码。","如果有，我想要大一個尺碼。"), l("Esse tamanho está esgotado nesta loja.","That size is sold out in this shop.","这家店那个尺码售罄了。","這間店那個尺碼售罄了。"), l("Então prefiro receber o dinheiro de volta.","Then I'd prefer to get my money back.","那我想退款。","那我想退款。"), l("O reembolso será feito para o mesmo cartão.","The refund will be made to the same card.","退款会退回原卡。","退款會退回原卡。")
  ],
  policia_documentos: [
    l("Boa noite. Quero apresentar uma denúncia.","Good evening. I want to file a police report.","晚上好。我要报案。","晚上好。我要報案。"), l("O que aconteceu?","What happened?","发生了什么？","發生了甚麼事？"), l("Roubaram-me a carteira no metro.","My wallet was stolen on the metro.","我的钱包在地铁里被偷了。","我的銀包在地鐵裡被偷了。"), l("A que horas e em que estação?","At what time and at which station?","几点？在哪个车站？","幾點？在哪個車站？"), l("Por volta das seis, entre o Saldanha e o Marquês.","At around six, between Saldanha and Marquês.","大约六点，在Saldanha和Marquês之间。","大約六點，在Saldanha和Marquês之間。"), l("Que documentos estavam na carteira?","Which documents were in the wallet?","钱包里有哪些证件？","銀包裡有哪些證件？"), l("O cartão de residência, o cartão do banco e a carta de condução.","My residence card, bank card, and driving licence.","居留卡、银行卡和驾驶证。","居留卡、銀行卡和駕駛執照。"), l("Vou registar a ocorrência e dar-lhe uma cópia do auto.","I'll record the incident and give you a copy of the report.","我会登记事件并给您一份报告副本。","我會登記事件並給您一份報告副本。")
  ]
};

const cardData = {
  supermercado_mercado: [l("Onde encontro este produto?","Where can I find this product?","这个商品在哪里？","這件商品在哪裡？"),l("Pode pesar isto, por favor?","Can you weigh this, please?","可以帮我称一下吗？","可以幫我磅一下嗎？"),l("Este preço é por quilo?","Is this price per kilo?","这个价格是每公斤吗？","這個價錢是每公斤嗎？"),l("Queria fatura com NIF.","I'd like a receipt with my NIF.","请开具含税号的发票。","請開具含稅號的發票。"),l("Posso pagar com cartão?","Can I pay by card?","可以刷卡吗？","可以用卡付款嗎？")],
  cafe_restaurante: [l("Tem mesa para duas pessoas?","Do you have a table for two?","有两个人的桌位吗？","有兩個人的座位嗎？"),l("Qual é o prato do dia?","What's today's special?","今日特餐是什么？","今日特餐是甚麼？"),l("Tenho alergia a frutos secos.","I'm allergic to nuts.","我对坚果过敏。","我對果仁敏感。"),l("Podemos pagar em separado?","Can we pay separately?","可以分开付款吗？","可以分開付款嗎？"),l("A conta, por favor.","The bill, please.","请结账。","唔該埋單。")],
  consultorio_medico: [l("Tenho esta dor há três dias.","I've had this pain for three days.","我已经痛了三天。","我已經痛了三天。"),l("A dor piora quando respiro.","The pain gets worse when I breathe.","呼吸时疼痛加重。","呼吸時疼痛加重。"),l("Estou a tomar este medicamento.","I'm taking this medicine.","我正在服用这种药。","我正在服用這種藥。"),l("Sou alérgico a penicilina.","I'm allergic to penicillin.","我对青霉素过敏。","我對盤尼西林敏感。"),l("Quando devo voltar?","When should I come back?","我什么时候再来？","我甚麼時候再來？")],
  casa_reparacoes: [l("Há uma fuga de água.","There's a water leak.","漏水了。","漏水了。"),l("O esquentador não liga.","The water heater won't turn on.","热水器无法启动。","熱水爐無法啟動。"),l("Pode enviar-me um orçamento?","Can you send me a quote?","可以给我发报价吗？","可以傳報價給我嗎？"),l("Quando pode vir fazer a reparação?","When can you come and repair it?","什么时候可以来维修？","甚麼時候可以來維修？"),l("A avaria é urgente.","The fault is urgent.","这个故障很紧急。","這個故障很緊急。")],
  agua_luz_gas: [l("Quero mudar o titular do contrato.","I want to change the account holder.","我想更改合同户名。","我想更改合約戶名。"),l("Quero comunicar a leitura do contador.","I want to submit a meter reading.","我想提交抄表数值。","我想提交抄錶數值。"),l("A fatura parece estar errada.","The bill seems to be wrong.","账单似乎有误。","賬單似乎有誤。"),l("Estamos sem eletricidade.","We have no electricity.","我们停电了。","我們停電了。"),l("Sinto cheiro a gás.","I can smell gas.","我闻到燃气味。","我聞到燃氣味。")],
  telemovel_internet: [l("Queria um cartão pré-pago.","I'd like a prepaid SIM card.","我想要一张预付费卡。","我想要一張預付費卡。"),l("Este tarifário tem fidelização?","Does this plan have a lock-in period?","这个套餐有合约期吗？","這個方案有綁約期嗎？"),l("A internet está sempre a falhar.","The internet keeps dropping out.","网络总是断线。","網絡經常斷線。"),l("O router não tem sinal.","The router has no signal.","路由器没有信号。","路由器沒有訊號。"),l("Quando pode vir o técnico?","When can the technician come?","技术人员什么时候能来？","技術人員甚麼時候能來？")],
  trocas_devolucoes: [l("Posso experimentar?","May I try it on?","可以试穿吗？","可以試穿嗎？"),l("Tem este modelo noutro tamanho?","Do you have this in another size?","这个款式有其他尺码吗？","這個款式有其他尺碼嗎？"),l("Queria trocar este artigo.","I'd like to exchange this item.","我想换这件商品。","我想換這件商品。"),l("O produto veio com defeito.","The product arrived defective.","商品到货时有瑕疵。","商品到貨時有瑕疵。"),l("Prefiro o reembolso.","I'd prefer a refund.","我想退款。","我想退款。")],
  policia_documentos: [l("Perdi a carteira.","I lost my wallet.","我丢了钱包。","我遺失了銀包。"),l("O meu telemóvel foi roubado.","My phone was stolen.","我的手机被盗了。","我的手機被盜了。"),l("Quero apresentar uma denúncia.","I want to file a police report.","我要报案。","我要報案。"),l("Preciso de uma cópia do auto.","I need a copy of the report.","我需要报告副本。","我需要報告副本。"),l("Qual é o número da ocorrência?","What is the incident reference number?","事件编号是多少？","事件編號是多少？")]
};

const dialogueRefinements = [
  ["E este tomate é vendido ao quilo?", l("E estes tomates vendem-se ao quilo?", "And are these tomatoes sold by the kilo?", "这些西红柿按公斤卖吗？", "這些番茄按公斤賣嗎？")],
  ["Sim. Tem de o pesar antes de ir para a caixa.", l("Sim. Tem de os pesar antes de ir para a caixa.", "Yes. You need to weigh them before going to the checkout.", "是的，结账前需要先称重。", "是的，付款前需要先磅重。")],
  ["Queria fatura com número de contribuinte, por favor.", l("Queria fatura com NIF, por favor.", "I'd like a receipt with my NIF, please.", "请在发票上填写我的税号。", "請在發票上填寫我的稅號。")],
  ["Tenho uma mesa lá dentro ou outra na esplanada.", l("Temos uma mesa lá dentro e outra na esplanada.", "We have one table inside and another on the terrace.", "里面和露台各有一张桌子。", "室內和露台各有一張桌子。")],
  ["Já fechou a torneira de segurança?", l("Já fechou a torneira de corte?", "Have you turned off the stopcock?", "您已经关掉总水阀了吗？", "您已經關掉總水掣了嗎？")],
  ["Sim. Ele verifica a avaria e envia-lhe o valor.", l("Sim. Ele verifica a avaria e depois envia-lhe o orçamento.", "Yes. He'll inspect the fault and then send you the quote.", "可以。他会检查故障，然后把报价发给您。", "可以。他會檢查故障，然後把報價傳給您。")],
  ["Se não houver problemas, fica ativo amanhã.", l("Se não houver problemas, o contrato fica ativo amanhã.", "If there are no issues, the contract will be active tomorrow.", "如果没有问题，合同明天就会生效。", "如果沒有問題，合約明天就會生效。")],
  ["Por volta das seis, entre o Saldanha e o Marquês.", l("Por volta das seis, entre Saldanha e o Marquês de Pombal.", "At around six, between Saldanha and Marquês de Pombal.", "大约六点，在Saldanha和Marquês de Pombal之间。", "大約六點，在Saldanha和Marquês de Pombal之間。")]
];
for (const lines of Object.values(dialogueData)) {
  for (const [oldText, replacement] of dialogueRefinements) {
    const index = lines.findIndex((line) => line.pt === oldText);
    if (index >= 0) lines[index] = replacement;
  }
}

const practical = groups.find((group) => group.label === "Vida prática");
if (!practical) throw new Error("Vida prática group not found.");
for (const scenario of scenarios) {
  if (!practical.items.some((item) => item.id === scenario.id)) practical.items.push(scenario);
  labels[scenario.id] = scenario.label;
}

const byId = new Map(manual.map((entry) => [entry.id, entry]));
for (const row of rows) if (!byId.has(row.id)) byId.set(row.id, row);
for (const [scenario, ids] of Object.entries(sharedIds)) {
  for (const id of ids) {
    if (rows.some((row) => row.situacao === scenario && row.id === id)) continue;
    const entry = byId.get(id);
    if (!entry) throw new Error(`Missing shared vocabulary ID ${id} for ${scenario}.`);
    rows.push(toSituationRow(entry, scenario));
  }
}

let nextId = Math.max(...[...byId.keys()].map((id) => Number(/^az-(\d+)$/u.exec(id)?.[1] ?? 0))) + 1;
for (const [scenario, words] of Object.entries(newWords)) {
  for (const word of words) {
    let existing = rows.find((row) => normalize(row.pt) === normalize(word.pt));
    if (!existing) {
      const id = `az-${String(nextId++).padStart(4, "0")}`;
      existing = { id, legacyIds: [`situacao-${slug(word.pt)}`], ...word };
      byId.set(id, existing);
    }
    if (!rows.some((row) => row.situacao === scenario && row.id === existing.id)) rows.push({ ...existing, situacao: scenario });
  }
}

let dialogueOrder = Math.max(...dialogues.map((line) => line.order), 0);
let cardOrder = Math.max(...cards.map((line) => line.order), 0);
for (const scenario of scenarios) {
  for (const [index, line] of (dialogueData[scenario.id] ?? []).entries()) {
    if (!dialogues.some((item) => item.situacao === scenario.id && normalize(item.pt) === normalize(line.pt))) {
      dialogues.push({ id: `dialogo-${scenario.id}-${slug(line.pt)}`, situacao: scenario.id, order: ++dialogueOrder, ...line });
    }
  }
  for (const line of cardData[scenario.id] ?? []) {
    if (!cards.some((item) => item.situacao === scenario.id && normalize(item.pt) === normalize(line.pt))) {
      cards.push({ id: `cartao-${scenario.id}-${slug(line.pt)}`, situacao: scenario.id, order: ++cardOrder, ...line });
    }
  }
}

for (const scenario of scenarios) {
  const count = new Set(rows.filter((row) => row.situacao === scenario.id).map((row) => row.id)).size;
  if (count < 30 || count > 40) throw new Error(`${scenario.label} has ${count} vocabulary items; expected 30–40.`);
  console.log(`${scenario.label}: ${count} vocabulary items`);
}

source = replace("situacaoGroups", groups);
source = replace("situacaoLabels", labels);
source = replace("situacaoVocabularyRows", rows);
source = replace("situacaoDialogueLines", dialogues);
source = replace("situacaoCheatSheetLines", cards);
writeFileSync(situacoesPath, source);

function w(pt, en, zhHans, zhHant, examplePt, exampleEn, exampleZhHans, exampleZhHant) {
  const grammar = /^os\s+/iu.test(pt) ? { pos: "noun", gender: "m-pl" } : /^as\s+/iu.test(pt) ? { pos: "noun", gender: "f-pl" } : /^o\s+/iu.test(pt) ? { pos: "noun", gender: "m" } : /^a\s+/iu.test(pt) ? { pos: "noun", gender: "f" } : /(?:ar|er|ir)(?:-se)?$/iu.test(pt) ? { pos: "verb" } : {};
  return { pt, en, zhHans, zhHant, ...grammar, examplePt, exampleEn, exampleZhHans, exampleZhHant };
}
function l(pt, en, zhHans, zhHant) { return { pt, en, zhHans, zhHant }; }
function toSituationRow(entry, situacao) {
  if (entry.pt) return { ...entry, situacao };
  return { id: entry.id, legacyIds: entry.legacyIds, situacao, pt: entry.portuguese, en: entry.english, zhHans: entry.zhHans, zhHant: entry.zhHant, pos: entry.pos, gender: entry.gender, examplePt: entry.examplePt, exampleEn: entry.exampleEn, exampleZhHans: entry.exampleZhHans, exampleZhHant: entry.exampleZhHant, note: entry.note };
}
function extract(name) {
  const start = source.indexOf(`export const ${name}:`), assignment = source.indexOf(" = ", start), end = source.indexOf(";\n", assignment);
  return JSON.parse(source.slice(assignment + 3, end));
}
function replace(name, value) {
  const start = source.indexOf(`export const ${name}:`), assignment = source.indexOf(" = ", start), end = source.indexOf(";\n", assignment);
  return `${source.slice(0, assignment + 3)}${JSON.stringify(value, null, 2)}${source.slice(end)}`;
}
function normalize(value) { return String(value).normalize("NFC").toLowerCase().replace(/\s+/gu, " ").trim(); }
function slug(value) { return value.normalize("NFD").replace(/[\u0300-\u036f]/gu, "").toLowerCase().replace(/[^a-z0-9]+/gu, "-").replace(/^-|-$/gu, ""); }
