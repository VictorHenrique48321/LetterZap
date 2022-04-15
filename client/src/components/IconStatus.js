import React from 'react'
import { useState } from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Box } from '@mui/system';
import { List, ListItem, Modal, Typography } from '@mui/material';

const iconStyle = {
  borderRadius: "50px",
  backgroundColor: "#1565c0",
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
  const scoreString = localStorage.getItem('UserScore')
  const score = JSON.parse(scoreString)
  return score[data]
}

export const IconStatus = () => {

  const [openRules, setOpenRules] = useState(false)
  const handleOpenRules = () => setOpenRules(true)
  const handleCloseRules= () => setOpenRules(false)

  const [openScore, setOpenScore] = useState(false)
  const handleOpenScore = () => setOpenScore(true)
  const handleCloseScore= () => setOpenScore(false)

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
                Você receberá letras aleatórias e seu objetivo é conseguir a maior pontuação possível, 
                cada palavra que você formar te recompensará com pontos
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
                Sua maior pontuação foi:
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
