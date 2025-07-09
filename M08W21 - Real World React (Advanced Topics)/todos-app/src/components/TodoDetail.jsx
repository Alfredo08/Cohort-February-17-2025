import { useParams } from "react-router-dom";

const TodoDetail = ({todos}) => {
    const params = useParams();
    
    const foundTodo = todos.find((todo) => todo.id === params.todoId);

    return(
        <>
            <h2> Todo detail </h2>
            <p> Descrition: {foundTodo.description} </p>
            <p> Status: {foundTodo.status} </p>
            <p> Todo id: {foundTodo.id} </p>
        </>
    );
}

export default TodoDetail;