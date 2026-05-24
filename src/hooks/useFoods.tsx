import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import toast from 'react-hot-toast';
import { IFood, FoodInput } from '../types/food';

export type { IFood, FoodInput };

interface IFoodProviderProps {
  children: ReactNode;
}

interface IFoodsContextData {
  foods: IFood[];
  loading: boolean;
  createFood: (foodInput: FoodInput) => Promise<void>;
  updateFood: (id: number, foodInput: FoodInput) => Promise<void>;
  deleteFood: (id: number) => Promise<void>;
  toggleAvailable: (id: number) => Promise<void>;
}

const FoodsContext = createContext<IFoodsContextData>({} as IFoodsContextData);

export function FoodsProvider({ children }: IFoodProviderProps) {
  const [foods, setFoods] = useState<IFood[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/foods')
      .then((response) => setFoods(response.data.foods))
      .catch(() => toast.error('Erro ao carregar pratos'))
      .finally(() => setLoading(false));
  }, []);

  const createFood = useCallback(async (foodInput: FoodInput): Promise<void> => {
    try {
      const response = await api.post('/foods', { ...foodInput, createdAt: new Date() });
      const { food } = response.data;
      setFoods((prev) => [...prev, food]);
      toast.success('Prato cadastrado com sucesso!');
    } catch {
      toast.error('Erro ao cadastrar prato');
    }
  }, []);

  const updateFood = useCallback(async (id: number, foodInput: FoodInput): Promise<void> => {
    try {
      const food = foods.find((f) => f.id === id);
      if (!food) return;
      const updatedFood = { ...food, ...foodInput };
      await api.put(`/foods/${id}`, updatedFood);
      setFoods((prev) => prev.map((f) => (f.id === id ? updatedFood : f)));
      toast.success('Prato atualizado com sucesso!');
    } catch {
      toast.error('Erro ao atualizar prato');
    }
  }, [foods]);

  const deleteFood = useCallback(async (id: number): Promise<void> => {
    try {
      await api.delete(`/foods/${id}`);
      setFoods((prev) => prev.filter((food) => food.id !== id));
      toast.success('Prato removido com sucesso!');
    } catch {
      toast.error('Erro ao remover prato');
    }
  }, []);

  const toggleAvailable = useCallback(async (id: number): Promise<void> => {
    try {
      const food = foods.find((f) => f.id === id);
      if (!food) return;
      await api.put(`/foods/${id}`, { ...food, available: !food.available });
      setFoods((prev) => prev.map((f) => (f.id === id ? { ...f, available: !f.available } : f)));
      toast.success(food.available ? 'Prato marcado como indisponível' : 'Prato marcado como disponível');
    } catch {
      toast.error('Erro ao atualizar disponibilidade');
    }
  }, [foods]);

  return (
    <FoodsContext.Provider value={{ foods, loading, createFood, updateFood, deleteFood, toggleAvailable }}>
      {children}
    </FoodsContext.Provider>
  );
}

export function useFoods() {
  const context = useContext(FoodsContext);
  return context;
}
