import React, { useState } from "react";

function ValidatedNameForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(""); // State for the error message

  const validateName = (currentName: string) => {
    if (!currentName.trim()) {
      setNameError("Navn er påkrevd."); // Name is required
      return false;
    }
    if (currentName.trim().length < 2) {
      setNameError("Navn må være minst 2 tegn."); // Name must be at least 2 characters
      return false;
    }
    setNameError(""); // Clear error if valid
    return true;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);
    // Optional: Validate on change for immediate feedback
    // validateName(newName);
  };

  const handleBlur = () => {
    // Validate when the input loses focus
    validateName(name);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validate on submit before proceeding
    if (validateName(name)) {
      alert(`Hei, ${name}! Ditt navn er sendt inn.`);
      setName(""); // Clear input
      setNameError(""); // Clear error
    } else {
      console.log("Validering feilet.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Validering av Navn</h2>
      <div>
        <label htmlFor="nameInput">Navn:</label>
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={handleChange}
          onBlur={handleBlur} // Add onBlur handler
          aria-describedby="nameError" // For accessibility
        />
        {nameError && (
          <p id="nameError" style={{ color: "red", fontSize: "0.9em" }}>
            {nameError}
          </p>
        )}
      </div>
      <button type="submit">Send inn</button>
    </form>
  );
}

export default ValidatedNameForm;
