let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*فا؏ـــليه الحَٖࢪوفٖ* 
*◈≼━⊹══━━━〔🏰〕━━━══⊹━≽◈*
*شٖـــ↯ـــࢪح  الفا؏ـــليه:「يختار المقدم حرف. واول من يجاوب بشيء عشوائيه يبدا بنفس الحرف هو الفائز」✎*\n\n*الـــســـؤال ✍️:-*\n\n*『${pickRandom(global.kshisydsi)}』*\n\n\n*『SUKUNA BOT』*`, m)
}
handler.help = ['kshskshd']
handler.tags = ['group']
handler.command = /حروف|احرف/i
handler.admin = true
handler.botAdmin = true
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

 global.kshisydsi = [ 
 " جماد بحرف ⤌ ر  ", 
" مدينة بحرف ⤌ ع  ",
" حيوان ونبات بحرف ⤌ خ  ", 
" اسم بحرف ⤌ ح  ", 
" اسم ونبات بحرف ⤌ م  ", 
" دولة عربية بحرف ⤌ ق  ", 
" جماد بحرف ⤌ ي  ", 
" نبات بحرف ⤌ ج  ", 
" اسم بنت بحرف ⤌ ع  ", 
" اسم ولد بحرف ⤌ ع  ", 
" اسم بنت وولد بحرف ⤌ ث  ", 
" جماد بحرف ⤌ ج  ",
" حيوان بحرف ⤌ ص  ",
" دولة بحرف ⤌ س  ",
" نبات بحرف ⤌ ج  ",
" مدينة بحرف ⤌ ب  ",
" نبات بحرف ⤌ ر  ",
" اسم بحرف ⤌ ك  ",
" حيوان بحرف ⤌ ظ  ",
" جماد بحرف ⤌ ذ  ",
" مدينة بحرف ⤌ و  ",
" اسم بحرف ⤌ م  ",
" اسم بنت بحرف ⤌ خ  ",
" اسم و نبات بحرف ⤌ ر  ",
" نبات بحرف ⤌ و  ",
" حيوان بحرف ⤌ س  ",
" مدينة بحرف ⤌ ك  ",
" اسم بنت بحرف ⤌ ص  ",
" اسم ولد بحرف ⤌ ق  ",
" نبات بحرف ⤌ ز  ",
"  جماد بحرف ⤌ ز  ",
"  مدينة بحرف ⤌ ط  ",
"  جماد بحرف ⤌ ن  ",
"  مدينة بحرف ⤌ ف  ",
"  حيوان بحرف ⤌ ض  ",
"  اسم بحرف ⤌ ك  ",
"  نبات و حيوان و مدينة برف ⤌ س  ", 
"  اسم بنت بحرف ⤌ ج  ", 
"  مدينة بحرف ⤌ ت  ", 
"  جماد بحرف ⤌ ه  ", 
"  اسم بنت بحرف ⤌ ر  ", 
" اسم ولد بحرف ⤌ خ  ", 
" جماد بحرف ⤌ ع  ",
" حيوان بحرف ⤌ ح  ",
" نبات بحرف ⤌ ف  ",
" اسم بنت بحرف ⤌ غ  ",
" اسم ولد بحرف ⤌ و  ",
" نبات بحرف ⤌ ل  ",
"مدينة بحرف ⤌ ع  ",
"دولة واسم بحرف ⤌ ب  ", 
   
 ] 
