import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { FoodsProvider } from "./hooks/useFoods";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    
    <FoodsProvider>
      <GlobalStyle/>
      <Header/>
      <Dashboard/>
    </FoodsProvider>
    
  );
}