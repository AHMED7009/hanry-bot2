let handler = async (m, { command, text }) => m.reply(`*◉═🏮═⊱⛩️⊰═🏮═◉*
*املئ الاسـ📜ـتماره*

*『𝐒.𝐄.𝐃⊰⛩️⊱𝐘𝐀𝐊𝐔𝐙𝐀』🝳*

*يرجي تعبئة الاستمارة للدخول*📝

*الـلـقـب :✒️《》*

*من أنمي :🎡《》*

*ولد ولا بنت :👩🏻‍❤️‍👨🏻《》*

*من طرف: 🎠《 》*

*صورة الشخصية :🎴《》*

*◉═🏮═⊱⛩️⊰═🏮═◉*
*🎐نتمنى أن تبذلو جهدكم في سبيل النقابة🎏*
*◉═🏮═⊱⛩️⊰═🏮═◉*

 *❐ مع تحيات ادارة↶💫*
*『𝐒.𝐄.𝐃⊰⛩️⊱𝐘𝐀𝐊𝐔𝐙𝐀』🝳*`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(ياكوزا|yakuza)$/i

export default handler
