import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewFoodsModal } from "./components/NewFoodsModal";
import { FoodsProvider } from "./hooks/useFoods";
import { FoodsModalProvider } from "./hooks/useNewFoodsModal";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    
    <FoodsProvider>
      <FoodsModalProvider>

      <GlobalStyle/>
      <Header/>
      <NewFoodsModal/>
      <Dashboard/>
      
      </FoodsModalProvider>
    </FoodsProvider>
    
  );
}