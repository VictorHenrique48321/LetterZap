import React, { useEffect, useState, useRef } from 'react'
import {useParams} from "react-router-dom"

import ContainerGame from '../game/ContainerGame'
import InfoGame from "../game/InfoGame"
import WordsGame from '../game/WordsGame'
import LettersGame from '../game/LettersGame'
import LoadingGame from '../game/LoadingGame'

const Game = () => {
  
  let params = useParams()

  const [wordSent, setWordSent] = useState("")
  const [score, setScore] = useState(0)
  const [backendData, setBackendData] = useState([])
  const [requestFinished, setRequestFinished] = useState(false)
  const [callNeWords, setCallNewWords] = useState(false)

  const letterGame = useRef([])
  const word = useRef([])
  const wordsLetters = useRef([])

  const setGameScore = (gamemode) => {
    if(score > localStorage.getItem(gamemode)){
      localStorage.setItem(gamemode, score)
    }
  }

  useEffect(() => {
    letterGame.current = []
    word.current = []
    wordsLetters.current = []
  }, [wordSent, score, backendData, requestFinished])

  useEffect(() => {
    fetch("https://letterzap.herokuapp.com/api")
      .then(response => response.json())
      .then(data => {setBackendData(data)})
      .then(() => setRequestFinished(!requestFinished))
  }, [callNeWords])
  

  if(requestFinished){
    return (
      <ContainerGame>
        <InfoGame 
          gamemode={params.gamemode}
          score={score}
          setGameScore={setGameScore}
          />
        <WordsGame 
          gamemode={params.gamemode} 
          wordSent={wordSent}
          wordsLetters={wordsLetters.current}
          setScore={setScore}
          score={score}
          backendData={backendData}
          setGameScore={setGameScore}
          callNeWords={callNeWords}
          setCallNewWords={setCallNewWords}
          setRequestFinished={setRequestFinished}
          requestFinished={requestFinished}
          />
        <LettersGame 
          gamemode={params.gamemode} 
          setWordSent={setWordSent}
          letterGame={letterGame.current}
          backendData={backendData}
          word={word.current}
          />
      </ContainerGame>
    )
  } else {
    return (
      <LoadingGame/>
    )
  }
  
}

export default Game