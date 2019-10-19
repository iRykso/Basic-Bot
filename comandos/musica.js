const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {

  let MainHelpEmbed = new Discord.RichEmbed()
  .setAuthor("Documentação da Kary", bot.user.displayAvatarURL)
  .setDescription("Sou a Kary e Pretendo lhe Ajudar com Tudo que for Presciso! Aqui tem Algumas Informações:")
  .setColor("#00ffff")
  .addField("Comandos de Musica", "`!play [nome/link] (toca a musica citada), \n!skip (pula para proxima musica), !leave (sai do canal de voz), \n!join (entra no canal de voz), \n!np (consulta a musica que está tocando), \n!playlist (consulta as musicas na playlist),`")
  //.addField("Comandos de Diversão", "`$docs fun` - `Exemplos: $8ball, $concordar`")
  .addField("Importante:", "- `Os comandos de moderação só funcionam com os administradores`\n- `Caso Encontre Erros, Entre em Contato com Klyn, o mongol#2911`")
  .setTimestamp()
  .setFooter("Criador Klyn")

  try{
    await message.member.send(MainHelpEmbed).then(msg => msg.delete(600000))
  }catch(e){
    return message.channel.send("Suas `DMs` estão Desativadas!").then(msg => msg.delete(5000))
  }

}

module.exports.config = {
  name: "musica",
  aliases: ["musica"]
}