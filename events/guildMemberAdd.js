const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hey Dostum **' + username + '** Sunucuya Hoşgeldin beni eklemek icin fs!davet **');
};
