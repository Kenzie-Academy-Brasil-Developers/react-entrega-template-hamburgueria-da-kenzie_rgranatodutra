import styled from "styled-components";

export const StyledProductCard = styled.li`
    border: 1px solid black;
    min-width: 18.75rem;
    height: max-content;
    border: 2px solid var(--color-grey-1);
    border-radius: 0.5rem;
    transition: 300ms ease;

    &:hover {
        border: 2px solid var(--color-grey-3);
        transform: scale(1.1);
    }

    &>div:nth-child(1) {
        background-color: var(--color-grey-1);
        width: 100%;
        height: 9.375rem;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
    }

    &>div:nth-child(2) {
        box-sizing: border-box;
        width: 100%;
        height: 12.5rem;
        padding: 1.625rem 1.25rem 1.375rem 1.25rem;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
`;