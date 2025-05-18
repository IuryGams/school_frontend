"use client";

import styled, { css } from "styled-components";

export const ContainerChart = styled.section`
  grid-area: students;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
`;

export const Chart = styled.div`
  position: relative;
  width: 100%;
  height: 73%;
`;

export const IconsChart = styled.div`
  width: 6.875rem;
  height: 6.875rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;

  & svg {
    width: 4.375rem;
    height: 4.375rem;
  }

  & > i.men {
    position: absolute;
    left: 0%;

    svg {
      color: #c3ebfa;
    }
  }
  & > i.woman {
    position: absolute;
    right: 0%;

    svg {
      color: #fae27c;
    }
  }
`;

export const DetailsDataChart = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  & > div:nth-child(2n) {
    div {
      background-color: #fae27c;
    }
  }
`;

export const DataChart = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    & > div {
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      background-color: #c3ebfa;
    }

    & > span {
      font-size: 0.75rem;
      color: ${theme.colors.light.textPrimary};
    }
  `}
`;
