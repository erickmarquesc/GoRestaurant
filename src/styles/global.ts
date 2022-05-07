import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --red: #c72828;
    --blue: #2196f3;
    --green: #39b100;
    --shape: #ffb84d;
    --shape01: #e7e9ee;
    --shape02: #d7d7d7; 
    --text-body: #3d3d4d;
    --background: #f0f2f5;
    --blue-light: #6933ff;
    --text-title: #363f5f;
  }

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  
  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 600;
  }
  
  /* Para uma boa aplicação do Style é importante lembrar da acessibilidade
  então as fontes já vem por padrão com size de 16px sabendo disso
  usamos tbm a medida rem para se ajustar com as resoluções de tela e tbm
  usamos % para configurações de usuários possam ser utilizadas pelos app */
  
  html{
    @media(max-width:1080px){
      font-size:93.75%; // 15px (15/16)*100
    }
    @media(max-width:720px){
      font-size:87.5%; // 14px
    }
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

  //Tudo que estiver como desabilitado:
  [disabled]{
    opacity:0.6;
    cursor: not-allowed;
  }

  //Estilização do modal
  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px); //fundo borrado
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 560px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }
  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.8);
    }
  }
`;