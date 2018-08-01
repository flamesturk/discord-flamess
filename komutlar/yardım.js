const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message,) => {
	const embed = new Discord.RichEmbed()
	.setTitle(' 》● 𝓕𝓁𝔞𝔪𝔢𝓈𝓈 - Yardım - Menüsü ●《')
	.addField('》● Yetkili Komutları ●《: ', `
1. fs!ping - Botun Pingini Gösterir.  
2. fs!ban - İstediginiz Kişiyi Banlar.     
3. fs!unban - İstediginiz Kişinin Banını Kaldırır.    
4. fs!kick - İstediginiz Kişiyi Kickler.  
5. fs!uyar - İstediğiginiz Kişiyi Uyarırsınız.
6. fs!duyuru - Güzel Bir Duyuru Görünümü Sağlar.
7. fs!istatislik - Botun Bilgisini Verir.
8. fs!ses-kanal-aç - Bir ses kanalı açar.
9. fs!yazı-kanal-aç - Bir yazı kanalı açar.
10. fs!rol-ver - İstediğiniz kişiyi istediğiniz rolü verir.         
11. fs!temizle - Sohbeti Temizler.          
12. fs!yardım - fs!y Yardım Menüsünü Gösterir. 
13. fs!botsunucu** - Botun Sunucusunun Davet Linkini Atar Gelmeyi Unutmayın.
14. fs!davet - Botun Davet Linkini Atar.
15. fs!tavsiye - Bot hakkında tavsiye verebilirsiniz. size en yakın zaman icinde cevap vericegim. 
16. fs!yapımcım - Botun Yapımcısını Gösterir.`) 	
.addField('》● Eglence Komutları ●《: ', ` 
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
.addField('Minecraft Komutları', `
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
