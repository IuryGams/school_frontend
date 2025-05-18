"use client";

import styled, { css } from "styled-components";


export const ContainerWidget = styled.div`
    ${({theme}) => css`
        width: 448px;
        border-radius: ${theme.border.radiusMedium};
        overflow: hidden;
        background-color: ${theme.colors.white};
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
        
    `}
`

export const HeaderWidget = styled.header`
    ${({theme}) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 8px;

        & button {
            font-weight: bold;
        }
    `}
`


export const SectionWidget = styled.section`
    border-top: 2px solid #e5e7eb;

    & > div:first-child {
        border-top: none;
    }
    & > div:last-child {
        border-bottom: none;
    }

    & .title {
        padding: 4px 10px;
        font-weight: 500;
        font-size: 0.875rem;
        background-color: #c1c1c1;
    }
`