const express = require('express')
const routes = express.Router()

// response é responder
//request é perguntar
// joguinho de pergunta e resposta
//const basePath = __dirname + '/views/' // isso aqui serve para encurtar o dir name

const views = __dirname + '/views/'

//MONTANDO As ROTAS    <<-- --
routes.get('/', (request, response) => response.render(views + 'index'))
// quando for o metodo get no barra. quero que no segundo argumento execute uma função de novo
routes.get('/job', (request, response) => response.render(views + 'job'))
routes.get('/job/edit', (request, response) =>
  response.render(views + 'job-edit')
)
routes.get('/profile', (request, response) =>
  response.render(views + 'profile')
)

module.exports = routes
