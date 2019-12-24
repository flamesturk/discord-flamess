client.on("message", msg => {
var dm = client.channels.get("644214770421071873")
if(msg.channel.type === "dm") {
if(msg.author.id === client.user.id) return;
const botdm = new Discord.RichEmbed()
.setTitle(`${client.user.username} Dm`)
.setTimestamp()
.setColor("RED")
.setThumbnail(`${msg.author.avatarURL}`)
.addField("Gönderen", msg.author.tag)
.addField("Gönderen ID", msg.author.id)
.addField("Gönderilen Mesaj", msg.content)

dm.send(botdm)

}
if(msg.channel.bot) return;
});
