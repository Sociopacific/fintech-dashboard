export function formatCardNumber(cardNumber: string): string {
  // Ensure the card number is exactly 16 digits
  if (cardNumber.length !== 16) {
    throw new Error("Card number must be exactly 16 digits");
  }

  // Extract the first 4 digits
  const first4 = cardNumber.slice(0, 4);
  // Mask the digits from index 4 to 7
  const second4 = cardNumber.slice(4, 8).replace(/\d/g, "*");
  // Mask the digits from index 8 to 11
  const third4 = cardNumber.slice(8, 12).replace(/\d/g, "*");
  // Extract the last 4 digits
  const last4 = cardNumber.slice(12);

  // Return the formatted string
  return `${first4} ${second4} ${third4} ${last4}`;
}

export function getCssVarColor(variable: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue("--" + variable)
    .trim();
}

export function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatUSDAmount(
  amount: number,
  showPlus: boolean = false
): string {
  // Determine if the number is an integer (no cents)
  const fractionDigits = Number.isInteger(amount) ? 0 : 2;

  // Format the absolute value with the appropriate number of fraction digits
  const formatted = Math.abs(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });

  // Prefix the sign (+ or -) depending on whether the amount is positive or negative
  return amount < 0 ? `-${formatted}` : (showPlus ? "+" : "") + formatted;
}
