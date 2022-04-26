import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box"
import {Typography } from '@mui/material'

import ContainerGameTheme from "../layouts/GameTheme" 

const WordsGame = (props) => {

  let wordsSent = []
  
  for(let p = 1; p < props.backendData.length; p++){
    wordsSent.push(props.backendData[p])
  }

  const [words, setWords] = useState(wordsSent)
  const [discoveredWord, setDiscoveredWods] = useState(0)

  const validateWordSent = () => {
    let cont = 0
    let word = props.wordSent.split("")
    for(let element of props.wordsLetters) {
      for(let i = 0; i < word.length; i++) {
        if(element.children.length < word.length || element.children[i].textContent === word[i]){
          cont++
          if(cont === word.length && element.children.length === word.length){
            for(let child of element.children) {
              child.style.color = "black"
              child.style.backgroundColor = "#F9FFD4"
            }
            props.setScore(props.score + 10)
            setDiscoveredWods(discoveredWord + 1)
          }
        }
      }
      cont = 0
    }
  }

  useEffect(() => {
    validateWordSent()
  }, [props.wordSent])

  useEffect(() => {
    if(discoveredWord === words.length){
      props.setGameScore(props.gamemode)
    }
  }, [discoveredWord])
  
  
  return (
    <Box sx={ContainerGameTheme.wordsContainer}>
      {words.map((word, index) => (
        <Box sx={ContainerGameTheme.words} key={index} ref={(element) => props.wordsLetters.push(element)}>
          {[...word].map((letter, index) => (
            <Typography sx={ContainerGameTheme.word} key={index}>{letter}</Typography>
          ))}
        </Box>
      ))}
    </Box>
  )
}

export default WordsGame