import styled from 'styled-components';

export const DetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 40px 0;
  }

  h3 {
    font-size: 3rem;
  }

  .pokebola {
    position: relative;
    width: 150px;
    height: 150px;
    background-color: #fff;
    border: 5px solid #000;
    border-radius: 50%;
    box-shadow: inset -10px 10px 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: gira 4s infinite;
    margin: 20px auto;
  }
  .pokebola:before,
  .pokebola:after {
    content: '';
    position: absolute;
  }
  .pokebola:before {
    background-color: #ef4036;
    width: 100%;
    height: 50%;
  }
  .pokebola:after {
    top: calc(50% - 10px);
    width: 100%;
    height: 20px;
    background-color: #000;
  }
  .pokebola-botao {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border: 10px solid #000;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    z-index: 10;
  }
  .pokebola-botao:before {
    content: '';
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 10px);
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 3px solid #000;
    border-radius: 50%;
    z-index: 10;
  }

  @keyframes gira {
    0% {
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(-45deg);
    }
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

export const ImageContainer = styled.div`
  background: white;
`;
