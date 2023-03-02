const monthlyBilling = [
  {state: 'SP', billing: 67836.43},
  {state: 'RJ', billing: 36678.66},
  {state: 'MG', billing: 29229.88},
  {state: 'ES', billing: 27165.48},
  {state: 'Outros', billing: 19849.53}
]

const amount = monthlyBilling.reduce((acc, currentValue) => acc + currentValue.billing, 0)

const percentageOfEachState = monthlyBilling.map(element => {
  return {
    state: element.state,
    percentage: ((element.billing / amount) * 100).toFixed(1)
  }
})

percentageOfEachState.forEach(element => {
  console.log(`Estado: ${element.state} - Porcentagem: ${element.percentage}%`)
})