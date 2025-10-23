import styled from "styled-components";

export const Wrapper = styled.div`
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
`;

export const Scrollable = styled.div`
  display: block;
  width: 100%;
  height: 560px;
  overflow-y: scroll;
  padding: 0 0.5rem 0 1.5rem;

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
