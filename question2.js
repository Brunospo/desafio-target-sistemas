function getLastSequenceNumber(limit){
  let firstNumber = 0
  let secondNumber = 1

  while(secondNumber < limit){
    let aux = secondNumber

    secondNumber = firstNumber + secondNumber
    firstNumber = aux
  }

  return secondNumber
}

function checkNumber(number) {
  const message1 = 'O número informado pertence a sequência de Fibonacci'
  const message2  = 'O número informado não pertence a sequência de Fibonacci'

  if (number < 0) {
    return message2
  }

  if(number === 0 || number === 1) {
    return message1
  }

  const lastSequenceNumber = getLastSequenceNumber(number)

  return lastSequenceNumber === number ? message1 : message2
}

const result = checkNumber(10946)

console.log(result)
