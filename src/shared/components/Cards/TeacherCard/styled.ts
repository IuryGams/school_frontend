"use client";

import styled from "styled-components";

export const ContainerCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 16px;
  min-height: 250px;
  background-color: white;

  & figure {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;

    img {
      object-fit: cover;
      aspect-ratio: 1;
    }
  }
`;

export const Button = styled.div`
    position: absolute;
    top: 3%;
    right: 3%;
`

export const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
