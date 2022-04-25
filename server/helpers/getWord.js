const correctWords = require("./validateAnagrams")

async function getWord(request, response){
  
  try {
    
    const words = await correctWords()

    return response.status(200).json(words)

  } catch (error) {

    return response.status(500).json(error.message)

  }
  
}

module.exports = getWord