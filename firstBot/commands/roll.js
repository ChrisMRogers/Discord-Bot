module.exports = {
	name: 'roll',
	aliases: ['r'],
	args: true,
	usage: '[(#dice)d(dice size)]',
	description: `Rolls x dice of y size and returns the total.`,
	cooldown: 5,
	execute(message, args) {
		const dice = args[0].split('d');
		if (dice[0] > 200 || dice[1] > 200) {
			message.channel.send(`${message.author}, the values you are trying to roll are too large!`)
		} else if (!Number.isInteger(parseInt(dice[0])) || !Number.isInteger(parseInt(dice[1]))) {
			message.channel.send(`${message.author}, you probably think you're being funny but all its doing is making me sad that you'd try something so mean.`)
		} else if (dice[0] < 0 || dice[1] < 0) {
			message.channel.send(`${message.author}, how in the world do you roll a negative die???`)
		} else {
			const sumArr = [];
			for (let i = 0; i < parseInt(dice[0]); i++) {
				sumArr.push(Math.floor(Math.random() * parseInt(dice[1]) + 1));
			}
			let response = `${sumArr[0]}`;
			let sum = parseInt(sumArr[0]);
			for (let i = 1; i < sumArr.length; i++) {
				response += ` + ${sumArr[i]}`;
				sum += parseInt(sumArr[i]);
			}

			message.channel.send(`\`${response} = ${sum}\``);
		}
	},
};
