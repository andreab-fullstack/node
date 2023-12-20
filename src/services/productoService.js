//const productoModel = require('../models/productoModel.js');//ruta relativa
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const productoModel = require('#models/productoModel.js'); //ruta absoluta
//const {v4: uuid} = require('uuid'); //Desestructuro {}. Version 4 de uuid


//Mostrar Productos
const mostrarProductos = async () => {
    const listado = await productoModel.find();
    return listado;
};

//Buscar por nombre de Producto
const buscarProductosPorNombre = async (nombre) => {
  console.log('Nombre a buscar:', nombre);
  const regex = new RegExp(`${nombre}`, 'i');
  const result = await productoModel.find({ nombre: regex });
  console.log('Resultado de la consulta:', result);
  return result;
};

//Crear nuevo Producto
const crearNuevoProducto = async (nuevoProducto) => {
  const productoInsertado = {
    id: new ObjectId(),
    createdAt: new Date(), // Utiliza new Date() para obtener la fecha actual
    updateAt: new Date(),
    nombre: nuevoProducto.nombre,
    descripcion: nuevoProducto.descripcion,
    medida: nuevoProducto.medida,
    peso: nuevoProducto.peso,
  };
  const creadoProducto = await productoModel(productoInsertado).save();
  return creadoProducto;
};

// Actualizar Producto
const actualizarProducto = async (id, datosActualizar) => {
  const actualizado = await productoModel.updateOne({ _id: id }, datosActualizar);
  return actualizado;
};

// Borrar Producto
const borrarProducto = async (id) => {
  const productoBorrado = await productoModel.deleteOne({ _id: id });
  if (productoBorrado.deletedCount > 0) {
    // Si se eliminó al menos un documento
    return true;
  } else {
    // Si no se eliminó ningún documento
    throw new Error("No se pudo encontrar el producto para eliminar.");
  }
};


module.exports = {
    mostrarProductos,
    buscarProductosPorNombre,
    crearNuevoProducto,
    actualizarProducto,
    borrarProducto
}
