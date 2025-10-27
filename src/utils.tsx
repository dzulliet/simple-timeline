import type { Event } from "./assets/fixtures.ts";
import { baseColors } from "./styles/theme.ts";

export function getPageTitle() {
  const currentHour = new Date().getHours();

  if (currentHour < 6) {
    return "You should be sleeping 😴";
  }
  if (currentHour < 12) {
    return "Good Morning!";
  }
  if (currentHour < 18) {
    return "Good Afternoon!";
  }
  if (currentHour < 24) {
    return "Good Evening!";
  }
}

// converts 'HH:mm' string to total minutes from midnight
export function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function getLayoutEvent(event: Event, columnIdx: number) {
  const start = timeToMinutes(event.start);
  const end = timeToMinutes(event.end);
  const duration = end - start;

  return { ...event, offsetX: columnIdx, offsetY: start, duration };
}

export function isInBetween(rangeEvent: Event, eventStart: string) {
  const rangeStart = timeToMinutes(rangeEvent.start);
  const rangeEnd = timeToMinutes(rangeEvent.end);
  const eventStartMinutes = timeToMinutes(eventStart);

  return rangeStart <= eventStartMinutes && eventStartMinutes <= rangeEnd;
}

export function getRandomColor() {
  return baseColors[Math.floor(Math.random() * baseColors.length)];
}
