import { createContext, ReactNode, useContext, useState } from 'react';
import { IFood, ModalType } from '../types/food';

interface IFoodsModalProvider {
  children: ReactNode;
}

interface IModalContextData {
  activeModal: ModalType;
  editingFood: IFood | null;
  confirmingFood: IFood | null;
  openNewModal: () => void;
  openEditModal: (food: IFood) => void;
  openConfirmModal: (food: IFood) => void;
  closeModal: () => void;
}

const ModalContext = createContext<IModalContextData>({} as IModalContextData);

export function FoodsModalProvider({ children }: IFoodsModalProvider) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [editingFood, setEditingFood] = useState<IFood | null>(null);
  const [confirmingFood, setConfirmingFood] = useState<IFood | null>(null);

  function openNewModal() {
    setActiveModal('new');
  }

  function openEditModal(food: IFood) {
    setEditingFood(food);
    setActiveModal('edit');
  }

  function openConfirmModal(food: IFood) {
    setConfirmingFood(food);
    setActiveModal('confirm');
  }

  function closeModal() {
    setActiveModal(null);
    setEditingFood(null);
    setConfirmingFood(null);
  }

  return (
    <ModalContext.Provider
      value={{ activeModal, editingFood, confirmingFood, openNewModal, openEditModal, openConfirmModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
