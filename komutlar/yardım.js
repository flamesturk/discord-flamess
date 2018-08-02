const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Eğlence Komutları**", `fs!starwars = StarWars (Pixel Formatında) Filmini Gösterir. \fs!herkesebendençay = Herkese Çay Alırsınız. \fs!koş = Koşarsınız. \fs!yumruk-at = Yumruk Atarsınız. \fs!söv = Bot Etiketlediğiniz Kişiye Söver.`)
  .addField("**» Kullanıcı Komutları**", `fs!report = İstediğiniz Kullanıcıyı Reportlarsınız. \fs!tavsiye = Bota Tavsiye Verebilirsiniz En Yakın zamanda size cevap vericeklerdir.  \fs!yaz = Bota İsediğinizi Yazdırırsınız. \fs!sunucubilgi = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \fs!sunucuresmi = Bulunduğunuz Sunucunun Resmin Gösterir. \fs!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \fs!avatarım = Avatarınınızı Gösterir. `)
  .addField("**» Oyun Komutları**", `fs!fortnite = İstediğiniz Kullanıcının İstatistiklerine Bakarsınız. \fs!mcskin = minecraft skininizi gösterir \fs!mcavatar = minecraft avatarınızı gösterir. `)
  .addField("**» Sunucu Yetkilisi Komutları**", `fs!istatistik = \ fs!ban = İstediğiniz Kişiyi Sunucudan Banlar. \fs!kick  = İstediğiniz Kişiyi Sunucudan Atar. \fs!unban = İstediğiniz Kişinin Yasağını Açar. \fs!sustur = İstediğiniz Kişiyi Susturur. \nvgs!sil = Belirtilen Miktarda Mesajı Silir. (MAX 100) \nvgs!oylama = Oylama Açar. \nvgs!duyuru = Güzel Bir Duyuru Görünümü Sağlar. \nvgs!rol-ver = İstediğiniz Kişiye Rol Verebilirsiniz`)
  .addField("**» Botun Ana Komutları**", "fs!davet = Botunuzu Sunucunuza Eklemek için Davet Linkini Atar. \fs!yardım = Botun Komutlarını Atar. \fs!bilgi = Botun Kendisi Hakkında Bilgi Verir. \fs!ping = Botun Gecikme Süresini Söyler. \fs!istatistik = Botun İstatistiklerini Gösterir. \fs!yapımcım = Botun Yapımcısını Gösterir")
  .setFooter('**»Flamess Bot Güncel Sürüm [ BETA v0.3.1] https://discord.gg/Ymx5sJP ')
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
