import React, { useState } from 'react'
import axios from 'axios';

function AddUsers() {

    const [numper, setNumper] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http:localhost:5000/api/users', {
                numper,
                name,
                lastname,
                email,
                password,
                role,
            });
            alert('User created successfully!');
        } catch (error) {
            console.error('Error creating user: ' + error);
            alert('Failed to create user create user');
        }
    };

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Username :</label>
            <input
                type='text'
                value={numper}
                onChange={(e) => setNumper(e.target.value)}
                required
            />
        </div>
        <div>
            <label>Name:</label>
            <input 
                type='text'
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required
            />
        </div>
        <div>
            <label>Last Name:</label>
            <input 
                type='text'
                value={lastname} 
                onChange={(e) => setLastname(e.target.value)} 
                required
            />
        </div>
        <div>
            <label>email:</label>
            <input 
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required
            />
        </div>
        <div>
            <label>password:</label>
            <input
                type='password'value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
            />
        </div>
        <div>
            <label>Role:</label>
            <input 
                type='text'
                value={role} 
                onChange={(e) => setRole(e.target.value)} 
                required
            />
        </div>
        <button type='submit'>Add User</button>
    </form>
  )
}

export default AddUsers