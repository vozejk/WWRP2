module.exports = async (client) =>{
    const guild = client.guilds.cache.get('906922398484414534');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('907189544141598742');
        channel.setName(`👥｜Počet Členů: ${memberCount.toLocaleString()}`);
        console.log('Member Count ✔');
    }, 5000);
}
