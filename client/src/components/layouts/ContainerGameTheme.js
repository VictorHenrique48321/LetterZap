const themes = {

  container: {
    width: "100vw",
    height: "100vh"
  },

  infoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
  },

  infoGame: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    width: "70%",
    margin: "0 auto"
  },

  infoBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100px",
    height: "30px",
    border: "2px solid black"
  },
  
  gameContainer: {
    height: "100%"
  },
  
  wordsContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "80%",
    height: "80%",
    margin: "0 auto"
  },
  
  words: {
    display: "flex",
    flexWrap: "wrap"
  },

  word: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    backgroundColor: "white",
    border: "2px solid black",
    margin: ".5rem .2rem",
    width: "40px",
    height: "40px",
  },
  
  lettersContainer: {
    height: "100%"
  },

  lettersBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "34px",
    backgroundColor: "white",
    margin: ".5rem .2rem",
    border: "3px solid black",
    width: "50px",
    height: "50px",
    cursor: "pointer"
  }
}

export default themes
