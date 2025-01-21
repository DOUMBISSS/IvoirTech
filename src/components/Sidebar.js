// src/components/Sidebar.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sidebar = ({ onSelectCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:8080/category');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <div className="sidebar">
            <h2>Categories</h2>
            <ul>
                {categories.map(category => (
                    <li key={category._id} onClick={() => onSelectCategory(category._id)}>
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;