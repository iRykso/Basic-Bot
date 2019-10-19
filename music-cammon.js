const queue = new Map();
const Discord = require('discord.js');
const config = require("./config.json");
const ytApi = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const youtube = new ytApi(config.playerSettings.googleApiToken);
const baseVolume = config.playerSettings.baseVolume;

exports.youtube = youtube;
exports.ytdl = ytdl;
exports.queue = queue;

exports.handleVideo = async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    const song = {
        id: video.id,
        title: Discord.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`,
        tumb: video.thumbnails.default.url,
        seg: video.duration.seconds,
        min: video.duration.minutes,
        horas: video.duration.hours,
        canal: video.channel.title
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 0.3,
            playing: true
        };
        queue.set(msg.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
            queue.delete(msg.guild.id);
            return msg.channel.send(`Não foi possivel entra no canal de voz (${error})`);
        }
    } else {
        serverQueue.songs.push(song);
        if (playlist) return undefined;
        else return msg.channel.send(`**${song.title}** foi adicionado a playlist!`);
    }
    return undefined;
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

const dispatcher = serverQueue.connection.playStream(ytdl(song.url, {filter: 'audioonly'}))
        .on('end', reason => {
            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
            else console.log(reason);
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.error(error));
    serverQueue.connection.player.opusEncoder.setPLP(0.02);
    dispatcher.setVolumeLogarithmic(serverQueue.volume);

    serverQueue.textChannel.send(`Tocando agora: **${song.title}**`);
    let link = `img.youtube.com/vi/${song.id}}/maxresdefault.jpg`;
    let temp = `${(song.horas < 10 ? "0" + song.horas : song.horas) + ":" + (song.min < 10 ? "0" + song.min : song.min) + ":" + (song.seg < 10 ? "0" + song.seg : song.seg)}`
      let embed = new Discord.RichEmbed()
              
.setAuthor("Tocando Agora ♪")
 .setDescription(`[${song.title}](https://www.youtube.com/watch?v=${song.id})\n duração: ${temp}`)
 .setThumbnail(`https://img.youtube.com/vi/${song.id}/maxresdefault.jpg`)



 serverQueue.textChannel.send({embed});



}
