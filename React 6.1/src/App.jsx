import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("noname");

  const randomNum = () => setName(Math.floor(Math.random() * 10));

  return (
    <>
      <div onClick={() => randomNum()}>Click to get random number : {name}</div>
    </>
  );
}

export default App;
