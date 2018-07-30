const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
 if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.sendCode('asciidoc', `= Komut Listesi =\n\n[Komut hakkında bilgi için ${ayarlar.prefix}yardım <komut adı>]\n\n${client.commands.map(c => `${ayarlar.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};
	const embed = new Discord.RichEmbed()
	.setTitle('Flamess - Yardım-Menüsü')
	.addField(' Komutlar: ', ` **fs!ping** - Botun Pingini Gösterir.      
**fs!ban** - İstediginiz Kişiyi Banlar.     
**fs!unban** - İstediginiz Kişinin Banını Kaldırır.    
**fs!kick** - İstediginiz Kişiyi Kickler.  
**fs!uyar** - İstediginiz Kişiyi Uyarır.          
**fs!temizle** - Sohbeti Temizler.       
**fs!avatarım** - Profil Resminizi Gösterir.   
**fs!servericon** - Serverinizin Resminizi Gösterir.  
**fs!sor** - Bota Soru Sora Bilirsiniz. 
**fs!yaz** - İstediğiniz şeyi bota yazdırır.
**fs!emojiyazı** - Mesajınızı emoji haline getir.
**fs!stresçarkı** - Sizin için bir stres çarkı çevirir. 
**fs!hesapla** - Hesap Makinesi Belirtilen İşlemi yapar. 
**fs!yardım** - fs!y Yardım Menüsünü Gösterir. 
**fs!nsfw** - +18 NSFW - Sapik Resimleri Gösteriri.
**fs!botdavet** - Botu Size Davet Linkini Atar.
**fs!botsunucu** - Bot Sunucunun Davet Linkini Atar.
**Flamess Botun Sahibi Owner: <@398949644232687628> | Developer: <@428651826913738763>**`)
    .setColor("BLACK")
	.setFooter('Flamess Discord Yardım Menüsü - Discord Adresimiz : https://discord.gg/Ymx5sJP ')
    message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'yardim','y','yardım'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'yardım',
  usage: 'yardım'
};
