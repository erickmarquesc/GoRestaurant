import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ConfirmModal } from './index';
import { useFoods } from '../../hooks/useFoods';
import { useModal } from '../../hooks/useModal';

jest.mock('../../hooks/useFoods');
jest.mock('../../hooks/useModal');

const mockDeleteFood = jest.fn();
const mockCloseModal = jest.fn();

const foodMock = {
  id: 1,
  name: 'Ao molho',
  description: 'Macarrão ao molho branco',
  price: 19.90,
  available: true,
  image: 'https://example.com/food.png',
  createdAt: '2024-01-01T00:00:00.000Z',
};

beforeEach(() => {
  jest.clearAllMocks();

  (useFoods as jest.Mock).mockReturnValue({ deleteFood: mockDeleteFood });

  (useModal as jest.Mock).mockReturnValue({
    activeModal: 'confirm',
    confirmingFood: foodMock,
    closeModal: mockCloseModal,
  });
});

describe('ConfirmModal', () => {
  it('deve exibir o nome do prato na mensagem de confirmação', () => {
    render(<ConfirmModal />);
    expect(screen.getByText(/Ao molho/i)).toBeInTheDocument();
  });

  it('deve chamar closeModal ao clicar em Cancelar', () => {
    render(<ConfirmModal />);
    fireEvent.click(screen.getByRole('button', { name: /cancelar/i }));
    expect(mockCloseModal).toHaveBeenCalled();
    expect(mockDeleteFood).not.toHaveBeenCalled();
  });

  it('deve chamar deleteFood e closeModal ao confirmar exclusão', async () => {
    mockDeleteFood.mockResolvedValue(undefined);
    render(<ConfirmModal />);

    fireEvent.click(screen.getByRole('button', { name: /excluir/i }));

    await waitFor(() => {
      expect(mockDeleteFood).toHaveBeenCalledWith(1);
      expect(mockCloseModal).toHaveBeenCalled();
    });
  });

  it('não deve renderizar o modal quando activeModal não for confirm', () => {
    (useModal as jest.Mock).mockReturnValue({
      activeModal: null,
      confirmingFood: null,
      closeModal: mockCloseModal,
    });

    render(<ConfirmModal />);
    expect(screen.queryByText(/Confirmar exclusão/i)).not.toBeInTheDocument();
  });
});
