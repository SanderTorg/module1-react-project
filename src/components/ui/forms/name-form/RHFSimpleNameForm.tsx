import { useForm } from "react-hook-form";

function RHFSimpleNameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: { name: string }) => {
    alert(`Hei, ${data.name}! Ditt navn er sendt inn.`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Enkel Navn Skjema</h2>
      <div>
        <label htmlFor="nameInput">Navn:</label>
        <input
          type="text"
          id="nameInput"
          {...register("name", {
            required: "Navn er påkrevd",
            minLength: { value: 2, message: "Navn må være minst 2 tegn" },
          })}
          aria-invalid={errors.name ? "true" : "false"}
        />

        {errors.name && (
          <p style={{ color: "red", fontSize: "0.9em" }}>
            {errors.name.message}
          </p>
        )}
      </div>
      <button type="submit">Send inn</button>
    </form>
  );
}

export default RHFSimpleNameForm;
