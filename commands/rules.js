bot.on('message', function (message) {
    if(message.content === '!commandes') {
         message.channel.send({embed: {
        color: 3447003,
        title: "Voici les differentes commandes du bot",
        description: "D\'autres commandes et améliorations sont prévues ultérieurement",
        fields: [
            {
                name: "!Regles",
                value: "Énonce les règles du mini-jeu"
            },
            {
            name: "!Start",
            value: "Lance la partie"
          },
          {
            name: "!Time [min:sec]",
            value: "Modifie le laps de temps en minutes"
          },
          {
            name: "!Avatar [Url]",
            value: "Permet de modifier le logo du bot"
          },
          {
            name: "!NameBot [nom]",
            value: "Change le nom du bot"
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