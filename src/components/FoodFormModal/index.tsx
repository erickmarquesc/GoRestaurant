import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { Container, ErrorMessage } from './styles';
import { ModalHeader, ModalBody } from '../ModalBase/styles';
import { useModal } from '../../hooks/useModal';
import { useFoods } from '../../hooks/useFoods';
import { FoodInput, FormFields, FormErrors } from '../../types/food';
import imgLogo from '../../assets/logo.svg';

const EMPTY_FORM: FormFields = { name: '', description: '', price: '', available: true, image: '' };

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) errors.name = 'Nome é obrigatório';
  if (!fields.description.trim()) errors.description = 'Descrição é obrigatória';
  const price = Number(fields.price);
  if (!fields.price || isNaN(price) || price <= 0) errors.price = 'Informe um valor maior que zero';
  if (!fields.image.trim()) errors.image = 'URL da imagem é obrigatória';
  return errors;
}

export function FoodFormModal() {
  const { activeModal, editingFood, closeModal } = useModal();
  const { createFood, updateFood } = useFoods();

  const isOpen = activeModal === 'new' || activeModal === 'edit';
  const isEditing = activeModal === 'edit';

  const [fields, setFields] = useState<FormFields>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isEditing && editingFood) {
      setFields({
        name: editingFood.name,
        description: editingFood.description,
        price: String(editingFood.price),
        available: editingFood.available,
        image: editingFood.image,
      });
    } else {
      setFields(EMPTY_FORM);
    }
    setErrors({});
  }, [isEditing, editingFood]);

  function setField<K extends keyof FormFields>(key: K, value: FormFields[K]) {
    setFields(prev => ({ ...prev, [key]: value }));
    if (errors[key as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [key]: undefined }));
    }
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const foodInput: FoodInput = {
      name: fields.name.trim(),
      description: fields.description.trim(),
      price: Number(fields.price),
      available: fields.available,
      image: fields.image.trim(),
    };

    setIsLoading(true);
    try {
      if (isEditing && editingFood) {
        await updateFood(editingFood.id, foodInput);
      } else {
        await createFood(foodInput);
      }
      closeModal();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <ModalHeader>
        <img src={imgLogo} alt="GoRestaurant" />
        <h2>{isEditing ? 'Editar Prato' : 'Cadastrar Prato'}</h2>
        <button type='button' onClick={closeModal}>
          <FiX size={20} />
        </button>
      </ModalHeader>

      <ModalBody>
        <Container onSubmit={handleSubmit} noValidate>
          <div className="fields-row">
            <div className="field">
              <label htmlFor="food-name">Nome</label>
              <input
                id="food-name"
                placeholder="Ex: Macarrão ao molho"
                value={fields.name}
                onChange={e => setField('name', e.target.value)}
                data-invalid={!!errors.name}
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </div>

            <div className="field">
              <label htmlFor="food-price">Valor (R$)</label>
              <input
                id="food-price"
                placeholder="Ex: 19.90"
                type="number"
                min="0"
                step="0.01"
                value={fields.price}
                onChange={e => setField('price', e.target.value)}
                data-invalid={!!errors.price}
              />
              {errors.price && <ErrorMessage>{errors.price}</ErrorMessage>}
            </div>
          </div>

          <div className="field">
            <label htmlFor="food-description">Descrição</label>
            <input
              id="food-description"
              placeholder="Ex: Macarrão com molho branco e ervas finas"
              value={fields.description}
              onChange={e => setField('description', e.target.value)}
              data-invalid={!!errors.description}
            />
            {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
          </div>

          <label className="checkbox">
            <input
              type="checkbox"
              checked={fields.available}
              onChange={e => setField('available', e.target.checked)}
            />
            Disponível no cardápio
          </label>

          <div className="field">
            <label htmlFor="food-image">URL da Imagem</label>
            <input
              id="food-image"
              placeholder="https://exemplo.com/imagem.png"
              value={fields.image}
              onChange={e => setField('image', e.target.value)}
              data-invalid={!!errors.image}
            />
            {errors.image && <ErrorMessage>{errors.image}</ErrorMessage>}
          </div>

          <button type='submit' disabled={isLoading}>
            {isLoading ? 'Salvando...' : isEditing ? 'Salvar alterações' : 'Cadastrar prato'}
          </button>
        </Container>
      </ModalBody>
    </Modal>
  );
}
