module.exports = {
	name: 'kick',
	description: 'Kick a user from the server.',
	args: true,
	guildOnly: true,
	execute(message, args) {
		if (message.mentions.members.first()) {
			let taggedUser = message.mentions.users.first();
			if (message.author.id === message.guild.ownerID) {
				const user = message.guild.member(taggedUser)
				if (user) {
					user.kick().then(() => {
						message.channel.send(`${taggedUser.username} has been kicked from the server.`)
					})
				}
			} else {
				message.channel.send(`You wanted to kick: ${taggedUser.username}`);
				message.channel.send(`I'll let <@${message.guild.ownerID}> know!`);
			}
		}
	},
};