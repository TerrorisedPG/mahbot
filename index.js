const Discord = require(`discord.js`);

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '-'

const prefixx = ''

const fs = require('fs');

const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot has been activated;');
    memberCounter(client);
    client.user.setActivity(`.help`, {
            type: "being an brave person",
    });    
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'newbie');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('751394468762222663').send(`Welcome <@${guildMember.user.id}> to our server make sure to read te rules and have fun`)
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'clear') {
        client.commands.get('clear').execute(message, args, Discord);
    } else if (command === 'mute') {
        client.commands.get('mute').execute(message, args, Discord);
    } else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args, Discord);
    } else if (command === 'reactionroles') {
        client.commands.get('reactionroles').execute(message, args, Discord, client);
    }
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'bonk') {
        client.commands.get('bonk').execute(message, args);
    }
    if (command === 'yeet') {
        client.commands.get('yeet').execute(message, args);
    }
});

client.on('message', message => {
    if (!message.content.startsWith(prefixx) || message.author.bot) return;

    const args = message.content.slice(prefixx.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'hi') {
        client.commands.get('hi').execute(message, args);
    }

})
client.login(process.env.token);
