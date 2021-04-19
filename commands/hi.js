module.exports = {
    name: 'hi',
    description: "this is an hi command",
    execute(message, args){
        message.channel.send('hi and fuck off');
    }
}