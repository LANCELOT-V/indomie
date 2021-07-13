const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    if (message.author.id !== '331963486345101322') {
        return message.channel.send(`You cannot use this command!`)
    }
    await message.channel.send(`Restarting bot...`)
    process.exit();
}


exports.help = {
    name: "restart",
    aliases: ['res','rii']
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: []
}
