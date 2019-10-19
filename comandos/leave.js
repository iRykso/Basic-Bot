exports.run = (client, message, args, ops) => {

	if (!message.member.voiceChannel) return message.channel.send('Por favor, conecte a um canal de voz.');

	if (!message.guild.me.voiceChannel) return message.channel.send('Desculpe, mas o bot não está conectado á um canal de voz.');

	if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Desculpe, você não está em um canal de voz.');

	message.guild.me.voiceChannel.leave();

	message.channel.send('Saindo do Canal...');
}