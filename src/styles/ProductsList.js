import styled from "styled-components";

export const ProductsList = styled.ul`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    overflow: auto;
    padding: 1rem;
    gap: 1.25rem;

    @media (min-width: 1040px) {
        width: 64%;
        max-width: 62rem;
        row-gap: 0.75rem;
        flex-wrap: wrap;
    }
`;