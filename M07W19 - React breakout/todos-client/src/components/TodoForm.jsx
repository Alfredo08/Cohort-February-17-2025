import { useState } from "react";
import { useNavigate } from "react-router-dom";


const TodoForm = ({updateListOfTodos}) => {
    const defaultValues = {
        description: "",
        status: ""
    }
    const [newTodo, setNewTodo] = useState(defaultValues);

    const navigate = useNavigate();
    
    const handleInputChange = (event) => {
        setNewTodo({
            ...newTodo,
            [event.target.id]: event.target.value
        });
    }

    const submitNewTodo = (event) => {
        event.preventDefault();
        updateListOfTodos(newTodo);
        setNewTodo(defaultValues);
        navigate('/todos');
    }

    return(
        <>
            <h2> New todo </h2>
            <form onSubmit={submitNewTodo}>
                <div>
                    <label htmlFor="description">
                        Description: 
                    </label>
                    <input type="text"
                           id="description"
                           value={newTodo.description}
                           onChange={handleInputChange}
                           />
                </div>
                <div>
                    <label htmlFor="status">
                        Satus: 
                    </label>
                    <input type="text"
                           id="status"
                           value={newTodo.status}
                           onChange={handleInputChange}
                           />
                </div>
                <button>
                    Add
                </button>
            </form>
        </>
    );
}

export default TodoForm;