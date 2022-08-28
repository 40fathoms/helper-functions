type Crypto = {
  name: string;
  id: string;
  icon: string;
  symbol: string;
  rank: number;
  price: number;
  priceBtc: number;
  marketCap: number;
  availableSupply: number;
  totalSupply: number;
  volume: number;
  priceChange1h: number;
  priceChange1d: number;
  priceChange1w: number;
};

// function to calculate the value of any amount of an individual crypto
// either amountCrypto or amountUSD must be set to zero.
export function valueIndividualCoin(
  id: string,
  amountCrypto: number,
  amountUSD: number,
  cryptoArray: Crypto[]
) {
  if (
    (amountCrypto === 0 && amountUSD === 0) ||
    cryptoArray[0].name === undefined
  ) {
    return 0;
  }

  if (amountUSD === 0) {
    // Gathers the price of the "id" (bitcoin, ethereum, etc)
    let currentCoinPrice = cryptoArray.filter((item) => item.id === id)[0]
      .price;
    // Returns how many dollars the amount of "id" crypto is worth
    return currentCoinPrice * amountCrypto;
  }

  if (amountCrypto === 0) {
    // Gathers the price of the "id" (bitcoin, ethereum, etc)
    let currentCoinPrice = cryptoArray.filter((item) => item.id === id)[0]
      .price;
    // Returns how many "id" crypto can be bought
    return amountUSD / currentCoinPrice;
  }
}

export function valuePortfolio(wallet, crypto) {
  if (crypto[0].name === undefined) {
    return 0;
  } else if (!wallet) {
    return 0;
  }

  let portfolio = 0;

  Object.keys(wallet).map((key) => {
    return crypto.map((item) => {
      return item.id === wallet[key].id
        ? (portfolio += item.price * wallet[key].amount)
        : (portfolio += 0);
    });
  });

  return portfolio.toFixed(4);
}
