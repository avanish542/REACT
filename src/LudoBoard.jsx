import { useState } from   "react";

function LudoBoard() {
    let [moves, setmoves] = useState({ blue: 0, red: 0, yellow:0, green: 0 });

    let updateBlue = () => {
        setmoves((prevMoves) => {
            return {...prevMoves, blue: prevMoves.blue + 1};
        });
    };
    let updateYellow = () => {
        setmoves((prevMoves) => {
            return {...prevMoves, yellow: prevMoves.yellow + 1};
        });
    };
    let updateGreen = () => {
        setmoves((prevMoves) => {
            return {...prevMoves, green: prevMoves.green + 1};
        });
    };
    let updateRed = () => {
        setmoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red + 1};
        });
    };
    return (
        <div style={{textAlign:"center", marginTop:"114px", marginBottom:"114px", fontSize:"20px"}}> 
            <h1>Ludo Board</h1>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
       
      );
}

export default LudoBoard;