const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());


function loginController(req, res) {
  res.send("login route working");
}

function registerController(req, res) {
  throw new Error("register route has an error");
}

const apiRouter = express.Router();
apiRouter.post("/login", loginController);
apiRouter.post("/register", registerController);


app.use("/api", apiRouter);


app.use((err, req, res, next) => {
  console.log(err);
  res.send("something went wrong");
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});