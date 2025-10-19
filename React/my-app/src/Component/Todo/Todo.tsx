import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { useNavigate } from "react-router-dom";

type TodoType = {
  id: string;
  text: string;
  completed: boolean;
  dueDate: Date;
};
export default function Todo() {
  const [todo, setTo] = useState<TodoType[] | []>([]);
  const navigate = useNavigate();
  let API = "http://localhost:3000/todos";

  useEffect(() => {
    const fetchTod = async () => {
      try {
        let response = await fetch(API);
        let data = await response.json();
        setTo(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTod();
  }, []);
  const handleAdd = (newTodo: TodoType) => {
    setTo([...todo, newTodo]);
  };
  const handleEdit = (preToDo: TodoType) => {
    navigate(`/edit/${preToDo.id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`${API}/${id}`, { method: "Delete" });
      const filteredData = todo.filter((todo) => todo.id !== id);
      setTo(filteredData);
    } catch (error) {
      console.log("Error occur while deleting", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <AddTodo onAdd={handleAdd} />

      <ul className="space-y-3">
        {todo.map((todos) => (
          <li
            key={todos.id}
            className="border border-gray-300 rounded-md p-3 flex flex-col md:flex-row md:justify-between md:items-center bg-gray-50 hover:bg-gray-100 transition"
          >
            <div className="flex flex-col">
              <span className="font-semibold">Category:</span>
              <span
                className={todos.completed ? "line-through text-gray-400" : ""}
              >
                {todos.text}
              </span>
            </div>

            <div className="flex flex-col mt-2 md:mt-0">
              <span className="font-semibold">Completed:</span>
              <span>{todos.completed ? "Yes" : "No"}</span>
            </div>

            <div className="flex flex-col mt-2 md:mt-0">
              <span className="font-semibold">Due Date:</span>
              <span>{todos.dueDate.toString()}</span>
            </div>

            <div className="flex flex-col mt-2 md:mt-0">
              <span className="font-semibold">Id:</span>
              <span>{todos.id}</span>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <button
                className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                onClick={() => handleEdit(todos)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                onClick={() => handleDelete(todos.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
