"use client";
import { createGlobalStyle } from "styled-components";


const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        list-style-type: none;
        outline: none;
    }

    body {
        background-color: ${({ theme }) => theme.colors.light.background};
     }
`

export default GlobalStyled