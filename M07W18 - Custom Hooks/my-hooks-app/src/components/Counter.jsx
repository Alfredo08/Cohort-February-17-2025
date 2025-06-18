import useCounter from "../hooks/useCounter";

const Counter = ({initialValue, valueToAdd, valueToSubtract}) => {
    const [counter, setAddCounter, setSubtractCounter] = useCounter(initialValue,
                                                                    valueToAdd,
                                                                    valueToSubtract);
    
    return(
        <>
            <div> Counter: {counter} </div>
            <div>
                <button onClick={setAddCounter}>
                Add {valueToAdd} to counter 
                </button>
                <button onClick={setSubtractCounter}>
                Subtract {valueToSubtract} from counter 
                </button>
            </div>
        </>
    );
}

export default Counter;