import React from 'react';
import App from '../Layout/App';

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        Hey, I'm the home page!
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

Home.layout = (page) => <App children={page} title={`Home`}/>
