import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import { TURNS } from "./constants.js";
import { checkWinner, checkEndGame } from "./logic/board.js";
import Winner from "./components/Winner.jsx";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");

    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromBoard = window.localStorage.getItem("turn");

    return turnFromBoard ?? TURNS.X 
  });

  const [winner, setWinner] = useState(null); //null equivale a que aun no hay ganador, false a que hay empate

  const updateBoard = (index) => {
    // Si algun cuadrado ya tiene una x u o, previene que se sobreescriba
    if (board[index] || winner) return;

    // Actualiza el board cada vez que se rellena un cuadrado
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambia el turnero para indicar de quien es el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);

    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const handleRestartGame = () => {
    // Vuelvo el tablero a su estado inicial
    setBoard(Array(9).fill(null));

    // El jugador que empieza la partida es aquel que perdio el ultimo juego
    if (winner === TURNS.X) {
      setTurn(TURNS.O);
    } else {
      setTurn(TURNS.X);
    }

    // Se reinicia el ganador
    setWinner(null);

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  };

  return (
    <main className="board">
      <h1>Tic-Tac-Toe</h1>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square updateBoard={updateBoard} key={index} index={index}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {winner !== null && (
        <Winner winner={winner} handleRestartGame={handleRestartGame} />
      )}
    </main>
  );
}

export default App;
