export function formatCurrencyPair(currencyPair) {
  const left = currencyPair.slice(0,3).toUpperCase();
  const right = currencyPair.slice(3,6).toUpperCase();

  return `${left}-${right}`;
}