import selfcore from "selfcore";
import chalk from "chalk";
import discord from "discord.js";

const client = new discord.Client({ intents: 32767 });
const serverID = "969354949962121216";
const channelID = "969354949962121219";
const clientToken =
  "OTY5MzY0MTk0NDAxMDcxMTM1.GOPFzm.nlI9gilqgUTYksoLeZ7WgYZ0UkiZSqPN_T4Wiw";

const botToken = "OTY5MzUzOTM0MzI0MDA2OTYy.YmsLoA.tg7ah8Z0ykSE1lfcBHYimDLM_xI";
const gateway = new selfcore.Gateway(botToken);

// Functionality
const tag = (tag) => {
  return chalk.bold(`[${chalk.blue(tag)}]`);
};

client.on("ready", () => {
  console.log(`${tag(" INFO ")} Connected to ${chalk.bold(client.user.tag)}.`);
});

gateway.on("ready", () => {
  console.log(`${tag(" INFO ")} Connected to ${chalk.bold(botToken)}.`);
});

gateway.on("message", async (message) => {
  if (message.author.bot) return;
  const channel = client.channels.cache.get(channelID);
  await channel.send({
    content: `*[${message.guild_id}]* - \`${message.author.username}#${
      message.author.discriminator
    }\` - **${message.content}**\n<t:${Math.floor(
      new Date(message.timestamp).getTime() / 1000
    )}:R>`,
  });
});

client.login(clientToken);
