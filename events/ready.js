const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
}
    var Games = [

        "fs!yardım 》 fs!davet 《 Davet etmek için",
        "Bot Davet Linki 》 ds!davet 《 fs!yardım",
        "》 Yep Yeni Özellikler Yakında Sizlerle! 《",
        "》 fs!davet | fs!yardım | fs!botdavet 《",


        `${prefix}yardım | ${client.guilds.size} sunucu | Yeni Komutlar Yakında`


    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setGame(Games[random], "https://www.twitch.tv/hotbrosflamess");
        }, 2 * 2500);

};
