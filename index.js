const express = require("express");
const PORT = 5000;

const app = express();
const jsonParser = express.json();

const Order = require("./models").order;
const Products = require("./models").product;
const OrderProducts = require("./models").orderProducts;

app.use(jsonParser);

app.get("/", async (req, res) => {
  try {
    const order = await Order.findByPk(2, {
      include: { model: Products, through: { attributes: ["quantity"] } },
    });

    res.send(order);
  } catch (error) {
    console.log("Error", error);
  }
});

app.listen(PORT, () => console.log(`Listening to port:`, PORT));
