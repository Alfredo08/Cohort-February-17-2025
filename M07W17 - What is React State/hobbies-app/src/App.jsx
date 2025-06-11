import { useState } from 'react';
import './App.css';
import Hobby from './components/Hobby';
import HobbyFormSingleStateObj from './components/HobbyFormSingleStateObj';

const App = () => {

  const defaultHobbyArray = [{
    name: "Coding in React",
    userId: 123
  }];

  const [name, setName] = useState("Alex Miller");
  const [age, setAge] = useState(25);
  const [hobbies, setHobbies] = useState(defaultHobbyArray);

  const updateHobbyList = (newHobby) => {
    let newList = [...hobbies, newHobby];
    setHobbies(newList);
  }

  const updateAge = (newValue) => {
    setAge(newValue);
  }

  const printHello = () => {
    console.log("Hey there");
  }

  return(
    <>
      <h1> What is React state? </h1>
      <p> {name} - {age} </p>
      <div>
        <button onClick={printHello}>
          Print hello
        </button>
      </div>
      <div>
        <button onClick={() => updateAge(age + 1)}>
          Add one to age
        </button>
      </div>
      <div>
        <button onClick={() => updateAge(age + 5)}>
          Add five to age
        </button>
      </div>
      <HobbyFormSingleStateObj updateHobbyList={updateHobbyList}/>
      <h2> List of hobbies </h2>
      <ul>
        {hobbies.map((hobby, index) => {
          return(<>
            <Hobby hobby={hobby}
                   updateAge={updateAge}
                   age={age}
                   key={index}/>
          </>)
        })}
      </ul>
    </>
  );
}

export default App;
