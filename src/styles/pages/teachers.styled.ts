"use client";
import styled from "styled-components";
import { BaseMain } from "./generic.styled";

export const TeacherMainContent = styled(BaseMain)``;

export const HeaderTeacher = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;

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
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;
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

    &::placeholder{
        color: #A098AE;
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
        background-color: #4D44B5;
        color: white;
        border: 1px solid #4D44B5;
        transition: 0.2s ease-in;
        font-size: 1rem;

        &:hover {
            background-color: white;
            color: #4D44B5;
        }
        
    }
`