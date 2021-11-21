import React from 'react';
import { Outlet, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const User = () => {
    const {username} = useParams();
    return (
        <div>
            <Link to="" style={{marginRight: 16}}>
                @{username}
            </Link>
            <Link to="about">
                About
            </Link>
            <Outlet />
        </div>
    );
};

export default User;