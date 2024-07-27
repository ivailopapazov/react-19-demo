import { useState } from "react";

const updateName = (name) => new Promise(resolve => setTimeout(() => resolve(name), 2000));

function Submit({ pending }) {
    return <button type="submit" disabled={pending}>Update</button>;
}

export default function UseFormStatus() {
    const [pending, setPending] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        setPending(true)
        await updateName(formData.get('name'));
        setPending(false)

        console.log('Submitted');
        e.target.reset();
    }

    return (
        <>
            <h2>useFormStatus</h2>
            <form onSubmit={submitHandler}>
                <input type="text" name="name" />
                <Submit pending={pending} />
            </form>
        </>
    );
}
