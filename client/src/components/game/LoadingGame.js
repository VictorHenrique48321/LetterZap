import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'

const LoadingGame = () => {
  
  return (
    <Box sx={{
    width: "100vw", 
    height: "100vh", 
    backgroundColor: "#9AC601", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center"
    }}>
      <Typography variant="h4">Carregando palavras</Typography>
      <Typography variant="h4">...</Typography>
    </Box>
  )
}

export default LoadingGame