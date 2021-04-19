const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "this mutes people",
    execute(message, args, Discord) {
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'newbie');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'MUTE');

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<${memberTarget}> has been muted`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<${memberTarget}> has been muted for ${ms(ms(args[1]))}`);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);     
            }, ms(args [1]));
        } else {
            message.channel.send('cant find that member!');
        }
    }
}