import { useContext } from "react";
import Parent from "./Parent";
import AppContext from "../AppContext";

const Grandparent = () => {
    const context = useContext(AppContext);
    return (
        <>
            <h2> Inside the Grandparent component </h2>
            <button onClick={() => context.updateCounter(3)}>
                Update by 3
            </button>
            <Parent />
        </>
    );
}

export default Grandparent;