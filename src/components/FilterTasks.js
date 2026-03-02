import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/todosSlice';

const FilterTasks = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.todos.filter);

  const filterContainerStyle = {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  const filterButtonStyle = (filterType) => ({
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backgroundColor: currentFilter === filterType ? '#007bff' : '#e9ecef',
    color: currentFilter === filterType ? 'white' : '#495057',
    boxShadow: currentFilter === filterType ? '0 4px 6px rgba(0,123,255,0.3)' : 'none'
  });

  const filterInfoStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
    fontSize: '0.9rem',
    color: '#6c757d'
  };

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <div style={filterInfoStyle}>
        Current filter: <strong style={{ marginLeft: '0.3rem', color: '#007bff' }}>
          {currentFilter === 'all' ? 'All Tasks' : currentFilter === 'done' ? 'Completed Tasks' : 'Pending Tasks'}
        </strong>
      </div>
      <div style={filterContainerStyle}>
        <button 
          style={filterButtonStyle('all')}
          onClick={() => handleFilterChange('all')}
          onMouseEnter={(e) => {
            if (currentFilter !== 'all') {
              e.target.style.backgroundColor = '#dee2e6';
            }
          }}
          onMouseLeave={(e) => {
            if (currentFilter !== 'all') {
              e.target.style.backgroundColor = '#e9ecef';
            }
          }}
        >
          📋 All Tasks
        </button>
        <button 
          style={filterButtonStyle('done')}
          onClick={() => handleFilterChange('done')}
          onMouseEnter={(e) => {
            if (currentFilter !== 'done') {
              e.target.style.backgroundColor = '#dee2e6';
            }
          }}
          onMouseLeave={(e) => {
            if (currentFilter !== 'done') {
              e.target.style.backgroundColor = '#e9ecef';
            }
          }}
        >
          ✅ Completed
        </button>
        <button 
          style={filterButtonStyle('not')}
          onClick={() => handleFilterChange('not')}
          onMouseEnter={(e) => {
            if (currentFilter !== 'not') {
              e.target.style.backgroundColor = '#dee2e6';
            }
          }}
          onMouseLeave={(e) => {
            if (currentFilter !== 'not') {
              e.target.style.backgroundColor = '#e9ecef';
            }
          }}
        >
          ⏳ Pending
        </button>
      </div>
    </div>
  );
};

export default FilterTasks;
