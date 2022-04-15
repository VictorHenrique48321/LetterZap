import React, { useState } from 'react'
import Box from "@mui/material/Box"
import {Typography } from '@mui/material'

const GridItem = (props) => {
  return (
      <Box sx= {{
        textAlign: "center",
        border: "1px solid black",
        backgroundColor: "primary.dark",
        height: "100px",
        width: {"xs": "90%", "md": "60%"},
        display: "flex",
        margin: "0 auto",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
      }}>
        <Typography variant='h5' fontSize="18px">
          {props.nameGame}
        </Typography>
        <Typography variant='h6' fontSize="14px">
          {props.description}
        </Typography>
      </Box>
  )
}

export default GridItem