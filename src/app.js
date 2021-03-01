const express = require('express');
const path = require('path');
var createError = require("http-errors");
const fileUpload = require("express-fileupload");

const app = express();

// Servidor estático 
app.use(express.static(path.join(__dirname, '../public')));

// Motor de plantillas
app.set('views', path.join(__dirname,'views'))
app.set('view engine','hbs');

// URL Encode para el req.body
app.use(express.urlencoded({ extended: false}));

// para subir archivos
app.use(fileUpload());

// importar rutas
const indexRoutes = require('./routes/index');
const productsRoutes = require('./routes/products');
// const usersRoutes = require('./routes/users');

// para usar las rutas
app.use(indexRoutes);
app.use(productsRoutes);
// app.use(usersRoutes);


module.exports = app;