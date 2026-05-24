import '@testing-library/jest-dom';
import Modal from 'react-modal';

// react-modal precisa do app element configurado em ambiente de teste
Modal.setAppElement(document.createElement('div'));
