const connectToMongo = require("./db");
const express = require("express");
connectToMongo();
const app = express();
const port = 5000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

//we need  to add middleware in order to get the response.
app.use(express.json());

//Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

// -D ==>only to make dev dependencies file
//index.js-->it is a express server
