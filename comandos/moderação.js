const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {

  let MainHelpEmbed = new Discord.RichEmbed()
  .setAuthor("Documentação da Kary", bot.user.displayAvatarURL)
  .setDescription("Sou a Kary e Pretendo lhe Ajudar com Tudo que for Presciso! Aqui tem Algumas Informações:")
  .setColor("#00ffff")
  .addField("Comandos de Moderação", "`!ban (dá ban em um membro do servidor), \n!kick (expulsa um membro do servidor), !clear (limpa o chat), \n!anunciar (faz um anuncio)`")
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
  name: "moderação",
  aliases: ["moderação"]
}