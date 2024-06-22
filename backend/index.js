const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const notifRoutes = require("./routes/Notifications");
const harvestRoutes = require("./routes/HarvestCycle");
const soilRoutes = require("./routes/SoilDetails");

const database = require("./config/database");
const cookieParser = require("cookie-parser");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 4000;

database.connect();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/notif", notifRoutes);
app.use("/api/v1/harvest", harvestRoutes);
app.use("/api/v1/soil", soilRoutes);

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your server is up and running...."
    });
});

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})