const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready',function(){
    
bot.user.setAvatar('./hello-kitty.jpg').catch(console.error)
bot.user.setActivity('HelloKitty online').catch(console.error)})
    /*.then(() => console.log('Avatar mis en place avec succes'))
    .catch(console.error)})*/
bot.on('guildMemberAdd', function(member) {
  if(member.guild.channels.exists("name", "général")){
    console.log(`Le channel général exists`);
    member.guild.channels.find("name", "général").send('Bienvenue sur le channel ')
  }
}); 

      var interval = setInterval (function () {
        bot.channels.find("name", "général").send('@everyone Trop Mignon')
      }, 120000); 
    

bot.on('message', function (message){
    if (message.content === 'chaton') {
        message.reply('I <3 CAT')
    }
})

bot.login('numero du token')