'use strict';

const config = require('./config')

const { Telegraf } = require('telegraf')
const botT = new Telegraf(config.token_bot);

botT.launch()

// Multilang Bot
const i18n = require('i18n');

i18n.configure({
    locales: ['en', 'es'],
    defaultLocale: 'es', // Language settingss
    register: global,
    updateFiles: false,
    directory: __dirname + '/locales'
});

const fetch = require('node-fetch');


module.exports = { botT, i18n, fetch }