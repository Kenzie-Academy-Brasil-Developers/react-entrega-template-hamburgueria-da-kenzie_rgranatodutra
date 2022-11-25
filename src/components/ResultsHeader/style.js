import styled from "styled-components";

export const StyledResults = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.2rem;
    width: 100%;
    max-width: 85.625rem;

    &>span>span {
        color: var(--color-grey-3);
    }
`;