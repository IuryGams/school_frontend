"use client";

import styled from "styled-components";

export const ContainerEventCalendar = styled.section`
  grid-area: calendar;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0.75rem;
  border-radius: 0.375rem;

  /* React Calendar Styles */
  & > .react-calendar {
    width: 100% !important;
    height: 100%;
    border: none;
    font-family: "Inter", sans-serif !important;

    /* Container Title */
    & .react-calendar__navigation {
      margin-bottom: 0;

      & .react-calendar__navigation__label {
        font-family: "Inter", sans-serif !important;
        font-size: 1.125rem;
      }

      & .react-calendar__navigation__arrow {
        font-size: 1.5rem;
      }
    }

    /* Container Days */
    & .react-calendar__viewContainer {
      & button {
        border-radius: 0.175rem;
      }

      & .react-calendar__tile--now {
        background-color: #cfceff;
      }

      & .react-calendar__tile--active {
        background-color: #c3ebfa !important;
        color: black !important;
      }

      & .react-calendar__navigation__label__labelText {
        font-weight: 600;
      }
    }
  }
`;

export const ContainerEvents = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  & > .events {
    padding: 0;

    h3 {
      font-size: 1.185rem;
    }
  }
`;

export const Events = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0.5rem;

  & > div:nth-child(3n + 1) {
    background-color: #f1f0ff;
  }

  & > div:nth-child(3n + 2) {
    background-color: #fdf6d8;
  }

  & > div:nth-child(3n + 3) {
    background-color: #edf9fd;
  }
`;

export const Event = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: 15% 3px 1fr;
  gap: 8px;
  padding: 0.5rem;
  border-radius: 0.5rem;

  & > .left {
    align-self: center;
    justify-self: center;
    white-space: nowrap;
  }

  & > .separator {
    background-color: white;
    height: 100%;
    border-radius: 6px;
  }

  & > .right {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-self: center;
  }
`;
