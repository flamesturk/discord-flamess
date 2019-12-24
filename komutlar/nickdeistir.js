const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;

  if(!message.member.roles.has("Rolün Id ' si")) return message.channel.send(`Bu komutu kullanabilmek için \`Rolün İsmi\` yetkisine sahip olmasınız.`);
  let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ")
  if (!member) return message.channel.send('Bir üye etiketlemelisin kanka')
  if (!isim) return message.channel.send('Bir isim yazmalısın kanka')
  member.setNickname(`ミ ${isim}`)
  const embed = new Discord.RichEmbed()
  .addField(`• Kullanıcının takma adı değiştirildi.`, `Değiştirilen kullanıcı : ${member.user} \n Düzenlenmiş kullanıcı adı : \`ミ ${isim}\``)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`)  
  .setThumbnail(client.user.avatarURL)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['nick'],
  permLevel: 0
}
exports.help = {
  name: 'nick',
  description: "Birinin nickini değiştirir.",
  usage: 'nick <yeni nick>'
}
