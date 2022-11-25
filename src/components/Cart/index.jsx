import { CartTotal } from "../CartTotal";
import { StyledCart } from "./style";
import { CartCard } from "../CartCard";

export const Cart = ({ products, setProducts }) => {

    const cartPrices = products.map(item => item.price * item.ammout);
    const cartAmmouts = products.map(item => item.ammout)
    const totalValue = cartPrices.length > 0 ? cartPrices.reduce((a, b) => a + b) : 0;
    const totalAmmout = cartAmmouts.length > 0 ? `(${cartAmmouts.reduce((a, b) => a + b)})` : '';

    return (
        <StyledCart>
            <div>
                <h2 className="font_title-3">
                    Carrinho de compras {totalAmmout}
                </h2>
            </div>
            {
                products.length > 0 ?
                    (<>
                        <div>
                            <ul>
                                {
                                    products.map((item) => {
                                        return <CartCard
                                            image={item.img}
                                            name={item.name}
                                            category={item.category}
                                            id={item.id}
                                            key={item.id}
                                            ammout={item.ammout}
                                            cart={products}
                                            setCart={setProducts}
                                        />
                                    })
                                }
                            </ul>
                        </div>
                        <CartTotal
                            value={totalValue}
                            setCart={setProducts}
                        />
                    </>
                    )
                    :
                    (
                        <div className="cart_no-items">
                            <h2 className="font_title-3">
                                Sua sacola está vazia
                            </h2>
                            <span className="font_body">
                                Adicione itens
                            </span>
                        </div>
                    )
            }

        </StyledCart>
    );
};