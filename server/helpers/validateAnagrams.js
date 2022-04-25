const allAnagrams = require("./generateAnagrams")
const searchWords = require("./requestAnagram")
const letterGenerated = require("./generateLetters")

async function correctWords() {
  let trueWords = []
  let anagrams = []
  const arr = letterGenerated() /*  <- gera letras aleatorias */

  trueWords.push(arr)

  anagrams = allAnagrams(arr) /*  <- gera anagrams das letras geradas */

  await Promise.allSettled(anagrams.map(async (anagram)=>{ /*  <- valida se o anagrama eh valido */
    const param = anagram
    const URL = `https://significado.herokuapp.com/v2/${param}`
    const statusCode = await searchWords(URL)

    if(statusCode === true && anagram.length > 2 && trueWords.length <= 14){
      trueWords.push(anagram)
    } else {
      return
    }
  }))
  return trueWords
}

module.exports = correctWords


