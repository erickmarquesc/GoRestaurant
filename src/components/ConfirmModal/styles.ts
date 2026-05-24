import styled from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;

  button {
    flex: 1;
    height: 3.5rem;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    &.cancel {
      background: var(--grey01);
      color: var(--grey03);
    }

    &.confirm {
      background: var(--red);
      color: #fff;
    }
  }
`;
