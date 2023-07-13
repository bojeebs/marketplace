const express = require("express");
const cors = require("cors");
const AppRouter = require("./Routes/AppRouter");
// const db = require("./db");

const app = express();

const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: ["http://localhost:3000"],
  // credentials: true,
  // optionsSuccessStatus: 200,
  // allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.json({ message: "Server Works" }));
app.use("/api", AppRouter);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

module.exports = app;
