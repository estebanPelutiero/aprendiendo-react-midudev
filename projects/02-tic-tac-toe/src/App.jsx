import { useState } from "react";
import "./App.css";

const TURNS = {
  X: "x",
  O: "o",
};

const Square = ({ children, updateBoard, index, isSelected }) => {
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div
      onClick={handleClick}
      className={`square ${isSelected ? "is-selected" : ""}`}
      key={index}
    >
      {children}
    </div>
  );
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  const [winner, setWinner] = useState(null); //null equivale a que aun no hay ganador, false a que hay empate

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
  };

  const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] && //revisa que haya una x u o en la primer posicion
        boardToCheck[a] === boardToCheck[b] && // Ve si la posicion 1 es igual a la 2
        boardToCheck[a] === boardToCheck[c] // Ve si la posicion 1 es igual a la 3
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };

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

    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      setWinner(newWinner);
      console.log(newWinner);
    }
  };

  return (
    <main className="board">
      <h1>Tic-Tac-Toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square updateBoard={updateBoard} key={index} index={index}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {winner !== null && (
        <section className="winner">
          <div className="text">
            <h2>{winner === false ? "Empate" : "Ganó:"}</h2>
            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>

            <footer>
              <button onClick={handleRestartGame}>Empezar Denuevo</button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
