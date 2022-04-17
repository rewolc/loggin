import App from "./App";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { setupStore } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const store = setupStore();

const Global = createGlobalStyle`
 * {
 margin:0;
 padding: 0;
 box-sizing: border-box; 
 font-family: 'Helvetica',  sans-serif;
}
`;
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Global />
			<App />
		</BrowserRouter>
	</Provider>,

	document.getElementById("root")
);
