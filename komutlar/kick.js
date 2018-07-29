const Discord = require('discord.js');
exports.run = (client, msg, args) => {
  if (!msg.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xff7f00)
  .setTimestamp()
  .setAuthor(msg.author.username, msg.author.avatarURL)
  .addField('**:warning: Uyarı :warning:', '`kick` adlı komutu özel mesajlarda kullanamazsın.**')
  return msg.author.sendEmbed(ozelmesajuyari); }
  let guild = msg.guild
  let reason = args.slice(1).join(' ');
  let user = msg.mentions.users.first();
  let modlog = guild.channels.find('name', 'mod-log');
  if (!modlog) return msg.reply('`** mod-log Kanalını Bulamıyom. Oluşturman Lazım !**');
  if (reason.length < 1) return msg.reply('**Bu Kişiyi Neden Atıyım. Sebebi Ne**');
  if (msg.mentions.users.size < 1) return msg.reply('**Kimi Atayım Söyle?**').catch(console.error);

  if (!msg.guild.member(user).kickable) return msg.reply('**Yetkilileri sunucudan atamam xd**.');
  msg.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0xff7f00)
    .setTimestamp()
	.setAuthor(msg.author.username, msg.author.avatarURL)
    .addField('İş:', 'Sunucudan atma')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${msg.author.username}#${msg.author.discriminator}`)
    .addField('Sebepi', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};
