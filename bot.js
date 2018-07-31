const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(' ')[0];
  command = command.slice(prefix.length);

  let args = message.content.split(' ').slice(1);

  if (command === 'tavsiyeni-gönder' || command === 'tavsiye') {
    let str = '<@398949644232687628>';//@silmeyin!
    let id = str.replace(/[<@!>]/g, '');
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply(` ⚠ tavsiyeni yazmayı unuttun. ⚠ `);
    message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(''));
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Tavsiye bilgileri;')
    .addField('Tavsiye:', mesaj, true)
    .addField('Kullanıcı adı:', message.author.tag, true)
    .addField('Kullanıcı kimliği:', message.author.id, true)
    .addField('Sunucu adı:', message.guild.name, true)
    .addField('Sunucu kimliği:', message.guild.id, true)
    client.fetchUser(id)
    .then(user => {user.send({embed})})
  }
});

client.on('message', async message => {
  if (message.content.toLowerCase() === prefix + 'istatistik') {
const embed = new Discord.RichEmbed()
            .setTitle("Notech istatistik")
            .setDescription('')
            .setThumbnail(`${client.user.avatarURL}`)
            .setColor("RANDOM")
            .addField("Sunucu Sayısı", client.guilds.size.toLocaleString(), true)
            .addField("Kanal Sayısı", client.channels.size.toLocaleString(), true)
            .addField("Kullanıcı Sayısı", client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
            .addField("Bellek Kullanımı", Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + ` MB`, true)
         message.channel.send(embed)
}
});

client.on('guildCreate', guild => {
  guild.owner.send('Beni Eklediğin İçin Teşekkürler | Komutlarıma **fs!yardım** Yazarak Bakabilirsiniz | Discord Sunucuma Gidmek İçin [Tikla!]( https://discord.gg/Ymx5sJP)')
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
        setTimeout(() => {
    }, 1000);//bekle
    msg.react('🇸')
    msg.react('🇦')
            setTimeout(() => {
    }, 1500);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selam') {
        setTimeout(() => {
    }, 1000);//bekle
    msg.react('🇸')
    msg.react('🇦')
            setTimeout(() => {
    }, 1500);
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
	  msg.channel.send("", {embed: {
              color: 0xff1f1,
	      title: `**AleykümSelam**`,
              description: `${msg.author} **Hoşgeldin.**`,
	}})}
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sea') {
	  msg.channel.send("", {embed: {
              color: 0xff1f1,
	      title: `**AleykümSelam**`,
              description: `${msg.author} **Hoşgeldin.**`,
	}})}
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selam') {
	  msg.channel.send("", {embed: {
              color: 0xff1f1,
	      title: `**AleykümSelam**`,
              description: `${msg.author} **Hoşgeldin.**`,
	}})}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'botsunucu') {
	  msg.reply('**https://discord.gg/Ymx5sJP**')
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'botdavet') {
	  msg.reply('**https://discordapp.com/oauth2/authorize?client_id=471048549186928641&scope=bot&permissions=2146958591**')
	}
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.BOT_TOKEN);
