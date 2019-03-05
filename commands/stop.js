const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'\avez pas les permissions pour utiliser cette commande !");
    let voiceChannel =  message.guild.channels
    .filter(function (channel) { return channel.id === '540093524570406912' })
    .first()
    voiceChannel
    .leave()
}

module.exports.help = {
  name:"stop"
}
