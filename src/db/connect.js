const mongoose = require("mongoose");
require("dotenv").config({ path: "./src/config/.env"}); //Ruta relativa
//require("dotenv").config({ path: "#config/.env"}); //Ruta Absoluta

mongoose
.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then (() => console.log("Conectado a MongoDB Atlas"))
.catch ((error)=> console.error(error));

module.exports = mongoose; 
