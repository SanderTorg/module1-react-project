// Inside ProductListPage.jsx (adding controls)
import { useEffect, useState } from "react";
import Button from "../../ui/buttons/Button";
import Deleteme from "../../ui/buttons/Deleteme";
import TaskExercise4 from "../../../components/tasks/task4";
import UserProfile from "../../../components/userProfile/UserProfile";
import Card from "../../ui/card/Card";
import EventCard from "../../ui/event-component/EventCard";
import Counter from "../../../components/timer/Counter";
import SafeCounter from "../../../components/safe-counter/SafeCounter";
import InputLogger from "../../../components/input-logger/InputLogger";
import MouseTracker from "../../../components/mouse-tracker/MouseTracker";
import DummyFetch from "../../../components/dummy-fetch/FetchDummy";
import Layout from "../../user-context/Layout";
import UserContext from "../../../hooks/userhooks/UserContext";

function HomePage() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("Ola Nordmann");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://dummyjson.com/users/${1}`);
      const data = await res.json();
      console.log(data);
      setUserName(data.firstName);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Learning React</h1>
      <UserContext.Provider value={{ name: userName }}>
        <Card>
          <p>Welcome, {userName}!</p>
          <Layout></Layout>
        </Card>
      </UserContext.Provider>

      <Card>
        <DummyFetch></DummyFetch>
      </Card>

      <EventCard
        title="17. mai-feiring"
        date="2024-05-17"
        location="Slottsplassen, Oslo"
      ></EventCard>

      <EventCard
        title="Sommerkonsert"
        date="2024-07-10"
        location="Festningen, Bergen"
      ></EventCard>

      <UserProfile name="Ola Nordmann" city="Oslo" age={30} isActive={true} />
      <UserProfile name="Hans Håkon" city="Bergen" age={40} isActive={false} />

      <Card>
        <p>Dette er annet innhold i et kort uten tittel.</p>
        <button>En knapp</button>
      </Card>

      <Card>
        <Counter></Counter>
      </Card>

      <Card>
        <SafeCounter></SafeCounter>
      </Card>

      <Card>
        <InputLogger></InputLogger>
      </Card>

      <Card>
        <MouseTracker></MouseTracker>
      </Card>

      <TaskExercise4 />

      <Card>
        <button onClick={() => setCount((count) => count - 665)}>
          count is {count}
        </button>
      </Card>

      <Card title="Welcome Card">
        <Deleteme></Deleteme>
        <Button>Click me!</Button>
      </Card>
    </>
  );
}

export default HomePage;
