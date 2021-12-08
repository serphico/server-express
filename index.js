const express = require('express');

const path = require('path');

const fs = require('fs')

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () =>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`))

app.get('/', (req, res) => {
    res.send({mensaje: 'hola mundo'});
})

app.get('/productos', (req, res) =>{

res.sendFile(path.resolve(__dirname,'assets/data/productos.txt'))    
})

app.get('/productoRandom', (req, res) =>{

    fs.readFile('./assets/data/productos.txt', 'utf-8', (err, data) => {
    if(err) {
      console.log('error: ', err);
    } else {
        let dataParse = JSON.parse(data);

        let numRandom = Math.floor((Math.random() * (dataParse.length - 0 + 1)) + 0);

        res.send(dataParse[numRandom])
    }
  });

})