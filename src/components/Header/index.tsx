import { FiPlusSquare } from 'react-icons/fi';
import imgLogo from '../../assets/logo.svg';
import { useNewFoodsModal } from '../../hooks/useNewFoodsModal';
import { Container, Content } from './styles';

export function Header() {
  const {handleOpenNewFoodsModal} = useNewFoodsModal();
  return (
    <Container>
      <Content>

        <img src={imgLogo} alt="GoRestaurant" />
        <button
          type="button"
          onClick={handleOpenNewFoodsModal}
        >
          Novo Prato
          <FiPlusSquare size={24} />
        </button>

      </Content>
    </Container>
  )
}