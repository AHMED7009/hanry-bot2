import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/socona12/TheMystic-Bot-MD/master/src/JSON/anime-Venom.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendFile(m.chat, haha, 'error.jpg', `
.⬪  ࣪    ࣭     ࣪     ࣭   𝅦𝅦   ࣭     ࣪     ࣭    ࣪  ⬫
   ⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪▭‌໋‌  ۫ ⬧𝑾𝑬𝑳𝑪𝑶𝑴𝑬⬧  ۫  ▭‌໋‌۪۬໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪ll

*◉═══ • ❁ 👑 ❁ • ═══◉*

w乇ﾚcoﾶ乇 ｲo 乃oｲ ん乇刀尺ﾘ

乃ﾘ ﾶo丂ｲﾑｷﾑ ﾶoんﾑﾶ乇d

*◉═══ • ❁ 👑 ❁ • ═══◉*

*『 ️مرحبا بك في بوت هنري 』*

*『 ️اليك قائمه بسورس البوت البوت 』*

*◉═══ • ❁ 👑 ❁ • ═══◉*

*⊱≼ تم تطويري وبرمجتي ≽⊰⊹*
*⊱≼ بواسطه احمد سينتشي ≽⊰⊹*
*⊱≼ اذا كنت تريد صناعه بوت ≽⊰⊹*
*⊱≼ فعليك الانضمام الي قناتنا ≽⊰⊹*

*◉═══ • ❁ 👑 ❁ • ═══◉*

*『 ️واتساب 』*

*⊱≼ https://wa.me/+905360504045 ≽⊰⊹*

*『 ️منصاتي 』*

*⊱≼ غير متوفر ≽⊰⊹*

*『 ️جروب واتساب 』*

*⊱≼ https://chat.whatsapp.com/IqinkrUsBHzCWX8DdvUHLv ≽⊰⊹*

*◉═══ • ❁ 👑 ❁ • ═══◉* `, m)
}
handler.command = handler.help = ['دعم','الدعم']
handler.tags = ['kaneki']
export default handler