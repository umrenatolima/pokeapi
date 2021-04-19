import styled, { css, keyframes } from 'styled-components';

export const PokedexContainer = styled.main`
  height: 100vh;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to{
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  height: 100%;

  animation: ${appearFromLeft} 1s;
`;

interface ILoadingContainerProps {
  isLoading: boolean;
}

export const LoadingContainer = styled.footer<ILoadingContainerProps>`
  ${props =>
    !props.isLoading &&
    css`
      opacity: 0;
    `}
`;
