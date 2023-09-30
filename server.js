const express = require('express');

const app = express();

app.get('/',(req, res) => res.send('Mi sitio desde AWS con Express!'))

app.listen(3000);
console.log('Server en el puerto 3000')