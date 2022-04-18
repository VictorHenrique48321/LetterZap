import React from 'react'
import Box from "@mui/material/Box"
import {Typography } from '@mui/material'

const DifficultOptions = (props) => {
  return (
      <Box sx= {{
        textAlign: "center",
        border: "2px solid #515920",
        backgroundColor: "#b5d545",
        height: "100px",
        width: {"xs": "90%", "md": "60%"},
        display: "flex",
        margin: "0 auto",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: "5px"
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

export default DifficultOptions