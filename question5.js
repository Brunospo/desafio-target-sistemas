function revertString(currentString) {
  const newString = []

  for (let index = currentString.length - 1; index >= 0; index--) {
    newString.push(currentString[index])  
  }

  return newString.join('')
}

const reversedString = revertString('Missa é assim')

console.log(reversedString)