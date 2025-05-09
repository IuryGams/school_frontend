"use client";

import styled from "styled-components";
import { BaseItemStyle } from "../sibebar/styled";

export const UserProfile = styled.footer`
  display: grid;
  grid-template-columns: 20% 55% 25%;
  column-gap: 8px;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "image name icon"
    "image role icon";
  padding: 8px;
  font-size: 16px;
  white-space: nowrap;
  position: relative;

  &:hover {
    cursor: pointer;
    background-color: #f2f2f2;
    border-radius: 8px;
  }

  img {
    grid-area: image;
    border-radius: 8px;
    aspect-ratio: 1 / 1;
    align-self: center;
    justify-self: center;
  }

  b,
  span {
    max-width: 110px;
  }

  b {
    grid-area: name;
    font-size: 0.875em;
    font-weight: 600;
    color: #757575;
    overflow: hidden;
    align-self: end;
    justify-self: start;
    text-overflow: ellipsis;
  }

  span {
    grid-area: role;
    font-size: 0.75em;
    font-weight: 400;
    color: #757575;
  }

  div {
    grid-area: icon;
    align-self: center;
    justify-self: center;
  }
`;

export const ProfileOptions = styled.ul`
  position: absolute;
  left: calc(100% + 24px);
  bottom: -20px; /* Um pouquinho abaixo do profile */
  width: clamp(200px, 20vw, 300px);
  background-color: #fff;
  padding: 12px 10px;

  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  border-radius: 0 6px 6px 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  li {
    &:first-child {
      border-top: none;
    }

    a {
      ${BaseItemStyle}
      font-size: 0.975em;
      border-radius: 0 0 6px 6px;
    }
  }
`;