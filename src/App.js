import { GlobalStyle } from "./styles/Global";
import { TypographyStyle } from "./styles/Typography";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";

function App() {
  return (
    <>
      <GlobalStyle />
      <TypographyStyle />

      <Header />
      <ProductCard />
    </>
  );
}

export default App;