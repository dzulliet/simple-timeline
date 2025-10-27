import { type BaseColor } from "../styles/theme.ts";
import { getRandomColor } from "../utils.tsx";

export type Event = {
  id: number;
  title: string;
  start: string; // e.g., '09:30' (HH:MM)
  end: string; // e.g., '10:45' (HH:MM)
  color: BaseColor;
};

export const mockEvents: Event[] = [
  {
    id: 1,
    title: "Team Standup",
    start: "09:00",
    end: "09:15",
    color: getRandomColor(),
  },
  {
    id: 3,
    title: "Meeting B",
    start: "10:30",
    end: "11:30",
    color: getRandomColor(),
  },
  {
    id: 2,
    title: "Meeting A",
    start: "10:00",
    end: "11:00",
    color: getRandomColor(),
  },
  {
    id: 5,
    title: "Lunch",
    start: "12:00",
    end: "13:00",
    color: getRandomColor(),
  },
  {
    id: 6,
    title: "Review A",
    start: "14:30",
    end: "15:30",
    color: getRandomColor(),
  },
  {
    id: 8,
    title: "Wrap-up",
    start: "15:45",
    end: "18:00",
    color: getRandomColor(),
  },
  {
    id: 7,
    title: "Review B",
    start: "15:00",
    end: "16:00",
    color: getRandomColor(),
  },
  {
    id: 4,
    title: "Meeting C",
    start: "10:45",
    end: "11:15",
    color: getRandomColor(),
  },
];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
