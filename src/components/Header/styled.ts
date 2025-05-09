"use client";
import styled, { css } from "styled-components";

export const Container = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

export const DetailsPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${({ theme }) => theme.colors.light.textPrimary};
`;

export const ActionsButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.small};
    color: ${theme.colors.light.textPrimary};
    font-size: ${theme.font.sizes.medium};

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background: ${theme.colors.light.textPrimary};
      border-radius: ${theme.border.radiusMedium};

      &:hover {
        background-color: ${theme.colors.light.primary};
      }
      
      padding: ${theme.spacings.xsmall};

      button {
        background: transparent;
        border-color: transparent;
      }
    }
  `}
`;
