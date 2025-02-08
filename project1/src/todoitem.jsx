export default function TodoItem ({ todo ,index, deleteTodo,updateTodo}) {
    return (
        <>
        <div className="item">
            <div className="item-text">{todo}</div>
            <button className="delete-button" onClick={() => deleteTodo(index)}>Delete</button>
            <button className="update-button" onClick={() => updateTodo(index)}>Update</button>
        </div>
      </>
    )
}