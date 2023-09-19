export default function currencyFormatter(
  amount: number,
  locales: string = "id-ID",
  options: Intl.NumberFormatOptions = {
    currency: "IDR",
    minimumFractionDigits: 0,
  }
): string {
  try {
    const formatter = new Intl.NumberFormat(locales, {
      style: "currency",
      ...options,
    });
    return formatter.format(amount);
  } catch (error) {
    console.error("Error formatting currency:", error);
    return `${options.currency || "USD"} ${amount}`;
  }
}
