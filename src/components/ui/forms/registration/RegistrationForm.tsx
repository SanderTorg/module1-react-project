import { useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  bringsTools: false,
  preferredTask: "Hagearbeid",
};
function DugnadRegistrationForm() {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:
        type === "checkbox"
          ? (event.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Innsendte dugnadsdata:", formData);
    alert(
      `Takk, ${formData.name}! Din påmelding for dugnad er registrert. Du valgte ${formData.preferredTask}.`,
    );
    // Reset form (optional)
    setFormData(initialFormData);
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
      <h2>Dugnad Påmelding</h2>
      <div>
        <label htmlFor="name">Fullt navn:</label>
        <input
          type="text"
          id="name"
          name="name" // Crucial for generic handleChange
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">E-post:</label>
        <input
          type="email"
          id="email"
          name="email" // Crucial for generic handleChange
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="preferredTask">Ønsket oppgave:</label>
        <select
          id="preferredTask"
          name="preferredTask"
          value={formData.preferredTask}
          onChange={handleChange}
        >
          <option value="Hagearbeid">Hagearbeid (Gardening)</option>
          <option value="Maling">Maling (Painting)</option>
          <option value="Rydding">Rydding (Cleaning/Tidying)</option>
          <option value="Servering av vafler">
            Servering av vafler (Serving waffles)
          </option>
        </select>
      </div>

      <div>
        <input
          type="checkbox"
          id="bringsTools"
          name="bringsTools" // Crucial for generic handleChange
          checked={formData.bringsTools} // Use 'checked' for checkboxes
          onChange={handleChange}
        />
        <label htmlFor="bringsTools" style={{ marginLeft: "5px" }}>
          Jeg kan ta med eget verktøy
        </label>
      </div>

      <button type="submit">Meld deg på</button>
    </form>
  );
}

export default DugnadRegistrationForm;
