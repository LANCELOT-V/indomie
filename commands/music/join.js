const Discord = require('discord.js');



exports.run = async (bot, message, args) => {

  const join = new Discord.MessageEmbed()
  
  


        if (!message.guild) return;

       

       
          // Only try to join the sender's voice channel if they are in one themselves
          if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join()
            connection.play("indomie.mp3",
            message.channel.send("mm")
            
            
            
            );
          } else {
            message.reply('You need to join a voice channel first!');

          }
          
}

exports.help = {
    name: "join",
    aliases: ['join']
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: []
}
