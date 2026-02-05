import useCounter from "./CounterStore";

function Counter() {
  const count = useCounter((state) => state.count);
  const increment = useCounter((state) => state.increment);
  const decrement = useCounter((state) => state.decrement);
  const setCount = useCounter((state) => state.setCount);
  const addFive = useCounter((state) => state.addFive);
  const reset = useCounter((state) => state.reset);

  return (
    <div>
      <h2>Teller</h2>
      <p>Nåværende verdi: {count}</p>
      <button onClick={increment}>Øk med 1</button>
      <button onClick={decrement}>Reduser med 1</button>
      <button onClick={() => setCount(5)}>Endre til 5</button>
      <button onClick={addFive}>+5</button>
      <button onClick={reset}>Nullstill</button>
    </div>
  );
}

export default Counter;
