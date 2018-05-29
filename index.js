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
            .setColorobotr("#00BFFF")
            .setDescription('Мои команды:\n ○ h!help-пмощь по командам \n ○ h!say-сказать от имени бота. \n ○ h!inv-Приглосить бота себе на сервер ')
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
    robot.user.setActivity(' 🙃+💵=😎', { type: "PLAYING" })
    setTimeout(status2, 10000)
}

function status2() {
    robot.user.setActivity(':D 🤔', { type: "PLAYING" })
    setTimeout(status1, 10000)
}

function status2() {
    robot.user.setActivity('h!help', { type: "PLAYING" })
    setTimeout(status1, 20000)
}

robot.login(process.env.SECRET);