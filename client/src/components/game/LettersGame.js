import React, {useState} from 'react'
import Box from "@mui/material/Box"
import {Typography } from '@mui/material'

import ContainerGameTheme from "../layouts/GameTheme" 

const LettersGame = () => {

  const [letters, setLetters] = useState(["a","g","u","a"])

  return (
    <Box sx ={{display: "flex", flexDirection: "column",justifyContent:"center", alignItems:"center", height:"100%"}}>
      <Box sx={{display: "flex", flexDirection:"row"}}>
        {letters.map((letter, index) => (
          <Typography sx={ContainerGameTheme.whiteBox} key={index}></Typography>
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

export default LettersGame