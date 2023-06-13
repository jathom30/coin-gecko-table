const dollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const convertToCurrency = (amount: number) => {
  return dollar.format(amount)
}