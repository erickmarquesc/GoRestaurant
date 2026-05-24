import { ReactNode } from 'react';
import { IFood } from '../../hooks/useFoods';
import { CardContext } from './CardContext';
import { CardItem } from './styles';

interface RootProps {
  food: IFood;
  children: ReactNode;
}

export function Root({ food, children }: RootProps) {
  return (
    <CardContext.Provider value={{ food }}>
      <CardItem>
        {children}
      </CardItem>
    </CardContext.Provider>
  );
}
