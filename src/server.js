const express = require("express");
const bodyParser = require("body-parser");

// Inicialización
const app = express();

// Configuraciones
app.set("port", process.env.PORT || 3000);

// Middlewares y Rutas
app.use(bodyParser.urlencoded({ extended: false })); // Analizar datos codificados en la URL
app.use(bodyParser.json()); // Analizar datos en formato JSON

const productoRoutes = require('#routes/productoRutas.js');
app.use("/api/v2", productoRoutes); // Se agrega a cada ruta de productos.

// Ruta para manejar localhost:5800 y localhost:5800/
app.get('/', (req, res) => {
    res.redirect('/api/v2/productos');
});

module.exports = app;