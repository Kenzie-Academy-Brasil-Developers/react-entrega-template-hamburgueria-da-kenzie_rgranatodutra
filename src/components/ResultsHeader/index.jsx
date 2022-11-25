import { Button } from "../../styles/Button";
import { StyledResults } from "./style";

export const ResultsHeader = ({ text, setCurrentSearching }) => {
    return (
        <StyledResults>
            <span className="font_title-1">
                Resultados para <span> "{text}" </span>
            </span>
            <Button
                type="button"
                size="medium"
                styleType="default"
                onClick={() => setCurrentSearching('')}
            >
                Limpar busca
            </Button>
        </StyledResults>
    )
}