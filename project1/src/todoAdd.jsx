export default function TodoAdd({ value, handleChange, addTods }) {
    return (
      <form className="input-group" onSubmit={(e) => addTods(e)}>
        <input
          type="text"
          className="input"
          placeholder="Add a new todo"
          onChange={handleChange}
          value={value}
        />
        <button className="add-button">Add</button>
      </form>
    );
  }