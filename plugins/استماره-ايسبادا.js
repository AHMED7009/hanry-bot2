let handler = async (m, { command, text }) => m.reply(`*⊱───═⪨༻𓆩﷽𓆪༺⪩═───⊰*

*املئ الاسـ📜ـتماره*

*✍︎ | اسـتـمـارة دخـول النقـابه |*
~*⊱───═⪨༻𓆩⚔️𓆪༺⪩═───⊰*~
*✍︎اللقب🔮• 「」*
*✍︎الانمي🏴‍☠️•「」*
*✍︎من طرف مين•「」*
*✍︎الجنس•「」*
~*⊱───═⪨༻𓆩⚔️𓆪༺⪩═───⊰*~
*★ارسل صوره للقب الذي اخترته★*
*∅ممنوع ولد ياخذ لقب بنت والعكس∅*
*⊱───═⪨༻𓆩⚔️𓆪༺⪩═───⊰*

* 
*_مع تحيات ادارة  ⚔️「𝐊.𝐓.𝐍」_*`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(استمارة)$/i

export default handler
