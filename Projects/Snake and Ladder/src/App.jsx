import { useState } from "react";
import "./index.css";

function App() {
  const ladders = [
    [2, 23],
    [8, 12],
    [29, 54],
    [17, 93],
    [32, 51],
    [39, 80],
    [62, 78],
    [70, 89],
    [75, 96],
  ];

  const snakes = [
    [31, 14],
    [41, 20],
    [59, 37],
    [67, 50],
    [92, 76],
    [99, 4],
  ];

  const redGrid = [31, 41, 59, 67, 92, 99];
  const blueGrid = [2, 8, 29, 17, 32, 39, 62, 70, 75];
  const [pos, setPos] = useState(0);
  const [dice, setDice] = useState(0);

  let newPos = 0;

  const handleDice = () => {
    const randomDice = Math.ceil(Math.random() * 6);
    setDice(randomDice);

    newPos = pos + randomDice;
    setPos(newPos);
    for (let i = 0; i < ladders.length; i++) {
      if (newPos == ladders[i][0]) {
        newPos = ladders[i][1];
      }
    }

    for (let i = 0; i < snakes.length; i++) {
      if (newPos == snakes[i][0]) {
        newPos = snakes[i][1];
      }
    }

    setTimeout(() => setPos(newPos), 500);
  };

  const handleReset = () => {
    setDice(0);
    setPos(0);
  };

  return (
    <>
      <div className="flex justify-center items-center bg-gray-700">
        <p className="text-3xl font-bold mb-4 ">Ludo Game</p>
      </div>
      <div className="grid grid-cols-10 gap-1">
        {[...Array(101)].map((_, index) => {
          let bgColor = "bg-green-300";
          if (100 - index === pos) {
            bgColor = "bg-pink-500";
          } else if (redGrid.includes(100 - index)) {
            bgColor = "bg-red-500";
          } else if (blueGrid.includes(100 - index)) {
            bgColor = "bg-blue-500";
          }
          return (
            <div
              key={index}
              className={`h-12 flex items-center justify-center ${bgColor} border border-gray-600`}
            >
              {100 - index}
            </div>
          );
        })}
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div>Your position : {pos}</div>
        <div>You got : {dice}</div>
        {pos < 100 ? (
          <button
            onClick={() => handleDice()}
            className="w-1/6 h-8 border bg-blue-500"
          >
            Roll dice
          </button>
        ) : (
          <button onClick={() => handleReset()}>Reset the game</button>
        )}
      </div>
    </>
  );
}
export default App;
