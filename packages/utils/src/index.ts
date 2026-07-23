export function formatCurrency(amountCents: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amountCents / 100);
}

export function formatDateISO(date: Date = new Date()): string {
  return date.toISOString();
}
