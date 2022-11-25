import styled from "styled-components";

export const StyledMain = styled.main`
    box-sizing: border-box;
    width: 98%;
    max-width: 85.625rem;
    padding: 0 1rem;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 4.0625rem;

    @media (min-width: 1040px) {
        flex-direction: row;
    }
`;