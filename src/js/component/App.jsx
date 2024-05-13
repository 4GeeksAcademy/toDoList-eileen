import React from 'react';
import TodoList from './TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>My To-Do List</h1>
//      <TodoList />
//     </div>
//   );
// }

function App() {
  return (
    <div className="container">
      <h1 className="mt-5 mb-4 text-short-stack">My To-Do List</h1>
      <TodoList />
    </div>
  );
}



export default App;