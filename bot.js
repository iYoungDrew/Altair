console.log('Altair esta lista para el ataque');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
	if (message.content == 'hola') {
		message.channel.sendMessage('Hola basura :3');
	}
});
bot.login('process.env.BOT_TOKEN');
