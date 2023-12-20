const { Schema, model } = require("mongoose");

const ProductoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  medida: {
    type: String,
    required: true
  },
  peso: {
    type: String,
    required: true
  }
}, { timestamps: true, versionKey: false });

const ProductoModel = model("productos", ProductoSchema);

module.exports = ProductoModel;