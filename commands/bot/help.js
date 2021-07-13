const pagination = require('discord.js-pagination');
const Discord = require('discord.js');





    exports.run = async(client, message) => {
        message.channel.send({
            embed: {
                title: '**قائمة أوامر البوت **',
                description: `
                __**Commands**__
                
                \`image or صورة \` 
 يمكنك البحت عن أي صورة فقط بكتابة الأمر + الكلمة 

                \`+youtube or +يوتيوب \`
                \`+xo\`
                \`+code\` = __**لعمل كود لعبة امونغ اس **__
                \`+support\`
                \`+invit\`
                \`+kiss\` 
                \`+love\`
                \`+slap\`

                __**أوامر الصور**__
                
                \`+هل-تعلم\`
                \`+لغل\`
                \`+أذكار\`
                \`+حكمة\`
            




                \`+meme or +ميمز\`
                \`+bird\`
                \`+cat\`
                \`+dog\`
                \`+fox\`
                \`+koala\`
                \`+panda\`


                __**ملاحظة هامة : الصور قد تتأخر لبعض تواني. سنعمل على توسيع الخادم عما قريب. وسيتم ايضا إضافة أوامر الموسيقى  **__




                


    
    
                `,
                color: 'BLACK'
            }
        })
    }

    exports.help = {
        name: "help",
        aliases: ['help','help']
    }
    
    exports.requirements = {
        botOwner: false,
        botPerms: [],
        userPerms: []
    }
    
    