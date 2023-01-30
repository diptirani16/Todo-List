import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
  let initTodo;
  console.log(localStorage.getItem("todos"));
  if(localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const addTodo = (note) => {
    let sno;
    if(todos.length == 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      note: note
    }
    setTodos([...todos, myTodo]);
  }

  const onDone = (note) => {
    setTodos(todos.filter((i) => {
      return i !== note
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div className="App">
      <h1 className='text-2xl font-medium text-gray-900 m-2'>TODO LIST</h1>
      <Form addTodo={addTodo} />
      <List todo={todos} onDone={onDone} />
    </div>
  );
}

export default App;
