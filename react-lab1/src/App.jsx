// The whole app: App → Header, Matrix → Cell, Stats.
// App owns the numbers. Matrix and Stats only receive them as props.
import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Matrix from "./Matrix.jsx";
import Stats from "./Stats.jsx";
import { START, incrementAt, decrementAt, zeros } from "./matrix.js";

export default function App() {
  const [matrix, setMatrix] = useState(START);
  const [step, setStep] = useState(1);

  useEffect(() => {
    fetch("/matrix.json")
      .then((res) => res.json())
      .then((data) => setMatrix(data));
  }, []);

  function increment(row, col) {
    setMatrix((prev) => incrementAt(prev, row, col, step));
  }

  function decrement(row, col) {
    setMatrix((prev) => decrementAt(prev, row, col));
  }

  return (
    <main className="app">
      <Header step={step} />
      <div className="board">
        <Matrix matrix={matrix} onIncrement={increment} onDecrement={decrement} />
        <Stats matrix={matrix} />
      </div>
      <div className="controls">
        <label>
          Step{" "}
          <input type="number" min="1" value={step}
            onChange={(event) => setStep(Number(event.target.value))} />
        </label>
        <button type="button" onClick={() => setMatrix((prev) => zeros(prev))}>
          Reset
        </button>
      </div>
      <p className="hint">Right-click a cell to subtract one, down to zero.</p>
    </main>
  );
}
