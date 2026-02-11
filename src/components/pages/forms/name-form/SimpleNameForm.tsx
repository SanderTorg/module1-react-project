import { useState } from "react";

function SimpleNameForm() {
  const [name, setName] = useState(""); // Step 1: State to hold the input value

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Step 3: onChange handler to update the state
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default HTML form submission (page reload)
    alert(`Hei, ${name}! Ditt navn er sendt inn.`); // Use the state value
    setName(""); // Optionally clear the input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nameInput">Navn:</label>
      <input
        type="text"
        id="nameInput"
        value={name} // Step 2: Bind input value to state
        onChange={handleChange} // Step 3: Call handler on change
      />
      <button type="submit">Send inn</button>
    </form>
  );
}

export default SimpleNameForm;
