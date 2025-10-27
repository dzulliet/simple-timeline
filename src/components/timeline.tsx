import * as Styles from "../styles/timeline.styles.tsx";
import type { Event } from "../assets/fixtures.ts";
import { ErrorBoundary } from "./error-boundary.tsx";
import { useMemo } from "react";
import { TimelineEventGroup } from "./timeline-event-group.tsx";
import { isInBetween } from "../utils.tsx";

type Props = {
  events: Event[];
};

function TimelineComponent({ events }: Props) {
  const hourLabels = Array.from(
    { length: 24 },
    (_, i) => `${i.toString().padStart(2, "0")}:00`,
  );

  const groupedEvents = useMemo(() => {
    const sortedEvents = events.sort((a, b) => {
      try {
        return a.start.localeCompare(b.start);
      } catch {
        throw new Error("Corrupted times");
      }
    });

    const grouped: Event[][] = [[sortedEvents[0]]];

    for (let i = 1; i < sortedEvents.length; i++) {
      if (isInBetween(sortedEvents[i - 1], sortedEvents[i].start)) {
        grouped.at(-1)?.push(sortedEvents[i]);
      } else {
        grouped[grouped.length] = [sortedEvents[i]];
      }
    }

    return grouped;
  }, [events]);

  return (
    <Styles.Wrapper>
      <Styles.Scrollable>
        {hourLabels.map((label) => (
          <Styles.HourRow key={`${label}`}>
            <Styles.Hour>{label}</Styles.Hour>
            <Styles.Slot></Styles.Slot>
          </Styles.HourRow>
        ))}
        {groupedEvents.map((group, idx) => (
          <TimelineEventGroup key={idx} group={group} />
        ))}
        <Styles.TimeNow />
      </Styles.Scrollable>
    </Styles.Wrapper>
  );
}

export function Timeline(props: Props) {
  return (
    <ErrorBoundary
      fallback={
        <Styles.Wrapper isError>
          <span id={"icon"}>⚠</span>
          Something went wrong
        </Styles.Wrapper>
      }
    >
      <TimelineComponent {...props} />
    </ErrorBoundary>
  );
}
