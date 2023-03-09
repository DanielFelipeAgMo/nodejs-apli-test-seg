const express = require('express');
const app = express();
const faker = require('faker');
const port = 3000;

//Ruta principal
app.get('/',(req, res)=>{
  res.send('Hola estamos en la ruta raíz 😀')
})

//Ruta ayuda
app.get('/api/v1/ayuda',(req, res)=>{
  res.status(200).send('Hola estamos en la ruta ayuda 😁')
})

//Ruta usuarios con query params
app.get('/api/v1/usuarios',(req, res)=>{
  const {limit, offset} = req.query
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  }else{
    res.send('No hay parámetros 😪')
  }

})

//Ruta productos con parametros
app.get('/api/v1/productos/:id',(req, res)=>{
  const {id}=req.params
  res.json({
    'id': id,
    'nombre':'Lapiz',
    'precio': 3000,
    'categoría':'útiles'

  })
})

//Ruta productos estableciendo condiciones
app.get('/api/v1/productos',(req, res)=>{
  const productos = []
  const {tamano}= req.query
  const limit = tamano || 10
  for (let index = 0; index <limit; index++) {
    productos.push({
      nombre:faker.commerce.productName(),
      precio:parseInt(faker.commerce.price(), 10),
      imagen:faker.image.imageUrl(),
    })
  }
  res.json(productos)
})

//lanzar el api
app.listen(port,(req,res)=>{
  console.log(`API ejecutándose en el puerto ${port} 🚀`);
})
