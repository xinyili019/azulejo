import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dataPath = join(root, "src", "data", "situacoes.ts");
const vocabularyPath = join(root, "src", "data", "vocabulary.ts");
let source = readFileSync(dataPath, "utf8");
const groups = get("situacaoGroups"), labels = get("situacaoLabels"), rows = get("situacaoVocabularyRows"), dialogues = get("situacaoDialogueLines"), cards = get("situacaoCheatSheetLines");
const manual = JSON.parse(readFileSync(vocabularyPath, "utf8").match(/export const vocabulary: VocabularyEntry\[] = ([\s\S]*?) satisfies VocabularyEntry\[];/)?.[1] ?? "[]");

const scenarios = [
  { id: "espaco_cidadao", label: "Espaço Cidadão" },
  { id: "imt_carta_conducao", label: "IMT e Carta de Condução" },
  { id: "conservatoria_registo_civil", label: "Conservatória e Registo Civil" },
  { id: "camara_municipal", label: "Câmara Municipal" },
  { id: "reconhecimento_diplomas", label: "Reconhecimento de Diplomas" },
  { id: "consulado_documentos", label: "Consulado e Documentos Estrangeiros" }
];

const shared = {
  espaco_cidadao: ["az-0847","az-0824","az-0620","az-0624","az-0611","az-0579","az-0580","az-0595","az-0621","az-0232","az-0529","az-0509","az-0506","az-0862","az-0863","az-0802","az-0704","az-0854","az-0855","az-0864","az-0865","az-0646","az-0162","az-0017","az-0018","az-0781","az-0254","az-0255","az-0596","az-0570"],
  imt_carta_conducao: ["az-0428","az-0239","az-0241","az-0234","az-0235","az-0236","az-0237","az-0238","az-0240","az-0268","az-0659","az-0663","az-0664","az-0668","az-0669","az-0802","az-0824","az-0851","az-0852","az-0863","az-0864","az-0884","az-0887","az-0888","az-0893","az-0894","az-0895"],
  conservatoria_registo_civil: ["az-0463","az-0517","az-0546","az-0559","az-0560","az-0576","az-0577","az-0578","az-0579","az-0644","az-0645","az-0646","az-0802","az-0851","az-0852","az-0857","az-0862","az-0863","az-0864","az-0865","az-0886","az-0887","az-0888","az-0889","az-0890","az-0894","az-0895"],
  camara_municipal: ["az-0594","az-0581","az-0586","az-0592","az-0596","az-0645","az-0646","az-0760","az-0846","az-0854","az-0855","az-0857","az-0859","az-0860","az-0862","az-0863","az-0864","az-0865","az-1095","az-1196","az-1197","az-1198","az-1203","az-1204","az-1072","az-1010","az-0533"],
  reconhecimento_diplomas: ["az-0517","az-0518","az-0536","az-0537","az-0577","az-0578","az-0579","az-0644","az-0646","az-0694","az-0824","az-0825","az-0851","az-0852","az-0862","az-0863","az-0864","az-0887","az-0888","az-0894","az-0895","az-0896","az-0897","az-0898","az-0921","az-0943"],
  consulado_documentos: ["az-0239","az-0240","az-0509","az-0510","az-0520","az-0521","az-0542","az-0577","az-0578","az-0579","az-0625","az-0644","az-0645","az-0646","az-0802","az-0851","az-0852","az-0857","az-0862","az-0863","az-0864","az-0865","az-0887","az-0888","az-0889","az-0890","az-0896"]
};

