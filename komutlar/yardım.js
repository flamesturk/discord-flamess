const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor('RANDOM')
  .addField("**» Eğlence Komutları**", `fs!atatürk = Rastgele Atatürkün Fotoğraflarını Gösterir. \nfs!starwars = StarWars (Pixel Formatında) Filmini Gösterir. \fs!banned = Dene ve Görvgs! \fs!kahkaha = Kahkaha Atarsınız \fs!herkesebendençay = Herkese Çay Alırsınız. \fs!koş = Koşarsınız.\fs!çayiç = Çay İçersiniz. \fs!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \fs!çayaşekerat = Çaya Şeker Atarsınız. \fs!yumruk-at = Yumruk Atarsınız. \fs!şanslısayım = Bot Sizin Şanslı Sayınızı Söyler. \fs!söv = Bot Etiketlediğiniz Kişiye Söver.`)
  .addField("**» Kullanıcı Komutları**", `fs!report = İstediğiniz Kullanıcıyı Reportlarsınız. \nfs!kısalt = İstediğiniz Linki Kısaltarak Özelleştire Bilirsiniz. \nfs!yaz = Bota İsediğinizi Yazdırırsınız. \nfs!sunucubilgi = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \nvgs!sunucuresmi = Bulunduğunuz Sunucunun Resmin Gösterir. \nvgs!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \nvgs!avatarım = Avatarınınızı Gösterir. `)
  .addField("**» Oyun Komutları**", `vfs!fortnite = İstediğiniz Kullanıcının İstatistiklerine Bakarsınız.`)
  .addField("**» Sunucu Yetkilisi Komutları**", `fs!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nvgs!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nvgs!unban = İstediğiniz Kişinin Yasağını Açar. \nvgs!sustur = İstediğiniz Kişiyi Susturur. \nvgs!sil = Belirtilen Miktarda Mesajı Silir. (MAX 100) \nvgs!oylama = Oylama Açar. \nvgs!duyuru = Güzel Bir Duyuru Görünümü Sağlar. \nvgs!rol-ver = İstediğiniz Kişiye Rol Verebilirsiniz`)
  .addField("**» Botun Ana Komutları**", "fs!yardım = BOT Komutlarını Atar. \nfs!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nfs!ping = BOT Gecikme Süresini Söyler. \nfs!davet = BOT Davet Linkini Atar. \nvgs!istatistik = BOT İstatistiklerini Gösterir. \nvgs!yapımcım = Botun Yapımcısını Gösterir")
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
