import { Button } from "../../styles/Button"
import { StyledCartTotal } from "./style"

export const CartTotal = ({ value }) => {
    return (
        <StyledCartTotal>
            <div className="font_body-bold">
                <span>
                    Total
                </span>
                <span>
                    R$ {value.toFixed(2)}
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