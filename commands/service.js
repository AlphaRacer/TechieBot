module.exports = {
	name: 'service',
	description: 'service command',
	execute(message, args) {
		switch(args[0]) {
		case '1':
			message.channel.send('Service 1: Server Moderation Bot Setup Pack');
			break;
		case '2':
			message.channel.send('Service 2: Server Utility Bot Setup Bot');
			break;
		case '3':
			message.channel.send('Service 3: Server Growth Pack');
			break;
		case '4':
			message.channel.send('Service 4: Server Any Bot Setup Pack');
			break;
		case '5':
			message.channel.send('Service 5: Full Server Setup Pack');
			break;
		case 'use':
			switch(args[1]) {
			case '1':
				message.reply('Successfully used Pack 1: Server Moderation Bot Setup Pack\n\nNow, DM AlphaRacer or AG with the invite link to the server where you want them to configure the bot. Note:- `You must be in https://discord.gg/UsaGyH4W3F or https://discord.gg/vKK5pbusRj to use a Pack.`');
				break;
			case '2':
				message.reply('Successfully used Pack 2: Server Utility Bot Setup\n\nNow, DM AlphaRacer or AG with the invite link to the server where you want them to configure the bot. Note:- `You must be in https://discord.gg/UsaGyH4W3F or https://discord.gg/vKK5pbusRj to use a Pack.`');
				break;
			case '3':
				message.reply('Successfully used Pack 3: Server Growth Pack\n\nNow, DM AlphaRacer or AG with the invite link to the server where you want them to configure the bot. Note:- `You must be in https://discord.gg/UsaGyH4W3F or https://discord.gg/vKK5pbusRj to use a Pack.`');
				break;
			case '4':
				message.reply('Successfully used Pack 4: Server Any Bot Setup Pack\n\nNow, DM AlphaRacer or AG with the invite link to the server where you want them to configure the bot. Note:- `You must be in https://discord.gg/UsaGyH4W3F or https://discord.gg/vKK5pbusRj to use a Pack.`');
				break;
			case '5':
				message.reply('Successfully used Pack 5: Full Server Setup Pack\n\nNow, DM AlphaRacer or AG with the invite link to the server where you want them to configure the bot. Note:- `You must be in https://discord.gg/UsaGyH4W3F or https://discord.gg/vKK5pbusRj to use a Pack.`');
				break;
			}
			break;
		}
	},
};