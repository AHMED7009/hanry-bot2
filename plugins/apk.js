import { download } from 'aptoide-scraper';

let handler = async (m, { conn, usedPrefix: prefix, command, text }) => {
  try {
    if (command === 'تطبيق') {
      if (!text) throw `🎯حط اسم العبه اللي عايز او التطبيق اللي عايز تنزله وانتظر حتي تتم العملية.`;

      await conn.reply(m.chat, global.wait, m);
      let data = await download(text);

      if (data.size.replace(' MB', '') > 500) {
        return await conn.sendMessage(m.chat, { text: '*⚠️ التطبيق حجمه كبير*' }, { quoted: m });
      }

      if (data.size.includes('GB')) {
        return await conn.sendMessage(m.chat, { text: '*⚠️ التطبيق حجمه كبير*' }, { quoted: m });
      }

      await conn.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      );
    }
  } catch {
    throw `*❌حدث خطأ حط لينك او اسم العبه اللي عايز تنزلها.*`;
  }
};

handler.command = /^تطبيق/i;
export default handler;
