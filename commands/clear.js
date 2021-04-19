module.exports = {
    name: 'clear',
    description: "clear messages!",
    async execute(client, message, args) {
        if(!args[0]) return message.reply("please enter an amount of messages you want to delete");
        if(isNaN(args[0])) return message.reply("please enter an amount of messages you want to delete in NUMBERS!!!");
        
        if(args[0] > 100) return message.reply("that too mutch please keep it below 100!");
        if(args[0] < 1) return message.reply("please keep it above 1 message that you want to delete!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    }
}