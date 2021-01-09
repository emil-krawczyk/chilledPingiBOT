const { Collection } = require("discord.js")

const { readdirSync } = require("fs")

const ascii = require("ascii-table")

const table = new ascii().setHeading('Command', 'Load status')

const chalk = require("chalk")

const Discord = require("discord.js");

module.exports = (client) => {
 // Commands
 client.commands = new Collection()

 const commandFiles = readdirSync(__dirname + "/../commands").filter((file) => 
     file.endsWith(".command.js"),
 )

 for (const file of commandFiles) {
     const command = require(__dirname + `/../commands/${file}`)

     if (command.name) {
         client.commands.set(command.name, command)
         table.addRow(file, '✅')
     } else {
         table.addRow(file, '🚨 -> missing "name" !')
         continue
     }
 }

 console.log(table.toString())

 client.on("message", msg => {
    const { author, guild } = msg
  
  
    if (msg.content.toLowerCase() === "&ping") {
      msg.reply("Pong!");
    }
  });
  
  client.on("message", msg => {
    if (msg.content.toLowerCase() === "kim jest pingi?") {
      msg.channel.send("To bot zrobiony przez Emila!");
    }
  });

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "daj kudłacza") {
      msg.channel.send('https://media.discordapp.net/attachments/773491441434492939/780398845715677224/shaggy.jpg?width=492&height=475');
    }
  });

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "daj kierę") {
      msg.channel.send('https://cdn.discordapp.com/attachments/773905342382997565/780400834084995072/IMG-20180630-WA0002.jpg');
    }
  });

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "daj szwagra") {
      msg.channel.send('https://cdn.discordapp.com/attachments/779401823387779092/780400040639201280/0d6fc6a4-cbcd-4df5-87f2-98d6dc12a546.png');
    }
  });

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "wyimaginuj mikołaja") {
      msg.channel.send('https://cdn.discordapp.com/attachments/779401823387779092/780699386303873064/mikoajhelikopter2020.png');
    }
  });

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "daj ziaję") {
      msg.channel.send('https://cdn.discordapp.com/attachments/779401823387779092/780699463618002974/773513967880503307.png');
    }
  });

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "lustereczko powiedz przecie, kto jest najpiękniejszy w świecie") {
      msg.channel.send('Twój stary');
    }
  });

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "daj słonia") {
      msg.channel.send('https://media.discordapp.net/attachments/773491441434492939/779291934078140428/IMG_20201118_105243.png');
    }
  });

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "daj ptaszyna") {
      msg.channel.send('https://cdn.discordapp.com/attachments/773862985079980033/784794124032540693/Ja.PNG');
    }
  });

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "daj pingu") {
      msg.channel.send('https://media.discordapp.net/attachments/773491441434492939/778963824657039400/maxresdefault.jpg?width=891&height=501');
    }
  });

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "poproszę emila") {
      msg.channel.send('https://media.discordapp.net/attachments/773491441434492939/780335663656206346/1606116913176.jpeg?width=353&height=474');
    }
  });

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "daj 2 złote") {
      msg.channel.send('https://media.discordapp.net/attachments/773491441434492939/780345767029112842/60676_1b.png?width=475&height=475');
      msg.channel.send('Tylko nie wydaj na głupoty!')
    }
  });

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "działa") {
      msg.channel.send(`Jeszcze jak!`);
    }
  });

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "xd") {
      msg.channel.send('xDDDDD');
    }
  });

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "cześć") {
      msg.reply(`cześć.🖐`);
    }
  });

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "&help") {
      msg.channel.send("Cześć, tu Pingi! Moim zadaniem jest witanie użytkowników wchodzących na serwer i z nigo wychodzących oraz wysyłanie przeróżnych wiadomości. Jeśli chcesz, odwiedź moją stronę internetową: https://www.pingi.emilkrawczyk.pl/. Mój adres email to: lubie@pingi.emilkrawczyk.pl. 🙂")
    }
  })
}



