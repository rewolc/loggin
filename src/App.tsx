import { Routes, Route } from "react-router";

import LoginPage from "./pages/login/login";
import EnteredPage from "./pages/entered/entered";
import RegisterPage from "./pages/register/register";

import { AppWraper } from "./styled-components/App-styled";
import { HeaderText } from "./styled-components/common-styles";

const App: React.FC = () => {
  return (
    <AppWraper>
      <HeaderText> &#9776;Loggin.</HeaderText>
      <Routes>
        <Route path="/" element={<LoginPage key={"login"} />} />
        <Route path="/entered" element={<EnteredPage key={"entered"} />} />
        <Route path="/register" element={<RegisterPage key={"register"} />} />
        <Route path="/:user" element={<EnteredPage key={"user"} />} />
      </Routes>
    </AppWraper>
  );
};

export default App;




