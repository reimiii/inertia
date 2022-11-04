import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';

const Navbar = (props) => {
    const { auth } = usePage().props;

    // console.log(auth.user.location);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={'/dashboard'}>Dashboard</Link>
                        </li>

                    </ul>
                    {auth.user !== null ?
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    {auth.user.username}
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                        </ul>

                        :
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" href={'/login'}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href={'/register'}>Register</Link>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
