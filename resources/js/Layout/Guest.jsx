import React from 'react';
import { Head, Link } from '@inertiajs/inertia-react';

const App = ({children, title}) => {
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <Head title={title}/>
            <div className="col-md-4">
                <Link href={`/`} className="link-dark text-decoration-none">Logo</Link>
                {children}
            </div>
        </div>
    );
};

export default App;
