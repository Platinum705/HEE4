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
            .setDescription('Мои команды:\n ○ h!help-пмощь по командам. \n ○ h!say-сказать от имени бота. \n ○ h!inv-Приглосить бота себе на сервер. \n ○ h!poll-устроить голосование. \n ○ h!afk on-войти в AFK. \n ○ h!afk off-выйти из AFK.')
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
        message.delete();
        message.channel.send(say);
    }
});

robot.on('message', message => {
    if(message.content.startsWith(p + 'afk on')) {
        const embed = new Discord.RichEmbed()
            .setTitle("AFK")
            .setColor("#00BFFF")
            .setDescription('Вошол в AFK,не мешайте ему.')
            .setFooter("AFK|HEE4")
            .setTimestamp();
            message.author.username({embed});
        }
    });

    robot.on('message', message => {
        if(message.content.startsWith(p + 'afk off')) {
            const embed = new Discord.RichEmbed()
                .setTitle("AFK")
                .setColor("#00BFFF")
                .setDescription('Вышел из AFK,теперь он с нам.')
                .setFooter("AFK|HEE4")
                .setTimestamp();
                message.author.username({embed});
            }
        });
    
/*
веремнно не работает пока подумаем как исправить
robot.on('message', message => {
    if(message.content.indexOf(p) !== 0) return;
    const args = message.content.slice(p.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (['rsp', 'кнб', 'кыз'].includes(command)) {
        let userChoice;
                if (['камень', 'rock', 'r', 'к'].includes(args[0].toLowerCase())) {
                    userChoice = 'камень';
                }
                else if (['бумагу', 'бумага', 'paper', 'p', 'б'].includes(args[0].toLowerCase())) {
                    userChoice = 'бумагу';
                }
                else if (['scissors', 'ножницы', 's', 'н'].includes(args[0].toLowerCase())) {
                    userChoice = 'ножницы';
                }
                else if (!args[0]) {
                    message.channel.send('Вы забыли указать что вы выбираете, камень, ножницы или бумагу');
                    return;
                }
                else {
                    userChoice = 'Incorrect';
                }
                let computerChoice = Math.random();
                if (computerChoice < 0.34) {
                    computerChoice = "камень";
                } else if(computerChoice <= 0.67) {
                    computerChoice = "бумагу";
                } else {
                    computerChoice = "ножницы";
                } message.channel.send("Я выбрал " + computerChoice);
                function rspCW(userChoice, computerChoice) {
                    if (userChoice === computerChoice) {
                        return "ничья!";
                    }
                    else if(userChoice === "камень") {
                        if(computerChoice === "ножницы") {
                            return "ты выиграл!";
                        }
                        else if (computerChoice === "бумагу") {
                            return "ты проиграл";
                        }
                    }
                    else if(userChoice === "бумагу") {
                        if(computerChoice === "камень") {
                            return "ты выиграл!";
                        } else if (computerChoice === "ножницы") {
                            return "ты проиграл";
                        }
                    }
                    else if(userChoice === "ножницы") {
                        if(computerChoice === "бумагу") {
                            return "ты выиграл!";
                        } else if (computerChoice === "камень") {
                            return "ты проиграл.";
                        }
                    }
                    else if (userChoice === 'Incorrect') {
                        return "ты не выбрал ни камень, ни ножницы, ни бумагу";
                    }
                }
                if (userChoice === 'Incorrect') {
                    message.channel.send(message.author + ", " + rspCW(userChoice, computerChoice))
                }
                else {
                message.channel.send(message.author + ", " + rspCW(userChoice, computerChoice) + ' Ты выбрал\(а\) ' + userChoice + ' Я выбрал ' + computerChoice);
             }};
});
*/

//закончелись команды 

function status1() {
    robot.user.setActivity('на h!help',{ type: "WATCHING" })
    robot.user.setStatus('online')
}

robot.login(process.env.SECRET);