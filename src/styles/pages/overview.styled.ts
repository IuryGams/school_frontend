"use client";

import styled from "styled-components";
import { BaseMain } from "./generic.styled";

export const OverviewMainContent = styled(BaseMain)`
  /* Mobile First Approach - Default for small screens */
  &.dashboard-grid {
    display: grid;
    grid-gap: 1.25rem;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-areas:
      "cards"
      "students"
      "calendar"
      "attendance"
      "messages"
      "earnings";
  }

  /* Tablet - Medium screens (768px and up) */
  @media (min-width: 768px) {
    &.dashboard-grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        "cards cards"
        "calendar students"
        "attendance attendance"
        "messages earnings";
    }
  }

  /* Desktop - Large screens (1024px and up) */
  @media (min-width: 1024px) {
    &.dashboard-grid {
      /* grid-template-columns: 320px repeat(auto-fit, minmax(200px, 1fr)) 450px; */
      grid-template-columns: minmax(320px, 1fr) repeat(auto-fit, minmax(200px, 1fr)) minmax(425px, 1fr);
      grid-template-rows: 180px minmax(350px, 1fr) 100px minmax(400px, 1fr) 1fr;
      grid-template-areas:
      "cards cards cards cards calendar"
      "students attendance attendance attendance calendar"
      "students attendance attendance attendance messages"
      "earnings earnings earnings earnings messages"
      "earnings earnings earnings earnings messages";
    }
  }
`

export const ContainerCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  grid-area: cards;

  & > div:nth-child(2n) {
    background-color: #fae27c;
  }
`;
