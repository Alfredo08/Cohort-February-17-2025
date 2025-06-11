import { useState } from "react";

const HobbyForm = (props) => {

    const [hobbyName, setHobbyName] = useState("");
    const [hobbyUserId, setHobbyUserId] = useState(-1)

    const handleAddHobby = (event) => {
        event.preventDefault();
        // 1) Prepare the content to send to the DB
        const newHobby = {
            name: hobbyName,
            userId: hobbyUserId
        };
        // 2) Fetch request to send the new hobby in a POST
        // 3) In a successfull response, then we update the state
        // 3.1) Unhappy path, unsuccessfull response from the server (Work with a variable in the state for errors)
        props.updateHobbyList(newHobby);
        // 4) Clear out the form inputs with their default valutes
        setHobbyName("");
        setHobbyUserId(-1);
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
                           value={hobbyName}
                           onChange={(event) => setHobbyName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="hobbyUserId">
                        UserId:
                    </label>
                    <input type="number"
                           value={hobbyUserId}
                           onChange={(event) => setHobbyUserId(Number(event.target.value))} />
                </div>
                <button>
                    Add
                </button>
            </form>
        </>
    );
}

export default HobbyForm;