import { Button } from "../../styles/Button";
import { StyledResults } from "./style";

export const ResultsHeader = ({ text }) => {
    return (
        <StyledResults>
            <span>
                Resultados para
                <span>
                    {text}
                </span>
            </span>
            <Button
                size="medium"
                styleType="default"
            >
                Limpar busca
            </Button>
        </StyledResults>
    )
}