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
    ["quem", ["谁", "誰"]],
    ["que", ["那/哪个/谁", "那/哪個/誰"]],
    ["qual", ["哪一个/什么", "哪一個/什麼"]],
    ["viúvo(a)", ["鳏寡/丧偶", "鰥寡/喪偶"]],
    ["maio", ["五月", "五月"]],
    ["março", ["三月", "三月"]],
    ["estar", ["是/在", "是/在"]],
    ["ser", ["是", "是"]],
    ["há", ["有/已经过去", "有/已經過去"]],
    ["poder", ["能/能够", "能/能夠"]],
    ["saber", ["知道/会", "知道/會"]],
    ["morar", ["居住", "居住"]],
    ["trabalhar", ["工作", "工作"]],
    ["o filho", ["孩子/子女", "孩子/子女"]],
    ["filho(a)", ["孩子/子女", "孩子/子女"]],
    ["o quarto", ["房间/卧室", "房間/臥室"]],
    ["quarto", ["房间/卧室", "房間/臥室"]],
    ["a sala", ["客厅/房间", "客廳/房間"]],
    ["sala", ["客厅/房间", "客廳/房間"]],
    ["o andar", ["楼层", "樓層"]],
    ["andar", ["楼层/走路", "樓層/走路"]],
    ["a morada", ["地址/住址", "地址/住址"]],
    ["morada", ["地址/住址", "地址/住址"]],
    ["a localidade", ["地区/所在地", "地區/所在地"]],
    ["localidade", ["地区/所在地", "地區/所在地"]],
    ["o telemóvel", ["手机/移动电话", "手機/行動電話"]],
    ["telemóvel", ["手机/移动电话", "手機/行動電話"]],
    ["boa noite", ["晚上好/晚安", "晚上好/晚安"]],
    ["sair", ["离开/出去", "離開/出去"]],
    ["o café", ["咖啡/咖啡馆", "咖啡/咖啡館"]],
    ["café", ["咖啡/咖啡馆", "咖啡/咖啡館"]],
    ["pedir", ["请求/点餐", "請求/點餐"]],
    ["fresco(a)", ["凉爽/新鲜", "涼爽/新鮮"]],
    ["que horas são?", ["现在几点？", "現在幾點？"]],
    ["o talho", ["肉店", "肉店"]],
    ["talho", ["肉店", "肉店"]],
    ["à esquerda", ["左边/向左", "左邊/向左"]],
    ["a rotunda", ["环岛", "圓環/環形交叉路口"]],
    ["rotunda", ["环岛", "圓環/環形交叉路口"]],
    ["o impresso", ["表格", "表格"]],
    ["impresso", ["表格", "表格"]],
    ["renovar", ["续签/更新", "續簽/更新"]],
    ["o apartamento", ["公寓", "公寓"]],
    ["apartamento", ["公寓", "公寓"]],
    ["o troco", ["找零", "找零"]],
    ["troco", ["找零", "找零"]],
    ["atender", ["接电话", "接電話"]],
    ["fazer análises", ["做化验/做检查", "做化驗/做檢查"]],
    ["diminuir a febre", ["退烧/降烧", "退燒/降燒"]],
    ["a consulta de urgência", ["急诊", "急診"]],
    ["consulta de urgência", ["急诊", "急診"]],
    ["aceder", ["获得/使用", "取得/使用"]],
    ["o cartão de utente", ["医疗用户卡/就诊卡", "醫療用戶卡/就診卡"]],
    ["cartão de utente", ["医疗用户卡/就诊卡", "醫療用戶卡/就診卡"]],
    ["a máscara", ["口罩", "口罩/防護口罩"]],
    ["máscara", ["口罩", "口罩/防護口罩"]],
    ["dói-me", ["我疼/我痛", "我疼/我痛"]],
    ["doer", ["疼/痛", "疼/痛"]],
    ["as horas extraordinárias", ["加班时间", "加班/加班時間"]],
    ["horas extraordinárias", ["加班时间", "加班/加班時間"]],
    ["o subsídio", ["补贴/津贴", "津貼/補助"]],
    ["subsídio", ["补贴/津贴", "津貼/補助"]],
    ["a lixívia", ["漂白剂", "漂白水"]],
    ["lixívia", ["漂白剂", "漂白水"]],
    ["aspirar", ["吸尘", "吸塵"]],
    ["carregar", ["搬运/装载", "搬運/裝載"]],
    ["descarregar", ["卸货", "卸貨/卸下"]],
    ["servir à mesa", ["餐桌服务/当服务员", "端菜服務/餐桌服務"]],
    ["conseguir", ["能够/成功做到", "能夠/成功做到"]],
    ["a remuneração", ["薪酬/报酬", "薪酬/報酬"]],
    ["remuneração", ["薪酬/报酬", "薪酬/報酬"]],
    ["despedir-se", ["辞职", "辭職"]],
    ["o cargo", ["职位", "職位"]],
    ["cargo", ["职位", "職位"]],
    ["o perfil adequado", ["合适的条件/合适的个人背景", "合適的條件/符合職位要求"]],
    ["perfil adequado", ["合适的条件/合适的个人背景", "合適的條件/符合職位要求"]],
    ["o ramo", ["行业/领域", "行業/領域"]],
    ["ramo", ["行业/领域", "行業/領域"]],
    ["os recibos verdes", ["绿色收据/自由职业发票", "綠色收據/自由職業收據"]],
    ["recibos verdes", ["绿色收据/自由职业发票", "綠色收據/自由職業收據"]],
    ["a candidatura", ["申请", "申請/求職申請"]],
    ["candidatura", ["申请", "申請/求職申請"]],
    ["o diretor", ["主管/主任", "主任/主管"]],
    ["diretor", ["主管/主任", "主任/主管"]],
    ["ser contactado(a)", ["被联系/有人联系", "被聯繫/有人聯繫"]],
    ["a notícia", ["新闻/消息", "新聞/消息"]],
    ["notícia", ["新闻/消息", "新聞/消息"]],
    ["sentir falta de", ["想念/怀念", "想念/懷念"]],
    ["ir a pé", ["步行/走路去", "步行/走路去"]],
    ["a pé", ["步行", "步行"]],
    ["o supermercado", ["超市", "超級市場"]],
    ["supermercado", ["超市", "超級市場"]],
    ["a disponibilidade", ["可上班时间/可工作时间", "可上班時間/可工作時間"]],
    ["disponibilidade", ["可上班时间/可工作时间", "可上班時間/可工作時間"]],
    ["ilíquidos", ["税前的/未扣税的", "稅前的/未扣稅的"]],
    ["o vencimento", ["薪资/工资", "薪資/工資"]],
    ["vencimento", ["薪资/工资", "薪資/工資"]],
    ["a especialidade", ["特色菜/专长", "特色菜"]],
    ["especialidade", ["特色菜/专长", "特色菜"]],
    ["a fratura", ["骨折", "骨折"]],
    ["fratura", ["骨折", "骨折"]],
    ["grave", ["严重的", "嚴重的"]],
    ["queixar-se de", ["诉说……症状/说……痛", "訴說……症狀/說……痛"]],
    ["informar-se", ["了解信息/查询信息", "了解資訊/查詢資訊"]],
    ["a cidadania", ["公民身份/公民权", "公民身分/公民權"]],
    ["cidadania", ["公民身份/公民权", "公民身分/公民權"]],
    ["poupar", ["存钱/省钱", "存錢/省錢"]],
    ["passar", ["经过/通过", "經過/通過"]],
    ["por", ["由/通过/沿着", "由/通過/沿著"]],
    ["por + artigo", ["由/通过/沿着", "由/通過/沿著"]],
    ["o passe", ["交通月票/通行证", "交通月票/通行證"]],
    ["passe", ["交通月票/通行证", "交通月票/通行證"]],
    ["a renda", ["房租", "租金/房租"]],
    ["renda", ["房租", "租金/房租"]],
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
    ["o SNS", ["国家卫生服务体系", "國家衛生服務體系"]],
    ["fazer uma radiografia", ["照X光", "照X光"]],
    ["as saudades", ["思念/想念", "思念/想念"]],
    ["saudades", ["思念/想念", "思念/想念"]],
    ["a receção", ["接待处/接待", "接待處/接待"]],
    ["receção", ["接待处/接待", "接待處/接待"]],
    ["o anexo", ["附件/附录", "附件/附錄"]],
    ["anexo", ["附件/附录", "附件/附錄"]],
    ["a competência", ["能力/技能", "能力/技能"]],
    ["competência", ["能力/技能", "能力/技能"]],
    ["o currículo", ["简历/履历", "履歷/簡歷"]],
    ["currículo", ["简历/履历", "履歷/簡歷"]],
    ["recorrer", ["求助于/上诉", "求助於/上訴"]],
    ["a lavandaria", ["洗衣店/自助洗衣店", "洗衣店/自助洗衣店"]],
    ["lavandaria", ["洗衣店/自助洗衣店", "洗衣店/自助洗衣店"]],
    ["o estabelecimento", ["机构/商店", "機構/商店"]],
    ["estabelecimento", ["机构/商店", "機構/商店"]],
    ["a junta de freguesia", ["堂区委员会/地方办事处", "堂區委員會/地方辦事處"]],
    ["junta de freguesia", ["堂区委员会/地方办事处", "堂區委員會/地方辦事處"]],
    ["a freguesia", ["堂区/基层行政区", "堂區/基層行政區"]],
    ["freguesia", ["堂区/基层行政区", "堂區/基層行政區"]],
    ["o concelho", ["市镇/县区", "市鎮/縣區"]],
    ["concelho", ["市镇/县区", "市鎮/縣區"]],
    ["o cidadão", ["公民", "公民"]],
    ["cidadão", ["公民", "公民"]],
    ["o cidadão europeu", ["欧洲公民", "歐洲公民"]],
    ["cidadão europeu", ["欧洲公民", "歐洲公民"]],
    ["o vínculo jurídico", ["法律联系/法律关系", "法律聯繫/法律關係"]],
    ["vínculo jurídico", ["法律联系/法律关系", "法律聯繫/法律關係"]],
    ["tratar de", ["办理/处理", "辦理/處理"]],
    ["fixar-se", ["定居/安顿", "定居/安頓"]],
    ["a regularização", ["身份合法化/手续正规化", "身分合法化/手續正規化"]],
    ["regularização", ["身份合法化/手续正规化", "身分合法化/手續正規化"]],
    ["legalizar", ["办理合法化/使合法", "辦理合法化/使合法"]],
    ["a integração", ["融入/融合", "融入/融合"]],
    ["integração", ["融入/融合", "融入/融合"]],
    ["o gabinete de apoio", ["援助办公室/咨询处", "援助辦公室/諮詢處"]],
    ["gabinete de apoio", ["援助办公室/咨询处", "援助辦公室/諮詢處"]],
    ["a comunidade", ["社区/共同体", "社區/共同體"]],
    ["comunidade", ["社区/共同体", "社區/共同體"]],
    ["o retorno voluntário", ["自愿返国/自愿返回", "自願返國/自願返回"]],
    ["retorno voluntário", ["自愿返国/自愿返回", "自願返國/自願返回"]]
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
