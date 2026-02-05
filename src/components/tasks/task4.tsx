function TaskExercise4() {
  const cityName = "Oslo";
  const population = 709037;
  const imageUrl = "https://placehold.co/200x200/png";
  const imageAltText = "Placeholder image representing Oslo";

  return (
    <div className="flex flex-col items-center gap-4">
      <h1>{cityName} </h1>
      <p className="flex w-full" style={{ color: "green" }}>
        Population: {population}
      </p>
      <img src={imageUrl} alt={imageAltText} />
    </div>
  );
}

export default TaskExercise4;
