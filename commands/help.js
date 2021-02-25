module.exports = {
    name: 'help',
    description: 'help command',
    execute(message, args) {
        if (!args[0]) {
            message.reply("Please specify the topic on which you want help.\n\nDo `!help server` for help with the server, do `!help bot` for help with the bot.");
        }
        if (args[0] === "server") {
            message.reply("Work in progress...");
        }
        else if (args[1] === "bot") {
            message.reply("Work in progress...");
        }
    }
}