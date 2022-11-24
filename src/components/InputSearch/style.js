import styled from "styled-components";

export const StyledInputSearch = styled.form`
    box-sizing: border-box;
    padding: 0.625rem;
    width: 100%;
    max-width: 18.75rem;

    background-color: white;
    border: 2px solid var(--color-grey-2);
    border-radius: 0.5rem;

    &>input {
        width: calc(100% - 6.25rem);
    }
    
    &>input,
    &>input::placeholder {
        color: var(--color-grey-2);
    }

    &:focus-within {
        border: 2px solid ;
    }
    
    &:focus-within > input,
    &:focus-within > input::placeholder {
        color: var(--color-grey-3);
    }
`;