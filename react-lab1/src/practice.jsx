// Section 16 practice: import these into App temporarily to explore them.
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <p>
      <button type="button" onClick={() => setCount((c) => c - 1)}>−</button>
      {count}
      <button type="button" onClick={() => setCount((c) => c + 1)}>+</button>
    </p>
  );
}

export function columnTotals(matrix) {
  return matrix.length === 0 ? [] :
    matrix[0].map((_, c) => matrix.reduce((sum, row) => sum + row[c], 0));
}

export function LightSwitch({ on, onToggle }) {
  return <button type="button" onClick={onToggle}>{on ? "On" : "Off"}</button>;
}

export function Room() {
  const [lights, setLights] = useState([false, false]);
  const count = lights.filter(Boolean).length;
  function toggle(index) {
    setLights((prev) => prev.map((on, i) => i === index ? !on : on));
  }
  return (
    <>
      {lights.map((on, i) => <LightSwitch key={i} on={on} onToggle={() => toggle(i)} />)}
      <p>{count} of {lights.length} lights on</p>
    </>
  );
}
