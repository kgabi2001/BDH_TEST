const Discord = require("discord.js");

const TOKEN = "NDA2NTUyNzE3NDM2Mzg3MzI4.DU0nPA.z_TJn7xPXdHHIlWJ0ziXoXPBs6w";

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("ready");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!mesa") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Mesa");
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
