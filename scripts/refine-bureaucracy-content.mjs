import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dataPath = join(root, "src", "data", "situacoes.ts");
let source = readFileSync(dataPath, "utf8");
const existingDialogues = get("situacaoDialogueLines");
const existingCards = get("situacaoCheatSheetLines");

const dialogue = {
  espaco_cidadao: [
    l("opening", "Bom dia. Preciso de ativar a Chave Móvel Digital.", "Good morning. I need to activate my Digital Mobile Key.", "早上好。我需要开通数字移动密钥。", "早晨。我需要啟用數碼流動金鑰。"),
    l("availability", "Este serviço está disponível neste Espaço Cidadão?", "Is this service available at this Citizen's Desk?", "这个市民服务中心可以办理这项服务吗？", "這個市民服務中心可以辦理這項服務嗎？"),
    l("availability", "Sim. Aqui fazemos a ativação com apoio de um assistente.", "Yes. We provide assisted activation here.", "可以。这里有工作人员协助开通。", "可以。這裡有職員協助啟用。"),
    l("appointment", "É preciso marcar atendimento?", "Do I need an appointment?", "需要预约吗？", "需要預約嗎？"),
    l("appointment", "Não. O atendimento normal é feito sem marcação.", "No. Regular service is provided without an appointment.", "不需要。普通服务无需预约。", "不需要。一般服務毋須預約。"),
    l("documents", "Trouxe o documento de identificação e o telemóvel.", "I brought my identity document and phone.", "我带了身份证件和手机。", "我帶了身份證明文件和手機。"),
    l("problem", "Não me lembro do PIN e já não uso o email antigo.", "I don't remember the PIN and no longer use my old email.", "我不记得密码，也不再使用原来的邮箱。", "我不記得密碼，也不再使用以前的電郵。"),
    l("recovery", "Vamos primeiro confirmar a sua identidade e atualizar os contactos.", "We will first confirm your identity and update your contact details.", "我们先核实您的身份并更新联系方式。", "我們先核實您的身份並更新聯絡資料。"),
    l("confirmation", "No fim, recebo algum comprovativo?", "Will I receive confirmation when it is finished?", "办完后会收到凭证吗？", "辦妥後會收到確認嗎？"),
    l("confirmation", "Sim. Pode confirmar a ativação no ecrã e guardar a mensagem.", "Yes. You can confirm activation on screen and keep the message.", "会。您可以在屏幕上确认开通并保存通知。", "會。您可以在畫面上確認啟用並保留訊息。")
  ],
  imt_carta_conducao: [
    l("opening", "Bom dia. Quero trocar a minha carta de condução estrangeira.", "Good morning. I want to exchange my foreign driving licence.", "早上好。我想换领外国驾驶证。", "早晨。我想換領外國駕駛執照。"),
    l("eligibility", "Em que país foi emitida e desde quando reside em Portugal?", "Which country issued it, and since when have you lived in Portugal?", "驾驶证由哪个国家签发？您从什么时候开始在葡萄牙居住？", "駕駛執照由哪個國家簽發？您從甚麼時候開始在葡萄牙居住？"),
    l("eligibility", "Foi emitida na China e tenho residência desde março.", "It was issued in China, and I have been resident since March.", "由中国签发，我从三月起在葡萄牙居住。", "由中國簽發，我從三月起在葡萄牙居住。"),
    l("documents", "A lista de documentos depende do país. Vamos confirmar o seu caso.", "The document list depends on the country. Let us check your case.", "所需文件取决于签发国。我们先核对您的情况。", "所需文件視乎簽發國。我們先核對您的情況。"),
    l("documents", "Tenho a carta original, o atestado médico e o título de residência.", "I have the original licence, medical certificate, and residence permit.", "我带了驾驶证原件、健康证明和居留证。", "我帶了駕駛執照正本、健康證明和居留證。"),
    l("documents", "Pode ainda ser necessária uma declaração de autenticidade ou tradução certificada.", "A declaration of authenticity or certified translation may also be required.", "还可能需要真实性声明或认证翻译。", "還可能需要真實性聲明或核證翻譯。"),
    l("submission", "Posso entregar tudo online?", "Can I submit everything online?", "可以全部在线提交吗？", "可以全部網上提交嗎？"),
    l("submission", "O pedido começa no formulário online; siga depois as instruções do IMT.", "The application starts with the online form; then follow the IMT instructions.", "申请从在线表格开始，之后请按IMT的指示办理。", "申請由網上表格開始，之後請按IMT的指示辦理。"),
    l("cost", "Qual é o custo e como faço o pagamento?", "What does it cost, and how do I pay?", "费用是多少？如何付款？", "費用是多少？如何付款？"),
    l("tracking", "A taxa base aparece no pedido. Guarde a referência para acompanhar o processo.", "The base fee appears in the application. Keep the reference to track the process.", "基本费用会显示在申请中。请保存编号以查询进度。", "基本費用會顯示在申請中。請保留編號以查詢進度。")
  ],
  conservatoria_registo_civil: [
    l("opening", "Bom dia. Quero transcrever um casamento celebrado no estrangeiro.", "Good morning. I want to register a marriage celebrated abroad.", "早上好。我想登记在国外缔结的婚姻。", "早晨。我想登記在外國締結的婚姻。"),
    l("eligibility", "Uma das pessoas do casal tem nacionalidade portuguesa?", "Is either spouse a Portuguese national?", "夫妻中有一方是葡萄牙公民吗？", "夫妻中有一方是葡萄牙公民嗎？"),
    l("eligibility", "Sim, eu sou portuguesa e o casamento foi celebrado em Xangai.", "Yes, I am Portuguese, and the marriage was celebrated in Shanghai.", "是的，我是葡萄牙公民，婚姻在上海登记。", "是的，我是葡萄牙公民，婚姻在上海登記。"),
    l("documents", "Precisa da certidão de casamento e dos documentos de identificação do casal.", "You need the marriage certificate and both spouses' identity documents.", "需要结婚证明和夫妻双方的身份证件。", "需要結婚證明書和夫妻雙方的身份證明文件。"),
    l("documents", "O meu marido estrangeiro também precisa da certidão de nascimento?", "Does my foreign husband also need his birth certificate?", "我的外籍丈夫也需要出生证明吗？", "我的外籍丈夫也需要出生證明書嗎？"),
    l("documents", "Sim. Traga-a e indique se existe convenção antenupcial.", "Yes. Bring it and state whether there is a prenuptial agreement.", "需要。请带上，并说明是否有婚前协议。", "需要。請帶同，並說明是否有婚前協議。"),
    l("legalisation", "A certidão chinesa tem de ser legalizada e traduzida?", "Must the Chinese certificate be legalised and translated?", "中国证明需要认证和翻译吗？", "中國證明書需要認證和翻譯嗎？"),
    l("legalisation", "Vamos verificar a legalização e se a tradução certificada é necessária.", "We will check the legalisation and whether a certified translation is required.", "我们会核查认证要求以及是否需要认证翻译。", "我們會核查認證要求以及是否需要核證翻譯。"),
    l("timing", "Quanto tempo demora e como sei que ficou concluído?", "How long does it take, and how will I know it is complete?", "需要多长时间？我怎样知道手续已完成？", "需要多長時間？我怎樣知道手續已完成？"),
    l("tracking", "Guarde a referência do processo; o serviço contacta-a se faltar algum documento.", "Keep the case reference; the office will contact you if a document is missing.", "请保存申请编号；如缺少文件，登记处会联系您。", "請保留申請編號；如欠缺文件，登記處會聯絡您。")
  ],
  camara_municipal: [
    l("opening", "Bom dia. Quero comunicar um buraco perigoso no passeio.", "Good morning. I want to report a dangerous hole in the pavement.", "早上好。我想报告人行道上一个危险的坑。", "早晨。我想報告行人路上一個危險的坑。"),
    l("details", "Pode indicar a rua e o número de porta mais próximo?", "Can you give the street and nearest door number?", "可以提供街道和最近的门牌号吗？", "可以提供街道和最近的門牌號碼嗎？"),
    l("details", "É na Rua das Flores, em frente ao número vinte.", "It is on Rua das Flores, opposite number twenty.", "在花街二十号对面。", "在花街二十號對面。"),
    l("evidence", "Tem uma fotografia que mostre o problema?", "Do you have a photograph showing the problem?", "您有显示问题的照片吗？", "您有顯示問題的相片嗎？"),
    l("evidence", "Sim. Posso anexá-la ao pedido.", "Yes. I can attach it to the report.", "有。我可以把照片附在报告中。", "有。我可以把相片附在報告中。"),
    l("submission", "Pode submeter no portal do município ou deixá-la aqui no atendimento.", "You can submit it on the municipal portal or leave it here at the service desk.", "可以在市政府网站提交，也可以在这里办理。", "可以在市政府網站提交，也可以在這裡辦理。"),
    l("priority", "Há risco de alguém cair. Pode ser tratado como urgente?", "Someone could fall. Can it be treated as urgent?", "有人可能摔倒。可以按紧急情况处理吗？", "有人可能跌倒。可以按緊急情況處理嗎？"),
    l("priority", "Vou assinalar o risco à equipa responsável.", "I will flag the risk to the responsible team.", "我会向负责部门标明这一风险。", "我會向負責部門標明這項風險。"),
    l("tracking", "Pode dar-me o número da ocorrência?", "Can you give me the report reference number?", "可以给我报告编号吗？", "可以給我報告編號嗎？"),
    l("tracking", "Sim. Com este número pode acompanhar a resposta do município.", "Yes. You can use this number to follow the council's response.", "可以。您可以用这个编号查询市政府的处理进度。", "可以。您可以用這個編號查詢市政府的處理進度。")
  ],
  reconhecimento_diplomas: [
    l("opening", "Bom dia. Quero pedir o reconhecimento do meu diploma estrangeiro.", "Good morning. I want to apply for recognition of my foreign diploma.", "早上好。我想申请外国文凭认可。", "早晨。我想申請外國文憑認可。"),
    l("route", "Precisa apenas do grau ou também do curso e da área científica?", "Do you need only the degree level, or also the course and subject area?", "您只需要认可学位等级，还是还要认可专业和学科领域？", "您只需要認可學位級別，還是也要認可課程和學科範疇？"),
    l("route", "Preciso que o meu mestrado em engenharia seja reconhecido nessa área.", "I need my master's in engineering recognised in that subject area.", "我需要工程学硕士在该专业领域获得认可。", "我需要工程學碩士在該專業範疇獲得認可。"),
    l("route", "Nesse caso, verifique o reconhecimento específico; o automático só se aplica a diplomas da lista.", "In that case, check specific recognition; automatic recognition only applies to listed diplomas.", "这种情况请查看专业认可；自动认可只适用于名单内的文凭。", "這種情況請查看特定認可；自動認可只適用於名單內的文憑。"),
    l("submission", "O pedido é entregue diretamente na universidade?", "Is the application submitted directly to the university?", "申请要直接交给大学吗？", "申請要直接交給大學嗎？"),
    l("submission", "É submetido no formulário online, onde escolhe a instituição responsável.", "It is submitted through the online form, where you choose the responsible institution.", "请通过在线表格提交，并在表格中选择负责机构。", "請透過網上表格提交，並在表格中選擇負責機構。"),
    l("documents", "Vou anexar o diploma e o certificado com disciplinas e notas.", "I will attach the diploma and transcript with subjects and grades.", "我会上传文凭及载有课程和成绩的成绩单。", "我會上載文憑及載有科目和成績的成績單。"),
    l("documents", "Confirme também as regras de autenticação e tradução dos documentos.", "Also check the authentication and translation rules for the documents.", "还请确认文件认证和翻译要求。", "還請確認文件認證和翻譯要求。"),
    l("cost", "O preço e o prazo são iguais para todos os tipos?", "Are the price and deadline the same for every type?", "所有认可类型的费用和期限都一样吗？", "所有認可類型的費用和期限都一樣嗎？"),
    l("timing", "Não. Dependem do tipo e da instituição; o prazo conta após o processo estar completo.", "No. They depend on the type and institution; the deadline starts once the file is complete.", "不一样，取决于认可类型和机构；期限从材料齐全后开始计算。", "不一樣，視乎認可類型和機構；期限由文件齊全後開始計算。")
  ],
  consulado_documentos: [
    l("opening", "Bom dia. Preciso de fazer uma procuração para usar em Portugal.", "Good morning. I need to make a power of attorney for use in Portugal.", "早上好。我需要办理一份在葡萄牙使用的授权书。", "早晨。我需要辦理一份在葡萄牙使用的授權書。"),
    l("appointment", "Já marcou atendimento no portal consular?", "Have you booked an appointment on the consular portal?", "您已经在领事服务网站预约了吗？", "您已經在領事服務網站預約了嗎？"),
    l("appointment", "Sim. Queria confirmar o que tenho de levar.", "Yes. I would like to confirm what I must bring.", "预约了。我想确认需要带什么。", "預約了。我想確認需要帶甚麼。"),
    l("documents", "Traga o passaporte válido e o texto da procuração.", "Bring your valid passport and the power-of-attorney text.", "请带有效护照和授权书文本。", "請帶有效護照和授權書文本。"),
    l("signature", "Posso trazer o documento já assinado?", "Can I bring the document already signed?", "可以把已经签好的文件带来吗？", "可以把已經簽署的文件帶來嗎？"),
    l("signature", "Não. Deve assinar perante o funcionário consular.", "No. You must sign in front of the consular officer.", "不可以。您必须在领事工作人员面前签字。", "不可以。您必須在領事職員面前簽署。"),
    l("cost", "Quanto custa e que meios de pagamento aceitam?", "How much does it cost, and which payment methods do you accept?", "费用是多少？接受哪些付款方式？", "費用是多少？接受哪些付款方式？"),
    l("cost", "O valor e o pagamento dependem do posto; confirme na tabela consular.", "The fee and payment method depend on the post; check the consular fee table.", "费用和付款方式因领事机构而异，请查看领事收费表。", "費用和付款方式視乎領事機構，請查看領事收費表。"),
    l("collection", "O documento fica pronto no próprio dia?", "Will the document be ready the same day?", "文件当天能办好吗？", "文件當天能辦妥嗎？"),
    l("timing", "Confirmaremos o prazo quando verificarmos o documento.", "We will confirm the timeframe after checking the document.", "核查文件后，我们会确认办理时间。", "核查文件後，我們會確認辦理時間。")
  ]
};

