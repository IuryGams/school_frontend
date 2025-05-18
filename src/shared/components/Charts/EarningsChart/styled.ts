"use client";

import styled from "styled-components";

export const ContainerChart = styled.section`
  grid-area: earnings;
  background-color: white;
  border-radius: 1rem;
`;

export const CustomToolTip = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #fff;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  min-width: 100px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  & > strong {
    font-size: 1.125rem;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1rem;

    .blue {
      background-color: #C3EBFA;
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }

    .purple {
      background-color: #CFCEFF;
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }

    & > b {
      color: ${({ theme }) => theme.colors.light.textPrimary};
    }
  }
`;

export const Legends = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & > div {
    display: flex;
    align-items: center;
    
    gap: 0.5rem;
    font-size: 0.875rem;

    span {
      display: block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }

    b {
      font-weight: 400;
    }

    span.blue {
      background-color: #C3EBFA;
    }
    span.purple {
      background-color: #CFCEFF;
    }
  }
`;