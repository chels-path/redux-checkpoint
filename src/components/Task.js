import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../redux/todosSlice';

const Task = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.description);
  const dispatch = useDispatch();

  const taskStyle = {
    backgroundColor: 'white',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    border: todo.isDone ? '2px solid #28a745' : '2px solid transparent'
  };

  const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flex: '1'
  };

  const checkboxStyle = {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    accentColor: '#28a745'
  };

  const textStyle = {
    fontSize: '1rem',
    color: todo.isDone ? '#999' : '#333',
    textDecoration: todo.isDone ? 'line-through' : 'none',
    wordBreak: 'break-word',
    flex: '1'
  };

  const editInputStyle = {
    flex: '1',
    padding: '0.5rem',
    border: '2px solid #007bff',
    borderRadius: '4px',
    fontSize: '1rem',
    outline: 'none'
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: '0.5rem'
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    transition: 'background-color 0.2s ease'
  };

  const editButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ffc107',
    color: '#333'
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
    color: 'white'
  };

  const saveButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#28a745',
    color: 'white'
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#6c757d',
    color: 'white'
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id: todo.id, description: editText }));
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.description);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <div 
      style={taskStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateX(5px)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateX(0)';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
      }}
    >
      <div style={leftSectionStyle}>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={handleToggle}
          style={checkboxStyle}
        />
        
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={handleKeyPress}
            style={editInputStyle}
            autoFocus
          />
        ) : (
          <span style={textStyle}>{todo.description}</span>
        )}
      </div>

      <div style={buttonGroupStyle}>
        {isEditing ? (
          <>
            <button 
              style={saveButtonStyle}
              onClick={handleSave}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
            >
              💾 Save
            </button>
            <button 
              style={cancelButtonStyle}
              onClick={handleCancel}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#5a6268'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#6c757d'}
            >
              ❌ Cancel
            </button>
          </>
        ) : (
          <>
            <button 
              style={editButtonStyle}
              onClick={handleEdit}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#e0a800'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#ffc107'}
            >
              ✏️ Edit
            </button>
            <button 
              style={deleteButtonStyle}
              onClick={handleDelete}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#c82333'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#dc3545'}
            >
              🗑️ Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Task;
