const express = require('express') // aqui estamos atribuindo uma função ao express
const server = express() // aqui estamos executando a função express e jogando para o server
const routes = require('./routes')

//apos isso executar o arquivo com node

// este console log mostra o que esta sendo executado no terminal
//console.log(server)

//vamos utilizar o use para criar as rotas automaticamente
//habilitar os arquivos estaticos
//nós utilizamos o midleware  ( o homem do meio)
server.use(express.static('public'))

server.use(routes)

server.listen(3000, () => console.log('rodando')) //listen é uma ação que vai ligar o servidor
//3000 é a porta do servidor  | () => console.log ('rodando') é uma função

//PARA RODAR O NODEMON É: NPM RUN DEV
//NODEMON é para reiniciar o servidor sozinho toda vez que eu salvo
