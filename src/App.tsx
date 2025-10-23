import styled from "styled-components";
import { ThemeProvider } from "./styles/theme-provider.tsx";
import { getPageTitle } from "./utils/getPageTitle.ts";
import { DayView } from "./components/day-view.tsx";

function App() {
  return (
    <ThemeProvider>
      <PageWrapper>
        <PageContent>
          <Header>{getPageTitle()}</Header>
          <DayView />
        </PageContent>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;

const PageWrapper = styled.div`
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

const PageContent = styled.div`
  grid-area: content;
`;

const Header = styled.h1`
  margin: 0;
  font-size: xxx-large;
  color: ${({ theme }) => theme.color.electricBlue};
`;
