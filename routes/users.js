const express = require('express');

const router = express.Router();


//Ruta usuarios con query params
router.get('/',(req, res)=>{
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



module.exports=router;
