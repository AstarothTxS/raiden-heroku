'use strict';


const appT = require('../../../settings/appT')

var idlogs = -1001704292654

appT.botT.command('/fox', (ctx) => {
    if (ctx.from.id == '1371162188' || ctx.chat.id == '-1001183508653') {
        ctx.deleteMessage();
        ctx.telegram.sendChatAction(ctx.chat.id, 'upload_document')
        ctx.replyWithDocument({ source: './src/commands/menu/openbulletC/configs/FOX β§ππΌπ½πͺπ»πΈπ½π±β§.anom', filename: 'FOX β§ππΌπ½πͺπ»πΈπ½π±β§.anom' }, { caption: 'Proxys free.\nEste mensaje se eliminara en breve.' }).then((contentMessage) => {
            setTimeout(() => {
                appT.botT.telegram.deleteMessage(contentMessage.chat.id, contentMessage.message_id)
            }, 30000)
        })
        appT.botT.telegram.sendMessage(idlogs, 'fox usado por el usuario: ' +
            ctx.from.first_name + ' ID: ' + ctx.from.id + ' USERNAME: @' + ctx.from.username)
    } else {
        ctx.replyWithHTML('<b>Usted no tiene permiso para este comando, Comuniquese con el Owner β§ππΌπ½πͺπ»πΈπ½π±β§ </b>', {
            reply_to_message_id: ctx.update.message.message_id
        })
    }
})

appT.botT.command('/duo', (ctx) => {
    if (ctx.from.id == '1371162188' || ctx.chat.id == '-1001183508653') {
        ctx.deleteMessage();
        ctx.telegram.sendChatAction(ctx.chat.id, 'upload_document')
        ctx.replyWithDocument({ source: './src/commands/menu/openbulletC/configs/Duolingo.anom', filename: 'Duolinguo.anom' }, { caption: 'Proxys free.\nEste mensaje se eliminara en breve.' }).then((contentMessage) => {
            setTimeout(() => {
                appT.botT.telegram.deleteMessage(contentMessage.chat.id, contentMessage.message_id)
            }, 30000)
        })
        appT.botT.telegram.sendMessage(idlogs, 'duolinguo usado por el usuario: ' +
            ctx.from.first_name + ' ID: ' + ctx.from.id + ' USERNAME: @' + ctx.from.username)
    } else {
        ctx.replyWithHTML('<b>Usted no tiene permiso para este comando, Comuniquese con el Owner β§ππΌπ½πͺπ»πΈπ½π±β§ </b>', {
            reply_to_message_id: ctx.update.message.message_id
        })
    }
})

appT.botT.command('/prm', (ctx) => {
    if (ctx.from.id == '1371162188' || ctx.chat.id == '-1001183508653') {
        ctx.deleteMessage();
        ctx.telegram.sendChatAction(ctx.chat.id, 'upload_document')
        ctx.replyWithDocument({ source: './src/commands/menu/openbulletC/configs/paramount+πThelokojo04.08.anom', filename: 'paramount+04.08πThelokojo.anom' }, { caption: 'Proxys free. De paga Mejor\nEste mensaje se eliminara en breve.' }).then((contentMessage) => {
            setTimeout(() => {
                appT.botT.telegram.deleteMessage(contentMessage.chat.id, contentMessage.message_id)
            }, 30000)
        })
        appT.botT.telegram.sendMessage(idlogs, 'paramount usado por el usuario: ' +
            ctx.from.first_name + ' ID: ' + ctx.from.id + ' USERNAME: @' + ctx.from.username)
    } else {
        ctx.replyWithHTML('<b>Usted no tiene permiso para este comando, Comuniquese con el Owner β§ππΌπ½πͺπ»πΈπ½π±β§ </b>', {
            reply_to_message_id: ctx.update.message.message_id
        })
    }
})

appT.botT.command('/vix', (ctx) => {
    if (ctx.from.id == '1371162188' || ctx.chat.id == '-1001183508653') {
        ctx.deleteMessage();
        ctx.telegram.sendChatAction(ctx.chat.id, 'upload_document')
        ctx.replyWithDocument({ source: './src/commands/menu/openbulletC/configs/vix.anom', filename: 'vixπThelokojo.anom' }, { caption: 'Proxys free. De paga Mejor\nEste mensaje se eliminara en breve.' }).then((contentMessage) => {
            setTimeout(() => {
                appT.botT.telegram.deleteMessage(contentMessage.chat.id, contentMessage.message_id)
            }, 30000)
        })
        appT.botT.telegram.sendMessage(idlogs, 'vix usado por el usuario: ' +
            ctx.from.first_name + ' ID: ' + ctx.from.id + ' USERNAME: @' + ctx.from.username)
    } else {
        ctx.replyWithHTML('<b>Usted no tiene permiso para este comando, Comuniquese con el Owner β§ππΌπ½πͺπ»πΈπ½π±β§ </b>', {
            reply_to_message_id: ctx.update.message.message_id
        })
    }
})

