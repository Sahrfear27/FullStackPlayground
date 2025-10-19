import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
type TodoType = {
  id: string;
  text: string;
  completed: boolean;
  dueDate: string;
};
/**
 Steps:
 1. Fetch the todo by ID when component mounts
 2. Bind the input to the state
 2. Handle form submit (update todo) and Redirect Back

 * 
 * **/
export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  let API = "http://localhost:3000/todos";
  const [todo, setTodo] = useState<TodoType | null>(null);

  //Fetch Data when component mount
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API}/${id}`);
      if (response.status == 200) {
        const data = await response.json();
        setTodo(data);
      }
      try {
      } catch (error) {
        console.log("Error Occurs", error);
      }
    };
    fetchData();
  }, [id]);
  //Bind the input to the state
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (todo) {
      const { name, value, type, checked } = e.target;
      setTodo({ ...todo, [name]: type === "checkbox" ? checked : value });
    }
  };

  //Handle submit and redirect
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      navigate("/");
    } catch (error) {
      console.log("Error", error);
    }
  };
  if (!todo) {
    return <p className="text-center mt-10">Loading...</p>;
  }
  return (
    <div>
      <h1>Edit Todo</h1>{" "}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-2 items-center mb-4"
      >
        <input
          name="text"
          value={todo?.text}
          onChange={handleChange}
          type="text"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto"
        />
        <input
          type="date"
          name="dueDate"
          value={todo?.dueDate}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <label className="flex items-center gap-2">
          <input
            name="completed"
            type="checkbox"
            checked={todo?.completed}
            onChange={handleChange}
          />
          <span>Completed</span>
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
}
