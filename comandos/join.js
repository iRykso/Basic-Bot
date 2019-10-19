const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

if (message.member.voiceChannel) {
    message.member.voiceChannel.join()
      .then(connection => { // Connection is an instance of VoiceConnection
        message.reply('Boa, agora entrei no canal de voz!');
      })
      .catch(console.log);
  } else {
    message.reply(':heavy_multiplication_x: Primeiro você precisa entrar em u chat de voz!');
  }
}