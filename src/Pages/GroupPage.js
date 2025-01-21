import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';

function GroupPage() {
  const { groupName } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/groups/${groupName}/categories`)
      .then(response => setCategories(response.data))
      .catch(error => console.error(error));
  }, [groupName]);

  return (
    <div>
      <h1>{groupName}</h1>
      <ul>
        {categories.map(category => (
          <li key={category._id}>
            <NavLink to={`/category/${category._id}`}>
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GroupPage;