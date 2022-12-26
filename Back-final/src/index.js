const express = require('express');       // Server
const { json } = require('body-parser');  // Parseo de la request recibida
const cors = require('cors');             // Cors para el browser
const routerUsers = require('./Router/routeUsers'); // Router
const seeder = require('./Helpers/seeder')          // Seeder para crear un user por defecto si no hubiera ninguno
const { ConnectionDB } = require('./DataBase/config'); // Conexión a la DB

const port = process.env.PORT || 4000; // Puerto para el server
const app = express(); // Instanciar el server

app.use(cors()); // Usar los Cors
app.use(json()); // Usar el parser

app.use('/users', routerUsers); // Cargar las rutas al server

app.listen(port, async () => { // Pone en escucha al server
  console.log(`Server running on http://localhost:${port}`); // Mostrar en donde estña corriendo el server
  await ConnectionDB(); // Conectar a la DB
  await seeder(); // Hacer uso del seeder
});
