const express = require('express')
const routes = express.Router()

const profile = {
  name: 'Matheus Nunes',
  avatar: 'https://avatars.githubusercontent.com/u/37475590?v=4',
  // Os objetos criados a baixo estão com aspas porque o nome deles te traço -
  'monthly-budget': 3000.0,
  'days-per-week': 5,
  'hours-per-day': 5,
  'vacation-per-year': 4
}

const views = __dirname + '/views/'

//MONTANDO As ROTAS    <<-- --
routes.get('/', (request, response) => response.render(views + 'index'))
// quando for o metodo get no barra. quero que no segundo argumento execute uma função de novo
routes.get('/job', (request, response) => response.render(views + 'job'))
routes.get('/job/edit', (request, response) =>
  response.render(views + 'job-edit')
)
routes.get('/profile', (request, response) =>
  response.render(views + 'profile', { profile })
)

module.exports = routes
