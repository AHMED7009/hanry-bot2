let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^مابسترو |ميصترو$/i.test(m.text)) { 
     responses = [ 
       'ميصترو عمك وعم عيالك 😭♥  ',  
       'ميصترو ابوك 😔💔',  
             'عيون ميصترو  ',  
                                     'مش فاضي دلوقتيتعاله بعدين  ' 
   ]; 
     }else if (/^احمض|اضحمض $/i.test(m.text)) { 
     responses = [ 
       'عيون احمض',  
          'عاوز اي من الزفت احمض',  
              'بحبق وكدا ',  
                  'انا بضانن ',  
                   'احمض عمك وعم عيالك ' 
  ]; 
   }else if (/^خالض|خالضض|خالد|خالوضتي$/i.test(m.text)) { 
     responses = [ 
             'خالض عمك 😭♥', 
              ' خالض عمك وعم عيالك 😭♥',  
                 'خالض بيقولك لف وتع بضهرك 😭♥',  
                 'خالض بيحبك 😭♥ ',  
                   'عيون خالض 😭♥' 
     ]; 
   }else if (/^يصاصا |صاصا |صوص |صوصي|مصطفي | صاصاا |صااصا |صااصاا$/i.test(m.text)) { 
     responses = [ 
             'عيون صاصا 😭♥', 
              ' صاصا عمك وعم عيالك 😭♥',  
                 'صاصا بيقولك لف وتع بضهرك 😭♥',  
                 'صاصا بيحبك 😭♥ ',  
                   'روح صاصا اصلا 😭♥' 
     ]; 
    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;