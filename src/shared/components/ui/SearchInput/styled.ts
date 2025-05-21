"use client";
import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0  1.5rem 0 0.5rem;
  border-radius: 1rem;
  position: relative;  
  background-color: #f3f4ff;

  i {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    background: transparent;
    border: none;
    padding-block: 1em;
    font-family: inherit;

    &::-webkit-search-cancel-button {
        display: none;
    }
  }

`;


export const ButtonClear = styled.button`
    position: absolute;
    right: 1.5%;
    top: 50%;
    transform: translateY(-50%);

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`