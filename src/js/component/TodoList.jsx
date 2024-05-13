import React, { useState } from 'react'; 
import TaskList from './TaskList.jsx';


function TodoList() {
    return (
        <div className="todoList">
          <TaskList />
        </div>
      );
    }
    
export default TodoList;