const card = {
  espaco_cidadao: [
    l("other-service", "Quero alterar e confirmar a morada do Cartão de Cidadão.", "I want to change and confirm the address on my Citizen Card.", "我想更改并确认公民卡地址。", "我想更改並確認公民證地址。"),
    l("availability", "Este balcão faz renovação da carta de condução?", "Does this desk renew driving licences?", "这个服务台可以续期驾驶证吗？", "這個服務台可以續期駕駛執照嗎？"),
    l("documents", "Falta algum documento para concluir o serviço?", "Is any document missing to complete the service?", "办完这项服务还缺什么文件吗？", "辦妥這項服務還欠甚麼文件嗎？"),
    l("cost", "Este serviço tem algum custo?", "Is there a fee for this service?", "这项服务收费吗？", "這項服務收費嗎？"),
    l("assistance", "Pode mostrar-me como fazer isto online da próxima vez?", "Can you show me how to do this online next time?", "可以教我下次怎样在线办理吗？", "可以教我下次怎樣在網上辦理嗎？"),
    l("recovery", "Pode repetir o último passo mais devagar?", "Can you repeat the last step more slowly?", "可以慢一点重复最后一个步骤吗？", "可以慢一點重複最後一個步驟嗎？"),
    l("confirmation", "Preciso de confirmar a alteração depois?", "Do I need to confirm the change afterwards?", "之后还需要确认更改吗？", "之後還需要確認更改嗎？"),
    l("tracking", "Onde posso consultar o estado deste pedido?", "Where can I check the status of this request?", "在哪里可以查询这项申请的状态？", "在哪裡可以查詢這項申請的狀態？")
  ],
  imt_carta_conducao: [
    l("eligibility", "Posso conduzir em Portugal com esta carta?", "Can I drive in Portugal with this licence?", "我可以持这本驾驶证在葡萄牙驾驶吗？", "我可以持這本駕駛執照在葡萄牙駕駛嗎？"),
    l("deadline", "Qual é o prazo para fazer a troca?", "What is the deadline for exchanging it?", "换领期限是多久？", "換領期限是多久？"),
    l("appointment", "Preciso de ir a um balcão ou basta o pedido online?", "Must I visit a desk, or is the online application enough?", "需要到服务台办理，还是在线申请即可？", "需要到服務櫃位辦理，還是網上申請即可？"),
    l("documents", "Qual destes documentos ainda falta?", "Which of these documents is still missing?", "这些文件中还缺哪一份？", "這些文件中還欠哪一份？"),
    l("payment", "Onde encontro a referência para pagar?", "Where can I find the payment reference?", "在哪里可以找到付款编号？", "在哪裡可以找到付款編號？"),
    l("temporary-proof", "Recebo algum comprovativo enquanto espero pela nova carta?", "Will I receive proof while waiting for the new licence?", "等待新驾驶证期间会收到临时凭证吗？", "等候新駕駛執照期間會收到臨時證明嗎？"),
    l("problem", "Recebi um pedido de documentos adicionais.", "I received a request for additional documents.", "我收到补交文件的通知。", "我收到補交文件的通知。"),
    l("tracking", "A referência do meu pedido é esta.", "This is my application reference.", "这是我的申请编号。", "這是我的申請編號。")
  ],
  conservatoria_registo_civil: [
    l("other-service", "Quero pedir uma certidão de nascimento em papel.", "I want to request a paper birth certificate.", "我想申请纸质出生证明。", "我想申請紙本出生證明書。"),
    l("format", "Preciso de uma certidão de cópia integral.", "I need a full-form certificate.", "我需要完整副本证明。", "我需要完整副本證明書。"),
    l("format", "Posso receber um código de acesso à certidão online?", "Can I receive an access code for the online certificate?", "可以取得在线证明的访问码吗？", "可以取得網上證明書的存取碼嗎？"),
    l("cost", "Quanto custa esta certidão?", "How much does this certificate cost?", "这份证明多少钱？", "這份證明書多少錢？"),
    l("correction", "Há um erro no nome que consta do registo.", "There is an error in the name recorded in the registry.", "登记中的姓名有错误。", "登記中的姓名有錯誤。"),
    l("documents", "Como posso entregar o documento que falta?", "How can I provide the missing document?", "怎样补交缺少的文件？", "怎樣補交欠缺的文件？"),
    l("collection", "A certidão é enviada ou tenho de a levantar?", "Will the certificate be sent, or must I collect it?", "证明会寄出，还是需要领取？", "證明書會寄出，還是需要領取？"),
    l("tracking", "Quero saber em que estado está o processo.", "I want to know the current status of the case.", "我想查询手续的当前状态。", "我想查詢手續的目前狀態。")
  ],
  camara_municipal: [
    l("parking", "Quero pedir um dístico de estacionamento para residente.", "I want to apply for a resident parking permit.", "我想申请居民停车证。", "我想申請居民泊車證。"),
    l("waste", "Como marco a recolha de um sofá e de um colchão?", "How do I arrange collection of a sofa and mattress?", "怎样预约收取沙发和床垫？", "怎樣預約收取梳化和床褥？"),
    l("licence", "Preciso de licença para fazer estas obras?", "Do I need a permit for this building work?", "进行这些工程需要许可证吗？", "進行這些工程需要許可證嗎？"),
    l("noise", "Quero apresentar uma reclamação por causa do ruído.", "I want to make a complaint about noise.", "我想投诉噪音问题。", "我想投訴噪音問題。"),
    l("appointment", "Este assunto precisa de marcação no atendimento municipal?", "Does this matter require an appointment at the municipal office?", "这项事务需要预约市政府服务吗？", "這項事務需要預約市政府服務嗎？"),
    l("documents", "Que comprovativos tenho de juntar ao requerimento?", "Which supporting documents must I attach to the application?", "申请需要附上哪些证明文件？", "申請需要附上哪些證明文件？"),
    l("cost", "Onde posso consultar as taxas municipais?", "Where can I check the municipal fees?", "在哪里可以查询市政费用？", "在哪裡可以查詢市政費用？"),
    l("tracking", "Ainda não recebi resposta ao meu requerimento.", "I have not yet received a response to my application.", "我的申请还没有收到回复。", "我的申請還沒有收到回覆。")
  ],
  reconhecimento_diplomas: [
    l("route", "O meu diploma consta da lista de reconhecimento automático?", "Is my diploma on the automatic-recognition list?", "我的文凭在自动认可名单中吗？", "我的文憑在自動認可名單中嗎？"),
    l("profession", "Esta é uma profissão regulamentada em Portugal?", "Is this a regulated profession in Portugal?", "这是葡萄牙的受监管职业吗？", "這是葡萄牙的受規管職業嗎？"),
    l("translation", "Aceitam estes documentos em inglês ou precisam de tradução?", "Do you accept these documents in English, or is a translation required?", "这些英文文件可以接受，还是需要翻译？", "這些英文文件可以接受，還是需要翻譯？"),
    l("payment", "Já paguei. Onde envio o comprovativo?", "I have paid. Where do I send the receipt?", "我已经付款。付款凭证要发到哪里？", "我已經付款。付款證明要傳送到哪裡？"),
    l("problem", "O formulário dá erro quando tento anexar o diploma.", "The form shows an error when I try to attach the diploma.", "上传文凭时表格显示错误。", "上載文憑時表格顯示錯誤。"),
    l("documents", "Posso acrescentar um documento ao pedido já submetido?", "Can I add a document to an application already submitted?", "已提交的申请可以补充文件吗？", "已提交的申請可以補充文件嗎？"),
    l("grade", "Também quero pedir a conversão da classificação final.", "I also want to request conversion of my final grade.", "我还想申请最终成绩换算。", "我還想申請最終成績換算。"),
    l("tracking", "Vou contactar a instituição e indicar a referência do pedido.", "I will contact the institution and give the application reference.", "我会联系负责机构并提供申请编号。", "我會聯絡負責機構並提供申請編號。")
  ],
  consulado_documentos: [
    l("passport", "Quero renovar o passaporte. Que documentos devo levar?", "I want to renew my passport. Which documents should I bring?", "我想续期护照。需要带哪些文件？", "我想續期護照。需要帶哪些文件？"),
    l("emergency", "Perdi o passaporte e preciso de viajar com urgência.", "I lost my passport and need to travel urgently.", "我丢了护照，需要紧急出行。", "我遺失了護照，需要緊急出行。"),
    l("legalisation", "Este documento precisa de apostila ou de legalização consular?", "Does this document need an apostille or consular legalisation?", "这份文件需要海牙认证还是领事认证？", "這份文件需要海牙認證還是領事認證？"),
    l("signature", "Quero reconhecer a minha assinatura neste documento.", "I want to have my signature certified on this document.", "我想认证这份文件上的签名。", "我想核證這份文件上的簽名。"),
    l("civil-record", "Quero registar em Portugal o meu casamento no estrangeiro.", "I want to register my foreign marriage in Portugal.", "我想在葡萄牙登记我的境外婚姻。", "我想在葡萄牙登記我的海外婚姻。"),
    l("appointment", "Não encontro horários disponíveis para marcação.", "I cannot find any available appointment times.", "我找不到可预约的时间。", "我找不到可預約的時間。"),
    l("documents", "Pode confirmar se esta cópia tem de ser autenticada?", "Can you confirm whether this copy must be certified?", "可以确认这份副本是否需要认证吗？", "可以確認這份副本是否需要核證嗎？"),
    l("tracking", "Como acompanho o pedido depois de o entregar?", "How can I track the request after submitting it?", "提交后怎样查询申请进度？", "提交後怎樣查詢申請進度？")
  ]
};