appT.botT.command('/fnm', (ctx) => {
    if (ctx.from.id == '1371162188' || ctx.chat.id == '-1001183508653') {
        ctx.deleteMessage();
        ctx.telegram.sendChatAction(ctx.chat.id, 'upload_document')
        ctx.replyWithDocument({ source: './src/commands/menu/openbulletC/configs/FunimationπThelokojo.anom', filename: 'funimationπThelokojo.anom' }, { caption: 'Proxys free. De paga Mejor\nEste mensaje se eliminara en breve.' }).then((contentMessage) => {
            setTimeout(() => {
                appT.botT.telegram.deleteMessage(contentMessage.chat.id, contentMessage.message_id)
            }, 30000)
        })
        appT.botT.telegram.sendMessage(idlogs, 'funimation usado por el usuario: ' +
            ctx.from.first_name + ' ID: ' + ctx.from.id + ' USERNAME: @' + ctx.from.username)
    } else {
        ctx.replyWithHTML('<b>Usted no tiene permiso para este comando, Comuniquese con el Owner β§ππΌπ½πͺπ»πΈπ½π±β§ </b>', {
            reply_to_message_id: ctx.update.message.message_id
        })
    }
})

appT.botT.command('/vnsh', (ctx) => {
    if (ctx.from.id == '1371162188' || ctx.chat.id == '-1001183508653') {
        ctx.deleteMessage();
        ctx.telegram.sendChatAction(ctx.chat.id, 'upload_document')
        ctx.replyWithDocument({ source: './src/commands/menu/openbulletC/configs/IpvanishπThelokojo.anom', filename: 'ipvanishπThelokojo.anom' }, { caption: 'Proxys free. De paga Mejor\nEste mensaje se eliminara en breve.' }).then((contentMessage) => {
            setTimeout(() => {
                appT.botT.telegram.deleteMessage(contentMessage.chat.id, contentMessage.message_id)
            }, 30000)
        })
        appT.botT.telegram.sendMessage(idlogs, 'funimation usado por el usuario: ' +
            ctx.from.first_name + ' ID: ' + ctx.from.id + ' USERNAME: @' + ctx.from.username)
    } else {
        ctx.replyWithHTML('<b>Usted no tiene permiso para este comando, Comuniquese con el Owner β§ππΌπ½πͺπ»πΈπ½π±β§ </b>', {
            reply_to_message_id: ctx.update.message.message_id
        })
    }
})

appT.botT.command('/mych', (ctx) => {
    if (ctx.from.id == '1371162188' || ctx.chat.id == '-1001183508653') {
        ctx.deleteMessage();
        ctx.telegram.sendChatAction(ctx.chat.id, 'upload_document')
        ctx.replyWithDocument({ source: './src/commands/menu/openbulletC/configs/MYCANALPLUSπThelokojo.anom', filename: 'mycanalplusπThelokojo.anom' }, { caption: 'Proxys free. De paga Mejor\nEste mensaje se eliminara en breve.' }).then((contentMessage) => {
            setTimeout(() => {
                appT.botT.telegram.deleteMessage(contentMessage.chat.id, contentMessage.message_id)
            }, 30000)
        })
        appT.botT.telegram.sendMessage(idlogs, 'mychanel usado por el usuario: ' +
            ctx.from.first_name + ' ID: ' + ctx.from.id + ' USERNAME: @' + ctx.from.username)
    } else {
        ctx.replyWithHTML('<b>Usted no tiene permiso para este comando, Comuniquese con el Owner β§ππΌπ½πͺπ»πΈπ½π±β§ </b>', {
            reply_to_message_id: ctx.update.message.message_id
        })
    }
})

appT.botT.command('/tnl', (ctx) => {
    if (ctx.from.id == '1371162188' || ctx.chat.id == '-1001183508653') {
        ctx.deleteMessage();
        ctx.telegram.sendChatAction(ctx.chat.id, 'upload_document')
        ctx.replyWithDocument({ source: './src/commands/menu/openbulletC/configs/TunnelBear v2 (FULL CAPTURA).svb', filename: 'TunnelBear(FULL CAPTURA).svb' }, { caption: 'Proxys free. De paga Mejor\nEste mensaje se eliminara en breve.' }).then((contentMessage) => {
            setTimeout(() => {
                appT.botT.telegram.deleteMessage(contentMessage.chat.id, contentMessage.message_id)
            }, 30000)
        })
        appT.botT.telegram.sendMessage(idlogs, 'TunellBear usado por el usuario: ' +
            ctx.from.first_name + ' ID: ' + ctx.from.id + ' USERNAME: @' + ctx.from.username)
    } else {
        ctx.replyWithHTML('<b>Usted no tiene permiso para este comando, Comuniquese con el Owner β§ππΌπ½πͺπ»πΈπ½π±β§ </b>', {
            reply_to_message_id: ctx.update.message.message_id
        })
    }
})