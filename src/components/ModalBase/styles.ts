import styled from 'styled-components';

export const ModalHeader = styled.div`
  background: var(--red);
  padding: 1.5rem 2rem;
  border-radius: 0.24rem 0.24rem 0 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  img {
    height: 1.75rem;
  }

  h2 {
    color: var(--white);
    font-size: 1.25rem;
  }

  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }

    svg {
      color: var(--white);
    }
  }
`;

export const ModalBody = styled.div`
  padding: 2rem;
`;
