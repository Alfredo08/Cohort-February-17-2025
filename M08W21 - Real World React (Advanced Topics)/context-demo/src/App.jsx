
import { useState } from 'react';
import './App.css';
import Grandparent from './components/Grandparent';
import AppContext from './AppContext';

const App = () => {
  const defaultMessage = "Hello there class of Feb 17, 2025";
  const [message, setMessage] = useState(defaultMessage);
  const [counter, setCounter] = useState(0);

  const updateCounter = (val) => {
    setCounter((prev) => prev + val);
  }

  const contextInitialValues = {
    message, updateCounter
  }


  return(
    <AppContext.Provider value={contextInitialValues}>
      <h1> Context demo </h1>
      <p> Counter: {counter} </p>
      <Grandparent/>
    </AppContext.Provider>
  );
}

export default App;
