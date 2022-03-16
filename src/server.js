const express = require('express') // aqui estamos atribuindo uma função ao express ela é uma biblioteca pra criar o servidor
const server = express() // aqui estamos executando a função express e jogando para o server é o que vai criar as rotas e os caminhos
const routes = require('./routes')

//usar o request.body
server.use(express.urlencoded({ extended: true })) //o use eu posso colocar pra habilitar configurações no servidor
//urlencoded é uma função,

//este aqui de baixo serve pra utilizar a teamplate engine
server.set('view engine', 'ejs')
// o EJS SERVE PARA CRIAR UM SERVIDOR EJS
// O EJS  permite que eu utilize o javscript dentro do
//meu html sem utilizar a tag script
//
//

//apos isso executar o arquivo com node

// este console log mostro que esta sendo executado no terminal
//console.log(server)

//vamos utilizar o use para criar as rotas automaticamente
//habilitar os arquivos estaticos
//nós utilizamos o midleware  ( o homem do meio)
server.use(express.static('public'))

//  motor do EJS

server.use(routes)

server.listen(3000, () => console.log('rodando')) //listen é uma ação que vai ligar o servidor
//3000 é a porta do servidor  | () => console.log ('rodando') é uma função

//PARA RODAR O NODEMON É: NPM RUN DEV
//NODEMON é para reiniciar o servidor sozinho toda vez que eu salvo
