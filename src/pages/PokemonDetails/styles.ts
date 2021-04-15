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
  width: 100%;
  position: relative;

  button {
    position: absolute;

    left: 0;
    top: 40px;

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

  img {
    height: 550px;
    width: 550px;
  }
`;
