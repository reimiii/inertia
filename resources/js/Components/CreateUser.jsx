import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import FormUser from './FormUser';

const CreateUser = ({close}) => {
    const {data, setData, post, reset, errors} = useForm({
        name: '',
        email: '',
        username: '',
        location: '',
        password: '',
    });
    const onChange = (e) => setData({...data, [e.target.id]: e.target.value});
    const onSubmit = (e) => {
        e.preventDefault();
        post(route('users.store'), {
            data,
            onSuccess: () => {
                reset();
                close();
            }
        });
    }
    return (
        <form onSubmit={onSubmit}>
            <FormUser data={data} onChange={onChange} errors={errors} submit={`Create`}/>
        </form>
    );
};

export default CreateUser;