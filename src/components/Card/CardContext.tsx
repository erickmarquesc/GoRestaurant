import { createContext, useContext } from 'react';
import { IFood } from '../../hooks/useFoods';

interface CardContextData {
  food: IFood;
}

export const CardContext = createContext<CardContextData>({} as CardContextData);

export function useCard() {
  return useContext(CardContext);
}
