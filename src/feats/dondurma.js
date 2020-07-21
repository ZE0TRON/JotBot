const dondurma = msg => {
  if (msg.content.includes("dondurma")) {
    msg.reply("Dondurma is a lie");
  }
};
module.exports = dondurma;
