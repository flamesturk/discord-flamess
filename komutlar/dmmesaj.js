const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
if (message.author.id !=ayarlar.sahip) { return; }
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birşey Yazmalısınız');
  message.delete();
      const mesajat = new Discord.RichEmbed()
      .setColor(0xff7f00)
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dmduyuruyap'],
  permLevel: 4
};

exports.help = {
  name: 'dmduyuruyap',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'dmduyuru [duyurmak istediğiniz şey]'
};
