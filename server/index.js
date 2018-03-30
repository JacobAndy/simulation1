require("dotenv").config();
const express = require("express");
const app = express();
const { json } = require("body-parser");
const cors = require("cors");
const port = 3001;
const massive = require("massive");

massive(process.env.CONNECTION_KEY).then(databaseId => {
  console.log(databaseId);
  app.set("db", databaseId);
});

app.use(json());
app.use(cors());
const ctrl = require("./controller/controller");

app.get("/api/photos", ctrl.get);
app.put("/api/photos/:id", ctrl.update);
app.post("/api/photos", ctrl.create);
app.delete("/api/photos/:id", ctrl.delete);

app.listen(port, () =>
  console.log(`Hello Daddy, I am listening on port ${port}`)
);
