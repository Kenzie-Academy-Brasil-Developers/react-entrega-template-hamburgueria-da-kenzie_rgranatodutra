import { StyledCartCard } from "./style";

export const CartCard = ({ image, name, category }) => {
    return (
        <StyledCartCard>
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <h2 className="font_title-3"> {name} </h2>
                <span className="font_caption"> {category} </span>
                <button className="font_caption"> Remover </button>
            </div>
        </StyledCartCard>
    );
};