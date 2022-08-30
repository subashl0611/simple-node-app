const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("Hello world");
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
