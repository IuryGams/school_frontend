"use client";
import styled from "styled-components";
import { BaseItemStyle } from "../../styled";

export const CollapsedDropdownWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  &:hover {
    background-color: #f2f2f2;

    ul {
        top: 0;
        opacity: 1;
        pointer-events: initial;
    }
  }
`;

export const IconButton = styled.button`
    ${BaseItemStyle}
    background: transparent;
    border-color: transparent;
    justify-content: center;
`

export const SubMenuList = styled.ul`
    position: absolute;
    left: calc(100% + 24px);
    top: -10%;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease-in;
    background: #FFF;
    border-radius: 0 8px 8px 0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    white-space: nowrap;
    padding: 8px;

    &::before {
        content: "";
        position: absolute;
        width: 24px;
        right: 100%;
        top: 0;
        height: 100%;
    }

    li {
        font-size: 0.875em;
    }
`