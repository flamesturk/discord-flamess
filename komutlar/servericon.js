const  Discord  =  gerektirir ( ' discord.js ' );


ihracat . run  =  işlev ( istemci , mesaj ) {

    const  embed  =  yeni  Discord.RichEmbed ()
        . setDescription ( " ** SUNUCU ICONU ** " )
        . setImage ( mesaj . guild . iconURL )

    mesajı . Kanal . gönder (göm);

};

ihracat . conf  = {
  etkin :  true ,
  guildOnly :  true ,
  takma adlar : [],
  permLevel :  0 
};

ihracat . yardım  = {
  adı :  ' servericon ' ,
  açıklama :  ' Serverin iconunu Gösterir ' ,
  kullanımı :  ' servericon '
};
