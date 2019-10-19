const Discord = require('discord.js');
const weather = require('weather-js'); 

module.exports.run = (client, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('**Por favor, insira um local!**')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Tempo em ${current.observationpoint}`)
          .setThumbnail("https://images-ext-1.discordapp.net/external/qeNV9e88SRvs33t82y4JVytFFIMR16l4p3znnThIP-o/https/i.imgur.com/qJbDQNI.gif")
          .setColor(0x00AE86)
          .addField('Fuso horário',`UTC${location.timezone}`, true)
          .addField('tipo de grau',location.degreetype, true)
          .addField('Temperatura',`${current.temperature} graus`, true)
          .addField('Parece', `${current.feelslike} graus`, true)
          .addField('Ventos',current.winddisplay, true)
          .addField('Humidade', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}

    module.exports.help = {
        name: "clima"
    }