module.exports = {
	name: 'avatar',
	aliases: ['icon', 'pfp'],
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	execute(message, args) {
		if (!args.length) {
			message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: 'png', dynamic: true })}>`);
		}
		else {
			if (message.mentions.members.first()) {
				let taggedUser = (message.mentions.users.first());
				const user = message.guild.member(taggedUser).user
				message.channel.send(`${taggedUser.username}'s avatar: <${user.displayAvatarURL({ format: 'png', dynamic: true })}>`);
			}
		}

	},
};