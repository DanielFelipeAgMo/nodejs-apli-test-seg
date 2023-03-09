Creación del Api RESTfull con Node
1-npm init -y para crear el package.json
2-ir a https://www.toptal.com/developers/gitignore y crear la estructura de nuestro gitignore 
3-crear el archivo editorconfig como buenas practicas
4-creamos otro archivo de configuración, .eslintrc.json
5-creamos el index.js
6-instalamos dependecias de desarrollo npm i eslint eslint-config-prettier eslint-plugin-prettier prettier nodemon -D 
7-en el package.json prega lo siguiente dentro de scripts: 

    "dev":"nodemon index.js",
    "start": "node index.js",
    "lint": "eslint"
esto permitirá lanzar el servicio con el comando npm run dev
8-instalaremos express como dependencia de producción con npm i express
9-comenzamos a codificar el index.js
10-Muy importante como buena practica versionar nuestras APIS internamente
11-los endpoints pueden enviar y recibir parámetros (params)
12-los params query por ejemplo limit y offset se pasan al endpoint usando algo como  ?limit=10&offset=100
donde ? le dice al endpoint que recibirá parametros en este caso limit y offset acompañados de su debido valor, por ende & es un concatenador de parametros.
13-podemos probar los endpoints con info falsa de una librería llamada faker@5.5.3 instalandose mediante npm i faker@5.5.3 -S
14-Refactorizando el código aportando orden y una mejor estructura creando rutas servicios
