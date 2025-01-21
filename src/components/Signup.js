// src/components/Signup.js
import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { userSignup } from '../services/productService';

const Signup = () => {
    const { dispatch } = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await userSignup(name, email, password);
        if (user) {
            dispatch({ type: 'LOGIN', payload: user });
        } else {
            alert('Signup failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Signup</button>
        </form>
    );
};

export default Signup;