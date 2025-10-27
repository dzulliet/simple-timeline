import { ThemeProvider } from "./styles/theme-provider.tsx";
import { DayView } from "./components/day-view.tsx";
import * as Styles from "./styles/page.styles.tsx";
import { mockEvents } from "./assets/fixtures.ts";
import { getPageTitle } from "./utils.tsx";

function App() {
  return (
    <ThemeProvider>
      <Styles.PageWrapper>
        <Styles.PageContent>
          <Styles.PageTitle>{getPageTitle()}</Styles.PageTitle>
          <DayView events={mockEvents} />
        </Styles.PageContent>
      </Styles.PageWrapper>
    </ThemeProvider>
  );
}

export default App;
