import { CartTotal } from "../CartTotal";
import { StyledCart } from "./style";
import { CartCard } from "../CartCard";

export const Cart = ({ products, setProducts }) => {

    const cartPrices = products.map(item => item.price * item.ammout);
    const totalValue = cartPrices.length > 0 ? cartPrices.reduce((a, b) => a + b) : 0;

    return (
        <StyledCart>
            <div>
                <h2 className="font_title-3">
                    Carrinho de compras
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