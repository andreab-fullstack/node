# Acerca de - API Productos MongoDB v2 

Esta API proporciona un CRUD de productos y no está específicamente diseñada para una tienda online, ya que podria ser utilizada para otros casos. 

# Versión de Node.js

Este proyecto se ha desarrollado y probado con Node.js versión v18.16.0. Se recomienda utilizar al menos esta versión para garantizar la compatibilidad.

Asegúrate de tener Node.js instalado. Puedes descargar la última versión desde el sitio oficial de Node.js.

## Instalación 

1. Clona este repositorio en tu máquina local. 

2. Ejecuta `npm install` para instalar las dependencias necesarias. 

## Ejecución

Para iniciar la API en modo de desarrollo con `nodemon`, ejecuta el siguiente comando:

```bash

npm run dev

```

## Configuración

La API utiliza una base de datos MongoDB Atlas. Asegúrate de tener una instancia de MongoDB Atlas configurada y obtén la URL de conexión.

Crea un archivo `.env` en la raíz del proyecto basándote en el ejemplo proporcionado en `.env.example`:

```env

MONGODB_URI=your-mongodb-uri
PORT=your-preferred-port

```

## Dependencias reflejadas en archivo package.json

```json

"dependencies": {
  "body-parser": "^1.20.2",
  "dotenv": "^16.3.1",
  "express": "^4.18.2",
  "mongoose": "^7.5.0",
  "uuid": "^9.0.0"
},
"devDependencies": {
  "nodemon": "^3.0.1"
}

```

## Configuracion de Rutas Absolutas
Se han configurado rutas absolutas para ser utilizadas en el proyecto en el archivo jsconfig.json y se actualizó a tal efecto el package.json. Esto permite un manejo más organizado y simplificado de las importaciones en el código.

Recuerda que después de clonar el repositorio, puedes instalar las dependencias ejecutando el siguiente comando:

```bash

npm install

```

## Estructura del Proyecto - Carpetas y Archivos

api-productos-mongo-v2/
├── src/
│   ├── config/
│   │   ├── .env                # Archivo de configuración para variables de entorno.
│   │   └── .env.example        # Ejemplo de archivo de configuración de variables de entorno.
│   ├── controllers/
│   │   └── productoControllers.js  # Controladores para manejar la lógica de negocio relacionada con productos.
│   ├── db/
│   │   └── connect.js          # Archivo para establecer la conexión con la base de datos MongoDB.
│   ├── models/
│   │   └── productoModel.js    # Definición del esquema del modelo de productos utilizando Mongoose.
│   ├── services/
│   │   └── productoService.js   # Lógica de servicio para realizar operaciones relacionadas con productos.
│   ├── v2/
│   │   └── routes/
│   │       └── productoRutas.js # Definición de las rutas de la API relacionadas con productos.
│   ├── .gitignore              # Archivo que especifica qué archivos y carpetas deben ignorarse al realizar seguimiento con Git.
│   ├── app.js                  # Archivo principal de la aplicación donde se configura y ejecuta la aplicación Express.
│   ├── jsconfig.json           # Configuración para habilitar rutas absolutas en el código Node.js.
│   │
│   └── server.js               # Archivo que inicia el servidor Express.
├── LICENSE.md                  # Archivo que contiene la información sobre la licencia del proyecto.
├── package-lock.json           # Archivo generado por npm que asegura la consistencia de las versiones de las dependencias.
├── package.json                # Archivo que contiene la información sobre el proyecto, las dependencias y los scripts de npm.
└── README.md                   # Archivo con la documentación principal del proyecto.


## Puntos finales

### Mostrar Productos
- **Método:** GET
- **Ruta:** /api/v2/productos
- **Descripción:** Retorna todos los productos almacenados en la base de datos.
- **Ejemplo de respuesta exitosa:**

```json
 {
  "status": "exitoso",
  "data": [
    {
      "_id": "64f0d4dcc4df3b8bb2c0f56d",
      "nombre": "Producto 1",
      "descripcion": "Descripción del producto 1",
      "medida": "Medida del producto 1",
      "peso": "Peso del producto 1",
      "createdAt": "Fecha de creación del producto 1",
      "updatedAt": "Fecha de actualización del producto 1"
    },
    {
      "_id": "64f0d50bc4df3b8bb2c0f570",
      "nombre": "Producto 2",
      "descripcion": "Descripción del producto 2",
      "medida": "Medida del producto 2",
      "peso": "Peso del producto 2",
      "createdAt": "Fecha de creación del producto 2",
      "updatedAt": "Fecha de actualización del producto 2"
    }
  ]
}

 

```
### Crear nuevo Producto
- **Método:** POST
- **Ruta:** /api/v2/productos
- **Descripción:** Crea un nuevo producto en la base de datos.
- **Ejemplo de solicitud:**

```json

{
 "nombre": "Nuevo Producto",
 "descripcion": "Descripción del nuevo producto",
 "medida": "Medida del nuevo producto",
 "peso": "Peso del nuevo producto"
}

```

-**Ejemplo de respuesta exitosa:**


```json
{
      "status": "Exitoso",
      "data": {
        "nombre": "Producto Nuevo",
        "descripcion": "Descripción del Producto Nuevo",
        "medida": "Medida del Producto Nuevo",
        "peso": "Peso del Producto Nuevo",
        "_id": "6582ae9a542a3a91a4958e82",
        "createdAt": "Fecha de creación del producto nuevo",
        "updatedAt": "Fecha de actualización de actualizacion producto nuevo"
      }
    }    

```

### Buscar productos por nombre
- **Método:** GET
- **Ruta:** `/api/v2/productos/buscar/:nombre`
- **Descripción:** Busca productos en la base de datos por su nombre.
- **Ejemplo de respuesta exitosa:**

```json
    {
      "status": "Exitoso",
      "data": [
        {
          "_id": "6582ae9a542a3a91a4958e82",
          "nombre": "nombre de producto buscado",
          "descripcion": "descripcion de producto buscado",
          "medida": "medida de producto buscado",
          "peso": "peso de producto buscado",
          "createdAt": "Fecha de busqueda de producto",
          "updatedAt": "Fecha de actualizacion de busqueda de producto"
        }
        // Otros productos pueden aparecer aquí
      ]
    }

```
### Actualizar Producto
- **Método:** PUT
- **Ruta:**  /api/v2/productos/:id
- **Descripción:**  Actualiza un producto en la base de datos.
- **Ejemplo de solicitud:** 

```json

    {
      "nombre": "Producto actualizado",
      "descripcion": "Descripción del producto actualizado",
      "medida": "Medida del producto actualizado",
      "peso": "Peso del producto actualizado"
    }


```
- **Ejemplo de respuesta exitosa:**

```json

    {
      "status": "Exitoso",
      "data": "Producto actualizado exitosamente."
    }



```

### Borrar Producto
- **Método:**DELETE
- **Ruta:** /api/v2/productos/:id
- **Descripción:** Elimina un producto de la base de datos.
- **Ejemplo de respuesta exitosa:**

```json


    {
      "status": "Exitoso",
      "data": "Producto eliminado exitosamente."
    }


```

## Contribuciones

Si deseas contribuir a este proyecto, sigue estos pasos:
1.	Haz un fork de este repositorio.
2.	Crea una rama con el nombre de tu función o mejora.
3.	Realiza los cambios necesarios y haz commit.
4.	Haz push a tu rama.
5.	Crea una solicitud de extracción.

## licencia
Este proyecto está bajo la Licencia (Versión Limitada) - ver el archivo LICENSE.md para más detalles.



