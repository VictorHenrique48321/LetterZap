const correctWords = require("./validateAnagrams")

async function getWord(request, response){
  
  try {
    
    const words = await correctWords()

    return response.status(200).json(words)

  } catch (error) {

    return error

  }
  
}

module.exports = getWord