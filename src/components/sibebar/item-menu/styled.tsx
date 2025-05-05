"use client";

import Link from "next/link";
import styled from "styled-components";
import { BaseItemStyle, ToolTip } from "../styled";

export const StyledItemMenu = styled.li`
  color: black;
`;

export const Title = styled.h3`
  color: #757575;
  font-weight: 400;
  font-size: 0.75em;
  margin-bottom: 2px;
  padding-inline: 12px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    position: relative;
    width: 100%;
  }
`;

export const LinkItem = styled(Link)`
  ${BaseItemStyle}

  &[data-collapsed="true"] {
    justify-content: center;
  }

  &:hover {
    span {
        opacity: 1;
    }
  }
`;

export const StyledToolTip = styled.span`
    ${ToolTip}
`;
