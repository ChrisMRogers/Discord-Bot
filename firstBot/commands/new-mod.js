
const {modChoices} = require('../config.json');
module.exports = {
    name: 'new-mod',
    description: 'Chooses a new mod based on list of \'The Boys\'!',
    execute(message, args){
        if(message.author.id === '179051661413711872'){
            const choices = modChoices;
        message.channel.send(`Rolling a d${choices.length}...`)
        setTimeout(() => {const index = Math.floor(Math.random() * choices.length);
            message.channel.send(`And the choice is @${choices[index]}!`);}, 2000);
        message.channel.send(`ID: ${message.author.id}`);
        } else{
            message.reply(`you don't have permission to run this command!`);
        }
        
        
        
        

    },
};