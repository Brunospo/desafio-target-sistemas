const dataArray = require('./dados.json')

let lowestBillingData = dataArray[0]
let lowestBillingDataWithoutNonBillingDays = dataArray[0]
let higherBillingData = dataArray[0]

let sum = 0
let count = 0

dataArray.forEach(element => {
  if(element.valor < lowestBillingData.valor) {
    lowestBillingData = element
  }
  
  if(element.valor > 0 && element.valor < lowestBillingDataWithoutNonBillingDays.valor) {
    lowestBillingDataWithoutNonBillingDays = element
  }
  
  if(element.valor > higherBillingData.valor) {
    higherBillingData = element
  }

  if (element.valor > 0) {
    sum += element.valor
    count++
  }
})

console.log(`Menor valor de faturamento: ${lowestBillingData.valor} || incluindo dias com faturamento 0`)
console.log(`Menor valor de faturamento: ${lowestBillingDataWithoutNonBillingDays.valor} || excluindo dias com faturamento 0`)
console.log('')
console.log(`Maior valor de faturamento: ${higherBillingData.valor}`)
console.log('')

const average = sum / count

const numberOfDays = dataArray.reduce((acc, currentValue) => {
  return currentValue.valor > average ? acc + 1 : acc
}, 0)

console.log(`Número de dias em que o valor de faturamento diário foi superior à média mensal: ${numberOfDays}`)