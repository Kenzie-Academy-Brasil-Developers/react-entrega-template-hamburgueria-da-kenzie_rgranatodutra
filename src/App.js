import { Button } from "./styles/Button";
import { GlobalStyle } from "./styles/Global";
import { TypographyStyle } from "./styles/Typography";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <TypographyStyle />
      
      <Header />
    </>
  );
}

export default App;