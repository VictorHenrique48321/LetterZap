import React, { useEffect } from 'react'
import { useState } from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Box } from '@mui/system';
import { List, ListItem, Modal, Typography } from '@mui/material';

const iconStyle = {
  borderRadius: "50px",
  backgroundColor: "#C2E346",
  height: "30px",
  width: "30px",
  textAlign: "center",
  padding: "0.2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer"
}

const modalParent = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const modalStyle = {
  backgroundColor: "white",
  width: "400px",
  margin: "0 auto",
  border: "2px solid rgb(0, 0, 0)",
  padding: "32px",
  boxShadow: "24",
}

function getScore (data) {
  if(localStorage.getItem(data)){
    const userScore = localStorage.getItem(data)
    return userScore
  }
}

const InformativeIcons = () => {

  const [openRules, setOpenRules] = useState(false)
  const handleOpenRules = () => setOpenRules(true)
  const handleCloseRules= () => setOpenRules(false)

  const [openScore, setOpenScore] = useState(false)
  const handleOpenScore = () => setOpenScore(true)
  const handleCloseScore= () => setOpenScore(false)

  useEffect(() => {
    if(!localStorage.getItem('classic')){
      const classic = 0
      const half = 0
      const zen = 0
      localStorage.setItem("classic", classic)
      localStorage.setItem("half", half)
      localStorage.setItem("zen", zen)
    }
  }, [])
  

  return (
    <Box sx = {{
      display: "flex",
      margin: "0 auto",
      justifyContent: "space-around",
      alignItems: "center",
      width: {"xs": "90%", "md": "60%"}
    }}>
      <Box sx = {iconStyle}>
        <QuestionMarkIcon fontSize='small' onClick={handleOpenRules}/>
        <Modal open={openRules} onClose={handleCloseRules}>
          <Box onClick={handleCloseRules} sx = {modalParent}>
            <Box sx = {modalStyle}>
              <Typography variant='h1' fontSize="34px" textAlign="center" marginBottom="1rem" height="20%">
                Como jogar:
              </Typography>
              <Typography variant='subtitle1' fontSize="22px" textAlign="center" marginLeft="1rem" height="60%">
                Voc?? receber?? letras aleat??rias e seu objetivo ?? conseguir a maior pontua????o poss??vel, 
                cada palavra que voc?? formar te recompensar?? com pontos
              </Typography>
            </Box>
          </Box>
        </Modal>
      </Box>
      <Box sx = {iconStyle}>
        <EmojiEventsIcon fontSize='small' onClick={handleOpenScore}/>
        <Modal open={openScore} onClose={handleCloseScore}>
          <Box onClick={handleCloseScore} sx = {modalParent}>
            <Box sx = {modalStyle}>
              <Typography variant='h1' fontSize="34px" textAlign="center" marginBottom="1rem" height="25%">
                Sua maior pontua????o foi:
              </Typography>
              <List>
                <ListItem>
                  <Typography variant='subtitle1' fontSize="22px" textAlign="center" marginLeft="1rem" height="25%">
                    Classico: {getScore("classic")}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant='subtitle1' fontSize="22px" textAlign="center" marginLeft="1rem" height="25%">
                    Metade: {getScore("half")}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant='subtitle1' fontSize="22px" textAlign="center" marginLeft="1rem" height="25%">
                    Zen: {getScore("zen")}
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  )
}

export default InformativeIcons