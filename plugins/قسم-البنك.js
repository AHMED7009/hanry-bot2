let handler = async (m, { command, text }) => m.reply(`*💥❯══⊹⊱≼ مرحبا بك ≽⊰⊹══❮💥*
*❮ حط رمز قبل قسم حاجه من 👈  ( / . )❮*

*❮ اذا عندك طلب او اي شي تريد تقوله للمطور اكتب (.تقرير وحط طلبك)❮*

*❆❯══⊹⊱≼ ️⛪ ≽⊰⊹══❮❆*
*『 ️⛪ 』⇦ قسم البنك ╿↶*
*❆❯══⊹⊱≼ ️⛪ ≽⊰⊹══❮❆*
  
*💵┣.البنك*
❍↜بيجبلك بنك البوت

*💵┣.الماس*
❍↜بيعت قائمة الالماس الخاصه بك

*💵┣.عمل*
❍↜بيديك مكافأة العمل

*💵┣.هجوم*
❍↜هجوم لتجميع الXP

*💵┣.اصف*
❍↜يضيف عملات

*💵┣.حظ*
❍↜بيجيب لك عملات

*💵┣.ترتيب*
❍↜بيجيب ترتيبك

*💵┣.لفل*
❍↜قائمه لفل الخاصة بك

*💵┣.تعدين*
❍↜مكافأة من البوت

*💵┣.يومي*
❍↜بيديك مكافأة يوميه

*💵┣.شراء*
❍↜قائمه الشراء بالXP و الماس`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(قسم البنك|قسم-البنك)$/i

export default handler
