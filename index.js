
//zmienne

const config = require("./config/config.js")

const token = config.token

const gra = config.status

const command = require("./command")

const Discord = require("discord.js");

const client = new Discord.Client();

const status = config.status

const chalk = require("chalk")

//przygotowanie klienta do pracy

client.on('ready', () => {
    console.log('Client is ready.')

    //ustawienie statusu początkowego

    client.user.setActivity(status)
})

//powitanie

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.get('798583490970124318');
    if (!channel) return;
    
    const welcomeEmbed = new Discord.RichEmbed()
    .setTitle('👋 Welcome')
    .setDescription(`Hello, ${member}! \n Don't forget to accept our rules!`)
    .setColor('#EBC91E')
    .setFooter('Server administration')

	channel.send(welcomeEmbed);
});

//pożegnanie

client.on('guildMemberRemove', async member => {
	const channel = member.guild.channels.get('798583490970124318');
    if (!channel) return;
    
    const byeEmbed = new Discord.RichEmbed()
    .setTitle('[*]')
    .setDescription(`${member} has left the server...`)
    .setFooter('Server administration')
    .setColor('#EBC91E')

	channel.send(byeEmbed);
});

//ping

command(client, '&ping', message => {
    message.channel.send('Pong!')
}),

command(client, '&memberaddemit', message => {
    client.emit('guildMemberAdd');
    message.channel.send('Wyemitowano zdarzenie "guildMemberAdd".')
})

command(client, '&memberremoveemit', message => {
    client.emit('guildMemberRemove');
    message.channel.send('Wyemitowano zdarzenie "guildMemberRemove".')
})

//lista komend

command(client, '&help', message => {

    const embed = new Discord.RichEmbed()
        .setTitle('COMMANDS LIST')
        .setDescription('1. `&ping` - bot replies with "Ping!" \n 2. `&shaggy` or `&kudłacz` - get Shaggy picture! \n 3. `&słoniu` or `&elephant` - get the funny elephant picture.')
        .setFooter('PingiBOT Developers', 'https://cdn.discordapp.com/app-icons/779349541362204754/555ee6dd92bd5541aaba57486ba61c1b.png')
        .setColor('#FF4C14')

message.channel.send(embed)
}),

//podstawowe autorespondery

command(client, ['&słoniu', '&elephant'], message => {
    message.channel.send('https://images-ext-1.discordapp.net/external/eCgNrRgTQR-RiWA_mck8CeUZ4gFJt4CKvM_NCGESSlE/https/media.discordapp.net/attachments/773491441434492939/779291934078140428/IMG_20201118_105243.png?width=637&height=473')
})

command(client, ['&kudłacz', '&shaggy'], message => {
    message.channel.send('https://images-ext-2.discordapp.net/external/dk6ceHtD-57CkrJUuaCBa0sCjb_qOhscfiXI5Dk_46Y/%3Fwidth%3D492%26height%3D475/https/media.discordapp.net/attachments/773491441434492939/780398845715677224/shaggy.jpg?width=490&height=473')
})

client.on("message", msg => {
    const { author, guild } = msg
  
  
    if (msg.content.toLowerCase() === "xd") {
      msg.channel.send("xDDDDD");
    }
  });


client.on("message", msg => {
    const { author, guild } = msg
  
  
    if (msg.content.toLowerCase() === "hi") {
      msg.reply("hello!");
    }
  });

client.on("message", msg => {

    const { author, guild } = msg

    if(msg.author.bot) return;

    if (msg.content.toLowerCase() === "yes") {
        msg.channel.send('no')
    }
})

client.on("message", msg => {

    const { author, guild } = msg

    if(msg.author.bot) return;

    if (msg.content.toLowerCase() === "no") {
        msg.channel.send('yes')
    }
})

//status

// command(client, '&status', message => {
//     const content = message.content.replace('&status ', '')

//     if (content === 'clear') {
//         console.log('Czyszczenie statusu...')
//         message.channel.send('Czyszczę status...')
//         client.user.setActivity(status)
//         message.channel.send('Status wyczyszczony pomyślnie.')
//     }

//     else {
//         if (content === 'hard-clear') {
//             message.channel.send('Czyszczenie statusu...')
//             client.user.setActivity('')
//             message.channel.send('Status wyczyszczony. Możesz go przywrócić, wpisując `&status clear`.')
//         }

//         else {
//             message.channel.send('Ustawiam status...')
//             client.user.setActivity(content)
//             message.channel.send(`Zmieniono status na "${content}".`)
//         }
//     }

// }),

//token

client.login(token)