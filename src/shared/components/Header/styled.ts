"use client";
import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  padding: 0.75rem 1.5rem;
`;

export const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BottomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h1 {
    font-size: 1.25rem;
    color: gray;
  }
`;
