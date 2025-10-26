export const baseColors = [
  "peachPuff",
  "brilliantLavender",
  "freshAir",
  "celeste",
  // "electricBlue",
] as const;

export const color = {
  peachPuff: "#FFDCB9", // peachPuff100
  brilliantLavender: "#FFBAFF", // brilliantLavender100
  freshAir: "#BADDFF", // freshAir100
  celeste: "#B8FFF5", // celeste100
  electricBlue: "#D2DBE5", //electricBlue100

  neutral50: "#FFFFFF",
  neutral100: "#E7E7E7",
  neutral200: "#CFCFCF",
  neutral300: "#B6B6B6",
  neutral400: "#9E9E9E",
  neutral500: "#868686",
  neutral600: "#6E6E6E",
  neutral700: "#555555",
  neutral800: "#3D3D3D",
  neutral900: "#252525",
  neutral950: "#0D0D0D",

  peachPuff50: "#FFF2E6",
  peachPuff100: "#FFDCB9",
  peachPuff200: "#FFC48A",
  peachPuff300: "#FFAD5C",
  peachPuff400: "#FF962E",
  peachPuff500: "#FF8000",
  peachPuff600: "#D16900",
  peachPuff700: "#A35200",
  peachPuff800: "#753B00",
  peachPuff900: "#472400",
  peachPuff950: "#1A0D00",

  brilliantLavender50: "#FFE6FF",
  brilliantLavender100: "#FFBAFF",
  brilliantLavender200: "#FF8AFF",
  brilliantLavender300: "#FF5CFF",
  brilliantLavender400: "#FF2EFF",
  brilliantLavender500: "#FF00FF",
  brilliantLavender600: "#D100D1",
  brilliantLavender700: "#A300A3",
  brilliantLavender800: "#750075",
  brilliantLavender900: "#470047",
  brilliantLavender950: "#1A001A",

  freshAir50: "#E6F2FF",
  freshAir100: "#BADDFF",
  freshAir200: "#8AC4FF",
  freshAir300: "#5CADFF",
  freshAir400: "#2E96FF",
  freshAir500: "#0080FF",
  freshAir600: "#0069D1",
  freshAir700: "#0052A3",
  freshAir800: "#003B75",
  freshAir900: "#002447",
  freshAir950: "#000D1A",

  celeste50: "#E6FFFC",
  celeste100: "#B8FFF5",
  celeste200: "#8AFFEF",
  celeste300: "#5CFFE9",
  celeste400: "#2EFFE3",
  celeste500: "#00FFDD",
  celeste600: "#00D1B5",
  celeste700: "#00A38D",
  celeste800: "#007566",
  celeste900: "#00473E",
  celeste950: "#001A16",

  electricBlue50: "#EFF2F6",
  electricBlue100: "#D2DBE5",
  electricBlue200: "#B5C3D4",
  electricBlue300: "#97ACC3",
  electricBlue400: "#7A95B3",
  electricBlue500: "#5D7DA2",
  electricBlue600: "#4A6481",
  electricBlue700: "#3C5068",
  electricBlue800: "#2B3A4A",
  electricBlue900: "#1A232D",
  electricBlue950: "#090D10",
};

const border = {
  solid1: `1px solid ${color.celeste700}`,
  solid3: `3px solid ${color.electricBlue600}`,
};

export const theme = { color, border };
export type Theme = typeof theme;
export type Color = keyof typeof color;
export type BaseColor =
  | "peachPuff"
  | "brilliantLavender"
  | "freshAir"
  | "celeste"
  | "electricBlue";
