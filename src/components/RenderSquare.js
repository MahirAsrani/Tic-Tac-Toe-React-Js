import React from 'react';

const Square = ({ index, value, clickSQ }) => {
  return (
    <div className={`sq ${value}`} onClick={() => clickSQ(index)}>
      <h3>{value}</h3>
    </div>
  );
};

const RenderSquare = ({ clickSQ, index, boardSquare }) => {
  return <Square value={boardSquare[index]} index={index} clickSQ={clickSQ} />;
};
export default RenderSquare;
