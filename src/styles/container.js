import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    max-width: 100%;

    @media (min-width: 1040px) {
        width: calc(100% - 21.375rem);
    }
`;