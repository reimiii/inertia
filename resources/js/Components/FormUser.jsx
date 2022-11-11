import React from 'react';

const FormUser = ({errors, data, onChange, submit}) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={data.name} onChange={onChange} id="name"
                               className="form-control"/>
                        {errors.name && <span className="text-danger">{errors.name}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={data.username} onChange={onChange}
                               id="username" className="form-control"/>
                        {errors.username && <span className="text-danger">{errors.username}</span>}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" value={data.email} onChange={onChange}
                               id="email" className="form-control"/>
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="location">Location</label>
                        <input type="text" name="location" value={data.location} onChange={onChange}
                               id="location" className="form-control"/>
                        {errors.location && <span className="text-danger">{errors.location}</span>}
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={data.password} onChange={onChange}
                       id="password" className="form-control"/>
                {errors.password && <span className="text-danger">{errors.password}</span>}
            </div>

            <button type="submit" className="btn btn-primary">{submit}</button>
        </div>
    );
};

export default FormUser;