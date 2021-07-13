const img = require('images-scraper')
const Discord = require("discord.js");
const google = new img({
    puppeteer: {
        headless: true,
    }
})

exports.run = async (bot, message, args) => {

    
    var random = Math.floor((Math.random() * 90) + 0);
    
    const results = await google.scrape('fox', 100)
    const hasil = results[random].url
    let embedpic = new Discord.MessageEmbed()
        .setImage(hasil)
    message.channel.send(embedpic)

}


exports.help = {
    name: "fox",
    aliases: ['Fox','FOX']
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: []
}