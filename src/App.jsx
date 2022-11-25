import { StyledMain } from "./styles/main.js";
import { GlobalStyle } from "./styles/Global";
import { TypographyStyle } from "./styles/Typography";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { ProductsList } from "./styles/ProductsList";
import { Cart } from "./components/Cart/index.jsx";
import { useEffect, useState } from "react";
import { api } from "./scripts/api.js";
import { ResultsHeader } from "./components/ResultsHeader/index.jsx";
import { Container } from "./styles/container.js";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [currentSearching, setCurrentSearching] = useState('');

  useEffect(() => {
    async function getProducts() {
      try {
        const requisition = await api.get('products');
        setProducts(requisition.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    console.log(filteredProducts)
  }, [filteredProducts])


  return (
    <>
      <GlobalStyle />
      <TypographyStyle />
      <Header
        products={products}
        setFilteredProducts={setFilteredProducts}
        setCurrentSearching={setCurrentSearching}
      />
      <StyledMain >
        {
          !currentSearching ?
            (
              <ProductsList>
                {
                  products.map((item) => {
                    return <ProductCard
                      product={item}
                      image={item.img}
                      name={item.name}
                      category={item.category}
                      price={item.price}
                      key={item.id}
                      id={item.id}
                      cart={cartProducts}
                      setCart={setCartProducts}
                    />
                  })
                }
              </ProductsList>
            )
            :
            (
              <Container>
                <ResultsHeader text={currentSearching} setCurrentSearching={setCurrentSearching} />
                <ProductsList containHeader>
                  {
                    filteredProducts.length > 0 ?
                      (
                        filteredProducts.map((item) => {
                          return <ProductCard
                            image={item.img}
                            name={item.name}
                            category={item.category}
                            price={item.price}
                            key={item.id}
                            id={item.id}
                            cart={cartProducts}
                            setCart={setCartProducts}
                          />
                        })
                      )
                      :
                      (
                        <div> Nada encontrado </div>
                      )
                  }
                </ProductsList>
              </Container>
            )
        }

        <Cart
          products={cartProducts}
          setProducts={setCartProducts}
        />
      </StyledMain>
    </>
  );
}

export default App;