const express = require("express");

const cors = require("cors");
const app = express();
const port = 8090;

app.use(express.json());
app.use(cors());

const router = require("./routes/auth.js");
app.use("/api", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
