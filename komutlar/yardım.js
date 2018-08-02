const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Eğlence Komutları**", `**ŞUANDA BAKIMDA**`)
  .addField("**» Kullanıcı Komutları**", `**ŞUANDA BAKIMDA**`)
  .addField("**» Oyun Komutları**", `**ŞUANDA BAKIMDA**`)
  .addField("**» Sunucu Yetkilisi Komutları**", `**ŞUANDA BAKIMDA`)
  .addField("**» Botun Ana Komutları**", "fs!yardım = BOT Komutlarını Atar. \fs!bilgi = BOT Kendisi Hakkında Bilgi Verir. \fs!ping = BOT Gecikme Süresini Söyler. \fs!davet = BOT Davet Linkini Atar. \fs!istatistik = BOT İstatistiklerini Gösterir. \fs!yapımcım = Botun Yapımcısını Gösterir")
  .setFooter('Flamess Bot Güncel Sürüm [ BETA v0.3.1]')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
