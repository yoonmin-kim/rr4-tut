import React from 'react';
import { useParams } from 'react-router';

const Optional = () => {
    const {value} = useParams();
    return (
        <div>
            Value: {value ?? "None"}
        </div>
    );
};

export default Optional;