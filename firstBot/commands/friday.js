module.exports = {
	name: 'friday',
	aliases: ['fr', 'new'],
	args: true,
	description: 'Chooses a new mod based on list of mod choices within Config',
	execute(message, args) {
		//Check to see if the owner of the server is the one sending the message
		if (message.author.id === message.guild.ownerID || message.author.bot) {
			//Check if there is a specific role being selected, if not, send an error DM to author
			if (!args.length) {
				return message.author.send("You need to mention a role when using the `!friday` command.")
			} else if (args.length != 2) {
				if (args.length < 2) {
					return message.author.send(`You sent too few arguments with your message: \`${message}\``)
				} else {
					return message.author.send(`You sent too many arguments with your message: \`${message}\``)

				}
			} else if (!args[0].includes("&")) {
				return message.author.send(`You need to mention a *role* in the **first mention** when using the \`!friday\` command.`)
			} else if (!args[1].includes("&")) {
				return message.author.send(`You need to mention a *role* in the **second mention** when using the \`!friday\` command.`)
			}
			//console.log(args)
			let choices = [];
			let modChoiceRoleID = (args[0].replace("<@&", "")).replace(">", "")
			let modRoleID = (args[1].replace("<@&", "")).replace(">", "")
			//console.log("Mod Choice Role ID: " + modChoiceRoleID)
			//console.log("Mod Role ID: " + modRoleID)
			message.guild.members.fetch().then(fetchedMembers => {
				fetchedMembers.each(user => {
					//console.log(args[0])
					// console.log(user.roles.cache)
					if (user.roles.cache.some(role => role.id === modChoiceRoleID)) {
						choices.push(user)
					}
				})
				//console.log(choices)
				message.channel.send(`Rolling a d${choices.length}...`);
				const index = Math.floor(Math.random() * choices.length);
				setTimeout(() => {
					message.channel.send(`And the choice is ${choices[index]}!`);
				}, 2500);
				let chosenMod = choices[index]
				chosenMod.roles.add(modRoleID)
				//console.log(chosenMod)
			})

		}
		else {
			message.reply('you don\'t have permission to run this command!');
		}
	},
};