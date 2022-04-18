import React from 'react'
import Box from "@mui/material/Box"
import {Typography } from '@mui/material'

import ContainerGameTheme from "../layouts/GameTheme" 

const InfoGame = () => {
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

export default InfoGame