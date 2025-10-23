import {
  HourRow,
  Hour,
  Scrollable,
  Slot,
  Wrapper,
} from "./timeline.styles.tsx";

export function Timeline() {
  const hourLabels = Array.from(
    { length: 24 },
    (_, i) => `${i.toString().padStart(2, "0")}:00`,
  );

  return (
    <Wrapper>
      <Scrollable>
        {hourLabels.map((label) => (
          <HourRow>
            <Hour>{label}</Hour>
            <Slot></Slot>
          </HourRow>
        ))}
      </Scrollable>
    </Wrapper>
  );
}
