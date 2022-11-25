import { Button } from "../../styles/Button";
import { StyledCartCard } from "./style";

export const CartCard = ({ id, image, name, category, ammout, cart, setCart }) => {

    function handleClickMinus() {
        let newCart = [...cart];
        let thisItem = newCart.find(item => item.id === id);

        if (thisItem.ammout === 1) {
            newCart = newCart.filter(cart => cart.id !== id);
        }
        else {
            thisItem.ammout--
        }

        setCart(newCart);
    }

    function handleClickPlus() {
        let newCart = [...cart];
        let thisItem = newCart.find(item => item.id === id);
        thisItem.ammout++
        setCart(newCart);
    }

    function handleClick() {
        let newCart = [...cart].filter(item => item.id !== id);
        setCart(newCart)
    }

    return (
        <StyledCartCard>
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <h2 className="font_title-3">
                    {ammout}x{name}
                </h2>
                <span className="font_caption"> {category} </span>
                <Button
                    styleType="secondary"
                    size="small"
                    onClick={handleClickPlus}
                >
                    +
                </Button>
                <Button
                    styleType="secondary"
                    size="small"
                    onClick={handleClickMinus}
                >
                    -
                </Button>
                <Button
                    styleType="secondary"
                    size="small"
                    onClick={handleClick}
                >
                    Canc.
                </Button>
            </div>
        </StyledCartCard>
    );
};