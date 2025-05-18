"use client";
import { HTMLAttributes } from "react";
import styled from "styled-components";


interface TitleSectionProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    title: string;
}

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.875rem;
    font-size: 1.125rem;
`

export default function TitleSection({children, title, ...rest}: TitleSectionProps) {
    return (
        <Title {...rest}>
            <h3>{title}</h3>
            {children}
        </Title>
    )
}