module.exports = {
    name: 'reactionroles',
    description: "sets up reaction roles!",
    async execute(message, args, Discord, client) {
        const channel = '831455375278211102';
        const weeb = message.guild.roles.cache.find(role => role.name === "Weeb");
        const gamer = message.guild.roles.cache.find(role => role.name === "Gamer");

        const WEEBEmoji = '😏';
        const GAMEREmoji = '🎮';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a role you would like to have!')
            .setDescription('you just get an role you want to get!\n\n'
                + `${':smirk:'} to get the Weeb role\n`
                + `${':video_game:'} to get the Gamer role\n`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(WEEBEmoji);
        messageEmbed.react(GAMEREmoji);

        client.on('messageReactionAdd', async (reaction, user) => {

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === WEEBEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add("831455580665020457");
                }if (reaction.emoji.name === GAMEREmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add("831455632732192768");
                }
            } else{
                return;
            }

        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === WEEBEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove("831455580665020457");
                }if (reaction.emoji.name === GAMEREmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove("831455632732192768");
                }
            } else{
                return;
            }
        });
    }
}