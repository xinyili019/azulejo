import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dataPath = join(root, "src", "data", "situacoes.ts");
const manualDataPath = join(root, "src", "data", "vocabulary.ts");
const audioIdsPath = join(root, "scripts", "expanded-situacoes-audio-ids.txt");
let source = readFileSync(dataPath, "utf8");
const manualVocabulary = JSON.parse(
  readFileSync(manualDataPath, "utf8").match(
    /export const vocabulary: VocabularyEntry\[] = ([\s\S]*?) satisfies VocabularyEntry\[];/
  )?.[1] ?? "[]"
);
const manualById = new Map(manualVocabulary.map((entry) => [entry.id, entry]));

const groups = get("situacaoGroups");
const vocabulary = get("situacaoVocabularyRows");
const dialogues = get("situacaoDialogueLines");
let cards = get("situacaoCheatSheetLines");
const situationIds = groups.flatMap((group) => group.items.map((item) => item.id));

const redundantGymCards = new Set([normalize("Qual é o horário?"), normalize("Preciso de trazer toalha?")]);
cards = cards.filter(
  (line) =>
    (line.situacao !== "ginasio" || !redundantGymCards.has(normalize(line.pt))) &&
    line.purpose !== "useful situation example"
);

const additions = {
  correios: [
    l("Passado esse prazo, a encomenda regressa à loja dos CTT.", "After that deadline, the parcel returns to the CTT post office.", "超过期限后，包裹会退回 CTT 邮局。", "超過期限後，包裹會退回 CTT 郵局。")
  ],
  espaco_cidadao: [
    l("Também preciso de alterar a morada do Cartão de Cidadão.", "I also need to change the address on my Citizen Card.", "我还需要更改公民卡上的地址。", "我還需要更改公民證上的地址。"),
    l("Tem consigo os códigos PIN e um comprovativo da nova morada?", "Do you have the PIN codes and proof of the new address with you?", "您带了 PIN 码和新地址证明吗？", "您帶了 PIN 碼和新地址證明嗎？"),
    l("Tenho os códigos, mas o contrato da casa está no nome da minha mulher.", "I have the codes, but the tenancy agreement is in my wife's name.", "我有 PIN 码，但租房合同是我妻子的名字。", "我有 PIN 碼，但租約是我妻子的名字。"),
    l("Pode apresentar o contrato e uma declaração assinada por ela.", "You can present the agreement and a declaration signed by her.", "您可以提交合同和她签署的声明。", "您可以提交租約和她簽署的聲明。"),
    l("A alteração fica concluída hoje?", "Will the change be completed today?", "今天能完成更改吗？", "今天能完成更改嗎？"),
    l("Primeiro recebe uma carta com um código de confirmação na nova morada.", "First, you will receive a letter with a confirmation code at the new address.", "您会先在新地址收到一封带确认码的信。", "您會先在新地址收到一封附有確認碼的信。"),
    l("Posso confirmar o código aqui no balcão?", "Can I confirm the code here at the service desk?", "我可以在这里的服务台确认吗？", "我可以在這裡的服務櫃位確認嗎？"),
    l("Sim, ou pela internet, dentro do prazo indicado na carta.", "Yes, or online, within the deadline stated in the letter.", "可以，也可以在信中注明的期限内在线确认。", "可以，也可以在信中註明的期限內網上確認。"),
    l("E se a carta não chegar?", "What if the letter does not arrive?", "如果信没有寄到怎么办？", "如果信沒有寄到怎麼辦？"),
    l("Volte ao balcão para verificarmos a morada e pedirmos um novo código.", "Come back to the desk so we can check the address and request a new code.", "请回到服务台，我们会核对地址并申请新代码。", "請回到服務櫃位，我們會核對地址並申請新代碼。")
  ],
  imt_carta_conducao: [
    l("A minha carta portuguesa caduca no próximo mês.", "My Portuguese driving licence expires next month.", "我的葡萄牙驾驶证下个月到期。", "我的葡萄牙駕駛執照下個月到期。"),
    l("Pode pedir a renovação nos seis meses anteriores à data de validade.", "You can request renewal during the six months before the expiry date.", "您可以在有效期届满前六个月内申请续期。", "您可以在有效期屆滿前六個月內申請續期。"),
    l("Preciso de fazer um novo atestado médico?", "Do I need a new medical certificate?", "我需要重新办理体检证明吗？", "我需要重新辦理醫療證明嗎？"),
    l("Depende da sua idade e das categorias da carta.", "It depends on your age and the licence categories.", "这取决于您的年龄和驾驶证类别。", "這取決於您的年齡和駕駛執照類別。"),
    l("Mudei de morada. Tenho de atualizar a carta?", "I have changed address. Must I update the licence?", "我搬家了，需要更新驾驶证吗？", "我搬家了，需要更新駕駛執照嗎？"),
    l("A morada deve estar atualizada nos seus dados de identificação.", "Your address must be current in your identification records.", "您的身份资料中必须登记最新地址。", "您的身份資料中必須登記最新地址。"),
    l("Enquanto espero, posso continuar a conduzir?", "Can I keep driving while I wait?", "等待期间我可以继续驾驶吗？", "等候期間我可以繼續駕駛嗎？"),
    l("Guarde o comprovativo do pedido e confirme a validade indicada.", "Keep the application receipt and check the validity shown on it.", "请保留申请凭证，并确认上面注明的有效期。", "請保留申請證明，並確認上面註明的有效期。"),
    l("Como recebo a nova carta?", "How will I receive the new licence?", "新驾驶证会怎样寄给我？", "新駕駛執照會怎樣寄給我？"),
    l("É enviada para a morada registada; acompanhe o pedido no portal.", "It is sent to the registered address; track the application on the portal.", "会寄到登记地址；您可以在网站查询进度。", "會寄到登記地址；您可以在網站查詢進度。")
  ],
  conservatoria_registo_civil: [
    l("Queria pedir uma certidão de nascimento para usar no estrangeiro.", "I would like to request a birth certificate for use abroad.", "我想申请一份在国外使用的出生证明。", "我想申請一份在海外使用的出生證明書。"),
    l("Precisa de uma certidão narrativa ou de cópia integral?", "Do you need a standard certificate or a full-form copy?", "您需要叙述式证明还是完整副本？", "您需要敘述式證明書還是完整副本？"),
    l("Pediram-me uma cópia integral com apostila.", "They asked me for a full-form copy with an apostille.", "对方要求完整副本并附加海牙认证。", "對方要求完整副本並附加海牙認證。"),
    l("A certidão é pedida aqui; a apostila é tratada pela entidade competente.", "The certificate is requested here; the apostille is handled by the competent authority.", "证明在这里申请；海牙认证由主管机构办理。", "證明書在這裡申請；海牙認證由主管機構辦理。"),
    l("Notei que o apelido da minha mãe está mal escrito.", "I noticed that my mother's surname is misspelled.", "我发现母亲的姓氏拼错了。", "我發現母親的姓氏拼錯了。"),
    l("Traga um documento que comprove a grafia correta.", "Bring a document proving the correct spelling.", "请带一份能证明正确写法的文件。", "請帶一份能證明正確寫法的文件。"),
    l("Posso pedir a correção e a certidão ao mesmo tempo?", "Can I request the correction and the certificate at the same time?", "我可以同时申请更正和证明吗？", "我可以同時申請更正和證明書嗎？"),
    l("A certidão deve ser emitida depois de a correção ficar registada.", "The certificate should be issued after the correction is registered.", "证明应在更正登记完成后签发。", "證明書應在更正登記完成後簽發。"),
    l("Recebo um aviso quando estiver pronta?", "Will I be notified when it is ready?", "办好后会通知我吗？", "辦妥後會通知我嗎？"),
    l("Sim. Confirme o email e o número de telemóvel no requerimento.", "Yes. Confirm your email and mobile number on the application.", "会。请在申请表中确认邮箱和手机号码。", "會。請在申請表中確認電郵和手提電話號碼。")
  ],
  camara_municipal: [
    l("Também preciso de mandar recolher um sofá velho.", "I also need to arrange collection of an old sofa.", "我还需要预约回收一张旧沙发。", "我還需要預約回收一張舊梳化。"),
    l("A recolha de monos é marcada pelo telefone ou pelo portal municipal.", "Bulky-waste collection is booked by phone or on the municipal portal.", "大件垃圾回收可通过电话或市政府网站预约。", "大型廢物回收可透過電話或市政府網站預約。"),
    l("Posso deixá-lo junto aos contentores esta noite?", "Can I leave it beside the bins tonight?", "今晚可以把它放在垃圾箱旁吗？", "今晚可以把它放在垃圾箱旁嗎？"),
    l("Só depois de receber a data e as instruções da recolha.", "Only after you receive the collection date and instructions.", "请先等到收到回收日期和指示后再放。", "請先等到收到回收日期和指示後再放。"),
    l("Há algum custo para uma recolha doméstica?", "Is there a fee for a household collection?", "家庭大件垃圾回收收费吗？", "家居大型廢物回收收費嗎？"),
    l("Consulte as condições do seu município quando fizer a marcação.", "Check your municipality's conditions when you book.", "预约时请查看您所在市政府的规定。", "預約時請查看您所屬市政府的規定。"),
    l("Quero ainda comunicar barulho de obras fora do horário.", "I also want to report building noise outside permitted hours.", "我还想投诉非施工时段的装修噪音。", "我還想投訴非施工時段的裝修噪音。"),
    l("Registe os dias, as horas e a morada onde ocorre o ruído.", "Record the dates, times, and address where the noise occurs.", "请记录噪音发生的日期、时间和地址。", "請記錄噪音發生的日期、時間和地址。"),
    l("A situação acontece quase todas as noites.", "It happens almost every night.", "这种情况几乎每晚都发生。", "這種情況幾乎每晚都發生。"),
    l("Se estiver a acontecer agora, contacte também as autoridades policiais.", "If it is happening now, also contact the police authorities.", "如果现在正在发生，也请联系警方。", "如果現在正在發生，也請聯絡警方。")
  ],
  reconhecimento_diplomas: [
    l("A minha profissão é regulamentada em Portugal?", "Is my profession regulated in Portugal?", "我的职业在葡萄牙属于受监管职业吗？", "我的職業在葡萄牙屬於受規管職業嗎？"),
    l("Consulte a autoridade competente antes de escolher o tipo de reconhecimento.", "Check with the competent authority before choosing the recognition type.", "选择认可类型前，请先咨询主管机构。", "選擇認可類型前，請先向主管機構查詢。"),
    l("Os meus documentos estão em inglês. Preciso de tradução?", "My documents are in English. Do I need a translation?", "我的文件是英文的，需要翻译吗？", "我的文件是英文的，需要翻譯嗎？"),
    l("Confirme as regras da instituição que vai analisar o pedido.", "Check the rules of the institution that will assess the application.", "请确认负责审核申请的机构要求。", "請確認負責審核申請的院校規定。"),
    l("O portal dá erro quando tento anexar o certificado.", "The portal shows an error when I try to attach the transcript.", "我上传成绩单时网站报错。", "我上載成績單時網站出錯。"),
    l("Verifique o formato e o tamanho do ficheiro antes de tentar novamente.", "Check the file format and size before trying again.", "重新尝试前，请检查文件格式和大小。", "再次嘗試前，請檢查檔案格式和大小。"),
    l("Já submeti o pedido, mas falta uma disciplina no certificado.", "I have submitted the application, but one subject is missing from the transcript.", "我已经提交申请，但成绩单上少了一门课程。", "我已經提交申請，但成績單上欠了一門科目。"),
    l("Contacte a instituição e indique a referência antes de enviar outro ficheiro.", "Contact the institution and give the reference before sending another file.", "发送新文件前，请联系机构并提供申请编号。", "傳送新檔案前，請聯絡院校並提供申請編號。"),
    l("Também posso pedir a conversão da classificação final?", "Can I also request conversion of the final grade?", "我也可以申请最终成绩换算吗？", "我也可以申請最終成績換算嗎？"),
    l("Sim, mas confirme se esse serviço está incluído no pedido escolhido.", "Yes, but check whether that service is included in the chosen application.", "可以，但请确认所选申请是否包含这项服务。", "可以，但請確認所選申請是否包括這項服務。")
  ],
  consulado_documentos: [
    l("Perdi o passaporte e tenho uma viagem marcada para sexta-feira.", "I lost my passport and have a trip booked for Friday.", "我丢了护照，星期五有行程。", "我遺失了護照，星期五有行程。"),
    l("Já apresentou a denúncia na polícia local?", "Have you already filed a report with the local police?", "您已经向当地警方报案了吗？", "您已經向當地警方報案了嗎？"),
    l("Sim. Trouxe a participação e uma cópia do passaporte.", "Yes. I brought the police report and a copy of the passport.", "报案了。我带了报案证明和护照复印件。", "報案了。我帶了報案證明和護照副本。"),
    l("Vamos avaliar se pode ser emitido um documento de viagem de emergência.", "We will assess whether an emergency travel document can be issued.", "我们会评估能否签发紧急旅行证件。", "我們會評估能否簽發緊急旅行證件。"),
    l("Esse documento serve para regressar ao meu país?", "Can that document be used to return to my country?", "这份证件可以用来返回我的国家吗？", "這份證件可以用來返回我的國家嗎？"),
    l("A validade e o percurso permitido são explicados quando for emitido.", "Its validity and permitted route will be explained when it is issued.", "签发时会说明有效期和允许的路线。", "簽發時會說明有效期和允許的路線。"),
    l("Preciso de fotografias e de outra identificação?", "Do I need photographs and another form of identification?", "我需要照片和其他身份证明吗？", "我需要相片和其他身份證明嗎？"),
    l("Traga tudo o que tiver; o posto confirma os documentos necessários.", "Bring everything you have; the consular post will confirm what is required.", "请带上所有现有材料；领事机构会确认所需文件。", "請帶備所有現有資料；領事機構會確認所需文件。"),
    l("Posso receber o documento antes da viagem?", "Can I receive the document before the trip?", "我能在出发前拿到证件吗？", "我能在出發前拿到證件嗎？"),
    l("Vamos registar a urgência, mas só confirmamos o prazo depois da análise.", "We will record the urgency, but can only confirm the timing after assessment.", "我们会登记紧急情况，但只能在审核后确认时间。", "我們會登記緊急情況，但只能在審核後確認時間。")
  ],
  arrendamento: [
    l("Faço a vistoria consigo e envio a transferência depois de entregar as chaves.", "I will inspect the property with you and transfer the deposit after you return the keys.", "我会和您一起验房，交还钥匙后转还押金。", "我會和您一起驗樓，交還鎖匙後轉還按金。")
  ],
  transportes: [
    l("Obrigado. Onde posso validar antes da próxima viagem?", "Thank you. Where can I validate before my next journey?", "谢谢。下次乘车前在哪里验证？", "謝謝。下次乘車前在哪裡拍卡？"),
    l("Use a máquina junto à porta ou ao acesso à plataforma.", "Use the machine by the door or at the platform entrance.", "请使用车门旁或站台入口处的机器。", "請使用車門旁或月台入口的拍卡機。"),
    l("Percebi. Vou validar sempre, mesmo com o passe mensal.", "I understand. I will always validate, even with a monthly pass.", "明白了。即使使用月票，我也会每次验证。", "明白了。即使用月票，我也會每次拍卡。")
  ],
  veterinario: [
    l("Quando ficam prontos os resultados das análises?", "When will the test results be ready?", "检查结果什么时候出来？", "化驗結果甚麼時候有？"),
    l("Amanhã de manhã telefonamos-lhe com os resultados.", "We will call you tomorrow morning with the results.", "明天上午我们会打电话告知结果。", "明天上午我們會致電告知結果。"),
    l("Até lá, posso dar-lhe comida ou água?", "Until then, may I give him food or water?", "在此之前可以给它吃东西或喝水吗？", "在此之前可以給牠吃東西或喝水嗎？"),
    l("Pode dar água; espere pelas nossas indicações antes de lhe dar comida.", "You may give water; wait for our instructions before giving food.", "可以喝水；喂食前请等我们的指示。", "可以喝水；餵食前請等我們的指示。")
  ],
  ginasio: [
    l("Há alguém que me explique como usar as máquinas?", "Is there someone who can explain how to use the machines?", "有人可以教我怎样使用器械吗？", "有人可以教我怎樣使用健身器械嗎？"),
    l("Sim, a avaliação inicial inclui uma orientação com um instrutor.", "Yes, the initial assessment includes guidance from an instructor.", "有，初次评估包括教练指导。", "有，初次評估包括教練指導。"),
    l("Tenho uma lesão no joelho. Devo avisar antes da aula?", "I have a knee injury. Should I mention it before the class?", "我的膝盖有伤，上课前需要说明吗？", "我的膝蓋有傷，上堂前需要說明嗎？"),
    l("Sim. Fale com o instrutor para adaptar os exercícios.", "Yes. Speak to the instructor so the exercises can be adapted.", "需要。请告诉教练，以便调整练习。", "需要。請告訴教練，以便調整練習。")
  ],
  convivio: [
    l("Queres que leve alguma coisa para o lanche?", "Would you like me to bring something for the snack?", "要我带点什么来吃吗？", "要我帶點甚麼來吃嗎？"),
    l("Traz fruta, se puderes. Eu levo sandes e água.", "Bring some fruit if you can. I will bring sandwiches and water.", "可以的话带些水果。我带三明治和水。", "可以的話帶些水果。我帶三文治和水。"),
    l("Está combinado. Manda-me a localização quando chegares.", "Agreed. Send me the location when you arrive.", "说好了。你到了以后把位置发给我。", "說好了。你到了之後把位置傳給我。"),
    l("Mando, sim. Até sábado!", "I will. See you on Saturday!", "好的，星期六见！", "好的，星期六見！")
  ],
  vizinhos: [
    l("Sabe a quem devo avisar sobre uma fuga na garagem?", "Do you know whom I should tell about a leak in the garage?", "您知道车库漏水应该通知谁吗？", "您知道車房漏水應該通知誰嗎？"),
    l("Avise a administradora do condomínio; o número está no átrio.", "Tell the condominium manager; the number is in the entrance hall.", "请通知物业管理员；大厅里有电话号码。", "請通知大廈管理公司；大堂有電話號碼。"),
    l("Vou tirar uma fotografia e ligar já.", "I will take a photograph and call now.", "我拍张照片马上打电话。", "我會拍張相片，現在就致電。"),
    l("Obrigado. Eu também vou afastar as caixas da água.", "Thank you. I will also move the boxes away from the water.", "谢谢。我也会把箱子移离积水。", "謝謝。我也會把紙箱移離積水。")
  ],
  cabeleireiro_barbeiro: [
    l("Queria também fazer madeixas, mas num tom natural.", "I would also like highlights, but in a natural shade.", "我还想挑染，但希望颜色自然。", "我還想挑染，但希望顏色自然。"),
    l("Podemos escolher a cor e fazer primeiro um teste numa madeixa.", "We can choose the colour and test it on one strand first.", "我们可以先选颜色，再用一小束头发测试。", "我們可以先選顏色，再用一小束頭髮測試。"),
    l("Quanto tempo demora o corte e a coloração?", "How long will the cut and colour take?", "剪发和染发需要多长时间？", "剪髮和染髮需要多長時間？"),
    l("Conte com cerca de duas horas; aviso antes de começar.", "Allow about two hours; I will let you know before we start.", "大约需要两小时；开始前我会告诉您。", "大約需要兩小時；開始前我會告訴您。")
  ],
  farmacia: [
    l("Posso tomar este medicamento com os outros que já tomo?", "Can I take this medicine with the others I already take?", "这种药可以和我正在服用的其他药一起吃吗？", "這種藥可以和我正在服用的其他藥一起吃嗎？"),
    l("Diga-me quais são ou mostre-me a sua lista de medicação.", "Tell me which ones they are, or show me your medication list.", "请告诉我药名，或出示您的用药清单。", "請告訴我藥名，或出示您的用藥清單。"),
    l("Tenho a lista no telemóvel. Pode verificar, por favor?", "I have the list on my phone. Could you check it, please?", "清单在手机里。可以帮我查看吗？", "清單在手提電話裡。可以幫我查看嗎？")
  ],
  supermercado_mercado: [
    l("Desculpe, esta embalagem está aberta. Posso trocá-la?", "Excuse me, this package is open. Can I exchange it?", "不好意思，这个包装开了，可以换吗？", "不好意思，這個包裝開了，可以換嗎？"),
    l("Sim. Leve-a ao apoio ao cliente com o talão.", "Yes. Take it to customer service with the receipt.", "可以，请带收据到顾客服务台。", "可以，請帶收據到顧客服務處。"),
    l("Na peixaria, pode arranjar este peixe para grelhar?", "At the fish counter, can you prepare this fish for grilling?", "在鱼柜台可以帮我把这条鱼处理好用来烤吗？", "在魚檔可以幫我把這條魚處理好用來燒烤嗎？"),
    l("Claro. Quer sem cabeça e aberto ao meio?", "Of course. Would you like the head removed and the fish split open?", "可以。要去头并从中间剖开吗？", "可以。要去頭並從中間切開嗎？"),
    l("Sim, por favor. E guarde as espinhas à parte.", "Yes, please. And keep the bones separately.", "好的，也请把鱼骨另外装起来。", "好的，也請把魚骨另外包起來。"),
    l("Com certeza. Fica pronto dentro de cinco minutos.", "Certainly. It will be ready in five minutes.", "没问题，五分钟后就好。", "沒問題，五分鐘後就好。"),
    l("Esta caixa é só para quem tem menos de dez artigos?", "Is this checkout only for people with fewer than ten items?", "这个收银台只供少于十件商品的顾客使用吗？", "這個收銀處只供少於十件貨品的顧客使用嗎？"),
    l("Sim. Para um carrinho cheio, use a caixa seguinte.", "Yes. For a full trolley, use the next checkout.", "是的。购物车装满的话，请用下一个收银台。", "是的。購物車裝滿的話，請用下一個收銀處。"),
    l("Esqueci-me de pesar as maçãs. Posso voltar atrás?", "I forgot to weigh the apples. Can I go back?", "我忘了给苹果称重，可以回去称吗？", "我忘了給蘋果磅重，可以回去磅嗎？"),
    l("Pode. Deixo a compra em espera enquanto as pesa.", "Yes. I will hold the transaction while you weigh them.", "可以。您去称重时，我先暂停结账。", "可以。您去磅重時，我先暫停結帳。"),
    l("O desconto não apareceu no total.", "The discount did not appear in the total.", "折扣没有显示在总额里。", "折扣沒有顯示在總額裡。"),
    l("Vou confirmar se a promoção exige o cartão da loja.", "I will check whether the offer requires the store card.", "我来确认这项优惠是否需要会员卡。", "我來確認這項優惠是否需要會員卡。")
  ],
  cafe_restaurante: [
    l("Queria reservar uma mesa para seis no sábado à noite.", "I would like to book a table for six on Saturday evening.", "我想预订星期六晚上六个人的桌位。", "我想預訂星期六晚上六個人的座位。"),
    l("A que horas e em nome de quem?", "At what time, and under what name?", "几点？用谁的名字预订？", "幾點？用誰的名字預訂？"),
    l("Às oito, em nome de Li. Vamos levar uma criança pequena.", "At eight, under Li. We will have a young child with us.", "八点，姓 Li。我们会带一个小孩。", "八點，姓 Li。我們會帶一個小孩。"),
    l("Temos cadeira de bebé. Quer a mesa numa zona mais tranquila?", "We have a high chair. Would you like a table in a quieter area?", "我们有儿童椅。您想坐在安静一点的区域吗？", "我們有兒童椅。您想坐在安靜一點的位置嗎？"),
    l("Sim, por favor. Uma pessoa do grupo é vegetariana.", "Yes, please. One person in the group is vegetarian.", "好的。我们有一位素食者。", "好的。我們有一位素食者。"),
    l("Temos duas opções vegetarianas e sopa sem carne.", "We have two vegetarian options and a meat-free soup.", "我们有两种素食选择和不含肉的汤。", "我們有兩款素食選擇和不含肉的湯。"),
    l("Podemos encomendar uma dose para levar?", "Can we order a portion to take away?", "我们可以点一份外带吗？", "我們可以點一份外賣嗎？"),
    l("Pode, mas a embalagem tem um custo de cinquenta cêntimos.", "Yes, but the container costs fifty cents.", "可以，但餐盒收费五十欧分。", "可以，但餐盒收費五十歐仙。"),
    l("O café está incluído no menu de almoço?", "Is coffee included in the lunch menu?", "午餐套餐包括咖啡吗？", "午餐套餐包括咖啡嗎？"),
    l("Inclui café ou chá, mas não inclui sobremesa.", "It includes coffee or tea, but not dessert.", "包括咖啡或茶，但不包括甜点。", "包括咖啡或茶，但不包括甜品。"),
    l("Pode trazer a conta quando tiver um momento?", "Could you bring the bill when you have a moment?", "您方便时可以把账单拿来吗？", "您方便時可以把帳單拿來嗎？"),
    l("Claro. Quer deixar a gorjeta no cartão ou em dinheiro?", "Of course. Would you like to leave the tip by card or in cash?", "好的。小费要刷卡还是付现金？", "好的。小費想用卡還是現金支付？")
  ],
  consultorio_medico: [
    l("Também queria falar da minha filha. Tem febre desde esta manhã.", "I would also like to discuss my daughter. She has had a fever since this morning.", "我还想咨询女儿的情况。她从今天早上开始发烧。", "我還想問女兒的情況。她由今天早上開始發燒。"),
    l("Que idade tem e qual foi a temperatura mais alta?", "How old is she, and what was the highest temperature?", "她几岁？最高体温是多少？", "她幾歲？最高體溫是多少？"),
    l("Tem quatro anos e chegou aos trinta e nove graus.", "She is four, and it reached thirty-nine degrees.", "她四岁，体温最高到三十九度。", "她四歲，體溫最高到三十九度。"),
    l("Está a beber líquidos e a urinar normalmente?", "Is she drinking fluids and urinating normally?", "她喝水和排尿正常吗？", "她飲水和小便正常嗎？"),
    l("Bebe pouco e diz que lhe dói o ouvido.", "She drinks very little and says her ear hurts.", "她喝得很少，还说耳朵痛。", "她飲得很少，還說耳朵痛。"),
    l("Vou observar o ouvido e pesar a criança antes de indicar a dose.", "I will examine her ear and weigh her before advising the dose.", "我会检查耳朵并先称体重，再确定剂量。", "我會檢查耳朵並先量體重，再確定劑量。"),
    l("Se a febre subir durante a noite, o que devo fazer?", "What should I do if the fever rises during the night?", "如果夜里体温升高，我该怎么办？", "如果夜間體溫升高，我應該怎麼辦？"),
    l("Ligue para o SNS 24; se tiver dificuldade em respirar, procure ajuda urgente.", "Call SNS 24; if she has difficulty breathing, seek urgent help.", "请致电 SNS 24；如果呼吸困难，请立即求助。", "請致電 SNS 24；如果呼吸困難，請立即求助。"),
    l("O medicamento deve ser dado antes ou depois de comer?", "Should the medicine be given before or after food?", "这种药要饭前还是饭后服用？", "這種藥要餐前還是餐後服用？"),
    l("Pode dar depois de uma refeição leve e respeitar o intervalo indicado.", "You can give it after a light meal and follow the stated interval.", "可以在少量进食后服用，并遵守规定的间隔。", "可以在少量進食後服用，並遵守指定的間隔。"),
    l("Quando devemos voltar para ser reavaliada?", "When should we come back for reassessment?", "我们什么时候需要回来复诊？", "我們甚麼時候需要回來覆診？"),
    l("Voltem se não melhorar em quarenta e oito horas ou se surgir outro sintoma.", "Come back if she does not improve within forty-eight hours or develops another symptom.", "如果四十八小时内没有好转或出现其他症状，请回来复诊。", "如果四十八小時內沒有好轉或出現其他症狀，請回來覆診。")
  ],
  casa_reparacoes: [
    l("A tomada da cozinha faz faísca quando ligo o forno.", "The kitchen socket sparks when I switch on the oven.", "我打开烤箱时，厨房插座会冒火花。", "我開焗爐時，廚房插座會冒火花。"),
    l("Não volte a usá-la e desligue esse circuito no quadro elétrico.", "Do not use it again, and switch off that circuit at the fuse box.", "请不要再使用，并在配电箱关闭该回路。", "請不要再使用，並在電箱關掉該電路。"),
    l("O eletricista consegue vir hoje?", "Can the electrician come today?", "电工今天能来吗？", "電工今天能來嗎？"),
    l("Consigo marcar uma urgência para o fim da tarde.", "I can book an emergency visit for late afternoon.", "我可以预约今天傍晚的紧急上门服务。", "我可以預約今天傍晚的緊急上門服務。"),
    l("A deslocação tem um preço fixo?", "Is there a fixed call-out fee?", "上门费是固定的吗？", "上門費是固定的嗎？"),
    l("Sim. A reparação e as peças são orçamentadas depois do diagnóstico.", "Yes. The repair and parts are quoted after diagnosis.", "是的。检查后会另行报价维修和零件费用。", "是的。檢查後會另行報價維修和零件費用。"),
    l("O autoclismo também fica sempre a correr.", "The toilet cistern also keeps running.", "马桶水箱也一直流水。", "坐廁水箱也一直流水。"),
    l("Peça ao canalizador para verificar a válvula quando estiver aí.", "Ask the plumber to check the valve while there.", "水管工到时请他也检查一下阀门。", "水喉匠到時請他也檢查一下水掣。"),
    l("Pode enviar-me a fatura e a garantia por email?", "Can you email me the invoice and warranty?", "可以把发票和保修通过邮件发给我吗？", "可以把發票和保養證明透過電郵傳給我嗎？"),
    l("Claro. Confirme o email quando assinar a folha de serviço.", "Of course. Confirm the email when you sign the service sheet.", "可以。签服务单时请确认邮箱。", "可以。簽署服務單時請確認電郵。"),
    l("Se a avaria voltar, há nova cobrança?", "If the fault returns, will there be another charge?", "如果故障再次出现，还会收费吗？", "如果故障再次出現，還會收費嗎？"),
    l("Se for a mesma avaria dentro da garantia, contacte-nos com o número da fatura.", "If it is the same fault within the warranty, contact us with the invoice number.", "如果在保修期内出现同一故障，请提供发票编号联系我们。", "如果在保養期內出現同一故障，請提供發票編號聯絡我們。")
  ],
  agua_luz_gas: [
    l("A fatura deste mês é muito mais alta do que o habitual.", "This month's bill is much higher than usual.", "这个月的账单比平时高很多。", "這個月的賬單比平時高很多。"),
    l("Pode confirmar se a leitura é real ou estimada?", "Can you check whether the reading is actual or estimated?", "您能确认这是实际读数还是估算读数吗？", "您能確認這是實際讀數還是估算讀數嗎？"),
    l("Diz que é estimada. Posso comunicar a leitura agora?", "It says it is estimated. Can I submit the reading now?", "上面写的是估算。我现在可以提交读数吗？", "上面寫的是估算。我現在可以提交讀數嗎？"),
    l("Sim. Diga os números que aparecem no contador.", "Yes. Tell me the numbers shown on the meter.", "可以。请告诉我计量表上显示的数字。", "可以。請告訴我錶上顯示的數字。"),
    l("Também ficámos sem eletricidade só neste apartamento.", "We have also lost power only in this flat.", "另外，只有我们这套公寓停电了。", "另外，只有我們這個單位停電了。"),
    l("Verifique primeiro o disjuntor e se há avisos de avaria na zona.", "First check the circuit breaker and whether there are outage notices for the area.", "请先检查断路器，并查看该地区是否有故障通知。", "請先檢查斷路器，並查看該區是否有故障通知。"),
    l("O disjuntor volta a desligar quando ligo o esquentador.", "The breaker trips again when I switch on the water heater.", "一开热水器，断路器就再次跳闸。", "一開熱水爐，斷路器就再次跳掣。"),
    l("Desligue o aparelho e chame um técnico qualificado.", "Switch off the appliance and call a qualified technician.", "请关闭设备并联系合资格技术人员。", "請關掉設備並聯絡合資格技術人員。"),
    l("Senti cheiro a gás no patamar do prédio.", "I smelled gas on the building landing.", "我在楼层走廊闻到燃气味。", "我在樓層走廊聞到煤氣味。"),
    l("Não acenda luzes, ventile se for seguro e ligue para a emergência do gás.", "Do not switch on lights; ventilate if safe and call the gas emergency line.", "不要开灯；在安全情况下通风，并拨打燃气紧急电话。", "不要開燈；在安全情況下通風，並致電煤氣緊急熱線。"),
    l("Tenho de sair do prédio?", "Do I need to leave the building?", "我需要离开大楼吗？", "我需要離開大廈嗎？"),
    l("Siga as instruções da linha de emergência e avise os vizinhos sem usar campainhas.", "Follow the emergency line's instructions and warn neighbours without using doorbells.", "请遵循紧急热线指示，并不要使用门铃，通知邻居。", "請遵從緊急熱線指示，並不要使用門鐘，通知鄰居。")
  ],
  telemovel_internet: [
    l("Queria um cartão pré-pago sem período de fidelização.", "I would like a prepaid SIM with no lock-in period.", "我想要一张没有合约期的预付费 SIM 卡。", "我想要一張沒有綁約期的預付費 SIM 卡。"),
    l("Precisa sobretudo de chamadas ou de dados móveis?", "Do you mainly need calls or mobile data?", "您主要需要通话还是移动数据？", "您主要需要通話還是流動數據？"),
    l("Preciso de muitos dados e de usar o telemóvel noutros países da União Europeia.", "I need plenty of data and to use the phone in other EU countries.", "我需要较多流量，并会在其他欧盟国家使用。", "我需要較多數據，並會在其他歐盟國家使用。"),
    l("Este tarifário inclui roaming na União Europeia, sujeito à política de utilização responsável.", "This plan includes EU roaming, subject to the fair-use policy.", "这个套餐包括欧盟漫游，但受公平使用政策限制。", "這個計劃包括歐盟漫遊，但受公平使用政策限制。"),
    l("Posso manter o meu número atual?", "Can I keep my current number?", "我可以保留现在的号码吗？", "我可以保留現有號碼嗎？"),
    l("Sim. Para a portabilidade, precisamos do código de validação da operadora atual.", "Yes. For number porting, we need the validation code from your current provider.", "可以。携号转网需要现运营商的验证码。", "可以。攜號轉台需要現有電訊商的驗證碼。"),
    l("Em casa, o Wi-Fi cai várias vezes por dia.", "At home, the Wi-Fi drops several times a day.", "家里的 Wi-Fi 每天会断几次。", "家裡的 Wi-Fi 每天會斷線幾次。"),
    l("As luzes do router mudam quando a ligação cai?", "Do the router lights change when the connection drops?", "断网时路由器指示灯会变化吗？", "斷線時路由器指示燈會變化嗎？"),
    l("A luz da internet fica vermelha.", "The internet light turns red.", "网络指示灯会变红。", "網絡指示燈會變紅。"),
    l("Vamos fazer um teste remoto e, se necessário, marcar um técnico.", "We will run a remote test and, if needed, book a technician.", "我们会进行远程测试，必要时预约技术人员。", "我們會進行遙距測試，必要時預約技術人員。"),
    l("A visita técnica tem algum custo?", "Is there a charge for the technician's visit?", "技术人员上门收费吗？", "技術人員上門收費嗎？"),
    l("Só há cobrança se a avaria não for da rede ou do equipamento fornecido.", "There is only a charge if the fault is not in the network or supplied equipment.", "只有故障不属于网络或供应设备时才会收费。", "只有故障不屬於網絡或供應設備時才會收費。")
  ],
  trocas_devolucoes: [
    l("Este aparelho deixou de funcionar ao fim de duas semanas.", "This appliance stopped working after two weeks.", "这台设备用了两周就坏了。", "這部電器用了兩星期就壞了。"),
    l("Tem a fatura e trouxe todos os acessórios?", "Do you have the invoice, and did you bring all the accessories?", "您有发票并带齐所有配件吗？", "您有發票並帶齊所有配件嗎？"),
    l("Sim. Prefiro a reparação a receber um vale.", "Yes. I would prefer a repair rather than a voucher.", "有。我希望维修，不想要代金券。", "有。我希望維修，不想要購物券。"),
    l("Vamos registar o artigo e enviá-lo para a assistência técnica.", "We will register the item and send it for technical service.", "我们会登记商品并送往技术维修。", "我們會登記貨品並送往技術維修。"),
    l("Quanto tempo pode demorar?", "How long might it take?", "可能需要多长时间？", "可能需要多長時間？"),
    l("Damos uma previsão no comprovativo de entrega e avisamos por mensagem.", "We will give an estimate on the receipt and notify you by message.", "我们会在收件凭证上提供预计时间，并通过短信通知。", "我們會在收件證明上提供預計時間，並透過短訊通知。"),
    l("Recebi esta camisola como presente e não tenho o talão.", "I received this jumper as a gift and do not have the receipt.", "这件毛衣是礼物，我没有收据。", "這件冷衫是禮物，我沒有收據。"),
    l("Tem um talão de oferta ou algum comprovativo da compra?", "Do you have a gift receipt or any proof of purchase?", "您有礼品收据或其他购买证明吗？", "您有禮物收據或其他購買證明嗎？"),
    l("Tenho o talão de oferta. Posso escolher outro artigo?", "I have the gift receipt. Can I choose another item?", "我有礼品收据，可以换其他商品吗？", "我有禮物收據，可以換其他貨品嗎？"),
    l("Sim, dentro do prazo e pelo valor indicado no talão.", "Yes, within the deadline and for the value shown on the receipt.", "可以，请在期限内按收据金额换购。", "可以，請在期限內按收據金額換購。"),
    l("Uma compra online pode ser devolvida nesta loja?", "Can an online purchase be returned to this shop?", "网购商品可以在这家门店退货吗？", "網購貨品可以在這間分店退貨嗎？"),
    l("Depende do vendedor. Vou confirmar pelo número da encomenda.", "It depends on the seller. I will check using the order number.", "这取决于卖家。我会用订单号查询。", "這取決於賣家。我會用訂單編號查詢。")
  ],
  policia_documentos: [
    l("Também perdi o passaporte. Preciso de viajar amanhã.", "I also lost my passport. I need to travel tomorrow.", "我的护照也丢了，明天需要出行。", "我的護照也遺失了，明天需要出行。"),
    l("Depois da denúncia, contacte imediatamente o seu consulado.", "After filing the report, contact your consulate immediately.", "报案后，请立即联系您的领事馆。", "報案後，請立即聯絡您的領事館。"),
    l("Posso receber uma cópia em inglês?", "Can I receive a copy in English?", "我可以拿到英文副本吗？", "我可以取得英文副本嗎？"),
    l("A participação é emitida em português; peça ao consulado orientação sobre tradução.", "The report is issued in Portuguese; ask the consulate for guidance on translation.", "报案证明以葡萄牙语签发；翻译事宜请咨询领事馆。", "報案證明以葡萄牙語簽發；翻譯事宜請向領事館查詢。"),
    l("Encontraram uma mochila parecida nos perdidos e achados.", "A similar backpack was found at lost and found.", "失物招领处找到一个相似的背包。", "失物認領處找到一個相似的背囊。"),
    l("Descreva a cor, a marca e o que estava lá dentro.", "Describe the colour, brand, and what was inside.", "请描述颜色、品牌和里面的物品。", "請描述顏色、品牌和裡面的物品。"),
    l("Era azul-escura e tinha os livros da minha filha.", "It was dark blue and contained my daughter's books.", "是深蓝色的，里面有我女儿的书。", "是深藍色的，裡面有我女兒的書。"),
    l("Vamos comparar a descrição antes de lhe mostrar a mochila.", "We will compare the description before showing you the backpack.", "我们会先核对描述，再给您看背包。", "我們會先核對描述，再給您看背囊。"),
    l("Partiram o vidro do carro e levaram o computador.", "They broke the car window and took the computer.", "有人砸了车窗并偷走电脑。", "有人打破車窗並偷走電腦。"),
    l("Não mexa no veículo até os agentes registarem os danos.", "Do not touch the vehicle until the officers record the damage.", "警员记录损坏情况前，请不要动车。", "警員記錄損毀情況前，請不要移動車輛。"),
    l("Preciso do auto para entregar à seguradora.", "I need the report for the insurance company.", "我需要报案记录交给保险公司。", "我需要報案紀錄交給保險公司。"),
    l("Indicamos o número da ocorrência e como pedir uma certidão.", "We will give you the incident number and explain how to request a certificate.", "我们会提供事件编号，并说明如何申请证明。", "我們會提供事件編號，並說明如何申請證明書。")
  ],
  trabalho_hotelaria: [
    l("Sim, por favor. E a que horas é servido o pequeno-almoço?", "Yes, please. And what time is breakfast served?", "好的。早餐几点供应？", "好的。早餐幾點供應？"),
    l("Das sete às dez, no restaurante do rés do chão.", "From seven to ten, in the restaurant on the ground floor.", "七点到十点，在一楼餐厅。", "七點到十點，在地下餐廳。")
  ],
  trabalho_restauracao: [
    l("Obrigado. Pode trazer também um copo de água, por favor?", "Thank you. Could you also bring a glass of water, please?", "谢谢。也请给我一杯水。", "謝謝。也請給我一杯水。")
  ],
  trabalho_limpezas: [
    l("Na próxima semana mantenho o mesmo horário?", "Do I keep the same schedule next week?", "下周还是同样的时间吗？", "下星期還是同樣的時間嗎？"),
    l("Sim, terça e sexta às nove. Se houver mudança, aviso com antecedência.", "Yes, Tuesday and Friday at nine. If anything changes, I will let you know in advance.", "是的，星期二和星期五九点。如有变化，我会提前通知。", "是的，星期二和星期五九點。如有改動，我會提前通知。")
  ],
  trabalho_construcao: [
    l("Está bem. Vou confirmar as horas na folha antes de assinar.", "All right. I will check the hours on the sheet before signing.", "好的。我签字前会核对工时记录。", "好的。我簽名之前會核對工時紀錄。")
  ],
  trabalho_entregas: [
    l("A app manda-me agora para o ponto de apoio.", "The app is now directing me to the support point.", "应用程序现在让我前往服务点。", "應用程式現在指示我前往支援點。"),
    l("Leva o pedido selado e mostra o número da entrega.", "Take the sealed order and show the delivery number.", "带上密封的订单，并出示配送编号。", "帶上密封的訂單，並出示送貨編號。"),
    l("Entendido. Vou tirar uma fotografia do comprovativo quando o entregar.", "Understood. I will photograph the receipt when I hand it over.", "明白。交付后我会拍下凭证。", "明白。交付後我會拍下證明。")
  ]
};

