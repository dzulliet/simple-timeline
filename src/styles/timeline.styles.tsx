import styled, { css } from "styled-components";
import type { Color } from "./theme.ts";

export const Wrapper = styled.div<{ isError?: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: ${({ theme }) => theme.border.solid3};
  border-top-width: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${({ theme }) => theme.color.freshAir50};
  color: ${({ theme }) => theme.color.celeste800};
  padding: 2px 2px 2px 0;

  ${({ isError, theme }) =>
    isError &&
    css`
      justify-content: center;
      align-items: center;
      font-weight: bold;
      background-color: ${theme.color.peachPuff100};
      color: ${theme.color.peachPuff600};

      #icon {
        font-size: xx-large;
      }
    `}
`;

export const Scrollable = styled.div`
  position: relative;

  display: block;
  width: calc(100% - 1rem);
  height: 560px;
  overflow-y: scroll;
  margin: 0 0 0 1rem;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.celeste600};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.color.brilliantLavender100};
  }
  &::-webkit-scrollbar-track {
    padding: 20px;
  }
`;

export const HourRow = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 60px; // pixel per minute
  grid-auto-flow: row;
  grid-template-areas: "hour slot";
`;

export const Hour = styled.div`
  grid-area: hour;
  position: relative;
  padding-right: 8px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 25%;
    left: 75%;
    border-top: ${({ theme }) => theme.border.solid1};
  }
`;
export const Slot = styled.div`
  grid-area: slot;
  border-top: ${({ theme }) => theme.border.solid1};
  border-left: ${({ theme }) => theme.border.solid1};
`;

const SLOT_OFFSET = "55px";
export const Event = styled.div<{
  offsetX: number;
  offsetY: number;
  columnCount: number;
  duration: number;
  color: Color;
}>`
  position: absolute;
  height: ${({ duration }) => css`max(${duration}px, 10px)`};
  width: ${({ columnCount }) => css`calc((100% - ${SLOT_OFFSET})/${columnCount})
  `};

  top: ${({ offsetY }) => `${offsetY}px`};
  left: ${({ offsetX, columnCount }) =>
    css`calc(${SLOT_OFFSET} + ${offsetX} * ((100% - ${SLOT_OFFSET})/${columnCount}))`};

  border-radius: 6px;
  background-color: ${({ theme, color }) => theme.color[color]};
  font-size: ${({ duration }) => css`min(${0.75 * duration}px, 0.9rem)`};
  padding: 0 4px;

  span {
    min-height: 10px;
    max-height: min(100%, 1.4rem);
    display: flex;
    align-items: center;
  }
`;
