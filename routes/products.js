const express = require('express');
const faker = require('faker');

const router = express.Router();

//Ruta POST productos
router.post('/',(req,res)=>{
  const body = req.body
  res.json({
    ok:true,
    data:body
  })
})


//Ruta GET productos estableciendo condiciones
router.get('/',(req, res)=>{
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

//Ruta GET productos con parametros
router.get('/:id',(req, res)=>{
  const {id}=req.params
  res.json({
    'id': id,
    'nombre':'Lapiz',
    'precio': 3000,
    'categoría':'útiles'

  })
})

module.exports=router