const addedIds = [];
let dialogueOrder = Math.max(0, ...dialogues.map((line) => Number(line.order) || 0));
let cardOrder = Math.max(0, ...cards.map((line) => Number(line.order) || 0));
const usedIds = new Set([...dialogues, ...cards].map((line) => line.id));

for (const situationId of situationIds) {
  const currentCount = dialogues.filter((line) => line.situacao === situationId).length;
  const needed = Math.max(0, 20 - currentCount);
  const existingKeys = new Set(dialogues.filter((line) => line.situacao === situationId).map((line) => normalize(line.pt)));
  const candidates = (additions[situationId] ?? []).filter((line) => !existingKeys.has(normalize(line.pt)));
  if (candidates.length < needed) {
    throw new Error(`${situationId}: expected ${needed} dialogue additions, found ${candidates.length}.`);
  }

  for (const line of candidates.slice(0, needed)) {
    const id = uniqueId(`dialogo-${situationId}-${slug(line.pt)}`, usedIds);
    dialogues.push({ id, situacao: situationId, order: ++dialogueOrder, purpose: "expanded real-world coverage", ...line });
    usedIds.add(id);
    addedIds.push(id);
  }
}

const globalLineCounts = countNormalized([...dialogues, ...cards]);
for (const situationId of situationIds) {
  const situationDialogues = new Set(
    dialogues.filter((line) => line.situacao === situationId).map((line) => normalize(line.pt))
  );
  const situationCards = new Set(cards.filter((line) => line.situacao === situationId).map((line) => normalize(line.pt)));
  const candidates = vocabulary
    .filter((row) => row.situacao === situationId)
    .map((row, index) => {
      const manual = manualById.get(row.id);
      const reviewedExample = row.examplePt ?? manual?.examplePt;
      const fallback = createFallbackCard(row, index, situationId);
      return {
        ...row,
        generatedFallback: !reviewedExample,
        examplePt: reviewedExample ?? fallback.pt,
        exampleEn: row.exampleEn ?? manual?.exampleEn ?? fallback.en,
        exampleZhHans: row.exampleZhHans ?? manual?.exampleZhHans ?? fallback.zhHans,
        exampleZhHant: row.exampleZhHant ?? manual?.exampleZhHant ?? fallback.zhHant
      };
    })
    .filter((row) => row.examplePt && row.exampleEn && row.exampleZhHans && row.exampleZhHant)
    .filter((row) => !row.generatedFallback || isCleanTemplateTerm(row))
    .sort((a, b) => usefulnessScore(b.examplePt) - usefulnessScore(a.examplePt));

  while (cards.filter((line) => line.situacao === situationId).length < 20) {
    const row = candidates.shift();
    if (!row) throw new Error(`${situationId}: not enough translated example sentences to build 20 card lines.`);
    const key = normalize(row.examplePt);
    if (situationDialogues.has(key) || situationCards.has(key) || (globalLineCounts.get(key) ?? 0) >= 3) continue;

    const id = uniqueId(`cartao-${situationId}-${slug(row.examplePt)}`, usedIds);
    const line = {
      id,
      situacao: situationId,
      order: ++cardOrder,
      purpose: "useful situation example",
      pt: row.examplePt,
      en: row.exampleEn,
      zhHans: row.exampleZhHans,
      zhHant: row.exampleZhHant
    };
    cards.push(line);
    situationCards.add(key);
    globalLineCounts.set(key, (globalLineCounts.get(key) ?? 0) + 1);
    usedIds.add(id);
    addedIds.push(id);
  }
}

