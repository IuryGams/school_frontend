"use client";

import styled from "styled-components";

export const MessagesSection = styled.section`
  grid-area: messages;
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
`;

export const ContainerMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-inline: 0.5rem;
  overflow-y: auto;
  height: calc(100% - 28px - 25px);
  flex: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RecentProfileMessage = styled.div`
  display: flex;
  gap: 4px;
`;

export const UserImage = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  background-color: green;
  border-radius: 50%;

  img {
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const DetailsMessage = styled.div`
  display: flex;
  flex-direction: column;
  height: 75px;
  width: calc(100% - 58px);
  gap: 0.375rem;
`;

export const UserData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > b {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    font-size: 0.875rem;
    white-space: nowrap;
    color: gray;
  }
`;

export const TextNotification = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    width: 90%;
    font-size: 0.855rem;
    color: gray;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    max-height: 2.375rem;
  }
`;

export const NumberNotification = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #c3ebfa;
`;
