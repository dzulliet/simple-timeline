import styled from "styled-components";

export const PageWrapper = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 0.3fr 6fr 0.3fr;
  gap: 0 0;
  grid-template-areas:
    ". . ."
    ". content ."
    ". . .";

  background-color: ${({ theme }) => theme.color.peachPuff50};
  color: ${({ theme }) => theme.color.electricBlue};
`;
export const PageContent = styled.div`
  grid-area: content;
`;
export const PageTitle = styled.h1`
  margin: 0;
  font-size: xx-large;
  font-weight: bold;
  color: ${({ theme }) => theme.color.electricBlue600};
`;
