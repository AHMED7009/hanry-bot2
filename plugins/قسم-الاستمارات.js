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
                    title: 'اضغط هنا للأختيار 😀',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'لاتلعب بالازرار 🌚',
                        rows: [
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: '.دياموند',
                            description: 'خاص لنقابه DIAMOND',
                            id: '.دياموند'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: '.وانو',
                            description: 'خاص لنقابه WANO',
                            id: '.وانو'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: '.سكايبيا',
                            description: 'خاص لنقابه SKIBYA',
                            id: '.سكايبيا'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: '.لايتنينغ',
                            description: 'خاص لنقابه LIGHTNING',
                            id: '.لايتنينغ'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: '.فيري',
                            description: 'خاص لنقابه FAIRY',
                            id: '.فيري'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: '.لاند',
                            description: 'خاص لنقابه SUDAN',
                            id: '.لاند'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: '.ياكوزا',
                            description: 'خاص لنقابه YAKUZA',
                            id: '.ياكوزا'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: '.اكارا',
                            description: 'خاص لنقابه AKARA',
                            id: '.اكارا'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: '.استمارة',
                            description: 'خاص لنقابه ESPADA',
                            id: '.استمارة'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: '.شيوبيا',
                            description: 'خاص لنقابه SHIBUYA',
                            id: '.شيوبيا'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: '.سكارليت',
                            description: 'خاص لنقابه SKARLET',
                            id: '.سكارليت'
                          },
                          {
                            header: '📜قــســم الاسـتـمـارات',
                            title: '.بلاك',
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
