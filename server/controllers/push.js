const { sequelize } = require("../db/models/index");
const webpush = require("web-push");

const showMessage = async (subscribe) => {
  const products = await sequelize.models.product.findAll();
  const productNumber = Math.floor(Math.random() * products?.length);
  let { name, cost, img } = products[productNumber];
  img = JSON.parse(img)[0];
  const payload = JSON.stringify({
    title: name,
    body: `Special cost: ${cost}$`,
    img: `https://server-sushi-ua.herokuapp.com/${img}.png`,
  });
  webpush
    .sendNotification(subscribe, payload)
    .catch((err) => console.error(err));
};

const push = async (req, res) => {
  const subscribe = req.body;
  // const products = await sequelize.models.product.findAll();
  // const productNumber = Math.floor(Math.random() * products?.length)
  // let { name, cost, img } = products[productNumber]
  // img = JSON.parse(img)[0];
  res.status(201).json({});
  // const payload = JSON.stringify({title: name, body: `Special cost: ${cost}$`, img: `https://server-sushi-ua.herokuapp.com/${img}.png`})
  // webpush.sendNotification(subscribe, payload).catch(err => console.error(err))
  setInterval(() => {
    showMessage(subscribe);
  }, 15000);
};

module.exports = { push };
