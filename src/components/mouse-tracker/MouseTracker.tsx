import { useEffect, useState } from "react";

export default function MouseTracker() {
  const [cordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setCoordinates({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>Mouse Tracker</h2>
      <p>
        X: {cordinates.x}, Y: {cordinates.y}
      </p>
    </div>
  );
}
