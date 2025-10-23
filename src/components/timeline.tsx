import {
  HourRow,
  Hour,
  Scrollable,
  Slot,
  Wrapper,
} from "../styles/timeline.styles.tsx";
import type { Event } from "../assets/fixtures.ts";
import { ErrorBoundary } from "./error-boundary.tsx";

type Props = {
  events: Event[];
};

function TimelineComponent({ events }: Props) {
  const hourLabels = Array.from(
    { length: 24 },
    (_, i) => `${i.toString().padStart(2, "0")}:00`,
  );

  const timelineEvents = events.sort((a, b) => {
    try {
      return a.start.localeCompare(b.start);
    } catch {
      throw new Error("Corrupted times");
    }
  });

  return (
    <Wrapper>
      <Scrollable>
        {hourLabels.map((label) => (
          <HourRow key={`${label}`}>
            <Hour>{label}</Hour>
            <Slot></Slot>
          </HourRow>
        ))}
        {timelineEvents.map((event) => (
          <span key={event.id}>{event.start}</span>
        ))}
      </Scrollable>
    </Wrapper>
  );
}

export function Timeline(props: Props) {
  return (
    <ErrorBoundary
      fallback={
        <Wrapper isError>
          <span id={"icon"}>⚠</span>
          Something went wrong
        </Wrapper>
      }
    >
      <TimelineComponent {...props} />
    </ErrorBoundary>
  );
}
