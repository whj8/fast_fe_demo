const express = require("express");
const app = express();
app.get("/abc", (req, res) => res.status(200).send({ message: "你们好" }));
app.listen(9999, () => console.log("server is running at port 9999"));
