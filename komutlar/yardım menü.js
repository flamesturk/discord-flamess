const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {

  let pages = [

'Müzik Komutları\n\n &oynat <Müzik Adı> • Seçtiğiniz Müziği Oynatır.\n&geç • Oynatılan Şarkıyı Geçer.\n &kuyruk • Şarkı Kuyruğunun Listesini Gösterir.\n &kapat • Botun Kuyruğunu Boşaltır.(Seçilen Şarkıları Listeden Kaldırıp Ses Kanalından Çıkar.) \n&durdur • Oynatılan Şarkıyı Durdurur. \n &devamet • Durdurulan Şarkıyı Devam Ettirir.',
  'Diğer Komutlar \n \n \n&ping • Pingi gösterir \n '];

  // Sayfalar
  let page = 1; // Sayfa 1

  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter(`Sayfa ${page} / ${pages.length}`, "")
  .setDescription(pages[page-1])
  .setAuthor("Flamess", "")
message.channel.send(embed).then(msg => {

    msg.react('arrow_left').then(r => {
      msg.react('arrow_right')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === 'arrow_left' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === 'arrow_right' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['y','yardim'],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir.',
usage: 'yardım2'
};
