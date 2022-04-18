import React from 'react'
import ContainerGame from '../game/ContainerGame'

import InfoGame from "../game/InfoGame"
import WordsGame from '../game/WordsGame'
import LettersGame from '../game/LettersGame'


const Classic = () => {
  return (
    <ContainerGame>
      <InfoGame/>
      <WordsGame/>
      <LettersGame/>
    </ContainerGame>
  )
}

export default Classic