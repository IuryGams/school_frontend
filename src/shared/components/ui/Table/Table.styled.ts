"use client";
import { BaseMain } from "@/styles/pages/generic.styled";
import styled from "styled-components";

export const TeacherMainContent = styled(BaseMain)`
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: 1rem;
`;

export const HeaderTeacher = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .left,
  .right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  & .left {
    padding: 0.75rem;
    background-color: #fff;
    border-radius: calc(infinity * 1px);

    input {
      background: transparent;
      border: none;
      width: 240px;
      font-size: clamp(0.875rem, 3vw, 1rem);
      font-family: inherit;
    }
  }

  & .right {
    & > button {
      display: flex;
      align-items: center;
      gap: 8px;
      background-color: #cfceff;
      padding: 1em;
      border-radius: calc(infinity * 1px);
      cursor: pointer;
      font-family: inherit;

      span {
        font-weight: bold;
      }
    }
  }
`;

export const ContainerCardsTeacher = styled.section`
  margin-top: 1rem;
  height: 100%;
  background-color: white;
`;

// FormTeacher

export const Form = styled.form``;

export const DivisionForm = styled.div`
  display: flex;
  gap: 2rem;
`;

export const GroupsInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
  width: 100%;
`;

export const GroupInput = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 45%;
  gap: 0.5rem;
  position: relative;

  label {
    font-weight: bolder;
    color: #303972;
  }

  // TODO: create effect for input
  /* span {
    position: absolute;
    width: 100%;
    height: 5px;
    top: 100%;
    left: 0;
    background-color: red;
  } */

  input {
    padding: 0.75rem;
    border-radius: 0.5rem 0 0.5rem 0;
    border: 1px solid #c1bbeb;

    &::placeholder {
      color: #a098ae;
    }
  }
`;

export const ButtonBox = styled.div`
  margin-top: 2rem;
  text-align: right;
  width: 100%;

  button {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.725rem;
    border-radius: calc(infinity * 1px);
    padding: 0.5rem 1rem;
    font-weight: bold;
    font-family: inherit;
    background-color: #4d44b5;
    color: white;
    border: 1px solid #4d44b5;
    transition: 0.2s ease-in;
    font-size: 1rem;

    &:hover {
      background-color: white;
      color: #4d44b5;
    }
  }
`;

// Table ---------------------------------

export const EmptyData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  font-weight: bold;
  padding-block: 3rem;
`;

export const ContainerTable = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  padding: 0.875rem;
  border-radius: 1rem;
  padding-inline: 0.875rem;
  background-color: white;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  height: fit-content;
  border-collapse: collapse;
  padding: 2rem;

  & > thead {
    text-align: center;
    color: #303972;
    padding: 0.75rem;

    & th {
      padding: 0.625rem;
    }
  }

  & > tbody {
    text-align: center;
    font-size: 0.875rem;

    & tr:nth-child(2n) {
      background-color: #f8fafc;
    }

    & div.profile {
      display: flex;
      padding: 0.625rem;
      gap: 0.5rem;

      & > div {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        & > strong {
          text-align: left;
          color: #303972;
          font-size: 0.875rem;
        }

        & > span {
          text-align: left;
          font-size: 0.75rem;
          color: #a098ae;
        }
      }
    }

    & div.actions {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
    }
  }

  /* Responsividade para telas pequenas */
  @media (max-width: 768px) {
    thead {
      display: none;
    }

    tbody,
    tr,
    td {
      display: block;
      width: 100%;
    }

    tr {
      margin-bottom: 1rem;
      border: 1px solid #e5e7eb;
      border-radius: 0.5rem;
      padding: 1rem;
      background: #fff;
    }

    td {
      text-align: left;
      padding: 0.5rem 0;

      &::before {
        content: attr(data-label);
        font-weight: 600;
        color: #303972;
        display: block;
        font-size: 0.75rem;
        margin-bottom: 0.25rem;
      }

      .actions {
        justify-content: flex-start;
      }
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-family: inherit;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: #f8fafc;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & > button {
    }
  }

  & > button {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
