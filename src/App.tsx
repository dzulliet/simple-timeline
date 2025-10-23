import styled from "styled-components";
import { ThemeProvider } from "./styles/theme-provider.tsx";

function App() {
  return (
    <ThemeProvider>
      <PageWrapper>This is going to be a beautiful day view</PageWrapper>
    </ThemeProvider>
  );
}

export default App;

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.peachPuff50};
  color: ${({ theme }) => theme.color.peachPuff300};
  font-size: xxx-large;
`;
