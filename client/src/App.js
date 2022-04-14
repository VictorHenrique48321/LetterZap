import React, { useEffect, useState } from 'react'

const App = () => {

  const [backendData, setBackendData] = useState([{}])

  function callData () {
    backendData.forEach(element => {
      console.log(element)
    })
  }

  useEffect(() => {
    fetch("http://localhost:5000/api")
    .then(response => response.json())
    .then(data => {setBackendData(data)})
  }, [])

  return (

    <div>
      <button style={{backgroundColor: "red"}} onClick={callData}>Click Me</button>
    </div>
  )
}

export default App