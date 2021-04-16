import styled, { keyframes } from 'styled-components';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px)
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
  /* width: 100%;
  height: 100%; */

  animation: ${appearFromRight} 1s;
`;

export const DetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 25px 0;
  }

  h3 {
    font-size: 3rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  button {
    margin-right: 3rem;

    svg {
      color: #ffdd56;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ul {
    list-style: none;

    li {
      font-size: 3rem;
    }
  }
`;

export const ImageContainer = styled.div`
  height: 550px;
  width: 550px;

  img {
    height: 100%;
    width: 100%;
  }
`;
