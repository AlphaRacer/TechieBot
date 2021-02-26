module.exports = {
	name: 'help',
	description: 'help command',
	execute(message, args) {
		const Discord = require('discord.js');
		if (!args[0]) {
			const wrongUsageEmbed = new Discord.MessageEmbed()
				.setColor('#17a2b8')
				.addField('Server Help', 'Send `!help server`')
				.addField('Bot Help', 'Do `!help bot`');
			// message.channel.send('Please specify the topic on which you want help.\n\nDo `!help server` for help with the server, do `!help bot` for help with the bot.');
			message.channel.send(wrongUsageEmbed);
		}
		if (args[0] === 'server') {
			if (!args[1]) {
				const serverHelpEmbed = new Discord.MessageEmbed()
					.setColor('#17a2b8')
					.setTitle('Server Help')
					.addField('Where do I ask my tech question?', 'Send `!help server 1`')
					.addField('Where do I get general tech support?', 'Send `!help server 2`');
				// message.channel.send('Possible help options:\n\n> 1. **Where do I ask my tech question?**, send "`!help server 1`"\n> 2. **Where do I get general tech support?**, send "`!help server 2`"');
				message.channel.send(serverHelpEmbed);
			}
			else if (args[1] === '1') {
				message.reply('Ask your tech question in <#814459285546991676>.');
			}
			else if (args[1] === '2') {
				message.reply('Get general tech support in <#814459286460563496> or <#814459287308992532>.');
			}
		}
		else if (args[0] === 'bot') {
			const botHelpEmbed = new Discord.MessageEmbed()
				.setColor('#17a2b8')
				.setTitle('Bot Commands:')
				.addField('`!verify`', 'If you don\'t have the Members role, do this to verify yourself and get it')
				.addField('`!help`', 'Get help with the server or bot.')
				.addField('`!ping`', 'Check the bot latency and API latency');
			message.channel.send(botHelpEmbed);
		}
	},
};