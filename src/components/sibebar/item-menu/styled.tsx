"use client"

import Link from "next/link"
import styled, { css } from "styled-components"

export const StyledItemMenu = styled.div`
    color: black;

    h3 {
        color: #757575;
        font-weight: 400;
        font-size: 12px;
    }
`

export const Title = styled.h3`
    padding-inline: 12px;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
        /* padding: 0 12px; */
        border-radius: 8px;
    }
`

const BaseItemStyle = css`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  font-size: 14px;
  width: 100%;
  border-radius: 4px;

    &:hover {
        background-color: #F2F2F2;
    }   
`;

export const LinkItem = styled(Link)`
  ${BaseItemStyle}
  color: #757575;
`;

export const DropDown = styled.div`
  ${BaseItemStyle}
  align-items: start;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  position: relative;
`;

export const DropDownLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;

    div {
        display: flex;
        align-items: center;
        gap: 12px;
    }
`

export const DropDownContent = styled.ul`

`

export const DropDownMenu = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
`