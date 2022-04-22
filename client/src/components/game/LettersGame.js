import React, {useRef, useState, useEffect} from 'react'
import Box from "@mui/material/Box"
import {Button, Typography } from '@mui/material'

import ContainerGameTheme from "../layouts/GameTheme" 

const LettersGame = (props) => {

  const [letters, setLetters] = useState(["a","g","u","a"])

  const insertLetter = (e) => {
    const letterClicked = e.target.innerHTML

    if(letterClicked.length > 0 ) {
      for(let i = 0; i < props.word.length; i++){
        if(props.word[i].innerHTML === "") {
          props.word[i].innerHTML = letterClicked
          props.word[i].className = "MuiTypography-root MuiTypography-body1 css-ucd4w5-MuiTypography-root"
          e.target.innerHTML = ""
          e.target.className = "MuiTypography-root MuiTypography-body1 css-e1mv6v-MuiTypography-root"
          return
        }
      }
    }
  }

  const removeLetter = (e) => {
    const letterClicked = e.target.innerHTML

    if(letterClicked.length > 0) {
      for(let i = 0; i < props.word.length; i++){
        if(props.letterGame[i].innerHTML === "") {
          props.letterGame[i].innerHTML = letterClicked
          props.letterGame[i].className = "MuiTypography-root MuiTypography-body1 css-ucd4w5-MuiTypography-root"
          e.target.innerHTML = ""
          e.target.className = "MuiTypography-root MuiTypography-body1 css-e1mv6v-MuiTypography-root"
          return
        }
      }
    }
  }

  const sendLetter = () => {
    let completeWord = []
    for(let i = 0; i < props.word.length; i++){
      if(props.word[i] !== null && props.word[i].textContent !== "" ){
        completeWord[i] = props.word[i].textContent
      }
    }
    resetLetter()
    props.setWordSent(completeWord.join(""))
  }

  const resetLetter = () => {
    for(let i = 0; i < props.word.length; i++){
      if(props.word[i].textContent !== ""){
        for(let j = 0; j < props.letterGame.length; j++){
          if(props.letterGame[j].textContent !== props.word[i].textContent && props.letterGame[j].textContent === "") {
            props.letterGame[j].textContent = props.word[i].textContent
            props.word[i].textContent = ""
            props.letterGame[j].className = "MuiTypography-root MuiTypography-body1 css-ucd4w5-MuiTypography-root"
            props.word[i].className = "MuiTypography-root MuiTypography-body1 css-e1mv6v-MuiTypography-root"
            break
          }
        }
      }
    }
  }
  return (
    <Box sx ={{display: "flex", flexDirection: "column",justifyContent:"center", alignItems:"center", height:"100%"}}>
      <Box sx={{display: "flex", flexDirection:"row"}}>
        {letters.map((letter, index) => (
          <Typography sx={ContainerGameTheme.whiteBox} key={index} onClick={removeLetter} ref={(element) => {props.word.push(element)}}></Typography>
        ))}
      </Box>
      <Box sx={{display: "flex", flexDirection:"row"}}>
        {letters.map((letter, index) => (
          <Typography sx={ContainerGameTheme.lettersBox} key={index} onClick={insertLetter} ref={(element) => {props.letterGame.push(element)}}>{letter}</Typography>
        ))}
      </Box>
      <Button variant='contained' onClick={sendLetter} color="success">Enviar</Button>
    </Box>
  )
}

export default LettersGame