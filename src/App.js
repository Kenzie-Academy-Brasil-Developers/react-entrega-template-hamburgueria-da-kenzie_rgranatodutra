import { Button } from "./styles/Button";
import { GlobalStyle } from "./styles/Global";
import { TypographyStyle } from "./styles/Typography";
import { InputSearch } from "./components/InputSearch";

function App() {
  return (
    <>
      <GlobalStyle />
      <TypographyStyle />
      
      <Button 
      type="secondary" 
      size="medium"
      className="font_body-bold">
        Teste
      </Button>
      <InputSearch />
    </>
  );
}

export default App;