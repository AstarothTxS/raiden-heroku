'use strict';

const config = require('./config')

const { Telegraf } = require('telegraf')
const botT = new Telegraf(config.token_bot);

// Token bot Telegram
// const TelegramBot = require('node-telegram-bot-api');
// const bot = new TelegramBot(config.token_bot, { polling: true });

// Módulo para nodejs (https://www.npmjs.com/package/request-promise) para realizar llamadas http, es compatible con HTTPS
// y sigue redirecciones de forma predeterminada
const rp = require('request-promise')



// API Weather
const weather = require('weather-js');

// API Moment
const moment = require('moment');
moment.locale('es');

// Multilang Bot
const i18n = require('i18n');

i18n.configure({
    locales: ['en', 'es'],
    defaultLocale: 'es', // Language settingss
    register: global,
    updateFiles: false,
    directory: __dirname + '/locales'
});



// Modulos exportados
module.exports = { botT, rp, weather, moment, i18n }