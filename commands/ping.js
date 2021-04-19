module.exports = {
    name: 'ping',
    description: "this is an ping command",
    execute(message, args){
        message.channel.send('pong');
    }
}