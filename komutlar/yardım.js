const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message,) => {
	const embed = new Discord.RichEmbed()
	                                      .setTitle(' 》 𝓕𝓁𝔞𝔪𝔢𝓈𝓈 - Yardım - Menüsü 《')
	.addField('》fs!Ping《 ', ` 
 Botun Pingini Gösterir. `) 
        .addField('》fs!Ban《 ', `
 [Sebebi]  [@kişi] - İstediginiz Kişiyi Banlarsınız. `)   
        .addField('》fs!Ban《 ', `   
 [Sebebi]  [@kişi] - İstediginiz Kişinin Banını Kaldırırsınız. `)	 
        .addField('》fs!Kick《 ',`   
 [Sebebi]  [@kişi] - İstediginiz Kişiyi Kickler. Sunucudan Atar.  `)
        .addField('》fs!kutuiciyaz《 ',`
 [Kutu icinde Yazılacak Şey] Kutu icinde Yazarsınız.`)
        .addField('》fs!istatistik《 ',`
 Botun Bilgisini Verir.`)
.addField('》fs!ses-kanal-aç《 ',`
  [kanalın ismi] Bir ses kanalı açar.`)
.addField('》fs!yazı-kanal-aç《 ',`
 [kanalın ismi] Bir yazı kanalı açar.`)
.addField('》fs!rol-ver《 ',`
[@kime vericeginiz] [@hangirol] Herkese bu rolden @bahsetme yetkisini tanı olmalı İstediğiniz kişiyi istediğiniz rolü verir. `)  
.addField('》fs!temizle《 ',`   
[sayı belirtin] Sohbeti Temizler.`)
.addField('》fs!yardım《 ',`          
fs!y Yardım Menüsünü Gösterir. Bu Menüyü Gösterir - İlerde Gelişecek. `)
.addField('》fs!botsunucu《 ',` 
Botun Sunucusunun Davet Linkini Atar Gelmeyi Unutmayın. `)
.addField('》fs!davet《 ',`
Botun Davet Linkini Atar Sunucunuza Ekleyebilirsiniz.`)
.addField('》fs!tavsiye《 ',`
Bot hakkında tavsiye verebilirsiniz. size en yakın zaman icinde cevap vericegim. `)
.addField('》fs!yapımcım《 ',`
Botun Yapımcısını Gösterir. `)
.addField('》fs!stresçarkı《 ', ` 
Sizin için bir stres çarkı çevirir.`)
.addField('》fs!emojiyazı《 ', `
Mesajınızı emoji haline getirir.`)
.addField('》fs!sigaraiç veya fs!sigara《 ', `
Bot Size Sigara İçirir.`)
.addField('》fs!yumruk-at《 ', `
Yumruk Atar gif.`)
.addField('》fs!koş《 ', ` 
Koşarsınız gif.`)
.addField('》fs!herkesebendençay《 ', `
Herkese Çay Verir gif.`)
.addField('》fs!söv《 ', `
[@kime sövem] İstediginiz Kişiye Söverim Bence Yapma.`)
.addField('》fs!nahçek《 ', `
[@kime çekem] İstediğiniz Kişiye Nah Çekersiniz.`)
.addField('》fs!kullanıcıbilgim《 ', `
kbilgim Komutu kullanan kişi hakkında bilgi.`)
.addField('》fs!sunucubilgi《 ', `
Sunucu hakkında Tüm bilgileri verir.`)
.addField('》fs!nsfw《 ', `
[nsfw kanalı açın] +18 NSFW - Sapik Resimleri Gösteririr.`)
.addField('》fs!hesapla《 ', `
Senden Benden Akıllı Hesap Makinesi Belirtilen İşlemi yapar.`)
.addField('》fs!yaz《 ', `
İstediğiniz şeyi bota yazdırır. `)
.addField('》fs!sor《 ', `
[sorunuz] Bota Soru Sora Bilirsiniz. Şuanlık %100 çalışmayabilir.`)
.addField('》fs!avatarım《 ', `
Profil Resminizi Gösterir.`)
.addField('》fs!servericon《 ', ` 
Serverinizin Resminizi Gösterir.`)
.addField('》fs!mcskin《', `
[minecraft adınız] Minecarft Skininizi Gösterir.`)
.addField('》fs!mcavatar《 ', `
[minecraft adınız] Minecraft Avatarınızı Gösterir.`)
**Flamess Botun Sahibi Owner: <@398949644232687628> | Developer: <@428651826913738763>**
.setColor("RANDOM")
.setFooter(' -Flamess Discord Yardım Menüsü - Discord Adresimiz : https://discord.gg/Ymx5sJP-')
    message.channel.send(embed)
	
}

exports.conf = { 
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'yardim','y','yardım'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'yardım',
  usage: 'yardım'
};
