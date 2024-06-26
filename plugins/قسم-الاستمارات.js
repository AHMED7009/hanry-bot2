let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*📜 قائمه الاستمارات 📜*'
            },
            body: {
              text: 'مرحبا بك/ي\nرجاء قم بالبحث عن اسم النقابه التي فيها ثم اختارها'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط هنا للأختيار 📜',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'لاتلعب بالازرار 🌚',
                        rows: [
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'دياموند',
                            description: 'خاص لنقابه DIAMOND',
                            id: '.دياموند'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'وانو',
                            description: 'خاص لنقابه WANO',
                            id: '.وانو'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'سكايبيا',
                            description: 'خاص لنقابه SKIBYA',
                            id: '.سكايبيا'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'دراغون',
                            description: 'خاص لنقابه 🐉 DRAGON 🐉',
                            id: '.دراغون'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'لايتنينغ',
                            description: 'خاص لنقابه LIGHTNING',
                            id: '.لايتنينغ'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'فيري',
                            description: 'خاص لنقابه FAIRY',
                            id: '.فيري'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'علا الدين',
                            description: 'خاص لنقابه ALDDIN',
                            id: '.ظلا'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'لاند',
                            description: 'خاص لنقابه SUDAN',
                            id: '.لاند'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'كلاود',
                            description: 'خاص لنقابه CLUOD',
                            id: '.كلاود'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'ياكوزا',
                            description: 'خاص لنقابه YAKUZA',
                            id: '.ياكوزا'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'اكارا',
                            description: 'خاص لنقابه AKARA',
                            id: '.اكارا'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'استمارة',
                            description: 'خاص لنقابه ESPADA',
                            id: '.استمارة'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'شيبويا',
                            description: 'خاص لنقابه SHIBUYA',
                            id: '.شيبويا'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'عالم الخيال',
                            description: 'خاص لنقابه عالم الخيال',
                            id: '.الخيال'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: 'بلاك',
                            description: 'خاص لنقابه 𝐁𝐋𝐀𝐂𝐊',
                            id: '.بلاك'
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
handler.command = ['قسم-الاستمارات']

export default handler
