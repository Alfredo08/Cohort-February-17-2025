import { useState } from "react";

const HobbyFormSingleStateObj = (props) => {
    
    const [newHobby, setNewHobby] = useState({
        name: "",
        userId: -1
    })

    const handleAddHobby = (event) => {
        event.preventDefault();
        // 1) Prepare the content to send to the DB
        // 2) Fetch request to send the new hobby in a POST
        // 3) In a successfull response, then we update the state
        // 3.1) Unhappy path, unsuccessfull response from the server (Work with a variable in the state for errors)
        props.updateHobbyList(newHobby);
        // 4) Clear out the form inputs with their default valutes
        setNewHobby({
            name: "",
            userId: -1
        });
    }

    const updateField = (event) => {
        setNewHobby({
            ...newHobby,
            [event.target.name]: event.target.value 
        });
    }

    return(
        <>
            <h2> Add hobby </h2>
            <form onSubmit={(event) => handleAddHobby(event)}>
                <div>
                    <label htmlFor="hobbyName">
                        Name:
                    </label>
                    <input type="text"
                           value={newHobby.name}
                           name="name"
                           id="name"
                           onChange={(event) => updateField (event)} />
                </div>
                <div>
                    <label htmlFor="hobbyUserId">
                        UserId:
                    </label>
                    <input type="number"
                           value={newHobby.userId}
                           name="userId"
                           id="userId"
                           onChange={(event) => updateField (event)} />
                </div>
                <button>
                    Add
                </button>
            </form>
        </>
    );
}


export default HobbyFormSingleStateObj;