import React from "react";
import PropTypes from "prop-types";

const Board = (props) => {
  const renderSquare = (i) => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };
  const renderRow = () => {
    let cell = [],
      i = 0;

    while (i < 9) {
      cell.push(
        <div key={i} className="board-row">
          {renderSquare(i)}
          {renderSquare(i + 1)}
          {renderSquare(i + 2)}
        </div>
      );
      i = i + 3;
    }
    return cell;
  };

  return <>{renderRow()}</>;
};

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
