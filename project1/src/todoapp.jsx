import { useState } from "react";
import TodoItem from "./todoitem";
import TodoAdd from "./todoAdd";
import TodoUpdate from "./todoUpdate";

export default function TodoApp() {
  const [todos, setTodos] = useState(["first", "second", "third"]);
  const [value, setValue] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const

  function handleChange(e) {
    setValue(e.target.value);
  }

  function addTods(e) {
    if (!value) return;
    e.preventDefault();
    setTodos([...todos, value]);
    setValue("");
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function updateTodo(index) {
    const newValue = todos[index];
    setValue(newValue);
    setIsUpdate(true);
    setCurrentIndex(index);
  }

  function saveTodo(e) {
    e.preventDefault();
    setIsUpdate(false);
    const newTodos = [...todos];
    newTodos[currentIndex] = value;
    setTodos(newTodos);
    }

  return (
    <div className="container">
      {isUpdate ? (
        <TodoUpdate
          value={value}
          handleChange={handleChange}
          saveTodo={saveTodo}
        />
      ) : (
        <TodoAdd value={value} handleChange={handleChange} addTods={addTods} />
      )}
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          index={index}
          deleteTodo={() => deleteTodo(index)}
          updateTodo={() => updateTodo(index)}
        />
      ))}
    </div>
  );
}