const Discord = require('discord.js')

exports.run = (client, message) => {
	const embed = new Discord.RichEmbed()
	.setTitle('Flamess - Yardım-Menüsü')
	.addField(' Komutlar: ', ` **fs!ping** - Botun Pingini Gösterir.      
**fs!ban** - İstediginiz Kişiyi Banlar.     
**fs!unban** - İstediginiz Kişinin Banını Kaldırır.    
**fs!kick** - İstediginiz Kişiyi Kickler.  
**fs!uyar** - İstediginiz Kişiyi Uyarır.          
**fs!temizle** - Sohbeti Temizler.       
**fs!avatarım** - Profil Resminizi Gösterir.   
**fs!servericon** - Serverinizin Resminizi Gösterir.  
**fs!sor** - Bota Soru Sora Bilirsiniz. 
**fs!yaz** - İstediğiniz şeyi bota yazdırır.
**fs!emojiyazı** - Mesajınızı emoji haline getir
**fs!stresçarkı** - Sizin için bir stres çarkı çevirir. 
**fs!hesapla** - Hesap Makinesi Belirtilen İşlemi yapar. 
**fs!yardım** - fs!y Yardım Menüsünü Gösterir. 
**fs!nsfw** - +18 NSFW - Sapik Resimleri Gösteriri.
**fs!botdavet** - Botu Size Davet Linkini Atar
**fs!botsunucu** - Bot Sunucunun Davet Linkini Atar
**Flamess Botun Sahibi Owner: <@398949644232687628> | Developer: <@428651826913738763>**`)
    .setColor("BLACK")
	.setFooter('Flamess Discord Yardım Menüsü - Discord Adresimiz : https://discord.gg/Ymx5sJP ')
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
