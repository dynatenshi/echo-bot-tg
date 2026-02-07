require('dotenv').config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.use(async ctx => {
    await ctx.reply(JSON.stringify(ctx.update, null, 2));
})

// in current version of Telegraf this is the way
bot.botInfo = bot.telegram.getMe().then(() => console.log('Bot Started'));
bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));