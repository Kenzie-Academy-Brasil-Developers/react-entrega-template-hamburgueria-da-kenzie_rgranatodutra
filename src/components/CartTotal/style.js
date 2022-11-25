import styled from "styled-components";

export const StyledCartTotal = styled.div`
    padding: 0.875rem 0.625rem 1.25rem 0.625rem;
    display: flex;
    flex-direction: column;
    gap: 1.375rem;

    border-top: 2px solid var(--color-grey-2);

    &>div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &>span:nth-child(1) {
            color: var(--color-grey-4);
        }
        &>span:nth-child(2) {
            color: var(--color-grey-3);
        }
    }
`;