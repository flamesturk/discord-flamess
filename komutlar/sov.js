exports.run = async (client, msg, args) => {
  let kufur=[
    "Sen İstedin Paşam : Sana Küfür Etmiyorum Çünkü Cok eziksin Ez :P .",
    "Sen İstedin Paşam : annesinin amına koyayım orul orul orospu evladı",
    "Sen İstedin Paşam : senin ebenin amı gibi kaşları da kara zenci gibi sikerim",
    "Sen İstedin Paşam : seni anasının amında olimpiyat meşalesi yakıp 10 km kostuğumun cocuğu ",
    "Sen İstedin Paşam : senin ananın amına mancınıkla patates atayım",
    "Sen İstedin Paşam : senin dalağını öyle bi sikerim ki ömür boyu hıçkırırsın",
    "Sen İstedin Paşam : ananın amına bilardo topuyla rövaşata çekerim am dolması yarrak kafalı çin orospusu seni amına kodumun çin aslanı bilyesini gibtiğimin am düdüğü",
    "Sen İstedin Paşam : senin ananı düdüklü tencerenin arasına alıp öttüre öttüre sikerim ulan ben",
    "Sen İstedin Paşam : ananın amını keserim cebime koyarım sıkıldıkça sikerim",
    "Sen İstedin Paşam : ananın amına sınav yapar 2 milyon kişiyi sokarım",
    "Sen İstedin Paşam : amına barut döker sürtünmeyle yakarım orospu evladı seni",
    "Sen İstedin Paşam : seni bi sikerim bluetooh un hata verir kapsama alanın genişler.",
    "Sen İstedin Paşam : o tuşlara basan ufacık parmaklarının arasına sokar felç edene kadar siker o felç olan parmaklarını kesip organ mafyasına satarım elde ettigim gelirin bi kısmını görme engelliler vakfına bağışlar kalan kısmıda annenle çarçur eder babanın delirmesini sağlar ocağına incir ağacı diker ağacın gölgesinde teyzeni dallı budaklı sikerim senin",
    "Sen İstedin Paşam : küfür etmek günah olum sen ne yaptıysan artık sana kızmış birisi affettir kendini beni de günaha sokçak orospu kertenkelesi",
    "Sen İstedin Paşam : küfür ederdim ama anan çok yordu.",
    "Sen İstedin Paşam : öyle yan durup şekilli mekilli tişört giyme ananı götünden siker Erol Taş gibi kiraz ağacından kamçı yapar döverim",
    "Sen İstedin Paşam : senin götünü keser çorap lastiği yaparım.",
  ]
     let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign: Ya geçerli birini etiketle ya da sana sövmemi istiyosan kendini etiketle.')
}});
  if(member.id === "348097494548348940")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign:Yapımcım mı sakın haa. Görmiyim bidaha.')
}})
  if(member.id === "298815393437450241")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign:  Orda durucaksın oruspu evladı ananı bombalamadan kaçsın yunus'u etiketlemişsin`)
}})
  if(member.id === "405325417411510273")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Hoop! Orda durucan liseli, MyLikeFly'ı sövemezsin.`)
}})
  if(member.id === client.user.id){
    msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Beni mi kandırcan orospu çocuğu ?`)
}})
  }
  else{
  msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`${member} ${kufur[Math.floor(Math.random() * 16)]}.`)
}})
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
 };

exports.help = {
  name: 'söv',
  description: 'NSFW bir resim gösterir.',
  usage: 'söv'
 }
