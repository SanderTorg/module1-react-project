import { useState, useEffect } from "react";

interface DataPageProps {
  userId?: string;
}

function UserProfile({ userId }: DataPageProps) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (!userId) return;
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const response = await fetch<User>(
          `https://dummyjson.com/users/${userId}`,
          { signal },
        );
        if (!response.ok) throw new Error("Failed to fetch user");
        const data = await response.json();
        console.log("Fetched user data:", data);
        setUser(data.data);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          console.log("Fetch aborted");
          return;
        }

        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
    return () => {
      controller.abort();
    };
  }, [userId]);

  if (isLoading) return <p>Laster profil...</p>;
  if (error) return <p>Feil: {error}</p>;
  if (!user) return <p>Ingen brukerdata.</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>E-post: {user.email}</p>
    </div>
  );
}

export default UserProfile;
