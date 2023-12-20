const app = require ("./server.js");
//const connect = require("./db/connect.js"); Ruta relativa
const connect = require("#db/connect.js"); //Ruta absoluta

app.listen(app.get('port'), () => {  //aqui estoy obteniendo la variable port declarada en server.js
    console.log('Servidor iniciado en el puerto', app.get('port'));//concateno con el puerto
}); 
