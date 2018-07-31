const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hey Dostum **' + username + '** Sunucuya Hoşgeldin benim sunucumada gelebilirsin https://discord.gg/Ymx5sJP beni eklemek icin fs!davet **');
};
