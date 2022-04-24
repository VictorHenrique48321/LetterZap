import React from 'react'

import ContainerHome from '../ContainerHome.js'
import DifficultOptions from '../DifficultOptions.js'
import InformativeIcons from '../InformativeIcons.js'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; 

const Home = () => {

  return (
    <ContainerHome>
      <DifficultOptions nameGame={"Classico"} description={"Maior Palavra"}/>
      <DifficultOptions nameGame={"Metade"} description={"Metade das palavras"}/>
      <DifficultOptions nameGame={"Zen"} description={"Sem limite de tempo"}/>
      <InformativeIcons/>
    </ContainerHome>
  )
}

export default Home