import { download } from 'aptoide-scraper';

let handler = async (m, { conn, usedPrefix: prefix, command, text }) => {
  try {
    if (command === 'modapk') {
      if (!text) throw `*[❗] رجاء قم بوضع اسم التطبيق.*`;

      await conn.reply(m.chat, global.wait, m);
      let data = await download(text);

      if (data.size.replace(' MB', '') > 200) {
        return await conn.sendMessage(m.chat, { text: '*[⛔] حجم التطبيق كبير.*' }, { quoted: m });
      }

      if (data.size.includes('GB', '') > 200) {
        return await conn.sendMessage(m.chat, { text: '*[⛔] حجم التطبيق كبير.*' }, { quoted: m });
      }

      await conn.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      )
    }
  } catch {
    throw `*حدث خطاء لم اتمكن من تنزيل الملف*`;
  }
};

handler.help = ['modapk']
handler.tags = ['downloader']
handler.command = /^modapk$/i;
export default handler;
