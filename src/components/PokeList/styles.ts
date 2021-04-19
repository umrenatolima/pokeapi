import styled, { css, keyframes } from 'styled-components';
import ReactLoading from 'react-loading';

export const CardsList = styled.div`
  height: 80vh;
  overflow-y: auto;
  padding-right: 5px;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(240, 240, 240, 0.8);
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .infinite-scroll-component {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
  }
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

export const Item = styled.div`
  position: relative;
  animation: ${appearFromLeft} 0.6s;
  transition: transform 0.6s ease;

  &:hover {
    transform: scale(0.9);
  }

  h3 {
    font-family: Cinzel Decorative, sans-serif;
    font-weight: 700;

    flex: 1;
  }

  img {
    width: 100%;
    height: 90%;
  }

  a {
    text-decoration: none;
    line-height: 3rem;
    color: #fff;
    font-weight: 700;
    font-size: 1.5rem;
  }
`;

export const FloatingButton = styled.button`
  position: absolute;

  left: 20px;
  top: 20px;

  opacity: 0.8;

  @media screen and (max-width: 1280px) {
    left: 5px;
  }
`;

export const ImageContainer = styled.div`
  height: 475px;
  width: 470px;

  img {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 1920px) {
    height: 320px;
    width: 320px;
  }

  @media screen and (max-width: 1280px) {
    height: 200px;
    width: 230px;
  }
`;

interface LoadingProps {
  isloading: boolean;
}

export const Loading = styled(ReactLoading)<LoadingProps>`
  ${props =>
    !props.isloading &&
    css`
      opacity: 0;
    `}
`;