const cardCorrections = {
  "imt_carta_conducao|que documentos necessários devo trazer": l(
    "Que documentos devo trazer?",
    "Which documents should I bring?",
    "我需要带哪些文件？",
    "我需要帶哪些文件？"
  ),
  "transportes|como posso viajar sem título": l(
    "Onde posso comprar um título de transporte?",
    "Where can I buy a ticket?",
    "我可以在哪里买车票？",
    "我可以在哪裡買車票？"
  ),
  "cafe_restaurante|pode explicar me o que devo fazer para anotar o pedido": l(
    "Pode anotar o nosso pedido?",
    "Could you take our order?",
    "可以帮我们点餐吗？",
    "可以幫我們點餐嗎？"
  ),
  "cafe_restaurante|pode dar me informações sobre o prato principal": l(
    "Quais são os pratos principais?",
    "What main courses do you have?",
    "你们有哪些主菜？",
    "你們有哪些主菜？"
  ),
  "cafe_restaurante|pode dar me informações sobre a gorjeta": l(
    "A gorjeta está incluída?",
    "Is the tip included?",
    "小费包括在内吗？",
    "小費包括在內嗎？"
  ),
  "cafe_restaurante|com quem devo falar sobre o prato do dia": l(
    "Qual é o prato do dia?",
    "What is today's special?",
    "今天的特色菜是什么？",
    "今天的特色菜是什麼？"
  ),
  "cafe_restaurante|queria informações sobre a entrada": l(
    "Que entradas têm?",
    "What starters do you have?",
    "你们有哪些前菜？",
    "你們有哪些前菜？"
  ),
  "cafe_restaurante|queria pagar a conta da água": l(
    "A conta, por favor.",
    "The bill, please.",
    "请结账。",
    "請結帳。"
  ),
  "cafe_restaurante|use uma chávena de açúcar": l(
    "Este prato contém açúcar?",
    "Does this dish contain sugar?",
    "这道菜含糖吗？",
    "這道菜含糖嗎？"
  ),
  "cafe_restaurante|como uma sandes": l(
    "Queria uma sandes, por favor.",
    "I would like a sandwich, please.",
    "我想要一份三明治。",
    "我想要一份三文治。"
  ),
  "supermercado_mercado|a maçã é melhor do que as limas": l(
    "Quanto custam as maçãs?",
    "How much are the apples?",
    "苹果多少钱？",
    "蘋果多少錢？"
  ),
  "supermercado_mercado|compro quatro pacotes de leite": l(
    "Levo quatro pacotes de leite, por favor.",
    "I'll take four cartons of milk, please.",
    "我要四盒牛奶。",
    "我要四盒牛奶。"
  ),
  "ginasio|quero cancelar a inscrição": l(
    "Quero cancelar a inscrição.",
    "I want to cancel my membership.",
    "我想取消会员资格。",
    "我想取消會籍。"
  ),
  "ginasio|não quero fidelização": l(
    "Não quero um contrato com fidelização.",
    "I do not want a contract with a lock-in period.",
    "我不想签有绑定期的合同。",
    "我不想簽有綁約期的合約。"
  ),
  "cabeleireiro_barbeiro|pode secar por favor": l(
    "Pode secar, por favor?",
    "Could you blow-dry it, please?",
    "可以帮我吹干吗？",
    "可以幫我吹乾嗎？"
  ),
  "cabeleireiro_barbeiro|quero pintar de castanho": l(
    "Quero pintar o cabelo de castanho.",
    "I want to dye my hair brown.",
    "我想把头发染成棕色。",
    "我想把頭髮染成啡色。"
  ),
  "trocas_devolucoes|com quem devo falar sobre o reembolso": l(
    "Quando recebo o reembolso?",
    "When will I receive the refund?",
    "我什么时候能收到退款？",
    "我什麼時候能收到退款？"
  ),
  "trocas_devolucoes|a quantia deve ser entregue no prazo de oito dias": l(
    "O reembolso demora quantos dias?",
    "How many days will the refund take?",
    "退款需要多少天？",
    "退款需要多少天？"
  ),
  "trocas_devolucoes|a deco tem recebido queixas de consumidores": l(
    "Onde posso apresentar uma reclamação?",
    "Where can I make a complaint?",
    "我可以在哪里投诉？",
    "我可以在哪裡投訴？"
  ),
  "trocas_devolucoes|entreguei a roupa no vosso estabelecimento": l(
    "Comprei este artigo nesta loja.",
    "I bought this item in this shop.",
    "这件商品是在这家店买的。",
    "這件貨品是在這間店買的。"
  ),
  "policia_documentos|preciso de autorização para consulta do registo criminal": l(
    "Preciso de substituir os documentos roubados.",
    "I need to replace the stolen documents.",
    "我需要补办被盗的证件。",
    "我需要補領被盜的證件。"
  ),
  "policia_documentos|com quem devo falar sobre o comprovativo": l(
    "Este é o comprovativo da compra.",
    "This is the proof of purchase.",
    "这是购买凭证。",
    "這是購買證明。"
  ),
  "policia_documentos|com quem devo falar sobre o 112": l(
    "É uma emergência. Vou ligar para o 112.",
    "It is an emergency. I am going to call 112.",
    "这是紧急情况，我要拨打 112。",
    "這是緊急情況，我要致電 112。"
  ),
  "policia_documentos|alguém sabe onde fica o acm": l(
    "Onde ficam os perdidos e achados?",
    "Where is lost and found?",
    "失物招领处在哪里？",
    "失物認領處在哪裡？"
  ),
  "policia_documentos|não conhecemos o destinatário": l(
    "Não conheço o suspeito.",
    "I do not know the suspect.",
    "我不认识嫌疑人。",
    "我不認識疑犯。"
  ),
  "policia_documentos|a deco tem recebido queixas de consumidores": l(
    "Quero denunciar uma burla.",
    "I want to report a scam.",
    "我要举报诈骗。",
    "我要舉報騙案。"
  ),
  "consultorio_medico|ele sente se cansado ela sente se cansada": l(
    "Sinto-me muito cansado/a.",
    "I feel very tired.",
    "我觉得很累。",
    "我覺得很累。"
  ),
  "consultorio_medico|ele está constipado ela está constipada": l(
    "Estou constipado/a.",
    "I have a cold.",
    "我感冒了。",
    "我感冒了。"
  ),
  "consultorio_medico|ele está enjoado ela está enjoada": l(
    "Sinto-me enjoado/a.",
    "I feel nauseous.",
    "我觉得恶心。",
    "我覺得噁心。"
  ),
  "consultorio_medico|a usf é uma unidade de saúde familiar": l(
    "Esta é a minha Unidade de Saúde Familiar.",
    "This is my Family Health Unit.",
    "这是我的家庭健康中心。",
    "這是我的家庭健康中心。"
  ),
  "casa_reparacoes|onde posso encontrar informações sobre a chave de fendas": l(
    "Tem uma chave de fendas?",
    "Do you have a screwdriver?",
    "您有螺丝刀吗？",
    "您有螺絲批嗎？"
  ),
  "casa_reparacoes|pode dar me informações sobre o canalizador": l(
    "Preciso de chamar um canalizador.",
    "I need to call a plumber.",
    "我需要叫水管工。",
    "我需要找水喉匠。"
  ),
  "casa_reparacoes|pode dar me informações sobre o condomínio": l(
    "A reparação é responsabilidade do condomínio?",
    "Is the building management responsible for the repair?",
    "维修由物业负责吗？",
    "維修由大廈管理處負責嗎？"
  ),
  "casa_reparacoes|pode dar me informações sobre o martelo": l(
    "Preciso de um martelo.",
    "I need a hammer.",
    "我需要一把锤子。",
    "我需要一把鎚仔。"
  ),
  "casa_reparacoes|com quem devo falar sobre o eletrodoméstico": l(
    "Este eletrodoméstico avariou-se.",
    "This appliance has broken down.",
    "这台家电坏了。",
    "這部家電壞了。"
  ),
  "casa_reparacoes|com quem devo falar sobre a serra": l(
    "Tem uma serra?",
    "Do you have a saw?",
    "您有锯子吗？",
    "您有鋸嗎？"
  ),
  "casa_reparacoes|queria informações sobre o eletricista": l(
    "Preciso de chamar um eletricista.",
    "I need to call an electrician.",
    "我需要叫电工。",
    "我需要找電工。"
  ),
  "agua_luz_gas|pode dar me informações sobre o titular da conta": l(
    "Quero alterar o titular da conta.",
    "I want to change the account holder.",
    "我想更改账户持有人。",
    "我想更改帳戶持有人。"
  ),
  "agua_luz_gas|onde posso encontrar informações sobre o iban": l(
    "Onde posso atualizar o IBAN?",
    "Where can I update the IBAN?",
    "我可以在哪里更新 IBAN？",
    "我可以在哪裡更新 IBAN？"
  ),
  "agua_luz_gas|pode dar me informações sobre o esquentador": l(
    "O esquentador não acende.",
    "The water heater will not light.",
    "热水器点不着。",
    "熱水爐點不著。"
  ),
  "agua_luz_gas|com quem devo falar sobre as guias de pagamento": l(
    "Onde posso obter as guias de pagamento?",
    "Where can I get the payment slips?",
    "我可以在哪里取得缴费单？",
    "我可以在哪裡取得繳費單？"
  ),
  "agua_luz_gas|queria informações sobre a transferência bancária": l(
    "Posso pagar por transferência bancária?",
    "Can I pay by bank transfer?",
    "可以银行转账付款吗？",
    "可以銀行轉帳付款嗎？"
  ),
  "agua_luz_gas|com quem devo falar sobre a comissão": l(
    "Esta forma de pagamento tem comissão?",
    "Is there a fee for this payment method?",
    "这种付款方式收手续费吗？",
    "這種付款方式收手續費嗎？"
  ),
  "agua_luz_gas|queria informações sobre o comprovativo": l(
    "Preciso de um comprovativo de pagamento.",
    "I need proof of payment.",
    "我需要付款凭证。",
    "我需要付款證明。"
  ),
  "agua_luz_gas|queria informações sobre o aquecimento": l(
    "O aquecimento não está a funcionar.",
    "The heating is not working.",
    "暖气坏了。",
    "暖氣壞了。"
  ),
  "telemovel_internet|pode explicar me o que devo fazer para avisar com antecedência": l(
    "Com quanto tempo de antecedência tenho de avisar?",
    "How much notice do I need to give?",
    "我需要提前多久通知？",
    "我需要提前多久通知？"
  ),
  "telemovel_internet|qual é o seu número de telefone": l(
    "Quero manter o meu número de telefone.",
    "I want to keep my phone number.",
    "我想保留现有的手机号码。",
    "我想保留現有的手提電話號碼。"
  ),
  "telemovel_internet|com quem devo falar sobre a senha de acesso": l(
    "Esqueci-me da senha de acesso.",
    "I forgot my login password.",
    "我忘记登录密码了。",
    "我忘記登入密碼了。"
  ),
  "telemovel_internet|é possível remarcar aqui": l(
    "Posso remarcar a instalação?",
    "Can I reschedule the installation?",
    "我可以改约安装时间吗？",
    "我可以更改安裝預約嗎？"
  ),
  "trabalho_construcao|pode dar me informações sobre a serra": l(
    "Onde está a serra?",
    "Where is the saw?",
    "锯子在哪里？",
    "鋸在哪裡？"
  )
};

