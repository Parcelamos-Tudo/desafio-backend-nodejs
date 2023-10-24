const express = require("express");

async function main() {
  const app = express();

  app.get("/", (req, res) => {
    return res.json("Hello from api");
  });
  app.post("/", (req, res) => {
    const data = req.body;

    if (data.password !== "senha123") {
      return res.status(401).json("Invalid password");
    }

    return res.json({ success: true, message: "Access authorized" });
  });

  app.listen(2312, () => {
    console.log("api is running");
  });
}

main();
