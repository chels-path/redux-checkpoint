import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import FilterTasks from './FilterTasks';

const ListTask = () => {
  const todos = useSelector(state => state.todos.todos);
  const filter = useSelector(state => state.todos.filter);

  const containerStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem'
  };

  const titleStyle = {
    color: '#333',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: 0
  };

  const statsStyle = {
    backgroundColor: '#e9ecef',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#495057'
  };

  const tasksContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const emptyStateStyle = {
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    color: '#6c757d'
  };

  // Filter todos based on current filter
  const getFilteredTodos = () => {
    switch (filter) {
      case 'done':
        return todos.filter(todo => todo.isDone);
      case 'not':
        return todos.filter(todo => !todo.isDone);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();
  const totalTodos = todos.length;
  const doneTodos = todos.filter(t => t.isDone).length;
  const pendingTodos = totalTodos - doneTodos;

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Your Tasks</h2>
        <div style={statsStyle}>
          📊 {doneTodos} done • {pendingTodos} pending • {totalTodos} total
        </div>
      </div>

      <FilterTasks />

      <div style={tasksContainerStyle}>
        {filteredTodos.length > 0 ? (
          filteredTodos.map(todo => (
            <Task key={todo.id} todo={todo} />
          ))
        ) : (
          <div style={emptyStateStyle}>
            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>✨ No tasks found</p>
            <p style={{ fontSize: '0.9rem' }}>Add a new task or change your filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListTask;
