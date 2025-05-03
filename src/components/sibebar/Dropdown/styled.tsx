"use client";

import styled from "styled-components";
import { BaseItemStyle } from "../styled";
import { LinkItem } from "../item-menu/styled";

export const DropDown = styled.div``;

export const DropDownHeader = styled.button`
  ${BaseItemStyle}
  background: transparent;
  border: none;
  justify-content: space-between;

  &[data-open="true"] {
    background-color: #f9f9f9;
  }

  svg {
    transform: rotate(0deg);
    transition: transform 0.2s ease;

    &[data-open="true"] {
      transform: rotate(180deg);
    }
  }
`;

export const DropDownLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const SubMenuItem = styled(LinkItem)`
  ${BaseItemStyle}
  position: relative;
  width: 100%;
  margin-left: 36px;
  padding-inline: 8px;
  font-size: 0.75em;

  &::before {
    content: "";
    position: absolute;
    left: -18px;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: #f2f2f2;
    border-radius: 4px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -18px;
    transform: translateY(-50%);
    width: 13px;
    height: 8px;
    border-bottom-left-radius: 8px;
    border-width: 2px;
    border-style: solid;
    border-bottom-color: #f2f2f2;
    border-left-color: #f2f2f2;
    border-right-color: transparent;
    border-top-color: transparent;
  }
`;

export const DropDownContent = styled.ul`
  opacity: 0;
  max-height: 0;
  transition: max-height 0.3s ease;
  pointer-events: none;

  &[data-open="true"] {
    max-height: 500px;
    pointer-events: initial;
    opacity: 1;
  }

  li:last-child ${SubMenuItem}::before {
    height: 50%;
  }
`;
