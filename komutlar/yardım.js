const Discord = require('discord.js')

exports.run = (client, message) => {
	const embed = new Discord.RichEmbed()
	.setTitle('Yardım-Menüsü')
	.addField('Komutlar: ', ` ▶️  **fs!ping - Botun Pingini Gösterir.**      ✅

▶️  **fs!ban - İstediginiz Kişiyi Banlar**.      ✅

▶️  **fs!unban - İstediginiz Kişinin Banını Kaldırır**    ✅

▶️  **fs!kick - İstediginiz Kişiyi Kickler**           ✅

▶️  **fs!temizle - Sohbeti Temizler**           ✅

▶️  **fs!avatarım - Profil Resminizi Gösterir.**   ✅

▶️  **fs!servericon - Serverinizin Resminizi Gösterir.**   ✅

▶️  **fs!sor - Bota Soru Sora Bilirsiniz.** ✅

▶️  **fs!yaz - İstediğiniz şeyi bota yazdırır.** ✅

▶️  **fs!hesapla - Hesap Makinesi Belirtilen İşlemi yapar.** ✅

▶️  **fs!yardım - Yardım Menüsünü Gösterir.** ✅

▶️  **Yeni Komutlar Gelicektir,İstek Komutlarınızı <@398949644232687628>e Bildiriniz. ✅**`) 
    .setColor("RANDOM")
	.setFooter('Flamess Discord Yardım Menüsü - Discord Adresimiz : https://discord.gg/Ymx5sJP ')
    message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'yardım',
  usage: 'yardım'
};
