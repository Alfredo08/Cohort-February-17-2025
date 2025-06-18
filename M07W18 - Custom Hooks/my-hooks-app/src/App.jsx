import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Pet from './components/Pet';
import useMouseMove from './hooks/useMouseMove';

const App = () => {
  const [coordinates] = useMouseMove();

  return(
    <>
      <h1> Custom Hooks </h1>
      <h2> Coordinates </h2>
      <p> X: {coordinates.x} </p>
      <p> Y: {coordinates.y} </p>

      <Counter initialValue={1} valueToAdd={1} valueToSubtract={1}/>
      <Counter initialValue={1} valueToAdd={5} valueToSubtract={5}/>

      <Pet API_URL="https://dog.ceo/api/breeds/image/random" type="dog"/>
      <Pet API_URL="https://api.thecatapi.com/v1/images/search" type="cat"/>

    </>
  );

  /*
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("The effect just triggered");
  }, []);

  useEffect(() => {
    console.log("Value of count updated", count);
  }, [count]);

  return (
    <>
      <h1> Custom hooks </h1>
      <div> Count: {count} </div>
      <button onClick={() => setCount(count + 1)}>
        Add to count
      </button>
    </>
  );
  */
}

export default App;
