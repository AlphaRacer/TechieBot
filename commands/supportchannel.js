module.exports = {
	name: 'supportchannel',
	description: 'supportchannel command',
	execute(message, args) {
		const Discord = require('discord.js');
		const config = require('../config.json');
		const whitelist = config.whitelist;
		if (whitelist.includes(message.author.id)) {
			if (!args[0]) {
				message.reply('You haven\'t provided any arguments! Usable arguments: `open` or `inuse`.');
			}
			else {
				message.delete();
				switch(args[0]) {
				case 'open': {
					const openEmbed = new Discord.MessageEmbed()
						.setTitle(':white_check_mark: | Support Channel Open')
						.setDescription('You can ask <@568066367518015506>, <@772484468396130325> or <@533259452439330817> for any tech help now!')
						.setTimestamp()
						.setColor('#4BB543');
					message.channel.send(openEmbed);
					break;
				}
				case 'inuse': {
					const closedEmbed = new Discord.MessageEmbed()
						.setTitle(':negative_squared_cross_mark: | Support Channel In Use')
						.setDescription('The Support Channel is currently being used, please wait until it is open again!')
						.setTimestamp()
						.setColor('#ff0033');
					message.channel.send(closedEmbed);
					break;
				}
				}
			}
		}
		else {
			message.reply('You don\'t have permission to run that command!');
		}
	},
};