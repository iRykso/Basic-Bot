module.exports = async bot => {
    console.log('Bot iniciado com ' + bot.users.size + ' usuários, em ' + bot.channels.size + ' canais de ' + bot.guilds.size + ' servidores.');
	
	
    const sleep = time => new Promise(resolve => {
        setTimeout(resolve, time)
    })
    var i;
    console.log("online")
                                                                                                        
                                    
    for (i=0; i<10;){
    bot.user.setPresence({ game: { name: `${bot.users.size} usuários `, url: "https://www.twitch.tv/mrpowergamerbr", type: 3} });
        await sleep(10000)
        bot.user.setPresence({ game: { name: "Duvidas (!help)", type: 2 } });
    await sleep(10000)
    bot.user.setPresence({ game: { name: `Otarios digitar comandos`, url: "https://www.twitch.tv/mrpowergamerbr", type: 3} });
    await sleep(10000)  
    //0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo

    }
}