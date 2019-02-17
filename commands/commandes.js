const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setTitle("Liste des commandes")
    .setDescription("D'autres commandes et améliorations sont prévues ultérieurement")
    .setColor("#341f97")
    .addField("!regles", "Énonce les règles du mini-jeu")
    .addField("!start", "Lance la partie")
    .addField("!stop", "Stop la partie");

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"cmd"
}
