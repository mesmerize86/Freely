import { createGlobalStyle } from 'styled-components';
import SFPRODISPLAYREGULARTTF from 'fonts/freely/SFPRODISPLAYREGULAR.ttf';
import SFPRODISPLAYREGULAREOT from 'fonts/freely/SFPRODISPLAYREGULAR.eot';
import SFPRODISPLAYREGULARWOFF from 'fonts/freely/SFPRODISPLAYREGULAR.woff';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Freely';
    src: url(${SFPRODISPLAYREGULARTTF}) format('truetype');
    src: url(${SFPRODISPLAYREGULARTTF}) format('truetype');
    src: url(${SFPRODISPLAYREGULAREOT}) format('embedded-opentype');
    src: url(${SFPRODISPLAYREGULARWOFF}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  body {
    padding: 0;
    margin: 0;
    font-family: Freely, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    line-height: 1.5;
    font-color: "#1e2027";
    height: 100%;
  }
  
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
    border-color: rgba(30, 32, 39, 1);
  }
`;

export default GlobalStyle;
