const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('**Bunun için gerekli iznin yok**');
	if (mesaj.length < 1) return message.reply('**Yazmam İçin Birşey Yazmalısın!**');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`${mesaj}`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kutuiciyaz', 'kutuici'],
  permLevel: 2
};

exports.help = {
  name: 'kutu',
  description: 'Kutu icinde yazarsınız.',
  usage: 'kutuiciyaz [Kutu icinde Yazılacak Şey]'
};
