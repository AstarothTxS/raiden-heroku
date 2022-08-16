 'use strict';

 const appT = require('../../settings/appT')

 // const app = require('../../settings/app')

 // app.bot.onText(/^\!chatid|^\/chatid/, function (msg) {
 //     var chat = {};
 //     chat.id = msg.chat.id;
 //     chat.title = msg.chat.title;
 //     chat.type = msg.chat.type;
 //     chat.message_id = msg.message_id;

 //     // Checking Chat Type -- Comprobación del tipo de Chat
 //     if (chat.type == 'private') {
 //         app.bot.sendMessage(chat.id, `${app.i18n.__('👤 Chat name: ')}${chat.title}\n└ ChatID: <code>${chat.id}</code>`, { parse_mode: 'HTML' });
 //     }
 //     else {
 //         app.bot.deleteMessage(chat.id, chat.message_id);
 //         app.bot.sendMessage(chat.id, `${app.i18n.__('👤 Chat name: ')}${chat.title}\n└ ChatID: <code>${chat.id}</code>`, { parse_mode: 'HTML' });
 //     }
 // });

 // app.bot.onText(/^\!getid|^\/getid/, function (msg) {
 //     var chat = {};
 //     chat.id = msg.chat.id;
 //     chat.message_id = msg.message_id;
 //     chat.type = msg.chat.type;
 //     var user = {}
 //     user.id = msg.from.id;
 //     user.name = msg.from.first_name;
 //     //  Checking Alias -- Comprobación de Alias
 //     if (msg.from.username !== undefined) {
 //         user.alias = `@${msg.from.username}`;
 //     } else {
 //         user.alias = `${app.i18n.__('Alias not established')}`
 //     }

 //     // Checking Chat Type -- Comprobación del tipo de Chat
 //     if (chat.type == 'private') {

 //         app.bot.sendMessage(chat.id, `${app.i18n.__('👤 Username: ')}${user.name}\n├ UserID: <code>${user.id}</code>\n└ ${app.i18n.__('User alias: ')}${user.alias}`, { parse_mode: 'HTML' })
 //     }
 //     else {
 //         app.bot.deleteMessage(chat.id, chat.message_id);
 //         app.bot.sendMessage(chat.id, `${app.i18n.__('👤 Username: ')}${user.name}\n├ UserID: <code>${user.id}</code>\n└ ${app.i18n.__('User alias: ')}${user.alias}`, { parse_mode: 'HTML' })
 //     }
 // });

 appT.botT.hears(/^\!myid|^\/myid|^\.myid/, function(ctx) {
     var chat = {};
     chat.id = ctx.chat.id;
     chat.message_id = ctx.message_id;
     chat.type = ctx.chat.type;
     var user = {}
     user.id = ctx.from.id;
     user.name = ctx.from.first_name;

     if (ctx.from.username !== undefined) {
         user.alias = `@${ctx.from.username}`;
     } else {
         user.alias = `${appT.i18n.__('Alias not established')}`
     }

     appT.botT.telegram.sendMessage(chat.id, `${appT.i18n.__('👤 Username: ')}${user.name}\n├ UserID: <code>${user.id}</code>\n└ ${appT.i18n.__('User alias: ')}${user.alias}`, { parse_mode: 'HTML' })

 })

 appT.botT.hears(/^\!chatid|^\/chatid/, function(ctx) {
     var chat = {};
     chat.id = ctx.chat.id;
     chat.title = ctx.chat.title;
     chat.type = ctx.chat.type;
     chat.message_id = ctx.message_id;

     // Checking Chat Type -- Comprobación del tipo de Chat
     if (chat.type == 'private') {
         appT.botT.telegram.sendMessage(chat.id, `${appT.i18n.__('👤 Chat name: ')}${chat.title}\n└ ChatID: <code>${chat.id}</code>`, { parse_mode: 'HTML' });
     } else {
         //  appT.botT.telegram.deleteMessage(chat.id, chat.message_id);
         appT.botT.telegram.sendMessage(chat.id, `${appT.i18n.__('👤 Chat name: ')}${chat.title}\n└ ChatID: <code>${chat.id}</code>`, { parse_mode: 'HTML' });
     }
 });