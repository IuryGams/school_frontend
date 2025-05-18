"use client";

import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    background-color: #CFCEFF;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &:nth-child(2n) {
        background-color: #fae27c;
    }
`

export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Label = styled.div`
    border-radius: calc(infinity * 1px);
    background-color: white;
    padding: 0.375rem;
    font-size: 0.75rem;
    color: seagreen;
    font-weight: bold;
`

export const BottomCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > b {
        font-size: 2rem;
    }

    & > span {
        font-size: 1rem;
    }
`