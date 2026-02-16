import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Todo, CreateTodoInput } from "../../../types";
import { useForm } from "react-hook-form";

const API_URL = "https://dummyjson.com/todos/add";

const createTodo = async (newTodo: CreateTodoInput) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo),
  });
  if (!response.ok) throw new Error("Failed to create todo");
  return response.json();
};

export default function AddTodoForm() {
  const queryClient = useQueryClient();

  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/todos");
      if (!response.ok) throw new Error("Failed to fetch todos");
      return response.json();
    },
  });

  const mutation = useMutation({
    mutationFn: createTodo,
    onSuccess: (data: Todo) => {
      console.log("Todo created:", data);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error("Error creating todo:", error.message);
    },
  });

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get("title") as string;

    if (title) {
      mutation.mutate({
        todo: title,
        completed: false,
        userId: 1,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="New todo title"
        disabled={mutation.isPending}
      />
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Adding..." : "Add Todo"}
      </button>
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
    </form>
  );
}
