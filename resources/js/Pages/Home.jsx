import React from 'react';

const Home = (props) => {
    const username = props.username;
    return (
        <div>
            Hello My Name is {username}
        </div>
    );
};

export default Home;
