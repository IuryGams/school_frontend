"use client";
import styled, { css } from "styled-components";

export const Layout = styled.div`
  ${({ theme }) => css`
    display: grid;
    height: 100%;
    max-height: 100dvh;
    grid-template-columns: auto 1fr;
    grid-template-rows: 64px 1fr;
    grid-template-areas:
      "aside header"
      "aside content";
      /* "aside footer"; */

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
