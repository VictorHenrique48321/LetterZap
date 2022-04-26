function letterGenerated(){
  let lettersQuantity = Math.floor(Math.random() * (7 - 4)) + 4
  
  const vowel = fillVowel(lettersQuantity)
  const consonant = fillConsonant(lettersQuantity)
  const letters = vowel.concat(consonant)
  
  return letters
}

function fillVowel(quantityLetters){
  const vowel = [
    "a","e","i","o","u"
  ]
  let generatedVowel = []

  switch(quantityLetters){
    case 4:
      for(let i =0; i<=1;i++){
        generatedVowel.push(vowel[Math.floor(Math.random() * 5)]) 
      }
      return generatedVowel

    case 5:
      for(let i =0; i<=1;i++){
        generatedVowel.push(vowel[Math.floor(Math.random() * 5)]) 
      }
      return generatedVowel

    case 6:
      for(let i =0; i<=2;i++){
        generatedVowel.push(vowel[Math.floor(Math.random() * 5)]) 
      }
      return generatedVowel
  }
}

function fillConsonant(quantityLetters){
  const consonant = [
    "b","c","d","f","g","j","l",
    "m","n","p","r","s","t","v"
  ]

  let generatedConsonant = []

  switch(quantityLetters){
    case 4:
      for(let i =0; i<=1;i++){
        generatedConsonant.push(consonant[Math.floor(Math.random() * 14)]) 
      }
      return generatedConsonant

    case 5:
      for(let i =0; i<=2;i++){
        generatedConsonant.push(consonant[Math.floor(Math.random() * 14)]) 
      }
      return generatedConsonant

    case 6:
      for(let i =0; i<=2;i++){
        generatedConsonant.push(consonant[Math.floor(Math.random() * 14)]) 
      }
      return generatedConsonant
  }
}

module.exports = letterGenerated