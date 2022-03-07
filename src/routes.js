const express = require('express')
const routes = express.Router()

// response é responder
//request é perguntar
// joguinho de pergunta e resposta

const basePath = __dirname + '/views' // isso aqui serve para encurtar o dir name

//MONTANDO As ROTAS    <<-- --
routes.get('/', (request, response) =>
  response.sendFile(basePath + '/index.html')
)
// quando for o metodo get no barra. quero que no segundo argumento execute uma função de novo
routes.get('/job', (request, response) =>
  response.sendFile(basePath + '/job.html')
)
routes.get('/job-edit.html', (request, response) =>
  response.sendFile(basePath + '/job-edit.html')
)
routes.get('/profile', (request, response) =>
  response.sendFile(basePath + '/profile.html')
)

module.exports = routes
