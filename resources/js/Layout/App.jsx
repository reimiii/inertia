import React from 'react';
import Navbar from '../Components/Navbar';
import { Head } from '@inertiajs/inertia-react';

const App = ({children, title}) => {
    return (
        <div>
            <Head title={title}/>
            <Navbar/>
            <div className="pt-4">

                {children}
            </div>
        </div>
    );
};

export default App;
