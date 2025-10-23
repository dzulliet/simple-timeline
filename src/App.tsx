import styled from "styled-components";
import { ThemeProvider } from "./styles/theme-provider.tsx";

function App() {
  return (
    <ThemeProvider>
      <PageWrapper>
        <Header>This is going to be a beautiful day view</Header>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;

const PageWrapper = styled.div`
  body,
  html {
    overflow: auto;
  }

  h1 {
    margin: 0;
  }

  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.peachPuff50};
  color: ${({ theme }) => theme.color.peachPuff300};
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.color.electricBlue};
`;
