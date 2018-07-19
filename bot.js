const Discord = require("discord.js");

const TOKEN = "NDY5MjQyODk1OTg0MjMwNDEw.DjJX0A.8uG74_Gyr3tYEx6cY93rYO0oxSA";

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("ready");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!KT") {
        message.channel.sendMessage("https://www.twitch.tv/kgabor2001");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!volt") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Volt");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!nekros") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Nekros");
    }
});

bot.login(TOKEN);
