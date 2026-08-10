const express = require("express");
const app = express();
const { productapi } = require("./data");

app.get("/data.js/v1/query", (req, res) => {
  console.log(req.query);
  let { search, limit } = req.query;
  let sortedProducts = [...productapi.products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.toLowerCase().startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('No Product Found')
    return res.status(200).json({ success: "true", data: [] });
  }
  return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
