import AddTodoForm from "../../ui/tanstack/AddTodoForm";
import GamesFetchingUsingTanstack from "../../ui/tanstack/GamesFetchingUsingTanstack";

function TanstackPage() {
  return (
    <>
      <h1>Tanstack Page</h1>
      <GamesFetchingUsingTanstack gameId={2} />
      <AddTodoForm></AddTodoForm>
    </>
  );
}

export default TanstackPage;
