"use client";
import styled from "styled-components";



export const StyledLayout = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: calc(24px + 40px + 24px) 1fr;
    grid-template-areas: 
    "aside header"
    "aside content";
    overflow: hidden;
`