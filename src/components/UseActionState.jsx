import { useState } from 'react';
import { useForm } from '../hooks/useForm';

const updateName = (name) => new Promise(resolve => setTimeout(() => resolve(name), 2000));

export default function UseActionState() {
    const [isPending, setIsPending] = useState(false);

    const formHandler = async (values) => {
        setIsPending(true);
        await updateName(values.name);
        setIsPending(false);
    }

    const { values, submitHandler, changeHandler } = useForm(formHandler, { name: '' });

    return (
        <>
            <h2>useActionState</h2>
            <form onSubmit={submitHandler}>
                <input type="text" name="name" value={values.name} onChange={changeHandler} />
                <button type="submit" disabled={isPending}>Update</button>
            </form>
        </>
    );
}
