import { useCard } from './CardContext';

export function Header() {
  const { food } = useCard();

  return (
    <header>
      <img src={food.image} alt={food.name} />
    </header>
  );
}
