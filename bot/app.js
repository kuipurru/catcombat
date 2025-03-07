import { Telegraf, Markup } from 'telegraf'

const token = '7206578078:AAFNzIAJMI5dGMHSUloSecXlyQwudmeFxDs'
const webAppUrl = 'https://cat-combat-pro.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Hello! Press kitten to start!', Markup.inlineKeyboard([
            Markup.button.webApp('Open kitten app', `${webAppUrl}?ref=${ctx.payload}`),
        ])
    )

})

bot.launch()