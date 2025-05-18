"use client";

import styled, { css } from "styled-components";

export const ContainerNotification = styled.div`
  display: flex;
  align-items: start;
  gap: 12px;
  padding: 1rem;
  background-color: whitesmoke;
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 4px;

    p {
      font-size: 0.875rem;
      color: ${theme.colors.light.textPrimary};
    }

    & > div {
      color: ${theme.colors.light.textSecondary};
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.75rem;

      span {
        font-size: inherit;
      }
    }
  `}
`;

export const ActionsBox = styled.div`
  display: flex;
  gap: 8px;
  align-self: center;
`;

interface ActionButtonProps {
  $color?: string;
}

export const ActionButton = styled.button<ActionButtonProps>`
  ${({ theme, $color }) => css`
    width: 32px;
    height: 32px;
    display: flex;
    border-radius: ${theme.border.radiusSmall};
    background-color: ${$color ? $color : "whitesmoke"};
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    &:hover {
      background-color: bisque;
    }
  `}
`;
