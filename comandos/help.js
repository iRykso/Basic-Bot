const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {

  let MainHelpEmbed = new Discord.RichEmbed()
  .setAuthor("Documentação da Kary", bot.user.displayAvatarURL)
  .setDescription("Sou a Kary e Pretendo lhe Ajudar com Tudo que for Presciso! Aqui tem Algumas Informações:")
  .setColor("#00ffff")
  .addField("Comandos de Moderação", "`!Moderação` - `Exemplos: !ban, !kick,`")
  .addField("Comandos de Musica", "`!musica` - `Exemplos: !play, !skip, !leave,`")
  .addField("Comandos utilitarios", "`!utilitarios` - `Exemplos: !serverinfo, !userinfo, !ping`")
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
  name: "help",
  aliases: ["help"]
}