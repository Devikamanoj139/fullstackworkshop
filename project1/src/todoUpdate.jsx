export default function TodoUpdate({ value, handleChange, saveTodo }) {
    return (
      <form className="input-group" onSubmit={(e) => saveTodo(e)}>
        <input
          type="text"
          className="input"
          placeholder="Add a new todo"
          onChange={handleChange}
          value={value}
        />
        <button className="add-button">Save</button>
      </form>
    );
  }