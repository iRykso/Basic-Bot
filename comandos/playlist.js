const commons = require("../music-cammon.js")
const queue = commons.queue;
const Discord = require('discord.js');

exports.run = async (client, message) => {
    const args = message.content.split(' ');
    const serverQueue = queue.get(message.guild.id);
    const vc = message.member.voiceChannel;
    if(!vc) return message.channel.send("Oops, me parece que voce não esta em canal de voz nenhum...");
    if (!serverQueue) return message.channel.send('Não tem nada tocando agora...');
    return message.channel.send(new Discord.RichEmbed().setAuthor("Playlist atual:").setDescription(`${serverQueue.songs.map(song => `**-** ${song.title} `).join('\n')}\n\n**Tocando agora:** ${serverQueue.songs[0].title}`).setColor('RANDOM'));
}

exports.help = {
    name: "playlist"
}