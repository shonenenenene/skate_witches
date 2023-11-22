import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
	  padding: 0px;
	  margin: 0px;
	  border: none;
  }

  *,
  *::before,
  *::after {
  	box-sizing: border-box;
  }

  a, a:link, a:visited  {
      text-decoration: none;
      color: white;
  }

  a:hover  {
      text-decoration: none;
  }

  aside, nav, footer, header, section, main {
  	display: block;
  }

  h1, h2, h3, h4, h5, h6, p {
      font-size: inherit;
  	font-weight: inherit;
  }

  

  img {
  	vertical-align: top;
  }

  img, svg {
  	max-width: 100%;
  	height: auto;
  }

  address {
    font-style: normal;
  }

  input, textarea, button, select {
  	font-family: inherit;
      font-size: inherit;
      color: inherit;
      background-color: transparent;
  }

  input::-ms-clear {
  	display: none;
  }

  button, input[type="submit"] {
      display: inline-block;
      box-shadow: none;
      background-color: transparent;
      background: none;
      cursor: pointer;
  }

  input:focus, input:active,
  button:focus, button:active {
      outline: none;
  }

  button::-moz-focus-inner {
  	padding: 0;
  	border: 0;
  }

  label {
  	cursor: pointer;
  }

  legend {
  	display: block;
  }

  body {
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,200;0,300;0,400;1,200&display=swap');
    margin: 0;
    padding: 0;
    background-color: #0000a8ff;
    color: #fff;
    font-family: 'IBM Plex Mono', monospace, Sans-Serif;
  }
`;
