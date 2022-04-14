const axios = require("axios")

async function searchWords(url){
    try {
        const response = await axios(url)

        if(response.status === 200){
            return true
        }

       
    } catch(error) {
        
        if(error.response.status === 400){
            return false
        }

    }
}

module.exports = searchWords
