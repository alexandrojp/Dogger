const express = require("express");

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static("dist"));

app.listen(port, () => console.log(`Server started in port ${port}`));
