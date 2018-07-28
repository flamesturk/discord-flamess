const Discord = require('discord.js')

exports.run = (client, message) => {
	const embed = new Discord.RichEmbed()
	.setTitle('Yardım Menüsü')
	.addField('Komutlar', `* fs!ping - Botun Pingini Gösterir
* fs!ban - Kişiyi Banlar
* fs!kick - Kişiyi Kickler
* fs!temizle - Sohbeti Temizler
* fs!yardım - Yardım Menüsünü Gösterir
* fs!dmduyuru - Bot Herkese Özelden Mesaj Atar. **Bu Komut Sadece <@398949644232687628> ve <@428651826913738763> İçindir`)
    .setColor("RANDOM")
	.setFooter('Flammes Yardım Menüsü')
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
