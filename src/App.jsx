import React, {useEffect} from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import './App.css'

function App() {
    const { width, height } = useWindowSize()

  return (
      <>
          <h1>Эрик, с ДР!</h1>
          <img src="https://media1.tenor.com/m/gIKfNZd5YkQAAAAd/pudge-dance.gif" width="518" height="291.375"
               alt="a computer screen shows a man laying on the ground with a knife on the ground"
               style={{maxWidth: "518px"}}/>
          <div className="card">

              <Confetti
                  width={width}
                  height={height}
                  numberOfPieces={70}/>

          </div>
      </>
  )
}

export default App
