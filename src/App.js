import GlobalStyle from "./GlobalStyle";
import { Header } from "./components";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <h1 className="title">Hello World</h1>
    </>
  );
};

export default App;
