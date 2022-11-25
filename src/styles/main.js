import styled from "styled-components";

export const StyledMain = styled.main`
    box-sizing: border-box;
    width: 100%;
    max-width: 85.625rem;
    padding: 0 1rem;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;

    @media (max-width: 1039px) {
        gap: 4rem;
    }

    @media (min-width: 1040px) {
        gap: 0.5rem;
        padding: 0;
        flex-direction: row;
        justify-content: space-between;
    }
`;