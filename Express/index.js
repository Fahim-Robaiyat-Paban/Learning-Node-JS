const express = require("express");
const path = require("path");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.static("view"));

const products = [
  { id: 1, name: "Wireless Mouse", price: 15.99, category: "Electronics", inStock: true },
  { id: 2, name: "Notebook", price: 2.5, category: "Stationery", inStock: false },
];


app.get("/", (req, res) => {
  res.json({ success: true, message: "Welcome to the Product API", data: products });
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }
  res.json({ success: true, data: product });
});


app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});