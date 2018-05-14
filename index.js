Discord =require('discord.js');
const robot =new Discord.Client();

robot.login("NDQ0NTQ1NTA4OTYzMzg1MzY0.Ddde2Q.9xIWzgEcisku4OX-keKPvN_5Zng");

let p ="h!";

robot.on('message', message => {

    robot.user.setPresence({ game: { name:'на h!help', type: 3 } }).catch();

    if(message.content.startsWith(p+ 'help')) {
        const embed = new Discord.RichEmbed()
            .setTitle("Помощь")
            .setColor("#00BFFF")
            .setDescription('Мои команды:\n ○ h!help-пмощь')
            .setFooter("HEE4")
            .setTimestamp();
        message.channel.send({embed});

        }
      });
