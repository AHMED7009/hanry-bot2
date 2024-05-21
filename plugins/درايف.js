
import fg from 'api-dylux' 
let handler = async (m, { conn, args, usedPrefix, command }) => {

	if (!args[0]) throw `✳️ حط رابط من جوجل درايف`
	m.react(rwait) 
	try {
	let res = await fg.GDriveDl(args[0])
	 await m.reply(`*جاري التنزيل*`)
		
	conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
	m.react(done)
   } catch {
	m.reply('*❌ حصل خطاء يرجى المحاوله مع رابط اخر*') 
  }
}
handler.help = ['gdrive']
handler.tags = ['downloader']
handler.command = ['درايف']
handler.credit = false
handler.premium = false

export default handler
