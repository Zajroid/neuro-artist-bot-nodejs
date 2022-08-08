import 'dotenv/config'

import { Telegram } from 'puregram';

const telegram = Telegram.fromToken(process.env.TOKEN.toString())

telegram.updates.on('message', context => context.reply('hey!'))
telegram.updates.on('callback_query', context => context.answerCallbackQuery())

telegram.updates.startPolling().catch((err) => {
    console.log(`[-] Error :${err}`)
})
