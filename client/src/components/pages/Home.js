import React from 'react'
import Grid from "@mui/material/Grid"

import ContainerHome from '../ContainerHome.js'
import DifficultOptions from '../DifficultOptions.js'
import InformativeIcons from '../InformativeIcons.js'

import "../../../src/assets/css/reset.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; 
import { Link } from '@mui/material'

const Home = () => {

  return (
    <ContainerHome>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Link href='/game' color="inherit" underline='none'>
            <DifficultOptions nameGame={"Classico"} description={"Maior Palavra"}/>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link href='/game' color="inherit" underline='none'>
            <DifficultOptions nameGame={"Metade"} description={"Metade das palavras"}/>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link href='/game' color="inherit" underline='none'>
            <DifficultOptions nameGame={"Zen"} description={"Sem limite de tempo"}/>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <InformativeIcons/>
        </Grid>
      </Grid>
    </ContainerHome>
  )
}

export default Home