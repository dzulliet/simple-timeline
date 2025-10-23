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
  background-color: ${({ theme }) => theme.color.freshAir400};
  border-radius: 100px;
`;
export const Header = styled.a`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  border: ${({ theme }) => theme.border.solid3};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: ${({ theme }) => theme.border.solid3};
  background-color: ${({ theme }) => theme.color.freshAir50};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.brilliantLavender50};
    h2 {
      color: ${({ theme }) => theme.color.freshAir600};
    }

    h3 {
      color: ${({ theme }) => theme.color.freshAir400};
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
    color: ${({ theme }) => theme.color.celeste800};
  }

  h3 {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.celeste700};
    font-weight: 600;
  }
`;
