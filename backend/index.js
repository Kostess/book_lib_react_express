const express = require('express');
const connectDB = require("./db/db");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes")

const port = 3000;
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", bookRoutes);

connectDB();

app.listen(port, () => {
    console.log(`Сервер запущен на: http://localhost:${port}`);
})
