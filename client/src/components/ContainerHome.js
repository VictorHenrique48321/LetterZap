import React from 'react'

import Box from "@mui/material/Box"

const firstContainerStyle = {
  width: "100vw",
  height: "100vh",
  backgroundColor: 'primary.dark',
  display: "flex",
  justifyContent: "center", 
  alignItems: "center"
}

const secondContainerStyle = {
  width: "60%",
  height: "75%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "primary.main"
}

const thirdContainerStyle = {
  width: "90%",
  height: "70%",
  backgroundColor: "primary.main"
}

const ContainerHome = (props) => {
  return (
    <Box sx={firstContainerStyle}>
        <Box sx={secondContainerStyle}>
          <Box sx={thirdContainerStyle}>
            {props.children}
          </Box>
        </Box>
    </Box>
  )
}

export default ContainerHome