import { useState } from "react"
import { useNavigate } from "react-router-dom";

const TodoForm = ({addTodo}) => {
    const defaultValues = {
        description: "",
        status: "",
        id: -1
    };

    const navigation = useNavigate();
    const [newTodo, setNewTodo] = useState(defaultValues);

    const updateField = (event) => {
        setNewTodo({
            ...newTodo,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmitTodoForm = (event) => {
        event.preventDefault();
        addTodo(newTodo);
        setNewTodo(defaultValues);
        navigation("/todos");
    }

    return(
        <>
            <h2> Add todo </h2>
            <form onSubmit={handleSubmitTodoForm}>
                <div>
                    <label htmlFor="description">
                        Descripcion: 
                    </label>
                    <input type="text"
                           name="description"
                           value={newTodo.description}
                           onChange={updateField}
                           />
                </div>
                <div>
                    <label htmlFor="status">
                        Status: 
                    </label>
                    <input type="text"
                           name="status"
                           value={newTodo.status}
                           onChange={updateField}
                           />
                </div>
                <div>
                    <label htmlFor="id">
                        Id: 
                    </label>
                    <input type="number"
                           name="id"
                           value={newTodo.id}
                           onChange={updateField}
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