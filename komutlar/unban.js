const  Discord  =  gerektirir ( ' discord.js ' );
const  client  =  yeni  Discord.Client ();

ihracat . run  = ( istemci , mesaj , args ) => {

  eğer ( ! mesaj . guild ) {
  const  ozelmesajuyari  =  yeni  Discord.RichEmbed ()
  . setColor ( 0xFF0000 )
  . setTimestamp ()
  . setAuthor ( mesaj . yazar . kullanıcı adı , mesaj . yazar . avatarURL )
  . addField ( ' : uyarı: uyarı: uyarı: ' , ' unban ' komutu özel mesajlarda kullanamazsın. ' )
  dönüş  mesajı . yazar . gönder (ozelmesajuyari); }
  guild =  mesajına izin ver . lonca
  let nedeni =  args . dilim ( 1 ). katıl ( '  ' );
  istemci . unbanReason  = neden;
  istemci . unbanAuth  =  mesaj . yazar ;
  kullanıcıya izin ver = args [ 0 ];
  modlog =  guild izin ver . kanallar . bul ( ' isim ' , ' ceza-takip-listesi ' );
  eğer ( ! modlog) dönüş  mesajı . cevap ( ' ceza-takip-listesi' kanalını bulamıyorum. ' );
  eğer ( sebep . uzunluk  <  1 ) dönüş  mesajı . cevap vermek ( ' Banucu sebebini yazmalısın. ' );
  eğer ( ! kullanıcı) dönüş  mesajı . Cevap ( ' Banı kaldırılacaksınız ID Yazın yazmalısın. ' ). catch ( konsol . hatası );
  mesajı . lonca . unban (kullanıcı);

  const  embed  =  yeni  Discord.RichEmbed ()
    . setColor ( 0x00AE86 )
    . setTimestamp ()
    . AddField ( ' Eylem: ' , ' Ban kaldırma ' )
    . addField ( ' Kullanıcı: ' , ` $ { user . kullanıcı adı } # $ { user . discriminator } ( $ { user . id } ) ` )
    . addField ( ' Yetkili: ' , ` $ { message . yazar . kullanıcı adı } # $ { message . yazar . discriminator } ` )
    . addField ( ' Sebep ' , sebep);
   lonca geri dön . kanallar . olsun ( modlog . id ). gönder (göm);
};

ihracat . conf  = {
  etkin :  true ,
  guildOnly :  true ,
  takma adlar : [],
  permLevel :  2
};

ihracat . yardım  = {
  isim :  ' unban ' ,
  description :  ' İstediğiniz insanlar banını kaldırır. ' ,
  kullanımı :  ' unban [ortak] [sebep] '
};
