import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Navbar = () => {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/login">Login</Link>
        </div>
    );
};

export default Navbar;
