import React from 'react';
import Navbar from '../Components/Navbar';
import { Head } from '@inertiajs/inertia-react';

const App = ({children, title}) => {
    return (
        <div>
            <Head title={title}/>
            <Navbar/>
            {children}
        </div>
    );
};

export default App;
