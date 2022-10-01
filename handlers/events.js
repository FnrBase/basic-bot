const { readdirSync } = require('fs');
require('colors');

module.exports = (client) => {
    const load = (dir) => {
        const events = readdirSync(`./events/${dir}/`).filter(file => file.endsWith('js'));

        for (const file of events) {
            const event = require(`../events/${dir}/${file}`);
            const name = file.split('.')[0];
            client.on(name, event.bind(null, client));
            console.log(`[Events] `.yellow + `Loaded ` + `${name}`.green + '.');
        }
    };

    ['client', 'guild'].forEach(event => load(event));
}