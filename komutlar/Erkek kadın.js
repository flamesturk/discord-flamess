Erkek 

const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;
  if (!message.member.roles.find('name', 'Komutu Kullanacak Rolün İsmi')) return message.channel.send('**Bu komutu kullanabilmek için: ``Komutu Kullanacak Rolün İsmi`` adlı role sahip olmalısın.**');
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply("**Kime Erkek Rolü Vermek İstersin?**");
  user.addRole('Verilecek Rol)
  user.removeRole('Kayıtsız Rolü')
const ky = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`${user}, **Başarıyla Erkek Rolü Verildi! **`)
        .setColor('#FF000')
        .setTimestamp()
        message.channel.send(ky)
        message.react(':thumbsup:')
} 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases:[], 
    permLevel: 0,
}
exports.help = {
    name: 'erkek',
    description: 'Log kanalını belirler.',
    usage: '&kanal <#kanal>'
}

}
exports.help = {
    name: 'kadın',
    description: 'Log kanalını belirler.',
    usage: '&kanal <#kanal>'
}
