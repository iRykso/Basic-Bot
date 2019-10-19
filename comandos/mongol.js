const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let clientping = new Date() - message.createdAt;

    message.channel.send(`${message.author}`)
    let pEmbed = new Discord.RichEmbed()
        .setTitle("Desenvolvedores:\nplayerkiller, mais conhecido como sola\nKlyn, mais conhecido como emo\nyReec, mais conhecido como tartaruga\nJauler, mais conhecido como tijolo")
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("BLACK")

        message.channel.send(pEmbed)
}

module.exports.help = {
    name: "mongol"
}