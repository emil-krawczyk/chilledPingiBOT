
//zmienne

const config = require("./config/config.js")

const token = config.token

const gra = config.status

const command = require("./command")

const Discord = require("discord.js");

const client = new Discord.Client();

const status = config.status

const chalk = require("chalk")

const missingPermissions = new Discord.RichEmbed()
    .setTitle('🛑 Missing Permissions')
    .setDescription(`${member}, you don'thave permissions to do this.`)
    .setFooter('PingiBOT', 'https://cdn.discordapp.com/app-icons/779349541362204754/555ee6dd92bd5541aaba57486ba61c1b.png')
    .setColor('#FF4C14')

//przygotowanie klienta do pracy

client.on('ready', () => {
    console.log('Client is ready.')

    command(client, '&ban', (message) => {
        const { member, mentions } = message
    
        const tag = `<@${member.id}>`
    
        if (
          member.hasPermission('ADMINISTRATOR') ||
          member.hasPermission('BAN_MEMBERS')
        ) {
          const target = mentions.users.first()
          if (target) {
            const targetMember = message.guild.members.get(target.id)

            const channel = member.guild.channels.get('798583490970124318');
    
            const banEmbed = new Discord.RichEmbed()
            .setTitle('[*]')
            .setDescription(`${targetMember} has been banned.`)
            .setColor('#EBC91E')
            .setFooter('Server Administration')

            targetMember.ban()

            message.channel.send(`Succesfully banned ${targetMember}.`)
	        channel.send(banEmbed);
            
          } else {
            message.channel.send(`❓ Please specify user to ban.`)
          }
        } else {
          message.channel.send(missingPermissions)
        }
      })

      command(client, '&mute', (message) => {
        const { member, mentions } = message
    
        const tag = `<@${member.id}>`
    
        if (
          member.hasPermission('ADMINISTRATOR') ||
          member.hasPermission('BAN_MEMBERS')
        ) {
          const target = mentions.users.first()
          if (target) {
            const targetMember = message.guild.members.get(target.id)

            const channel = member.guild.channels.get('798583490970124318');

            const muted = member.guild.roles.get('797868333965246535')
    
            const muteEmbed = new Discord.RichEmbed()
            .setTitle('Ajć')
            .setDescription(`${targetMember} has been muted.`)
            .setColor('#EBC91E')
            .setFooter('Server Administrations')
            
            targetMember.addRole(muted)

            message.channel.send(`Succesfully muted ${targetMember}`)
	        channel.send(muteEmbed);
            
          } else {
            message.channel.send(`Please specify user to mute.`)
          }
        } else {
          message.channel.send(missingPermissions)
        }
      })

      command(client, '&unmute', (message) => {
        const { member, mentions } = message
    
        const tag = `<@${member.id}>`
    
        if (
          member.hasPermission('ADMINISTRATOR') ||
          member.hasPermission('BAN_MEMBERS')
        ) {
          const target = mentions.users.first()
          if (target) {
            const targetMember = message.guild.members.get(target.id)

            const channel = member.guild.channels.get('798583490970124318');

            const muted = member.guild.roles.get('797868333965246535')

            targetMember.removeRole(muted)

            message.channel.send(`Succesfully unmute ${targetMember}`)
            
          } else {
            message.channel.send(`Please specify user to unmute.`)
          }
        } else {
          message.channel.send(missingPermissions)
        }
      })

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
    const { author, guild, content} = msg

    if(msg.author.bot) return;
  
    if (content.toLowerCase().startsWith('xd') || content.toLowerCase() === 'xd') {
      msg.channel.send("xDDDDD")}
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

command(client, '&status', message => {

    const { member, mentions } = message
  
    const content = message.content.replace('&status ', '')
  
    if (member.hasPermission('ADMINISTRATOR')) {
      if (content === 'clear') {
        console.log('Clearing status...')
        message.channel.send('Clearing status...')
        client.user.setActivity(status)
        message.channel.send('Status has been succesfully cleared.')}
  
        else { if (content === 'hard-clear') {
            message.channel.send('Deleting status...')
            client.user.setActivity('')
            message.channel.send('Status has been deleted. You can restore it, typing: `&status clear`.')}
  
        else {
            message.channel.send('Settings status...')
            client.user.setActivity(content)
            message.channel.send(`Status has been set to: "${content}".`)}} 
    }
  
    else {
       
      message.channel.send(missingPermissions)
    }
  
  })

//token

client.login(token)