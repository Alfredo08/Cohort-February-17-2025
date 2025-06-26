import { Link, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import ParamComponent from './components/ParamComponent';
import './App.css'
import { useState } from 'react';

const App = () => {
  const defaultTodos = [
    {
      description: "Learn React",
      status: "in_progress"
    },
    {
      description: "Learn Node",
      status: "completed"
    },
    {
      description: "Learn CSS",
      status: "completed"
    },
    {
      description: "Learn Ruby",
      status: "pending"
    }
  ];

  const [todos, setTodos] = useState(defaultTodos);

  const updateListOfTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <h1> Concluding React </h1>
      <nav>
        <Link to="/todos"> List of todos </Link> -
        <Link to="/new/todo"> Add todo </Link>
      </nav>
      <Routes>
        <Route path="/todos" element={<TodoList todos={todos}/>}/>
        <Route path="/new/todo" element={<TodoForm updateListOfTodos={updateListOfTodos}/>} />
        <Route path="/parameter/:identifier/:firstName/:lastName" element={<ParamComponent />} />
        <Route path="*" element={<div> This route doesnt exists. </div>} />
      </Routes>
    </>
  )
}

export default App;
