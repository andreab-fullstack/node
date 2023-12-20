const productoService = require('#services/productoService.js');

//Mostrar Productos
const mostrarProductos = async (req, res) => {
  try {
    const productos = await productoService.mostrarProductos();
    res.send({status: "exitoso", data: productos});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};  

//Crear nuevos Productos
const crearNuevoProducto = async (req, res) => {
  try{
    const { body } = req; //desestructuro el body del request
    const nuevoProducto = {
      nombre: body.nombre,
      descripcion: body.descripcion,
      medida: body.medida,
      peso: body.peso
    };
    const creado = await productoService.crearNuevoProducto(nuevoProducto);
    res.status(201).send({status: "Exitoso", data: creado});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Buscar productos por nombre
const buscarProductosPorNombre = async (req, res) => {
  try{ 
    const { nombre } = req.params;
    if (!nombre) {
      return;
    }
    const buscado = await productoService.buscarProductosPorNombre(nombre);
    res.send({ status: "Exitoso", data: buscado });
  }catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Actualizar Producto
const actualizarProducto = async (req, res) => {
  const {
    body, //cuerpo de lo que se va a actualizar
    params: { id },
  } = req;
  if (!id) {
    res.status(400).send({
      status: "FALLO",
      data: { error: "El parámetro ':Producto Id' no puede estar vacío." },
    });
  }

  try {
    const actualizado = await productoService.actualizarProducto(id, body);
    if (actualizado.matchedCount === 1) {
      res.send({ status: "Exitoso", data: "Producto actualizado exitosamente." });
    } else {
      res.send({ status: "FALLO", data: "No se encontró el producto para actualizar." });
    }
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FALLO", data: { error: error?.message || error } });
  }
};

// Borrar Producto
const borrarProducto = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    if (!id) {
      return;
    }
    await productoService.borrarProducto(id);
    res.status(200).send({
      status: "Exitoso",
      data: "Producto eliminado exitosamente.",
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
    mostrarProductos,
    buscarProductosPorNombre,
    crearNuevoProducto,
    actualizarProducto,
    borrarProducto
}
 

