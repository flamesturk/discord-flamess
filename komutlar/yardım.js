const Discord = require('discord.js')

exports.run = (client, message) => {
	const embed = new Discord.RichEmbed()
	.setTitle('Yardım Menüsü')
	.addField('Komutlar', ` ❮𝐅𝐒❯  fs!ping - Botun Pingini Gösteri
❮𝐅𝐒❯  fs!ban - Kişiyi Banlar
❮𝐅𝐒❯ fs!kick - Kişiyi Kickler
❮𝐅𝐒❯ fs!temizle - Sohbeti Temizler
❮𝐅𝐒❯ fs!yardım - Yardım Menüsünü Gösterir
❮𝐅𝐒❯ fs!dmduyuru - Bot Herkese Özelden Mesaj Atar. **Bu Komut Sadece <@398949644232687628> İçindir**`)
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
