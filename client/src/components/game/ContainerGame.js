import React from 'react'
import Box from "@mui/material/Box"
import { Grid, Typography } from '@mui/material'

import ContainerGameTheme from "../layouts/GameTheme" 

const ContainerGame = (props) => {
  console.log(props)

  return (
    <Box sx={ContainerGameTheme.container}>
      <Grid container height="100%">
        <Grid item xs={12} height="10%" borderBottom="2px solid #515920">
          <Box sx={ContainerGameTheme.infoContainer}>
            {props.children[0]}
          </Box>
        </Grid>
        <Grid item xs={12} height="50%">
          <Box sx={ContainerGameTheme.gameContainer}>
            <Box sx={{width: "100%", height: "100%", display: "flex", alignItems: "center"}}>
              {props.children[1]}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} height="40%" borderTop="2px solid #515920">
          <Box sx={ContainerGameTheme.lettersContainer}>
            {props.children[2]}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ContainerGame