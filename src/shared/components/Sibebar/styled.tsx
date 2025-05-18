"use client";

import styled, { css } from "styled-components";

export const StyledSideBar = styled.aside`
  grid-area: aside;
  width: 256px; // 92px 256px
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
  font-size: 16px;
  transition: width 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 24px;

  &[data-collapsed="true"] {
    width: 92px;
  }

  hr {
    border-radius: 6px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;

    img {
      border-radius: 50%;
      object-fit: cover;
      aspect-ratio: 4 / 3;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    max-width: calc(256px - 24px);
    width: 100%;
    flex: 1;
    gap: 8px;
    color: ${({ theme }) => theme.colors.light.textPrimary};

    &[data-collapsed="true"] {
      overflow: visible;
    }
  }
`;

export const TriggerSideBar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 28px;
  height: 28px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  cursor: pointer;
  top: 50%;
  left: calc(100% + 10px);
  transform: translateY(-50%);

  svg {
    transition: transform 0.2s ease;

    &[data-collapsed="true"] {
      transform: rotate(180deg);
    }
  }
`;

export const BaseItemStyle = css`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  font-size: 0.875em;
  border-radius: 8px;
  color: inherit;
  cursor: pointer;
  width: 100%;
  font-family: inherit;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ToolTip = css`
  position: absolute;
  left: calc(100% + 6px);
  top: 30%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 6px 12px;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity, top 0.2s;
  font-size: 0.875rem;


  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 100%;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid black;
  }
`;
