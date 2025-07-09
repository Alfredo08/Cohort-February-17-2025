import { useContext } from "react";
import Child from "./Child";
import AppContext from "../AppContext";

const Parent = () => {
    const context = useContext(AppContext);

    return(
        <>
            <h2> Inside the Parent component </h2>
            <button onClick={() => context.updateCounter(2)}>
                Update by 2
            </button>
            <Child />
        </>
    );
}

export default Parent;