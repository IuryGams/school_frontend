"use client";

import styled, { css } from "styled-components";

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: initial;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `,
};

export const Label = styled.button`
  ${({ theme }) => css`
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      z-index: ${theme.layers.alwaysOnTop};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: max-content;
    color: ${theme.colors.black};
    margin-top: ${theme.spacings.small};
    position: absolute;
    right: 0;
    z-index: ${theme.layers.alwaysOnTop};
    ${wrapperModifiers.close()}

    &[data-open="true"] {
      ${wrapperModifiers.open()}
    }
    /* &::before {
      content: "";
      position: absolute;
      border-right: 1.2rem solid transparent ;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.white};
      top: -1.2rem;
      right: 2.4rem;
    } */
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: max-content;

    ${Content}{
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};
    }
  `}
`;
