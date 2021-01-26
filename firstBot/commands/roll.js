module.exports = {
	name: 'roll',
	aliases: ['r'],
	args: true,
	usage: '[(#dice)d(dice size)]',
	description: `Rolls x dice of y size and returns the total.`,
	cooldown: 5,
	execute(message, args) {
		const dice = args[0].split('d');

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
	},
};
