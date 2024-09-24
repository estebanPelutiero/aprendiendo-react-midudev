export const Square = ({ children, updateBoard, index, isSelected }) => {
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
