const productosRouter = require('../routes/products')
const usuariosRouter = require('../routes/users')
const ayudasRouter = require('../routes/helps')


function apiRouter(app) {
  app.use('/products', productosRouter)
  app.use('/users', usuariosRouter)
  app.use('/helps', ayudasRouter)
}

module.exports=apiRouter;