const targetIds = new Set(Object.keys(dialogue));
let dialogues = existingDialogues.filter((line) => !targetIds.has(line.situacao));
let cards = existingCards.filter((line) => !targetIds.has(line.situacao));
let dialogueOrder = Math.max(0, ...dialogues.map((line) => line.order));
let cardOrder = Math.max(0, ...cards.map((line) => line.order));

for (const situacao of targetIds) {
  dialogues.push(...dialogue[situacao].map((line) => ({
    id: `dialogo-${situacao}-${slug(line.pt)}`,
    situacao,
    order: ++dialogueOrder,
    ...line
  })));
  cards.push(...card[situacao].map((line) => ({
    id: `cartao-${situacao}-${slug(line.pt)}`,
    situacao,
    order: ++cardOrder,
    ...line
  })));
}

source = set("situacaoDialogueLines", dialogues);
source = set("situacaoCheatSheetLines", cards);
writeFileSync(dataPath, source);

for (const situacao of targetIds) {
  console.log(`${situacao}: ${dialogue[situacao].length} dialogue lines, ${card[situacao].length} card phrases`);
}

function l(purpose, pt, en, zhHans, zhHant) {
  return { purpose, pt, en, zhHans, zhHant };
}
function get(name) {
  const start = source.indexOf(`export const ${name}:`);
  const assignment = source.indexOf(" = ", start);
  const end = source.indexOf(";\n", assignment);
  return JSON.parse(source.slice(assignment + 3, end));
}
function set(name, value) {
  const start = source.indexOf(`export const ${name}:`);
  const assignment = source.indexOf(" = ", start);
  const end = source.indexOf(";\n", assignment);
  return `${source.slice(0, assignment + 3)}${JSON.stringify(value, null, 2)}${source.slice(end)}`;
}
function slug(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/gu, "").toLowerCase().replace(/[^a-z0-9]+/gu, "-").replace(/^-|-$/gu, "");
}
