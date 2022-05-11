import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { api } from "../services/api";

interface IFood{
    id: number;
    name: string;
    description: string;
    price: number;
    available: string;
    image: string;
    createdAt: string;
}
interface IFoodProviderProps{
  children: ReactNode;
}
interface IFoodsContextData{
  foods: IFood[];
  createFood: (foodInput: FoodInput) => Promise<void>;
}
type FoodInput = Omit<IFood, 'id' | 'createdAt'>;

const FoodsContext = createContext<IFoodsContextData>({} as IFoodsContextData);

export function FoodsProvider({children}: IFoodProviderProps){
  const [foods, setFoods] = useState<IFood[]>([]);

  useEffect(() =>{
    api.get('foods')
    .then(response => setFoods(response.data.foods));
  }, []);

  async function createFood(foodInput: FoodInput){
    const response = await api.post('/foods', {...foodInput, createdAt: new Date()});
    const {food} = response.data;

    setFoods([...foods, food]);
  }
  return(
    <FoodsContext.Provider value={{
      foods,
      createFood
      }}>
      {children}
    </FoodsContext.Provider>
  )
}

export function useFoods(){
  const context = useContext(FoodsContext);
  return context;
}