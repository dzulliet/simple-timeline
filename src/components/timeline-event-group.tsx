import { memo } from "react";
import type { Event } from "../assets/fixtures.ts";
import * as Styles from "../styles/timeline.styles.tsx";
import { getLayoutEvent } from "../utils.tsx";

type LayoutEvent = Event & {
  offsetX: number;
  offsetY: number;
  duration: number;
};

type Props = { group: Event[] };

export const TimelineEventGroup = memo(function TimelineEventGroup({
  group,
}: Props) {
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
    <Styles.Event
      key={id}
      {...layoutEvent}
      columnCount={eventColumns.length}
      title={`${layoutEvent.title}\n${layoutEvent.start}-${layoutEvent.end}`}
    >
      <Styles.Title>{layoutEvent.title}</Styles.Title>
      <Styles.SecondaryTitle>{`${layoutEvent.start}-${layoutEvent.end}`}</Styles.SecondaryTitle>
    </Styles.Event>
  ));
});
