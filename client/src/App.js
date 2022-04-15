import React from 'react'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

import GridItem from './components/GridItem.js'

import "../src/assets/css/App.css"
import "../src/assets/css/reset.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; 
import { IconStatus } from './components/IconStatus.js'

const App = () => {

  return (
    <Box sx={{ 
      width: "100vw",
      height: "100vh",
      backgroundColor: 'primary.dark',
      display: "flex",
      justifyContent: "center", 
      alignItems: "center"
      }}>
        <Box sx={{
          width: "60%",
          height: "70%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "primary.main"
        }}>
          <Box sx={{
          width: "90%",
          height: "70%",
          backgroundColor: "primary.main"
          }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <GridItem
                  nameGame={"Classico"}
                  description={"Maior Palavra"}/>
              </Grid>
              <Grid item xs={12} md={12}>
                <GridItem
                nameGame={"Metade"}
                description={"Metade das palavras"}/>
              </Grid>
              <Grid item xs={12} md={12}>
                <GridItem
                nameGame={"Zen"}
                description={"Sem limite de tempo"}/>
              </Grid>
              <Grid item xs={12} md={12}>
                <IconStatus/>
              </Grid>
            </Grid>
          </Box>
        </Box>
    </Box>
      
  )
}

export default App