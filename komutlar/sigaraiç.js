const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ` **Agaa Beeğğ Sıkıntı Ne Yakğ Yak!**`)
    .setColor(3447003)
    .setDescription('')
  .setImage(`https://images-ext-2.discordapp.net/external/0KlG_YOVx3HS5hxVpITZ4hYmtj-84d__YdVgfqzcSiQ/https/media.giphy.com/media/Josf4Dji2FyHS/giphy.gif?width=400&height=225`)
    return message.channel.sendEmbed(sunucubilgi);
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sigaraiç', 'smile'],
  permLevel: 0
};

exports.help = {
  name: 'cigara',
  description: 'cigara içersiniz.',
  usage: 'cigara'
};
