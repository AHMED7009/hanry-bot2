let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^سوكونا|سكونا$/i.test(m.text)) { 
     responses = [ 
       'اسمي سوكونا ساما  ',  
       'تريد شي...، لا صح، اك باي',  
             'لا تتجاوز/ي حدودك انا عمك  ',  
                                     'مش فاضي دلوقتي تعاله بعدين  ' 
   ]; 
     }else if (/^سكونا ساما|سوكونا ساما $/i.test(m.text)) { 
     responses = [ 
       'تريد/ي شي؟',  
          'حبيب سوكونا❤️',  
              ' ويت اروح افشخ غوجو و اجيك',  
                  'تعبان ...، تريد/ي شي ',  
                   'توسيع المجال 🫷🏻🫸🏻 ' 
  ]; 
   }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
             'مكتوب انه اسمي سوكونا بتناديني بوت ليه؟؟🗿', 
              ' مكتوب انه اسمي سكونا بتناديني بوت ليه؟؟🗿',  
                 'انا عمك غور من هنا 🗿',  
                 'اسمي سكونا على فكره🗿',  
                   'اسمي سوكونا على فكره🗿' 
     ]; 
   }else if (/^احبك|بحبك|احبك يا بوت|احبك يا سكونا|احبك يا سوكونا$/i.test(m.text)) { 
     responses = [ 
             'بس انا ما بحبك 🗿', 
              ' حتى انا بحبك🗿❤️',  
                 'حبيب/ه عمك ❤️🗿', 
                 'بسوي نفسي ما شفت 🐦 ',  
                   'روح/ي من هنا مش فاضي لك🗿' 
     ]; 
    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
