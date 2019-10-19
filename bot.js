const Discord = require('discord.js')
const Enmap = require("enmap");
const fs = require("fs");
const jimp = require(`jimp`)
const bot = new Discord.Client();
const Youtube = require("simple-youtube-api");
const ytdl = require('ytdl-core');
const commons = require("./music-cammon")
const youtube = commons.youtube;
const client = new Discord.Client();
const config = require("./config.json");

bot.config = config;
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    bot.on(eventName, event.bind(null, bot));
  });
});

bot.commands = new Enmap();

fs.readdir("./comandos/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./comandos/${file}`);
    let Name = file.split(".")[0];
    console.log(`carregando ${Name}`);
    bot.commands.set(Name, props);
  });
});


bot.login(config.token);