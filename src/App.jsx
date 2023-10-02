
import { useState } from 'react'
import './App.css'

function App() {
  

  const [bord, setBord] = useState(Array(9).fill(""));
  const [move, setMove] = useState("X");
  const [win, setWin] = useState("");

  const checkWin = (bordCopy) => {
    const conditions=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
  ]
    for(let i = 0; i < conditions.length; i++){
      const [a, b, c] = conditions[i];
      if(bordCopy[a] !== "" && bordCopy[a] === bordCopy[b] && bordCopy[a] === bordCopy[c]){
        return true
      }
    }
    return false
  }

const handleClick = (index) => {
  const bordCopy = [...bord];
if(bordCopy[index] !== ""){
  alert("Already Clicked")
  return
}
  bordCopy[index] = move;
  setBord(bordCopy)
  const win = checkWin(bordCopy); 
  if(win){
    setWin(move);
  }
  setMove(move === "X" ? "O" : "X")
}

const resetGame = () => {
 const bordCopy = [...bord];
 bordCopy.fill("");
 setBord(bordCopy);
 setWin("")
}





  return (
    <div className='section'>
      <div className='container'>
        <div className='mainBody'>
          <div className='ticTacContainer'> 
          <h2>Tic Tac Toe Game</h2>
          <h3>{win && `Congratulation ${win} is Winer`}</h3>
            <table>
              <tbody>
                <tr>
                  <td onClick={() => handleClick(0)}>{bord[0]}</td>
                  <td onClick={() => handleClick(1)}>{bord[1]}</td>
                  <td onClick={() => handleClick(2)}>{bord[2]}</td>
                </tr>
                <tr>
                  <td onClick={() => handleClick(3)}>{bord[3]}</td>
                  <td onClick={() => handleClick(4)}>{bord[4]}</td>
                  <td onClick={() => handleClick(5)}>{bord[5]}</td>
                </tr>
                <tr>
                  <td onClick={() => handleClick(6)}>{bord[6]}</td>
                  <td onClick={() => handleClick(7)}>{bord[7]}</td>
                  <td onClick={() => handleClick(8)}>{bord[8]}</td>
                </tr>
              </tbody>
            </table>
            <button onClick={resetGame}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
