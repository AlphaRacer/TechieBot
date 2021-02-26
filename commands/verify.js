module.exports = {
	name: 'verify',
	description: 'verify command',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		try {
			if (message.member.roles.cache.has('814713329746444338')) {
				message.reply('Nice try, you can\'t bypass mutes by doing this!');
			}
			else if (message.member.roles.cache.has('814434340452827216')) {
				message.reply('You are already verified!');
			}
			else {
				message.member.roles.add('814434340452827216');
				message.client.channels.cache.get('814459282288279552').send(`${message.author}, welcome to the server!`);
			}
		}
		catch (error) {
			console.error(error);
			message.reply('There was an error while running this command. Let AlphaRacer know about this so he will fix it!');
		}
	},
};