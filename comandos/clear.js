module.exports.run = async (bot, message, args) => {

    if(message.member.hasPermission("ADMINISTRATOR")) {
      let messagecount = parseInt(args[0]);
    
      if(isNaN(messagecount)) return message.channel.send(":x: " + "| Por favor, insira um valor numerico!");
    
      if(messagecount > 100){
        message.channel.send(":x: " + "| Desculpa, Voce só pode apagar 100 menssagens por vez!")
      }else if(messagecount < 2 ) {
        message.channel.send(":x: " + "| Desculpa, Voce só pode apagar 100 menssagens por vez!")
      } else {
    
      }{
        message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages, true));
      }
    } else {
      return message.reply(":x: " + "| Voce precisa de \"ADMINISTRATOR\" Permissão")
    }
    }
    
    module.exports.help = {
        name: "clear"
    }