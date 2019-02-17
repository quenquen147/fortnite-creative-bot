const Discord = require('discord.js')
const bot = new Discord.Client()
const YoutubeStream = require('youtube-audio-stream')
const Play = require('./commands/play')
const Leave = require('./commands/leave')

bot.on('ready', function() {
    bot.user.setActivity('Fortnite').catch(console.error)
})

// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === '💬cнαт-ɢeɴerαl');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Bienvenue sur le serveur, ${member}`);
});


bot.on('message', function (message) {
    if (message.content === '!test') {
        message.reply('Ça fonctionne bien !')
    }
})

bot.on('message', function (message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n\'avez pas les permissions d\'utiliser cette commande !");
  Play.parse(message)
})

bot.on('message', function (message){
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n\'avez pas les permissions d\'utiliser cette commande !");
  Leave.parse(message)
})


bot.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'Mon avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});


bot.on('message', function (message) {
  if(message.content === '!avancement') {
    message.channel.send({embed: {
      color: 8632984,
      title: "Avancements du bot",
      fields: [
        {
          name: "!Regles - ✅",
          value: "Annonce les regles du jeu "
        },
        {
          name: "!Commandes - ✅",
          value: "Liste toutes les commandes du bot "
        },
        {
          name: "!Start - ✅",
          value: "Lance la partie"
        },
        {
          name: "!Stop - ✅",
          value: "Stop la partie"
        }
      ],
      footer: {
        text: "© Quentin"
      }
    }})
  }
})

bot.on('message', function (message) {
  if(message.content === '!regles') {
       message.channel.send({embed: {
      color: 8625894,
      title: "Regles du mini-jeu",
      description: 'Vous jouer a "mooving zone" , le but du jeu est d\'être le dernier survivant tout en traversant les zones les une apres les autres.',
      fields: [
        {
          name: 'Attendez le décompte avant de passer à la prochaine zone.',
       value: 'Bon jeu a tous et bonne chance !'
        }
      ],
    }
  });
  }
 
})

bot.on('message', function (message) {
    if(message.content === '!commandes') {
         message.channel.send({embed: {
        color: 3447003,
        title: "Voici les differentes commandes du bot",
        description: "D\'autres commandes et améliorations sont prévues ultérieurement",
        fields: [
            {
              name: "!regles",
              value: "Énonce les règles du mini-jeu"
            },
            {
            name: "!start",
            value: "Lance la partie"
          },
          {
            name: "!stop",
            value: "Stop la partie"
          }
        ],
        timestamp: new Date(),
        footer: {
          text: "© Quentin"
        }
      }
    });
    }
   
})

bot.login(process.env.BOT_TOKEN);
