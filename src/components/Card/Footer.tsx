import { FiEdit3, FiTrash } from 'react-icons/fi';
import { useCard } from './CardContext';
import { useFoods } from '../../hooks/useFoods';
import { useModal } from '../../hooks/useModal';

export function Footer() {
  const { food } = useCard();
  const { toggleAvailable } = useFoods();
  const { openEditModal, openConfirmModal } = useModal();

  return (
    <footer>
      <div className="icon-container">
        <button
          type="button"
          className="icon"
          aria-label={`Editar prato ${food.name}`}
          onClick={() => openEditModal(food)}
          data-testid={`edit-food-${food.id}`}
        >
          <FiEdit3 size={20} />
        </button>

        <button
          type="button"
          className="icon"
          aria-label={`Excluir prato ${food.name}`}
          onClick={() => openConfirmModal(food)}
          data-testid={`remove-food-${food.id}`}
        >
          <FiTrash size={20} />
        </button>
      </div>

      <div className="availability-container">
        <p>{food.available ? 'Disponível' : 'Indisponível'}</p>

        <label className="switch">
          <input
            type="checkbox"
            checked={food.available}
            onChange={() => toggleAvailable(food.id)}
            id={`available-switch-${food.id}`}
            data-testid={`change-status-food-${food.id}`}
          />
          <span className="slider" />
        </label>
      </div>
    </footer>
  );
}
