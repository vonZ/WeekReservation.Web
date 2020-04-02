import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Raleway';
    margin: 0px;
    font-size: 62.5%;
  }
  body {
    margin: 0 auto;
    min-height: 1500px;
    background-color: #f8f5f5;
  }
  h1 {
    font-size: 2.8rem;
  }
  h2 {
    font-size: 2rem;
  }
  p, a, span, input, select, td, tr, th {
    font-size: 1.4rem;
  }
  h1, h2, p, span {
    color: #5A5A5A;
  }
`;
