const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message,) => {
	const embed = new Discord.RichEmbed()
	.setTitle('● 𝐅𝐥𝐚𝐦𝐞𝐬𝐬-𝐘𝐚𝐫𝐝ı𝐦-𝐌𝐞𝐧𝐮̈𝐬𝐮̈ ● ')
	.addField('● 𝐘𝐞𝐭𝐤𝐢𝐥𝐢-𝐊𝐨𝐦𝐮𝐭𝐥𝐚𝐫ı ●: ', ` ● **fs!ping** - Botun Pingini Gösterir.      
 ● **fs!ban** - İstediginiz Kişiyi Banlar.     
● **fs!unban** - İstediginiz Kişinin Banını Kaldırır.    
● **fs!kick** - İstediginiz Kişiyi Kickler.  
● **fs!uyar** - İstediğiginiz Kişiyi Uyarırsınız.
● **fs!rol-ver** - İstediğiniz kişiyi istediğiniz rolü verir.         
● **fs!temizle** - Sohbeti Temizler.          
● **fs!yardım** - fs!y Yardım Menüsünü Gösterir. 
● **fs!bilgi** - Bot ile ilgili bilgi verir.
● **fs!yapımcım** - Botun Yapımcısını Gösterir.
● **fs!davet** - Botun Davet Linkini Atar.
● **fs!botsunucu** - Botun Sunucusunun Davet Linkini Atar Gelmeyi Unutmayın.`) 	
.addField(' ● 𝐄𝐠𝐥𝐞𝐧𝐜𝐞-𝐊𝐨𝐦𝐮𝐭𝐥𝐚𝐫ı ● : ', ` ●**fs!stresçarkı** - Sizin için bir stres çarkı çevirir.
● **fs!emojiyazı** - Mesajınızı emoji haline getirir.
● **fs!sigaraiç** - Bot Size Sigara İçirir. 
● **fs!söv** - İstediginiz Kişiye Söverim Bence Yapma.
● **fs!nahçek** - İstediğiniz Kişiye Nah Çekersiniz.
● **fs!kullanıcıbilgim** - kbilgim Komutu kullanan kişi hakkında bilgi.
● **fs!sunucubilgi** Sunucu hakkında bilgi verir.
● **fs!nsfw** - +18 NSFW - Sapik Resimleri Gösteririr.
● **fs!hesapla** - Hesap Makinesi Belirtilen İşlemi yapar.
● **fs!yaz** - İstediğiniz şeyi bota yazdırır. 
● **fs!sor** - Bota Soru Sora Bilirsiniz. 
● **fs!avatarım** - Profil Resminizi Gösterir.   
● **fs!servericon** - Serverinizin Resminizi Gösterir.
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
