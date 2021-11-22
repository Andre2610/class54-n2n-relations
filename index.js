const express = require("express");
const PORT = 5000;

const app = express();
const jsonParser = express.json();

app.use(jsonParser);

app.listen(PORT, () => console.log("Listening to port", PORT));
