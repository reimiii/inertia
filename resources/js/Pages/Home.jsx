import React from 'react';
import App from '../Layout/App';

const Home = (props) => {
    const username = props.username;
    return (
        <App title={`Home`}>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Home
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            Welcome {username}
                        </h5>
                        <div className="card-text">

                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
};

export default Home;
