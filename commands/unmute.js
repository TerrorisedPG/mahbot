module.exports = {
    name: 'unmute',
    description: "this unmutes people",
    execute(message, args, Discord){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'newbie');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'MUTE');
        
            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<${memberTarget}> has been unmuted`);            
        } else{
            message.channel.send('cant find that member!');
        }
    }
}