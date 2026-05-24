import styled from 'styled-components';

export const CardItem = styled.div`
  border-radius: 1rem;
  color: var(--text-title);
  height: auto;

  header {
    line-height: 0.1rem;
    height: auto;
    border-radius: 1rem 1rem 0 0;
  }

  main {
    background: var(--grey01);
    padding: 1.5rem 2rem;
    height: auto;

    h2 {
      color: var(--text-body);
    }

    p {
      color: var(--text-body);
      margin-top: 1rem;
      font-size: 0.9rem;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 3rem;
      color: var(--green);
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: var(--card-footer);
    border-radius: 0 0 1rem 1rem;

    div.icon-container {
      display: flex;

      button {
        background: var(--white);
        padding: 0.6rem;
        border-radius: 0.5rem;
        display: flex;
        border: none;
        cursor: pointer;
        transition: 0.1s;

        svg {
          color: var(--grey03);
        }

        & + button {
          margin-left: 0.3rem;
        }
      }
    }

    div.availability-container {
      display: flex;
      align-items: center;

      p {
        color: var(--text-body);
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 5.5rem;
        height: 2rem;
        margin-left: 0.75rem;

        input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--red);
          transition: 0.4s;
          border-radius: 1rem;

          &:before {
            position: absolute;
            content: '';
            height: 1.25rem;
            width: 2.5rem;
            left: 0.5rem;
            bottom: 0.3rem;
            background-color: var(--white);
            transition: 0.4s;
            border-radius: 0.6rem;
          }
        }

        input:checked + .slider {
          background-color: var(--green);
        }

        input:focus + .slider {
          box-shadow: 0 0 1px var(--blue);
        }

        input:checked + .slider:before {
          transform: translateX(32px);
        }
      }
    }
  }
`;
