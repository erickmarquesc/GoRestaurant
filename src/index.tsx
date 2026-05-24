import React from 'react';
import { createRoot } from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';
import { ErrorBoundary } from './components/ErrorBoundary';

createServer({
  models: {
    food: Model,
  },

  seeds(server) {
    server.db.loadData({
      foods: [
        {
          id: 1,
          name: "Ao molho",
          description: "Macarrão ao molho branco, fughi e cheiro verde das montanhas",
          price: 19.90,
          available: true,
          image: "https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food1.png",
          createdAt: new Date().toISOString(),
        },
        {
          id: 2,
          name: "Veggie",
          description: "Macarrão com pimentão, ervilha e ervas finas colhidas no himalaia.",
          price: 21.90,
          available: true,
          image: "https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food2.png",
          createdAt: new Date().toISOString(),
        },
        {
          id: 3,
          name: "A la Camarón",
          description: "Macarrão com vegetais de primeira linha e camarão dos 7 mares.",
          price: 25.90,
          available: false,
          image: "https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food3.png",
          createdAt: new Date().toISOString(),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/foods', () => {
      return this.schema.all('food');
    });

    this.post('/foods', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('food', data);
    });

    this.put('/foods/:id', (schema, request) => {
      const food = schema.find('food', request.params.id);
      const data = JSON.parse(request.requestBody);
      food?.update(data);
      return food;
    });

    this.delete('/foods/:id', (schema, request) => {
      schema.find('food', request.params.id)?.destroy();
      return { id: request.params.id };
    });
  }
});

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
