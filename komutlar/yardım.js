const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor('RANDOM')
  .addField("**» Eğlence Komutları**", `fs!starwars = StarWars (Pixel Formatında) Filmini Gösterir. \fs!herkesebendençay = Herkese Çay Alırsınız. \fs!koş = Koşarsınız.\fs!yumruk-at = Yumruk Atarsınız. \fs!söv = Bot Etiketlediğiniz Kişiye Söver.`)
  .addField("**» Kullanıcı Komutları**", `fs!report = İstediğiniz Kullanıcıyı Reportlarsınız. \fs!yaz = Bota İsediğinizi Yazdırırsınız. \fs!sunucubilgi = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \fs!sunucuresmi = Bulunduğunuz Sunucunun Resmin Gösterir. \fs!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \fs!avatarım = Avatarınınızı Gösterir. `)
  .addField("**» Sunucu Yetkilisi Komutları**", `fs!ban = İstediğiniz Kişiyi Sunucudan Banlar. \fs!kick  = İstediğiniz Kişiyi Sunucudan Atar. \fs!unban = İstediğiniz Kişinin Yasağını Açar. \fs!sustur = İstediğiniz Kişiyi Susturur. \fs!sil = Belirtilen Miktarda Mesajı Silir. (MAX 100) \fs!oylama = Oylama Açar. \fs!kutuiciyaz = Kutu içinde yazı yazarsınız. \fs!rol-ver = İstediğiniz Kişiye Rol Verebilirsiniz`)
  .addField("**» Botun Ana Komutları**", "fs!yardım = BOT Komutlarını Atar. \fs!bilgi = BOT Kendisi Hakkında Bilgi Verir. \fs!ping = BOT Gecikme Süresini Söyler. \fs!davet = BOT Davet Linkini Atar. \fs!istatistik = BOT İstatistiklerini Gösterir. \fs!yapımcım = Botun Yapımcısını Gösterir")
  .addField("**» Oyun Komutları**", `fs!fortnite = İstediğiniz Kullanıcının İstatistiklerine Bakarsınız.`)
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
