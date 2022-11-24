import styled from "styled-components";

export const Button = styled.button`
    background-color: ${(props) => props.styleType === 'secondary' ? 'var(--color-grey-1)' : 'var(--color-primary-1)'};
    color: ${(props) => props.styleType === 'secondary' ? 'var(--color-grey-3)' : '#FFFFFF'};

    padding: ${(props) => props.size === 'medium' ? '0.625rem 1.25rem' : '1.25rem'};
    line-height: 100%;
    border-radius: 0.5rem;

    &:hover {
        background-color: ${(props) => props.styleType === 'secondary' ? 'var(--color-grey-3)' : 'var(--color-primary-2)'};
        color: ${(props) => props.styleType === 'secondary' ? 'var(--color-grey-1)' : '#FFFFFF'};
    }

    &:active {
        animation: animation_buttonClick 500ms ease;
    }

    @keyframes animation_buttonClick {
        0%{
            transform: scale(1.0);
        }
        50% {
            transform: scale(0.95);
        }
        100% {
            transform: scale(1.0);
        }
    }
`;
