import React, { useEffect, useState, useRef } from 'react'
import {useParams} from "react-router-dom"

import ContainerGame from '../game/ContainerGame'
import InfoGame from "../game/InfoGame"
import WordsGame from '../game/WordsGame'
import LettersGame from '../game/LettersGame'

const Game = () => {
  
  let params = useParams()

  const [wordSent, setWordSent] = useState("")
  const [score, setScore] = useState(0)

  const letterGame = useRef([])
  const word = useRef([])
  const wordsLetters = useRef([])

  useEffect(() => {
    letterGame.current = []
    word.current = []
    wordsLetters.current = []
  }, [wordSent, score])

  return (
    <ContainerGame>
      <InfoGame 
        gamemode={params.gamemode}
        score={score}
        />
      <WordsGame 
        gamemode={params.gamemode} 
        wordSent={wordSent}
        wordsLetters={wordsLetters.current}
        setScore={setScore}
        score={score}
        />
      <LettersGame 
        gamemode={params.gamemode} 
        setWordSent={setWordSent}
        letterGame={letterGame.current}
        word={word.current}
        />
    </ContainerGame>
  )
}

export default Game