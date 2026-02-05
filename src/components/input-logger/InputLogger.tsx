import { useState, useEffect } from "react";
function InputLogger() {
  const [inputValue, setInputValue] = useState("");
  const [foo, setFoo] = useState(0);

  useEffect(() => {
    console.log("Input value changed:", inputValue);
  }, [inputValue]);

  useEffect(() => {
    console.log("Foo value changed:", foo);
  }, [foo]);

  return (
    <div>
      <h2>Input Logger</h2>
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
        />
      </form>
      <p>Current Input: {inputValue}</p>
      <button onClick={() => setFoo(foo + 1)}>Increment Foo ({foo})</button>
    </div>
  );
}

export default InputLogger;
