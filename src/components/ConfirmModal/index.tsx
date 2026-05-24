import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';
import imgLogo from '../../assets/logo.svg';
import { ModalHeader, ModalBody } from '../ModalBase/styles';
import { ButtonGroup } from './styles';
import { useModal } from '../../hooks/useModal';
import { useFoods } from '../../hooks/useFoods';

export function ConfirmModal() {
  const { activeModal, confirmingFood, closeModal } = useModal();
  const { deleteFood } = useFoods();

  const isOpen = activeModal === 'confirm';

  async function handleConfirm() {
    if (!confirmingFood) return;
    await deleteFood(confirmingFood.id);
    closeModal();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
      style={{ content: { maxWidth: '400px' } }}
    >
      <ModalHeader>
        <img src={imgLogo} alt="GoRestaurant" />
        <h2>Confirmar exclusão</h2>
        <button type='button' onClick={closeModal}>
          <FiX size={20} />
        </button>
      </ModalHeader>

      <ModalBody>
        <p>Deseja excluir o prato <strong>{confirmingFood?.name}</strong>? Esta ação não pode ser desfeita.</p>
        <ButtonGroup>
          <button type='button' className='cancel' onClick={closeModal}>
            Cancelar
          </button>
          <button type='button' className='confirm' onClick={handleConfirm}>
            Excluir
          </button>
        </ButtonGroup>
      </ModalBody>
    </Modal>
  );
}
