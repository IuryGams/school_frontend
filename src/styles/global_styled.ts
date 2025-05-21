"use client";
import { createGlobalStyle, css } from "styled-components";

const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        list-style-type: none;
        outline: none;

        button {
          border: transparent;
          background: transparent;
        }
    }

    body {
        ${({ theme }) => css`
          background-color: #F3F4FF; // ${theme.colors.light.background};
          min-height: 100dvh;
        `}
     }
`;

export default GlobalStyled;
