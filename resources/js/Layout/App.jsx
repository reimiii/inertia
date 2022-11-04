import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { Head, usePage } from '@inertiajs/inertia-react';
import { toast, Toaster } from 'react-hot-toast';

const App = ({children, title}) => {
    const {flash} = usePage().props;

    useEffect(() => {
       flash.type && toast[flash.type](flash.message);
    }, [])
    return (
        <div>
            <Head title={title}/>
            <Navbar/>
            <div className="pt-4">
                <Toaster/>
                {children}
            </div>
        </div>
    );
};

export default App;
