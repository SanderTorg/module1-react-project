import { useEffect, useState } from "react";

function DummyFetch() {
  const [userId, setUserId] = useState<number | string>();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://dummyjson.com/users/${userId || 1}`);
      const data = await res.json();

      setUserId(data.id);
    }
    fetchData();
  }, [userId]);

  return (
    <div>
      <h2>Dummy Fetch Component</h2>
      <label htmlFor="searchName">Search Name:</label>
      <input
        type="text"
        id="searchName"
        onChange={(e) => setUserId(e.target.value)}
      />
      <h3>User ID: {userId}</h3>
    </div>
  );
}

export default DummyFetch;
