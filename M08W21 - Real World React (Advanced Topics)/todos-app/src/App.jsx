import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import TodoList from './components/TodoList';
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoDetail from './components/TodoDetail';

const App = () => {

  const defaultList = [{
    description: "Learn React",
    status: "in_progress",
    id: "123"
  },
  {
    description: "Learn Node and Express",
    status: "complete",
    id: "456"
  },
  {
    description: "Learn Ruby on Rails",
    status: "pending",
    id: "789"
  }];

  const [todos, setTodos] = useState(defaultList);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  return(
    <>
      <h1> Todos app with Routes </h1>
      <nav>
        <Link to="/todos"> List of todos </Link> -
        <Link to="/new/todo"> Add todo </Link>
      </nav>

      <Routes>
        <Route path="/todos" element={<TodoList todos={todos}/>}/>
        <Route path="/new/todo" element={<TodoForm addTodo={addTodo}/>} />
        <Route path="/todo/detail/:todoId" element={<TodoDetail todos={todos}/>} />
        <Route path="*" element={<div> You have reach a broken link! </div>}/>
      </Routes>
    </>
  );
}

export default App;
