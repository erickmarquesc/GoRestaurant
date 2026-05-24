import { Toaster } from 'react-hot-toast';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { FoodFormModal } from './components/FoodFormModal';
import { ConfirmModal } from './components/ConfirmModal';
import { FoodsProvider } from './hooks/useFoods';
import { FoodsModalProvider } from './hooks/useModal';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <FoodsProvider>
      <FoodsModalProvider>
        <GlobalStyle />
        <Toaster position="top-right" />
        <Header />
        <FoodFormModal />
        <ConfirmModal />
        <Dashboard />
      </FoodsModalProvider>
    </FoodsProvider>
  );
}
