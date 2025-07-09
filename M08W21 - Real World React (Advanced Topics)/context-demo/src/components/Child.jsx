import { useContext } from "react";
import AppContext from "../AppContext";

const Child = () => {
    const context = useContext(AppContext);

    return(
        <>
            <h2> Inside the Child component </h2>
            <button onClick={() => context.updateCounter(1)}>
                Update by 1
            </button>
            <p> {context.message} </p>
        </>
    );
}

export default Child;