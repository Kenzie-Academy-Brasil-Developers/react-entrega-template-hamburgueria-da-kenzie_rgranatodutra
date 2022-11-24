import { Button } from "../../styles/Button";
import { StyledProductCard } from "./style";

export const ProductCard = ({ image, name, category, price }) => {
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
                    R$ {price.toFixed(2)}
                </span>
                <Button
                    size="medium"
                >
                    Adicionar
                </Button>
            </div>
        </StyledProductCard>
    );
};