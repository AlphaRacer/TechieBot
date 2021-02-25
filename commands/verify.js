module.exports = {
    name: 'verify',
    description: 'verify command',
    execute(message, args) {
        try {
        message.member.roles.add('814434340452827216').then(() => {
            message.channel.send(`${message.author.tag} has verified!`);
        })
        }
        catch (error) {
            console.error(error);
            message.reply("There was an error while running this command. Let AlphaRacer know about this so he will fix it!");
        }
    }
}