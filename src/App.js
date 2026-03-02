import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css';

function App() {
  const appStyle = {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    padding: '2rem'
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#333'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  const subtitleStyle = {
    color: '#666',
    fontSize: '1.1rem'
  };

  return (
    <Provider store={store}>
      <div style={appStyle}>
        <div style={containerStyle}>
          <header style={headerStyle}>
            <h1 style={titleStyle}>📝 Redux Todo App</h1>
            <p style={subtitleStyle}>Manage your tasks with Redux state management</p>
          </header>
          <AddTask />
          <ListTask />
        </div>
      </div>
    </Provider>
  );
}

export default App;
