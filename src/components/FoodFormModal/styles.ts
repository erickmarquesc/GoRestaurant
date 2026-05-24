import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .fields-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  div.field {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    label {
      font-size: 0.75rem;
      font-weight: 600;
      color: #6b6b7b;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
  }

  input:not([type='checkbox']) {
    width: 100%;
    padding: 0 1rem;
    height: 3.5rem;
    border: 1.5px solid #d7d7d7;
    background: #fff;
    font-size: 1rem;
    border-radius: 0.5rem;
    color: var(--grey03);
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
      outline: none;
      border-color: var(--red);
      box-shadow: 0 0 0 3px rgba(199, 40, 40, 0.1);
    }

    &[data-invalid='true'] {
      border-color: var(--red);
    }

    &::placeholder {
      color: #b7b7cc;
      font-size: 0.9rem;
    }
  }

  label.checkbox {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--grey03);
    cursor: pointer;
    padding: 0.75rem 1rem;
    background: #fff;
    border: 1.5px solid #d7d7d7;
    border-radius: 0.5rem;
    transition: border-color 0.2s;

    &:has(input:checked) {
      border-color: var(--green);
    }

    input[type='checkbox'] {
      width: 1.1rem;
      height: 1.1rem;
      accent-color: var(--green);
      cursor: pointer;
      flex-shrink: 0;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 3.5rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.5rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 0.25rem;
    letter-spacing: 0.03em;
    transition: filter 0.2s, opacity 0.2s;
    cursor: pointer;

    &:hover:not(:disabled) {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;

export const ErrorMessage = styled.span.attrs({ role: 'alert', 'aria-live': 'polite' })`
  font-size: 0.75rem;
  color: var(--red);
  font-weight: 500;
`;
