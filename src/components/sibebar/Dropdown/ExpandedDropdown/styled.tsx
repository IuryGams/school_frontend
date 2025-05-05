"use client";

import styled from "styled-components";
import { BaseItemStyle } from "../../styled"; 
import { LinkItem } from "../../item-menu/styled";

export const StyledDropdown = styled.div``;

export const DropdownHeader = styled.button`
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

export const DropdownLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;

  &[data-collapsed="true"] {
    justify-content: center;
  }
`;

export const SubMenuItem = styled(LinkItem)`
  ${BaseItemStyle}
  position: relative;
  width: calc(100% - 32px);
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

export const DropdownList = styled.ul`
  margin-top: 2px;
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

export const FloatingMenu = styled.ul`
position: absolute;
  left: 100%;
  top: 0;
  min-width: 200px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 8px;
  list-style: none;
  z-index: 1000;
  margin: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;

  // Adicione uma setinha
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 12px;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid white;
  }
`;

export const FloatingMenuItem = styled(LinkItem)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 4px;
  color: #f2f2f2;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #f2f2f2;
  }
`;


export const StyledToolTipMenu = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  
`
