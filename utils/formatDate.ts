import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function formatDate(date: string | Date) {
  try {
    if (!date) {
      return "Data inválida";
    }
    return format(new Date(date), "dd 'de' MMMM 'de' yyyy", {
      locale: ptBR,
    });
  } catch (error) {
    return `${date} is invalid to date`;
  }
}

export function formatDateShort(date: string | Date) {
  try {
    if (!date) {
      return "Data inválida";
    }

    return format(new Date(date), "dd/MM/yyyy", {
      locale: ptBR,
    });
  } catch (error) {
    return `${date} is invalid to date`;
  }
}

export function formatDateTime(date: string | Date) {
  try {
    if (!date) {
      return "Data inválida";
    }
    return format(new Date(date), "dd 'de' MMMM 'de' yyyy 'às' HH':'mm", {
      locale: ptBR,
    });
  } catch (error) {
    return `${date} is invalid to date`;
  }
}

export function formatDateShortNoTimezone(date: string | Date | undefined) {
  try {
    if (!date) {
      return "Data inválida";
    }

    type DateType = {
      timeZone: "UTC";
      month: "numeric";
      day: "numeric";
      year: "numeric";
    };

    const dateOptions: DateType = {
      timeZone: "UTC",
      month: "numeric",
      day: "numeric",
      year: "numeric",
    };

    const dateFormatter = new Intl.DateTimeFormat("pt-BR", dateOptions);
    return dateFormatter.format(new Date(date));
  } catch (error) {
    return `${date} is invalid to date`;
  }
}
