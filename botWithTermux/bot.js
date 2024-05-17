const { Telegraf } = require('telegraf');
const bot = new Telegraf('6840246855:AAGltl8eXMKJllylF6fXaeY7FOuAti86ZF4');

bot.start((ctx) => ctx.reply('Bienvenue!'));
bot.help((ctx) => ctx.reply('Envoyez-moi un message et je vais vous répondre!'));
bot.on('text', (ctx) => ctx.reply(`Vous avez dit : ${ctx.message.text}`));

bot.launch();
console.log('Bot lancé...');
