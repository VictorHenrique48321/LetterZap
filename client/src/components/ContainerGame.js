import React from 'react'
import Box from "@mui/material/Box"
import { Grid, Typography } from '@mui/material'

import ContainerGameTheme from "./layouts/ContainerGameTheme" 

const gameInfo = () => {
  return (
    <Box sx={ContainerGameTheme.infoGame}>
      <Box sx={{display: "flex"}}>
        <Typography sx={{marginRight: "1rem", display: "flex", justifyContent: "center", alignItems: "center"}}>PONTOS</Typography>
        <Typography sx={ContainerGameTheme.infoBox}>0</Typography>
      </Box>
      <Box sx={{display: "flex"}}>
        <Typography sx={{marginRight: "1rem", display: "flex", justifyContent: "center", alignItems: "center"}}>TEMPO</Typography>
        <Typography sx={ContainerGameTheme.infoBox}>3:00</Typography>
      </Box>
    </Box>
  )
}

const generateWords = (wordsQuantity) => {
  return (
    <Box sx={ContainerGameTheme.wordsContainer}>
      {wordsQuantity.map((word, index) => (
        <Box sx={ContainerGameTheme.words} key={index}>
          {[...word].map((letter, index) => (
            <Typography sx={ContainerGameTheme.word} key={index}>{letter}</Typography>
          ))}
        </Box>
      ))}
    </Box>
  )
}

const generateLetters = (letters) => {
  return(
    <Box sx ={{display: "flex", flexDirection: "column",justifyContent:"center", alignItems:"center", height:"100%"}}>
      <Box sx={{display: "flex", flexDirection:"row"}}>
        {letters.map((letter, index) => (
          <Typography sx={ContainerGameTheme.lettersBox} key={index}></Typography>
        ))}
      </Box>
      <Box sx={{display: "flex", flexDirection:"row"}}>
        {letters.map((letter, index) => (
          <Typography sx={ContainerGameTheme.lettersBox} key={index}>{letter}</Typography>
        ))}
      </Box>
    </Box>
  )
}

const ContainerGame = () => {
  let words = [
    "agua", "agua","agua" 
  ]

  return (
    <Box sx={ContainerGameTheme.container}>
      <Grid container height="100%">
        <Grid item xs={12} height="10%">
          <Box sx={ContainerGameTheme.infoContainer}>
            {
              gameInfo()
            }
          </Box>
        </Grid>
        <Grid item xs={12} height="50%">
          <Box sx={ContainerGameTheme.gameContainer}>
            <Box sx={{width: "100%", height: "100%", display: "flex", alignItems: "center"}}>
              {
                generateWords(words)
              }
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} height="40%">
          <Box sx={ContainerGameTheme.lettersContainer}>
            {
              generateLetters(["a","g","u","a"])
            }
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ContainerGame