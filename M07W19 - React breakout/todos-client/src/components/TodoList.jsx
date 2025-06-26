import Todo from "./Todo";

const TodoList = (props) => {
    return(
        <>
            <h2> List of todos </h2>
            {
                props.todos.map((todo, index) => {
                    return( <Todo key={index} 
                                  description={todo.description}
                                  status={todo.status} />
                    )
                })
            }
        </>
    );
}

export default TodoList;