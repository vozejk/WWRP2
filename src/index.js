const Discord = require('discord.js');
const client = new Discord.Client();
const {MessageEmbed} = require('discord.js')

const memberCounter = require('./counters/member-counter');

client.once('ready', () => {
    console.log('🟢 WWRP BOT is now Ready! 🟢');
    client.user.setStatus('online');
    client.user.setActivity("🐺 WWRP | -help 🐺");
});

client.on('guildMemberAdd', guildMember =>{
  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '🍂 MEMBER');

  guildMember.roles.add(welcomeRole);
  guildMember.guild.channels.cache.get('906922398752866449').send(`📥 **<@${guildMember.user.id}>**`)
});
 
client.login('OTEwMDMyNzEwNDk4Njc2Nzc3.YZM8AQ.8OkNvy0g8TINy6gyeA-Y9YkzjaM')

const prefix = "-";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;
});

client.on("message", function(message){
    console.log(`${message.author.username} sent -> ${message}`);

});

  
client.on("message", message => {
  if (message.content === ("prefix")){
    message.reply('🐺 Můj prefix je: .');
  }});


client.on('message', message => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send(`🏓Latence je ${Date.now() - message.createdTimestamp}ms. API Latence je ${Math.round(client.ws.ping)}ms`);
  }});

 
  
  client.on('message', message => {
    if (message.content.startsWith(prefix + "neprosel")) {
      message.channel.send(`Zdravím, je mi líto ale neprošel si užívej a skus to príšte SDRP support @here`);
    }});

    client.on('message', message => {
      if (message.content.startsWith(prefix + "nefrakce")) {
        message.channel.send(`Zdravím je mi líto vám oznámit že **vaše frakce nebyla schválena.** SDRP support @here`);
      }});

      client.on('message', message => {
        if (message.content.startsWith(prefix + "ip")) {
          message.channel.send(`
IP: 173.249.38.59
TS3 : 173.249.38.59`);
        }});

      client.on('message', message => {
        if (message.content.startsWith(prefix + "help")) {
          message.channel.send(`
**__Potřebuješ s čímkoliv poradit?__**

> Pokud ano řiď se následujícími kroky! 🐌

> __1. Možnost__ 🔱
> Kontaktuj kohokoliv z našeho týmu nebo se ozvi v help-chat, pokud je problém soukromý pokračuj dále na 2-3. problém!

> __2. Možnost__ 🔱
> Je tvůj problém osobní nebo soukromý, pokud ano kontaktuj tvůrce projektu nebo spolutvůrce projektu!

> __3. Možnost__ 🔱
> Pokud se o problému nechceš s nikým bavit, tak ti bohužel nepomůžeme!`);
        }}); 

        client.on('message', message => {
          if (message.content.startsWith(prefix + "prosel")) {
            message.channel.send(`Zdravím, Prošel si k nám do teamu pockej si na více informací u tebe v PM SDRP support @here`);
          }});

client.on('message', message => {
            if (message.content.startsWith(prefix + "anofrakce")) {
              message.channel.send(`Zdravím, frakce ti byla schválená cekej na více informací. SDRP support @here`);
            }});

client.on('message', message => {
              if (message.content.startsWith(prefix + "heslo")) {
                message.channel.send(`vFS5NFEeK59`);
              }});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
              
['command_handler', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
})
