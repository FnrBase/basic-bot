const config = require('../../config.json');

module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (!message.guild) return;

    if (!message.content.toLowerCase().startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    const command = client.commands.get(cmd);
    if (command) {
        command.run(client, message, args);
    }
}