const additions = {
  imt_carta_conducao: [
    w("o IMT","Institute for Mobility and Transport (IMT)","交通与运输局（IMT）","交通及運輸局（IMT）","O pedido foi enviado ao IMT.","The application was sent to the IMT.","申请已提交给IMT。","申請已提交給IMT。"),
    w("trocar a carta de condução","to exchange a driving licence","换领驾驶证","換領駕駛執照","Quero trocar a minha carta estrangeira.","I want to exchange my foreign licence.","我想换领外国驾驶证。","我想換領外國駕駛執照。"),
    w("o atestado médico eletrónico","electronic medical certificate","电子健康证明","電子健康證明","O médico enviou o atestado eletrónico ao IMT.","The doctor sent the electronic certificate to the IMT.","医生已将电子健康证明发送给IMT。","醫生已將電子健康證明傳送給IMT。")
  ],
  conservatoria_registo_civil: [
    w("a conservatória","registry office","登记处","登記處","A certidão pode ser pedida na conservatória.","The certificate can be requested at the registry office.","可以在登记处申请证明。","可以在登記處申請證明。"),
    w("o registo civil","civil registry","民事登记","民事登記","O casamento consta do registo civil.","The marriage is recorded in the civil registry.","婚姻已登记在民事登记册中。","婚姻已登記在民事登記冊中。"),
    w("a certidão de casamento","marriage certificate","结婚证明","結婚證明書","Preciso de uma certidão de casamento recente.","I need a recent marriage certificate.","我需要一份近期的结婚证明。","我需要一份近期的結婚證明書。"),
    w("a transcrição do casamento","registration of a foreign marriage","境外婚姻转录登记","海外婚姻轉錄登記","Pedi a transcrição do casamento celebrado no estrangeiro.","I requested registration of the marriage celebrated abroad.","我申请了境外婚姻转录登记。","我申請了海外婚姻轉錄登記。")
  ],
  camara_municipal: [
    w("o município","municipality","市镇","市鎮","O serviço é gerido pelo município.","The service is managed by the municipality.","该服务由市镇管理。","該服務由市鎮管理。"),
    w("o dístico de residente","resident parking permit","居民停车证","居民泊車證","Pedi o dístico de residente para esta zona.","I applied for a resident parking permit for this area.","我申请了这个区域的居民停车证。","我申請了這個區域的居民泊車證。"),
    w("os monos","bulky household waste","大件垃圾","大型家居廢物","A Câmara recolhe os monos mediante marcação.","The council collects bulky waste by appointment.","市政府预约上门收取大件垃圾。","市政府預約上門收取大型家居廢物。")
  ],
  reconhecimento_diplomas: [
    w("o reconhecimento automático","automatic recognition","自动认可","自動認可","O meu diploma permite reconhecimento automático.","My diploma is eligible for automatic recognition.","我的文凭符合自动认可条件。","我的文憑符合自動認可條件。"),
    w("o reconhecimento de nível","level recognition","等级认可","級別認可","Pedi o reconhecimento de nível de mestre.","I requested recognition at master's level.","我申请了硕士等级认可。","我申請了碩士級別認可。"),
    w("o reconhecimento específico","specific recognition","专业认可","特定認可","A profissão exige reconhecimento específico.","The profession requires specific recognition.","该职业要求专业认可。","該職業要求特定認可。"),
    w("o certificado de disciplinas","academic transcript","成绩单","成績單","Anexei o certificado de disciplinas ao pedido.","I attached the academic transcript to the application.","我在申请中附上了成绩单。","我在申請中附上了成績單。")
  ],
  consulado_documentos: [
    w("o consulado","consulate","领事馆","領事館","Marquei atendimento no consulado.","I booked an appointment at the consulate.","我预约了领事馆服务。","我預約了領事館服務。"),
    w("a embaixada","embassy","大使馆","大使館","A embaixada confirmou a informação.","The embassy confirmed the information.","大使馆确认了信息。","大使館確認了資料。"),
    w("a procuração","power of attorney","授权委托书","授權書","Assinei uma procuração para tratar do processo.","I signed a power of attorney for someone to handle the case.","我签署了授权委托书代办手续。","我簽署了授權書代辦手續。")
  ]
};

