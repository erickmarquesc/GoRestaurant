import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: -10rem;

  div{
    border-radius: 1rem;
    color: var(--text-title);
    height: auto;
    
    header{
      line-height: 0.1rem;
      height: auto;
      border-radius: 1rem 1rem 0rem 0rem;
    }
    
    main{
      background: var(--grey01);
      padding: 1.5rem 2rem;
      height: auto;

      h2{
        color: var(--text-body);
      }
      p{
        color: var(--text-body);
        margin-top: 1rem;
        font-size: 0.9rem;
      }
  
      strong{
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

      padding: 1rem 1rem;
      background: #e4e4eb;
      border-radius: 0rem 0rem 1rem 1rem;

      div.icon-container {
        display: flex;

        button {
          background: #fff;
          padding: 0.6rem;
          border-radius: 0.5rem;
          display: flex;
          border: none;
          transition: 0.1s;
          svg {
            color: #3d3d4d;
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

        & input {
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
          -webkit-transition: 0.4s;
          transition: 0.4s;
          border-radius: 1rem;

          &:before {
            position: absolute;
            content: '';
            height: 1.25rem;
            width: 2.5rem;
            left: 0.5rem;
            bottom: 0.3rem;
            background-color: white;
            -webkit-transition: 0.4s;
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
          -webkit-transform: translateX(32px);
          -ms-transform: translateX(32px);
          transform: translateX(32px);
        }
      }
    }
    }
  }
`;