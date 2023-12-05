const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5050;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());



const itemRoutes = require("./routes/item.routes")
app.use("/items", itemRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}.`);
});
