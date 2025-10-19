import { useState, type ChangeEvent, type FormEvent } from "react";

type TodoType = {
  id: string;
  text: string;
  completed: boolean;
  dueDate: Date;
};
type onAddType = {
  onAdd: (newTod: TodoType) => void;
};
export default function AddTodo({ onAdd }: onAddType) {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  let API_URL = "http://localhost:3000/todos";
  const handleAddToDo = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!text.trim() || !dueDate) return;
      const dueDateString = new Date(dueDate).toISOString().split("T")[0];
      let newTodo = {
        text,
        completed: false,
        dueDate: dueDateString,
      };
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });
      let data = await res.json();

      onAdd(data);
      setText("");
      setDueDate("");
    } catch (error) {
      console.log("Error Occur while adding", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-2 items-center mb-4"
    >
      <input
        type="text"
        value={text}
        onChange={handleAddToDo}
        placeholder="Add New Todo"
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto"
      />
      <input
        type="date"
        value={dueDate}
        onChange={handleDate}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Add Todo
      </button>
    </form>
  );
}
