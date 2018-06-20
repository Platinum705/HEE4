const Discord = require('discord.js');
const request = require('request');
const robot = new Discord.Client();
var p = "h!"

robot.on('ready', () => {
    robot.user.setActivity('loading..',{ type: "PLAYING" })
    robot.user.setStatus('dnd')
    setTimeout(status1, 16000)
    console.log('ready launched bot...')
});

//команды бота
robot.on('message', message => {
    if(message.content.startsWith(p + 'help')) {
        const embed = new Discord.RichEmbed()
            .setTitle("Помощь")
            .setColor("#00BFFF")
            .setDescription('Мои команды:\n ○ ***h!help***-пмощь по командам. \n ○ ***h!say***-сказать от имени бота. \n ○ ***h!inv***-приглосить бота себе на сервер. \n ○ ***h!poll***-устроить голосование. \n ○ ***h!afk on***-войти в AFK. \n ○ ***h!afk off***-выйти из AFK.')
            .setFooter("HEE4")
            .setTimestamp();
        message.channel.send({embed}).then(sentMessage => {   
            sentMessage.react('🇭')
                .then(() => sentMessage.react('🇪'))
                    .then(() => sentMessage.react('🇱'))
                    .then(() => sentMessage.react('🇵'))
                    .catch(() => console.error('One of the emojis failed to react.'));
        });
    }
});

robot.on('message', message => {
    if(message.content.startsWith(p + `inv`)) {
        const embed = new Discord.RichEmbed()
            .setTitle("Ссылка на бота")
            .setColor("#00BFF")
            .setDescription('\n Приглоси себе бота на сервер. \n\n https://discordapp.com/oauth2/authorize?client_id=444545508963385364&scope=bot&permissions=1723325513')
            .setFooter("HEE4")
            .setTimestamp();
        message.channel.send({embed});
    }
});

robot.on('message', message => {
	const args = message.content.slice(p.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if(message.content.startsWith(p + 'poll')) {
		message.delete().catch(O_o => {});
		const say_poll_embed = args.join(" ");
		const embed = new Discord.RichEmbed()
			.setColor(`#00FFFF`)
			.setDescription(say_poll_embed)
			.setFooter("голосование|HEE4")
			.setTimestamp();	
            message.channel.send({
                embed
            }).then(function(message) {
                message.react("✅")
                message.react("❎")
            }).catch(function() {});
        }
    }); 

robot.on('message', message => {
    if(message.content.startsWith(p + 'say')) {
        let say = message.content.slice((p + 'say').length);
        message.channel.send(say);
    }
});

robot.on('message', message => {
    if(message.content.startsWith(p + 'afk on')) {
        const embed = new Discord.RichEmbed()
            .setTitle("AFK")
            .setColor("#00BFFF")
            .setDescription('Вош(о)л(а) в AFK,не мешайте.')
            .setFooter("AFK|HEE4")
            .setTimestamp();
            message.reply({embed}).then(sentMessage => {
                sentMessage.react('🔜')    
                    .catch(() => console.error('One of the emojis failed to react1.'));
            });
            }
});
 
    robot.on('message', message => {
        if(message.content.startsWith(p + 'afk off')) {
            const embed = new Discord.RichEmbed()
                .setTitle("AFK")
                .setColor("#00BFFF")
                .setDescription('Выш(е)л(а) из AFK,теперь он(а) с нами.')
                .setFooter("AFK|HEE4")
                .setTimestamp();
                message.reply({embed}).then(sentMessage => {
                    sentMessage.react('🔙')
                });     
            }
        });
/*
        if(['sms'].includes(command)) {
            let user = message.mentions.members.first();
            const sendMessage = args.join(" ");
            let msg = user.send('Вам пришло смс от' + message.author + '. Он сказал: ' + sendMessage).catch(()=>{message.reply('Ошибка');
            })
            message.delete().catch(O_o=>{});
            }        
/**
 * 
 */

//закончелись команды 

function status1() {
    robot.user.setActivity('h!help',{ type: "WATCHING" })
    robot.user.setStatus('online')
}

robot.login(process.env.SECRET);