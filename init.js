const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,  Intents.FLAGS.GUILD_MESSAGES] });
const { autopurgechannel } = require('./config.json');
const { messagemaximum } = require('./config.json');
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
var msgcounter = 0;
client.on('message', message => {
	if(message.channel.id == autopurgechannel){nsfwchat++};
	if(msgcounter >= messagemaximum){
	message.channel.bulkDelete(messagemaximum);
	msgcounter = 0;
}});
client.login(token);

