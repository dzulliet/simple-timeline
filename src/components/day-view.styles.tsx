import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
`;
export const Weather = styled.div`
  visibility: hidden;
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.peachPuff50};
  background-color: ${({ theme }) => theme.color.celeste700};
  border-radius: 100px;
`;
export const Header = styled.a`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  border: ${({ theme }) => theme.border.solid};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: ${({ theme }) => theme.border.solid};
  background-color: ${({ theme }) => theme.color.electricBlue50};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.freshAir50};
    h2 {
      color: ${({ theme }) => theme.color.celeste800};
    }

    h3 {
      color: ${({ theme }) => theme.color.celeste700};
    }

    ${Weather} {
      visibility: visible;
    }
  }

  h2 {
    display: flex;
    justify-content: space-between;
    font-size: large;
    font-weight: bold;
  }

  h3 {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.electricBlue400};
    font-weight: 600;
  }
`;
export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem 1.5rem;
  border: ${({ theme }) => theme.border.solid};
  border-top-width: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${({ theme }) => theme.color.electricBlue50};
`;
