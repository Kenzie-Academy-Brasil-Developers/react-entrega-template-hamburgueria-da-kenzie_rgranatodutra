import { StyledInputSearch } from "./style";
import { Button } from "../../styles/Button";

export const InputSearch = () => {
    return (
        <StyledInputSearch>
            <input
                type="text"
                placeholder="Digitar Pesquisa"
                className="font_body"
            />
            <Button
                type="submit"
                size="medium"
            >
                Pesquisar
            </Button>
        </StyledInputSearch>
    );
};