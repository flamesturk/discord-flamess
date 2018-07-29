const Discord = require('discord.js')
exports.run = (client, msg, args) => {
 if(msg.channel.nsfw || msg.channel.type === 'dm'){
   let embed = new Discord.RichEmbed()
   .setColor(0xff7f00)
   .setImage(("https://cdn.boobbot.us/4k/4k"+ Math.floor(Math.random() * 1460)+".jpg"))
   msg.channel.send(embed)
}
 else{
       msg.channel.send({embed: {
color: Math.floor(Math.random() * (0xff7f00 + 2)),
description: ('Burasi `nsfw` Kanalı Değil. Lütfen `nsfw` Kanalında Deneyin')
 }})
 }
};
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'nsfw',
   description: 'NSFW bir resim gösterir.',
   usage: 'hd'
 };
