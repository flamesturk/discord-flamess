const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message,) => {
	const embed = new Discord.RichEmbed()
	.setTitle('● 𝐅𝐥𝐚𝐦𝐞𝐬𝐬-𝐘𝐚𝐫𝐝ı𝐦-𝐌𝐞𝐧𝐮̈𝐬𝐮̈ ● ')
	.addField('● 𝐘𝐞𝐭𝐤𝐢𝐥𝐢-𝐊𝐨𝐦𝐮𝐭𝐥𝐚𝐫ı ●: ', ` 》● **fs!ping** - Botun Pingini Gösterir.  
 1》● **fs!ban** - İstediginiz Kişiyi Banlar.     
2》● **fs!unban** - İstediginiz Kişinin Banını Kaldırır.    
3》● **fs!kick** - İstediginiz Kişiyi Kickler.  
4》● **fs!uyar** - İstediğiginiz Kişiyi Uyarırsınız.
5》● **fs!duyuru** - Güzel Bir Duyuru Görünümü Sağlar.
6》● **fs!istatislik** - Botun Bilgisini Verir.
7》● **fs!ses-kanal-aç** - Bir ses kanalı açar.
8》● **fs!yazı-kanal-aç** - Bir yazı kanalı açar.
9》● **fs!rol-ver** - İstediğiniz kişiyi istediğiniz rolü verir.         
10》● **fs!temizle** - Sohbeti Temizler.          
11》● **fs!yardım** - fs!y Yardım Menüsünü Gösterir. 
12》● **fs!Özeldenyardım** Yakında Gelicek.
13》● **fs!botsunucu** - Botun Sunucusunun Davet Linkini Atar Gelmeyi Unutmayın.
14》● **fs!davet** - Botun Davet Linkini Atar.
15》● **fs!tavsiye** - Bot hakkında tavsiye verebilirsiniz. size en yakın zaman icinde cevap vericegim. 
16》● **fs!yapımcım** - Botun Yapımcısını Gösterir.`) 	
.addField(' ● 𝐄𝐠𝐥𝐞𝐧𝐜𝐞-𝐊𝐨𝐦𝐮𝐭𝐥𝐚𝐫ı ● : ', ` 》●**fs!stresçarkı** - Sizin için bir stres çarkı çevirir.
17》● **fs!emojiyazı** - Mesajınızı emoji haline getirir.
18》● **fs!sigaraiç veya fs!sigara** - Bot Size Sigara İçirir.
19》● **fs!yumruk-at** - Yumruk Atar gif. 
20》● **fs!koş** - Koşarsınız gif.
21》● **fs!herkesebendençay** - Herkese Çay Verir gif.
22》● **fs!söv** - İstediginiz Kişiye Söverim Bence Yapma.
23》● **fs!nahçek** - İstediğiniz Kişiye Nah Çekersiniz.
24》● **fs!kullanıcıbilgim** - kbilgim Komutu kullanan kişi hakkında bilgi.
25》● **fs!sunucubilgi** Sunucu hakkında bilgi verir.
26》● **fs!nsfw** - +18 NSFW - Sapik Resimleri Gösteririr.
27》● **fs!hesapla** - Hesap Makinesi Belirtilen İşlemi yapar.
28》● **fs!yaz** - İstediğiniz şeyi bota yazdırır. 
29》● **fs!sor** - Bota Soru Sora Bilirsiniz. 
30》● **fs!mcskin** - Minecrafttaki Skininizi Gösterir. 
31》● **fs!mcavatar** - Minecraft Kafanızı Gösterir.
32》● **fs!avatarım** - Profil Resminizi Gösterir.   
33》● **fs!servericon** - Serverinizin Resminizi Gösterir.
**Flamess Botun Sahibi Owner: <@398949644232687628> | Developer: <@428651826913738763>**
 `)
    .setColor("BLACK")
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
