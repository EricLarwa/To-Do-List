import React, { useState } from 'react';
import {motion} from 'framer-motion';

const TaskInput = () => {
    const [taskName, setTaskName] = useState('');
    const [tasks, setTasks] = useState([]);
  
    const handleChange = (event) => {
      setTaskName(event.target.value);
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = { name: taskName, completed: false };
        setTasks([...tasks, newTask]);
  
        if (taskName.trim() !== '') { 
            setTaskName('');
        }
    };

    const handleCheckboxChange = (index) => {
        const updatedTasks = tasks.map((task, i) =>
          i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
      };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={handleChange}
          placeholder="Enter task name"
        />
        <motion.button
          type="submit"
          className="button-container"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M11 11V3h2v8h8v2h-8v8h-2v-8H3v-2h8z" />
          </svg>
        </motion.button>
        <div>
            <h2>Submitted Tasks:</h2>
            <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(index)}
                />
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.name}
                </span>
                </li>
            ))}
            </ul>
        </div>
      </form>
    );
  };
  
  export default TaskInput;