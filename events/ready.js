const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const snekfetch = require('snekfetch');
const api = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1NDIzMTYzMDQwNTA0MjE3NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTE2Mjc0MTQ1fQ.2H9LjNjH6WFp5LmswfXAYSDsHQn2JSPPgbgf1WjSi_c';

var prefix = ayarlar.prefix;

module.exports = client => {
    snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
  .set('Authorization', api)
  .send({ server_count: client.guilds.size })
  .then(() => console.log('Updated discordbots.org stats.'))
console.log('>>Oynuyor kısmı başarıyla güncellendi.');
console.log('Bot hazır ve giriş yaptı.');
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);

    var Games = [

        "fs!yardım 》 fs!davet 《 Sunucunuza Davet etmek için.",
        "Bot Davet Linki 》 fs!davet 《 fs!yardım",
        " 》 fs!davet 《 fs!yardım",
        "Bot Davet》 fs!davet 《 fs!yardım",
        "Bot Davet Linki 》 fs!davet 《 fs!yardım",
        "》Discordumuz : https://discord.gg/Ymx5sJP 《",
        "》 fs!davet | fs!yardım 《",

        `${prefix}yardım | ${client.guilds.size} sunucuda | fs!davet`
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+2)+0);

        client.user.setGame(Games[random], "https://www.twitch.tv/hotbrosflamess");
        }, 2 * 5000);

};
