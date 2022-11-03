import React from 'react';
import Guest from '../../Layout/Guest';
import { Link } from '@inertiajs/inertia-react';

const Login = () => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Login
                </div>
                <div className="card-body">
                    Login Form
                </div>
                <div className="card-footer">
                    <Link href={`/register`} className="link-dark text-decoration-none">Register</Link>
                </div>
            </div>
        </>
    );
};

export default Login;

Login.layout = (page) => <Guest children={page} title={`Login`}/>
