// TaskList.jsx
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const TaskList = () => {
    const [taskList, setTaskList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== "") {
            setTaskList(prevTaskList => [...prevTaskList, inputValue]); 
            setInputValue(""); 
        } else {
            alert("Write Task");  
        }
    };

    const handleDelete = (index) => {
        setTaskList(prevTaskList => prevTaskList.filter((task, i) => i !== index));
    };

    const handleDeleteAll = () => {
        setTaskList([]);
    };

    // return (
    //     <div>
    //         <form onSubmit={handleSubmit}>
    //             <input
    //                 type="text"
    //                 value={inputValue}
    //                 onChange={handleChange}
    //                 placeholder="Add a task"
    //             />
    //             <button type="submit">Add Task</button>
    //             <button onClick={handleDeleteAll}>Delete all</button>
    //         </form>
    //         <div>
    //             {taskList.map((item, index) => (
    //                 <div key={index}>
    //                     <TaskItem taskName={item} />
    //                     <button onClick={() => handleDelete(index)}>
    //                     <FontAwesomeIcon icon={faCheck} />
    //                     </button>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // );

    return (
        <div className="container mt-5">
            <form className="mb-3" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Add a task"
                    />
                    <button type="submit" className="btn btn-primary">Add Task</button>
                    <button onClick={handleDeleteAll} className="btn btn-danger">Delete all</button>
                </div>
            </form>
            <div>
                {taskList.map((item, index) => (
                    <div key={index} className="mb-2">
                        <TaskItem taskName={item} />
                        <button onClick={() => handleDelete(index)} className="btn btn-success">
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;
