import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { appColor } from 'modules/theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  body {
    font-family: Lato, sans-serif;
    font-size: 16px; /* stylelint-disable unit-blacklist */
    margin: 0;
    min-height: 100vh;
    padding: 0;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  a {
    color: ${appColor};
    text-decoration: none;

    &.disabled {
      pointer-events: none;
    }
  }

  button {
    appearance: none;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    line-height: 1;
    padding: 0;
  }

  span {
    font-size: 1.5rem;
  }

  a {
    font-size: 1.2rem;
    margin-left: 1rem;
  }

  button {
    font-size: 1.3rem !important;
  }

  p {
    font-size: 15px;
  }
`;

export default () => <GlobalStyle />;
