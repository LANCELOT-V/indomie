const Discord = require("discord.js");

module.exports = async (bot) => {

    
let g = bot.guilds.cache.get("841831120119005185");
let c = g.channels.cache.get("845298197332492349");
if(c.type === 'voice') {
c.join();
setInterval(() => {
if(g.me.voiceChannel && g.me.voiceChannelID !== c.id || !g.me.voiceChannel) c.join();
}, 1);
} else {
console.log('Failed To Join: \n The Channel Type isn "Listening."')
}
    console.log(`${bot.user.username} is ready !`);
    bot.user.setActivity(`+help `, { type:"PLAYING" });
    
  


} 