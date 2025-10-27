import * as Styles from "../styles/day-view.styles.tsx";
import { Timeline } from "./timeline.tsx";
import { type Event, MONTHS, WEEKDAYS } from "../assets/fixtures.ts";

type Props = {
  events: Event[];
};

export function DayView({ events }: Props) {
  const today = new Date();
  const month = `${MONTHS[today.getMonth()]} ${today.getDate()}`;
  const year = `${today.getFullYear()}`;
  const weekday = WEEKDAYS[today.getDay()];

  return (
    <Styles.Wrapper>
      <Styles.Header
        href={"https://www.google.com/search?q=today+weather"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          <span>{month}</span>
          <span>{year}</span>
        </h2>
        <h3>
          <span>{weekday}</span>
          <Styles.Weather>🌤️</Styles.Weather>
        </h3>
      </Styles.Header>
      <Timeline events={events} />
    </Styles.Wrapper>
  );
}
