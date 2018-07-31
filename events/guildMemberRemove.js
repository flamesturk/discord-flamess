const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Dostum **' + username + '** Sunucudan Neden Ayrıldın. Gidersen Sen Kaybedersin beni eklemek icin fs!davet **:');
};
