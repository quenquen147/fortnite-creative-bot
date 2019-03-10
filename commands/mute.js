const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let channel = message.member.voiceChannel;
    for (let member of channel.members) {
        member[1].setMute(true)
    }
}

module.exports.help = {
  name:"mute"
}
