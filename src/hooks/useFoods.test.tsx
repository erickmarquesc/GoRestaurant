import { renderHook, act, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { FoodsProvider, useFoods } from './useFoods';
import { api } from '../services/api';

jest.mock('../services/api');

const mockApi = api as jest.Mocked<typeof api>;

const foodMock = {
  id: 1,
  name: 'Ao molho',
  description: 'Macarrão ao molho branco',
  price: 19.90,
  available: true,
  image: 'https://example.com/food.png',
  createdAt: '2024-01-01T00:00:00.000Z',
};

function wrapper({ children }: { children: ReactNode }) {
  return <FoodsProvider>{children}</FoodsProvider>;
}

describe('useFoods', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockApi.get = jest.fn().mockResolvedValue({ data: { foods: [foodMock] } });
  });

  it('deve carregar os pratos na inicialização', async () => {
    const { result } = renderHook(() => useFoods(), { wrapper });

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.foods).toHaveLength(1);
    expect(result.current.foods[0].name).toBe('Ao molho');
  });

  it('deve criar um novo prato', async () => {
    const newFood = { ...foodMock, id: 2, name: 'Novo Prato' };
    mockApi.post = jest.fn().mockResolvedValue({ data: { food: newFood } });

    const { result } = renderHook(() => useFoods(), { wrapper });

    await waitFor(() => expect(result.current.loading).toBe(false));

    await act(async () => {
      await result.current.createFood({
        name: 'Novo Prato',
        description: 'Descrição',
        price: 25,
        available: true,
        image: 'https://example.com/new.png',
      });
    });

    expect(result.current.foods).toHaveLength(2);
    expect(result.current.foods[1].name).toBe('Novo Prato');
  });

  it('deve deletar um prato', async () => {
    mockApi.delete = jest.fn().mockResolvedValue({});

    const { result } = renderHook(() => useFoods(), { wrapper });

    await waitFor(() => expect(result.current.loading).toBe(false));

    await act(async () => {
      await result.current.deleteFood(1);
    });

    expect(result.current.foods).toHaveLength(0);
  });

  it('deve alternar a disponibilidade de um prato', async () => {
    mockApi.put = jest.fn().mockResolvedValue({});

    const { result } = renderHook(() => useFoods(), { wrapper });

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.foods[0].available).toBe(true);

    await act(async () => {
      await result.current.toggleAvailable(1);
    });

    expect(result.current.foods[0].available).toBe(false);
  });
});
