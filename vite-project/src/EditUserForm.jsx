import React, { useState } from 'react';
import axios from 'axios';

const EditUserForm = ({ user, onUpdate }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
        ...user,
        name,
        email
      });
      console.log('User updated:', response.data);
      onUpdate(response.data); // Update parent component state or refetch data
    } catch (error) {
      console.error('Error updating user: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
};
export default EditUserForm;
