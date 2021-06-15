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
    `??Welcome to NOLEP!`
  ];
  let rstatus = Math.floor(Math.random() * status.length);
  bot.user.setActivity(status[rstatus], {type: "PLAYING"});        
}; setInterval(bottatus, 12000);
  
 
});
bot.on("message", async message => {
  
	if(message.author.bot) return undefined;
	if(message.channel.type === 'dm') return;
 
 if(message.content === 'hi') {
    message.channel.send('Hi Juga<a:sNLP_Yeayy:595130531830562856>')

  }

  if(message.content === 'Hi') {
    message.channel.send('Hi Juga<a:sNLP_Yeayy:595130531830562856>')

  }

  if(message.content === 'hallo') {
    message.channel.send('Hallo Juga<a:sNLP_Yeayy:595130531830562856>')

  }

  if(message.content === 'halo') {
    message.channel.send('Hallo Juga<a:sNLP_Yeayy:595130531830562856>')

  }
  
  if(message.content === 'welcome') {
  message.channel.send('<a:yNLP_welcome6:718324057027903558><a:yNLP_welcome5:718324079639396404>')
    
   
 }
  
  if(message.content === 'Hai') {
  message.channel.send('Hai Juga<a:sNLP_Yeayy:595130531830562856>')
  
  }
  
  if(message.content === 'hai') {
  message.channel.send('Hai Juga<a:sNLP_Yeayy:595130531830562856>')
    
  }
  
  if(message.content === 'Pagi') {
  message.channel.send('Selamat pagi juga, semangat menjalani hari ini<a:1NLP_1Love:721780910567194766>')
    
  }
    
  if(message.content === 'Assalamualaikum') {
  message.channel.send('Waalaikumsalam')
    
  }
  
  if(message.content === 'assalamualaikum') {
  message.channel.send('Waalaikumsalam')
    
  }
  
    if(message.content === 'Halo') {
    message.channel.send('Hallo Juga<a:sNLP_Yeayy:595130531830562856>')
      
  }
  
  if(message.content === 'p') {
    message.channel.send('ga sopan<a:vNLP_KellyFight:721915334650626140>')

  }
  
    if(message.content === 'P') {
    message.channel.send('ga sopan<a:vNLP_KellyFight:721915334650626140>')

   }
  
  if(message.content === 'pagi') {
  message.channel.send('Selamat pagi juga, semangat menjalani hari ini<a:1NLP_1Love:721780910567194766>')
  
  }
  
  if(message.content === 'malam') {
  message.channel.send('Malam~ jangan begadang ya!')

  }

if(message.content === 'Malam') {
  message.channel.send('Malam~ jangan begadang ya!')

}
  
  if(message.content === 'Sepi') {
  message.channel.send('Ramein dong')
    
  }
  
  if(message.content === 'sepi') {
  message.channel.send('Ramein dong')
    
  }
  
  if(message.content === 'Siang') {
  message.channel.send('Masih semangat ga nih? Jangan lupa makan siang ya')

  }

if(message.content === 'siang') {
  message.channel.send('Masih semangat ga nih? Jangan lupa makan siang ya')
  
 }

  if(message.content === 'sayang') {
  message.channel.send('Apa sayang?<a:pNLP_YuliMwah:722075893958180864>')

  }

 if(message.content === 'Sayang') {
  message.channel.send('Apa sayang?<a:pNLP_YuliMwah:722075893958180864>')
  
 }
  
  if(message.content === 'Welcome') {
  message.channel.send('<a:yNLP_welcome6:718324057027903558><a:yNLP_welcome5:718324079639396404>')
    
  }
  
  if(message.content === 'hm') {
  message.channel.send('<:hm:817019804874440725>')
    
  }
  
    if(message.content === 'Ramdhan') {
  message.channel.send('summon kera <@305319719597113346>')
    
  }
  
  if(message.content === 'ramdhan') {
  message.channel.send('summon kera <@305319719597113346>')
    
  }
  
  if(message.content === 'alin') {
  message.channel.send('<@470281222317146118> minta duit')
    
  }
  
  if(message.content === '<@461096907624677376>') {
  message.channel.send('apa')
    
  }

  if(message.content === 'jen') {
  message.channel.send('mengMaong <@697548535477960765>')
    
  }
    
    if(message.content === 'jasmin') {
  message.channel.send('<@696379199765872640> kemem')
      
   }
    
  if(message.content === 'mwah') {
  message.channel.send('mwah<a:pNLP_Kiss:778873499619426315>')
    
     }
  
    if(message.content === 'Mwah') {
  message.channel.send('mwah<a:pNLP_Kiss:778873499619426315>')
      
    }
  
    if(message.content === 'Hm') {
  message.channel.send('<:hm:817019804874440725>')
      
    }

});


bot.login(process.env.TOKEN);
