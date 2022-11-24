import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;
        list-style: none;
        outline: none;
    }
    
    :root {
        --color-primary-1: #27ae60;
        --color-primary-2: #93d7af;
        --color-secondary: #EB5757;

        --color-grey-4: #333333;
        --color-grey-3: #828282;
        --color-grey-2: #e0e0e0;
        --color-grey-1: #f5f5f5;

        --color-negative: #e60000;
        --color-warning: #ffcd07;
        --color-sucess: #168821;
        --color-info: #155bcb;
    }
`;