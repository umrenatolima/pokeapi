import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    overflow-y: hidden;

    min-height: 100vh;
    max-width: 70vw;

    background: linear-gradient(to bottom right,#141e30,#243b55);
    color: #fff;
    text-align: center;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3 {
    font-weight: 500;
  }

  h1 {
    font-size: 4em;
  }

  button {
    cursor: pointer;

    background: none;
    border: none;
  }
`;
