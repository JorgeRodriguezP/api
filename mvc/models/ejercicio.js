const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EjercicioSchema = new mongoose.Schema({
  name: String,
  document: Number,
  phone: Number,
  mail: String,
  status: { type: Boolean, default: true },
  date: { type: Date}
});

module.exports = mongoose.model("mvc_ejercicio", EjercicioSchema);