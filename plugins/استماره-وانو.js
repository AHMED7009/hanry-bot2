let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*⎔⋅ ━ ╼╃✦⊰ •﹝⚡﹞• ⊱✦╄╾ ━ ⋅⎔*

*◞✍︎نࢪحب بك في مملكة ريكال⊰⚡→◜*
*⎔⋅ ━ ╼╃✦⊰ •﹝⚡﹞• ⊱✦╄╾ ━ ⋅⎔*

*✍︎│ اللقب ⇇「」*
*✍︎│ اسم الانمي ⇇「」*
*✍︎│ بنت ولا ولد ⇇「」*
*✍︎│ من طرف ⇇「」*
*✍︎│ صورة للشخصية⇇「」*

*⎔⋅ ━ ╼╃✦⊰ •﹝⚡﹞• ⊱✦╄╾ ━ ⋅⎔*
*تنبيه مهم 🚫*
*⇐ ممنوع للولد ان يختار لقب البنت والعكس*
*⎔⋅ ━ ╼╃✦⊰ •﹝⚡﹞• ⊱✦╄╾ ━ ⋅⎔*
*⤾رابط الألقاب المأخوذة*

* https://docs.google.com/spreadsheets/d/15KXsiTmZ5-jriPosDPjDojzYvGv2kmJT_mQQ6z8KUyw/edit?usp=drivesdk
* 
*_مع تحيات ادارة  ⚡「𝑹•𝑲•𝑳」_*

*✍︎│ اللقب ⇇「」*
*✍︎│ اسم الانمي ⇇「」*
*✍︎│ بنت ولا ولد ⇇「」*
*✍︎│ من طرف ⇇「」*
*✍︎│ صورة للشخصية⇇「」*

*⎔⋅ ━ ╼╃✦⊰ •﹝⚡﹞• ⊱✦╄╾ ━ ⋅⎔*
*تنبيه مهم 🚫*
*⇐ ممنوع للولد ان يختار لقب البنت والعكس*
*⎔⋅ ━ ╼╃✦⊰ •﹝⚡﹞• ⊱✦╄╾ ━ ⋅⎔*
*⤾رابط الألقاب المأخوذة*

* https://docs.google.com/spreadsheets/d/15KXsiTmZ5-jriPosDPjDojzYvGv2kmJT_mQQ6z8KUyw/edit?usp=drivesdk
* 
*_مع تحيات ادارة  ⚡「𝑹•𝑲•𝑳」_*`;
    

    conn.sendFile(m.chat, 'https://telegra.ph/file/722efd258d6ac9bd9f645.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(وانو|wano)$/i;
handler.command = new RegExp;

export default handler;