const normalizedCardCorrections = new Map(
  Object.entries(cardCorrections).map(([key, value]) => {
    const separator = key.indexOf("|");
    return [`${key.slice(0, separator)}|${normalize(key.slice(separator + 1))}`, value];
  })
);

for (const card of cards) {
  if (card.purpose !== "useful situation example") continue;
  const correction = normalizedCardCorrections.get(`${card.situacao}|${normalize(card.pt)}`);
  if (correction) Object.assign(card, correction);
}

validateContent(situationIds, dialogues, cards);
source = set("situacaoDialogueLines", dialogues);
source = set("situacaoCheatSheetLines", cards);
writeFileSync(dataPath, source);
writeFileSync(audioIdsPath, `${addedIds.join("\n")}\n`);
console.log(`Added ${addedIds.filter((id) => id.startsWith("dialogo-")).length} dialogue turns and ${addedIds.filter((id) => id.startsWith("cartao-")).length} card lines.`);
console.log(`Audio IDs written to ${audioIdsPath}.`);

function validateContent(ids, dialogueLines, cardLines) {
  const errors = [];
  const cardStructurePatterns = [
    /^Queria informações sobre /u,
    /^Pode dar-me informações sobre /u,
    /^Preciso de esclarecer uma dúvida sobre /u,
    /^Com quem devo falar sobre /u,
    /^Onde posso encontrar informações sobre /u,
    /^Gostaria de saber mais sobre /u,
    /^Quem me pode orientar sobre /u,
    /^Tenho uma questão relacionada com /u,
    /^Consegue ajudar-me com uma dúvida sobre /u,
    /^A quem posso pedir esclarecimentos sobre /u,
    /^Pode explicar-me melhor o que preciso de saber sobre /u,
    /^Onde posso obter ajuda para questões sobre /u,
    /^Preciso de confirmar uma informação sobre /u,
    /^Há algum guia disponível sobre /u,
    /^Existe algum serviço de apoio para dúvidas sobre /u
  ];
  for (const id of ids) {
    const situationDialogues = dialogueLines.filter((line) => line.situacao === id);
    const situationCards = cardLines.filter((line) => line.situacao === id);
    if (situationDialogues.length < 20) errors.push(`${id}: only ${situationDialogues.length} dialogue turns.`);
    if (situationCards.length < 20) errors.push(`${id}: only ${situationCards.length} card lines.`);
    for (const line of [...situationDialogues, ...situationCards]) {
      if (!line.pt || !line.en || !line.zhHans || !line.zhHant) errors.push(`${line.id}: missing translation.`);
    }
    const dialogueKeys = new Set(situationDialogues.map((line) => normalize(line.pt)));
    const overlap = situationCards.filter((line) => dialogueKeys.has(normalize(line.pt))).length;
    if (overlap > 2) errors.push(`${id}: ${overlap} repeated lines across dialogue and card.`);
    for (const pattern of cardStructurePatterns) {
      const matches = situationCards.filter((line) => pattern.test(line.pt));
      if (matches.length > 1) errors.push(`${id}: repeated Cartão sentence structure "${matches[0].pt}".`);
    }
    const structureCounts = new Map();
    for (const line of situationCards) {
      const structure = normalize(line.pt).split(" ").slice(0, 5).join(" ");
      structureCounts.set(structure, (structureCounts.get(structure) ?? 0) + 1);
    }
    for (const [structure, count] of structureCounts) {
      if (count > 1) errors.push(`${id}: Cartão structure starts ${count} times with "${structure}".`);
    }
  }

  const occurrences = new Map();
  for (const line of [...dialogueLines, ...cardLines]) {
    const key = normalize(line.pt);
    const situations = occurrences.get(key) ?? new Set();
    situations.add(line.situacao);
    occurrences.set(key, situations);
  }
  for (const [line, situations] of occurrences) {
    if (situations.size > 3) errors.push(`Line appears in ${situations.size} situations: ${line}`);
  }
  if (errors.length) throw new Error(errors.join("\n"));
}

