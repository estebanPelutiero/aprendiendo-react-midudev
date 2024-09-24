import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck) => {
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

  export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }