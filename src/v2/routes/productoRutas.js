const express = require("express");
const router = express.Router(); 
const path = "productos"; //esta seria la ruta principal /productos
//const controller = require('../../src/controllers/productoController.js'); Ruta Relativa
const controller = require('#controllers/productoControllers.js');//Ruta Absoluta


router
    .get(`/${path}`, controller.mostrarProductos)
    .get(`/${path}/buscar/:nombre`, controller.buscarProductosPorNombre)
    .post(`/${path}/`, controller.crearNuevoProducto)
    .put(`/${path}/:id`, controller.actualizarProducto)
    .delete(`/${path}/:id`, controller.borrarProducto ) 

module.exports = router;



