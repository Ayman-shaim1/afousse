import GlobalStyle from "./GlobalStyle";
import { Header } from "./components";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <h1>hello world</h1>
      <h1 className="title">hello world</h1>
    </>
  );
};

export default App;
