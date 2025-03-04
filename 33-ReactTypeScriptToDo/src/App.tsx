import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

interface ToDo {
  id: string;
  text: string;
  completed: boolean;
}

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [toDo, setToDo] = useState<ToDo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDo));
  }, [toDo]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      setErrorMessage("Task cannot be empty!");
      return;
    }

    const todo: ToDo = {
      id: nanoid(),
      text: inputValue.trim(),
      completed: false,
    };

    setToDo([...toDo, todo]);
    setInputValue("");
    setErrorMessage("");
  };

  const handleDelete = (id: string) => {
    setToDo(toDo.filter((item) => item.id !== id));
  };

  const handleChecked = (id: string) => {
    setToDo(
      toDo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-gray-700 text-center mb-4">
          My To-Do List
        </h1>

        {errorMessage && <p className="text-red-500 text-sm mb-2">{errorMessage}</p>}

        <form className="flex mb-4" onSubmit={handleSubmit}>
          <input
            className={`flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 ${
              errorMessage ? "border-red-500 focus:ring-red-400" : "focus:ring-green-400"
            }`}
            type="text"
            placeholder="Add a new task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition"
          >
            Add
          </button>
        </form>

        <ul className="space-y-3">
          {toDo.length > 0 ? (
            toDo.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-md shadow-sm"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleChecked(item.id)}
                    className="w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-2 focus:ring-green-400"
                  />
                  <span
                    className={`ml-3 ${
                      item.completed ? "line-through text-gray-500" : "text-gray-700"
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">There is no todo,yet!</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
