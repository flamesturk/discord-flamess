const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('. setTitle ( ' ● 𝐅𝐥𝐚𝐦𝐞𝐬𝐬-𝐘𝐚𝐫𝐝ı𝐦-𝐌𝐞𝐧𝐮̈𝐬𝐮̈ ● ' )
	. addField ( ' ● 𝐘𝐞𝐭𝐤𝐢𝐥𝐢-𝐊𝐨𝐦𝐮𝐭𝐥𝐚𝐫ı ●: ' , ` ● ** fs! ping ** - Botun Pingini Gösterir.      
 ● ** fs! Ban ** - İstediginiz Kişiyi Banlar.     
● ** fs! Unban ** - İstediginiz Kişinin Banını Kaldırır.    
● ** fs! Kick ** - İstediginiz Kişiyi Kickler.  
● ** fs! ** - İstediginiz Kişiyi Uyarır.          
● ** fs! Temizle ** - Sohbeti Temizler.          
● ** fs! Yardım ** - fs! Y Yardım Menüsünü Gösterir. 
● ** fs! Davet ** - Botun Davet Linkini Atar.
● ** fs! Botsunucu ** - Botun Sunucusunun Daveti Linkini Atar Gelmeyi Unutmayın. ` )
. addField ( ' ● 𝐄𝐠𝐥𝐞𝐧𝐜𝐞-𝐊𝐨𝐦𝐮𝐭𝐥𝐚𝐫ı ●: ' , ` ● ** fs! stresçarkı ** - Sizin için bir stres çarkı çevirir.
● ** fs! Emojiyazı ** - Mesajınızı emoji haline getirdiniz.
● ** fs! Sigaraiç ** - Bot Size Sigara İçirir. 
● ** fs! Söv ** - İstediginiz Kişiye Söverim Bence Yapma.
● ** fs! Nahçek ** - İstediğiniz Kişiye Nah Çekersiniz.
● ** fs! Kullanıcıbilgim ** - kbilgim Komutu kullanan kişi hakkında bilgi.
● ** fs! Serverubilgi ** Sunucu hakkında bilgi verir.
● ** fs! Nsfw ** - +18 NSFW - Sapık Resimleri Gösteriri.
● ** fs! Hesapla ** - Hesap Makinesi Belirtilen İşlemi yapar.
● ** fs! Yaz ** - İstediğiniz şey bota yapılmıştır. 
● ** fs! Sor ** - Bota Soru Sora Bilirsiniz. 
● ** fs! Avatarım ** - Profil Resminizi Gösterir.   
● ** fs! Servericon ** - Serverinizin Resminizi Gösterir.
** Flamess Botun Sahibi Sahibi: <@ 398949644232687628> | Geliştirici: <@ 428651826913738763> **
 ` )
    . setColor ( " BLACK " )
	. setFooter ( ' -Flamess Discord Yardım Menüsü - Discord Adresimiz: https://discord.gg/Ymx5sJP- ' )');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['öy', 'öyardım', 'özel', 'öinvite'],
  permLevel: 0
};

exports.help = {
  name: 'öyardım',
  description: 'Özelden Yardım Menüsünü Gösterir. .',
  usage: 'öyardım'
};
