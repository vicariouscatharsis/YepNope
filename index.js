const Telegraf = require("telegraf");
const axios = require("axios");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const answer = process.env.ANSWER_URL;

bot.hears("hi", ctx => {
  return ctx.reply("Hey!");
});

bot.command("answer", ctx => {
  axios
    .get(answer)
    .then(res => {
      console.log(res.data);
      const data = res.data;
      return ctx.reply(data.image);
    })

    .catch(err => console.log(err));
});

bot.on("text", ctx => {
    axios
      .get(answer)
      .then(res => {
        console.log(res.data);
        const data = res.data;
        return ctx.reply(data.image);
      })
  
      .catch(err => console.log(err));
  });

bot.startPolling();
