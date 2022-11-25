import { CartTotal } from "../CartTotal";
import { StyledCart } from "./style";

export const Cart = ({ children }) => {
    return (
        <StyledCart>
            <div>
                <h2 className="font_title-3">
                    Carrinho de compras
                </h2>
            </div>
            <div>
                <ul>
                    {children}
                </ul>
            </div>
            <CartTotal
                value={40}
            />
        </StyledCart>
    );
};