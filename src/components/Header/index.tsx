import { FiPlusSquare } from 'react-icons/fi';
import imgLogo from '../../assets/logo.svg';
import { useModal } from '../../hooks/useModal';
import { Container, Content } from './styles';

export function Header() {
  const { openNewModal } = useModal();
  return (
    <Container>
      <Content>

        <img src={imgLogo} alt="GoRestaurant" />
        <button
          type="button"
          onClick={openNewModal}
        >
          Novo Prato
          <FiPlusSquare size={24} />
        </button>

      </Content>
    </Container>
  )
}