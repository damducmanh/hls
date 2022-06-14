import { createGlobalStyle } from 'styled-components';
import NunitoSansRegular from './assets/fonts/Nunito_Sans/NunitoSans-Regular.ttf';
import NunitoSansSemi from './assets/fonts/Nunito_Sans/NunitoSans-SemiBold.ttf';
import NunitoSansBold from './assets/fonts/Nunito_Sans/NunitoSans-Bold.ttf';

export const variables = {
  mainGreenColor: '#29b363',
  mainWhiteColor: '#fff',
  mainBlackColor: '#000',
};

const GlobalStyle = createGlobalStyle`
  //
  @font-face {
    font-family: 'NunitoSans';
    src: url(${NunitoSansRegular}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'NunitoSans';
    src: url(${NunitoSansSemi}) format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'NunitoSans';
    src: url(${NunitoSansBold}) format('woff2');
    font-weight: 900;
    font-style: normal;
  }


  html,
  body {
    font-family: NunitoSans, 'Open Sans', Rotobo, serif;
    color: ${variables.mainBlackColor};
    font-weight: 300;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
