import styled from "styled-components";

export const StyledCart = styled.div`
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background-color: var(--color-grey-1);
    height: max-content;
    width: max-content;
    max-width: 100%;
    margin: 0 auto;

    &>div:nth-child(1) {
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        padding: 1.25rem;
        background-color: var(--color-primary-1);
        
        &>h2 {
            color: white;
        }
    }
    &>div:nth-child(2) {
        padding: 1.25rem 0 1.25rem 0.625rem;
        &>ul {
            padding-right: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            max-height: 17.5rem;
            overflow: auto;
        }
    }
`;