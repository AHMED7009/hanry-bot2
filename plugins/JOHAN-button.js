let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*🤖 قائمه الاوامر 🤖*'
            },
            body: {
              text: '*اهلا بك يا ${username} في قائمه الاوامر*\n*اصبحت القائمه تتحكم عن طريق الازرار*\n*لاتلعب كثير بالازرار😊*'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط هنا للأختيار 😀',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'لاتلعب بالازرار 🌚',
                        rows: [
                          {
                            header: 'قــســم الاسـتـمـارات',
                            title: 'الاستمارات',
                            description: 'بيجيب لك الاستمارات',
                            id: '.قسم-الاستمارات'
                          },
                          {
                            header: 'قــســم الجروبات',
                            title: 'الجروبات',
                            description: 'بيجيب لك اوامر الجروبات',
                            id: '.قسم-الجروب'
                          },
                          {
                            header: 'قــســم الترفيه',
                            title: '.الالعاب',
                            description: 'بيجيب لك اوامر الالعاب',
                            id: '.قسم-الترفيه'
                          },
                          {
                            header: 'قــســم التحويل',
                            title: 'التحويلات',
                            description: 'بيجيب لك اوامر التحويل',
                            id: '.قسم-التحويل'
                          },
                          {
                            header: 'قــســم التنزيلات',
                            title: 'التحميلات',
                            description: 'بيجيب لك اوامر التحميل',
                            id: '.قسم-التنزيل'
                          },
                          {
                            header: 'قــســم الذكاء',
                            title: 'ذكاء اصطناعي',
                            description: 'بيجيب لك اوامر الذكاء الاصطناعي',
                            id: '.قسم-الذكاء'
                          },
                          {
                            header: 'قــســم الايديت',
                            title: '.تصاميم',
                            description: 'بيجيب لك اوامر ايديت',
                            id: '.قسم-الايديت'
                          },
                          {
                            header: 'قــســم البحث',
                            title: '.البحث',
                            description: 'بيطيب لك اوامر البحث',
                            id: '.قسم-البحث'
                          },
                          {
                            header: 'قــســم العشوائيات',
                            title: 'عشوائي',
                            description: 'بيجيب لك اوامر العشوائيات',
                            id: '.قسم-العشوائيه'
                          },
                          {
                            header: 'قــســم البنك',
                            title: 'البنك',
                            description: 'بيجيب لك اوامر البنك',
                            id: '.قسم-البنك'
                          },
                          {
                            header: 'قــســم الدين الاسلامي',
                            title: 'الاسلام ديننا',
                            description: 'بيجيب لك اوامر الدين',
                            id: '.قسم-الدين'
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
handler.command = ['القائمة', 'قائمه', '🤖']

export default handler
