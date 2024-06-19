// src/App.js
import React from 'react';
import './App.css';
import UserList from './UserList.jsx';
import AddUserForm from './AddUserForm.jsx';
import EditUserForm from './EditUserForm.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React AXIOS App</h1>
      </header>
      <main>
        <UserList />
        <AddUserForm />
        <EditUserForm />
      </main>
    </div>
  );
}

export default App;
