const Discord = require('discord.js')

exports.run = (client, message) => {
	const embed = new Discord.RichEmbed()
	.setTitle('Yardım Menüsü')
	.addField('Komutlar', ` kullanım > fs!ping - Botun Pingini Gösteri
kullanım > fs!ban - Kişiyi Banlar
kullanım > fs!kick - Kişiyi Kickler
kullanım > fs!temizle - Sohbeti Temizler
kullanım > fs!yardım - Yardım Menüsünü Gösterir
kullanım > fs!dmduyuru - Bot Herkese Özelden Mesaj Atar. **Bu Komut Sadece <@398949644232687628> İçindir**`)
    .setColor("RANDOM")
	.setFooter('Flamess Yardım Menüsü Discord Adresimiz : https://discord.gg/Ymx5sJP ')
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
