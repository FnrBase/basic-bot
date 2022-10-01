const { readdirSync } = require('fs');

module.exports = (client) => {
    readdirSync('./commands/').map((dir) => {
        readdirSync(`./commands/${dir}`).map((cmd) => {
            const command = require(`../commands/${dir}/${cmd}`);
            client.commands.set(command.name, command);
        });
    });
}