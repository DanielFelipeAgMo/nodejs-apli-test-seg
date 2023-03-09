const express = require('express');

const router = express.Router();

//Ruta ayuda
router.get('/',(req, res)=>{
  res.status(200).send('Hola estamos en la ruta ayuda 😁')
})





module.exports=router;
