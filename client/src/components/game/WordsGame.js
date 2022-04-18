import React, { useState } from 'react'
import Box from "@mui/material/Box"
import {Typography } from '@mui/material'

import ContainerGameTheme from "../layouts/GameTheme" 

const WordsGame = () => {

  const [words, setWords] = useState([
    "agua", "agua","agua","agua", "agua","agua", "agua", "agua","agua",
    "agua", "agua","agua","agua", "agua","agua", "agua", "agua","agua"
  ])

  return (

    <Box sx={ContainerGameTheme.wordsContainer}>
      {words.map((word, index) => (
        <Box sx={ContainerGameTheme.words} key={index}>
          {[...word].map((letter, index) => (
            <Typography sx={ContainerGameTheme.word} key={index}>{letter}</Typography>
          ))}
        </Box>
      ))}
    </Box>
  )
}

export default WordsGame