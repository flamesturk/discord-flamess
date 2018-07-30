const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime El Hareketi Çekeceğimi Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana El Hareketi Çekti!**')
	.setImage(`http://78.media.tumblr.com/tumblr_m2jivqzZXG1ro330po1_500.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nahçek',
  description: 'İstediğiniz Kişiye Nah Çekersiniz.',
  usage: 'nahçek'
};
