interface UserProfileProps {
  name: string;
  city: string;
  age: number;
  isActive: boolean;
}

function UserProfile({ name, city, age, isActive }: UserProfileProps) {
  // Accessing the props using dot notation
  return (
    <div style={{ border: "1px solid grey", margin: "10px", padding: "10px" }}>
      <h2>Navn: {name}</h2>
      <p>By: {city}</p>
      <p>Alder: {age}</p>
      <p>Status: {isActive ? "Aktiv" : "Inaktiv"}</p>
    </div>
  );
}
export default UserProfile;
