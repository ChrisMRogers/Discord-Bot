module.exports = {
	name: 'kick',
	description: 'Kick a user from the server.',
	args: true,
	guildOnly: true,
	execute(message) {
		const taggedUser = message.mentions.users.first();
		message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	},
};