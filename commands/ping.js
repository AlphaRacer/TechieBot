module.exports = {
	name: 'ping',
	description: 'Ping!',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		message.channel.send(`Pong! Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(message.client.ws.ping)}ms`);
	},
};