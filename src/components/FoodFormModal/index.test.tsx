import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FoodFormModal } from './index';
import { useFoods } from '../../hooks/useFoods';
import { useModal } from '../../hooks/useModal';

jest.mock('../../hooks/useFoods');
jest.mock('../../hooks/useModal');

const mockCreateFood = jest.fn();
const mockCloseModal = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();

  (useFoods as jest.Mock).mockReturnValue({
    createFood: mockCreateFood,
    updateFood: jest.fn(),
  });

  (useModal as jest.Mock).mockReturnValue({
    activeModal: 'new',
    editingFood: null,
    closeModal: mockCloseModal,
  });
});

describe('FoodFormModal — validação', () => {
  it('deve exibir erros quando o formulário for enviado vazio', async () => {
    render(<FoodFormModal />);

    fireEvent.click(screen.getByRole('button', { name: /cadastrar prato/i }));

    expect(await screen.findByText('Nome é obrigatório')).toBeInTheDocument();
    expect(screen.getByText('Descrição é obrigatória')).toBeInTheDocument();
    expect(screen.getByText('Informe um valor maior que zero')).toBeInTheDocument();
    expect(screen.getByText('URL da imagem é obrigatória')).toBeInTheDocument();
  });

  it('deve exibir erro quando o preço for zero', async () => {
    render(<FoodFormModal />);

    await userEvent.type(screen.getByLabelText('Valor (R$)'), '0');
    fireEvent.click(screen.getByRole('button', { name: /cadastrar prato/i }));

    expect(await screen.findByText('Informe um valor maior que zero')).toBeInTheDocument();
  });

  it('deve chamar createFood com os dados corretos ao submeter', async () => {
    mockCreateFood.mockResolvedValue(undefined);
    render(<FoodFormModal />);

    await userEvent.type(screen.getByLabelText('Nome'), 'Macarrão');
    await userEvent.type(screen.getByLabelText('Descrição'), 'Descrição do prato');
    await userEvent.type(screen.getByLabelText('Valor (R$)'), '19.90');
    await userEvent.type(screen.getByLabelText('URL da Imagem'), 'https://example.com/img.png');

    fireEvent.click(screen.getByRole('button', { name: /cadastrar prato/i }));

    await waitFor(() => {
      expect(mockCreateFood).toHaveBeenCalledWith({
        name: 'Macarrão',
        description: 'Descrição do prato',
        price: 19.90,
        available: true,
        image: 'https://example.com/img.png',
      });
    });

    expect(mockCloseModal).toHaveBeenCalled();
  });

  it('não deve chamar createFood se houver erros de validação', async () => {
    render(<FoodFormModal />);

    await userEvent.type(screen.getByLabelText('Nome'), 'Prato sem imagem');
    fireEvent.click(screen.getByRole('button', { name: /cadastrar prato/i }));

    expect(mockCreateFood).not.toHaveBeenCalled();
  });
});
