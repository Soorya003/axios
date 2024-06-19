import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditUserForm from './EditUserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map(user => user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const filteredUsers = users.filter(user => user.id !== userId);
      setUsers(filteredUsers);
    } catch (error) {
      console.error('Error deleting user: ', error);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            <EditUserForm user={user} onUpdate={handleUpdateUser} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
