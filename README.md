# Jobscalc

Este projeto foi Utilizado Node: Express, Ejs
</br>
Configuramos o servidor na porta: 3000
</br>
Realizamos as montagens das rotas:</br>
routes.get('/', (request, response) => response.render(views + 'index'))</br>
// quando for o metodo get no barra. quero que no segundo argumento execute uma função de novo</br>
routes.get('/job', (request, response) => response.render(views + 'job'))</br>
routes.post('/job', (request, response) => {</br>
  const lastId = jobs[jobs.length - 1]?.id || 1</br>
  </br>
  </br>
  Utilizamos o motor EJS para poder manipular nosso javascript diretamente dentro da html
  </br>
  Realizei a instalação do Nodemon também para poder riniciar o servidor automaticamente após salvar o projeto, assim facilita possibilita mais agilidade na construção do projeto
  
  
  
![image](https://user-images.githubusercontent.com/37475590/163690597-5e299b11-6d58-43c6-a120-feed6ae6363c.png)

  
![image](https://user-images.githubusercontent.com/37475590/163690607-ee33a918-bd80-45cd-8dcb-9dfde332cf8e.png)


![image](https://user-images.githubusercontent.com/37475590/163690626-f1f12dac-6359-4e66-b8d5-2aaac7b40486.png)



![image](https://user-images.githubusercontent.com/37475590/163690649-4fd565ce-4bd1-438d-95ef-061169446b5e.png)
