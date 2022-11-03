import React from 'react';
import App from '../Layout/App';

const Dashboard = () => {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Dashboard
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;

Dashboard.layout = (page) => <App children={page} title={`Dashboard`}/>
