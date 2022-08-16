'use strict';
const appT = require('../../settings/appT')

appT.botT.hears(/\/start (.+)|^\/start/i, (ctx, match) => {
    let invite_code;
    var chat = {};
    chat.id = ctx.chat.id;
    var user = {};
    user.id = ctx.from.id;
    user.name = ctx.from.first_name;

    if (match[1] != undefined) {
        invite_code = match[1];
        appT.botT.telegram.sendMessage(chat.id, `${appT.i18n.__('Hello ')} ${user.name} ${app.i18n.__(' with invitation code ')} ${invite_code}`)
    } else {
        appT.botT.telegram.sendMessage(chat.id, `<b>👋 ${appT.i18n.__('Hello ')} ${user.name} [<code>${user.id}</code>]\n\nEstamos creando este bot para usted. /menu</b>`, {
            parse_mode: "Html"
        })
    }
})