import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

const CreateUser = () => {
    const {data, setData, post, reset} = useForm({
        name: '',
        email: '',
        username: '',
        location: '',
        password: '',
    });
    const onChange = (e) => setData({...data, [e.target.id]: e.target.value});
    const onSubmit = (e) => {
        e.preventDefault();
        post(route('users.store'), {data, onSuccess: () => reset()});
    }
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        Create new user
                    </div>
                    <div className="card-body">
                        <form onSubmit={onSubmit}>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" value={data.name} onChange={onChange} id="name"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name="username" value={data.username} onChange={onChange}
                                               id="username" className="form-control"/>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" name="email" value={data.email} onChange={onChange}
                                               id="email" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="location">Location</label>
                                        <input type="text" name="location" value={data.location} onChange={onChange}
                                               id="location" className="form-control"/>
                                    </div>
                                </div>
                            </div>


                            <div className="mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" value={data.password} onChange={onChange}
                                       id="password" className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CreateUser;