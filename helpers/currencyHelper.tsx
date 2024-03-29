export const priceRu = (price: number): string => {
  return new Intl.NumberFormat("ru-Ru", {
    style: "currency",
    currency: "RUB",
    currencyDisplay: "symbol",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(price)
}
