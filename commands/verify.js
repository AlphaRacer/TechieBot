module.exports = {
    name: 'verify',
    description: 'verify command',
    execute(message, args) {
        try {
            message.member.roles.add('814434340452827216');
            message.client.channels.cache.get('814459282288279552').send(`${message.author}, welcome to the server!`);
        }
        catch (error) {
            console.error(error);
            message.reply("There was an error while running this command. Let AlphaRacer know about this so he will fix it!");
        }
    }
}