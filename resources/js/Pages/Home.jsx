import React from 'react';
import App from '../Layout/App';

const Home = (props) => {
    const username = props.username;
    return (
        <App title={`Home`}>
            Hello My Name is {username}
        </App>
    );
};

export default Home;
