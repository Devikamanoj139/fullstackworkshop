export default function TodoItem({ todo, deleteTodo }) {
    return (
        <div className="item">
            <div className="item-text">{todo}</div>
            <button className="delete-button" onClick={deleteTodo}>Delete</button>
            <button className="update-button">Update</button>
        </div>
    );
}