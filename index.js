Discord =require('discord.js');
const robot =new Discord.Client();
var p = "h!"

robot.on('ready', () => {
    robot.user.setPresence({ game: { name:'на h!help', type: 3 } }).catch();
    console.log('ready launched bot...')
});

robot.on('message', message => {
    if(message.content.startsWith(p + 'help')) {
        const embed = new Discord.RichEmbed()
            .setTitle("Помощь")
            .setColor("#00BFFF")
            .setDescription('Мои команды:\n ○ h!help-пмощь')
            .setFooter("HEE4")
            .setTimestamp();
        message.channel.send({embed});
    }
});

robot.on('message', message => {
    if(message.content.startsWith(p + 'say')) {
        let say = message.content.slice((p + 'say').length);
        message.delete();
        message.channel.send(say);
    }
});

robot.login(process.env.SECRET);