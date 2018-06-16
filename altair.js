const Discord = require('discord.js');
const bot = new Discord.Client();

client.on('ready', () => {
    console.log('Altair esta lista!');
});

client.on('message', message => {
    if (message.content === 'hola') {
    	message.reply('Hola basura :3');
  	}
});
bot.login('process.env.BOT_TOKEN');
