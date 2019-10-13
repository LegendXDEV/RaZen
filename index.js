const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require('fs');

const prefix = "!";

const bot = new Client({
    disableEveryone: true
})
const ascii = require("ascii-table");

// Collections
bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");
config({
    path: __dirname + "/.env"
});

// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

bot.on("ready", () => {
    let botItable = new ascii(`${bot.user.username} Information`);
    botItable.setHeading("Channels", "Users", "Servers")

    botItable.addRow(`${bot.channels.size}`, `${bot.users.size}`, `${bot.guilds.size}`)

    console.log(botItable.toString())
    console.log(`${bot.user.username} is now online!`)
    bot.user.setPresence({
        status: "online",
        game: {
            name: `${bot.users.size} users having fun!`,
            type: "WATCHING"
        }
    });
    bot.channels.get('632446177723285504').send("```fix\n" + `${bot.user.username} Login Details` + "```" + "```css\n" + botItable + "```" + `\n**Game:** ${bot.user.presence.game}\n**Status:** ${bot.user.presence.status}`)
})

bot.on("message", async message => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    // Get the command
    let command = bot.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command)
        command.run(bot, message, args, prefix);
});

bot.login(process.env.TOKEN);
