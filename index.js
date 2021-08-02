const Discord = require('discord.js');
const { Bot, Util, RichEmbed, MessageEmbed, Collection } = require('discord.js');
let bot = new Discord.Client();

bot.on ('ready', () => {
  console.log("Loading...");
  setTimeout(function(){
  console.log("Bot has been loaded completely.");
  }, 1000);
  // Bot Status
  function bottatus() {
    let status = [
    `Kontol Bapakkau Pecah`
  ];
  let rstatus = Math.floor(Math.random() * status.length);
  bot.user.setActivity(status[rstatus], {type: "PLAYINg"});        
}; setInterval(bottatus, 12000);
  
 
});

bot.on("message", async message => {
  
	if(message.author.bot) return undefined;
	if(message.channel.type === 'dm') return;
 
  
  if(message.content === 'p') {
    message.channel.send('Urusai')

  }
  
    if(message.content === 'P') {
    message.channel.send('Urusai')

  }
	    
  if(message.content === 'hm') {
  message.channel.send('<:hm:817019804874440725>')
    
  }	  
  
  if(message.content === '<@461096907624677376>') {
  message.channel.send('apa')
    
  }
  
    if(message.content === 'Hm') {
  message.channel.send('<:hm:817019804874440725>')
      
  }
	
  if(message.content === 'intan') {
  message.channel.send('<@610623317925298218> asu')
      
  }

});


bot.login(process.env.TOKEN);
