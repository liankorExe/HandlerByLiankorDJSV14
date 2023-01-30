const { ActivityType, EmbedBuilder } = require("discord.js");
const client = require("..");
const chalk = require("chalk");
const config = require("../config.json");

client.on("ready", () => {
  const activities = [
    {
      name: `${client.guilds.cache.size} Serveurs`,
      type: ActivityType.Listening,
    },
    {
      name: `${client.channels.cache.size} Channels`,
      type: ActivityType.Playing,
    },
    { name: `Bot NgStats`, type: ActivityType.Playing },
  ];
  const status = ["online", "dnd", "idle"];
  let i = 0;
  setInterval(() => {
    if (i >= activities.length) i = 0;
    client.user.setActivity(activities[i]);
    i++;
  }, 5000);

  let s = 0;
  setInterval(() => {
    if (s >= activities.length) s = 0;
    client.user.setStatus(status[s]);
    s++;
  }, 30000);
  console.log(chalk.red(`Le bot ${client.user.tag} est pret !`));
});
