import { Link } from "react-router-dom";

const TodoList = ({todos}) => {
    return(
        <>
            <h2> Todo list </h2>
            <ul>
                {todos.map((todo, index) => {
                    return(
                        <li key={`todo_${index}`}>
                            <Link to={`/todo/detail/${todo.id}`}> {todo.description} </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default TodoList;