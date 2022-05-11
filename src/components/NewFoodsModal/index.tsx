import { FormEvent, useState } from 'react';
import { Container } from './styles';
import Modal from 'react-modal';
import imgClose from '../../assets/close.svg';
import { useNewFoodsModal } from '../../hooks/useNewFoodsModal';
import { useFoods } from '../../hooks/useFoods';

export function NewFoodsModal() {

  const { isNewFoodsModalOpen, handleCloseNewFoodsModal } = useNewFoodsModal();
  const { createFood } = useFoods();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState('true');
  const [image, setImage] = useState('');


  async function handleCreateNewFood(event: FormEvent) {
    event.preventDefault(); //Previne o comportamento default do submit 

    await createFood(
      {
        name,
        description,
        price,
        available,
        image,
      }
    );

    setName('');
    setDescription('');
    setPrice(0)
    setAvailable('true');
    setImage('');
    handleCloseNewFoodsModal();
  };

  return (
    <Modal
      isOpen={isNewFoodsModalOpen}
      onRequestClose={handleCloseNewFoodsModal}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={handleCloseNewFoodsModal}
        className='react-modal-close'
      >
        <img src={imgClose} alt='Fechar modal' />
      </button>

      <Container>
        <h2>Cadastrar Prato</h2>

        <input
          placeholder='Nome'
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input
          placeholder='Valor'
          value={price}
          onChange={event => setPrice(Number(event.target.value))}
        />

        <input
          placeholder='Descrição'
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
        <input
          placeholder='Habilitado'
          value={available}
          onChange={event => setAvailable(event.target.value)}
        />
        <input
          placeholder='Imagem'
          value={image}
          onChange={event => setImage(event.target.value)}
        />

        <button type='submit' onClick={handleCreateNewFood}>
          Cadastrar
        </button>

      </Container>
    </Modal>
  );
}