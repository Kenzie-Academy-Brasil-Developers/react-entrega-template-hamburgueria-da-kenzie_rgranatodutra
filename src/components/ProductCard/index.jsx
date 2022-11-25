import { Button } from "../../styles/Button";
import { StyledProductCard } from "./style";
import { treatPrice } from "../../scripts/treatPrice";

export const ProductCard = ({ product, image, name, category, price, id, cart, setCart }) => {

    function handleClick() {

        let newCart = [...cart];
        let find = newCart.find(item => item.id === id);

        if (find) {
            find.ammout++
        }
        else {
            newCart.push({ ...product, ammout: 1 })
        }

        setCart(newCart);
    };

    return (
        <StyledProductCard>
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <h2>
                    {name || 'teste'}
                </h2>
                <span>
                    {category}
                </span>
                <span>
                    {treatPrice(price)}
                </span>
                <Button
                    size="medium"
                    onClick={handleClick}
                >
                    Adicionar
                </Button>
            </div>
        </StyledProductCard>
    );
};