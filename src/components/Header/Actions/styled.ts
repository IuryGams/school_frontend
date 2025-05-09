"use client";
import styled, { css } from "styled-components";


export const Container = styled.section`
    ${({theme}) => css`
        display: flex;
        align-items: center;
        gap: ${theme.spacings.small};

        & > div {
            background-color: ${theme.colors.white};
            padding: ${theme.spacings.small};
            border-radius: 50%;
            border: 1px solid ${theme.colors.light.textSecondary};

            &:hover {
                background-color: ${theme.colors.light.textSecondary};
            }
        }


        button {
            background: transparent;
            border-color: transparent;
        }
    
    `}

`

export const BoxIcon = styled.i`
    position: relative;
    

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -25%;
        left: 60%;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        font-style: normal;
    }

`

export const NotificationBox = styled.ul`

`