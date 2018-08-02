const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message,) => {
	const embed = new Discord.RichEmbed()
	                                      .setTitle(' 》 𝓕𝓁𝔞𝔪𝔢𝓈𝓈 - Yardım - Menüsü 《')
	.addField('》Yetkili Komutları《 ', ` 
 fs!ping Botun Pingini Gösterir. 

 fs!ban [Sebebi]  [@kişi] - İstediginiz Kişiyi Banlarsınız.    

 fs!unban [Sebebi]  [@kişi] - İstediginiz Kişinin Banını Kaldırırsınız. 
	    
 fs!kick [Sebebi]  [@kişi] - İstediginiz Kişiyi Kickler. Sunucudan Atar. 

fs!kutuiciyaz [Kutu icinde Yazılacak Şey] Kutu icinde Yazarsınız.

fs!istatistik Botun Bilgisini Verir.

fs!ses-kanal-aç [kanalın ismi] Bir ses kanalı açar.

fs!yazı-kanal-aç [kanalın ismi] Bir yazı kanalı açar.

fs!rol-ver [@kime vericeginiz] [@hangirol] Herkese bu rolden @bahsetme yetkisini tanı olmalı İstediğiniz kişiyi istediğiniz rolü verir. 
 
fs!temizle [sayı belirtin] Sohbeti Temizler.

fs!kullanıcıbilgim kbilgim Komutu kullanan kişi hakkında bilgi.

fs!sunucubilgi Sunucu hakkında Tüm bilgileri verir.

fs!nsfw [nsfw kanalı açın] +18 NSFW - Sapik Resimleri Gösteririr.

fs!botsunucu Botun Sunucusunun Davet Linkini Atar Gelmeyi Unutmayın. 

fs!davet Botun Davet Linkini Atar Sunucunuza Ekleyebilirsiniz. 

fs!tavsiye Bot hakkında tavsiye verebilirsiniz. size en yakın zaman icinde cevap vericegim.

fs!yapımcım Botun Yapımcısını Gösterir. 

fs!yardım veya fs!y Yardım Menüsünü Gösterir. Bu Menüyü Gösterir - İlerde Gelişecek. ')

.addField('》Eglence Komutları《 ', `
.addField('》Eglence Komutları《 ', `

fs!stresçarkı Sizin için bir stres çarkı çevirir.

fs!emojiyazı Mesajınızı emoji haline getirir.

fs!sigara ve fs!sigaraiç Bot Size Sigara İçirir.

fs!yumruk-at Yumruk Atar gif.
 
fs!koş Koşarsınız gif.

fs!herkesebendençay Herkese Çay Verir gif.

fs!söv İstediginiz kişiye Söver

fs!nahçek [kime çekem]istediğiniz Kişiye Nah Çekersiniz.

fs!hesapla Senden Benden Akıllı Hesap Makinesi Belirtilen İşlemi yapar.

fs!yaz İstediğiniz şeyi bota 

fs!sor [sorunuz] Bota Soru Sora Bilirsiniz. Şuanlık %100 Çalışmayabilir.	

fs!avatarım Profil Resminizi Gösterir.

fs!servericon Serverinizin Resminizi Gösterir.

fs!mcskin [minecraft adınız] Minecarft Skininizi Gösterir.

fs!mcavatar [minecraft adınız] Minecraft Avatarınızı Gösterir.
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
