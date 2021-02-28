module.exports = {
	name: 'support',
	description: 'support command',
	async execute(message, args) {
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
					if (args[1] && args[1].length == 18) {
						const userToMentionTo = args[1];
						const closedEmbed = new Discord.MessageEmbed()
							.setTitle(':negative_squared_cross_mark: | Support Channel In Use')
							.setDescription('The Support Channel is currently being used, please wait until it is open again!')
							.setTimestamp()
							.setColor('#ff0033');
						message.channel.send(`<@${userToMentionTo}> :arrow_down:`, closedEmbed);
					}
					else {
						const closedEmbed = new Discord.MessageEmbed()
							.setTitle(':negative_squared_cross_mark: | Support Channel In Use')
							.setDescription('The Support Channel is currently being used, please wait until it is open again!')
							.setTimestamp()
							.setColor('#ff0033');
						message.channel.send(closedEmbed);
					}
					break;
				}
				case 'screenshare': {
					if (args[1] && args[1].length == 18) {
						const info = await message.client.users.fetch(args[1]);
						message.guild.channels.create(`ScreenShare: ${info.username}#${info.discriminator}`, {
							type: 'voice',
							parent: '814459273354412043',
							userLimit: 2,
							permissionOverwrites: [
								{
									id: message.author.id,
									allow: ['VIEW_CHANNEL', 'CONNECT', 'STREAM'],
								},
								{
									id: await message.client.users.fetch(args[1]),
									allow: ['VIEW_CHANNEL', 'CONNECT', 'STREAM'],
								},
							],
						});
					}
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