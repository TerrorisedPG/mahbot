module.exports = async (client) =>{
    const guild = client.guilds.cache.get('750348241526325259');
    setInterval(() =>{
        const memberCounter = guild.memberCounter;
        const channel = guild.channels.cache.get('831516625232330762');
        channel.setName(`Total Members: ${guild.memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 15000);
}
