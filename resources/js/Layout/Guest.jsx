import React from 'react';
import { Head } from '@inertiajs/inertia-react';

const App = ({children, title}) => {
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <Head title={title}/>
            <div className="col-md-4">
                {children}
            </div>
        </div>
    );
};

export default App;
