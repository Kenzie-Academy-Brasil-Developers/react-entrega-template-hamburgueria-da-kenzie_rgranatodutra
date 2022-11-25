import { createGlobalStyle } from "styled-components";

export const TypographyStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    body {
        font-family: 'Inter', sans-serif;
    }

    .font_title-1 {
        font-size: 1.625rem;
        font-weight: 700;
    }
    .font_title-2 {
        font-size: 1.375rem;
        font-weight: 700;
    }
    .font_title-3 {
        font-size: 1.125rem;
        font-weight: 700;
    }
    .font_title-4 {
        font-size: 0.875rem;
        font-weight: 700;
    }
    .font_headline {
        font-size: 1rem;
        font-weight: 400;
    }
    .font_body {
        font-size: 0.875rem;
        font-weight: 400;
    }
    .font_body-bold {
        font-size: 0.875rem;
        font-weight: 600;
    }
    .font_caption {
        font-size: 0.75rem;
        font-weight: 500;
    }
`;