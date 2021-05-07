const { modChoices, serverAdmin } = require('../config.json');
module.exports = {
	name: 'friday',
	aliases: ['fr', 'new'],
	description: 'Chooses a new mod based on list of mod choices within Config',
	execute(message) {

		if (message.author.id === serverAdmin || message.author.bot) {
			const choices = modChoices;
			console.log(choices[2])
			message.channel.send(`Rolling a d${choices.length}...`);
			const index = Math.floor(Math.random() * choices.length);
			setTimeout(() => {
				message.channel.send(`And the choice is ${choices[index]}!`);
			}, 2500);
			//message.channel.send(`ID: ${message.author.id}`);
		}
		else {
			message.reply('you don\'t have permission to run this command!');
		}
	},
};