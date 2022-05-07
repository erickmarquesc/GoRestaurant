import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs';
import {App} from './App';

//CRIANDO UMA API FALSA SÓ PARA TESTES 
createServer({

  //Banco de dados do miragejs
  models:{
    food: Model,
  },

  seeds(server){
    server.db.loadData({
      foods:[ //NOME DA TABELA, NOME DO MODEL NO PLURAL
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-04-12 16:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/foods', () => {
      return this.schema.all('food')
    })

    this.post('/foods', (schema, response) => {
      const data = JSON.parse(response.requestBody)

      return schema.create('food', data) //schema é o banco de dados
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
