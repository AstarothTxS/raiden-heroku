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
                        { text: '[βοΈ] OpenBullet', callback_data: 'openbulletC' }, //{ text: "[β οΈ] Conceptos", callback_data: 'conceptos' }
                    ],
                    [
                        { text: "[π] Owner", url: 'https://t.me/astaroth_66' }, { text: '[β] Exit', callback_data: 'exit' },
                    ],
                ]
            }
        })

        appT.botT.telegram.sendMessage(idlogs, 'Menu usado por el usuario: ' +
            ctx.from.first_name + ' ID: ' + ctx.from.id + ' USERNAME: @' + ctx.from.username)

    } else {
        ctx.replyWithHTML('<b>Usted no tiene permiso para este comando, Comuniquese con el Owner β§ππΌπ½πͺπ»πΈπ½π±β§ </b>', {
            reply_to_message_id: ctx.update.message.message_id
        })
        appT.botT.telegram.sendMessage(idlogs, 'Menu NO usado por el usuario: ' +
            ctx.from.first_name + ' ID: ' + ctx.from.id + ' USERNAME: @' + ctx.from.username)
    }
}

appT.botT.hears(/^\!menu|^\/menu|^\.menu/, function(ctx) {
    sendMenuMessage(ctx);
})


appT.botT.action('openbulletC', ctx => {

    let messageinfo = (`
<b>
Estamos actualizando el servicio.
Por favor tenga paciencia!!.
Escoja Una Configuracion de OpenBullet.
SVB = Silverbullet || anom = 1.4.4 
βββββββ§ββββββ
π₯ Fox: /fox
  -Β»  Status: ON β
  -Β»  Last Update: 20-08-2022
βββββββ§ββββββ
π₯ Duolinguo: /duo
  -Β»  Status: ON β
  -Β»  Last Update: 20-08-2022
βββββββ§ββββββ
π₯ Paramount+: /prm
  -Β»  Status: ON β
  -Β»  Last Update: 20-08-2022
βββββββ§ββββββ
π₯ Vix: /vix
  -Β»  Status: ON β
  -Β»  Last Update: 20-08-2022
βββββββ§ββββββ
π₯ Funimation: /fnm
  -Β»  Status: ON β
  -Β»  Last Update: 20-08-2022
βββββββ§ββββββ
π₯ Ipvanish: /vnsh
  -Β»  Status: ON β
  -Β»  Last Update: 20-08-2022
βββββββ§ββββββ
π₯ Mycanalplus: /mych
  -Β»  Status: ON β
  -Β»  Last Update: 20-08-2022
βββββββ§ββββββ
π₯ TunellBear: /tnl
  -Β»  Status: ON β
  -Β»  Last Update: 20-08-2022
βββββββ§ββββββ
</b>`);

    ctx.editMessageText(messageinfo, {
        parse_mode: "Html",
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '[β] Exit', callback_data: 'exit' }, //{ text: '[β‘οΈ] Next', callback_data: 'next' },
                ],
                // [
                //     { text: '[π ] Home', callback_data: 'home' }
                // ],
            ]
        }
    })
});

appT.botT.action('exit', ctx => {
    ctx.editMessageText(`<b>Menu finalizado <a href='tg://user?id=${ctx.from.id}'>${ctx.from.first_name}</a>\nGracias por usar nuestro servicio..</b>`, { parse_mode: 'HTML' }, {
            reply_to_message_id: ctx.update.update_id.message
        })
        // .then((contentMessage) => {
        //     setTimeout(() => {
        //         appT.botT.telegram.deleteMessage(contentMessage.chat.id, contentMessage.message_id)
        //     }, 20000)
        // })
})
