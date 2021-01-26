const { modChoices, serverAdmin } = require('../config.json');
module.exports = {
	name: 'new-mod',
	description: 'Chooses a new mod based on list of mod choices within Config',
	execute(message) {
		if (message.author.id === serverAdmin) {
			const choices = modChoices;
			message.channel.send(`Rolling a d${choices.length}...`);
			setTimeout(() => {
				const index = Math.floor(Math.random() * choices.length);
				message.channel.send(`And the choice is @${choices[index]}!`);
			}, 2000);
			message.channel.send(`ID: ${message.author.id}`);
		}
		else {
			message.reply('you don\'t have permission to run this command!');
		}
	},
};