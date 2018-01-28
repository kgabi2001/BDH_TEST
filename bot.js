const Discord = require("discord.js");

const TOKEN = "NDA2NTUyNzE3NDM2Mzg3MzI4.DU0nPA.z_TJn7xPXdHHIlWJ0ziXoXPBs6w";

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("ready");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!help") {
        message.author.sendMessage("help");
    }
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

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!ash") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Ash");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!atlas") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Atlas");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!banshee") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Banshee");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!chorma") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Chroma");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!ember") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Ember");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!equinox") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Equinox");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!excalibur") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Excalibur");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!frost") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Frost");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!harrow") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Harrow");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!hydroid") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Hydroid");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!inaros") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Inaros");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!ivara") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Ivara");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!limbo") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Limbo");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!loki") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Loki");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!mag") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Mag");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!mirage") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Mirage");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!nezha") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Nezha");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!nidus") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Nidus");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!nova") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Nova");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!nyx") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Nyx");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!oberon") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Oberon");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!octavia") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Octavia");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!rhino") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Rhino");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!saryn") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Saryn");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!titania") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Titania");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!trinity") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Trinity");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!valkyr") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Valkyr");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!vauban") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Vauban");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!wukong") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Wukong");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!zephyr") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Zephyr");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!ashprime") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Ash_Prime");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!bansheeprime") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Banshee_Prime");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!emberprime") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Ember_Prime");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!excaliburprime") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Excalibur_Prime");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!frostprime") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Frost_Prime");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!lokiprime") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Loki_Prime");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!magprime") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Mag_Prime");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!novaprime") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Nova_Prime");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!nyxprime") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Nyx_Prime");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!rhinoprime") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Rhino_Prime");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!sarynprime") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Saryn_Prime");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!trinityprime") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Trinity_Prime");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!valkyrprime") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Valkyr_Prime");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!vaubanprime") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Vauban_Prime");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content == "!voltprime") {
        message.channel.sendMessage("http://hu.warframe.wikia.com/wiki/Volt_Prime");
    }
});
bot.login(TOKEN);
