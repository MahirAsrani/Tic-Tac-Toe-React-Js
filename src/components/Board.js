import React, { useState } from 'react';
import RenderSquare from './RenderSquare';
import Winning from './Winning';

export const Board = () => {
  const [boardSquare, setBoardSquare] = useState(new Array(9).fill(null));
  const [XisNext, setXisNext] = useState(true);
  const [Winner, setWinner] = useState(null);

  const clickSQ = (index) => {
    let copyboard = [...boardSquare];
    if (copyboard[index] || Winner) return;
    copyboard[index] = XisNext ? 'X' : 'O';
    setBoardSquare(copyboard);
    setWinner(Winning(copyboard));
    setXisNext(!XisNext);
  };

  let status = Winner ? `${Winner} Wins` : `Player : ${XisNext ? 'X' : 'O'} `;

  return (
    <>
      <h2 className="status">{status}</h2>

      <div className="row">
        <RenderSquare clickSQ={clickSQ} index={0} boardSquare={boardSquare} />
        <RenderSquare clickSQ={clickSQ} index={1} boardSquare={boardSquare} />
        <RenderSquare clickSQ={clickSQ} index={2} boardSquare={boardSquare} />
      </div>
      <div className="row">
        <RenderSquare clickSQ={clickSQ} index={3} boardSquare={boardSquare} />
        <RenderSquare clickSQ={clickSQ} index={4} boardSquare={boardSquare} />
        <RenderSquare clickSQ={clickSQ} index={5} boardSquare={boardSquare} />
      </div>
      <div className="row">
        <RenderSquare clickSQ={clickSQ} index={6} boardSquare={boardSquare} />
        <RenderSquare clickSQ={clickSQ} index={7} boardSquare={boardSquare} />
        <RenderSquare clickSQ={clickSQ} index={8} boardSquare={boardSquare} />
      </div>
    </>
  );
};
