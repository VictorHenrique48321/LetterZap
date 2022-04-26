const themes = {
  
  container: {
    width: "100vw",
    height: "100vh",
  },

  infoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    backgroundColor: "#9AC601",
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
    width: {"xs": "70px", "sm": "100px"},
    height: {"xs": "20px", "sm": "30px"},
    marginRight: {"xs": ".3rem", "sm": "none"},
    border: "2px solid black"
  },

  infoIcon: {
    width: "30px",
    height: "30px",
    border: {"xs": "1px solid black", "sm": "2px solid black"},
    borderRadius: "5px",
    backgroundColor: "#b5d545"
  },
  
  gameContainer: {
    height: "100%",
    backgroundColor: "#b5d545",
  },
  
  wordsContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: {"xs": "90%"},
    height: {"xs": "100%", "sm": "90%"},
    margin: "0 auto"
  },
  
  words: {
    display: "flex",
    margin: "0 auto",
    width: {"xs": "100px", "sm": "auto"},
  },

  word: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: {"xs": "14px", "sm": "18px"},
    backgroundColor: "#8FAF02",
    border: {"xs": "1px solid black", "sm": "2px solid black"},
    margin: ".5rem .2rem",
    width: {"xs": "15px", "sm": "25px", "md": "30px"},
    height: {"xs": "15px", "sm": "25px", "md": "30px"},
    textTransform: "uppercase",
    color: "#8FAF02",
    userSelect: "none"
  },
  
  lettersContainer: {
    height: "100%",
    backgroundColor: "#9AC601"
  },

  lettersBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "34px",
    backgroundColor: "#F9FFD4",
    margin: ".5rem .2rem",
    border: "3px ridge #C0EE0F",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    textTransform: "uppercase"
  }, 

  whiteBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "34px",
    backgroundColor: "#8FAF02",
    margin: ".5rem .2rem",
    border: "3px ridge #C0EE0F",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    textTransform: "uppercase"
  }
}

export default themes
