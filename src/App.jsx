import { StyledMain } from "./styles/main.js";
import { GlobalStyle } from "./styles/Global";
import { TypographyStyle } from "./styles/Typography";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { ProductsList } from "./styles/ProductsList";
import { CartCard } from "./components/CartCard";

import logo from "./assets/img/logo.svg"
import { Cart } from "./components/Cart/index.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <TypographyStyle />

      <Header />
      <StyledMain >
        <ProductsList>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductsList>
        <Cart>
          <CartCard name="teste" image={logo} category="teste" />
          <CartCard name="teste" image={logo} category="teste" />
          <CartCard name="teste" image={logo} category="teste" />
          <CartCard name="teste" image={logo} category="teste" />
          <CartCard name="teste" image={logo} category="teste" />
          <CartCard name="teste" image={logo} category="teste" />
        </Cart>


      </StyledMain>
    </>
  );
}

export default App;