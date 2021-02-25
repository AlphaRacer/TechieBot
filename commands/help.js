module.exports = {
    name: 'help',
    description: 'help command',
    execute(message, args) {
        if (!args[0]) {
            message.channel.send("Please specify the topic on which you want help.\n\nDo `!help server` for help with the server, do `!help bot` for help with the bot.");
        }
        if (args[0] === "server") {
            if (!args[1]) {
                message.channel.send("Possible help options:\n\n> 1. **Where do I ask my tech question?**, send \"`!help server 1`\"\n> 2. **Where do I get general tech support?**, send \"`!help server 2`\"");
            }
            else if (args[1] === "1") {
                message.channel.send("Ask your tech question in <#814459285546991676>.");
            }
            else if (args[1] === "2") {
                message.channel.send("Get general tech support in <#814459286460563496> or <#814459287308992532>.");
            }
        }
        else if (args[0] === "bot") {
            message.channel.send("Work in progress...");
        }
    }
}