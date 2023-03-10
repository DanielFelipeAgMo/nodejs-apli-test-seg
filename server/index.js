const productosRouter = require('../routes/products')
const usuariosRouter = require('../routes/users')
const ayudasRouter = require('../routes/helps')
const express = require('express')



function apiRouter(app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productosRouter)
  router.use('/users', usuariosRouter)
  router.use('/helps', ayudasRouter)
}

module.exports=apiRouter;
