Discord =require('discord.js');
const robot =new Discord.Client();
var p = "h!"

robot.on('ready', () => {
    setTimeout(status1, 16000)
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

function status1() {
    robot.user.setActivity('status test', { type: "PLAYING" })
    setTimeout(status2, 16000)
}

function status2() {
    robot.user.setActivity(':)', { type: "PLAYING" })
    setTimeout(status1, 16000)
}

robot.login(process.env.SECRET);