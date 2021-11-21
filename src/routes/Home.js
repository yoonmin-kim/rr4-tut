import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
          <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/posts/1">Post</Link>
              </li>
              <li>
                <Link to="/users/yoonmin">Users</Link>
              </li>
              <li>
                <Link to="/optional">Optional without value</Link>
              </li>
              <li>
              <Link to="/optional/hello">Optional with value</Link>
              </li>
          </ul>
        </div>
    );
};

export default Home;