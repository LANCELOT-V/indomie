const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    
  var sabotage = message.mentions.users.first();
  if(sabotage == message.author)return message.channel.send(`** <a:pp135:745618962313773197> لديك فم صحيح؟  إذن إعطي بوسه لصورتك  **`);
   if(sabotage === bot.user) return message.channel.send(`**للأسف انا بوت <a:pp565:745618865534271618> **`);
  if (!sabotage) return message.channel.send(` <a:Attention:857614510017085488> منشن الشخص `)

  let x = [
  'https://media.giphy.com/media/dP8ONh1mN8YWQ/giphy.gif',
  'https://media.giphy.com/media/CzCi6itPr3yBa/giphy.gif',
  'https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif',
  'https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif',
	'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
	'https://media.giphy.com/media/YC4QEtFmz64sE/giphy.gif',
	'https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif',
	'https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif',
	'https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif',
	'https://media.giphy.com/media/fHtb1JPbfph72/giphy.gif',
	'https://media.giphy.com/media/pwZ2TLSTouCQw/giphy.gif',
	'https://media.giphy.com/media/DfzHC09hY64Gk/giphy.gif',
	'https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif',
  ];
  var x3 = Math.floor(Math.random() * x.length);
  const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`>>> ${message.author.username} <a:pp100:746732656149921834> أهداك بوسه ${sabotage.username}`)
      .setImage(`${x[x3]}`);
    message.channel.send(embed );
  }  
  
    
exports.help = {
    name: "kiss",
    aliases: ['kiss']
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: []
}