function usefulnessScore(value) {
  const text = value.trim();
  let score = Math.min(text.length, 90);
  if (/[?？]$/u.test(text)) score += 28;
  if (/^(quero|queria|preciso|pode|posso|tenho|não|onde|quando|quanto|como|qual|há|estou|trago|vim)\b/iu.test(text)) score += 22;
  if (text.length < 24) score -= 12;
  return score;
}

function createFallbackCard(row, index, situationId) {
  const action = toFirstPersonAction(row.pt);
  const workConcrete = situationId.startsWith("trabalho_") && isWorkplacePersonOrObject(row.pt);
  const templates = action
    ? [
        [`Como posso ${action}?`, `How can I ${englishAction(row.en)}?`, `我该怎样${row.zhHans}？`, `我該怎樣${row.zhHant}？`],
        [`Preciso de ajuda para ${action}.`, `I need help to ${englishAction(row.en)}.`, `我需要协助${row.zhHans}。`, `我需要協助${row.zhHant}。`],
        [`É possível ${action} aqui?`, `Is it possible to ${englishAction(row.en)} here?`, `可以在这里${row.zhHans}吗？`, `可以在這裡${row.zhHant}嗎？`],
        [`Pode explicar-me o que devo fazer para ${action}?`, `Could you explain what I need to do to ${englishAction(row.en)}?`, `可以说明我要怎样${row.zhHans}吗？`, `可以說明我要怎樣${row.zhHant}嗎？`],
        [`Queria ${action}, por favor.`, `I would like to ${englishAction(row.en)}, please.`, `我想${row.zhHans}。`, `我想${row.zhHant}。`],
        [`Pode ajudar-me a ${action}?`, `Can you help me to ${englishAction(row.en)}?`, `您能帮我${row.zhHans}吗？`, `您能幫我${row.zhHant}嗎？`],
        [`Não sei como ${action}. Pode explicar-me?`, `I do not know how to ${englishAction(row.en)}. Could you explain?`, `我不知道怎样${row.zhHans}。您能说明吗？`, `我不知道怎樣${row.zhHant}。您能說明嗎？`],
        [`Quem me pode ajudar a ${action}?`, `Who can help me to ${englishAction(row.en)}?`, `谁可以帮我${row.zhHans}？`, `誰可以幫我${row.zhHant}？`],
        [`Preciso de orientação para ${action}.`, `I need guidance on how to ${englishAction(row.en)}.`, `我需要有人指导我怎样${row.zhHans}。`, `我需要有人指導我怎樣${row.zhHant}。`],
        [`Pode mostrar-me como ${action}?`, `Could you show me how to ${englishAction(row.en)}?`, `您能给我演示怎样${row.zhHans}吗？`, `您能給我示範怎樣${row.zhHant}嗎？`]
      ]
    : workConcrete
      ? [[
          `Onde posso encontrar ${row.pt}?`,
          `Where can I find ${row.en}?`,
          `${row.zhHans}在哪里？`,
          `${row.zhHant}在哪裡？`
        ]]
      : [
          [`Queria informações sobre ${row.pt}.`, `I would like information about ${row.en}.`, `我想了解${row.zhHans}。`, `我想了解${row.zhHant}。`],
          [`Pode dar-me informações sobre ${row.pt}?`, `Could you give me information about ${row.en}?`, `可以告诉我有关${row.zhHans}的信息吗？`, `可以告訴我有關${row.zhHant}的資訊嗎？`],
          [`Preciso de esclarecer uma dúvida sobre ${row.pt}.`, `I have a question about ${row.en}.`, `我需要咨询有关${row.zhHans}的问题。`, `我需要查詢有關${row.zhHant}的問題。`],
          [`Com quem devo falar sobre ${row.pt}?`, `Who should I speak to about ${row.en}?`, `关于${row.zhHans}，我应该和谁联系？`, `關於${row.zhHant}，我應該聯絡誰？`],
          [`Onde posso encontrar informações sobre ${row.pt}?`, `Where can I find information about ${row.en}?`, `我可以在哪里查到有关${row.zhHans}的信息？`, `我可以在哪裡查到有關${row.zhHant}的資訊？`],
          [`Gostaria de saber mais sobre ${row.pt}.`, `I would like to know more about ${row.en}.`, `我想进一步了解${row.zhHans}。`, `我想進一步了解${row.zhHant}。`],
          [`Quem me pode orientar sobre ${row.pt}?`, `Who can advise me about ${row.en}?`, `关于${row.zhHans}，谁可以给我指引？`, `關於${row.zhHant}，誰可以給我指引？`],
          [`Tenho uma questão relacionada com ${row.pt}.`, `I have a question related to ${row.en}.`, `我有一个与${row.zhHans}有关的问题。`, `我有一個與${row.zhHant}有關的問題。`],
          [`Consegue ajudar-me com uma dúvida sobre ${row.pt}?`, `Can you help me with a question about ${row.en}?`, `您能帮我解答一个有关${row.zhHans}的问题吗？`, `您能幫我解答一個有關${row.zhHant}的問題嗎？`],
          [`A quem posso pedir esclarecimentos sobre ${row.pt}?`, `Who can I ask for clarification about ${row.en}?`, `关于${row.zhHans}，我可以向谁咨询？`, `關於${row.zhHant}，我可以向誰查詢？`],
          [`Pode explicar-me melhor o que preciso de saber sobre ${row.pt}?`, `Could you explain what I need to know about ${row.en}?`, `您能说明我需要了解${row.zhHans}的哪些信息吗？`, `您能說明我需要了解${row.zhHant}的哪些資訊嗎？`],
          [`Onde posso obter ajuda para questões sobre ${row.pt}?`, `Where can I get help with questions about ${row.en}?`, `我可以在哪里获得有关${row.zhHans}的帮助？`, `我可以在哪裡獲得有關${row.zhHant}的協助？`],
          [`Preciso de confirmar uma informação sobre ${row.pt}.`, `I need to confirm some information about ${row.en}.`, `我需要确认一些有关${row.zhHans}的信息。`, `我需要確認一些有關${row.zhHant}的資訊。`],
          [`Há algum guia disponível sobre ${row.pt}?`, `Is there a guide available about ${row.en}?`, `有关于${row.zhHans}的指南吗？`, `有關於${row.zhHant}的指南嗎？`],
          [`Existe algum serviço de apoio para dúvidas sobre ${row.pt}?`, `Is there a support service for questions about ${row.en}?`, `有解答${row.zhHans}相关问题的支持服务吗？`, `有解答${row.zhHant}相關問題的支援服務嗎？`]
        ];
  const [pt, en, zhHans, zhHant] = templates[index % templates.length];
  return { pt, en, zhHans, zhHant };
}

