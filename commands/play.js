const Command = require('./command')

module.exports = class Play extends Command {

    static match (message) {
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n\'avez pas les permissions d\'utiliser cette commande !");
        return message.content.startsWith('!start')
    }

    static action (message) {
     let voiceChannel =  message.guild.channels
       .filter(function (channel) { return channel.id === '540093524570406912' })
       .first()
       voiceChannel
       .join()
       
       .then(function (connection) {
            connection.playFile('./mp3/SonsZone.mp3');
          }) 
        //  console.log(message.guild.channels.array());
    }
}