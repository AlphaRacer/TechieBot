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
					message.channel.bulkDelete(100);
					const openEmbed = new Discord.MessageEmbed()
						.setTitle(':white_check_mark: | Support Channel Open')
						.setDescription('You can ask <@568066367518015506> or <@772484468396130325> for any tech help now!')
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
						await message.guild.channels.create(`Screen Share: ${info.username}`, {
							type: 'voice',
							parent: '816184193993408532',
							permissionOverwrites: [
								{
									id: message.author.id,
									allow: ['VIEW_CHANNEL', 'CONNECT', 'STREAM'],
									deny: ['SPEAK'],
								},
								{
									id: args[1],
									allow: ['VIEW_CHANNEL', 'CONNECT', 'STREAM'],
									deny: ['SPEAK'],
								},
								{
									id: '814434340452827216',
									deny: ['VIEW_CHANNEL', 'CONNECT'],
								},
								{
									id: '814431370549133362',
									deny: ['VIEW_CHANNEL', 'CONNECT'],
								},
							],
						}).then(async () => {
							const screenshareEmbed = new Discord.MessageEmbed()
								.setTitle(':white_check_mark: | Screen Sharing VC Created')
								.setDescription(`A Voice Channel for sharing your screen called "Screen Share: ${info.username}" has been created at the bottom of the "Support" category. Please join the VC and share your screen over there.`)
								.setColor('#4BB543');
							message.channel.send(`<@${args[1]}> & <@${message.author.id}>`, screenshareEmbed);
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