"use client";
import styled from "styled-components";


export const ContainerImage = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 4px;

    label {
        position: relative;
        width: 200px;
        height: 200px;
        border: 1px dashed black;
        cursor: pointer;
        border-radius: 8px;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    span {
        width: 200px;
        text-align: center;
        color: gray;
        font-size: 0.875rem;
    }


    input {
        display: none;
    }
`

export const ImageBox = styled.div`
    width: 200px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }
`