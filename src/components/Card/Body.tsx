import { useCard } from './CardContext';

export function Body() {
  const { food } = useCard();

  return (
    <main>
      <h2>{food.name}</h2>
      <p>{food.description}</p>
      <strong>R$ {Number(food.price).toFixed(2).replace('.', ',')}</strong>
    </main>
  );
}
