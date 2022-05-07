import { FiPlusSquare } from 'react-icons/fi';
import imgLogo from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>

        <img src={imgLogo} alt="GoRestaurant" />
        <button
          type="button"
        //onClick={openModal}
        >
          Novo Prato
          <FiPlusSquare size={24} />
        </button>

      </Content>
    </Container>
  )
}