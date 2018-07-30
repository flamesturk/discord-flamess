const Discord = require('discord.js');

const cevaplar = [
    "evet",
    "hmm .. hayır",
    "gibi gibi",
    "anlamadım knk?",
    "bu soru mu ?",
    "belki",
    "olabilir",
    "tabi tabi :D ",
    "imkansız"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Doğru Kullanım**: fs!soru <soru>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sor', 
  description: 'Sihirli Sor sorularınızı cevaplar',
  usage: 'sor <soru>'
};
