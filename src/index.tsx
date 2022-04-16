import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
 * {
 margin:0;
 padding: 0;
 box-sizing: border-box; 
 font-family: 'Helvetica',  sans-serif;
}
`;
ReactDOM.render(
  <BrowserRouter>
    <Global />
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);


