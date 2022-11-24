import styled from "styled-components";

export const StyledInputSearch = styled.form`
    padding: 0.625rem;
    width: max-content;

    border: 2px solid var(--color-grey-2);
    border-radius: 0.5rem;

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