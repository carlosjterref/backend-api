import express from 'express';
import routeUsuario from './app/routes/routes.usuario.js';
import routeAuth from './app/routes/routes.auth.js';


const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', routeUsuario);
app.use('/api', routeAuth);


// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Servidor funcionando correctamente' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


