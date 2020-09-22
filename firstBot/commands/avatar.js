module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp'],
    description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
    execute(message, args){
        message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
    },
};