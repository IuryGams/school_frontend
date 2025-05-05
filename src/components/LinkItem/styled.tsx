"use client";
import Link from "next/link";
import styled from "styled-components";
import { BaseItemStyle } from "../sibebar/styled";

export const StyledLink = styled(Link)`
    ${BaseItemStyle}
    position: relative;

    &[data-collapsed="true"] {
    justify-content: center;
  }

  &:hover {
    span {
        top: 50%;
        opacity: 1;
    }
  }
`