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
    ${({theme}) => css`
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 280px;
        gap: 8px;
        position: relative;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        padding: 12px;
        border-radius: ${theme.border.radiusMedium};


        &::before {
            content: "";
            position: absolute;
            bottom: 100%;
            right: 3%;
            width: 0px;
            height: 0px;
            border-bottom: 12px solid black;
            border-right: 12px solid transparent;
            border-left: 12px solid transparent;
        }
    `}
    
`

export const NotificationItem = styled.li`
    
`