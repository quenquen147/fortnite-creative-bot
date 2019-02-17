const Command = require('./command')

module.exports = class Leave extends Command {

    static match (message) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n\'avez pas les permissions d\'utiliser cette commande !");
        return message.content.startsWith('!stop')
    }

    static action (message) {
      let voiceChannel =  message.guild.channels
       .filter(function (channel) { return channel.id === '540093524570406912' })
       .first()
       voiceChannel
       .leave()
    }
}