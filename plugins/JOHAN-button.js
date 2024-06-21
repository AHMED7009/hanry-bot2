let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*قـائـمـة الـاوامـر 🤖*'
            },
            body: {
              text: '*اهلا بك يا ${username} في قائمه الاوامر*\n*اصبحت القائمه تتحكم عن طريق الازرار*\n*لاتلعب كثير بالازرار😊*'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط هنا للأختيار الاقسام',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'لاتلعب بالازرار 🌚',
                        rows: [
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: '.قسم-الاستمارات',
                            description: 'بجيب لك الاستمارات',
                            id: '.قسم-الاستمارات'
                          },
                          {
                            header: '👥قــســم الـجـروبـات',
                            title: '.قسم-الجروب',
                            description: 'بيجيب لك اوامر الجروبات',
                            id: '.قسم-الجروب'
                          },
                          {
                            header: '🔄قــســم الـتـحـويـل',
                            title: '.قسم-التحويل',
                            description: 'بيجيب لك اوامر التحويل',
                            id: '.قسم-التحويل'
                          },
                          {
                            header: '🥇قــســم الـتـرفـيـة',
                            title: '.قسم-الترفيه',
                            description: 'بيجيب لك اوامر الترفيه',
                            id: '.قسم-الترفيه'
                          },
                          {
                            header: '🖥️قــســم الـذكـاء',
                            title: '.قسم-الذكاء',
                            description: 'بيجيب لك اوامر الذكاء الاصطناعي',
                            id: '.قسم-الذكاء'
                          },
                          {
                            header: '♻️قــســم الـتـنـزيـل',
                            title: '.قسم-التنزيل',
                            description: 'بيجيب اك اوامر التحميل',
                            id: '.قسم-التنزيل'
                          },
                          {
                            header: '☁️قــســم الـبـحـث',
                            title: '.قسم-البحث',
                            description: بيجيب لك اوامر البحث',
                            id: '.قسم-البحث'
                          },
                          {
                            header: '🎯قــســم الـعـشـوائـيـات',
                            title: '.قسم-العشوائيه',
                            description: 'بيجيب لك اوامر العشوائيات',
                            id: '.قسم-العشوائيه'
                          },
                          {
                            header: '🕋 قــســم الدين',
                            title: '.قسم-الدين',
                            description: 'بيجيب لك اوامر الدين',
                            id: '.قسم-الدين'
                          },
                          {
                            header: '🎥قــســم الايـديـت',
                            title: '.قسم-الايديت',
                            description: 'بيجيب لك اوامر الايديت',
                            id: '.قسم-الايديت'
                          },
                          {
                            header: '️⛪ قــســم البنك',
                            title: '.قسم-البنك',
                            description: 'بيجيب لك اوامر البنك',
                            id: '.قسم-البنك'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['القائمه', 'القائمة']

export default handler
