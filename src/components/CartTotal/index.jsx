import { Button } from "../../styles/Button";
import { StyledCartTotal } from "./style";
import { treatPrice } from "../../scripts/treatPrice";

export const CartTotal = ({ value }) => {

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
            >
                Remover Todos
            </Button>
        </StyledCartTotal>
    )
}