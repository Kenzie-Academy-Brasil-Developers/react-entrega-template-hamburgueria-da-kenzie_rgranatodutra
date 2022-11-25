import { Button } from "../../styles/Button";
import { StyledCartTotal } from "./style";
import { treatPrice } from "../../scripts/treatPrice";

export const CartTotal = ({ value, setCart }) => {

    function handleClick() {
        setCart([])
    }

    return (
        <StyledCartTotal>
            <div className="font_body-bold">
                <span>
                    Total
                </span>
                <span>
                    {treatPrice(value)}
                </span>
            </div>
            <Button
                styleType="secondary"
                size="default"
                onClick={handleClick}
            >
                Remover Todos
            </Button>
        </StyledCartTotal>
    )
}