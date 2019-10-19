const request = require('request');
const util = require('../util/util.js');

exports.run = async (client, message) => {
    let url = 'https://api.hgbrasil.com/finance?format=json&key=a67d9b60';
    request(url, (err, response, body) => {
        if(err) console.log(err);
        else {
            let data = JSON.parse(body);
            message.channel.send({embed: {
                color: util.getRandonColor(),
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "Valor atual do euro:",
                description: `euro: ${data.results.currencies.EUR.buy.toString().substring(0, 4)}`,
                thumbnail: {
                    url: "https://i.imgur.com/GoigfPJ.png"
                },
                footer: {
                    icon_url: message.author.avatarURL,
                    text: message.author.username,
                },
                timestamp: new Date()
            }});
        }
    });
}

module.exports.help = {
    name: "euro"
}