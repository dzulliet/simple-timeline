import * as Styles from "../styles/timeline.styles.tsx";
import type { Event } from "../assets/fixtures.ts";
import { ErrorBoundary } from "./error-boundary.tsx";
import { useMemo } from "react";

type Props = {
  events: Event[];
};

// converts 'HH:mm' string to total minutes from midnight
function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function getLayoutEvent(event: Event, columnIdx: number) {
  const start = timeToMinutes(event.start);
  const end = timeToMinutes(event.end);
  const duration = end - start;

  return { ...event, offsetX: columnIdx, offsetY: start, duration };
}

function isInBetween(rangeEvent: Event, eventStart: string) {
  const rangeStart = timeToMinutes(rangeEvent.start);
  const rangeEnd = timeToMinutes(rangeEvent.end);
  const eventStartMinutes = timeToMinutes(eventStart);

  return rangeStart <= eventStartMinutes && eventStartMinutes <= rangeEnd;
}

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
      </Styles.Scrollable>
    </Styles.Wrapper>
  );
}

type LayoutEvent = Event & {
  offsetX: number;
  offsetY: number;
  duration: number;
};

function TimelineEventGroup({ group }: { group: Event[] }) {
  // const columns = Array.from(Array(events.length).fill([])) as Event[][];
  // for (let e = 0; e < events.length; e = e + 1) {
  //   for (let c = 0; c <= e; c = c + 1) {
  //     console.log(">>>columns[c]", c, columns[c]);
  //     console.log(">>>events[e].start", events[e].start);
  //     const columnLastEvent = columns[c].at(-1);
  //     console.log(">>>columnLastEvent", columnLastEvent);
  //     if (!columnLastEvent || columnLastEvent.end < events[e].start) {
  //       columns[c].push(events[e]);
  //     }
  //   }
  // }

  const eventColumns = group.reduce(
    (columns, currEvent, currIdx) => {
      const nonConflictingEvents: Event[] = [];
      for (let i = 0; i < currIdx; i++) {
        group[i].end < currEvent.start && nonConflictingEvents.push(group[i]);
      }

      if (nonConflictingEvents.length) {
        const targetColumnIdx = columns.findIndex((col) => {
          const columnLastEvent = col.at(-1);
          return nonConflictingEvents.some(
            (nce) => nce.id === columnLastEvent?.id,
          );
        });

        columns[targetColumnIdx]?.push(
          getLayoutEvent(currEvent, targetColumnIdx),
        );
        return columns;
      }

      columns[currIdx] = [getLayoutEvent(currEvent, currIdx)];
      return columns;
    },
    [[]] as LayoutEvent[][],
  );

  return eventColumns.flat().map(({ id, ...layoutEvent }) => (
    <Styles.Event key={id} {...layoutEvent} columnCount={eventColumns.length}>
      <Styles.Title>{layoutEvent.title}</Styles.Title>
      <Styles.SecondaryTitle>{`${layoutEvent.start}-${layoutEvent.end}`}</Styles.SecondaryTitle>
    </Styles.Event>
  ));
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
