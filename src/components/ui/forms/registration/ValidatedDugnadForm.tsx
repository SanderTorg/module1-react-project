import { useState } from "react";

// Basic email regex (for demonstration, robust regex can be complex)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ValidatedDugnadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bringsTools: false,
    preferredTask: "Hagearbeid",
  });

  const [errors, setErrors] = useState({}); // Object to hold all error messages

  const isFormValid = Object.values(errors).every((error) => error === "");
  // ... and also ensure required fields aren't empty initially

  const validateField = (fieldName, value) => {
    let newError = "";
    switch (fieldName) {
      case "name":
        if (!value.trim()) {
          newError = "Navn er påkrevd.";
        } else if (value.trim().length < 2) {
          newError = "Navn må være minst 2 tegn.";
        }
        break;
      case "email":
        if (!value.trim()) {
          newError = "E-post er påkrevd.";
        } else if (!EMAIL_REGEX.test(value)) {
          newError =
            'Ugyldig e-postformat. Forventet format er "navn@domene.no".';
        }
        break;
      // Add more cases for other fields if needed
      default:
        break;
    }
    return newError;
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newFieldValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newFieldValue,
    }));

    // Validate on change for immediate feedback
    const fieldError = validateField(name, newFieldValue);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate name
    const nameError = validateField("name", formData.name);
    if (nameError) {
      newErrors.name = nameError;
      isValid = false;
    }

    // Validate email
    const emailError = validateField("email", formData.email);
    if (emailError) {
      newErrors.email = emailError;
      isValid = false;
    }

    // ... validate other fields as needed ...

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Validert dugnadsdata:", formData);
      alert(`Takk, ${formData.name}! Din påmelding er registrert.`);
      setFormData({
        name: "",
        email: "",
        bringsTools: false,
        preferredTask: "Hagearbeid",
      });
      setErrors({}); // Clear all errors
    } else {
      console.log("Skjemavalidering feilet.");
      // Focus first field with an error (optional UX improvement)
      const firstErrorField = Object.keys(errors).find((key) => errors[key]);
      if (firstErrorField) {
        const fieldElement = document.getElementById(firstErrorField);
        if (fieldElement) {
          fieldElement.focus();
        }
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "400px",
      }}
    >
      <h2>Dugnad Påmelding (Validert)</h2>
      <div>
        <label htmlFor="name">Fullt navn:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-describedby="nameError"
        />
        {errors.name && (
          <p
            id="nameError"
            style={{ color: "red", fontSize: "0.9em", margin: "0" }}
          >
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="email">E-post:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-describedby="emailError"
        />
        {errors.email && (
          <p
            id="emailError"
            style={{ color: "red", fontSize: "0.9em", margin: "0" }}
          >
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="preferredTask">Ønsket oppgave:</label>
        <select
          id="preferredTask"
          name="preferredTask"
          value={formData.preferredTask}
          onChange={handleChange}
        >
          <option value="Hagearbeid">Hagearbeid</option>
          <option value="Maling">Maling</option>
          <option value="Rydding">Rydding</option>
          <option value="Servering av vafler">Servering av vafler</option>
        </select>
        {/* No specific error displayed for select in this example, but could be added */}
      </div>
      <div>
        <input
          type="checkbox"
          id="bringsTools"
          name="bringsTools"
          checked={formData.bringsTools}
          onChange={handleChange}
        />
        <label htmlFor="bringsTools" style={{ marginLeft: "5px" }}>
          Jeg kan ta med eget verktøy
        </label>
      </div>
      <button
        type="submit"
        disabled={!isFormValid || !formData.name /* etc. */}
      >
        Meld deg på
      </button>
      ;
    </form>
  );
}

export default ValidatedDugnadForm;
