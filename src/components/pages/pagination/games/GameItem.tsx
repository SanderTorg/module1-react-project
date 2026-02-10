interface Game {
  name: string;
  year: number;
  genre: string;
}

interface GameItemProps {
  game: Game;
}

function GameItem({ game: { name, year, genre } }: GameItemProps) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{name}</h3>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </div>
  );
}

export default GameItem;
