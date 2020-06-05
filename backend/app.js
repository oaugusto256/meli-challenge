const express = require("express");

const app = express();
const cors = require("cors");

const itemsRouter = require("./controllers/items");

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

app.use("/api/items", itemsRouter);

module.exports = app;