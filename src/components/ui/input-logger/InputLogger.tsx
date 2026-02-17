function InputLogger() {
  return (
    <>
      <form>
        <label htmlFor="inputLogger">Type something:</label>
        <input
          id="inputLogger"
          type="text"
          aria-label="inputLogger"
          onChange={(e) => console.log(e.target.value)}
        />
      </form>
    </>
  );
}

export default InputLogger;
