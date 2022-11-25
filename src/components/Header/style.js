import styled from "styled-components";

export const StyledHeader = styled.header`

    background-color: var(--color-grey-1);
    height: 8.75rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &>div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.875rem;
        padding: 0 1rem;
    }

    @media (min-width: 48rem) {
        &>div{
            width: 98%;
            max-width: 85.625rem;
            height: 5rem;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`;