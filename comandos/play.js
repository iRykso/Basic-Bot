const config = require("../config.json");
const commons = require("../music-cammon")
const youtube = commons.youtube;
const Discord = require('discord.js');

exports.run = async (client, message) => {
    const args = message.content.split(' ');
    const searchString = args.slice(1).join(' ');
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const vc = message.member.voiceChannel;
    if(!vc) return message.channel.send("Oops, me parece que voce não esta em canal de voz nenhum...");
    const permissions = vc.permissionsFor(message.client.user);
	if(!permissions.has('CONNECT')) return message.channel.send("Oops, não tenho permissao para conectar ao seu canal de voz...");
    if(!permissions.has('SPEAK')) return message.channel.send("Oops, não tenho permissao para falar em seu canal de voz...");
    if(url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
        const playlist = await youtube.getPlaylist(url);
        const videos = await playlist.getVideos();
        for (const video of Object.values(videos)) {
            const video2 = await yt.getVideoByID(video.id);
            await commons.handleVideo(video2, message, voiceChannel, true);
        }
        return message.channel.send(`A lista de reproducao **${playlist.title} ** foi adicionada a playlist atual.`);
    } else {
        try {
            var video = await youtube.getVideo(url);
        } catch (error) {
            try {
                var videos = await youtube.searchVideos(searchString, 10);
                let index = 0;
                message.channel.send(
                    new Discord.RichEmbed().setAuthor("Resultados da pesquisa:").setDescription(`${videos.map(video2 => `\`${++index}\` -** ${video2.title}**`).join('\n')}\n\nSelecione um valor de 1 a 10 correspondente a sua musica.`).setColor('RANDOM'));
                try {
                    var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
                        maxMatches: 1,
                        time: 10000,
                        errors: ['time']
                    });
                } catch (err) {
                    console.error(err);
                    return message.channel.send('Nenhum valor foi especificado, ou o valor não e valido, abortando');
                }
                const videoIndex = parseInt(response.first().content);
                var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
            } catch (err) {
                console.error(err);
                return message.channel.send('Minha busca não encontrou resultados');
            }
        }
        return commons.handleVideo(video, message, vc);
    }
}

exports.help = {
    name: "play"
}