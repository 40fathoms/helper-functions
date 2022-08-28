import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function formatTime(date: string | Date) {
  try {
    if (!date) {
      return "Data inválida";
    }
    return format(new Date(date), "HH':'mm", {
      locale: ptBR,
    });
  } catch (error) {
    return `${date} is invalid to date`;
  }
}

export function parseMinutesToHourString(
  minutes: number,
  label?: boolean
): string {
  const hours =
    Math.floor(minutes / 60) < 10
      ? `0${Math.floor(minutes / 60)}`
      : Math.floor(minutes / 60);

  const _minutes =
    Number(minutes % 60) < 10
      ? `0${Number(minutes % 60)}`
      : Number(minutes % 60);

  return label ? `${hours}h ${_minutes}min` : `${hours}:${_minutes}:00`;
}

export function parseSecondsToHours(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);

  return `${h}h  ${m}min`;
}

export function parseSecondsToHoursComplete(seconds: number) {
  return seconds ? new Date(seconds * 1000).toISOString().substr(11, 8) : null;
}
