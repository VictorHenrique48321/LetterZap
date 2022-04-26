import React, { useEffect, useRef, useState } from 'react'
import { Link } from '@mui/material'
import Box from "@mui/material/Box"
import {Modal, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import ContainerGameTheme from "../layouts/GameTheme" 

const InfoGame = (props) => {

  const [timeIsUp, setTimeIsUp] = useState(false)
  const [open, setOpen] = React.useState(true)

  const first = useRef()

  const startingMinutes = 3
  let time = startingMinutes * 60
  
  const updateCountdown = () => {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    if(time <= 0){
      setTimeIsUp(true)
    } else {
      seconds = seconds < 10 ? "0" + seconds : seconds
      first.current.innerHTML = `${minutes} : ${seconds}`
      time--
  
      time = time < 0 ? 0 : time
    }
  }

  useEffect(() => {
    if(props.gamemode === "zen") {
      first.current.innerHTML = "Ilimitado"
    } else {
      let interval = setInterval(updateCountdown, 1000)
      if(timeIsUp){
        clearInterval(interval)
      }
    }
  }, [timeIsUp])
  

  if(!timeIsUp){
    return (
      <Box sx={ContainerGameTheme.infoGame}>
        <Box sx={{display: "flex"}}>
          <Typography sx={{marginRight: "1rem", display: "flex", justifyContent: "center", alignItems: "center"}}>PONTOS</Typography>
          <Typography sx={ContainerGameTheme.infoBox}>{props.score}</Typography>
        </Box>
        <Box sx={{display: "flex"}}>
          <Typography sx={{marginRight: "1rem", display: "flex", justifyContent: "center", alignItems: "center"}}>TEMPO</Typography>
          <Typography sx={ContainerGameTheme.infoBox} ref={first}></Typography>
        </Box>
        <Box sx={{display: "flex"}}>
          <Link href="/" underline='none'>
            <CloseIcon sx={ContainerGameTheme.infoIcon}/>
          </Link>
        </Box>
      </Box>
    )
  } else {
    return (
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
            position: "absolute",
            top: "50%",
            left:" 50%",
            transform: "translate(-50%, -50%)",
            width: {"xs": "250px", "sm": "400px"},
            backgroundColor: "rgb(255, 255, 255)",
            border: "2px solid rgb(0, 0, 0)",
            padding: "16px"
          }}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: "center", margin: "1rem"}}>
            Tempo Esgotado
          </Typography>
          <Typography id="modal-modal-title" component="h2" sx={{textAlign: "center", marginBottom: "2rem"}}>
            Seu tempo acabou o que prefere fazer 
          </Typography>
          <Typography id="modal-modal-description" sx={{
            display: "flex", 
            justifyContent: "space-around",  
            marginBottom: "1rem",
            flexDirection: {"xs": "column", "sm": "row"},
            textAlign: {"xs": "center", "sm": "none"}
          }}>
            <Link href="/classic" color="blue" underline='none'>Tentar Novamente</Link>
            <Link href="/home" color="blue" underline='none'>Voltar para pagina inicial</Link>
          </Typography>
        </Box>
      </Modal>
    )
  }
}

export default InfoGame