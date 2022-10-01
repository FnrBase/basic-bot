const Discord = require('discord.js');
const client = new Discord.Client({
    intents: ['Guilds', 'MessageContent', 'GuildMessages']
});
require('dotenv').config();

client.commands = new Discord.Collection();

['commands', 'events'].forEach(event => {
    require(`./handlers/${event}`)(client);
});

process.on('unhandledRejection', (error) => {
    console.error(error);
})

client.login(process.env.TOKEN);