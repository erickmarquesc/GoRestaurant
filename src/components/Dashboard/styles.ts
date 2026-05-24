import styled, { keyframes } from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: -10rem;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const shimmer = keyframes`
  from { background-position: -400px 0; }
  to   { background-position: 400px 0; }
`;

export const SkeletonCard = styled.div`
  border-radius: 0.24rem;
  height: 340px;
  background: linear-gradient(90deg, var(--grey01) 25%, var(--grey02) 50%, var(--grey01) 75%);
  background-size: 800px 100%;
  animation: ${shimmer} 1.4s infinite linear;
`;
