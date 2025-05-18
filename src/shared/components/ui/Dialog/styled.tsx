"use client";

import styled, { css } from "styled-components";

export const Overlay = styled.dialog`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: ${theme.layers.overlay};

    width: clamp(500px, 50dvw, 1200px);
    background-color: white;
    padding-bottom: 1rem;
    overflow: hidden;
    border-radius: 1rem;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    &::backdrop {
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(5px);
    }

    &:not([open]) {
      display: none;
    }
  `}
`;


export const DialogHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin-bottom: 2rem;
  padding: 1rem;

  background-color: #4d44b5;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    padding: 0.25rem;
    transition: 0.2s ease;
    color: white;

    &:hover {
      color: #4d44b5;
      background-color: white;
    }
  }
`;

export const DialogContent = styled.main`
  margin: 1rem 0;
  padding-inline: 2rem;
`;
