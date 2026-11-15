import Cell from "./Cell.jsx";

export default function Row({ values, r, max, onIncrement, onDecrement }) {
  const total = values.reduce((sum, value) => sum + value, 0);
  return (
    <tr>
      {values.map((value, c) => (
        <td key={c}>
          <Cell row={r} col={c} value={value}
            isMax={max > 0 && value === max}
            onClick={() => onIncrement?.(r, c)}
            onDecrement={() => onDecrement?.(r, c)} />
        </td>
      ))}
      <td className="total" aria-label={`Row ${r + 1} total`}>{total}</td>
    </tr>
  );
}
