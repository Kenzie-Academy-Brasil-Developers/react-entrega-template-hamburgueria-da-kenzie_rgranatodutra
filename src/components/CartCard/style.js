import styled from "styled-components";

export const StyledCartCard = styled.li`
    box-sizing: border-box;
    width: 21.375rem;
    max-width: 100%;
    height: max-content;
    display: flex;
    position: relative;
    transition: 300ms ease;

    &>div:nth-child(1) {
        box-sizing: border-box;
        border-radius: 0.5rem;
        width: 5rem;
        height: 5rem;
        padding: 0.3125rem;
        background-color: var(--color-grey-2);
        display: flex;
        align-items: center;
        justify-content: center;

        &>img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &>div:nth-child(2) {
        padding: 0.3125rem 0.625rem;
        &>h2{
            position: relative;
            margin-bottom: 0.625rem;
            color: var(--color-grey-4);
            display: flex;
            align-items: center;
            &>input {
                box-sizing: border-box;
                margin-left: 0.25rem;
                background: white;
                padding: 0.25rem;
                border-radius: 0.5rem;
                width: 2rem;
             }
        }

        &>span{
            color: var(--color-grey-3);
        }
        &>button:nth-child(3){
            position: absolute;
            top: 0.3125rem;
            right: 1.5rem;
        }
        &>button:nth-child(4){
            position: absolute;
            top: 0.3125rem;
            right: 0;
        }
        &>button:nth-child(5){
            position: absolute;
            top: 2rem;
            right: 0;
        }
    }
`;