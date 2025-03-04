import { useState } from "react";
import { nanoid } from "nanoid";
import { FaTrashAlt } from "react-icons/fa";
import "./App.css";

function App() {
  const [toDos, settoDos] = useState([]);
  const [inputValue, setinputValue] = useState("");

  const handleInputValue = (e) => {
    e.preventDefault();

    if (inputValue == "") {
      alert("Zəhmət olmasa məlumat daxil edin!");
      return;
    }

    const newToDo = {
      id: nanoid(6),
      text: inputValue,
      createdAt: new Date().toLocaleString(),
      isCompleted: false,
    };

    settoDos([...toDos, newToDo]);
    console.log(toDos);

    setinputValue("");
  };

  const handleDeleteToDo = (id) => {
    settoDos([...toDos].filter((todo) => todo.id !== id));
  };

  const handleCheckBox = (id) => {
    settoDos (
      toDos.map((todo)=> todo.id ==id ? {...todo, isCompleted: !todo.isCompleted}: todo)
    )
  };

  const handleDeleteAll = () => {
    settoDos([]);
  };

  return (
    <div className="todo-app">
      <form className="todo-input" action="">
        <input
          value={inputValue}
          type="text"
          onChange={(e) => {
            setinputValue(e.target.value);
          }}
        />
        <button onClick={handleInputValue}>Add</button>
        <button className="deleteAll" onClick={handleDeleteAll}>
          Delete All
        </button>
      </form>

      <h3 className="header">TO DO LIST</h3>
      {toDos.length > 0 ? (
        toDos.map((todo) => (
          <ul key={todo.id}>
            <li className="todo-item">
              <input
                onChange={()=>{handleCheckBox(todo.id)}}
                className="todo-checkbox"
                type="checkbox"
                id=""
              />
              <div>
              <p className={`todo-text ${todo.isCompleted ? "completed" : ""}`}>{todo.text}</p>
              <p className={`date ${todo.isCompleted ? "completed" : ""}`}>{todo.createdAt}</p>
              </div>
      
              <button
                className="todo-delete"
                onClick={() => {
                  handleDeleteToDo(todo.id);
                }}
              >
                <FaTrashAlt />
              </button>
            </li>
          </ul>
        ))
      ) : (
        <p className="validation">There is no to-do</p>
      )}
    </div>
  );
}

export default App;
