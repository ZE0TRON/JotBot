const Discord = require("discord.js");
const client = new Discord.Client();
const dotenv = require("dotenv");

const dondurma = require("./feats/dondurma");

dotenv.config({ path: "../.env" });
const TOKEN = process.env.TOKEN;

console.log(TOKEN);
const parseAndAction = async msg => {
  const funcList = [dondurma];
  for (let func of funcList) {
    await func(msg);
  }
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  parseAndAction(msg);
});

client.login(TOKEN);
