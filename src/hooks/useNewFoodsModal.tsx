import { Children, createContext, ReactNode, useContext, useState } from "react";

type IModal = boolean;

interface IFoodsModalProvider{
  children:ReactNode;
}

interface IFoodsModalContextData {
  handleOpenNewFoodsModal: () => Promise<void>;
  handleCloseNewFoodsModal: () => Promise<void>;
  handleOpenEditFoodsModal: () => Promise<void>;
  handleCloseEditFoodsModal: () => Promise<void>;
  isNewFoodsModalOpen: IModal;
  isEditFoodsModalOpen: IModal;
}

const FoodsModalContext = createContext<IFoodsModalContextData>({} as IFoodsModalContextData);

export function FoodsModalProvider({children}:IFoodsModalProvider) {
  const [isNewFoodsModalOpen, setNewFoodsModalOpen] = useState<IModal>(false);
  const [isEditFoodsModalOpen, setEditFoodsModalOpen] = useState<IModal>(false);

  //New Foods
  async function handleOpenNewFoodsModal() {
    setNewFoodsModalOpen(true);
  }

  async function handleCloseNewFoodsModal() {
    setNewFoodsModalOpen(false);
  }

  // Edit Foods
  async function handleOpenEditFoodsModal(){
    setEditFoodsModalOpen(true);
  }

  async function handleCloseEditFoodsModal(){
    setEditFoodsModalOpen(false);
  }
  return (
    <FoodsModalContext.Provider value={{
      handleOpenNewFoodsModal,
      handleCloseNewFoodsModal,
      handleOpenEditFoodsModal,
      handleCloseEditFoodsModal,
      isNewFoodsModalOpen,
      isEditFoodsModalOpen
    }}>
      {children}
    </FoodsModalContext.Provider>
  );
}

export function useNewFoodsModal(){
  const context = useContext(FoodsModalContext);
  return context;
}