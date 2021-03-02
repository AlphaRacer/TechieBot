module.exports = {
	name: 'verify',
	description: 'verify command',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		try {
			if (message.member.roles.cache.has('816184186141802528')) {
				message.reply('Nice try, you can\'t bypass mutes by doing this!');
			}
			else if (message.member.roles.cache.has('816184184804474890')) {
				message.reply('You are already verified!');
			}
			else {
				message.delete();
				message.member.roles.add('816184184804474890');
				message.client.channels.cache.get('816184205431275562').send(`${message.author}, welcome to the server!`);
			}
		}
		catch (error) {
			console.error(error);
			message.reply('There was an error while running this command. Let AlphaRacer know about this so he will fix it!');
		}
	},
};