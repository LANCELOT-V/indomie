const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
        if(!message.member.voice.channel) return message.channel.send("please join a voice channel first!");

        let search = args.join(" ");

        if(!search) return message.channel.send('Please provide a search query');

        bot.player.play(message, search)
    }

exports.help = {
    name: "play",
    aliases: ['p']
}

exports.requirements = {
    botOwner: true,
    botPerms: [],
    userPerms: []
}
