let handler = async (m, { command, text }) => m.reply(`*💥❯══⊹⊱≼ مرحبا بك ≽⊰⊹══❮💥*
*❮ حط رمز قبل قسم حاجه من 👈  ( / . )❮*

*❮ اذا عندك طلب او اي شي تريد تقوله للمطور اكتب (.تقرير وحط طلبك)❮*

*❆❯══⊹⊱≼ ♻️ ≽⊰⊹══❮❆*
*『 ️♻️ 』⇦ قسم التنزيلات ╿↶*
*❆❯══⊹⊱≼ ♻️ ≽⊰⊹══❮❆*

*⚡┣.انستا2*
❍↜بينزل فيديو من الانستجرام

*⚡┣.اغنيه*
❍↜بينزل اغاني

*⚡┣.اغاني*
❍↜بينزل اغاني من اليوتيوب

*⚡┣.ملصقات*
❍↜بيجيب لك ملصقات لاي شي بس اكتب انجليزي

*⚡┣.فيسبوك*
❍↜بينزل فيديوهات من الفيس

*⚡┣.فيس2*
❍↜بينزل فيديوهات من الفيس

*⚡┣.تطبيق*
❍↜بينزل العاب و تطبيقات

*⚡┣.تيك*
❍↜بينزل فيديو من التيك توك

*⚡┣.يوتيوب*
❍↜بينزل فيديو من االيوتيوب

*⚡┣.ميغا*
❍↜بيحمل من موقع mega

*⚡┣.يوتيوبت*
❍↜بينزل فيديو من يوتيوب

*⚡┣.فريبيك*
❍↜بينزل صوره من موقع فريبيك☾

*⚡┣.صوره*
❍↜بينزل صور من جوجل

*⚡┣.تليجرام*
❍↜بينزل لك حزمه ملصقات من التليجرام

*⚡┣.جوجل*
❍↜بينزل من جوجل 

*⚡┣.شغل*
❍↜بينزل اغاني

*⚡┣.بحث*
❍↜بيبحث عن فيديوهات عل اليوتيوب

*⚡┣.Yts*
❍↜بينزل فيديوهات بجوده عاليه

*⚡┣.ميديافاير*
❍↜بيحمل من ميديافاير 

*⚡┣.جيت*
❍↜بيحمل من اي رابط`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(قسم التنزيل|قسم-التنزيل)$/i

export default handler
