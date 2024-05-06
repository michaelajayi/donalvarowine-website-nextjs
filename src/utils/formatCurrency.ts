import { Currency } from "@/d.types";

export function formatCurrency(
  amount: number,
  currency: Currency = "GBP"
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
  }).format(amount);
}

export function formatCurrencyWithoutSymbol(amount: number): string {
  return new Intl.NumberFormat("en-US").format(amount);
}
