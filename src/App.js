import GlobalStyle from "./GlobalStyle";
import { Header } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";
const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/Home' element={<HomePage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
