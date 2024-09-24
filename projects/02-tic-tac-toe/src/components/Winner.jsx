import React from "react";
import { Square } from "./Square";

const Winner = ({ winner, handleRestartGame }) => {
    
  if (winner === null) return null;

  const winnerText = winner === false ? "Empate" : "Ganó:";

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>

        <footer>
          <button onClick={handleRestartGame}>Empezar Denuevo</button>
        </footer>
      </div>
    </section>
  );
};

export default Winner;
