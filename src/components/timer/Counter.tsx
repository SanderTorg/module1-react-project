import { useEffect, useState } from "react";

function Counter() {
  // Call useState with an initial value (e.g., 0)
  // count: the current state value (initially 0)
  // setCount: the function to update the 'count' state
  const [count, setCount] = useState(0);

  // Effect Hook: Runs after every render
  useEffect(() => {
    // Side effect: Update the document title
    console.log("Updating title..."); // See when this runs
    document.title = `Teller: ${count}`;
  }); // No dependency array yet

  console.log("Rendering component..."); // See when this runs

  // Function to handle the button click
  const handleIncrement = () => {
    // Update the state using the setter function
    // The setter function has a callback function which passes
    // through the state, ensuring that it's using an updated version
    // of the state.
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <h2>Teller</h2>
      {/* Display the current state value */}
      <p>Nåværende verdi: {count}</p>
      {/* Call handleIncrement when the button is clicked */}
      <button onClick={handleIncrement}>Øk med 1</button>
    </div>
  );
}

export default Counter;
