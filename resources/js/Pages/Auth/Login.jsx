import React from 'react';
import Guest from '../../Layout/Guest';
import { Link, useForm } from '@inertiajs/inertia-react';

const Login = ({errors}) => {

    const {data, setData, post} = useForm({
        email: 'levi.beier@example.com',
        password: 'password',
        remember: '',
    })

    const changeHandler = (e) => {
        const key = e.target.id;
        const value = e.target.value;

        setData({
            ...data,
            [key]: value,
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        post('/login', data);
    }


    return (
        <>
            <div className="card">
                <div className="card-header">
                    Login
                </div>
                <div className="card-body">

                    <form onSubmit={submitHandler} noValidate>
                        <div className="mb-3">
                            <label htmlFor="email" className={`form-label`}>Email</label>
                            <input value={data.email} onChange={changeHandler}
                                   type={`email`} name={`email`} id={`email`} className={`form-control`}/>
                            {errors.email && <div className={`text-danger mt-1`}>{errors.email}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className={`form-label`}>Password</label>
                            <input value={data.password} onChange={changeHandler} type={`password`} name={`password`}
                                   id={`password`} className={`form-control`}/>
                            {errors.password && <div className={`text-danger mt-1`}>{errors.password}</div>}
                        </div>

                        <div className="form-check">
                            <input value={data.remember}
                                   onChange={(e) => setData({...data, remember: e.target.checked})}
                                   type={`checkbox`} name={`remember`}
                                   id={`remember`} className={`form-check-input`}/>
                            <label htmlFor="remember" className={`form-check-label`}>Remember me</label>
                        </div>

                        <button type={`submit`} className={`btn btn-primary mt-3`}>Login</button>
                    </form>
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