const dialogue = {
  espaco_cidadao: [l("Bom dia. Preciso de ativar a Chave Móvel Digital.","Good morning. I need to activate my Digital Mobile Key.","早上好。我需要开通数字移动密钥。","早晨。我需要啟用數碼流動金鑰。"),l("Tem o documento de identificação e o telemóvel consigo?","Do you have your identity document and phone with you?","您带了身份证件和手机吗？","您帶了身份證明文件和手機嗎？"),l("Sim. Também queria alterar a minha morada.","Yes. I'd also like to change my address.","带了。我还想更改地址。","帶了。我還想更改地址。"),l("Podemos iniciar os dois serviços aqui.","We can start both services here.","我们可以在这里办理这两项服务。","我們可以在這裡辦理這兩項服務。"),l("Preciso de trazer um comprovativo de morada?","Do I need to bring proof of address?","需要带住址证明吗？","需要帶地址證明嗎？"),l("Para este pedido, não é necessário.","It isn't required for this request.","这项申请不需要。","這項申請不需要。"),l("Pode ajudar-me a recuperar a senha?","Can you help me recover the password?","可以帮我找回密码吗？","可以幫我重設密碼嗎？"),l("Claro. Vamos confirmar primeiro os seus dados.","Of course. We'll confirm your details first.","可以。我们先核对您的资料。","可以。我們先核對您的資料。")],
  imt_carta_conducao: [l("Bom dia. Quero trocar a minha carta de condução estrangeira.","Good morning. I want to exchange my foreign driving licence.","早上好。我想换领外国驾驶证。","早晨。我想換領外國駕駛執照。"),l("Em que país foi emitida?","Which country issued it?","驾驶证由哪个国家签发？","駕駛執照由哪個國家簽發？"),l("Foi emitida na China e ainda está válida.","It was issued in China and is still valid.","由中国签发，目前仍有效。","由中國簽發，目前仍然有效。"),l("Precisa da carta original e de uma declaração de autenticidade.","You need the original licence and a declaration of authenticity.","需要驾驶证原件和真实性声明。","需要駕駛執照正本和真實性聲明。"),l("Também tenho de entregar uma tradução?","Do I also need to provide a translation?","还需要提交翻译件吗？","還需要提交翻譯本嗎？"),l("Sim, uma tradução certificada para português.","Yes, a certified translation into Portuguese.","需要，须提供葡萄牙语认证翻译。","需要，須提供葡萄牙語核證翻譯。"),l("Como acompanho o estado do pedido?","How can I track the application status?","如何查询申请状态？","如何查詢申請狀態？"),l("Receberá as atualizações por correio eletrónico.","You will receive updates by email.","您会通过电子邮件收到更新。","您會透過電郵收到更新。")],
  conservatoria_registo_civil: [l("Bom dia. Queria transcrever o meu casamento.","Good morning. I'd like to register my marriage.","早上好。我想办理境外婚姻转录登记。","早晨。我想辦理海外婚姻轉錄登記。"),l("O casamento foi celebrado no estrangeiro?","Was the marriage celebrated abroad?","婚姻是在国外登记的吗？","婚姻是在外國登記的嗎？"),l("Sim, foi celebrado em Xangai.","Yes, it was celebrated in Shanghai.","是的，在上海登记。","是的，在上海登記。"),l("Precisa da certidão de casamento legalizada.","You need the legalised marriage certificate.","需要经认证的结婚证明。","需要經認證的結婚證明書。"),l("A certidão também tem de ser traduzida?","Does the certificate also need to be translated?","证明也需要翻译吗？","證明書也需要翻譯嗎？"),l("Sim, por um tradutor certificado.","Yes, by a certified translator.","需要，由认证译员翻译。","需要，由核證翻譯員翻譯。"),l("Posso pedir aqui uma certidão portuguesa depois?","Can I request a Portuguese certificate here afterwards?","之后可以在这里申请葡萄牙证明吗？","之後可以在這裡申請葡萄牙證明書嗎？"),l("Sim, depois de a transcrição estar concluída.","Yes, after the registration is complete.","可以，转录完成后即可申请。","可以，轉錄完成後即可申請。")],
  camara_municipal: [l("Bom dia. Queria pedir um dístico de residente.","Good morning. I'd like to apply for a resident parking permit.","早上好。我想申请居民停车证。","早晨。我想申請居民泊車證。"),l("O veículo está registado na sua morada?","Is the vehicle registered at your address?","车辆登记地址是您的住址吗？","車輛登記地址是您的住址嗎？"),l("Sim. Trouxe o certificado de matrícula.","Yes. I brought the vehicle registration certificate.","是的。我带了车辆登记证。","是的。我帶了車輛登記證。"),l("Também precisamos do comprovativo de morada.","We also need proof of address.","还需要住址证明。","還需要地址證明。"),l("Posso tratar aqui da recolha de monos?","Can I arrange bulky-waste collection here?","可以在这里预约大件垃圾收取吗？","可以在這裡預約大型家居廢物收取嗎？"),l("Sim. Que objetos quer que sejam recolhidos?","Yes. Which items do you want collected?","可以。需要收取哪些物品？","可以。需要收取哪些物品？"),l("Um sofá e uma máquina de lavar avariada.","A sofa and a broken washing machine.","一张沙发和一台坏洗衣机。","一張梳化和一部壞洗衣機。"),l("A recolha pode ser feita na próxima quarta-feira.","Collection can take place next Wednesday.","可在下周三收取。","可在下星期三收取。")],
  reconhecimento_diplomas: [l("Bom dia. Quero pedir o reconhecimento do meu diploma.","Good morning. I want to apply for recognition of my diploma.","早上好。我想申请文凭认可。","早晨。我想申請文憑認可。"),l("Pretende reconhecimento automático, de nível ou específico?","Do you want automatic, level, or specific recognition?","您要申请自动、等级还是专业认可？","您要申請自動、級別還是特定認可？"),l("Não sei qual se aplica ao meu curso.","I don't know which applies to my degree.","我不知道哪一种适用于我的专业。","我不知道哪一種適用於我的課程。"),l("Primeiro, verifique se o diploma consta da lista automática.","First, check whether the diploma is on the automatic-recognition list.","请先查看文凭是否在自动认可名单中。","請先查看文憑是否在自動認可名單中。"),l("Que documentos tenho de anexar?","Which documents do I need to attach?","需要上传哪些文件？","需要上載哪些文件？"),l("O diploma e o certificado com as disciplinas e notas.","The diploma and the transcript with subjects and grades.","文凭及载有课程和成绩的成绩单。","文憑及載有科目和成績的成績單。"),l("Como consulto o estado do processo?","How do I check the application status?","如何查询申请状态？","如何查詢申請狀態？"),l("Consulte a plataforma onde submeteu o pedido.","Check the platform where you submitted the application.","请在提交申请的平台查询。","請在提交申請的平台查詢。")],
  consulado_documentos: [l("Bom dia. Preciso de fazer uma procuração.","Good morning. I need to make a power of attorney.","早上好。我需要办理授权委托书。","早晨。我需要辦理授權書。"),l("A procuração é para ser usada em Portugal?","Will the power of attorney be used in Portugal?","授权委托书用于葡萄牙吗？","授權書會在葡萄牙使用嗎？"),l("Sim, para tratar da venda de uma casa.","Yes, to handle the sale of a house.","是的，用于办理房屋出售。","是的，用於辦理房屋出售。"),l("Tem de trazer o texto da procuração e o passaporte.","You must bring the power-of-attorney text and your passport.","需要带授权书文本和护照。","需要帶授權書文本和護照。"),l("A assinatura pode ser reconhecida aqui?","Can the signature be certified here?","可以在这里认证签名吗？","可以在這裡核證簽名嗎？"),l("Sim, mas tem de assinar perante o funcionário.","Yes, but you must sign in front of the officer.","可以，但必须在工作人员面前签名。","可以，但必須在職員面前簽署。"),l("Preciso de marcar atendimento?","Do I need to book an appointment?","需要预约吗？","需要預約嗎？"),l("Sim. A marcação é feita no portal consular.","Yes. Appointments are made on the consular portal.","需要，请在领事服务网站预约。","需要，請在領事服務網站預約。")]
};

