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
.addField('》 Eglence Komutları 《 ', ` 
17. fs!stresçarkı - Sizin için bir stres çarkı çevirir.
18. fs!emojiyazı - Mesajınızı emoji haline getirir.
19. fs!sigaraiç veya fs!sigara - Bot Size Sigara İçirir.
20. fs!yumruk-at - Yumruk Atar gif. 
21. fs!koş - Koşarsınız gif.
22. fs!herkesebendençay - Herkese Çay Verir gif.
23. fs!söv - İstediginiz Kişiye Söverim Bence Yapma.
24. fs!nahçek - İstediğiniz Kişiye Nah Çekersiniz.
25. fs!kullanıcıbilgim - kbilgim Komutu kullanan kişi hakkında bilgi.
26. fs!sunucubilgi Sunucu hakkında bilgi verir.
27. fs!nsfw - +18 NSFW - Sapik Resimleri Gösteririr.
28. fs!hesapla - Hesap Makinesi Belirtilen İşlemi yapar.
29. fs!yaz - İstediğiniz şeyi bota yazdırır. 
30. fs!sor - Bota Soru Sora Bilirsiniz.
31. fs!avatarım - Profil Resminizi Gösterir. 
32. fs!servericon - Serverinizin Resminizi Gösterir.`)
.addField('》Minecraft Komutları', `
33. fs!mcskin - Minecarft Skininizi Gösterir
34. fs!mcavatar - Minecraft Avatarınızı Gösterir
**Flamess Botun Sahibi Owner: <@398949644232687628> | Developer: <@428651826913738763>**`)
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
