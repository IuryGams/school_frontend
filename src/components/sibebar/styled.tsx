"use client"

import styled from "styled-components"

export const StyledSideBar = styled.aside`
    width: 256px; // 92px 256px
    height: 100dvh;
    background-color: #fff  ;
    padding: 24px;
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 24px;

    /* div {
            position: absolute;
            width: 24px;
            height: 24px;
            background-color: black;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
        } */

    hr {
        border-radius: 6px;
    }


    header {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        img {
            border-radius: 50%;
            object-fit: cover;
            aspect-ratio: 4 / 3;
        }
    }

    nav {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`