const card = {
  espaco_cidadao: [l("Quero ativar a Chave Móvel Digital.","I want to activate my Digital Mobile Key.","我想开通数字移动密钥。","我想啟用數碼流動金鑰。"),l("Preciso de alterar a minha morada.","I need to change my address.","我需要更改地址。","我需要更改地址。"),l("Pode ajudar-me a preencher o formulário?","Can you help me fill in the form?","可以帮我填写表格吗？","可以幫我填寫表格嗎？"),l("Quais são os documentos necessários?","Which documents are required?","需要哪些文件？","需要哪些文件？"),l("Como recupero a senha?","How do I recover the password?","如何找回密码？","如何重設密碼？")],
  imt_carta_conducao: [l("Quero trocar a minha carta estrangeira.","I want to exchange my foreign licence.","我想换领外国驾驶证。","我想換領外國駕駛執照。"),l("Esta carta é válida em Portugal?","Is this licence valid in Portugal?","这本驾驶证在葡萄牙有效吗？","這本駕駛執照在葡萄牙有效嗎？"),l("Preciso de uma tradução certificada?","Do I need a certified translation?","需要认证翻译吗？","需要核證翻譯嗎？"),l("Onde entrego a carta original?","Where do I submit the original licence?","在哪里提交驾驶证原件？","在哪裡提交駕駛執照正本？"),l("Como acompanho o pedido?","How do I track the application?","如何查询申请？","如何查詢申請？")],
  conservatoria_registo_civil: [l("Quero pedir uma certidão de nascimento.","I want to request a birth certificate.","我想申请出生证明。","我想申請出生證明書。"),l("Quero transcrever o meu casamento.","I want to register my foreign marriage.","我想办理境外婚姻转录登记。","我想辦理海外婚姻轉錄登記。"),l("A certidão tem de ser legalizada?","Does the certificate need to be legalised?","证明需要认证吗？","證明書需要認證嗎？"),l("Preciso de uma cópia integral.","I need a full-form copy.","我需要完整副本。","我需要完整副本。"),l("Quando posso levantar o documento?","When can I collect the document?","什么时候可以领取文件？","甚麼時候可以領取文件？")],
  camara_municipal: [l("Quero pedir um dístico de residente.","I want to apply for a resident parking permit.","我想申请居民停车证。","我想申請居民泊車證。"),l("Quero marcar a recolha de monos.","I want to arrange bulky-waste collection.","我想预约大件垃圾收取。","我想預約大型家居廢物收取。"),l("Onde fica o ecocentro?","Where is the recycling centre?","回收中心在哪里？","回收中心在哪裡？"),l("Quero comunicar um problema na rua.","I want to report a problem in the street.","我想报告街道问题。","我想報告街道問題。"),l("Qual é a taxa municipal?","What is the municipal fee?","市政费用是多少？","市政費用是多少？")],
  reconhecimento_diplomas: [l("Quero reconhecer o meu diploma.","I want to have my diploma recognised.","我想办理文凭认可。","我想辦理文憑認可。"),l("Que tipo de reconhecimento devo pedir?","Which type of recognition should I request?","应该申请哪种认可？","應該申請哪種認可？"),l("Onde submeto os documentos?","Where do I submit the documents?","在哪里提交文件？","在哪裡提交文件？"),l("Falta o certificado de disciplinas.","The academic transcript is missing.","缺少成绩单。","缺少成績單。"),l("Qual é o estado do processo?","What is the application status?","申请状态如何？","申請狀態如何？")],
  consulado_documentos: [l("Preciso de fazer uma procuração.","I need to make a power of attorney.","我需要办理授权委托书。","我需要辦理授權書。"),l("Quero reconhecer a minha assinatura.","I want to have my signature certified.","我想认证签名。","我想核證簽名。"),l("Este documento precisa de apostila?","Does this document need an apostille?","这份文件需要海牙认证吗？","這份文件需要海牙認證嗎？"),l("Preciso de uma tradução certificada.","I need a certified translation.","我需要认证翻译。","我需要核證翻譯。"),l("Como marco atendimento?","How do I book an appointment?","如何预约？","如何預約？")]
};

