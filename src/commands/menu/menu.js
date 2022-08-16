'use strict';

const appT = require('../../settings/appT');

var idlogs = -1001704292654

function sendMenuMessage(ctx) {

    if (ctx.from.id == '1371162188' || ctx.chat.id == '-1001183508653') {

        appT.botT.telegram.sendMessage(ctx.chat.id, `<b>Hola bienvenido a nuestro Bot Global Academy!\n <a href='tg://user?id=${ctx.from.id}'>${ctx.from.first_name}</a> [<code>${ctx.from.id}</code>]</b>`, {
            reply_to_message_id: ctx.update.message.message_id,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: '[⚙️] OpenBullet', callback_data: 'openbulletC' }, { text: "[⚠️] Conceptos", callback_data: 'conceptos' }
                    ],
                    [
                        { text: "[👑] Owner", url: 'https://t.me/astaroth_66' }, { text: '[❌] Exit', callback_data: 'exit' },
                    ],
                ]
            }
        })

        appT.botT.telegram.sendMessage(idlogs, 'Menu usado por el usuario: ' +
            ctx.from.first_name + ' ID: ' + ctx.from.id + ' USERNAME: @' + ctx.from.username)

    } else {
        ctx.replyWithHTML('<b>Usted no tiene permiso para este comando, Comuniquese con el Owner ⛧𝓐𝓼𝓽𝓪𝓻𝓸𝓽𝓱⛧ </b>', {
            reply_to_message_id: ctx.update.message.message_id
        })
        appT.botT.telegram.sendMessage(idlogs, 'Menu NO usado por el usuario: ' +
            ctx.from.first_name + ' ID: ' + ctx.from.id + ' USERNAME: @' + ctx.from.username)
    }
}

appT.botT.hears(/^\!menu|^\/menu|^\.menu/, function(ctx) {
    sendMenuMessage(ctx);
})


// appT.botT.action('openbulletC', ctx => {

//     let messageinfo = (`
// <b>
// Estamos actualizando el servicio.
// Por favor tenga paciencia!!.
// Escoja Una Configuracion de OpenBullet.
// SVB = Silverbullet || anom = 1.4.4 
// ━━━━━━✧━━━━━━
// 🔥 Fox: /fox
//   -»  Status: ON ✅
//   -»  Last Update: 08-07-2022
// ━━━━━━✧━━━━━━
// 🔥 Duolinguo: /duo
//   -»  Status: ON ✅
//   -»  Last Update: 08-07-2022
// ━━━━━━✧━━━━━━
// 🔥 Crunchyroll 2: /cru
//   -»  Status: ON ✅
//   -»  Last Update: 01-07-2022
// ━━━━━━✧━━━━━━
// 🔥 Filmora: /flm
//   -»  Status: ON ✅
//   -»  Last Update: 01-07-2022
// ━━━━━━✧━━━━━━
// 🔥 Zee5: /zee5
//   -»  Status: ON ✅
//   -»  Last Update: 01-07-2022
// </b>`);

//     // ctx.answerCbQuery();
//     // ctx.deleteMessage();
//     //     ctx.replyWithHTML( messageinfo,{
//     //     //caption: messageinfo,
//     //     //parse_mode: "Html",
//     //     reply_markup: {
//     //         inline_keyboard: [
//     //             [
//     //                 { text: '[❌] Exit', callback_data: 'exit' }, { text: '[➡️] Next', callback_data: 'next' },
//     //             ],
//     //             [
//     //                 { text: '[🏠] Home', callback_data: 'home' }
//     //             ],
//     //         ]
//     //     }
//     // })

//     appT.botT.telegram.editMessageText('hola');
// });