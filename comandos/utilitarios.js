const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {

  let MainHelpEmbed = new Discord.RichEmbed()
  .setAuthor("Documentação da Kary", bot.user.displayAvatarURL)
  .setDescription("Sou a Kary e Pretendo lhe Ajudar com Tudo que for Presciso! Aqui tem Algumas Informações:")
  .setColor("#00ffff")
  .addField("Comandos utilitarios", "`!dolar (consulta o preço do dolar), !euro (consulta o preço do euro), !mongol (desenvolvedores do bot), !ping (consulta seu ping), \n!roleta (roleta russa), \n!sortear (sorteia um numero de 2 a 10), !votação (inicia uma votação), !userinfo [MENÇÃO] (informaçoes do usuario), \n!serverinfo [MENÇÃO] (informaçoes do servidor), !clima [estado] (consulta o clima do estado citado)`")
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
  name: "utilitarios",
  aliases: ["utilitarios"]
}