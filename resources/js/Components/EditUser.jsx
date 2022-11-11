import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import FormUser from './FormUser';

const EditUser = ({close, model}) => {
    const {data, setData, put, reset, errors} = useForm({
        name: model.name,
        email: model.email,
        username: model.username,
        location: model.location,
        password: model.password,
    });
    const onChange = (e) => setData({...data, [e.target.id]: e.target.value});
    const onSubmit = (e) => {
        e.preventDefault();
        put(route('users.update', model.id), {
            data,
            onSuccess: () => {
                reset();
                close();
            }
        });
    }

    useEffect(() => {
        setData({
            ...data,
            name: model.name,
            email: model.email,
            username: model.username,
            location: model.location,
            password: model.password,
        });
    }, [model]);

    return (
        <form onSubmit={onSubmit}>

            <FormUser data={data} onChange={onChange} errors={errors} submit={`Update`}/>
        </form>
    );
};

export default EditUser;