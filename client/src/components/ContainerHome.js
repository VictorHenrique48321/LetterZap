import React from 'react'

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { Link } from '@mui/material'

import themes from './layouts/HomeTheme'

const ContainerHome = (props) => {
  return (
    <Box sx={themes.firstContainerStyle}>
        <Box sx={themes.secondContainerStyle}>
          <Box sx={themes.thirdContainerStyle}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Link href='/classic' color="inherit" underline='none'>
                  {props.children[0]}
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href='/half' color="inherit" underline='none'>
                  {props.children[1]}
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href='/zen' color="inherit" underline='none'>
                  {props.children[2]}
                </Link>
              </Grid>
              <Grid item xs={12}>
                {props.children[3]}
              </Grid>
            </Grid>
          </Box>
        </Box>
    </Box>
  )
}

export default ContainerHome