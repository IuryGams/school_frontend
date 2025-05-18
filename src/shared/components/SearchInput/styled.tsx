"use client";

import styled, { css } from "styled-components";

export const ContainerSearch = styled.div`
  ${({ theme }) => css`
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      background-color: white;
      gap: 0.1rem;
      font-size: 0.75rem;
      line-height: calc(1 / 0.75);
      border-radius: calc(infinity * 1px);;
      border-style: solid;
      border-width: 1.5px;
      border-color: #A7A9AA;  //${theme.colors.light.textPrimary};
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      visibility: visible;

      & > input {
        width: 200px; /* Define a largura como 200px */
        padding: 0.5rem; /* Padding de 8px em todos os lados */
        background: transparent; /* Fundo transparente */
        outline: none; /* Remove a borda de foco */
        border: none;
      }

      & > i {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          color: ${theme.colors.light.textPrimary};
        }
      }
    }

    display: none;
  `}
`;
