import fetch from 'node-fetch' 
 let handler  = async (m, { conn, text }) => { 
 try { 
 let res = await fetch('https://api.waifu.pics/sfw/neko') 
 let img = await res.buffer() 
 let caption = ` 
 مفيش شكرا 💖 
 `.trim() 
 conn.sendFile(m.chat, img, 'waifu.jpg', caption, m) 
 } catch (e) { 
 console.log(e) 
 throw '*اسف حدث خطا!*' 
 }} 
 handler.help = ['neko'] 
 handler.tags = ['random'] 
 handler.command = /^وايفو$/i 
 handler.fail = null 
 export default handler
