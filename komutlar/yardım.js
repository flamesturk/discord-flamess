const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle(" Komutlar Menüsü ")
  .setDescription('')
  .setColor('RANDOM')
  .addField("**» Eğlence Komutları**", `fs!starwars = StarWars (Pixel Formatında) Filmini Gösterir.\nfs!sigara = sigara içersiniz. \nfs!sigaraiç = sigara içirir gif gönderir \nfs!çayiç = Size Çay içirir. \nfs!çayaşekerat = Çayınıza Şeker Atar. \nfs!herkesebendençay = Herkese Çay Alırsınız. \nfs!koş = Koşarsınız. \nfs!yumruk-at = Yumruk Atarsınız. \nfs!söv = Bot Etiketlediğiniz Kişiye Söver. `)
  .addField("**» Kullanıcı Komutları**", `fs!yaz = Bota İsediğinizi Yazdırırsınız. \nfs!kutuiciyaz = Kutu İçinde Yazarsınız. \nfs!sunucubilgi = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \nfs!sunucuresmi = Bulunduğunuz Sunucunun Resmin Gösterir. \nfs!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \nfs!avatarım = Avatarınınızı Gösterir. `)
  .addField("**» Sunucu Yetkilisi Komutları**", `fs!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nfs!kick veya at  = İstediğiniz Kişiyi Sunucudan Atar. \nfs!uyar İstediğiniz kişiyi Uyarir \nfs!unban = İstediğiniz Kişinin Yasağını Açar. \nfs!temizle = Belirtilen Miktarda Mesajı Siler. \nfs!rol-ver = İstediğiniz Kişiye Rol Verebilirsiniz`)
  .addField("**» Botun Ana Komutları**", "fs!yardım = Botun Komutlarını Atar. \nfs!bilgi = Botun Kendisi Hakkında Bilgi Verir. \nfs!ping = Botun Gecikme Süresini Söyler. \nfs!tavsiye = Bana Bot ile ilgili Tavsiye verebilirsiniz en yakın zamanda size cevap vericegim.\nfs!davet = Botun Davet Linkini Atar. \nfs!istatistik = Botun İstatistiklerini Gösterir. \nfs!yapımcım = Botun Yapımcısını Gösterir")
  .addField("**» Oyun Komutları**", `fs!fortnite = İstediğiniz Kullanıcının İstatistiklerine Bakarsınız. \nfs!mcskin = Minecraftaki skininizi gösteri \nfs!mcavatar = Minecraft Avatarınızı Gösterir. `)
  .setFooter(' Bot Güncel Sürüm [ BETA v0.3.1] Discord Sunucumuz : https://discord.gg/Ymx5sJP ')
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
