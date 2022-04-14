function allAnagrams (generatedLetters) {

   const arr = generatedLetters
   let anagrams = []

   const permutations = (len, val, existing) => {
      if(len==0){
         anagrams.push(val)
         return
      }
      for(let i=0; i<arr.length; i++){
         if(!existing[i]){
            existing[i] = true;
            permutations(len - 1, val+arr[i], existing);
            existing[i] = false;
         }
      }
   }

   const buildPermuations = (arr = []) => {
      for(let i=0; i < arr.length; i++){
         permutations(arr.length - i, "", []);
      }
   }

   buildPermuations(arr)
   anagrams = [...new Set(anagrams)] /* <- remove palavras duplicadas */
   return anagrams
}

module.exports = allAnagrams
