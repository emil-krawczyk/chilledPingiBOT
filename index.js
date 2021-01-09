
const config = require("./config/config.js")

const token = config.token

const gra = config.status

const commandHandler = require("./handlers/command.handler")

const Discord = require("discord.js");
const client = new Discord.Client();

const chalk = require("chalk")

commandHandler(client)

client.on("ready", () => {
  console.log(chalk.green(`Zalogowano jako: ${client.user.tag}!`));
  console.log(chalk.blue('Użytkownik: Emil Krawczyk'))
});

client.on("ready", async () =>{
 client.user.setActivity(gra)
});

client.on('guildMemberAdd', member => {
  console.log('Ktoś wbił na serwer')
  
}
)

client.login(token);