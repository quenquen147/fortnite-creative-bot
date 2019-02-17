const botconfig = require("./botconfig.json");
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
  
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Commande introuvable.");
      return;
    }
  
    jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded!`);
      client.commands.set(props.help.name, props);
    });
  
  });
  

client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}!`);
  client.user.setActivity("Fortnite");
});

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
  
  });

  client.login(process.env.BOT_TOKEN);