const bureaucracy = groups.find((group) => group.label === "Burocracia");
if (!bureaucracy) throw new Error("Burocracia group not found.");
for (const s of scenarios) { if (!bureaucracy.items.some((item) => item.id === s.id)) bureaucracy.items.push(s); labels[s.id] = s.label; }
const all = new Map(manual.map((x) => [x.id, x])); for (const x of rows) if (!all.has(x.id)) all.set(x.id, x);
for (const [scenario, ids] of Object.entries(shared)) for (const id of ids) {
  if (rows.some((x) => x.situacao === scenario && x.id === id)) continue;
  const entry = all.get(id); if (!entry) throw new Error(`Missing ${id} for ${scenario}`);
  rows.push(toRow(entry, scenario));
}
let next = Math.max(...[...all.keys()].map((id) => Number(/^az-(\d+)$/u.exec(id)?.[1] ?? 0))) + 1;
for (const [scenario, words] of Object.entries(additions)) for (const word of words) {
  let entry = rows.find((x) => norm(x.pt) === norm(word.pt));
  if (!entry) { const id = `az-${String(next++).padStart(4, "0")}`; entry = { id, legacyIds: [`situacao-${slug(word.pt)}`], ...word }; all.set(id, entry); }
  if (!rows.some((x) => x.situacao === scenario && x.id === entry.id)) rows.push({ ...entry, situacao: scenario });
}
for (const s of scenarios) {
  const count = new Set(rows.filter((x) => x.situacao === s.id).map((x) => x.id)).size; if (count === 0) throw new Error(`${s.label}: no vocabulary`); console.log(`${s.label}: ${count} vocabulary items`);
}
for (const [name,value] of [["situacaoGroups",groups],["situacaoLabels",labels],["situacaoVocabularyRows",rows],["situacaoDialogueLines",dialogues],["situacaoCheatSheetLines",cards]]) source = set(name,value);
writeFileSync(dataPath,source);
function w(pt,en,zhHans,zhHant,examplePt,exampleEn,exampleZhHans,exampleZhHant){const grammar=/^os\s+/iu.test(pt)?{pos:"noun",gender:"m-pl"}:/^as\s+/iu.test(pt)?{pos:"noun",gender:"f-pl"}:/^o\s+/iu.test(pt)?{pos:"noun",gender:"m"}:/^a\s+/iu.test(pt)?{pos:"noun",gender:"f"}:/(?:ar|er|ir)(?:-se)?$/iu.test(pt)?{pos:"verb"}:{};return{pt,en,zhHans,zhHant,...grammar,examplePt,exampleEn,exampleZhHans,exampleZhHant}}
function l(pt,en,zhHans,zhHant){return{pt,en,zhHans,zhHant}}
function toRow(x,situacao){return x.pt?{...x,situacao}:{id:x.id,legacyIds:x.legacyIds,situacao,pt:x.portuguese,en:x.english,zhHans:x.zhHans,zhHant:x.zhHant,pos:x.pos,gender:x.gender,examplePt:x.examplePt,exampleEn:x.exampleEn,exampleZhHans:x.exampleZhHans,exampleZhHant:x.exampleZhHant,note:x.note}}
function get(n){const a=source.indexOf(`export const ${n}:`),b=source.indexOf(" = ",a),e=source.indexOf(";\n",b);return JSON.parse(source.slice(b+3,e))}
function set(n,v){const a=source.indexOf(`export const ${n}:`),b=source.indexOf(" = ",a),e=source.indexOf(";\n",b);return`${source.slice(0,b+3)}${JSON.stringify(v,null,2)}${source.slice(e)}`}
function norm(v){return String(v).normalize("NFC").toLowerCase().replace(/\s+/gu," ").trim()}
function slug(v){return v.normalize("NFD").replace(/[\u0300-\u036f]/gu,"").toLowerCase().replace(/[^a-z0-9]+/gu,"-").replace(/^-|-$/gu,"")}
