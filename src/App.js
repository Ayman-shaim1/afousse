import GlobalStyle from "./GlobalStyle";
import { Header } from "./components/ui";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage, ShopPage } from "./pages";
import { Container } from "./components/styles/Container.styled";


const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <main>
        <Container>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/Home" element={<HomePage />} />
            <Route exact path="/Login" element={<LoginPage />} />
            <Route exact path="/Register" element={<RegisterPage />} />
            <Route exact path="/Shop" element={<ShopPage />} />

          </Routes>
        </Container>
      </main>
    </Router>
  );
};

export default App;
