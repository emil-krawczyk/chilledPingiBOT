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
      msg.channel.send("Pingi to najlepszy bot Discorda!");
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
    if (msg.content.toLowerCase() === "daj pingu") {
      msg.channel.send('https://media.discordapp.net/attachments/773491441434492939/778963824657039400/maxresdefault.jpg?width=891&height=501');
    }
  });

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "działa") {
      msg.channel.send(`Jeszcze jak!`);
    }
  });

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "it is work?") {
      msg.channel.send(`Of course!`);
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
}
