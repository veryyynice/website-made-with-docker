const express = require("express");
const path = require("path");
const app = express();

//serve static html
app.use(express.static(path.join(__dirname, "public")));

//example API route
app.get("/api/message", function (req, res) {
  return res.json({ message: "Hello from ExpressJS!" });
});

app.listen(3000, () => {
  // Start the server on port 3000, so it can be accessed via http://localhost:3000
  console.log("Listening on port 3000");
});
