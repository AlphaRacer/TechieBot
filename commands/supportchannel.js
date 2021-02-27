module.exports = {
	name: 'supportchannel',
	description: 'supportchannel command',
	execute(message, args) {
		const Discord = require('discord.js');
		if (!args[0]) {
			message.reply('You haven\'t provided any arguments! Usable arguments: `open` or `inuse`.');
		}
		else {
			switch(args[0]) {
			case 'open': {
				const openEmbed = new Discord.MessageEmbed()
					.setTitle(':white_check_mark: | Support Channel Open')
					.setDescription('You can ask AG or AlphaRacer for any tech help now!')
					.setColor('#4BB543');
				message.channel.send(openEmbed);
				break;
			}
			case 'inuse': {
				const closedEmbed = new Discord.MessageEmbed()
					.setTitle(':negative_squared_cross_mark: | Support Channel In Use')
					.setDescription('The Support Channel is currently being used, please wait until it is open again!')
					.setColor('#ff0033');
				message.channel.send(closedEmbed);
				break;
			}
			}
		}
	},
};