import styled from "styled-components";

export const ProductsList = styled.ul`
    display: flex;
    flex-direction: row;
    padding: 1rem;
    gap: 1.25rem;
    
    @media (max-width: 1039px) {
        overflow-x: auto;
    }
    
    @media (min-width: 1040px) {
        padding: 1.2rem;
        width: calc(100% - 21.375rem);
        max-height: calc(100vh - 15.15rem);
        max-width: 100%;
        row-gap: 0.75rem;
        flex-wrap: wrap;
        overflow-y: auto;
    }
`;