'use strict';

const appT = require('../../settings/appT')

// "Welcome" to new users and "goodbye"

// appT.botT.on('new_chat_member', ctx => {
//     const { new_chat_member } = ctx.message
//     const bienvenida = `
//     \n<b>♦️ <a href='tg://user?id=${new_chat_member.id}'>${new_chat_member.first_name}</a><i> \n
// BIENVENIDO A GLOBAL ACADEMY, LE DESEAMOS LO MEJOR EN ESTA COMUNIDAD!!!\n
// ⚜️ <code>[ ${new_chat_member.username} ] </code>
// ⚜️ <code>[ ${new_chat_member.id} ]</code>
// \nTenemos algunas reglas que quisiera que leas:
// /rules   [Para Ver Las Reglas]
// /menu   [Menu Principal]
// \n✅ESTE BOT SE ENCUENTRA EN DESAROLLO</i></b>`

//     if (ctx.message.new_chat_member.is_bot == true) {
//         ctx.reply('Nuevo bot ingresado', {
//             reply_to_message_id: ctx.update.message.message_id,
//         })

//     } else {
//         ctx.replyWithVideo({ source: './src/commands/initial_commands/video/vendetta.mp4' }, {
//             caption: bienvenida,
//             parse_mode: "Html"
//         })
//     }
// })

appT.botT.on('left_chat_member', ctx => {
    const { left_chat_member } = ctx.message
    ctx.reply(`Hasta la vista baby!!!`, {
        reply_to_message_id: ctx.update.message.message_id
    })
})