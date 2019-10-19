const util = require('../util/util.js')

module.exports = async (client, member) => {

try {
    //Mandar DM para a pessoa que entrou
    member.send({embed: {
        color: util.getRandonColor(),
        author: {
            name: client.username,
            icon_url: client.user.avatarURL
        },
        title: "Bem vindo ao servidor :)",
        description: "Seja bem-vindo(a) " + member.user.username + " ao nosso Servidor! \nDigite !help para ver a lista de comandos =D",
        timestamp: new Date()
    }});

} catch (err) {
console.log(err)
}
}