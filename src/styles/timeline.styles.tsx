import styled, { css } from "styled-components";
import type { BaseColor } from "./theme.ts";

const SLOT_OFFSET = css`calc(0.8rem + 60px)`;
const MIN_EVENT_HEIGHT = 10;
const SCROLLBAR_WIDTH = 8;
const EVENT_GAP = 4;

export const Wrapper = styled.div<{ isError?: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;
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
  padding-left: 1rem;

  &::-webkit-scrollbar {
    width: ${SCROLLBAR_WIDTH}px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.celeste600};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.color.brilliantLavender100};
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

export const Title = styled.span`
  min-height: ${MIN_EVENT_HEIGHT}px;
  max-height: min(100%, 1.4rem);
  display: flex;
  align-items: center;
`;

export const SecondaryTitle = styled.span`
  min-height: ${MIN_EVENT_HEIGHT}px;
  max-height: min(100%, 1.2rem);
  display: flex;
  align-items: center;
`;

const width = css<{ columnCount: number }>`
  ${({ columnCount }) =>
    css`calc((100% - 1rem - ${columnCount - 1} * ${SCROLLBAR_WIDTH + EVENT_GAP}px - ${SLOT_OFFSET})/${columnCount})`}
`;

const offsetX = css<{ offsetX: number }>`
  ${({ offsetX }) => offsetX}
`;

export const Event = styled.div<{
  offsetX: number;
  offsetY: number;
  columnCount: number;
  duration: number;
  color: BaseColor;
}>`
  position: absolute;

  overflow: hidden;

  height: ${({ duration }) => css`max(${duration}px, ${MIN_EVENT_HEIGHT}px)`};
  width: ${width};

  top: ${({ offsetY }) => `${offsetY}px`};
  left: calc(
    ${SLOT_OFFSET} + ${offsetX} * ${SCROLLBAR_WIDTH + EVENT_GAP}px +
      ${offsetX} * ${width}
  );

  border-radius: 6px;
  background-color: ${({ theme, color }) => theme.color[color]};
  color: ${({ theme, color }) => theme.color[`${color}700`]};
  font-size: ${({ duration }) => css`min(${0.75 * duration}px, 0.9rem)`};
  font-weight: 500;
  padding: 0 4px;

  ${SecondaryTitle} {
    font-size: ${({ duration }) => css`min(${0.75 * duration}px, 0.7rem)`};
    visibility: ${({ duration }) =>
      duration > 30
        ? "visible"
        : "hidden"}; // hide secondary title for events shorter than 30 mins
  }
`;
