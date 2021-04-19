module.exports = {
    name: 'bonk',
    description: "bonks someone",
    execute(client, message, args){

        if(message.member.roles.cache.has('831125558338781225')){
            message.channel.send('https://external-preview.redd.it/uFki8hEItDYbcyk69ksbnynkrrLd4ftMjoMqTujpRcI.png?auto=webp&s=601662b59c65c9e4c1b28288507a294f9db2694f');


        } else {
            message.channel.send('you arent allowed to use this command cause you dont have the right permissions');
        }

    }
}