const express = require('express');
const apiRouter = require('./server')
const app = express();
const port = 3000;

app.use(express.json())

//Ruta principal
app.get('/',(req, res)=>{
  res.send('Hola estamos en la ruta raíz 😀')
})

//requiriendo el router
apiRouter(app)

//lanzar el api
app.listen(port,()=>{
  console.log(`API ejecutándose en el puerto ${port} 🚀`)

})
