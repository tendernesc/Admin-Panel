const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin"); 
const { sequelize } = require("./models");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Правильный порядок middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Сначала подключаем auth, потом admin
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to MySQL!");
  } catch (error) {
    console.error("Error connecting to MySQL:", error);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});




