import valid from "card-validator";

export const checkCardNumber = (cardNumber: string): boolean => {
  const { isPotentiallyValid } = valid.number(cardNumber);

  return isPotentiallyValid;
};

export const checkCardExpiration = (cardExpirationDate: string): boolean => {
  const { isPotentiallyValid } = valid.expirationDate(cardExpirationDate);

  return isPotentiallyValid;
};

export const checkCardCvv = (cardCvv: string): boolean => {
  const { isPotentiallyValid } = valid.cvv(cardCvv, 4);

  return isPotentiallyValid;
};
