const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Eğlence Komutları**", `vgs!atatürk = Rastgele Atatürkün Fotoğraflarını Gösterir. \nvgs!starwars = StarWars (Pixel Formatında) Filmini Gösterir. \nvgs!banned = Dene ve Görvgs! \nvgs!kahkaha = Kahkaha Atarsınız \nvgs!herkesebendençay = Herkese Çay Alırsınız. \nvgs!koş = Koşarsınız.\nvgs!çayiç = Çay İçersiniz. \nvgs!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nvgs!çayaşekerat = Çaya Şeker Atarsınız. \nvgs!yumruk-at = Yumruk Atarsınız. \nvgs!şanslısayım = Bot Sizin Şanslı Sayınızı Söyler. \nvgs!söv = Bot Etiketlediğiniz Kişiye Söver.`)
  
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
