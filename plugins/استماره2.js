let handler = async (m, { command, text }) => m.reply(`*╔═╼─╾─╾═【🕸️】═╼─╾╾─╾═╗*
*رد تــلــقــائــي🧑🏻‍💻*
املئ الاسـ📜ـتماره 
*『𝐒.𝐓.𝐍⊰💎⊱𝐃𝐈𝐀𝐌𝐎𝐍𝐃』🝳*

*يرجي تعبئة الاستمارة للدخول*📝

*الـلـقـب :✒️《》*

*من أنمي :🎡《》*

*ولد ولا بنت :👤《》*

*من طرف: 🔮《 》*

*صورة الشخصية :🎴《》*

*◉═✨═⊱💎⊰═✨═◉*
*🎐نتمنى أن تبذلو جهدكم في سبيل النقابة🎏*
*◉═✨═⊱💎⊰═✨═◉*

 *❐ مع تحيات ادارة↶💫*
*『𝐒.𝐓.𝐍⊰💎⊱𝐃𝐈𝐀𝐌𝐎𝐍𝐃』🝳*`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(دياموند)$/i

export default handler
