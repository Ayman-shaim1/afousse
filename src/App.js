import GlobalStyle from "./GlobalStyle";
import { Header } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";
import { Container } from "./components/styles/Container.styled";
const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <main>
        <Container>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/Home' element={<HomePage />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
};

export default App;
