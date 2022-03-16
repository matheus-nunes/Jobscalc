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

//vamos criar um array para salvar os dados na página principal
const jobs = []

const views = __dirname + '/views/'

//MONTANDO As ROTAS    <<-- --
routes.get('/', (request, response) => response.render(views + 'index'))
// quando for o metodo get no barra. quero que no segundo argumento execute uma função de novo
routes.get('/job', (request, response) => response.render(views + 'job'))
routes.post('/job', (request, response) => {
  const lastId = jobs[jobs.length - 1]?.id || 1

  //a baixo estamos jogando o body pra dentro do array
  jobs.push({
    id: lastId + 1,
    name: request.body.name,
    'daily-hours': request.body['daily_hours'],
    'total-hours': request.body['total_hours'],
    created_at: Date.now() //atribuindo a data de hoje
    // estamos atribuindo uma nova data, essa data será somente pra calculo
    //{ name: 'sadasdas', 'daily-hours': '2', 'total-hours': '2' }
  })
  return response.redirect('/')
})
routes.get('/job/edit', (request, response) =>
  response.render(views + 'job-edit')
)
routes.get('/profile', (request, response) =>
  response.render(views + 'profile', { profile })
)

module.exports = routes
