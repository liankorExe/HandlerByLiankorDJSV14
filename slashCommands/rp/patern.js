const { Discord } = require("discord.js");
const config = require("../../config.json");
module.exports = {
  name: "patern",
  description: "Commande patern",
  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction) => {
    console.log("Made By Liankor")
  },
};
