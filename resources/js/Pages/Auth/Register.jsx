import React from 'react';
import Guest from '../../Layout/Guest';
import { Link } from '@inertiajs/inertia-react';

const Register = () => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Register
                </div>
                <div className="card-body">
                    Register Form
                </div>
                <div className="card-footer">
                    <Link href={`/login`} className="link-dark text-decoration-none">Login</Link>
                </div>
            </div>
        </>
    );
};

export default Register;

Register.layout = (page) => <Guest children={page} title={`Register`}/>