function isCleanTemplateTerm(row) {
  const term = row.pt.trim();
  if (/[\/()]/u.test(term) || /\s(?:est(?:á|ão)|não|ainda|já)\s/iu.test(term)) return false;
  return (
    /^(?:o|a|os|as)\s+[\p{L}\d '-]+$/iu.test(term) ||
    /^(?:[\p{L}-]+(?:ar|er|ir)(?:-se)?)(?:\s+[\p{L}\d '-]+)*$/iu.test(term)
  );
}

function isWorkplacePersonOrObject(value) {
  return /\b(?:carrinho|elevador|rececionista|cofre|uniforme|governanta|ajudante|cliente|chave|pano|produto|tábua|ferro|esfregona|balde|lixívia|canalizador|martelo|colete|betoneira|servente|entulho|capacete|interfone|campainha|mochila|máquina|material)\b/iu.test(value);
}

function toFirstPersonAction(value) {
  const term = value.trim();
  if (!/^[\p{L}-]+(?:ar|er|ir)(?:-se)?(?:\s|$)/iu.test(term)) return null;
  return term.replace(/^([\p{L}-]+)-se\b/iu, "$1-me");
}

function englishAction(value) {
  return value
    .trim()
    .replace(/^to\s+/iu, "")
    .replace(/one's/giu, "my")
    .replace(/\s*\/.*$/u, "");
}

function countNormalized(lines) {
  const counts = new Map();
  for (const line of lines) {
    const key = normalize(line.pt);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
}

function l(pt, en, zhHans, zhHant) {
  return { pt, en, zhHans, zhHant };
}

function get(name) {
  const start = source.indexOf(`export const ${name}:`);
  const assignment = source.indexOf(" = ", start);
  const end = source.indexOf(";\n", assignment);
  if (start < 0 || assignment < 0 || end < 0) throw new Error(`Could not parse ${name}.`);
  return JSON.parse(source.slice(assignment + 3, end));
}

function set(name, value) {
  const start = source.indexOf(`export const ${name}:`);
  const assignment = source.indexOf(" = ", start);
  const end = source.indexOf(";\n", assignment);
  return `${source.slice(0, assignment + 3)}${JSON.stringify(value, null, 2)}${source.slice(end)}`;
}

function uniqueId(base, used) {
  let id = base;
  let suffix = 2;
  while (used.has(id)) id = `${base}-${suffix++}`;
  return id;
}

function slug(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/gu, "-")
    .replace(/^-|-$/gu, "");
}

function normalize(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gu, "")
    .toLowerCase()
    .replace(/[\s.!?,;:—–-]+/gu, " ")
    .trim();
}
