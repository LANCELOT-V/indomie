const img = require('images-scraper')
const Discord = require("discord.js");
const google = new img({
    puppeteer: {
        headless: true,
    }
})

exports.run = async (bot, message, args) => {

    
    
    var random = Math.floor((Math.random() * 90) + 0);
    console.log(random)
    const results = await google.scrape("نكث ميمز", 100)
    const hasil = results[random].url
    message.channel.send(`الصور قد تتأخر لبضع تواني. وسيتم تكبير الخادم في القريب العاجل <a:Attention:857614510017085488> `)
    let embedpic = new Discord.MessageEmbed()
        
        .setImage(hasil)
    message.channel.send(embedpic)


     
         
 











}

exports.help = {
    name: "meme",
    aliases: ['ميمز']
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: []
}
