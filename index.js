const Discord = require("discord.js");
const config = require("./Storage/config.json");
const bot = new Discord.Client();
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.event = new Discord.Collection();

const loadCommands = require("./functions/commands.js");
const loadEvents = require("./functions/events.js");

const load = async () => {
    await loadCommands.run(bot);
    await loadEvents.run(bot);
}

bot.color = require("./Storage/color.json");
bot.functions = require("./functions/functions.js");



load();
bot.login(process.env.token);


const prefix = "+"

const distube = require('distube');

const player = new distube(bot);

player.on('playSong', (message, queue, song) => {
    message.channel.send(`${song.name} has started playing!`)
})

bot.player = player;


bot.on("error", console.error);

const fetch = require("node-fetch");
const { ENGINE_METHOD_DH } = require("constants");

bot.on("message", async message => {
    if (message.author.bot || !message.guild) return;
    if (message.content.indexOf(prefix) != 0) return;
    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();

 if (command === "yt" || command === "يوتيوب" || command === "youtube" || command === "Youtube") {
  const chn = message.member.voice.channel
  const channel = message.member.voice.channelID;
  if (!chn) return message.channel.send("**عليك دخول روم صوتي اولاً**");
  if(!message.guild.me.hasPermission("CREATE_INSTANT_INVITE")) return message.channel.send(`**لا امتلك صلاحية \`Create Invite\`**`) 

fetch(`https://discord.com/api/v8/channels/${channel}/invites`, {
 method: "POST",
 body: JSON.stringify({
 max_age: 0, // نظام الدقائق , يعني 86400 = يوم كامل
 max_uses: 0, // عدد القادرين على دخول البث
 target_application_id: "755600276941176913", // لا تغيره ما راح يشتغل اليوتيوب بدونه
 target_type: 2, // خليه مثل ما هو
 temporary: false, // (هذا مؤقت للبث) خليه مثل ما هو
 validate: null // خليه مثل ما هو ما يحتاج تغيره ابداً
}),
   headers: {
   "Authorization": `Bot ${bot.token}`, // خليه مثل ما هو لا  تغيره
   "Content-Type": "application/json" // خليه مثل ما هو لا  تغيره
  }
})
   .then(json => json.json())
   .then(link => {
    if (link.error || !link.code) return message.channel.send("**هُناك خطأ**");
     const embedy  = {
     fields: {
     name: 'YouTube Broadcast',
     value: `[Click me](https://discord.gg/${link.code})`
    }
   }
  message.channel.send({ embed: embedy });
})
   .catch((err) => {
    message.channel.send(`**هُناك مشكلة عليك اصلاحها**`); 
    console.log(err)
   })
  }
});













bot.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = ['<:oo:857633287660765194>', '<:xx:857633067547099147>']
  var grid_message;
 
  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1);
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    var player1_id = message.author.id
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `اللعبة بين اللاعبين التاليين <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_(لقد خسرت, العب مع نفسك :joy:)_'
    }
    message.channel.send(`Xo ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(
      ":one::two::three:" +
      "\n" +
      ":four::five::six:" +
      "\n" +
      ":seven::eight::nine:"
    )
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('Loading... Please wait for the :ok: reaction.')
    .then(async (new_message) => {
      await new_message.react("1⃣");
      await new_message.react("2⃣");
      await new_message.react("3⃣");
      await new_message.react("4⃣");
      await new_message.react("5⃣");
      await new_message.react("6⃣");
      await new_message.react("7⃣");
      await new_message.react("8⃣");
      await new_message.react("9⃣");
      await new_message.react("🆗");
      await new_message.edit(`It\'s <@${turn_id}>\'s اشتغل! الرمز هو ${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(
          bot,
          message,
          new_new_message,
          player1_id,
          player2_id,
          turn_id,
          symbol,
          symbols,
          grid_message
        );
      })
      .then(
        console.log("Successful tictactoe listeprefix initialization")
      )
      .catch(console.error);
  })
  .then(console.log("Successful tictactoe react initialization"))
  .catch(console.error);
} else {
message.channel
  .send(`جرب *xo @uesr`)
  .then(console.log("Successful error reply"))
  .catch(console.error);
}
}
});




