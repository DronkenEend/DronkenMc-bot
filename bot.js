const botconfig = require("./config.json")
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is er klaar voor!`)
  bot.user.setActivity("DronkenMc")
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0]
  let args = messageArray.slice(1);



  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatar;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Informatie")
    .setColor("#0041f7")
    .addField("Bot naam", bot.user.username)
    .addField("Gemaakt op", bot.user.createdAt);


    return message.channel.send(botembed);
  }
  if(cmd === `${prefix}serverinfo`) {

    let sicon = message.guild.displayAvatarURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Informatie")
    .setColor("#00f75e")
    .addField("Server naam", message.guild.name)
    .addField("Gemaakt op", message.guild.createdAt)
    .addField("Jij bent gejoined op", message.member.joinedAt)
    .addField("Totale spelers", message.guild.memberCount);




    return message.channel.send(serverembed)
  }
  if(cmd === `${prefix}mop`) {
  message.channel.send(`Ik ken een goede mop! Twee tieten in een envelop!`)
  }
if(cmd === `${prefix}grap`) {
  message.channel.send(`Ik ken een goede mop! Twee tieten in een envelop!`)
  }
if(cmd === `${prefix}grapje`) {
  message.channel.send(`Ik ken een goede mop! Twee tieten in een envelop!`)
  }
if(cmd === `${prefix}lol`) {
  message.channel.send(`Ik ken een goede mop! Twee tieten in een envelop!`)
  }
  if(cmd === `${prefix}hoi`){
    message.channel.send(`Hoi ${message.author}, zoek vrienden`)
  }
  if(cmd === `${prefix}hallo`){
    message.channel.send(`Hallo ${message.author}, zoek vrienden`)
  }
  if(cmd === `${prefix}hai`){
    message.channel.send(`Hai ${message.author}, zoek vrienden`)
  }
});

bot.login(botconfig.token);
