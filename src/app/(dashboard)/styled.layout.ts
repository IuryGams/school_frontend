"use client";
import styled, { css } from "styled-components";

export const Layout = styled.div`
  ${({ theme }) => css`
    display: grid;
    height: 100%;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "aside header"
      "aside content"
      "aside footer";

    & .layout_footer {
      grid-area: footer;
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 1rem;
      padding: 0.5rem;
      font-size: 0.775rem;
      color: ${theme.colors.light.textPrimary};
    }
  `}
`;
