import { mask, unMask as UnMask } from "remask";

export const unMask = (value: string) => {
  if (!value) return "";
  return UnMask(value);
};

export const phoneWithoutDDDmask = (value: string) => {
  return mask(unMask(value), ["9999-9999", "9 9999-9999"]);
};

export const phoneMask = (value: string) =>
  mask(unMask(value), ["(99) 9999-9999", "(99) 9 9999-9999"]);

export const phoneDDIMask = (value: string) =>
  mask(unMask(value), ["+99 (99) 9999-9999", "+99 (99) 9 9999-9999"]);

export const cpfOrCnpjMask = (value: string) =>
  mask(unMask(value), ["999.999.999-99", "99.999.999/9999-99"]);

export const cpfMask = (value: string) =>
  mask(unMask(value), ["999.999.999-99"]);

export const cepMask = (value: string) => mask(unMask(value), ["99999-999"]);

export const weightMask = (value: string) =>
  mask(unMask(value), ["9,999", "99,999"]);

export const creditCardMask = (value: string) =>
  mask(unMask(value), ["9999 9999 9999 9999"]);

export const shortDateMask = (value: string) => mask(unMask(value), ["99/99"]);

export const moneyMask = (value: string) => {
  value = value.replace(".", "").replace(",", "").replace(/\D/g, "");

  const options = { minimumFractionDigits: 2 };
  const result = new Intl.NumberFormat("pt-BR", options).format(
    parseFloat(value) / 100
  );

  return result;
};

/**
 * Directory of masks for manage strings.
 * **Actual masks:**
 * - Phone
 * - Phone with DDI
 * - CPF
 * - CEP
 *
 * Can unmask all the strings with mask to, with the unMask function.
 */
