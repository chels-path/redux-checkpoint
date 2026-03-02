import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todosSlice';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const containerStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    marginBottom: '2rem'
  };

  const titleStyle = {
    color: '#333',
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
    fontWeight: 'bold'
  };

  const inputGroupStyle = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  };

  const inputStyle = {
    flex: '1',
    padding: '1rem',
    border: '2px solid #e0e0e0',
    borderRadius: '5px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    minWidth: '250px'
  };

  const buttonStyle = {
    padding: '1rem 2rem',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(addTodo(description));
      setDescription('');
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div style={inputGroupStyle}>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description..."
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = '#28a745'}
            onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
          />
          <button 
            type="submit" 
            style={buttonStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
          >
            <span>➕</span> Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
